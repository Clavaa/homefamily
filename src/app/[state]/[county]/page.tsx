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
  countiesByState,
  getCounty,
  nearbyCounties,
  STATE_ABBR,
  type CountyData,
} from "@/data/counties";
import {
  VINTAGE,
  countPeople,
  getCountyFacts,
  getStateRollup,
  listNames,
  ordinal,
  pct,
  type CountyFacts,
} from "@/data/county-facts";

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

/**
 * The description carries the county's own 65+ count, so no two of the 3,144
 * pages share a snippet even where the state rules are identical.
 */
function countyDescription(
  s: StateData,
  c: CountyData,
  f: CountyFacts | undefined
): string {
  const prog = s.programs[0];
  const payBit = s.pay.display
    ? `Pay is around ${s.pay.display}.`
    : `Pay depends on the care plan.`;
  const localBit = f
    ? `${countPeople(f.pop65)} people here are 65 or older.`
    : "";
  const tiers = [
    `${localBit} ${s.name} pays family caregivers through ${prog}. ${payBit} Spouse rules and how ${c.display} families apply.`,
    `${localBit} ${s.name} pays family caregivers. ${payBit} How ${c.display} families apply.`,
    `${s.name} pays family caregivers. ${payBit} See spouse rules and how ${c.short} families apply. Free 2-minute check.`,
  ].map((t) => t.trim());
  return tiers.find((t) => t.length <= 158) ?? tiers[tiers.length - 1];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, county } = await params;
  const s = getState(state);
  const c = s ? getCounty(s.slug, county) : undefined;
  if (!s || !c) return {};
  const f = getCountyFacts(s.slug, c);
  const title = countyTitle(s, c);
  const description = countyDescription(s, c, f);
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

const WAITLIST_SHORT: Record<string, string> = {
  none: "No waitlist.",
  mixed: "Some programs have no waitlist.",
  possible: "There may be a waitlist — apply early.",
  long: "Waitlists can be long — apply early.",
};

/* -------------------------------------------------- local, fact-led copy -- */
/**
 * The opening paragraph is built from this county's own federal figures, and
 * branches on how the county is actually shaped. A remote county with 900
 * people over 65 and no agency for an hour in any direction does not get the
 * same advice as Los Angeles County — and shouldn't get the same page.
 */
function localLead(c: CountyData, f: CountyFacts, s: StateData): string {
  const share = pct(f.share65);

  // Tiny counties get exact counts and correct grammar — "About 1 people" is
  // how a template announces itself as a template.
  const opening =
    f.pop65 === 1
      ? `Exactly one person in ${c.display} is 65 or older`
      : f.pop65 < 100
        ? `Only ${f.pop65} people in ${c.display} are 65 or older`
        : `About ${countPeople(f.pop65)} people in ${c.display} are 65 or older`;

  // How this county's age profile compares — only stated when the gap is real.
  let compare: string;
  if (f.vsStatePts >= 2) {
    compare = ` That is an older county than ${s.name} overall, so more families here are already doing this work.`;
  } else if (f.vsStatePts <= -2) {
    compare = ` ${c.display} skews younger than ${s.name} overall, but the families caring for an older parent here face the same bills.`;
  } else {
    compare = ` That tracks with ${s.name} as a whole.`;
  }

  // The 85+ line only earns its place when there is a meaningful group.
  const oldest =
    f.pop85 >= 25
      ? ` Roughly ${countPeople(f.pop85)} are 85 or older, the age when daily help usually starts.`
      : "";

  const setting: Record<CountyFacts["archetype"], string> = {
    bigMetro: ` ${c.display} is one of the state's biggest population centers, and home-care agencies do work here — but staffing is thin, schedules change, and a stranger in the house is not what every family wants.`,
    metro: ` Agencies operate in ${c.display}, though families still run into gaps: no weekend coverage, a new aide every few weeks, hours that don't match real life.`,
    smallCity: ` There are only so many home-care agencies in a county this size, and the ones that are here do not always cover evenings, weekends, or the far end of the county.`,
    rural: ` In a rural county, an agency aide may be a long drive away — when one is available at all. That is exactly why the state lets you be the paid caregiver instead.`,
    frontier: ` Out here, hiring an outside agency often is not realistic at all. Being paid to do the care yourself is not a workaround — it is how these programs were designed to work.`,
  };

  return `${opening} — ${share} of everyone who lives here.${compare}${oldest}${setting[f.archetype]}`;
}

