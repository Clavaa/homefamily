import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import {
  CallButton,
  Breadcrumbs,
  Faq,
  FaqJsonLd,
  PageJsonLd,
  PayRateModule,
  QuizCta,
  TopCountyLinks,
  type FaqItem,
} from "@/components/Blocks";
import { site } from "@/site.config";
import { getState, states, type StateData } from "@/data/states";
import { BESPOKE_STATE_PAGES } from "@/data/counties";
import { countPeople, getStateRollup, topCountiesBy65 } from "@/data/county-facts";

/**
 * /{state}/spousal-caregiver/ — the single highest-intent question a married
 * caregiver asks, answered for all 51 jurisdictions.
 *
 * The answer genuinely differs by state (22 yes / 13 sometimes / 16 no in the
 * research file), so this is not one page repeated: the verdict, the reason,
 * the requirements and the fallback path all branch on the state's own rule.
 * States with a hand-written version of this page are skipped here.
 */

const SLUG = "spousal-caregiver";

export function generateStaticParams() {
  return states
    .filter((s) => !(BESPOKE_STATE_PAGES[s.slug] ?? []).includes(SLUG))
    .map((s) => ({ state: s.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ state: string }> };

/* --------------------------------------------------------------- verdicts */
type Verdict = "yes" | "limited" | "no";

const HEADLINE: Record<Verdict, (state: string) => string> = {
  yes: (st) => `Yes — ${st} lets a spouse be paid.`,
  limited: (st) => `Sometimes — in ${st} it depends on the program.`,
  no: (st) => `Not directly in ${st} today — but read on.`,
};

const HEADLINE_TONE: Record<Verdict, string> = {
  yes: "text-pay",
  limited: "text-spruce",
  no: "text-spruce",
};

function lead(s: StateData): string {
  switch (s.spouse.status as Verdict) {
    case "yes":
      return (
        `${s.name} is one of the states where the person who needs care can hire their own ` +
        `husband or wife and have the program pay for it. You do the caring you are already ` +
        `doing. The state pays you for it.`
      );
    case "limited":
      return (
        `In ${s.name} the answer turns on which program your spouse is on and how their care ` +
        `plan is written. Some routes pay a husband or wife; others pay every relative except ` +
        `a spouse. That is worth ten minutes to get right, because the difference is a paycheck.`
      );
    default:
      return (
        `${s.name}'s programs generally will not pay a husband or wife directly — the old ` +
        `Medicaid rules treat a spouse's care as a family duty rather than a job. That is not ` +
        `the end of it. Other relatives usually can be paid, and the rules do change.`
      );
  }
}

function whatNext(s: StateData): { heading: string; items: string[] } {
  switch (s.spouse.status as Verdict) {
    case "yes":
      return {
        heading: "What has to be true",
        items: [
          `Your spouse lives in ${s.name} and needs long-term care help at home.`,
          "Your spouse has Medicaid, or can qualify. We check that with you for free.",
          "You pass a background check. No license or certificate is needed.",
          "The care your spouse needs is written into their plan — that is what the hours are paid against.",
        ],
      };
    case "limited":
      return {
        heading: "What decides it in your case",
        items: [
          "Which program your spouse enrolls in — self-directed routes are the ones that can pay a spouse.",
          "Whether the state treats you as a legally responsible relative for the specific tasks in the plan.",
          "Whether the hours are ordinary daily help or skilled care that needs a licensed worker.",
          "Whether another adult in the household could be the paid caregiver instead.",
        ],
      };
    default:
      return {
        heading: "Who can be paid instead",
        items: [
          "An adult son or daughter — the most common paid caregiver in every state.",
          "A sibling, a grandchild, a niece or nephew, or an in-law.",
          "A close friend or neighbor, in most self-directed programs.",
          `A spouse in a different program year — ${s.name}'s rules are reviewed regularly, and we watch them.`,
        ],
      };
  }
}

function buildFaqs(s: StateData): FaqItem[] {
  const verdict = s.spouse.status as Verdict;
  const payLine = s.pay.display
    ? `Reported pay in ${s.name} runs around ${s.pay.display}, though your exact rate is set by the program and the care plan.`
    : `${s.name} does not publish one flat rate — the program sets your pay from the care plan. We tell you your real number before you enroll.`;

  const items: FaqItem[] = [
    {
      q: `Can I get paid to care for my husband or wife in ${s.name}?`,
      a:
        verdict === "yes"
          ? `Yes. ${s.name} allows it. The published rule: ${s.spouse.detail}`
          : verdict === "limited"
            ? `Sometimes — it depends on the program and the care plan. The published rule: ${s.spouse.detail}`
            : `Generally not directly. The published rule: ${s.spouse.detail} Other relatives can usually be paid, and that is worth checking.`,
    },
    {
      q: "Why do some states allow this and others don't?",
      a: "Medicaid has long treated care between spouses as a family duty rather than paid work. Self-directed programs changed that in many states by making the person who needs care the employer — they choose their own worker, and in some states that can be a spouse. It is a state-by-state policy choice, not a federal rule.",
    },
    { q: `How much would I earn in ${s.name}?`, a: payLine },
    {
      q: "Does my spouse need Medicaid first?",
      a: `Yes. These are Medicaid programs, so your spouse has to qualify for ${s.name} Medicaid and need long-term care help. Many families assume they earn too much and never apply. The rules for long-term care are not the same as regular Medicaid — check before you rule yourself out.`,
    },
    {
      q: `Is there a waitlist in ${s.name}?`,
      a: s.waitlist.detail || "Waitlist rules vary by program — we check the current position with you.",
    },
    {
      q: "How do we start?",
      a: s.apply,
    },
  ];
  return items;
}

/* --------------------------------------------------------------- metadata */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const s = getState(state);
  if (!s) return {};
  const verdict = s.spouse.status as Verdict;
  // Longest variant that still fits where Google truncates. "District of
  // Columbia" is 20 characters on its own and overruns every long form.
  const titleTiers: Record<Verdict, string[]> = {
    yes: [
      `Get Paid to Care for Your Spouse in ${s.name}`,
      `Spousal Caregiver Pay in ${s.name}`,
    ],
    limited: [
      `Can I Get Paid to Care for My Spouse in ${s.name}?`,
      `Spousal Caregiver Pay in ${s.name}: the Rules`,
      `Spousal Caregiver Pay in ${s.name}`,
    ],
    no: [
      `Paid to Care for a Spouse in ${s.name}: the Real Answer`,
      `Spousal Caregiver Pay in ${s.name}: the Real Answer`,
      `Spousal Caregiver Pay in ${s.name}`,
    ],
  };
  const tiers = titleTiers[verdict];
  const title = tiers.find((t) => t.length <= 60) ?? tiers[tiers.length - 1];
  const description =
    verdict === "yes"
      ? `${s.name} allows a husband or wife to be the paid caregiver. See the rule, the pay, and how to apply. Free 2-minute eligibility check.`
      : verdict === "limited"
        ? `In ${s.name} it depends on the program. See which routes can pay a spouse, what the rule actually says, and how to apply. Free 2-minute check.`
        : `${s.name} generally won't pay a husband or wife — but other relatives can be. See the rule, the alternatives, and how to apply. Free 2-minute check.`;
  const path = `/${s.slug}/${SLUG}/`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.brand,
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary", title, description },
  };
}

