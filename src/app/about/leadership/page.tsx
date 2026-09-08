import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Shell from "@/components/Shell";
import { QuizCta } from "@/components/Blocks";
import { site } from "@/site.config";
import {
  directors,
  executives,
  initialsOf,
  supportRoles,
  vps,
  type Leader,
} from "@/data/leadership";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Our Leadership Team",
    description:
      "Meet the people who run Sunroom Care — the nurses, operators, and support leaders who help families get paid to care for their loved ones.",
    path: "/about/leadership/",
  }),
  // The names in src/data/leadership.ts are placeholders pending real hires —
  // including a titled RN. Publishing invented credentialed staff on a site
  // that enrolls families in Medicaid is not a risk worth taking for a page
  // that ranks for nothing, so this one stays out of the index until the
  // roster is real. Delete this override the day it is.
  robots: { index: false, follow: true },
};

/** Styled initials avatar — no photos of people anywhere on this site. */
function InitialsAvatar({
  name,
  className = "h-16 w-16 text-xl",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`display flex shrink-0 items-center justify-center rounded-full bg-mist font-bold text-spruce ${className}`}
    >
      {initialsOf(name)}
    </span>
  );
}

function LeaderCard({ leader, large = false }: { leader: Leader; large?: boolean }) {
  return (
    <article className={`card flex flex-col ${large ? "!p-6 sm:!p-7" : "!p-5"}`}>
      <InitialsAvatar
        name={leader.name}
        className={large ? "h-20 w-20 text-2xl" : "h-14 w-14 text-lg"}
      />
      <h3
        className={`display mt-4 font-bold text-spruce ${large ? "text-xl" : "text-lg"}`}
      >
        {leader.name}
      </h3>
      <p className="mt-0.5 text-sm font-semibold text-teal">{leader.title}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{leader.bio}</p>
    </article>
  );
}

function TierHeading({ label, note }: { label: string; note: string }) {
  return (
    <div className="mt-12">
      <h2 className="display text-2xl font-extrabold text-spruce sm:text-3xl">
        {label}
      </h2>
      <p className="mt-1 max-w-xl text-muted">{note}</p>
    </div>
  );
}

export default function LeadershipPage() {
  const url = `${site.domain}/about/leadership/`;
  return (
    <Shell lang="en">
      {/* Org-level schema only — no Person JSON-LD for individuals. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: `${site.brand} Leadership`,
            inLanguage: "en-US",
            isPartOf: { "@id": `${site.domain}/#organization` },
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/about/" className="text-teal underline">
            About us
          </Link>{" "}
          / Leadership
        </nav>
        <h1 className="display mt-2 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-spruce sm:text-5xl">
          The people behind <span className="text-teal">{site.brand}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          Helping a family caregiver get paid takes nurses, paperwork experts,
          and people who answer the phone. Here are the leaders who run each
          part — and what each one does for your family.
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ------------------------------------------------ Executive tier */}
        <TierHeading
          label="Executive team"
          note="They set the standards everyone else follows."
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((l) => (
            <LeaderCard key={l.name} leader={l} large />
          ))}
        </div>

        {/* ------------------------------------------------------- VP tier */}
        <TierHeading
          label="Vice presidents"
          note="They lead the teams that do the daily work."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vps.map((l) => (
            <LeaderCard key={l.name} leader={l} />
          ))}
        </div>

        {/* ------------------------------------------------- Director tier */}
        <TierHeading
          label="Directors"
          note="They're closest to families — many talk with caregivers every day."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {directors.map((l) => (
            <LeaderCard key={l.name} leader={l} />
          ))}
        </div>

        {/* --------------------------------- Who supports your family */}
        <section
          aria-labelledby="support-h"
          className="mt-14 rounded-3xl bg-mist p-6 sm:p-8"
        >
          <h2
            id="support-h"
            className="display text-2xl font-extrabold text-spruce sm:text-3xl"
          >
            Who supports your family
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            Leaders set the plan. These are the people who carry it out with
            you, week after week.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportRoles.map((r) => (
              <article key={r.role} className="card !p-5">
                <h3 className="display text-lg font-bold text-spruce">
                  {r.role}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.blurb}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------- CTA */}
        <section className="mt-12">
          <QuizCta lang="en" />
        </section>
      </div>
    </Shell>
  );
}
