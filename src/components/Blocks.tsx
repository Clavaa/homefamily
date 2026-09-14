import Link from "next/link";
import Image from "next/image";
import { site } from "@/site.config";
import type { StateData } from "@/data/states";
import type { Lang } from "./Shell";

/* ---------------------------------------------------------------- Money -- */
/** Every dollar figure: payment green + tabular numerals. */
export function Money({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`tnum font-bold text-pay ${className}`}>{children}</span>
  );
}

/* ------------------------------------------------------- Quick-start 3-chip */
const QS = {
  en: {
    label: "Who do you care for?",
    parent: "My parent",
    spouse: "My spouse",
    child: "My child",
  },
  es: {
    label: "¿A quién cuida usted?",
    parent: "A mi padre o madre",
    spouse: "A mi esposo(a)",
    child: "A mi hijo(a)",
  },
} as const;

export function QuickStart({ lang = "en" as Lang }: { lang?: Lang }) {
  const t = QS[lang];
  const chips = [
    { label: t.parent, rel: "parent" },
    { label: t.spouse, rel: "spouse" },
    { label: t.child, rel: "minorChild" },
  ];
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-muted">
        {t.label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {chips.map((c) => (
          <Link
            key={c.rel}
            href={`/qualify/?rel=${c.rel}`}
            className="inline-flex min-h-12 items-center rounded-full border-2 border-teal bg-white px-5 py-2.5 font-semibold text-teal no-underline transition-colors hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-spruce"
          >
            {c.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- Pay-rate module */
const PAY_T = {
  en: {
    heading: (state: string) => `What ${state} pays family caregivers`,
    varies: "Rates vary — check with the program.",
    variesNote:
      "Your exact pay is set by the program and your care plan. We'll tell you your real number before you enroll.",
    taxFree: "Often tax-free",
    source: "Source",
    updated: "Updated",
    perNote: {
      hr: "per hour",
      day: "per day",
      week: "per week",
      month: "per month",
    } as Record<string, string>,
  },
  es: {
    heading: (state: string) =>
      `Lo que ${state} paga a cuidadores familiares`,
    varies: "Las tarifas varían — confirme con el programa.",
    variesNote:
      "Su pago exacto lo fija el programa y su plan de cuidado. Le diremos su cifra real antes de inscribirse.",
    taxFree: "A menudo libre de impuestos",
    source: "Fuente",
    updated: "Actualizado",
    perNote: {
      hr: "por hora",
      day: "por día",
      week: "por semana",
      month: "por mes",
    } as Record<string, string>,
  },
} as const;

export function PayRateModule({
  state,
  lang = "en" as Lang,
  sourceLabel,
}: {
  state: StateData;
  lang?: Lang;
  sourceLabel?: string;
}) {
  const t = PAY_T[lang];
  const src =
    sourceLabel ??
    (state.slug === "wisconsin"
      ? "Wisconsin DHS IRIS program data"
      : `${state.name} Medicaid program data`);
  return (
    <section
      aria-label={t.heading(state.name)}
      className="card border-l-8 border-marigold"
    >
      <h2 className="display text-lg font-bold text-spruce">
        {t.heading(state.name)}
      </h2>
      {state.pay.display ? (
        <p className="mt-2">
          <Money className="display text-5xl tracking-tight sm:text-6xl">
            {state.pay.display}
          </Money>
        </p>
      ) : (
        <p className="mt-2 text-2xl font-bold text-spruce">{t.varies}</p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {state.pay.taxFree && (
          <span className="rounded-full bg-marigold-soft px-3 py-1 text-sm font-bold text-spruce">
            {t.taxFree}
          </span>
        )}
        {(state.pay.varies || !state.pay.display) && (
          <span className="rounded-full bg-mist px-3 py-1 text-sm font-semibold text-teal">
            {t.varies}
          </span>
        )}
      </div>
      {state.pay.varies && (
        <p className="mt-3 text-sm leading-relaxed text-muted">{t.variesNote}</p>
      )}
      <p className="mt-4 border-t border-mist pt-3 text-xs text-muted">
        {t.source}: {src} · {t.updated}{" "}
        {lang === "es" ? site.updatedEs : site.updated}
      </p>
    </section>
  );
}

/* --------------------------------------------------------- Verdict badge -- */
const VERDICT = {
  en: { yes: "Yes", limited: "Sometimes", no: "Not right now" },
  es: { yes: "Sí", limited: "A veces", no: "Por ahora no" },
} as const;

export function VerdictBadge({
  status,
  lang = "en" as Lang,
}: {
  status: "yes" | "limited" | "no";
  lang?: Lang;
}) {
  const styles = {
    yes: "bg-pay text-white",
    limited: "bg-marigold text-spruce",
    no: "bg-mist text-spruce",
  } as const;
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${styles[status]}`}
    >
      {VERDICT[lang][status]}
    </span>
  );
}

/* ----------------------------------------------------------- Step timeline */
export interface Step {
  title: string;
  duration: string;
  body: string;
}

export function StepTimeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="card relative !p-5">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-lg font-bold text-white"
            >
              {i + 1}
            </span>
            <span className="rounded-full bg-marigold-soft px-2.5 py-0.5 text-xs font-bold text-spruce">
              {s.duration}
            </span>
          </div>
          <h3 className="display mt-3 text-lg font-bold text-spruce">
            {s.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ----------------------------------------------------------------- FAQ ---- */
export interface FaqItem {
  q: string;
  a: string;
}

export function Faq({
  items,
  heading,
  id,
}: {
  items: FaqItem[];
  heading: string;
  id?: string;
}) {
  return (
    <section aria-labelledby={id ? `${id}-h` : undefined}>
      <h2
        id={id ? `${id}-h` : undefined}
        className="display text-3xl font-extrabold text-spruce"
      >
        {heading}
      </h2>
      <div className="mt-6 space-y-3">
        {items.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-mist bg-white p-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-spruce [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden="true"
                className="text-xl text-teal transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-ink">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FaqJsonLd({ items, url }: { items: FaqItem[]; url: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ------------------------------------------------------------ Trust strip -- */
const TRUST_T = {
  en: {
    real: "This is a real Medicaid benefit",
    free: "Free to apply — we're paid by the program, never by you",
  },
  es: {
    real: "Este es un beneficio real de Medicaid",
    free: "Aplicar es gratis — el programa nos paga, usted nunca paga",
  },
} as const;

export function TrustStrip({
  programs,
  lang = "en" as Lang,
}: {
  programs: string[];
  lang?: Lang;
}) {
  const t = TRUST_T[lang];
  return (
    <section aria-label={t.real} className="bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <p className="flex items-center gap-2 font-bold text-spruce">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-pay text-sm text-white"
          >
            ✓
          </span>
          {t.real}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {programs.map((p) => (
            <li
              key={p}
              className="rounded-full border border-teal/30 bg-white px-3 py-1 text-sm font-semibold text-teal"
            >
              {p}
            </li>
          ))}
        </ul>
        <p className="max-w-xs text-sm font-semibold text-spruce/80">{t.free}</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Quiz CTA --- */
const CTA_T = {
  en: {
    heading: "Find out in 2 minutes",
    body: "Answer 5 easy questions. See your programs and pay before you share any contact info.",
    button: "See if you qualify →",
    call: "Or call us —",
  },
  es: {
    heading: "Averígüelo en 2 minutos",
    body: "Responda 5 preguntas fáciles. Vea sus programas y su pago antes de dar ningún dato de contacto.",
    button: "Vea si califica →",
    call: "O llámenos —",
  },
} as const;

export function QuizCta({
  lang = "en" as Lang,
  state,
}: {
  lang?: Lang;
  state?: string;
}) {
  const t = CTA_T[lang];
  return (
    <section className="rounded-xl bg-spruce px-6 py-10 text-center text-white sm:px-10">
      <h2 className="display text-3xl font-extrabold sm:text-4xl">
        {t.heading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/85">
        {t.body}
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href={state ? `/qualify/?state=${state}` : "/qualify/"}
          className="btn-primary"
        >
          {t.button}
        </Link>
        {site.phone && site.phoneHref && (
          <p className="text-white/85">
            {t.call}{" "}
            <a
              href={site.phoneHref}
              className="tnum font-bold text-white underline"
            >
              {site.phone}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Hero photo -- */
/**
 * The hero photograph, with one floating proof card over it.
 *
 * Different family per locale on purpose — the Spanish page gets its own
 * photograph rather than the English one mirrored, because a Spanish-speaking
 * visitor notices when a site was translated but never actually addressed to
 * them.
 *
 * priority + explicit dimensions because this is the LCP element on the two
 * highest-traffic pages, and a 0.1s mobile improvement is worth roughly 20%
 * more lead submissions in this category.
 */
/**
 * Full-bleed hero photograph.
 *
 * Careforth runs the photograph edge-to-edge at full hero height rather than
 * as an inset rounded card, and it is the single biggest reason their page
 * reads like a publication instead of a landing page. On phones it stacks
 * back to a contained image so the headline still leads.
 *
 * Different family per locale on purpose — the Spanish page gets its own
 * photograph rather than the English one mirrored.
 */
function heroAssets(lang: Lang) {
  return lang === "es"
    ? {
        alt: "Una hija ayuda a su padre a levantarse de su sillón junto a la ventana",
        proofTitle: "Pago semanal enviado",
        proofNote: "cifra de ejemplo",
        src: "/photos/hero-latino-family.webp",
      }
    : {
        alt: "A daughter sits with her mother at the kitchen table in morning light",
        proofTitle: "Weekly payment sent",
        proofNote: "example figure",
        src: "/photos/hero-daughter-mother.webp",
      };
}

function ProofCard({ lang }: { lang: Lang }) {
  const t = heroAssets(lang);
  return (
    <div className="card flex items-center gap-3 !p-4 shadow-[0_10px_30px_-12px_rgba(18,48,46,0.3)] sm:w-72">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pay/10 text-pay"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
          <path
            d="M4 10.5l4 4 8-9"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div>
        <p className="text-sm font-bold text-spruce">{t.proofTitle}</p>
        <p className="text-sm">
          <Money>$412.00</Money>{" "}
          <span className="text-xs text-muted">· {t.proofNote}</span>
        </p>
      </div>
    </div>
  );
}

/** Edge-bleeding photo panel — desktop only; absolutely positioned. */
export function HeroPhotoBleed({ lang = "en" as Lang }: { lang?: Lang }) {
  const t = heroAssets(lang);
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] md:block">
      <Image
        src={t.src}
        alt={t.alt}
        fill
        priority
        sizes="46vw"
        className="object-cover"
      />
      <div className="pointer-events-auto absolute bottom-8 left-8">
        <ProofCard lang={lang} />
      </div>
    </div>
  );
}

/** Contained photo for phones, where a bleed would bury the headline. */
export function HeroPhoto({ lang = "en" as Lang }: { lang?: Lang }) {
  const t = heroAssets(lang);
  return (
    <div className="relative md:hidden">
      <Image
        src={t.src}
        alt={t.alt}
        width={928}
        height={1152}
        priority
        sizes="100vw"
        className="aspect-[4/5] w-full rounded-lg object-cover"
      />
      <div className="absolute -bottom-5 left-4 right-4">
        <ProofCard lang={lang} />
      </div>
    </div>
  );
}

/* --------------------------------------------------- Page schema helpers -- */
export interface Crumb {
  name: string;
  path: string;
}

/**
 * BreadcrumbList + WebPage JSON-LD for a content page. Every page gets a
 * unique @id and points back at the site organization node, which is what
 * keeps 3,000+ pages from looking like one undifferentiated blob to a parser.
 */
export function PageJsonLd({
  url,
  name,
  about,
  crumbs,
}: {
  url: string;
  name: string;
  about?: string;
  crumbs: Crumb[];
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.domain}/` },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.name,
        item: `${site.domain}${c.path}`,
      })),
    ],
  };
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    inLanguage: "en-US",
    isPartOf: { "@id": `${site.domain}/#organization` },
    breadcrumb: { "@id": `${url}#breadcrumbs` },
    ...(about ? { about } : {}),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

/** Breadcrumb trail rendered for people (the JSON-LD above is for machines). */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
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
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1">
            <span aria-hidden="true">›</span>
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="font-semibold text-spruce">
                {c.name}
              </span>
            ) : (
              <Link href={c.path} className="hover:text-teal">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Links to the state's largest counties by 65+ population, with real counts. */
export function TopCountyLinks({
  stateSlug,
  stateName,
  counties,
}: {
  stateSlug: string;
  stateName: string;
  counties: { slug: string; short: string; pop65: number }[];
}) {
  if (!counties.length) return null;
  return (
    <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
      <h2 className="display text-2xl font-extrabold text-spruce">
        Where most {stateName} caregivers are
      </h2>
      <p className="mt-2 max-w-2xl leading-relaxed text-muted">
        Counties with the most residents aged 65 and older. The rules are the
        same everywhere in {stateName} — pick yours for the local picture.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {counties.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/${stateSlug}/${c.slug}/`}
              className="inline-flex items-baseline gap-2 rounded-full border border-teal/30 bg-white px-4 py-1.5 text-sm no-underline transition-colors hover:bg-mist"
            >
              <span className="font-semibold text-teal">{c.short}</span>
              <span className="tabular-nums text-xs text-muted">
                {c.pop65.toLocaleString("en-US")} aged 65+
              </span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={`/${stateSlug}/`}
            className="inline-flex items-center rounded-full bg-spruce px-4 py-1.5 text-sm font-semibold text-white no-underline"
          >
            All of {stateName} →
          </Link>
        </li>
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------ CallButton -- */
/**
 * The "Call or text" secondary CTA. Renders nothing at all when
 * site.phone is null, so no page ever ships a dead number — and every page
 * gets the button back the moment a real one is configured.
 */
export function CallButton({
  lang = "en" as Lang,
  className = "btn-outline",
}: {
  lang?: Lang;
  className?: string;
}) {
  if (!site.phone || !site.phoneHref) return null;
  const label = lang === "es" ? "Llame o mande texto" : "Call or text";
  return (
    <a href={site.phoneHref} className={className}>
      {label} <span className="tnum">{site.phone}</span>
    </a>
  );
}

/* -------------------------------------------------------------- ProofBar -- */
/**
 * The band directly under the hero. Every competitor runs one — Givers
 * ("275,000+ families supported · 93% satisfaction · 5.0 Google · SOC2 ·
 * HIPAA"), FreedomCare ("162,000+ families · 97% satisfaction") — because it
 * answers "is this real?" before the visitor has to scroll.
 *
 * Ours claims only things that are true today. We have no customers yet, so
 * there are no family counts, no satisfaction percentages and no star
 * ratings here — those are the numbers competitors lead with and the ones we
 * are not going to invent. What we do have is coverage and sourcing, which
 * is a real advantage: nobody else in this category publishes county-level
 * figures at all.
 */
export function ProofBar({ lang = "en" as Lang }: { lang?: Lang }) {
  const items =
    lang === "es"
      ? [
          { big: "50 + DC", small: "estados cubiertos" },
          { big: "3,144", small: "condados con datos locales" },
          { big: "$0", small: "aplicar siempre es gratis" },
          { big: "2 min", small: "para ver si califica" },
        ]
      : [
          { big: "50 + DC", small: "states covered" },
          { big: "3,144", small: "counties with local data" },
          { big: "$0", small: "it is always free to apply" },
          { big: "2 min", small: "to see if you qualify" },
        ];
  const note =
    lang === "es"
      ? "Cifras de población del U.S. Census Bureau · Reglas de cada programa estatal de Medicaid"
      : "Population figures from the U.S. Census Bureau · Rules from each state's published Medicaid program";
  return (
    <section aria-label="Coverage" className="border-y border-mist bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
          {items.map((s) => (
            <div key={s.small} className="flex flex-col">
              <dt className="display text-2xl font-extrabold tabular-nums text-spruce sm:text-3xl">
                {s.big}
              </dt>
              <dd className="mt-0.5 text-sm leading-snug text-muted">{s.small}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 border-t border-mist pt-4 text-xs text-muted">{note}</p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- PageHero -- */
export interface HeroStat {
  label: string;
  value: string;
  note?: string;
}

/**
 * Two-column hero for state and county pages.
 *
 * Structure borrowed from the best of the category and then beaten on
 * substance: Givers puts an eyebrow pill with a micro-CTA above a short H1
 * with the location in brand colour, a one-line lead, one button, and a photo
 * bleeding off the right edge with a floating status card over it. It reads
 * beautifully — and then says nothing about the state it names ("Find a
 * program that can help you care for a loved one").
 *
 * So we keep the shape and fill the right rail with this place's actual
 * federal figures, which nobody else in the category publishes. The long
 * fact-led prose moves below the fold where it belongs, instead of being the
 * first thing a worried person has to read.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  ctaHref,
  ctaLabel,
  stats,
  statsHeading,
  statsFootnote,
  photo,
  lang = "en" as Lang,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  ctaHref: string;
  ctaLabel: string;
  stats?: HeroStat[];
  statsHeading?: string;
  statsFootnote?: string;
  photo?: { src: string; alt: string };
  lang?: Lang;
}) {
  const micro = lang === "es" ? "Herramienta gratis" : "Free tool";
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 pb-12 pt-8 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:pt-12">
        <div>
          {/* Eyebrow pill doubles as a low-commitment second entry point. */}
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1.5 text-sm font-semibold text-teal no-underline transition-colors hover:bg-teal/10"
          >
            <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
              {micro}
            </span>
            {eyebrow} →
          </Link>
          <h1 className="display h-hero mt-4 font-extrabold text-spruce">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">{lead}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
            </Link>
            <CallButton lang={lang} />
          </div>
        </div>

        {/* Right rail: this place's real figures, or the photograph. */}
        {stats && stats.length > 0 ? (
          <div className="card !p-6">
            {statsHeading && (
              <h2 className="display text-lg font-bold text-spruce">
                {statsHeading}
              </h2>
            )}
            <dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs font-bold uppercase tracking-wide text-muted">
                    {s.label}
                  </dt>
                  <dd className="display mt-1 text-3xl font-extrabold tabular-nums text-spruce">
                    {s.value}
                  </dd>
                  {s.note && (
                    <p className="mt-0.5 text-xs leading-snug text-muted">
                      {s.note}
                    </p>
                  )}
                </div>
              ))}
            </dl>
            {photo && (
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1376}
                height={768}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="mt-6 aspect-[16/9] w-full rounded-lg object-cover"
              />
            )}
            {statsFootnote && (
              <p className="mt-4 border-t border-mist pt-3 text-xs leading-relaxed text-muted">
                {statsFootnote}
              </p>
            )}
          </div>
        ) : photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={1376}
            height={768}
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
        ) : null}
      </div>
    </section>
  );
}


/* ------------------------------------------------------------ RoleSplit -- */
/**
 * Two doors, asked on arrival. CaringPays opens its state pages with exactly
 * this ("I Want To Get Paid To Care For My Loved One" / "I Want My Loved One
 * To Care For Me") and it is the right question: the two visitors want
 * opposite things and the same page cannot speak to both at once.
 *
 * Both routes feed one role-tagged quiz rather than two funnels, so the split
 * costs nothing operationally.
 */
export function RoleSplit({ lang = "en" as Lang }: { lang?: Lang }) {
  const t =
    lang === "es"
      ? {
          heading: "¿Qué le trae aquí hoy?",
          a: { h: "Quiero recibir pago por cuidar", b: "Cuido a un familiar y quiero que me paguen por ese trabajo.", cta: "Ver si califico" },
          b: { h: "Necesito cuidado en casa", b: "Necesito ayuda en casa y quiero elegir quién me la da.", cta: "Ver mis opciones" },
        }
      : {
          heading: "What brings you here today?",
          a: { h: "I want to get paid to care", b: "I already care for a relative, and I want to be paid for that work.", cta: "See if I qualify" },
          b: { h: "I need care at home", b: "I need help at home, and I want to choose who gives it.", cta: "See my options" },
        };
  const cards = [
    { ...t.a, href: "/qualify/?role=caregiver", tint: "border-pay" },
    { ...t.b, href: "/qualify/?role=recipient", tint: "border-teal" },
  ];
  return (
    <section className="band band-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="display h-section font-extrabold text-spruce">
          {t.heading}
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {cards.map((c) => (
            <Link
              key={c.h}
              href={c.href}
              className={`card group flex flex-col border-t-8 no-underline transition-shadow hover:shadow-[0_2px_4px_rgba(15,61,68,0.08),0_16px_40px_-12px_rgba(15,61,68,0.25)] ${c.tint}`}
            >
              <h3 className="display text-2xl font-extrabold text-spruce">
                {c.h}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{c.b}</p>
              <span className="mt-5 font-semibold text-teal underline decoration-teal/35 underline-offset-4 group-hover:decoration-teal">
                {c.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------ NationalPayCard -- */
/**
 * The pay module for the national home page. The state version of this card
 * showed Wisconsin's $12–$17 next to copy describing the whole country, which
 * read as a contradiction on the site's most-visited page.
 *
 * Both figures are derived in the data layer, not asserted: the range is the
 * min and max of every published hourly rate in states.json, and the count is
 * how many of the 51 jurisdictions publish one at all. The honest half — that
 * 22 don't — is the part competitors leave out.
 */
export function NationalPayCard({
  low,
  high,
  publishing,
  total,
  lang = "en" as Lang,
}: {
  low: string;
  high: string;
  publishing: number;
  total: number;
  lang?: Lang;
}) {
  const t =
    lang === "es"
      ? {
          heading: "Lo que los estados pagan a cuidadores familiares",
          vary: "Las tarifas varían según el estado",
          note: `${publishing} de ${total} estados publican una tarifa por hora. Los demás la fijan dentro del plan de cuidado — se lo diremos antes de inscribirse.`,
          source: "Reglas publicadas de Medicaid de cada estado",
        }
      : {
          heading: "What states pay family caregivers",
          vary: "Rates vary by state",
          note: `${publishing} of ${total} states publish an hourly figure. The rest set it inside the care plan — we get you that number before you enroll.`,
          source: "Each state's published Medicaid program rules",
        };
  return (
    <section
      aria-label={t.heading}
      className="card border-l-8 border-marigold"
    >
      <h2 className="display text-lg font-bold text-spruce">{t.heading}</h2>
      <p className="mt-2">
        <Money className="display text-5xl tracking-tight sm:text-6xl">
          {low}–{high}
        </Money>
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-mist px-3 py-1 text-sm font-semibold text-teal">
          {t.vary}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{t.note}</p>
      <p className="mt-4 border-t border-mist pt-3 text-xs text-muted">
        {t.source} · {lang === "es" ? site.updatedEs : site.updated}
      </p>
    </section>
  );
}


/* ------------------------------------------------------------ HowTo ------ */
/**
 * HowTo schema for the enrollment steps. The teardown found FAQPage on most
 * competitors and HowTo on none of them, and "how to get paid to care for a
 * family member" is a how-to query in the most literal sense.
 */
export function HowToJsonLd({
  name,
  description,
  steps,
  url,
}: {
  name: string;
  description: string;
  steps: Step[];
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name,
    description,
    totalTime: "P21D",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------------------------------------------------------- NearbyLinks -- */
/**
 * Counties that actually touch this one, with cross-state neighbours called
 * out. Border counties are the only links on the site that jump between
 * state clusters, so they are worth marking rather than hiding — both for a
 * reader who lives nearer the next state's county seat than their own, and
 * for a crawler that would otherwise see 51 sealed silos.
 */
export function NearbyLinks({
  neighbors,
  fallback,
  stateSlug,
  stateName,
  countyShort,
}: {
  neighbors: {
    slug: string;
    short: string;
    stateSlug: string;
    stateAbbr: string;
    crossState: boolean;
  }[];
  fallback: { slug: string; short: string }[];
  stateSlug: string;
  stateName: string;
  countyShort: string;
}) {
  const items = neighbors.length
    ? neighbors.map((n) => ({
        href: `/${n.stateSlug}/${n.slug}/`,
        label: n.crossState ? `${n.short}, ${n.stateAbbr}` : n.short,
        crossState: n.crossState,
      }))
    : fallback.map((c) => ({
        href: `/${stateSlug}/${c.slug}/`,
        label: c.short,
        crossState: false,
      }));
  if (!items.length) return null;
  const anyCross = items.some((i) => i.crossState);
  return (
    <section className="band band-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">Nearby</p>
        <h2 className="display h-section mt-2 font-extrabold text-spruce">
          Counties next to {countyShort}
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          {neighbors.length
            ? `The counties ${countyShort} touches, by Census boundaries — a few of those borders run across water.`
            : `Other counties in ${stateName}.`}
          {anyCross
            ? " Ones marked with a state abbreviation are across the line, and their rules are their state's, not this one's."
            : ""}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {items.map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold no-underline transition-colors ${
                  i.crossState
                    ? "border-clay/40 bg-white text-clay hover:bg-clay/5"
                    : "border-spruce/20 bg-white text-teal hover:bg-mist"
                }`}
              >
                {i.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={`/${stateSlug}/`}
              className="inline-flex items-center rounded-full bg-spruce px-4 py-2 text-sm font-semibold text-white no-underline"
            >
              All of {stateName} →
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- NeighborStates -- */
/** Border-state links, for the bottom of a state page. */
export function NeighborStateLinks({
  stateName,
  neighbors,
}: {
  stateName: string;
  neighbors: { slug: string; name: string }[];
}) {
  if (!neighbors.length) return null;
  return (
    <section className="band band-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">Across the line</p>
        <h2 className="display h-section mt-2 font-extrabold text-spruce">
          States that border {stateName}
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          Each state writes its own rules, and they differ more than people
          expect — a spouse who can be paid on one side of the line often
          cannot be on the other.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {neighbors.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/${n.slug}/`}
                className="inline-flex items-center rounded-full border border-spruce/20 bg-white px-4 py-2 text-sm font-semibold text-teal no-underline transition-colors hover:bg-mist"
              >
                {n.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/states/"
              className="inline-flex items-center rounded-full bg-spruce px-4 py-2 text-sm font-semibold text-white no-underline"
            >
              All 50 states + DC →
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
