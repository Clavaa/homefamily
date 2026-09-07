import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import {
  Faq,
  FaqJsonLd,
  PayRateModule,
  QuizCta,
  VerdictBadge,
  type FaqItem,
} from "@/components/Blocks";
import { site } from "@/site.config";
import { getState, states, type StateData } from "@/data/states";
import {
  approxPop,
  countiesByState,
  getCounty,
  nearbyCounties,
  STATE_ABBR,
  type CountyData,
} from "@/data/counties";

export function generateStaticParams() {
  return states.flatMap((s) =>
    (countiesByState[s.slug] ?? []).map((c) => ({
      state: s.slug,
      county: c.slug,
    }))
  );
}

export const dynamicParams = false;

type Props = { params: Promise<{ state: string; county: string }> };

/* --------------------------------------------------------------- metadata */
function countyTitle(s: StateData, c: CountyData): string {
  const abbr = STATE_ABBR[s.name] ?? s.name;
  // Longest variant that fits ~60 chars, in order of preference.
  const tiers = [
    `Get Paid to Care for Family in ${c.display}, ${abbr}`,
    `Get Paid to Care for Family in ${c.short}, ${abbr}`,
    `Family Caregiver Pay in ${c.short}, ${abbr}`,
  ];
  return tiers.find((t) => t.length <= 60) ?? tiers[tiers.length - 1];
}

function countyDescription(s: StateData, c: CountyData): string {
  const prog = s.programs[0];
  const payBit = s.pay.display
    ? `Pay is around ${s.pay.display}.`
    : `Pay depends on the care plan.`;
  // Longest variant that fits 155 chars. The middle tier keeps the full
  // county name so same-base pairs (Richmond City / Richmond County) stay
  // unique; the last tier is only reached by very long region names.
  const tiers = [
    `${s.name} pays family caregivers through ${prog}. ${payBit} See spouse rules and how ${c.display} families apply. Free 2-minute check.`,
    `${s.name} pays family caregivers. ${payBit} See spouse rules and how ${c.display} families apply. Free 2-minute check.`,
    `${s.name} pays family caregivers. ${payBit} See spouse rules and how ${c.short} families apply. Free 2-minute check.`,
  ];
  return tiers.find((t) => t.length <= 155) ?? tiers[tiers.length - 1];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, county } = await params;
  const s = getState(state);
  const c = s ? getCounty(s.slug, county) : undefined;
  if (!s || !c) return {};
  const title = countyTitle(s, c);
  const description = countyDescription(s, c);
  const path = `/${s.slug}/${c.slug}/`;
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

/* --------------------------------------------------- plain-words verdicts */
const SPOUSE_SHORT: Record<string, string> = {
  yes: "Yes — a spouse can be paid here.",
  limited: "Sometimes — it depends on the program.",
  no: "Not right now — but other family members often can be.",
};

const PARENT_SHORT: Record<string, string> = {
  yes: "Yes — there is a path for parents of children who need care.",
  limited: "Sometimes — special programs for children may pay parents.",
  no: "Not for young children right now.",
};

const WAITLIST_SHORT: Record<string, string> = {
  none: "No waitlist.",
  mixed: "Some programs have no waitlist.",
  possible: "There may be a waitlist — apply early.",
  long: "Waitlists can be long — apply early.",
};

function buildFaqs(s: StateData, c: CountyData): FaqItem[] {
  const prog = s.programs[0];
  const pay =
    s.pay.display && !s.pay.varies
      ? `Family caregivers in ${s.name} typically earn ${s.pay.display}. The rate is the same across the state, including ${c.display}.`
      : s.pay.display
        ? `Reported figures in ${s.name} are around ${s.pay.display}, but rates vary — the program sets your exact pay. We'll tell you your real number before you enroll.`
        : `${s.name} doesn't publish one flat rate. The program sets your exact pay. We'll tell you your real number before you enroll.`;
  return [
    {
      q: `Can I get paid to care for a family member in ${c.display}?`,
      a: `Yes. ${s.name} runs real Medicaid programs — like ${prog} — that pay family caregivers, and they cover families in ${c.display}. We help you enroll, and applying costs you nothing.`,
    },
    {
      q: `How much do family caregivers earn in ${c.display}?`,
      a: pay,
    },
    {
      q: `Where do families in ${c.display} apply?`,
      a: `Families in ${c.display} start with the state, not the county. ${s.apply}`,
    },
    {
      q: `Can I get paid to care for my spouse in ${c.display}?`,
      a: `${SPOUSE_SHORT[s.spouse.status]} The fine print for ${s.name}: ${s.spouse.detail}`,
    },
  ];
}

