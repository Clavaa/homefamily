import factsJson from "./county-facts.json";
import { countiesByState, type CountyData } from "./counties";
import { states } from "./states";

/**
 * The real, per-county substance layer.
 *
 * Everything in county-facts.json is a published federal figure — see
 * scripts/build-county-facts.mjs for the exact files and vintages. Nothing on
 * a county page may claim a local number that does not come from here.
 *
 * Derived values (shares, state ranks, national comparisons) are computed
 * from those same figures, never assumed.
 */

export interface RawCountyFacts {
  /** July 1, 2024 population estimate. */
  pop: number;
  /** Residents 65 and older. */
  pop65: number;
  /** Residents 75 and older. */
  pop75: number;
  /** Residents 85 and older. */
  pop85: number;
  medianAge: number;
  /** USDA Rural-Urban Continuum Code, 1 (big metro) – 9 (most remote). */
  rucc: number | null;
  /** Largest towns/cities inside the county: [name, population]. */
  places: [string, number][];
}

interface FactsFile {
  vintage: { pop: string; places: string; rucc: string };
  counties: Record<string, RawCountyFacts>;
}

const file = factsJson as unknown as FactsFile;
export const VINTAGE = file.vintage;
const raw = file.counties;

/* --------------------------------------------------------------- national */
const allFips = Object.keys(raw);
const nationalPop = allFips.reduce((a, f) => a + raw[f].pop, 0);
const nationalPop65 = allFips.reduce((a, f) => a + raw[f].pop65, 0);
/** Share of all U.S. residents who are 65+, computed from the county file. */
export const NATIONAL_SHARE_65 = nationalPop65 / nationalPop;

/* ------------------------------------------------------------ state rollup */
export interface StateRollup {
  pop: number;
  pop65: number;
  share65: number;
  /** County FIPS ordered by 65+ population, largest first. */
  rank65: string[];
  countyCount: number;
}

const stateRollups = new Map<string, StateRollup>();
for (const s of states) {
  const list = countiesByState[s.slug] ?? [];
  const rows = list.map((c) => raw[c.fips]).filter(Boolean);
  if (!rows.length) continue;
  const pop = rows.reduce((a, r) => a + r.pop, 0);
  const pop65 = rows.reduce((a, r) => a + r.pop65, 0);
  const rank65 = [...list]
    .filter((c) => raw[c.fips])
    .sort((a, b) => raw[b.fips].pop65 - raw[a.fips].pop65)
    .map((c) => c.fips);
  stateRollups.set(s.slug, {
    pop,
    pop65,
    share65: pop65 / pop,
    rank65,
    countyCount: list.length,
  });
}

export function getStateRollup(stateSlug: string): StateRollup | undefined {
  return stateRollups.get(stateSlug);
}

/* -------------------------------------------------------------- archetypes */
/**
 * How a county is shaped decides what a family there should actually do, so
 * the page copy branches on it. Thresholds are about the lived reality of
 * finding care, not marketing tiers:
 *  - bigMetro / metro: agencies compete, but waitlists and turnover are real
 *  - smallCity: one or two agencies, thin evening and weekend coverage
 *  - rural: agencies may not staff the whole county
 *  - frontier: often no agency at all — self-direction is the only realistic path
 */
export type Archetype = "bigMetro" | "metro" | "smallCity" | "rural" | "frontier";

function archetype(f: RawCountyFacts): Archetype {
  const rucc = f.rucc ?? 9;
  if (rucc <= 1 && f.pop >= 250_000) return "bigMetro";
  if (rucc <= 3) return f.pop >= 100_000 ? "metro" : "smallCity";
  if (rucc >= 8 || f.pop < 6_000) return "frontier";
  if (rucc <= 5) return "smallCity";
  return "rural";
}

/** Plain-words label for the county's setting — used in copy, not as a claim. */
const SETTING: Record<Archetype, string> = {
  bigMetro: "a large metro county",
  metro: "a metro county",
  smallCity: "a smaller-city county",
  rural: "a rural county",
  frontier: "one of the most rural counties in the country",
};

/* ------------------------------------------------------------ public shape */
export interface CountyFacts extends RawCountyFacts {
  fips: string;
  /** 65+ as a share of county residents. */
  share65: number;
  /** 85+ as a share of county residents. */
  share85: number;
  archetype: Archetype;
  setting: string;
  /** 1-based rank among the state's counties by 65+ population. */
  rank65: number;
  /** How many counties the state has (for "3rd of 72"). */
  stateCountyCount: number;
  /** county 65+ share minus the state's 65+ share, in percentage points. */
  vsStatePts: number;
  /** county 65+ share minus the national 65+ share, in percentage points. */
  vsNationPts: number;
  /** Largest towns, biggest first, already trimmed for display. */
  towns: { name: string; pop: number }[];
}

export function getCountyFacts(
  stateSlug: string,
  county: CountyData
): CountyFacts | undefined {
  const f = raw[county.fips];
  if (!f) return undefined;
  const roll = stateRollups.get(stateSlug);
  const share65 = f.pop65 / f.pop;
  const share85 = f.pop85 / f.pop;
  return {
    ...f,
    fips: county.fips,
    share65,
    share85,
    archetype: archetype(f),
    setting: SETTING[archetype(f)],
    rank65: roll ? roll.rank65.indexOf(county.fips) + 1 : 0,
    stateCountyCount: roll ? roll.countyCount : 0,
    vsStatePts: roll ? (share65 - roll.share65) * 100 : 0,
    vsNationPts: (share65 - NATIONAL_SHARE_65) * 100,
    towns: f.places.map(([name, pop]) => ({ name, pop })),
  };
}

/* ------------------------------------------------------------- formatting */
/** 92,821 → "92,800"; 1,575,174 → "1.6 million"; 48 → "48". */
export function countPeople(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `${m >= 10 ? Math.round(m) : m.toFixed(1)} million`;
  }
  if (n >= 10_000) return (Math.round(n / 100) * 100).toLocaleString("en-US");
  if (n >= 1_000) return (Math.round(n / 10) * 10).toLocaleString("en-US");
  return n.toLocaleString("en-US");
}

/** 0.1578 → "16%"; small shares keep a decimal so they don't read as zero. */
export function pct(share: number): string {
  const p = share * 100;
  return p < 10 ? `${p.toFixed(1)}%` : `${Math.round(p)}%`;
}

/** "1st", "2nd", "3rd", "11th" … */
export function ordinal(n: number): string {
  const rem100 = n % 100;
  if (rem100 >= 11 && rem100 <= 13) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

/** ["Madison", "Sun Prairie", "Fitchburg"] → "Madison, Sun Prairie and Fitchburg" */
export function listNames(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}
