import adjacencyJson from "./adjacency.json";
import { countiesByState, STATE_ABBR, type CountyData } from "./counties";
import { states, type StateData } from "./states";

/**
 * Who actually touches whom.
 *
 * Built from the Census county adjacency file — see
 * scripts/build-adjacency.mjs. Used for the cross-links at the bottom of
 * every county and state page, so "nearby" means nearby rather than
 * "similarly sized", which is what it used to mean.
 *
 * 14 of our 3,144 counties aren't in the federal file: Connecticut replaced
 * its counties with planning regions in 2022, and a few Alaska areas were
 * redrawn. Those fall back to the population-rank ordering, which is a worse
 * answer but never an empty one.
 */
interface AdjacencyFile {
  /** county FIPS → touching county FIPS */
  counties: Record<string, string[]>;
  /** state FIPS → touching state FIPS */
  states: Record<string, string[]>;
}

const adj = adjacencyJson as AdjacencyFile;

/** FIPS → the county record, across every state (neighbours cross state lines). */
const byFips = new Map<string, { county: CountyData; state: StateData }>();
for (const s of states) {
  for (const c of countiesByState[s.slug] ?? []) {
    byFips.set(c.fips, { county: c, state: s });
  }
}

const stateByFips = new Map<string, StateData>();
for (const s of states) {
  const first = (countiesByState[s.slug] ?? [])[0];
  if (first) stateByFips.set(first.fips.slice(0, 2), s);
}

export interface NeighborCounty {
  slug: string;
  short: string;
  display: string;
  stateSlug: string;
  stateName: string;
  stateAbbr: string;
  /** True when the neighbour is across a state line. */
  crossState: boolean;
  pop: number;
}

/**
 * Counties that physically touch this one, largest first.
 *
 * Cross-state neighbours are kept and flagged: a family in a border county
 * often lives nearer the next state's county seat than their own, and those
 * links are the only ones on the site that cross a state cluster — which
 * makes them the most valuable ones for a crawler.
 */
export function adjacentCounties(
  stateSlug: string,
  county: CountyData,
  limit = 8
): NeighborCounty[] {
  const fipsList = adj.counties[county.fips];
  if (!fipsList?.length) return [];
  const out: NeighborCounty[] = [];
  for (const f of fipsList) {
    const hit = byFips.get(f);
    if (!hit) continue;
    out.push({
      slug: hit.county.slug,
      short: hit.county.short,
      display: hit.county.display,
      stateSlug: hit.state.slug,
      stateName: hit.state.name,
      stateAbbr: STATE_ABBR[hit.state.name] ?? hit.state.name,
      crossState: hit.state.slug !== stateSlug,
      pop: hit.county.pop,
    });
  }
  // In-state first, then by size — a reader scanning this wants their own
  // state's names to be the ones they recognise.
  return out
    .sort((a, b) => Number(a.crossState) - Number(b.crossState) || b.pop - a.pop)
    .slice(0, limit);
}

/** States that share a border with this one. */
export function neighborStates(stateSlug: string): StateData[] {
  const first = (countiesByState[stateSlug] ?? [])[0];
  if (!first) return [];
  const codes = adj.states[first.fips.slice(0, 2)] ?? [];
  return codes
    .map((c) => stateByFips.get(c))
    .filter((s): s is StateData => Boolean(s) && s!.slug !== stateSlug);
}
