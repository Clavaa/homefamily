import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import {
  CallButton,
  Breadcrumbs,
  Faq,
  FaqJsonLd,
  HowToJsonLd,
  Money,
  PageHero,
  PageJsonLd,
  ProofBar,
  PayRateModule,
  QuizCta,
  StepTimeline,
  TopCountyLinks,
  VerdictBadge,
  type FaqItem,
  type HeroStat,
} from "@/components/Blocks";
import { site } from "@/site.config";
import { OG_IMAGE } from "@/lib/seo";
import { getState, states, type StateData } from "@/data/states";
import { BESPOKE_STATE_PAGES } from "@/data/counties";
import { countPeople, getStateRollup, pct, topCountiesBy65 } from "@/data/county-facts";

/**
 * /{state}/caregiver-pay/ — "how much do family caregivers get paid in X".
 *
 * The honest version of a page every content mill fakes with a made-up
 * number. Where the research file has a published range we show it; where it
 * doesn't, we say so and explain what actually sets the figure, rather than
 * inventing precision. States with a hand-written version are skipped.
 */

const SLUG = "caregiver-pay";

export function generateStaticParams() {
  return states
    .filter((s) => !(BESPOKE_STATE_PAGES[s.slug] ?? []).includes(SLUG))
    .map((s) => ({ state: s.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ state: string }> };

const WAITLIST_SHORT: Record<string, string> = {
  none: "No waitlist.",
  mixed: "Some programs have no waitlist.",
  possible: "There may be a waitlist — apply early.",
  long: "Waitlists can be long — apply early.",
};

/* ----------------------------------------------------------------- steps -- */
function steps(s: StateData) {
  return [
    {
      title: "Check eligibility",
      duration: "2 minutes",
      body: `Five questions tell you which ${s.name} program fits, and roughly what it pays.`,
    },
    {
      title: "Medicaid + care assessment",
      duration: "usually weeks",
      body: `${s.name} confirms your relative qualifies and how much help they need. The hours in that assessment become your paid hours.`,
    },
    {
      title: "Enrol and hire",
      duration: "after approval",
      body: "Your relative enrols, then names you as their caregiver. Background check, paperwork, done.",
    },
    {
      title: "Get paid",
      duration: "every pay period",
      body: "You log the hours you already work and are paid for them, like any job.",
    },
  ];
}

/* ------------------------------------------------------------------ FAQs -- */
function buildFaqs(s: StateData): FaqItem[] {
  const payAnswer = s.pay.display
    ? s.pay.varies
      ? `Figures reported for ${s.name} land around ${s.pay.display}, but that is a range, not a promise. Your rate is set inside your relative's care plan and budget. We tell you your real number before you enroll.`
      : `Family caregivers in ${s.name} are generally paid ${s.pay.display}.`
    : `${s.name} does not publish a single rate. Pay is set from your relative's assessed needs and the program's budget. Anyone quoting you one flat ${s.name} number is guessing — we get you the real one before you enroll.`;

  return [
    { q: `How much do family caregivers get paid in ${s.name}?`, a: payAnswer },
    {
      q: "What decides my exact hourly rate?",
      a: `Three things: how much help your relative is assessed as needing, which ${s.name} program they are on, and who administers the payroll. ${s.agencyModel}`,
    },
    {
      q: "How many hours a week can I be paid for?",
      a: "Hours come from the care assessment, not from how many you actually work. That is the single biggest thing families get wrong — an honest assessment is worth more than any negotiation later. We help you prepare for it.",
    },
    {
      q: "Is family caregiver pay taxable?",
      a: s.pay.taxFree
        ? `In ${s.name}, some of this pay is reported as tax-free under the IRS difficulty-of-care rules when the caregiver lives with the person receiving care. It depends on your household, so confirm with a tax preparer — but do ask, because many families overpay by not asking.`
        : `Usually yes — it is normally treated as wages, with taxes withheld. One exception is worth asking about: the IRS difficulty-of-care rule can make some payments tax-free when the caregiver lives with the person receiving care.`,
    },
    {
      q: `Can I be paid to care for my spouse in ${s.name}?`,
      a: `${s.spouse.detail} There is a full page on this: see spousal caregiver pay in ${s.name}.`,
    },
    {
      q: `Can a parent be paid for caring for their own child in ${s.name}?`,
      a: s.parentMinor.detail,
    },
    { q: `Is there a waitlist in ${s.name}?`, a: s.waitlist.detail },
    { q: `How do I apply in ${s.name}?`, a: s.apply },
  ];
}

/* --------------------------------------------------------------- metadata */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const s = getState(state);
  if (!s) return {};
  const year = new Date().getFullYear();
  const title = s.pay.display
    ? `Family Caregiver Pay in ${s.name}: ${s.pay.display} (${year})`
    : `How Much Do Family Caregivers Get Paid in ${s.name}?`;
  const description = s.pay.display
    ? `Reported pay for family caregivers in ${s.name} is around ${s.pay.display}. What sets your rate, who pays it, and how to apply. Free 2-minute check.`
    : `${s.name} doesn't publish one flat rate — here's what actually sets your pay, who pays it, and how to apply. No made-up numbers. Free 2-minute check.`;
  const path = `/${s.slug}/${SLUG}/`;
  return {
    title: title.length <= 60 ? title : `Family Caregiver Pay in ${s.name}`,
    description: description.slice(0, 158),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.brand,
      type: "website",
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/* ------------------------------------------------------------------ page */
export default async function CaregiverPayPage({ params }: Props) {
  const { state } = await params;
  const s = getState(state);
  if (!s) notFound();

  const faqs = buildFaqs(s);
  const url = `${site.domain}/${s.slug}/${SLUG}/`;
  const roll = getStateRollup(s.slug);
  const crumbs = [
    { name: s.name, path: `/${s.slug}/` },
    { name: "Caregiver pay", path: `/${s.slug}/${SLUG}/` },
  ];

  return (
    <Shell lang="en" state={{ slug: s.slug, name: s.name }}>
      <PageJsonLd
        url={url}
        name={`What family caregivers are paid in ${s.name}`}
        about={`Pay rates for family caregivers in ${s.name} Medicaid programs`}
        crumbs={crumbs}
      />
      <FaqJsonLd items={faqs} url={url} />
      <HowToJsonLd
        url={url}
        name={`How to get paid as a family caregiver in ${s.name}`}
        description={`The steps from first check to first paycheck for a family caregiver in ${s.name}.`}
        steps={steps(s)}
      />
      <Breadcrumbs crumbs={crumbs} />

      <PageHero
        eyebrow={`See your real ${s.name} number`}
        title={
          <>
            What family caregivers are paid in{" "}
            <span className="text-teal">{s.name}</span>
          </>
        }
        lead={
          s.pay.display
            ? `Around ${s.pay.display}. Your pay is not a posted wage — it comes out of a care budget ${s.name} sets from your relative's assessed needs, which is why two caregivers on the same street can be paid differently.`
            : `${s.name} doesn't publish one flat rate, and we won't invent one. Your pay comes out of a care budget the state sets from your relative's assessed needs. We get you the real number before you enroll.`
        }
        ctaHref={`/qualify/?state=${s.slug}`}
        ctaLabel="See what you'd be paid →"
        statsHeading={`${s.name} at a glance`}
        stats={[
          { label: "Reported pay", value: s.pay.display ?? "Varies", note: s.pay.display ? "set inside the care plan" : "no flat rate published" },
          { label: "Programs", value: String(s.programs.length), note: "that can pay a relative" },
          {
            label: "Spouse pay",
            value: s.spouse.status === "yes" ? "Yes" : s.spouse.status === "limited" ? "Sometimes" : "No",
            note: "full rule on the spouse page",
          },
          {
            label: "Waitlist",
            value: s.waitlist.status === "none" ? "None" : s.waitlist.status === "mixed" ? "Mixed" : s.waitlist.status === "long" ? "Long" : "Possible",
            note: "apply early either way",
          },
        ] satisfies HeroStat[]}
        photo={{
          src: "/photos/qualify-laptop.webp",
          alt: "Hands at a laptop and notepad on a kitchen table",
        }}
      />

      <ProofBar />

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        <PayRateModule state={s} lang="en" />
        <div className="card !p-6">
          <h2 className="display text-lg font-bold text-spruce">
            What sets your number
          </h2>
          <p className="mt-3 leading-relaxed">{s.agencyModel}</p>
          <dl className="mt-4 space-y-3 border-t border-mist pt-4 text-sm leading-relaxed">
            <div className="flex items-start justify-between gap-3">
              <dt className="font-bold text-spruce">Spouse can be paid?</dt>
              <dd>
                <VerdictBadge status={s.spouse.status} />
              </dd>
            </div>
            <div className="flex items-start justify-between gap-3">
              <dt className="font-bold text-spruce">Parent paid for a child?</dt>
              <dd>
                <VerdictBadge status={s.parentMinor.status} />
              </dd>
            </div>
            <div className="flex items-start justify-between gap-3">
              <dt className="font-bold text-spruce">Waitlist</dt>
              <dd className="text-right text-muted">
                {WAITLIST_SHORT[s.waitlist.status]}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ---------------------------------------------------- Who pays it -- */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-xl bg-mist p-6 sm:p-8">
          <h2 className="display text-2xl font-extrabold text-spruce">
            Where the money comes from
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            This is Medicaid money, not a grant and not a charity. In {s.name}{" "}
            it runs through <strong>{s.programs.join(", ")}</strong>,
            administered by {s.agency}
          </p>
          {roll && (
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              {countPeople(roll.pop65)} people in {s.name} — {pct(roll.share65)}{" "}
              of the state — are 65 or older, spread across{" "}
              {roll.countyCount} counties. The programs on this page exist
              because caring for them at home costs the state far less than a
              nursing home does.
            </p>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------- The timeline -- */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <h2 className="display text-3xl font-extrabold text-spruce">
          From first call to first paycheck
        </h2>
        <div className="mt-6">
          <StepTimeline steps={steps(s)} />
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          How to start in {s.name}: {s.apply}
        </p>
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <Faq
          heading={`${s.name} pay questions, answered honestly`}
          items={faqs}
          id="pay-faq"
        />
        <p className="mt-4 leading-relaxed">
          Married and caring for your husband or wife?{" "}
          <Link
            href={`/${s.slug}/spousal-caregiver/`}
            className="font-semibold text-teal underline"
          >
            Read the spouse rules for {s.name} →
          </Link>
        </p>
        <p className="mt-6 text-xs text-muted">
          Sources:{" "}
          {s.sources.length ? (
            s.sources.map((src, i) => (
              <span key={src}>
                {i > 0 && " · "}
                <a
                  href={src}
                  rel="nofollow noopener"
                  className="underline hover:text-teal"
                >
                  {new URL(src).hostname.replace(/^www\./, "")}
                </a>
              </span>
            ))
          ) : (
            <>{s.name} Medicaid program rules</>
          )}{" "}
          · Population figures from the U.S. Census Bureau · Updated{" "}
          {site.updated}. Rates change — always confirm with the program.
        </p>
      </section>

      <TopCountyLinks
        stateSlug={s.slug}
        stateName={s.name}
        counties={topCountiesBy65(s.slug, 8)}
      />

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <QuizCta lang="en" state={s.slug} />
      </section>
    </Shell>
  );
}
