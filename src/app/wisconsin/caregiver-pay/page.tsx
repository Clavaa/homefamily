import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Shell from "@/components/Shell";
import {
  CallButton,
  Faq,
  FaqJsonLd,
  Money,
  PayRateModule,
  QuizCta,
} from "@/components/Blocks";
import { site } from "@/site.config";
import { wisconsin } from "@/data/states";

export const metadata: Metadata = pageMeta({
  title: "How Much Do Wisconsin Family Caregivers Make? (2026 Rates)",
  description:
    "Wisconsin family caregivers typically earn $12–$17/hr through IRIS and related Medicaid programs. How the rate is set, how you're paid, and how to start.",
  path: "/wisconsin/caregiver-pay/",
});

const faqs = [
  {
    q: "What's the real hourly number?",
    a: "Most Wisconsin family caregivers earn about $12 to $17 per hour. Wisconsin doesn't publish one flat rate — your wage is set inside your loved one's IRIS budget. We tell you your real number before you enroll.",
  },
  {
    q: "Who decides my rate?",
    a: "The IRIS budget does. Your loved one's care needs set the budget, and your wage comes out of it. Higher care needs generally mean more approved hours.",
  },
  {
    q: "How often do I get paid?",
    a: "Weekly, by direct deposit, through a state-approved payroll agent. It works like a normal paycheck, with taxes taken out.",
  },
  {
    q: "Is the pay taxed?",
    a: "Usually yes — it's real wages, so normal payroll taxes apply. Some live-in caregivers qualify for a federal tax break called the difficulty-of-care rule. A tax preparer can tell you if you do.",
  },
  {
    q: "How many hours can I work?",
    a: "It depends on the care plan. The program approves hours based on how much help your loved one needs each week. The 2-minute check is the fastest way to get your estimate.",
  },
  {
    q: "Does this cost my family anything?",
    a: "No. The program pays for the care. Applying is free, and our help is free — we're paid by the program, never by you.",
  },
];

const mathRows = [
  { hours: 20, low: 240, high: 340 },
  { hours: 30, low: 360, high: 510 },
  { hours: 40, low: 480, high: 680 },
];

export default function CaregiverPayPage() {
  const url = `${site.domain}/wisconsin/caregiver-pay/`;
  return (
    <Shell lang="en">
      <FaqJsonLd items={faqs} url={url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumbs`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${site.domain}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Wisconsin",
                item: `${site.domain}/wisconsin/`,
              },
              { "@type": "ListItem", position: 3, name: "Wisconsin caregiver pay rates", item: url },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: "How Much Do Family Caregivers Get Paid in Wisconsin?",
            inLanguage: "en-US",
            isPartOf: { "@id": `${site.domain}/#organization` },
            breadcrumb: { "@id": `${url}#breadcrumbs` },
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/wisconsin/" className="text-teal underline">
            Wisconsin
          </Link>{" "}
          / Caregiver pay
        </nav>
        <h1 className="display mt-2 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-spruce sm:text-5xl">
          How much do family caregivers get{" "}
          <span className="text-pay">paid</span> in{" "}
          <span className="text-teal">Wisconsin</span>?
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          The short answer: typically <Money>$12–$17/hr</Money>, paid weekly.
          Here's how the number is set — and how to find yours.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/qualify/?state=wisconsin" className="btn-primary">
            See if you qualify →
          </Link>
          <CallButton />
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        <PayRateModule state={wisconsin} lang="en" />
        <div className="card !p-6">
          <h2 className="display text-lg font-bold text-spruce">
            What that adds up to
          </h2>
          <p className="mt-1 text-xs text-muted">
            Example math only — your approved hours come from the care plan.
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-mist text-xs font-bold uppercase tracking-wide text-muted">
                  <th scope="col" className="py-2 pr-4">Hours / week</th>
                  <th scope="col" className="py-2">Weekly pay range</th>
                </tr>
              </thead>
              <tbody>
                {mathRows.map((r) => (
                  <tr key={r.hours} className="border-b border-mist">
                    <td className="tnum py-2.5 pr-4 font-semibold text-spruce">
                      {r.hours} hrs
                    </td>
                    <td className="py-2.5">
                      <Money>
                        ${r.low}–${r.high}
                      </Money>
                      <span className="text-xs text-muted"> /week</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-xl bg-mist p-6 sm:p-8">
          <h2 className="display text-2xl font-extrabold text-spruce">
            How the rate is set, in plain words
          </h2>
          <ol className="mt-4 max-w-2xl space-y-3">
            {[
              "The state checks how much help your loved one needs. More needs, bigger budget.",
              "That budget pays for care — including your wage as the family caregiver.",
              "A payroll agent (GT Independence, iLIFE, or Premier) sends your pay every week and handles taxes.",
            ].map((s, i) => (
              <li key={s} className="flex gap-3 leading-relaxed">
                <span aria-hidden="true" className="display flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal font-bold text-white">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <Faq heading="Pay questions, answered" items={faqs} id="pay-faq" />
        <p className="mt-6 text-xs text-muted">
          Sources: Wisconsin DHS (dhs.wisconsin.gov/iris) ·
          medicaidplanningassistance.org · Updated {site.updated}. Rates vary —
          always confirm with the program.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <QuizCta lang="en" state="wisconsin" />
      </section>
    </Shell>
  );
}
