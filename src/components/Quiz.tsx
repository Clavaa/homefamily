"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import quizData from "@/data/quiz.json";
import { site } from "@/site.config";

/* ------------------------------------------------------------- types ---- */
type RuleStatus = "yes" | "limited" | "no";
type Relationship = "parent" | "spouse" | "minorChild" | "adultChild" | "relative";
type Lang = "en" | "es";

interface QuizState {
  slug: string;
  name: string;
  programs: string[];
  spouse: RuleStatus;
  parentMinor: RuleStatus;
  pay: { display: string | null; varies: boolean; taxFree: boolean };
  waitlist: "none" | "mixed" | "possible" | "long";
}

const STATES = quizData as QuizState[];

function matchStatus(s: QuizState, rel: Relationship): RuleStatus {
  if (rel === "spouse") return s.spouse;
  if (rel === "minorChild") return s.parentMinor;
  if (s.slug === "mississippi") return "limited";
  return "yes";
}

/* ------------------------------------------------------------- copy ----- */
const T = {
  en: {
    stepOf: (n: number) => `Step ${n} of 5 · about 1 minute`,
    back: "← Back",
    q1: "Which state do you live in?",
    q1Hint: "Every state has its own program. We'll match you to yours.",
    q1Placeholder: "Type your state…",
    q2: "Who do you care for?",
    q2Hint: "This decides which programs can pay you.",
    rels: {
      parent: "My mom or dad",
      spouse: "My husband or wife",
      minorChild: "My child (under 18)",
      adultChild: "My adult child",
      relative: "Another relative",
    } as Record<Relationship, string>,
    q3: "Does your loved one have Medicaid?",
    q3Hint: "Not sure is a fine answer. We help families check every day.",
    yes: "Yes",
    no: "No",
    notSure: "Not sure",
    q4: "Do you live together?",
    q4Hint: "Some programs need this. Most don't.",
    resultGood: (n: number, state: string) =>
      `Good news — you likely match ${n} ${state} ${n === 1 ? "program" : "programs"}.`,
    resultLimited: (state: string) =>
      `Good news — ${state} has at least one path that may work for you.`,
    resultNoSpouse: (state: string) =>
      `${state}'s programs don't pay spouses right now.`,
    resultNoMinor: (state: string) =>
      `${state}'s main programs don't pay parents of young children right now.`,
    resultNoBody:
      "That's the honest answer — and it's not the end of the road. Here is what IS possible:",
    noSpouseAlt: [
      "Another family member — like an adult child — can often be paid instead.",
      "Veteran families may have separate options that do pay spouses.",
      "Rules change often. We track them so you don't have to.",
    ],
    noMinorAlt: [
      "Special programs for children with high medical needs sometimes pay parents.",
      "Another relative in the home can often be paid.",
      "Rules change often. We track them so you don't have to.",
    ],
    callCheck: "Call us to check your options — it's free:",
    programsLabel: "Your likely programs",
    payLabel: "Typical pay",
    variesNote: "Rates vary — check with the program.",
    taxFree: "Often tax-free",
    waitlist: {
      none: "No waitlist — if you qualify, you're in.",
      mixed: "Some programs here have no waitlist.",
      possible: "There may be a waitlist. Applying early holds your place.",
      long: "Waitlists here can be long. Apply as soon as you can.",
    },
    medicaidNo:
      "These programs use Medicaid. Many families qualify and don't know it — we'll help you check and apply, free.",
    medicaidUnsure:
      "Not sure about Medicaid? That's okay. We'll help you check — it's free.",
    togetherNo:
      "Some programs need you to live together. We'll check which ones fit your family.",
    contactHeading: "See your programs & pay",
    contactBody:
      "Tell us where to reach you. A real person calls within one business day — no pressure, no cost.",
    contactHeadingNo: "Want us to double-check?",
    contactBodyNo:
      "Leave your number and we'll look at every option for your family — free.",
    nameLabel: "Your first name",
    phoneLabel: "Your phone number",
    submit: "See my programs & pay →",
    submitNo: "Check my options →",
    privacy: "Confidential and HIPAA-protected. We never sell your info.",
    phoneErr: "Please enter a phone number with 10 digits.",
    nameErr: "Please tell us your first name.",
    sendErr: "Something went wrong. Please try again — or just call us.",
    doneHeading: "Got it — we're on it.",
    doneBody: (name: string) =>
      `Thanks, ${name}. A real person will call you within one business day. Want answers now?`,
    doneCall: "Call us now",
    doneHome: "Back to home",
    sending: "Sending…",
  },
  es: {
    stepOf: (n: number) => `Paso ${n} de 5 · como 1 minuto`,
    back: "← Atrás",
    q1: "¿En qué estado vive usted?",
    q1Hint: "Cada estado tiene su propio programa. Le mostraremos el suyo.",
    q1Placeholder: "Escriba su estado…",
    q2: "¿A quién cuida usted?",
    q2Hint: "Esto decide qué programas pueden pagarle.",
    rels: {
      parent: "A mi mamá o papá",
      spouse: "A mi esposo o esposa",
      minorChild: "A mi hijo(a) (menor de 18)",
      adultChild: "A mi hijo(a) adulto(a)",
      relative: "A otro familiar",
    } as Record<Relationship, string>,
    q3: "¿Su ser querido tiene Medicaid?",
    q3Hint: "«No sé» es una buena respuesta. Ayudamos a familias a verificarlo todos los días.",
    yes: "Sí",
    no: "No",
    notSure: "No sé",
    q4: "¿Viven juntos?",
    q4Hint: "Algunos programas lo piden. La mayoría no.",
    resultGood: (n: number, state: string) =>
      `Buenas noticias — usted probablemente califica para ${n} ${n === 1 ? "programa" : "programas"} de ${state}.`,
    resultLimited: (state: string) =>
      `Buenas noticias — ${state} tiene al menos un camino que puede funcionar para usted.`,
    resultNoSpouse: (state: string) =>
      `Por ahora, los programas de ${state} no pagan a esposos.`,
    resultNoMinor: (state: string) =>
      `Por ahora, los programas principales de ${state} no pagan a padres de niños pequeños.`,
    resultNoBody:
      "Esa es la respuesta honesta — y no es el final del camino. Esto SÍ es posible:",
    noSpouseAlt: [
      "Otro familiar — como un hijo adulto — muchas veces sí puede recibir pago.",
      "Las familias de veteranos pueden tener opciones aparte que sí pagan a esposos.",
      "Las reglas cambian seguido. Nosotros las seguimos por usted.",
    ],
    noMinorAlt: [
      "Programas especiales para niños con altas necesidades médicas a veces pagan a los padres.",
      "Otro familiar en el hogar muchas veces puede recibir pago.",
      "Las reglas cambian seguido. Nosotros las seguimos por usted.",
    ],
    callCheck: "Llámenos para revisar sus opciones — es gratis:",
    programsLabel: "Sus programas probables",
    payLabel: "Pago típico",
    variesNote: "Las tarifas varían — confirme con el programa.",
    taxFree: "A menudo libre de impuestos",
    waitlist: {
      none: "Sin lista de espera — si califica, entra.",
      mixed: "Algunos programas aquí no tienen lista de espera.",
      possible: "Puede haber lista de espera. Aplicar temprano guarda su lugar.",
      long: "Las listas de espera aquí pueden ser largas. Aplique lo antes posible.",
    },
    medicaidNo:
      "Estos programas usan Medicaid. Muchas familias califican sin saberlo — le ayudamos a verificar y aplicar, gratis.",
    medicaidUnsure:
      "¿No está seguro sobre Medicaid? No hay problema. Le ayudamos a verificarlo — es gratis.",
    togetherNo:
      "Algunos programas piden que vivan juntos. Revisaremos cuáles le quedan a su familia.",
    contactHeading: "Vea sus programas y su pago",
    contactBody:
      "Díganos cómo contactarle. Una persona real le llama en un día hábil — sin presión, sin costo.",
    contactHeadingNo: "¿Quiere que lo revisemos?",
    contactBodyNo:
      "Deje su número y revisaremos cada opción para su familia — gratis.",
    nameLabel: "Su nombre",
    phoneLabel: "Su número de teléfono",
    submit: "Ver mis programas y pago →",
    submitNo: "Revisar mis opciones →",
    privacy: "Confidencial y protegido por HIPAA. Nunca vendemos su información.",
    phoneErr: "Por favor escriba un teléfono de 10 dígitos.",
    nameErr: "Por favor díganos su nombre.",
    sendErr: "Algo salió mal. Intente de nuevo — o simplemente llámenos.",
    doneHeading: "Listo — estamos en ello.",
    doneBody: (name: string) =>
      `Gracias, ${name}. Una persona real le llamará en un día hábil. ¿Quiere respuestas ahora?`,
    doneCall: "Llámenos ahora",
    doneHome: "Volver al inicio",
    sending: "Enviando…",
  },
} as const;

