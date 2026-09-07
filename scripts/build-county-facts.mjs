/**
 * build-county-facts.mjs
 * Builds src/data/county-facts.json — the real, per-county substance layer
 * behind every /{state}/{county}/ page. Nothing here is invented: every
 * number traces to a named federal file, and the file vintage ships with the
 * data so pages can cite it.
 *
 * Sources (all keyless public downloads, cached under data-src/):
 *  1. Census Population Estimates, county characteristics (cc-est2024-agesex)
 *     → 2024 population, 65+, 75+, 85+, median age
 *  2. Census Population Estimates, subcounty totals (sub-est2024)
 *     → the actual towns and cities inside each county, with population
 *  3. USDA ERS Rural-Urban Continuum Codes 2023
 *     → metro / nonmetro classification, which genuinely changes the advice
 *
 * Run: npm run data:counties  (cached; pass --refresh to re-download)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, "../data-src");
const OUT_PATH = path.resolve(__dirname, "../src/data/county-facts.json");
const REFRESH = process.argv.includes("--refresh");

/** Vintage strings shown to users on the page ("Source: … 2024 estimates"). */
export const VINTAGE = {
  pop: "U.S. Census Bureau, 2024 Population Estimates (Vintage 2024)",
  places: "U.S. Census Bureau, 2024 Subcounty Population Estimates",
  rucc: "USDA Economic Research Service, Rural-Urban Continuum Codes 2023",
};

const SOURCES = [
  {
    file: "cc-est2024-agesex-all.csv",
    url: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2024/counties/asrh/cc-est2024-agesex-all.csv",
  },
  {
    file: "sub-est2024.csv",
    url: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2024/cities/totals/sub-est2024.csv",
  },
  {
    file: "rucc2023.csv",
    url: "https://ers.usda.gov/sites/default/files/_laserfiche/DataFiles/53251/Ruralurbancontinuumcodes2023.csv",
  },
];

