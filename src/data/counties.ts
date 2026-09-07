import countiesJson from "./counties.json";
import { states } from "./states";

/**
 * County data layer.
 *
 * Source: src/data/counties.json — all 3,144 U.S. counties and county
 * equivalents keyed by state name, population-sorted (2020+ Census figures).
 *
 * Slug rules:
 *  - kebab-case; apostrophes removed ("O'Brien" → "obrien",
 *    "Prince George's" → "prince-georges"); periods collapse
 *    ("St. Clair" → "st-clair"); diacritics folded ("Doña Ana" → "dona-ana")
 *  - " County" / " Parish" stripped ("Dane County" → "dane") UNLESS another
 *    county-equivalent in the same state shares the base name (Baltimore
 *    city/County, St. Louis city/County, Fairfax, Richmond, Roanoke,
 *    Franklin in VA) — those keep their full suffixed slug so the URL is
 *    never ambiguous
 *  - other equivalents (Borough, Census Area, Municipality, "city", …) keep
 *    their suffix in the slug
 *  - any slug that would collide with a literal Next.js subroute under the
 *    state segment (e.g. /wisconsin/iris/) is excluded from static params —
 *    RESERVED_STATE_SUBROUTES below.
 */

export interface CountyData {
  /** URL segment under /{state}/ */
  slug: string;
  /** Full census name, e.g. "St. Tammany Parish", "Richmond city" */
  name: string;
  /** Display name, e.g. "St. Tammany Parish", "Richmond City" */
  display: string;
  /** Base name without the suffix, e.g. "St. Tammany" */
  short: string;
  pop: number;
  fips: string;
}

/**
 * Money-page routes that exist under EVERY state segment, so no county may
 * take these slugs: /{state}/caregiver-pay/, /{state}/spousal-caregiver/.
 */
export const UNIVERSAL_STATE_SUBROUTES = [
  "caregiver-pay",
  "spousal-caregiver",
] as const;

/**
 * States that have a hand-written version of a universal subroute. The
 * literal route wins in Next.js, so the dynamic template must skip these
 * states in generateStaticParams or the two collide at build time.
 */
export const BESPOKE_STATE_PAGES: Record<string, string[]> = {
  wisconsin: ["caregiver-pay", "spousal-caregiver"],
};

/** Extra literal (non-dynamic) routes under a specific state segment. */
export const RESERVED_STATE_SUBROUTES: Record<string, string[]> = {
  wisconsin: ["iris"],
};

export const STATE_ABBR: Record<string, string> = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  "District of Columbia": "DC",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};

const STRIPPABLE = / (County|Parish)$/;
const ANY_SUFFIX =
  / (County|Parish|Borough|Census Area|Municipality|city|City and Borough|Planning Region)$/;

function kebab(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // fold diacritics (Doña → Dona)
    .replace(/['’]/g, "") // drop apostrophes (O'Brien → OBrien)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** "Richmond city" → "Richmond City" (reads naturally in copy). */
function displayName(name: string): string {
  return name.replace(/ city$/, " City");
}

type RawCounty = { county: string; pop: number; fips: string };
const raw = countiesJson as Record<string, RawCounty[]>;

function buildStateCounties(stateName: string, rows: RawCounty[]): CountyData[] {
  // Base names that appear more than once (e.g. Richmond city + Richmond County)
  // must keep their suffix so the slug stays unambiguous.
  const baseCounts = new Map<string, number>();
  for (const r of rows) {
    const base = kebab(r.county.replace(ANY_SUFFIX, ""));
    baseCounts.set(base, (baseCounts.get(base) ?? 0) + 1);
  }
  return rows.map((r) => {
    const bare = r.county.replace(ANY_SUFFIX, "");
    const ambiguous = (baseCounts.get(kebab(bare)) ?? 0) > 1;
    const stripped = r.county.replace(STRIPPABLE, "");
    const slug = ambiguous ? kebab(r.county) : kebab(stripped);
    const display = displayName(r.county);
    return {
      slug,
      name: r.county,
      display,
      // Ambiguous pairs (Richmond City / Richmond County) keep their suffix
      // everywhere the short label is used, so no chip or heading is unclear.
      short: ambiguous ? display : bare,
      pop: r.pop,
      fips: r.fips,
    };
  });
}

/** Counties per state slug, population-sorted (largest first). */
export const countiesByState: Record<string, CountyData[]> = {};
for (const [stateName, rows] of Object.entries(raw)) {
  const state = states.find((s) => s.name === stateName);
  if (!state) continue;
  const reserved = new Set<string>([
    ...UNIVERSAL_STATE_SUBROUTES,
    ...(RESERVED_STATE_SUBROUTES[state.slug] ?? []),
  ]);
  countiesByState[state.slug] = buildStateCounties(stateName, rows).filter(
    (c) => !reserved.has(c.slug)
  );
}

export function getCounties(stateSlug: string): CountyData[] {
  return countiesByState[stateSlug] ?? [];
}

export function getCounty(
  stateSlug: string,
  countySlug: string
): CountyData | undefined {
  return getCounties(stateSlug).find((c) => c.slug === countySlug);
}

/**
 * Nearby counties for the "families nearby" link block: the counties closest
 * to this one in the state's population ranking (a stable, meaningful order —
 * similar-sized communities), 5–8 of them.
 */
export function nearbyCounties(
  stateSlug: string,
  countySlug: string,
  want = 6
): CountyData[] {
  const list = getCounties(stateSlug);
  const i = list.findIndex((c) => c.slug === countySlug);
  if (i === -1) return [];
  const n = Math.min(want, list.length - 1);
  const out: CountyData[] = [];
  let lo = i - 1;
  let hi = i + 1;
  while (out.length < n && (lo >= 0 || hi < list.length)) {
    if (hi < list.length) out.push(list[hi++]);
    if (out.length < n && lo >= 0) out.push(list[lo--]);
  }
  return out;
}

/** "About 665,000 people" — honest rounding for population framing. */
export function approxPop(pop: number): string {
  let rounded: number;
  if (pop >= 1_000_000) rounded = Math.round(pop / 100_000) * 100_000;
  else if (pop >= 100_000) rounded = Math.round(pop / 10_000) * 10_000;
  else if (pop >= 10_000) rounded = Math.round(pop / 1_000) * 1_000;
  else rounded = Math.round(pop / 100) * 100;
  return rounded.toLocaleString("en-US");
}