/* ----------------------------------------------------------- component -- */
export default function Quiz() {
  const params = useSearchParams();
  const lang: Lang = params.get("lang") === "es" ? "es" : "en";
  const t = T[lang];

  const initialState = useMemo(() => {
    const q = params.get("state");
    return q && STATES.some((s) => s.slug === q) ? q : null;
  }, [params]);
  const initialRel = useMemo(() => {
    const q = params.get("rel");
    const valid: Relationship[] = ["parent", "spouse", "minorChild", "adultChild", "relative"];
    return valid.includes(q as Relationship) ? (q as Relationship) : null;
  }, [params]);

  // If the widget already answered a question, skip past it.
  const [step, setStep] = useState(() => (initialState ? (initialRel ? 2 : 1) : initialRel ? 1 : 0));
  const [stateSlug, setStateSlug] = useState<string | null>(initialState);
  const [rel, setRel] = useState<Relationship | null>(initialRel);
  const [medicaid, setMedicaid] = useState<string | null>(null);
  const [together, setTogether] = useState<string | null>(null);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [err, setErr] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const stateData = STATES.find((s) => s.slug === stateSlug) || null;

  // Wisconsin pinned first, then alphabetical; typeahead filter on top.
  const stateList = useMemo(() => {
    const sorted = [...STATES].sort((a, b) =>
      a.slug === "wisconsin" ? -1 : b.slug === "wisconsin" ? 1 : a.name.localeCompare(b.name)
    );
    const f = filter.trim().toLowerCase();
    return f ? sorted.filter((s) => s.name.toLowerCase().includes(f)) : sorted;
  }, [filter]);

  function go(n: number) {
    setErr(null);
    setStep(n);
    // Move focus to the new question for screen readers / keyboard users.
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  const verdict: RuleStatus | null =
    stateData && rel ? matchStatus(stateData, rel) : null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setErr(t.nameErr);
    if (phone.replace(/\D/g, "").length < 10) return setErr(t.phoneErr);
    setErr(null);
    setSending(true);
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          state: stateData?.name,
          relationship: rel,
          medicaid,
          liveTogether: together,
          verdict,
          matchedPrograms: verdict === "no" ? [] : stateData?.programs,
          lang,
          website: hp, // honeypot
        }),
      });
      if (!res.ok) throw new Error("bad status");
      setDone(true);
    } catch {
      setErr(t.sendErr);
    } finally {
      setSending(false);
    }
  }

  /* ------------------------------------------------------------ success -- */
  if (done) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <p aria-hidden="true" className="text-5xl">✅</p>
        <h1 className="display mt-4 text-3xl font-extrabold text-spruce">
          {t.doneHeading}
        </h1>
        <p className="mt-3 leading-relaxed">{t.doneBody(name.trim())}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {site.phone && site.phoneHref && (
            <a href={site.phoneHref} className="btn-primary">
              📞 {t.doneCall} <span className="tnum">{site.phone}</span>
            </a>
          )}
          {/* Home becomes the primary action when there is no number to call. */}
          <Link
            href={lang === "es" ? "/es/" : "/"}
            className={site.phone ? "btn-outline" : "btn-primary"}
          >
            {t.doneHome}
          </Link>
        </div>
      </div>
    );
  }

  const stepLabel = Math.min(step + 1, 5);

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      {/* Progress: slim 6-segment bar (5 questions + finishing the form). */}
      <div aria-hidden="true" className="flex gap-1.5">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-pay" : "bg-mist"}`}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-muted">{t.stepOf(stepLabel)}</p>
        {step > 0 ? (
          <button
            type="button"
            onClick={() => go(step - 1)}
            className="text-sm font-semibold text-teal underline"
          >
            {t.back}
          </button>
        ) : (
          <Link
            href={lang === "es" ? "/es/" : "/"}
            className="text-sm font-semibold text-teal underline"
          >
            {t.back}
          </Link>
        )}
      </div>

      {/* ---------------------------------------------------- Step 1: state */}
      {step === 0 && (
        <section className="mt-6">
          <h1 ref={headingRef} tabIndex={-1} className="display text-3xl font-extrabold text-spruce outline-none">
            {t.q1}
          </h1>
          <p className="mt-2 text-muted">{t.q1Hint}</p>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder={t.q1Placeholder}
            aria-label={t.q1}
            className="field mt-5"
            autoComplete="off"
          />
          <ul className="mt-3 max-h-80 space-y-2 overflow-y-auto pr-1" role="list">
            {stateList.map((s) => (
              <li key={s.slug}>
                <button
                  type="button"
                  className="chip"
                  data-selected={stateSlug === s.slug}
                  onClick={() => {
                    setStateSlug(s.slug);
                    go(1);
                  }}
                >
                  {s.name}
                  <span aria-hidden="true" className="text-teal">→</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ---------------------------------------------- Step 2: relationship */}
      {step === 1 && (
        <section className="mt-6">
          <h1 ref={headingRef} tabIndex={-1} className="display text-3xl font-extrabold text-spruce outline-none">
            {t.q2}
          </h1>
          <p className="mt-2 text-muted">{t.q2Hint}</p>
          <div className="mt-5 space-y-2">
            {(Object.keys(t.rels) as Relationship[]).map((r) => (
              <button
                key={r}
                type="button"
                className="chip"
                data-selected={rel === r}
                onClick={() => {
                  setRel(r);
                  go(2);
                }}
              >
                {t.rels[r]}
                <span aria-hidden="true" className="text-teal">→</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* -------------------------------------------------- Step 3: Medicaid */}
      {step === 2 && (
        <section className="mt-6">
          <h1 ref={headingRef} tabIndex={-1} className="display text-3xl font-extrabold text-spruce outline-none">
            {t.q3}
          </h1>
          <p className="mt-2 text-muted">{t.q3Hint}</p>
          <div className="mt-5 space-y-2">
            {[
              { v: "yes", label: t.yes },
              { v: "no", label: t.no },
              { v: "notSure", label: t.notSure },
            ].map((o) => (
              <button
                key={o.v}
                type="button"
                className="chip"
                data-selected={medicaid === o.v}
                onClick={() => {
                  setMedicaid(o.v);
                  go(3);
                }}
              >
                {o.label}
                <span aria-hidden="true" className="text-teal">→</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* --------------------------------------------- Step 4: live together */}
      {step === 3 && (
        <section className="mt-6">
          <h1 ref={headingRef} tabIndex={-1} className="display text-3xl font-extrabold text-spruce outline-none">
            {t.q4}
          </h1>
          <p className="mt-2 text-muted">{t.q4Hint}</p>
          <div className="mt-5 space-y-2">
            {[
              { v: "yes", label: t.yes },
              { v: "no", label: t.no },
            ].map((o) => (
              <button
                key={o.v}
                type="button"
                className="chip"
                data-selected={together === o.v}
                onClick={() => {
                  setTogether(o.v);
                  go(4);
                }}
              >
                {o.label}
                <span aria-hidden="true" className="text-teal">→</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* --------------------- Step 5: result preview, THEN contact capture */}
      {step === 4 && stateData && rel && verdict && (
        <section className="mt-6">
          {verdict !== "no" ? (
            <>
              <h1 ref={headingRef} tabIndex={-1} className="display text-3xl font-extrabold text-spruce outline-none">
                {verdict === "yes"
                  ? t.resultGood(stateData.programs.length, stateData.name)
                  : t.resultLimited(stateData.name)}
              </h1>

              <div className="card mt-5 !p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-muted">
                  {t.programsLabel}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {stateData.programs.map((p) => (
                    <li key={p} className="flex items-start gap-2 font-semibold text-spruce">
                      <span aria-hidden="true" className="mt-0.5 text-pay">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-mist pt-4">
                  <p className="text-sm font-bold uppercase tracking-wide text-muted">
                    {t.payLabel}
                  </p>
                  {stateData.pay.display ? (
                    <p className="tnum display mt-1 text-3xl font-extrabold text-pay">
                      {stateData.pay.display}
                    </p>
                  ) : (
                    <p className="mt-1 font-bold text-spruce">{t.variesNote}</p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-2 text-sm">
                    {stateData.pay.taxFree && (
                      <span className="rounded-full bg-marigold-soft px-3 py-1 font-bold text-spruce">
                        {t.taxFree}
                      </span>
                    )}
                    {stateData.pay.display && stateData.pay.varies && (
                      <span className="rounded-full bg-mist px-3 py-1 font-semibold text-teal">
                        {t.variesNote}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-muted">
                    {t.waitlist[stateData.waitlist]}
                  </p>
                </div>
              </div>

              {(medicaid === "no" || medicaid === "notSure") && (
                <p className="mt-4 rounded-2xl bg-marigold-soft p-4 text-sm leading-relaxed text-spruce">
                  {medicaid === "no" ? t.medicaidNo : t.medicaidUnsure}
                </p>
              )}
              {together === "no" && (
                <p className="mt-3 rounded-2xl bg-mist p-4 text-sm leading-relaxed text-spruce">
                  {t.togetherNo}
                </p>
              )}

              <ContactForm
                heading={t.contactHeading}
                body={t.contactBody}
                submitLabel={sending ? t.sending : t.submit}
                {...{ name, setName, phone, setPhone, hp, setHp, err, sending, submit, t }}
              />
            </>
          ) : (
            <>
              <h1 ref={headingRef} tabIndex={-1} className="display text-3xl font-extrabold text-spruce outline-none">
                {rel === "spouse"
                  ? t.resultNoSpouse(stateData.name)
                  : t.resultNoMinor(stateData.name)}
              </h1>
              <p className="mt-3 leading-relaxed">{t.resultNoBody}</p>
              <ul className="mt-4 space-y-2">
                {(rel === "spouse" ? t.noSpouseAlt : t.noMinorAlt).map((a) => (
                  <li key={a} className="flex items-start gap-2 rounded-2xl bg-white p-4 leading-relaxed">
                    <span aria-hidden="true" className="mt-0.5 text-pay">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
              {site.phone && site.phoneHref && (
                <p className="mt-5 rounded-2xl bg-mist p-4 font-semibold text-spruce">
                  {t.callCheck}{" "}
                  <a href={site.phoneHref} className="tnum text-teal underline">
                    {site.phone}
                  </a>
                </p>
              )}
              <ContactForm
                heading={t.contactHeadingNo}
                body={t.contactBodyNo}
                submitLabel={sending ? t.sending : t.submitNo}
                {...{ name, setName, phone, setPhone, hp, setHp, err, sending, submit, t }}
              />
            </>
          )}
        </section>
      )}
    </div>
  );
}

/* ------------------------------------------------------ contact section -- */
function ContactForm(props: {
  heading: string;
  body: string;
  submitLabel: string;
  name: string;
  setName: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  hp: string;
  setHp: (v: string) => void;
  err: string | null;
  sending: boolean;
  submit: (e: React.FormEvent) => void;
  t: (typeof T)["en"] | (typeof T)["es"];
}) {
  const { heading, body, submitLabel, name, setName, phone, setPhone, hp, setHp, err, sending, submit, t } = props;
  return (
    <form onSubmit={submit} className="card mt-6 !p-5" noValidate>
      <h2 className="display text-xl font-bold text-spruce">{heading}</h2>
      <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
      <div className="mt-4 space-y-3">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-spruce">
            {t.nameLabel}
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="field"
            autoComplete="given-name"
            required
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-spruce">
            {t.phoneLabel}
          </span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="field tnum"
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>
        {/* Honeypot — humans never see or fill this. */}
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input
              type="text"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
      </div>
      {err && (
        <p role="alert" className="mt-3 text-sm font-semibold text-[#B53319]">
          {err}
        </p>
      )}
      <button type="submit" disabled={sending} className="btn-primary mt-4 w-full disabled:opacity-60">
        {submitLabel}
      </button>
      <p className="mt-3 text-center text-xs text-muted">{t.privacy}</p>
    </form>
  );
}
