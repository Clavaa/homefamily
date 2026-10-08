import { PROGRAM_FILES } from "./programs.generated";

/** One named family-caregiver program in one state (seo/PROGRAM-BRIEF.md). */
export interface ProgramRecord {
  slug: string;
  name: string;
  aka?: string[];
  kind?: string;
  summary: string;
  who_qualifies: string[];
  who_can_be_paid: {
    adult_children_relatives?: string;
    spouse?: string;
    parent_of_minor?: string;
    live_together?: string;
  };
  pay: { display?: string | null; detail?: string };
  hours_or_budget?: string;
  waitlist?: { status?: string; detail?: string };
  self_directed_or_agency?: string;
  how_to_apply: string[];
  contacts?: { name: string; phone?: string; url?: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  sources: string[];
  certainty?: string;
  updated?: string;
}

export function programsFor(stateSlug: string): ProgramRecord[] {
  return PROGRAM_FILES[stateSlug] ?? [];
}

export function getProgram(stateSlug: string, slug: string): ProgramRecord | undefined {
  return programsFor(stateSlug).find((p) => p.slug === slug);
}

/** "yes — …" → { verdict: "yes", text: "…" } for the badge + sentence. */
export function verdictOf(s?: string): { verdict: "yes" | "limited" | "no" | null; text: string } {
  const m = (s ?? "").match(/^\s*(yes|limited|no|required|optional|n\/a)\b\s*[—–:-]?\s*(.*)$/i);
  if (!m) return { verdict: null, text: s ?? "" };
  const v = m[1].toLowerCase();
  return { verdict: v === "yes" || v === "limited" || v === "no" ? (v as "yes" | "limited" | "no") : null, text: m[2] || m[1] };
}