async function ensureSources() {
  fs.mkdirSync(SRC_DIR, { recursive: true });
  for (const s of SOURCES) {
    const dest = path.join(SRC_DIR, s.file);
    if (fs.existsSync(dest) && !REFRESH) continue;
    process.stdout.write(`  fetching ${s.file} … `);
    const res = await fetch(s.url);
    if (!res.ok) throw new Error(`${s.url} → HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log(`${(buf.length / 1e6).toFixed(1)} MB`);
  }
}

/** These federal files are latin-1, not UTF-8 (Doña Ana, Añasco …). */
function readLatin1(file) {
  return fs.readFileSync(path.join(SRC_DIR, file), "latin1");
}

/** Minimal CSV split — these files quote only fields containing commas. */
function splitCsvLine(line) {
  const out = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"') {
        if (line[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") {
      out.push(field);
      field = "";
    } else field += c;
  }
  out.push(field);
  return out;
}

function* rows(file) {
  const text = readLatin1(file);
  const lines = text.split(/\r?\n/);
  const header = splitCsvLine(lines[0]);
  const idx = Object.fromEntries(header.map((h, i) => [h.trim(), i]));
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    yield { cols: splitCsvLine(lines[i]), idx };
  }
}

const num = (v) => {
  const n = Number(String(v ?? "").replace(/[",]/g, ""));
  return Number.isFinite(n) ? n : null;
};

/* ------------------------------------------------ 1. age structure by county */
/** YEAR=6 is the July 1, 2024 estimate (1 = Apr 2020 base, 2 = Jul 2020, …). */
const AGE_YEAR = "6";

function buildAges() {
  const out = new Map();
  for (const { cols, idx } of rows("cc-est2024-agesex-all.csv")) {
    if (cols[idx.YEAR] !== AGE_YEAR) continue;
    const fips = cols[idx.STATE].padStart(2, "0") + cols[idx.COUNTY].padStart(3, "0");
    const pop = num(cols[idx.POPESTIMATE]);
    const p65 = num(cols[idx.AGE65PLUS_TOT]);
    const p85 = num(cols[idx.AGE85PLUS_TOT]);
    const p75 =
      num(cols[idx.AGE7579_TOT]) + num(cols[idx.AGE8084_TOT]) + (p85 ?? 0);
    out.set(fips, {
      pop,
      pop65: p65,
      pop75: p75,
      pop85: p85,
      medianAge: num(cols[idx.MEDIAN_AGE_TOT]),
    });
  }
  return out;
}

/* --------------------------------------------------- 2. towns inside counties */
/**
 * SUMLEV 157 = incorporated place part within a county;
 * SUMLEV 061 = minor civil division (township/town) part within a county —
 * the level that actually carries population in New England, NJ, NY, PA, MI,
 * WI and MN. We take whichever level describes more of the county so the
 * "towns near you" list names places people recognise.
 *
 * Place-parts that straddle counties are summed, and the "(pt.)" marker is
 * dropped once the parts are combined.
 */
const MCD_STATES = new Set([
  "09", "23", "25", "33", "44", "50", // CT ME MA NH RI VT
  "34", "36", "42", "26", "55", "27", // NJ NY PA MI WI MN
]);

function buildPlaces() {
  /** fips → { places: Map<name, pop>, mcds: Map<name, pop> } */
  const acc = new Map();
  const bucket = (fips) => {
    if (!acc.has(fips)) acc.set(fips, { places: new Map(), mcds: new Map() });
    return acc.get(fips);
  };

  for (const { cols, idx } of rows("sub-est2024.csv")) {
    const sumlev = cols[idx.SUMLEV];
    if (sumlev !== "157" && sumlev !== "061") continue;
    const state = cols[idx.STATE];
    const county = cols[idx.COUNTY];
    if (county === "000") continue;
    const fips = state + county;
    const pop = num(cols[idx.POPESTIMATE2024]);
    if (!pop) continue;
    // "Millbrook city (pt.)" → "Millbrook city"; keep the class word for now,
    // it is stripped when the label is rendered.
    const name = cols[idx.NAME].replace(/\s*\(pt\.\)\s*$/, "").trim();
    // "Balance of Dane County" is the unincorporated residual, not a town.
    if (/^Balance of /i.test(name)) continue;
    const map = sumlev === "157" ? bucket(fips).places : bucket(fips).mcds;
    map.set(name, (map.get(name) ?? 0) + pop);
  }

  /** "Sun Prairie city" → "Sun Prairie"; "Town of Madison" stays intact. */
  const CLASS_WORD =
    /\s+(city|town|village|borough|township|charter township|CDP|municipality|urban county|consolidated government|metro government|corporation|plantation|gore|grant|location|reservation)$/i;
  const label = (n) => n.replace(CLASS_WORD, "").trim();

  const out = new Map();
  for (const [fips, { places, mcds }] of acc) {
    const st = fips.slice(0, 2);
    const placeTotal = [...places.values()].reduce((a, b) => a + b, 0);
    const mcdTotal = [...mcds.values()].reduce((a, b) => a + b, 0);
    // MCD states: prefer townships/towns when they cover more of the county.
    const useMcd = MCD_STATES.has(st) && mcdTotal > placeTotal;
    const chosen = useMcd ? mcds : places.size ? places : mcds;
    const list = [...chosen.entries()]
      .map(([name, pop]) => ({ name: label(name), pop }))
      .filter((p) => p.name)
      .sort((a, b) => b.pop - a.pop)
      .slice(0, 8);
    if (list.length) out.set(fips, list);
  }
  return out;
}

/* ------------------------------------------------------ 3. rural / metro code */
/**
 * RUCC 1–3 = metro (by metro-area size); 4–9 = nonmetro, 8–9 being the most
 * remote. The distinction changes what a family should actually do: in a
 * remote county there may be no home-care agency for an hour in any
 * direction, which is precisely why self-directed programs matter there.
 */
function buildRucc() {
  const out = new Map();
  for (const { cols, idx } of rows("rucc2023.csv")) {
    if (cols[idx.Attribute] !== "RUCC_2023") continue;
    const fips = String(cols[idx.FIPS]).padStart(5, "0");
    const code = num(cols[idx.Value]);
    if (code) out.set(fips, code);
  }
  return out;
}

/* --------------------------------------------------------------------- main */
console.log("Building county facts…");
await ensureSources();

const ages = buildAges();
const places = buildPlaces();
const rucc = buildRucc();

console.log(
  `  age rows ${ages.size} · place lists ${places.size} · rucc ${rucc.size}`
);

const facts = {};
for (const [fips, a] of ages) {
  if (fips.endsWith("000")) continue; // state-level rollup rows
  facts[fips] = {
    pop: a.pop,
    pop65: a.pop65,
    pop75: a.pop75,
    pop85: a.pop85,
    medianAge: a.medianAge,
    rucc: rucc.get(fips) ?? null,
    places: (places.get(fips) ?? []).map((p) => [p.name, p.pop]),
  };
}

/* ------------------------------------------------------------- sanity gates */
const count = Object.keys(facts).length;
if (count < 3140 || count > 3150) {
  throw new Error(`Expected ~3,144 counties, got ${count}`);
}
const missingRucc = Object.values(facts).filter((f) => f.rucc === null).length;
const missingPlaces = Object.values(facts).filter((f) => !f.places.length).length;
const bad65 = Object.entries(facts).filter(
  ([, f]) => !f.pop || !f.pop65 || f.pop65 > f.pop
);
if (bad65.length) {
  throw new Error(`Bad 65+ figures for ${bad65.length} counties, e.g. ${bad65[0][0]}`);
}

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(
  OUT_PATH,
  JSON.stringify({ vintage: VINTAGE, counties: facts })
);

console.log(
  `Wrote ${count} counties → ${path.relative(process.cwd(), OUT_PATH)}` +
    ` (no RUCC: ${missingRucc}, no towns: ${missingPlaces})`
);
