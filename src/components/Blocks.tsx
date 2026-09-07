import Link from "next/link";
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
        <p className="text-white/85">
          {t.call}{" "}
          <a href={site.phoneHref} className="tnum font-bold text-white underline">
            {site.phone}
          </a>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------- Photo placeholder ------ */
/**
 * Styled placeholder for the hero photograph.
 * Alt-intent: multigenerational pair — adult daughter and her mother at a
 * kitchen table in warm window light, caregiver as the hero of the frame,
 * one marigold accent (a cardigan or mug), 24px mask. Cast for WI reality.
 */
export function HeroPhoto({ lang = "en" as Lang }: { lang?: Lang }) {
  const t =
    lang === "es"
      ? {
          photo: "Foto: cuidadora con su mamá en casa",
          proofTitle: "Pago semanal enviado",
          proofNote: "cifra de ejemplo",
        }
      : {
          photo: "Photo: caregiver with her mom at home",
          proofTitle: "Weekly payment sent",
          proofNote: "example figure",
        };
  return (
    <div className="relative">
      <div
        role="img"
        aria-label={t.photo}
        className="flex aspect-[4/5] w-full items-end justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-mist via-marigold-soft to-mist sm:aspect-[5/6]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          className="w-3/4 text-teal/25"
          fill="currentColor"
        >
          {/* simple two-figure mark standing in for the photo */}
          <circle cx="78" cy="70" r="22" />
          <path d="M40 160c0-24 17-42 38-42s38 18 38 42v40H40z" />
          <circle cx="136" cy="86" r="17" />
          <path d="M108 166c0-19 13-33 28-33s28 14 28 33v34h-56z" />
        </svg>
      </div>
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
