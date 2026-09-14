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
    <section className="rounded-3xl bg-spruce px-6 py-10 text-center text-white sm:px-10">
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
export function HeroPhoto({ lang = "en" as Lang }: { lang?: Lang }) {
  const t =
    lang === "es"
      ? {
          photo:
            "Una hija ayuda a su padre a levantarse de su sillón junto a la ventana",
          proofTitle: "Pago semanal enviado",
          proofNote: "cifra de ejemplo",
          src: "/photos/hero-latino-family.webp",
        }
      : {
          photo:
            "A daughter sits with her mother at the kitchen table in morning light",
          proofTitle: "Weekly payment sent",
          proofNote: "example figure",
          src: "/photos/hero-daughter-mother.webp",
        };
  return (
    <div className="relative">
      <Image
        src={t.src}
        alt={t.photo}
        width={928}
        height={1152}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-[5/6]"
      />
      {/* ONE floating proof card — generic example numbers, labelled as examples */}
      <div className="card absolute -bottom-5 left-4 right-4 flex items-center gap-3 !rounded-2xl !p-4 sm:left-auto sm:right-6 sm:w-72">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pay/10 text-lg"
        >
          💵
        </span>
        <div>
          <p className="text-sm font-bold text-spruce">{t.proofTitle}</p>
          <p className="text-sm">
            <Money>$412.00</Money>{" "}
            <span className="text-xs text-muted">· {t.proofNote}</span>
          </p>
        </div>
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
