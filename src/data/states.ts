import statesJson from "./states.json";

export type RuleStatus = "yes" | "limited" | "no";
export type WaitlistStatus = "none" | "mixed" | "possible" | "long";

export interface StateData {
  slug: string;
  name: string;
  programs: string[];
  agency: string;
  spouse: { status: RuleStatus; detail: string };
  parentMinor: { status: RuleStatus; detail: string };
  pay: {
    low: number | null;
    high: number | null;
    unit: "hr" | "day" | "week" | "month" | null;
    display: string | null;
    taxFree: boolean;
    varies: boolean;
    detail: string;
  };
  agencyModel: string;
  waitlist: { status: WaitlistStatus; detail: string };
  apply: string;
  sources: string[];
}

export const states = statesJson as StateData[];

export function getState(slug: string): StateData | undefined {
  return states.find((s) => s.slug === slug);
}

export const wisconsin = getState("wisconsin")!;

/** Relationship keys used by the quiz + quick-start widget. */
export type Relationship =
  | "parent"
  | "spouse"
  | "minorChild"
  | "adultChild"
  | "relative";

/**
 * Match verdict for a state + relationship.
 * Parent / adult-child / other-relative caregivers are broadly allowed wherever
 * self-direction exists (the spouse and parent-of-minor bars target legally
 * responsible relatives). Mississippi is the one state with no self-direction
 * in its main waiver, so relatives there are "limited".
 */
export function matchStatus(s: StateData, rel: Relationship): RuleStatus {
  if (rel === "spouse") return s.spouse.status;
  if (rel === "minorChild") return s.parentMinor.status;
  if (s.slug === "mississippi") return "limited";
  return "yes";
}

export const UNIT_LABEL: Record<string, string> = {
  hr: "/hr",
  day: "/day",
  week: "/week",
  month: "/month",
};