function buildFaqs(s: StateData, c: CountyData, f?: CountyFacts): FaqItem[] {
  const prog = s.programs[0];
  const pay =
    s.pay.display && !s.pay.varies
      ? `Family caregivers in ${s.name} typically earn ${s.pay.display}. The rate is the same across the state, including ${c.display}.`
      : s.pay.display
        ? `Reported figures in ${s.name} are around ${s.pay.display}, but rates vary — the program sets your exact pay. We'll tell you your real number before you enroll.`
        : `${s.name} doesn't publish one flat rate. The program sets your exact pay. We'll tell you your real number before you enroll.`;

  const items: FaqItem[] = [
    {
      q: `Can I get paid to care for a family member in ${c.display}?`,
      a: `Yes. ${s.name} runs real Medicaid programs — like ${prog} — that pay family caregivers, and they cover families in ${c.display}. We help you enroll, and applying costs you nothing.`,
    },
    { q: `How much do family caregivers earn in ${c.display}?`, a: pay },
    {
      q: `Where do families in ${c.display} apply?`,
      a: `Families in ${c.display} start with the state, not the county. ${s.apply}`,
    },
    {
      q: `Can I get paid to care for my spouse in ${c.display}?`,
      a: `${SPOUSE_SHORT[s.spouse.status]} The fine print for ${s.name}: ${s.spouse.detail}`,
    },
  ];

  if (f) {
    items.push({
      q: `How many people in ${c.display} might need this?`,
      a:
        `${countPeople(f.pop65)} residents of ${c.display} are 65 or older and about ` +
        `${countPeople(f.pop85)} are 85 or older, according to the U.S. Census Bureau's 2024 population estimates. ` +
        `Most of them are cared for at home by a relative rather than in a facility. ` +
        `${s.name}'s programs exist to pay for exactly that care.`,
    });
    if (f.towns.length > 1) {
      items.push({
        q: `Which towns in ${c.short} do you cover?`,
        a:
          `All of ${c.display} — including ${listNames(f.towns.slice(0, 5).map((t) => t.name))}. ` +
          `Eligibility is set by ${s.name}, not by your town, so where you live inside the county does not change whether you qualify.`,
      });
    }
  }
  return items;
}

/* ------------------------------------------------------------------ page */
export default async function CountyPage({ params }: Props) {
  const { state, county } = await params;
  const s = getState(state);
  const c = s ? getCounty(s.slug, county) : undefined;
  if (!s || !c) notFound();

  const f = getCountyFacts(s.slug, c);
  const roll = getStateRollup(s.slug);
  const faqs = buildFaqs(s, c, f);
  const url = `${site.domain}/${s.slug}/${c.slug}/`;
  const neighbors = nearbyCounties(s.slug, c.slug, 6);
  const abbr = STATE_ABBR[s.name] ?? s.name;

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
    ...(f
      ? {
          contentLocation: {
            "@type": "AdministrativeArea",
            name: `${c.display}, ${s.name}`,
            identifier: { "@type": "PropertyValue", propertyID: "FIPS", value: f.fips },
          },
        }
      : {}),
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
          {c.display}, {abbr}
        </p>
        <h1 className="display mt-1 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-spruce sm:text-5xl">
          Get paid to care for your family member in{" "}
          <span className="text-teal">{c.display}</span>, {s.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          {f ? (
            localLead(c, f, s)
          ) : (
            <>
              {s.name} has real Medicaid programs that pay family members to
              care for a parent, a spouse, or a child at home. Here is how it
              works for {c.short} families.
            </>
          )}
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

      {/* -------------------------------------------- Who needs care here -- */}
      {f && (
        <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
          <h2 className="display text-2xl font-extrabold text-spruce sm:text-3xl">
            Who needs care in {c.short}
          </h2>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                k: "People 65 and older",
                v: countPeople(f.pop65),
                note: `${pct(f.share65)} of ${c.short} residents`,
              },
              {
                k: "People 85 and older",
                v: countPeople(f.pop85),
                note: "the age daily help usually starts",
              },
              {
                k: "Median age",
                v: f.medianAge ? f.medianAge.toFixed(1) : "—",
                note:
                  f.vsNationPts >= 2
                    ? "older than the country as a whole"
                    : f.vsNationPts <= -2
                      ? "younger than the country as a whole"
                      : "close to the national average",
              },
              {
                k: `Rank in ${s.name}`,
                v: f.rank65 ? ordinal(f.rank65) : "—",
                note: `of ${f.stateCountyCount} counties, by residents 65+`,
              },
            ].map((stat) => (
              <div key={stat.k} className="card !p-5">
                <dt className="text-sm font-bold uppercase tracking-wide text-muted">
                  {stat.k}
                </dt>
                <dd className="display mt-1 text-3xl font-extrabold tabular-nums text-spruce">
                  {stat.v}
                </dd>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {stat.note}
                </p>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-muted">
            Source: {VINTAGE.pop}. {c.display} is {f.setting}
            {f.rucc ? ` (USDA Rural-Urban Continuum Code ${f.rucc})` : ""}.
            {roll
              ? ` ${s.name} as a whole is ${pct(roll.share65)} aged 65 or older.`
              : ""}
          </p>
        </section>
      )}

      {/* -------------------------------------- Pay module + state summary */}
      <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
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

      {/* --------------------------------------------------- Towns we cover */}
      {f && f.towns.length > 1 && (
        <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
          <h2 className="display text-2xl font-extrabold text-spruce">
            Towns and cities in {c.display}
          </h2>
          <p className="mt-2 max-w-2xl leading-relaxed">
            {s.name} sets eligibility, not your town — so a family in{" "}
            {f.towns[0].name} and a family at the far edge of the county apply
            the same way. The largest communities in {c.display}:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {f.towns.map((t) => (
              <li
                key={t.name}
                className="inline-flex items-baseline gap-2 rounded-full border border-mist bg-white px-4 py-1.5 text-sm"
              >
                <span className="font-semibold text-spruce">{t.name}</span>
                <span className="tabular-nums text-xs text-muted">
                  {t.pop.toLocaleString("en-US")}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">Source: {VINTAGE.places}.</p>
        </section>
      )}

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
          rules · Population figures from the U.S. Census Bureau · Updated{" "}
          {site.updated}. Rules change — always confirm with the program.
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
