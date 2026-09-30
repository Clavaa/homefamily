import Link from "next/link";
import { getGuide, guidePath } from "@/content";
import type { Section } from "@/content/types";

/**
 * A shelf of pillar guides for the home and states pages — the two pages with
 * the most link equity on the site, pointed at the library's hubs and pillars.
 */
const PILLARS: [Section, string][] = [
  ["guides", "get-paid-to-care-for-family-member"],
  ["guides", "medicaid-family-caregiver-program"],
  ["guides", "family-caregiver-pay-rates"],
  ["guides", "cdpap"],
  ["guides", "ihss"],
  ["guides", "does-medicare-pay-family-caregivers"],
  ["guides", "cost-of-in-home-care"],
  ["compare", "freedomcare"],
  ["compare", "home-care-agency-vs-paid-family-caregiver"],
];

export default function GuideShelf({ heading = "Guides for family caregivers" }: { heading?: string }) {
  const items = PILLARS.map(([sec, slug]) => getGuide(sec, slug)).filter(
    (g): g is NonNullable<typeof g> => Boolean(g)
  );
  if (!items.length) return null;
  return (
    <section className="band band-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">The library</p>
        <h2 className="display h-section mt-2 font-extrabold text-spruce">{heading}</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((g) => (
            <Link
              key={g.slug}
              href={guidePath(g)}
              className="card group flex flex-col !p-6 no-underline transition-shadow hover:shadow-[0_12px_32px_-14px_rgba(15,61,68,0.3)]"
            >
              <h3 className="display text-xl font-bold text-spruce group-hover:text-teal">{g.h1}</h3>
              <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{g.description}</p>
              <span className="mt-4 font-semibold text-teal">Read →</span>
            </Link>
          ))}
        </div>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/guides/" className="prose-link">All guides →</Link>
          <Link href="/compare/" className="prose-link">Compare companies →</Link>
        </p>
      </div>
    </section>
  );
}
