import Link from "next/link";
import type { StateData } from "@/data/states";
import { getGuide, guidePath } from "@/content";

/**
 * Contextual links from the 3,300 state and county pages into the library.
 *
 * The guides are where the long-tail search demand lands; the state and
 * county pages are where families convert. Linking both ways is what lets
 * each side lift the other. The set is chosen per state — New York gets the
 * CDPAP guide, California IHSS, Structured Family Caregiving states the SFC
 * guide — so the anchor text is always about something the reader's state
 * actually has. A guide that doesn't exist is skipped, never linked.
 */
function slugsFor(s: StateData): string[] {
  const programs = s.programs.join(" ");
  const own =
    s.slug === "new-york"
      ? ["cdpap", "home-care-new-york"]
      : s.slug === "california"
        ? ["ihss"]
        : s.slug === "pennsylvania"
          ? ["home-care-pennsylvania"]
          : /IHSS|ALTCS/.test(programs)
            ? ["ihss"]
            : [];
  if (/Structured Family/.test(programs)) own.push("structured-family-caregiving");
  if (s.parentMinor.status !== "no") own.push("paid-parent-caregiver");
  return [
    "get-paid-to-care-for-family-member",
    ...own,
    "consumer-directed-care",
    "family-caregiver-pay-rates",
    "become-a-paid-caregiver-for-a-family-member",
    "does-medicare-pay-family-caregivers",
    "cost-of-in-home-care",
    "caring-for-aging-parents",
  ];
}

export default function LibraryLinks({
  state,
  place,
}: {
  state: StateData;
  /** County name, on county pages. */
  place?: string;
}) {
  const guides = slugsFor(state)
    .map((slug) => getGuide("guides", slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g))
    .slice(0, 8);
  return (
    <section className="band band-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">Guides</p>
        <h2 className="display h-section mt-2 font-extrabold text-spruce">
          {place ? `For families in ${place}` : `For ${state.name} families`}
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          Start with the{" "}
          <Link href={`/${state.slug}/caregiver-program/`} className="prose-link">
            {state.name} caregiver program
          </Link>
          , then read how the pieces fit together.
        </p>
        {guides.length > 0 && (
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={guidePath(g)} className="prose-link">
                  {g.short}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/guides/" className="prose-link">
                All guides →
              </Link>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}
