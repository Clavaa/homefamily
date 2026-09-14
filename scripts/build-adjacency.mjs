/**
 * build-adjacency.mjs
 * Builds src/data/adjacency.json — which counties actually touch which.
 *
 * "Nearby counties" used to mean counties of similar population rank, which
 * is a meaningful ordering but not what a person means by nearby: it would
 * offer a family in Dane County a link to a county 200 miles away because
 * both happen to be mid-sized. Real adjacency is better for the reader and
 * better for crawl paths, because a county page links to the places its
 * visitors actually live next to.
 *
 * Source: U.S. Census Bureau county adjacency file (keyless).
 * https://www2.census.gov/geo/docs/reference/county_adjacency.txt
 *
 * Also emits state-level adjacency, derived by finding every county pair
 * that touches across a state line — which is exactly what a neighbouring
 * state is.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../data-src/county_adjacency.txt");
const OUT = path.resolve(__dirname, "../src/data/adjacency.json");
const URL_SRC = "https://www2.census.gov/geo/docs/reference/county_adjacency.txt";

if (!fs.existsSync(SRC)) {
  if (fs.existsSync(OUT)) {
    console.log("Adjacency: source not cached — using committed adjacency.json.");
    process.exit(0);
  }
  const res = await fetch(URL_SRC);
  if (!res.ok) throw new Error(`${URL_SRC} → HTTP ${res.status}`);
  fs.mkdirSync(path.dirname(SRC), { recursive: true });
  fs.writeFileSync(SRC, Buffer.from(await res.arrayBuffer()));
}

// The file is latin-1 and tab-separated. A row with a non-empty first column
// starts a new county; rows after it are that county's neighbours.
const text = fs.readFileSync(SRC, "latin1");
const counties = {};
let current = null;

for (const line of text.split(/\r?\n/)) {
  if (!line.trim()) continue;
  const cols = line.split("\t");
  const selfName = cols[0]?.replace(/"/g, "").trim();
  const selfFips = cols[1]?.replace(/"/g, "").trim();
  const neighFips = cols[3]?.replace(/"/g, "").trim();
  if (selfName && selfFips) {
    current = selfFips.padStart(5, "0");
    if (!counties[current]) counties[current] = [];
  }
  if (!current || !neighFips) continue;
  const n = neighFips.padStart(5, "0");
  if (n !== current && !counties[current].includes(n)) counties[current].push(n);
}

/* --------------------------------------------------- state-level adjacency */
const states = {};
for (const [fips, neighbours] of Object.entries(counties)) {
  const a = fips.slice(0, 2);
  for (const n of neighbours) {
    const b = n.slice(0, 2);
    if (a === b) continue;
    (states[a] ??= new Set()).add(b);
  }
}
const stateOut = Object.fromEntries(
  Object.entries(states).map(([k, v]) => [k, [...v].sort()])
);

const countyCount = Object.keys(counties).length;
if (countyCount < 3000) {
  throw new Error(`Expected ~3,100 counties in the adjacency file, got ${countyCount}`);
}

fs.writeFileSync(OUT, JSON.stringify({ counties, states: stateOut }));
console.log(
  `Wrote adjacency for ${countyCount} counties and ${Object.keys(stateOut).length} states`
);
