/**
 * build-data.mjs
 * Parses ../research/familycaregiver_states_ALL.csv into src/data/states.json.
 *
 * Everything user-facing is derived here so pages + quiz share one source of truth:
 *  - "(verify)" research markers are stripped from all display text
 *  - pay rates are extracted into low/high/unit; uncertain figures become ranges
 *    with a "rates vary" note instead of false precision
 *  - spouse / parent-of-minor rules classified into yes | limited | no
 *  - waitlist prose classified into none | mixed | possible | long
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CSV_PATH = path.resolve(
  __dirname,
  "../../research/familycaregiver_states_ALL.csv"
);
const OUT_PATH = path.resolve(__dirname, "../src/data/states.json");

// ---------- tiny CSV parser (handles quoted fields with commas/newlines) ----------
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      if (row.length > 1 || row[0] !== "") rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

// ---------- text cleanup ----------
/** Remove research artifacts: "(verify)", "(verify per waiver)", "(2025, verify)" … */
function clean(text) {
  if (!text) return "";
  let t = text;
  // parentheticals that contain "verify"
  t = t.replace(/\s*\([^()]*verify[^()]*\)/gi, "");
  // dangling "— verify …" / "; verify …" clauses up to sentence end
  t = t.replace(/\s*[—–-]\s*\(?verify[^;.)]*\)?/gi, "");
  t = t.replace(/\s*\bverify\b[^;.)]*/gi, "");
  // leftover empty parens / doubled spaces / space before punctuation
  t = t.replace(/\(\s*\)/g, "");
  t = t.replace(/\s{2,}/g, " ");
  t = t.replace(/\s+([;,.)])/g, "$1");
  t = t.replace(/\(\s*,/g, "(");
  t = t.replace(/,\s*\)/g, ")");
  return t.trim();
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// ---------- rule classification ----------
function classifyRule(text) {
  const t = (text || "").trim().toLowerCase();
  if (t.startsWith("yes")) return "yes";
  if (t.startsWith("limited") || t.startsWith("yes/limited")) return "limited";
  if (t.startsWith("no clear pathway") || t.startsWith("no pathway")) return "no";
  if (t.startsWith("no")) return "no";
  if (t.startsWith("limited/no")) return "limited";
  return "limited"; // unknown → treat cautiously as limited, never a hard no
}

function classifyWaitlist(text) {
  const t = (text || "").toLowerCase();
  const hasNone = /no waitlist|never a waitlist|entitlement/.test(t);
  const hasSome =
    /waitlist (forms|can form|exists|possible|since)|waiting list|interest list|waitlists|capped|can waitlist|waitlist for/.test(
      t
    );
  if (/severe|many years|multi-year|years long|10\+|10,000/.test(t)) return "long";
  if (hasNone && hasSome) return "mixed";
  if (hasNone) return "none";
  return "possible";
}

// ---------- pay extraction ----------
const UNITS = [
  { unit: "hr", re: /\/\s*(?:hour|hr)\b|per hour/gi, min: 8 },
  { unit: "week", re: /\/\s*week\b|per week/gi, min: 50 },
  { unit: "month", re: /\/\s*(?:month|mo)\b|per month/gi, min: 300 },
  { unit: "day", re: /\/\s*day\b|per day/gi, min: 20 },
];

function amountsBeforeTokens(text, tokenRe, minVal) {
  const amounts = [];
  const parts = text.split(tokenRe).filter((p) => p !== undefined);
  // every chunk except the last precedes a token occurrence
  for (let i = 0; i < parts.length - 1; i++) {
    const chunk = parts[i];
    const matches = [...chunk.matchAll(/\$\s?(\d[\d,]*(?:\.\d+)?)/g)];
    if (!matches.length) continue;
    const last = matches[matches.length - 1];
    let picked = [last];
    if (matches.length >= 2) {
      const prev = matches[matches.length - 2];
      const between = chunk.slice(prev.index + prev[0].length, last.index);
      // "$15–$20", "$15 - $20", "$15 to $20"
      if (/^[\s–—\-~+to]*$/.test(between)) picked = [prev, last];
    }
    for (const m of picked) {
      const v = parseFloat(m[1].replace(/,/g, ""));
      if (!Number.isNaN(v) && v >= minVal) amounts.push(v);
    }
  }
  return amounts;
}

function extractPay(rawPay) {
  const cleaned = clean(rawPay);
  for (const { unit, re, min } of UNITS) {
    const amounts = amountsBeforeTokens(cleaned, new RegExp(re.source, "gi"), min);
    if (amounts.length) {
      const low = Math.min(...amounts);
      const high = Math.max(...amounts);
      return { low, high, unit };
    }
  }
  return null;
}

