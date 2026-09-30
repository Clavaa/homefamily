import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import {
  Breadcrumbs,
  Faq,
  FaqJsonLd,
  HowToJsonLd,
  PageHero,
  PageJsonLd,
  PayRateModule,
  ProofBar,
  QuizCta,
  StepTimeline,
  TopCountyLinks,
  VerdictBadge,
  NeighborStateLinks,
  type FaqItem,
} from "@/components/Blocks";
import { site } from "@/site.config";
import { pageMeta } from "@/lib/seo";
import { neighborStates } from "@/data/adjacency";
import { getState, states, type StateData } from "@/data/states";
import { BESPOKE_STATE_PAGES } from "@/data/counties";
import { countPeople, getStateRollup, pct, topCountiesBy65 } from "@/data/county-facts";
import { PROGRAM_NAMES } from "@/data/program-names";
import { getGuide, guidePath } from "@/content";

/**
 * /{state}/caregiver-program/ — "{state} caregiver program", "paid caregiver
 * {state}", "cdpap {state}", "ihss {state}", "{state} family caregiver
 * program", "{state} medicaid caregiver program".
 *
 * The state money page answers "will they pay me"; this one answers "what is
 * the program called here and how do I get into it". Every block is built
 * from states.json plus the program-name map, so all 51 are real pages with
 * their own facts rather than one page with the name swapped.
 */

const SLUG = "caregiver-program";