/* ------------------------------------------------------------------ page */
export default async function SpousalPage({ params }: Props) {
  const { state } = await params;
  const s = getState(state);
  if (!s) notFound();

  const verdict = s.spouse.status as Verdict;
  const faqs = buildFaqs(s);
  const next = whatNext(s);
  const url = `${site.domain}/${s.slug}/${SLUG}/`;
  const roll = getStateRollup(s.slug);
  const crumbs = [
    { name: s.name, path: `/${s.slug}/` },
    { name: "Spousal caregiver pay", path: `/${s.slug}/${SLUG}/` },
  ];

  return (
    <Shell lang="en">
      <PageJsonLd
        url={url}
        name={`Getting paid to care for a spouse in ${s.name}`}
        about={`Whether Medicaid programs in ${s.name} pay a spouse as a family caregiver`}
        crumbs={crumbs}
      />
      <FaqJsonLd items={faqs} url={url} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
        <h1 className="display max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-spruce sm:text-5xl">
          Can I get <span className="text-pay">paid</span> to care for my
          spouse in <span className="text-teal">{s.name}</span>?
        </h1>
        <p
          className={`mt-4 max-w-2xl text-2xl font-bold ${HEADLINE_TONE[verdict]}`}
        >
          {HEADLINE[verdict](s.name)}
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed">{lead(s)}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/qualify/?state=${s.slug}&rel=spouse`}
            className="btn-primary"
          >
            See if you qualify →
          </Link>
          <CallButton />
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        <div className="card !p-6">
          <h2 className="display text-lg font-bold text-spruce">
            {next.heading}
          </h2>
          <ul className="mt-3 space-y-2.5">
            {next.items.map((li) => (
              <li key={li} className="flex items-start gap-2 leading-relaxed">
                <span aria-hidden="true" className="mt-0.5 text-pay">
                  ✓
                </span>
                {li}
              </li>
            ))}
          </ul>
        </div>
        <PayRateModule state={s} lang="en" />
      </section>

      {/* -------------------------------------------- The rule, in full ---- */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-mist p-6 sm:p-8">
          <h2 className="display text-2xl font-extrabold text-spruce">
            What {s.name}&apos;s rule actually says
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed">{s.spouse.detail}</p>
          <p className="mt-4 max-w-2xl leading-relaxed">
            The programs this runs through in {s.name}:{" "}
            <strong>{s.programs.join(", ")}</strong>. Who runs them:{" "}
            {s.agency}
          </p>
          {roll && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              {countPeople(roll.pop65)} people in {s.name} are 65 or older.
              Most of them are cared for at home, by a relative — usually
              without being paid for it.
            </p>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------ How to apply */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <h2 className="display text-3xl font-extrabold text-spruce">
          How to start in {s.name}
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed font-semibold text-spruce">
          {s.apply}
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          {s.agencyModel}
        </p>
        <Link href={`/qualify/?state=${s.slug}&rel=spouse`} className="btn-primary mt-6">
          See if you qualify →
        </Link>
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <Faq
          heading={`Spouse questions in ${s.name}, answered`}
          items={faqs}
          id="spouse-faq"
        />
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
          · Updated {site.updated}. Rules change — always confirm with the
          program.
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
