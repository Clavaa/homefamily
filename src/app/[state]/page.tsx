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
import { countiesByState, STATE_ABBR } from "@/data/counties";

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ state: string }> };

function stateTitle(s: StateData): string {
  const full = `Get Paid as a Family Caregiver in ${s.name} (Programs & Pay)`;
  return full.length <= 60
    ? full
    : `Get Paid as a Family Caregiver in ${s.name}`;
}

function stateDescription(s: StateData): string {
  const long = `${s.name} Medicaid programs that pay family caregivers: ${s.programs
    .slice(0, 3)
    .join(", ")}. Spouse and parent rules, pay rates, and how to apply. Free 2-minute check.`;
  if (long.length <= 155) return long;
  const short = `${s.name} Medicaid programs that pay family caregivers: ${s.programs
    .slice(0, 2)
    .join(", ")}. Spouse rules, pay rates, how to apply. Free 2-minute check.`;
  return short.length <= 155
    ? short
    : `${s.name} Medicaid programs that pay family caregivers. Spouse rules, pay rates, and how to apply. Free 2-minute check.`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const s = getState(state);
  if (!s) return {};
  const title = stateTitle(s);
  const description = stateDescription(s);
  return {
    title,
    description,
    alternates: { canonical: `/${s.slug}/` },
    openGraph: {
      title,
      description,
      url: `/${s.slug}/`,
      siteName: site.brand,
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary", title, description },
  };
}

/* ---------------------------------------------------- plain-words copy --- */
const SPOUSE_HEADLINE: Record<string, (n: string) => string> = {
  yes: (n) => `Yes — ${n} can pay you to care for your spouse.`,
  limited: () => `Sometimes — it depends on the program and the care needed.`,
  no: () => `Not right now — but other family members can often be paid.`,
};

const PARENT_HEADLINE: Record<string, (n: string) => string> = {
  yes: (n) => `Yes — ${n} has a path for parents of children who need care.`,
  limited: () => `Sometimes — special programs for children may pay parents.`,
  no: () =>
    `Not for young children right now — but parents of adult children can often be paid.`,
};

const WAITLIST_COPY: Record<string, string> = {
  none: "No waitlist. If you qualify, you're in.",
  mixed: "Some programs here have no waitlist. Others can have one.",
  possible: "There may be a waitlist. Applying early holds your place.",
  long: "Waitlists here can be long. Apply as soon as you can.",
};

function buildFaqs(s: StateData): FaqItem[] {
  const pay =
    s.pay.display && !s.pay.varies
      ? `Family caregivers here typically earn ${s.pay.display}.`
      : s.pay.display
        ? `Reported figures are around ${s.pay.display}, but rates vary — the program sets your exact pay. We'll tell you your real number before you enroll.`
        : `${s.name} doesn't publish one flat rate — rates vary and the program sets your exact pay. We'll tell you your real number before you enroll.`;
  return [
    {
      q: "Is this legit?",
      a: `Yes. These are real Medicaid programs run by the state. In ${s.name}, they are overseen by the ${s.agency.split(";")[0].split(",")[0]}. We help you enroll — applying costs you nothing.`,
    },
    {
      q: "Why would the government pay me?",
      a: "Care at home costs Medicaid far less than a nursing home. So states pay family members to give that care at home. It's good for your loved one, and it's the law working the way it should.",
    },
    {
      q: `Can I get paid to care for my spouse in ${s.name}?`,
      a: `${SPOUSE_HEADLINE[s.spouse.status](s.name)} The fine print: ${s.spouse.detail}`,
    },
    {
      q: `Can I get paid to care for my child in ${s.name}?`,
      a: `${PARENT_HEADLINE[s.parentMinor.status](s.name)} The fine print: ${s.parentMinor.detail}`,
    },
    {
      q: `How much do family caregivers get paid in ${s.name}?`,
      a: pay,
    },
    {
      q: "Is there a waitlist?",
      a: `${WAITLIST_COPY[s.waitlist.status]} Details: ${s.waitlist.detail}`,
    },
    {
      q: "Do I have to work for an agency?",
      a: `It depends on the program. In ${s.name}: ${s.agencyModel}`,
    },
  ];
}

/* ---------------------------------------------------------------- page --- */
export default async function StatePage({ params }: Props) {
  const { state } = await params;
  const s = getState(state);
  if (!s) notFound();

  const faqs = buildFaqs(s);
  const url = `${site.domain}/${s.slug}/`;
  const counties = countiesByState[s.slug] ?? [];
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `Get Paid as a Family Caregiver in ${s.name}`,
    inLanguage: "en-US",
    isPartOf: { "@id": `${site.domain}/#organization` },
    breadcrumb: { "@id": `${url}#breadcrumbs` },
    about: `Medicaid programs that pay family caregivers in ${s.name}`,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.domain}/` },
      { "@type": "ListItem", position: 2, name: s.name, item: url },
    ],
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
          <li aria-current="page" className="font-semibold text-spruce">
            {s.name}
          </li>
        </ol>
      </nav>

      {/* --------------------------------------------------------- Header */}
      <section className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-wide text-teal">
          {s.name}
        </p>
        <h1 className="display mt-1 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-spruce sm:text-5xl">
          Get Paid as a Family Caregiver in{" "}
          <span className="text-teal">{s.name}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          {s.name} has real Medicaid programs that pay family members to care
          for a loved one at home. Here's what they pay, who can be paid, and
          how to start.
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

      {/* ------------------------------------------------------ Pay module */}
      <section className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        <PayRateModule state={s} lang="en" />
        <div className="card !p-6">
          <h2 className="display text-lg font-bold text-spruce">
            Waitlist in {s.name}
          </h2>
          <p className="mt-2 text-xl font-bold text-spruce">
            {WAITLIST_COPY[s.waitlist.status]}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {s.waitlist.detail}
          </p>
        </div>
      </section>

      {/* --------------------------------------- The money questions ------ */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <h2 className="display text-3xl font-extrabold text-spruce">
          The two big questions
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="card border-t-8 border-teal !p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="display text-xl font-bold text-spruce">
                Can a spouse be paid?
              </h3>
              <VerdictBadge status={s.spouse.status} />
            </div>
            <p className="mt-3 font-semibold leading-relaxed text-spruce">
              {SPOUSE_HEADLINE[s.spouse.status](s.name)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The fine print: {s.spouse.detail}
            </p>
          </article>
          <article className="card border-t-8 border-teal !p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="display text-xl font-bold text-spruce">
                Can a parent be paid for a child?
              </h3>
              <VerdictBadge status={s.parentMinor.status} />
            </div>
            <p className="mt-3 font-semibold leading-relaxed text-spruce">
              {PARENT_HEADLINE[s.parentMinor.status](s.name)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The fine print: {s.parentMinor.detail}
            </p>
          </article>
        </div>
      </section>

      {/* ----------------------------------------------- Program picker --- */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <h2 className="display text-3xl font-extrabold text-spruce">
          {s.name}'s programs
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Run by: {s.agency.split(";")[0]}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.programs.map((p) => (
            <article key={p} className="card flex flex-col !p-5">
              <h3 className="display text-lg font-bold text-spruce">{p}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.toLowerCase().includes("child")
                  ? "A path for children who need extra care."
                  : "A program that can pay a family member for care at home."}
              </p>
              <Link
                href={`/qualify/?state=${s.slug}`}
                className="mt-3 text-sm font-semibold text-teal underline"
              >
                2-min check →
              </Link>
            </article>
          ))}
        </div>
        {s.slug === "wisconsin" && (
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/wisconsin/iris/" className="btn-outline !min-h-11 text-sm">
              Wisconsin IRIS guide →
            </Link>
            <Link
              href="/wisconsin/spousal-caregiver/"
              className="btn-outline !min-h-11 text-sm"
            >
              Spousal caregiver pay →
            </Link>
            <Link
              href="/wisconsin/caregiver-pay/"
              className="btn-outline !min-h-11 text-sm"
            >
              2026 pay rates →
            </Link>
          </div>
        )}
      </section>

      {/* ------------------------------------------------- How to apply --- */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-mist p-6 sm:p-8">
          <h2 className="display text-3xl font-extrabold text-spruce">
            How to apply in {s.name}
          </h2>
          <ol className="mt-6 space-y-4">
            {[
              {
                title: "Check your match — 2 minutes, free.",
                body: "Our quick check tells you which programs fit your family before you talk to anyone.",
              },
              { title: "Start the state application.", body: s.apply },
              {
                title: "We help at every step.",
                body: "Forms, phone calls, the enrollment visit — we walk you through it all, free.",
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-lg font-bold text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-spruce">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href={`/qualify/?state=${s.slug}`}
            className="btn-primary mt-6"
          >
            See if you qualify →
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------ FAQ - */}
      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <Faq heading={`${s.name} questions, answered honestly`} items={faqs} id="state-faq" />
        <p className="mt-6 text-xs text-muted">
          Sources:{" "}
          {s.sources.map((src, i) => (
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
          ))}{" "}
          · Updated {site.updated}. Program rules change — always confirm with
          the program.
        </p>
      </section>

      {/* ---------------------------------------------- Browse by county -- */}
      {counties.length > 0 && (
        <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-mist bg-white p-6 sm:p-8">
            <h2 className="display text-3xl font-extrabold text-spruce">
              Browse {s.name} by county
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              The programs are the same across {s.name}. Pick your county to
              see how they work where you live.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {counties.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${s.slug}/${c.slug}/`}
                    className="inline-flex items-center rounded-full border border-teal/30 bg-white px-3.5 py-1.5 text-sm font-semibold text-teal no-underline transition-colors hover:bg-mist"
                  >
                    {c.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <QuizCta lang="en" state={s.slug} />
      </section>
    </Shell>
  );
}