/* ------------------------------------------------------------------ page */
export default async function CountyPage({ params }: Props) {
  const { state, county } = await params;
  const s = getState(state);
  const c = s ? getCounty(s.slug, county) : undefined;
  if (!s || !c) notFound();

  const faqs = buildFaqs(s, c);
  const url = `${site.domain}/${s.slug}/${c.slug}/`;
  const neighbors = nearbyCounties(s.slug, c.slug, 6);

  const breadcrumbJsonLd = {
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
        name: s.name,
        item: `${site.domain}/${s.slug}/`,
      },
      { "@type": "ListItem", position: 3, name: c.display, item: url },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: countyTitle(s, c),
    inLanguage: "en-US",
    isPartOf: { "@id": `${site.domain}/#organization` },
    breadcrumb: { "@id": `${url}#breadcrumbs` },
    about: `Medicaid programs that pay family caregivers in ${c.display}, ${s.name}`,
  };

  return (
    <Shell lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FaqJsonLd items={faqs} url={url} />

      {/* ------------------------------------------------------ Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-6xl px-4 pt-6 text-sm text-muted sm:px-6"
      >
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-teal">
              Home
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href={`/${s.slug}/`} className="hover:text-teal">
              {s.name}
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" className="font-semibold text-spruce">
            {c.short}
          </li>
        </ol>
      </nav>

      {/* ----------------------------------------------------------- Header */}
      <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-wide text-teal">
          {c.display}, {STATE_ABBR[s.name] ?? s.name}
        </p>
        <h1 className="display mt-1 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-spruce sm:text-5xl">
          Get paid to care for your family member in{" "}
          <span className="text-teal">{c.display}</span>, {s.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          About {approxPop(c.pop)} people live in {c.display}. Many of them
          care for a parent, a spouse, or a child at home. {s.name} has real
          Medicaid programs that pay family members for that care. Here is how
          it works for {c.short} families.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href={`/qualify/?state=${s.slug}`} className="btn-primary">
            See if you qualify →
          </Link>
          <a href={site.phoneHref} className="btn-outline">
            Call or text <span className="tnum">{site.phone}</span>
          </a>
        </div>
      </section>

      {/* -------------------------------------- Pay module + state summary */}
      <section className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        <PayRateModule state={s} lang="en" />
        <div className="card !p-6">
          <h2 className="display text-lg font-bold text-spruce">
            {s.name}&apos;s programs at a glance
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {s.programs.map((p) => (
              <li
                key={p}
                className="rounded-full border border-teal/30 bg-white px-3 py-1 text-sm font-semibold text-teal"
              >
                {p}
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-3 text-sm leading-relaxed">
            <div className="flex items-start justify-between gap-3">
              <dt className="font-bold text-spruce">Spouse paid?</dt>
              <dd>
                <VerdictBadge status={s.spouse.status} />
              </dd>
            </div>
            <div className="flex items-start justify-between gap-3">
              <dt className="font-bold text-spruce">
                Parent paid for a child?
              </dt>
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
          <p className="mt-4 border-t border-mist pt-3 text-sm">
            These rules are set by the state, so they are the same in every
            county.{" "}
            <Link
              href={`/${s.slug}/`}
              className="font-semibold text-teal underline"
            >
              Read the full {s.name} guide →
            </Link>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- How to apply */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-mist p-6 sm:p-8">
          <h2 className="display text-3xl font-extrabold text-spruce">
            How families in {c.short} apply
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            You do not need a county office to start. Families in {c.display}{" "}
            start with {s.name}&apos;s program:
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed font-semibold text-spruce">
            {s.apply}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Or skip the phone tag — our free 2-minute check tells you which{" "}
            {s.name} program fits your family, then we help with the forms.
          </p>
          <Link href={`/qualify/?state=${s.slug}`} className="btn-primary mt-6">
            See if you qualify →
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------- FAQ */}
      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <Faq
          heading={`${c.short} questions, answered honestly`}
          items={faqs}
          id="county-faq"
        />
        <p className="mt-6 text-xs text-muted">
          Program facts come from {s.name}&apos;s published Medicaid program
          rules · Updated {site.updated}. Rules change — always confirm with
          the program.
        </p>
      </section>

      {/* ------------------------------------------------ Nearby counties */}
      {neighbors.length > 0 && (
        <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
          <h2 className="display text-2xl font-extrabold text-spruce">
            More {s.name} counties
          </h2>
          <p className="mt-2 text-sm text-muted">
            The programs are the same statewide — pick your county:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {neighbors.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/${s.slug}/${n.slug}/`}
                  className="inline-flex items-center rounded-full border border-teal/30 bg-white px-4 py-1.5 text-sm font-semibold text-teal no-underline transition-colors hover:bg-mist"
                >
                  {n.short}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`/${s.slug}/`}
                className="inline-flex items-center rounded-full bg-spruce px-4 py-1.5 text-sm font-semibold text-white no-underline"
              >
                All of {s.name} →
              </Link>
            </li>
          </ul>
        </section>
      )}

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <QuizCta lang="en" state={s.slug} />
      </section>
    </Shell>
  );
}
