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
  StepTimeline,
} from "@/components/Blocks";
import { site } from "@/site.config";
import { wisconsin } from "@/data/states";

export const metadata: Metadata = pageMeta({
  title: "Wisconsin IRIS: Hire a Family Member as a Paid Caregiver",
  description:
    "IRIS is Wisconsin's self-directed Medicaid program. You pick your caregiver — even a spouse — and they get paid. No waitlist. Free 2-minute check.",
  path: "/wisconsin/iris/",
});

const faqs = [
  {
    q: "Is IRIS legit?",
    a: "Yes. IRIS is a Wisconsin Medicaid program run by the Wisconsin Department of Health Services. The name stands for Include, Respect, I Self-Direct. It has helped Wisconsin families for years.",
  },
  {
    q: "Can IRIS pay my spouse?",
    a: "Yes. IRIS lets you hire relatives — including a husband or wife. That is rare. Most states don't allow it, and it's one of the best things about Wisconsin's program.",
  },
  {
    q: "Is there a waitlist for IRIS?",
    a: "No. IRIS is an entitlement. That means if you qualify, you get the benefit — no line, no lottery.",
  },
  {
    q: "How does the caregiver get paid?",
    a: "Through a fiscal employer agent — a payroll company approved by the state. Today that's GT Independence, iLIFE, or Premier. They handle taxes and send the paychecks. Wisconsin plans to move to one statewide agent around April 2026.",
  },
  {
    q: "Who can get IRIS?",
    a: "Adults 18 and older who qualify for Wisconsin Medicaid and need long-term care. Children under 18 use a different program, called the CLTS Waiver.",
  },
  {
    q: "How much does IRIS pay?",
    a: "Family caregivers in Wisconsin typically earn about $12 to $17 per hour. The exact wage is set inside your IRIS budget. We'll show you your real number before you enroll.",
  },
];

const steps = [
  {
    title: "Quick check",
    duration: "2 minutes",
    body: "Answer 5 easy questions and see if IRIS fits your family.",
  },
  {
    title: "ADRC screening",
    duration: "1–2 weeks",
    body: "Your local Aging and Disability Resource Center checks eligibility. We help you set it up.",
  },
  {
    title: "Pick IRIS",
    duration: "at the visit",
    body: "After the in-person assessment, you choose IRIS over Family Care. You stay in charge.",
  },
  {
    title: "Hire your caregiver",
    duration: "then weekly pay",
    body: "You hire the family member you trust. The payroll agent sends weekly pay.",
  },
];

export default function IrisPage() {
  const url = `${site.domain}/wisconsin/iris/`;
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
              { "@type": "ListItem", position: 3, name: "Wisconsin IRIS", item: url },
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
            name: "Wisconsin IRIS Program: Hire a Family Member as a Paid Caregiver",
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
          / IRIS
        </nav>
        <h1 className="display mt-2 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-spruce sm:text-5xl">
          Wisconsin <span className="text-teal">IRIS</span>: the program where{" "}
          <span className="text-pay">you</span> pick the caregiver
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          IRIS stands for <strong>Include, Respect, I Self-Direct</strong>. It's
          Wisconsin Medicaid's self-directed program. In plain words: you get a
          budget, you choose who cares for you — even your husband or wife —
          and that person gets paid. There is no waitlist.
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
            Why families choose IRIS
          </h2>
          <ul className="mt-3 space-y-2.5">
            {[
              "You are the employer. You hire the person you trust.",
              "Spouses can be paid — most states say no to this.",
              "No waitlist. Qualify and you're in.",
              "Weekly pay through a state-approved payroll agent.",
            ].map((li) => (
              <li key={li} className="flex items-start gap-2 leading-relaxed">
                <span aria-hidden="true" className="mt-0.5 text-pay">✓</span>
                {li}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <h2 className="display text-3xl font-extrabold text-spruce">
          How IRIS enrollment works
        </h2>
        <div className="mt-6">
          <StepTimeline steps={steps} />
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-mist p-6 sm:p-8">
          <h2 className="display text-2xl font-extrabold text-spruce">
            The money part, in plain words
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            IRIS gives your loved one a care budget. Your wage comes out of
            that budget — typically <Money>$12–$17/hr</Money> for family
            caregivers. A payroll company (called a fiscal employer agent)
            takes out taxes and sends the money every week, like any job.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Today the agents are GT Independence, iLIFE, and Premier. Wisconsin
            plans to move to one statewide agent around April 2026 — your pay
            keeps coming either way.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <Faq heading="IRIS questions, answered" items={faqs} id="iris-faq" />
        <p className="mt-6 text-xs text-muted">
          Sources: Wisconsin DHS (dhs.wisconsin.gov/iris) ·
          medicaidplanningassistance.org · Updated {site.updated}. Rules
          change — always confirm with the program.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <QuizCta lang="en" state="wisconsin" />
      </section>
    </Shell>
  );
}