export function generateStaticParams() {
  return states
    .filter((s) => !(BESPOKE_STATE_PAGES[s.slug] ?? []).includes(SLUG))
    .map((s) => ({ state: s.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ state: string }> };

const WAITLIST: Record<string, string> = {
  none: "No waitlist reported",
  mixed: "Depends on the program",
  possible: "Waitlist possible",
  long: "Waitlists can be long",
};

/** Research strings sometimes end in a period and sometimes don't. */
const sentence = (t: string) => t.trim().replace(/[.\s]+$/, "") + ".";

function localName(s: StateData): string {
  return PROGRAM_NAMES[s.slug]?.local ?? s.programs[0];
}

function aliasNote(s: StateData): string {
  const n = PROGRAM_NAMES[s.slug];
  if (n) return n.note;
  return `${s.name} has no program called CDPAP or IHSS — those are New York's and California's names. The ${s.name} equivalent runs through ${s.programs.join(", ")}, where the person receiving care can direct their own services and, in most cases, hire a relative.`;
}

function steps(s: StateData) {
  return [
    {
      title: "Check eligibility",
      duration: "2 minutes",
      body: `Five questions show which ${s.name} program fits your family and what it pays.`,
    },
    {
      title: "Medicaid + needs assessment",
      duration: "usually weeks",
      body: `${s.name} confirms Medicaid eligibility and assesses how much help your relative needs. Those hours become your paid hours.`,
    },
    {
      title: "Enroll and name you",
      duration: "after approval",
      body: `Your relative enrolls in ${localName(s)} and names you as their caregiver. Background check and payroll forms follow.`,
    },
    {
      title: "Get paid",
      duration: "every pay period",
      body: "You log the hours you already work and are paid for them, like any job.",
    },
  ];
}

function buildFaqs(s: StateData): FaqItem[] {
  return [
    {
      q: `What is the caregiver program in ${s.name} called?`,
      a: `In ${s.name}, family caregivers are paid through ${s.programs.join(", ")}. ${aliasNote(s)}`,
    },
    {
      q: `Does ${s.name} have CDPAP or IHSS?`,
      a: aliasNote(s),
    },
    {
      q: `How much does ${s.name} pay a family caregiver?`,
      a: s.pay.display
        ? `Reported pay is around ${s.pay.display}. ${sentence(s.pay.detail)}`
        : `${s.name} does not publish one flat rate. ${sentence(s.pay.detail)}`,
    },
    {
      q: `Can I get paid to take care of my spouse in ${s.name}?`,
      a: s.spouse.detail,
    },
    {
      q: `Can a parent be paid to care for a disabled child in ${s.name}?`,
      a: s.parentMinor.detail,
    },
    { q: `Is there a waitlist for the ${s.name} caregiver program?`, a: s.waitlist.detail },
    { q: `How do I apply to be a paid caregiver in ${s.name}?`, a: s.apply },
    {
      q: `Who runs the ${s.name} Medicaid caregiver program?`,
      a: sentence(s.agency),
    },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const s = getState(state);
  if (!s) return {};
  const title = `${s.name} Caregiver Program: Get Paid to Care for Family`;
  return pageMeta({
    title: title.length <= 60 ? title : `${s.name} Paid Family Caregiver Program`,
    description: `How the ${s.name} Medicaid caregiver program pays family members: ${s.programs
      .slice(0, 2)
      .join(" and ")}, pay, spouse rules and how to apply.`.slice(0, 158),
    path: `/${s.slug}/${SLUG}/`,
  });
}

const RELATED_GUIDES = [
  "get-paid-to-care-for-family-member",
  "medicaid-family-caregiver-program",
  "consumer-directed-care",
  "cdpap",
  "ihss",
  "structured-family-caregiving",
  "family-caregiver-pay-rates",
  "does-medicare-pay-family-caregivers",
  "become-a-paid-caregiver-for-a-family-member",
];

export default async function CaregiverProgramPage({ params }: Props) {
  const { state } = await params;
  const s = getState(state);
  if (!s) notFound();

  const faqs = buildFaqs(s);
  const url = `${site.domain}/${s.slug}/${SLUG}/`;
  const roll = getStateRollup(s.slug);
  const crumbs = [
    { name: s.name, path: `/${s.slug}/` },
    { name: "Caregiver program", path: `/${s.slug}/${SLUG}/` },
  ];
  const guides = RELATED_GUIDES.map((slug) => getGuide("guides", slug)).filter(
    (g): g is NonNullable<typeof g> => Boolean(g)
  );

  return (
    <Shell
      lang="en"
      state={{ slug: s.slug, name: s.name }}
      nearbyStates={neighborStates(s.slug).map((n) => ({ slug: n.slug, name: n.name }))}
    >
      <PageJsonLd
        url={url}
        name={`The ${s.name} caregiver program`}
        about={`Medicaid programs in ${s.name} that pay family caregivers`}
        crumbs={crumbs}
      />
      <FaqJsonLd items={faqs} url={url} />
      <HowToJsonLd
        url={url}
        name={`How to become a paid family caregiver in ${s.name}`}
        description={`From first check to first paycheck through ${localName(s)}.`}
        steps={steps(s)}
      />
      <Breadcrumbs crumbs={crumbs} />

      <PageHero
        eyebrow={`Check ${s.name} eligibility`}
        title={
          <>
            The <span className="text-teal">{s.name}</span> caregiver program
          </>
        }
        lead={`${s.name} pays family members to care for a relative at home through ${localName(
          s
        )}. Here is what it is called, who can be paid, what it pays, and how to get in.`}
        ctaHref={`/qualify/?state=${s.slug}`}
        ctaLabel="See if your family qualifies →"
        statsHeading={`${s.name} at a glance`}
        stats={[
          { label: "Programs", value: String(s.programs.length), note: "can pay a relative" },
          { label: "Reported pay", value: s.pay.display ?? "Varies", note: "set in the care plan" },
          {
            label: "Spouse paid?",
            value: s.spouse.status === "yes" ? "Yes" : s.spouse.status === "limited" ? "Sometimes" : "No",
          },
          { label: "Waitlist", value: s.waitlist.status === "none" ? "None" : s.waitlist.status === "long" ? "Long" : "Varies" },
        ]}
      />

      <ProofBar />

      <div className="mx-auto mt-12 max-w-3xl px-4 sm:px-6">
        <section id="programs">
          <h2 className="display text-3xl font-extrabold text-spruce">
            {s.name} programs that pay family caregivers
          </h2>
          <p className="mt-4 leading-relaxed">
            This is Medicaid money — a real, ongoing benefit, not a grant or a
            one-off stipend. In {s.name} it runs through:
          </p>
          <ul className="mt-4 space-y-2 pl-6 leading-relaxed list-disc marker:text-teal">
            {s.programs.map((p) => (
              <li key={p}>
                <strong className="text-spruce">{p}</strong>
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed">
            How it works: {sentence(s.agencyModel)} The programs are administered by {sentence(s.agency)}
          </p>
        </section>

        <section id="cdpap-ihss" className="mt-12">
          <h2 className="display text-3xl font-extrabold text-spruce">
            Is there CDPAP or IHSS in {s.name}?
          </h2>
          <p className="mt-4 leading-relaxed">{aliasNote(s)}</p>
          <p className="mt-4 leading-relaxed">
            Whatever the name, the model is the same one people mean by{" "}
            <Link href="/guides/consumer-directed-care/" className="prose-link">
              consumer-directed care
            </Link>
            : the person who needs help chooses their caregiver, and that
            caregiver can be family. See how{" "}
            <Link href="/guides/cdpap/" className="prose-link">
              CDPAP
            </Link>{" "}
            and{" "}
            <Link href="/guides/ihss/" className="prose-link">
              IHSS
            </Link>{" "}
            work if a relative in New York or California described theirs to you.
          </p>
        </section>
      </div>

      <section id="pay" className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        <PayRateModule state={s} lang="en" />
        <div className="card !p-6">
          <h2 className="display text-2xl font-bold text-spruce">
            Who can be paid in {s.name}
          </h2>
          <dl className="mt-4 space-y-4 text-base leading-relaxed">
            <div>
              <dt className="flex items-center justify-between gap-3 font-bold text-spruce">
                Adult child, grandchild, sibling, friend <VerdictBadge status={s.slug === "mississippi" ? "limited" : "yes"} />
              </dt>
              <dd className="mt-1 text-muted">
                Broadly allowed wherever the program lets the member choose their caregiver.
              </dd>
            </div>
            <div>
              <dt className="flex items-center justify-between gap-3 font-bold text-spruce">
                Spouse <VerdictBadge status={s.spouse.status} />
              </dt>
              <dd className="mt-1 text-muted">{s.spouse.detail}</dd>
            </div>
            <div>
              <dt className="flex items-center justify-between gap-3 font-bold text-spruce">
                Parent of a minor child <VerdictBadge status={s.parentMinor.status} />
              </dt>
              <dd className="mt-1 text-muted">{s.parentMinor.detail}</dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-mist pt-4 text-sm">
            <Link href={`/${s.slug}/spousal-caregiver/`} className="prose-link">
              Full spouse rules for {s.name} →
            </Link>
          </p>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-3xl px-4 sm:px-6">
        <section id="how-much">
          <h2 className="display text-3xl font-extrabold text-spruce">
            How much does {s.name} pay a family caregiver?
          </h2>
          <p className="mt-4 leading-relaxed">
            {s.pay.display
              ? `Reported pay in ${s.name} is around ${s.pay.display}. `
              : `${s.name} does not publish one flat rate. `}
            {sentence(s.pay.detail)}
            {s.pay.taxFree &&
              " Some of this pay can be tax-free under the IRS difficulty-of-care rule when the caregiver lives with the person receiving care."}
          </p>
          <p className="mt-4 leading-relaxed">
            Your hours come from your relative&apos;s needs assessment, not
            from how many hours you actually work — which is why preparing for
            that assessment matters more than anything else. The detail is on
            the{" "}
            <Link href={`/${s.slug}/caregiver-pay/`} className="prose-link">
              {s.name} caregiver pay page
            </Link>
            , and the national picture is in{" "}
            <Link href="/guides/family-caregiver-pay-rates/" className="prose-link">
              family caregiver pay rates by state
            </Link>
            .
          </p>
        </section>

        <section id="waitlist" className="mt-12">
          <h2 className="display text-3xl font-extrabold text-spruce">
            Is there a waitlist in {s.name}?
          </h2>
          <p className="mt-4 leading-relaxed">
            <strong className="text-spruce">{WAITLIST[s.waitlist.status]}.</strong>{" "}
            {sentence(s.waitlist.detail)} Apply early either way — the Medicaid
            financial review and the care assessment take time even where
            there is no list.
          </p>
        </section>

        {roll && (
          <section id="who" className="mt-12">
            <h2 className="display text-3xl font-extrabold text-spruce">
              Why {s.name} pays family instead of an agency
            </h2>
            <p className="mt-4 leading-relaxed">
              {countPeople(roll.pop65)} people in {s.name} — {pct(roll.share65)} of
              the state — are 65 or older, across {roll.countyCount} counties.
              There are not enough agency home care workers for all of them,
              and care at home costs Medicaid far less than a nursing home. So
              the state pays the person already doing the work: you. If you
              would rather hire help, see{" "}
              <Link href="/guides/cost-of-in-home-care/" className="prose-link">
                what in-home care costs
              </Link>{" "}
              and{" "}
              <Link href="/guides/home-care-agencies-that-hire-family-members/" className="prose-link">
                home care agencies that hire family members
              </Link>
              .
            </p>
          </section>
        )}
      </div>

      <section id="apply" className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <h2 className="display text-3xl font-extrabold text-spruce">
          How to become a paid caregiver for a family member in {s.name}
        </h2>
        <div className="mt-6">
          <StepTimeline steps={steps(s)} />
        </div>
        <p className="mt-5 max-w-3xl leading-relaxed">
          <strong className="text-spruce">Where to apply:</strong> {s.apply}
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <QuizCta lang="en" state={s.slug} />
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <Faq heading={`${s.name} caregiver program questions`} items={faqs} id="faq" />
        <p className="mt-6 text-xs text-muted">
          Sources:{" "}
          {s.sources.map((src, i) => (
            <span key={src}>
              {i > 0 && " · "}
              <a href={src} rel="nofollow noopener" className="underline hover:text-teal">
                {new URL(src).hostname.replace(/^www\./, "")}
              </a>
            </span>
          ))}{" "}
          · Updated {site.updated}. Rules change — always confirm with the program.
        </p>
      </section>

      {guides.length > 0 && (
        <section className="band band-white mt-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="eyebrow">Guides</p>
            <h2 className="display h-section mt-2 font-extrabold text-spruce">
              Learn how paid family caregiving works
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={guidePath(g)} className="prose-link">
                    {g.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <TopCountyLinks stateSlug={s.slug} stateName={s.name} counties={topCountiesBy65(s.slug, 10)} />

      <NeighborStateLinks
        stateName={s.name}
        neighbors={neighborStates(s.slug).map((n) => ({ slug: n.slug, name: n.name }))}
      />
    </Shell>
  );
}
