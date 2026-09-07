import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/Shell";
import { QuizCta, VerdictBadge } from "@/components/Blocks";
import { site } from "@/site.config";
import { states } from "@/data/states";

const title = "Every State Pays Family Caregivers — Pick Yours";
const description =
  "All 50 states and D.C. have Medicaid programs that pay family caregivers. Pick your state to see its programs, pay rates, and spouse rules.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/states/" },
  openGraph: {
    title,
    description,
    url: "/states/",
    siteName: site.brand,
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
};

export default function StatesPage() {
  const url = `${site.domain}/states/`;
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    inLanguage: "en-US",
    isPartOf: { "@id": `${site.domain}/#organization` },
    about: "State Medicaid programs that pay family caregivers, by state",
  };

  return (
    <Shell lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <h1 className="display max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-spruce sm:text-5xl">
          Every state pays family caregivers.{" "}
          <span className="text-teal">Pick yours.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          All 50 states and Washington, D.C. have Medicaid programs that pay
          family members to care for a loved one at home. The rules and pay are
          different in each one. Pick your state to see yours.
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}/`}
                className="card flex h-full items-center justify-between gap-3 !p-4 no-underline transition-shadow hover:shadow-lg"
              >
                <span className="min-w-0">
                  <span className="display block font-bold text-spruce">
                    {s.name}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted">
                    {s.programs[0]}
                    {s.pay.display ? ` · ${s.pay.display}` : ""}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  <VerdictBadge status={s.spouse.status} />
                  <span aria-hidden="true" className="text-teal">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">
          The badge shows whether a spouse can be paid there ·{" "}
          <abbr title="Updated">Updated</abbr> {site.updated}. Rules change —
          always confirm with the program.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <QuizCta lang="en" />
      </section>
    </Shell>
  );
}