const fmt = (n) =>
  n % 1 === 0
    ? "$" + n.toLocaleString("en-US")
    : "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const UNIT_LABEL = { hr: "/hr", day: "/day", week: "/week", month: "/month" };

function payDisplay(pay) {
  if (!pay) return null;
  const u = UNIT_LABEL[pay.unit];
  if (pay.low === pay.high) return `${fmt(pay.low)}${u}`;
  return `${fmt(pay.low)}–${fmt(pay.high)}${u}`;
}

// ---------- curated short program names (display quality; facts stay in CSV text) ----------
const PROGRAMS = {
  Alabama: ["Personal Choices", "E&D Waiver", "ACT Waiver", "SAIL Waiver"],
  Alaska: ["Personal Care Services (PCS)", "Community First Choice (CFC)", "Children's waivers (CCMC & IDD)"],
  Arizona: ["ALTCS self-directed care", "Agency with Choice", "Parents as Paid Caregivers (PPCG)"],
  Arkansas: ["IndependentChoices", "ARChoices in Homecare"],
  California: ["IHSS (In-Home Supportive Services)"],
  Colorado: ["CDASS", "IHSS", "Family CNA program"],
  Connecticut: ["Adult Family Living (AFL)", "Community First Choice (CFC)", "PCA Waiver", "CT Home Care Program (CHCPE)"],
  Delaware: ["DSHP-Plus self-directed care"],
  "District of Columbia": ["EPD Waiver — Services My Way"],
  Florida: ["SMMC-LTC Participant Directed Option", "CDC+", "Family Home Health Aide (children)"],
  Georgia: ["Structured Family Caregiving (SFC)", "CCSP / SOURCE", "NOW & COMP Waivers", "GAPP (children)"],
  Hawaii: ["QUEST Integration self-direction"],
  Idaho: ["A&D Waiver self-directed care", "Personal Care Services (PCS)", "Certified Family Home"],
  Illinois: ["Community Care Program (CCP)", "Home Services Program (HSP)", "MFTD Waiver (children)"],
  Indiana: ["Structured Family Caregiving (SFC)", "Attendant Care (PathWays & H&W Waivers)"],
  Iowa: ["Consumer Choices Option (CCO)", "CDAC (agency-delivered)"],
  Kansas: ["Frail Elderly Waiver", "Physical Disability Waiver", "Brain Injury Waiver", "Technology Assisted Waiver (children)"],
  Kentucky: ["Participant Directed Services (PDS)", "HCB Waiver", "Michelle P. Waiver"],
  Louisiana: ["Community Choices Waiver", "Monitored In-Home Caregiving (MIHC)", "Children's Choice Waiver"],
  Maine: ["Consumer Directed Attendant Services (Section 12)", "Home & Community Benefits (Section 19)", "Family Home Health Aide (children, 2026)"],
  Maryland: ["Community First Choice (CFC)", "CPAS", "Community Options Waiver", "DDA Waivers (children)"],
  Massachusetts: ["PCA Program", "Adult Foster Care (AFC)", "Frail Elder Waiver"],
  Michigan: ["Home Help Program", "MI Choice Waiver"],
  Minnesota: ["CFSS", "CDCS", "Elderly Waiver"],
  Mississippi: ["Elderly & Disabled Waiver (agency only)", "Independent Living Waiver"],
  Missouri: ["Consumer Directed Services (CDS)", "Structured Family Caregiving Waiver"],
  Montana: ["Big Sky Waiver (self-directed)", "Community First Choice & PCS"],
  Nebraska: ["Personal Assistance Services (PAS)", "Aged & Disabled Waiver"],
  Nevada: ["Personal Care Services (self-directed)", "Structured Family Caregiving Waiver"],
  "New Hampshire": ["Choices for Independence (CFI) Waiver", "PCAS", "In-Home Supports Waiver (children)"],
  "New Jersey": ["Personal Preference Program (PPP)"],
  "New Mexico": ["Turquoise Care Self-Directed Community Benefit", "Mi Via Waiver"],
  "New York": ["CDPAP"],
  "North Carolina": ["CAP/DA (consumer-directed)", "Coordinated Caregiving", "CAP/C (children)"],
  "North Dakota": ["HCBS Waiver — Family Personal Care", "Qualified Service Provider (QSP)", "Family Paid Caregiver Pilot (children)"],
  Ohio: ["PASSPORT Waiver", "Structured Family Caregiving", "Next Generation MyCare", "Ohio Home Care Waiver"],
  Oklahoma: ["ADvantage Waiver — CD-PASS"],
  Oregon: ["Independent Choices Program (ICP)", "Spousal Pay Program", "Consumer-Employed Provider program"],
  Pennsylvania: ["Community HealthChoices (CHC)", "Services My Way", "OBRA Waiver"],
  "Rhode Island": ["Personal Choice Program", "Independent Provider Program"],
  "South Carolina": ["Community Choices Waiver (self-directed)", "Medically Complex Children Waiver"],
  "South Dakota": ["Structured Family Caregiving (HOPE Waiver)"],
  Tennessee: ["TennCare CHOICES consumer direction", "ECF CHOICES", "Katie Beckett (children)"],
  Texas: ["Consumer Directed Services (CDS)", "STAR+PLUS HCBS", "CLASS & MDCP Waivers"],
  Utah: ["DSPD Caregiver Compensation", "New Choices Waiver", "Aging Waiver"],
  Vermont: ["Choices for Care (self-directed)", "Flexible Choices"],
  Virginia: ["CCC Plus Waiver consumer direction", "LRI option (spouses & parents)"],
  Washington: ["Community First Choice (CFC)", "Medicaid Personal Care (MPC)", "Individual Provider (via CDWA)"],
  "West Virginia": ["Aged & Disabled Waiver — Personal Options"],
  Wisconsin: ["IRIS", "Family Care", "Personal Care Services (PCS)", "CLTS Waiver (children)"],
  Wyoming: ["Community Choices Waiver (participant-directed)"],
};

// Wisconsin's CSV pay field is unpublished; range comes from the four-sites
// research corpus (FOUR-SITES-MASTER-PLAN.md: "WI IRIS ~$12–17/hr").
const PAY_OVERRIDES = {
  Wisconsin: { low: 12, high: 17, unit: "hr" },
};

// ---------- main ----------
const raw = fs.readFileSync(CSV_PATH, "utf8");
const rows = parseCsv(raw);
const header = rows[0];
const idx = Object.fromEntries(header.map((h, i) => [h.trim(), i]));

const states = rows.slice(1).map((r) => {
  const name = r[idx.state].trim();
  const payRaw = r[idx.pay_rate] || "";
  const pay = PAY_OVERRIDES[name] || extractPay(payRaw);
  const uncertain = /verify|reported|third-party|secondary|not published|aggregator/i.test(payRaw);
  const spouseTxt = clean(r[idx.spouse_allowed]);
  const parentTxt = clean(r[idx.parent_of_minor_allowed]);
  const waitTxt = clean(r[idx.waitlist]);

  return {
    slug: slugify(name),
    name,
    programs: PROGRAMS[name] || [],
    agency: clean(r[idx.administering_agency]),
    spouse: { status: classifyRule(spouseTxt), detail: spouseTxt },
    parentMinor: { status: classifyRule(parentTxt), detail: parentTxt },
    pay: {
      low: pay ? pay.low : null,
      high: pay ? pay.high : null,
      unit: pay ? pay.unit : null,
      display: payDisplay(pay),
      taxFree: /tax-free/i.test(payRaw),
      varies: !pay || uncertain,
      detail: clean(payRaw),
    },
    agencyModel: clean(r[idx.agency_required]),
    waitlist: { status: classifyWaitlist(waitTxt), detail: waitTxt },
    apply: clean(r[idx.how_to_apply]),
    sources: (r[idx.sources] || "")
      .split(/\s*[|;]\s*/)
      .map((s) => s.trim())
      .filter((s) => s.startsWith("http")),
  };
});

if (states.length !== 51) {
  throw new Error(`Expected 51 states, got ${states.length}`);
}
for (const s of states) {
  if (!s.programs.length) throw new Error(`No curated programs for ${s.name}`);
}

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, JSON.stringify(states, null, 2));

// Slim copy for the client-side quiz bundle (no long prose fields).
const quiz = states.map((s) => ({
  slug: s.slug,
  name: s.name,
  programs: s.programs,
  spouse: s.spouse.status,
  parentMinor: s.parentMinor.status,
  pay: {
    display: s.pay.display,
    varies: s.pay.varies,
    taxFree: s.pay.taxFree,
  },
  waitlist: s.waitlist.status,
}));
const QUIZ_PATH = path.resolve(__dirname, "../src/data/quiz.json");
fs.writeFileSync(QUIZ_PATH, JSON.stringify(quiz));

console.log(
  `Wrote ${states.length} states → ${path.relative(process.cwd(), OUT_PATH)} + quiz.json`
);
