import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/Shell";
import RotatingWord from "@/components/RotatingWord";
import {
  CallButton,
  Faq,
  FaqJsonLd,
  HeroPhoto,
  Money,
  PayRateModule,
  QuickStart,
  QuizCta,
  StepTimeline,
  TrustStrip,
} from "@/components/Blocks";
import { site } from "@/site.config";
import { pageMeta } from "@/lib/seo";
import { wisconsin } from "@/data/states";

export const metadata: Metadata = pageMeta({
  title: "Reciba pago por cuidar a un familiar en Wisconsin",
  description:
    "Programas de Medicaid en Wisconsin, como IRIS, pueden pagarle por cuidar a un familiar en casa — incluso a su esposo(a). Verificación gratis de 2 minutos.",
  path: "/es/",
  locale: "es_US",
  languages: { en: "/", es: "/es/", "x-default": "/" },
});

const steps = [
  {
    title: "Vea si califica",
    duration: "2 minutos",
    body: "Responda 5 preguntas fáciles. Verá sus programas y su rango de pago al instante.",
  },
  {
    title: "Nosotros hacemos el papeleo",
    duration: "como 1 semana",
    body: "Llenamos los formularios con usted y los mandamos a la oficina correcta. Usted no persigue a nadie.",
  },
  {
    title: "Visita de inscripción",
    duration: "2–4 semanas",
    body: "El programa revisa las necesidades de cuidado de su ser querido. Le ayudamos a prepararse.",
  },
  {
    title: "Usted recibe su pago",
    duration: "cada semana",
    body: "Ya inscrito, le pagan por el cuidado que ya da — por depósito directo.",
  },
];

const wiPrograms = [
  {
    name: "IRIS",
    tag: "Paga a esposos ✓",
    body: "Usted manda. Usted elige quién le cuida — incluso un esposo o esposa. Sin lista de espera.",
    who: "Adultos 18+ con Medicaid",
    href: "/wisconsin/iris/",
  },
  {
    name: "Family Care",
    tag: "Paga a familiares ✓",
    body: "Un equipo de cuidado ayuda a planear todo. Tiene una opción autodirigida para contratar a familiares.",
    who: "Adultos que necesitan cuidado a largo plazo",
    href: "/wisconsin/",
  },
  {
    name: "Cuidado Personal (PCS)",
    tag: "Por agencia",
    body: "Usted se une a una agencia de cuidado en casa y recibe pago por cuidar a su ser querido.",
    who: "Miembros de Medicaid que necesitan ayuda en casa",
    href: "/wisconsin/",
  },
  {
    name: "CLTS Waiver",
    tag: "Para niños",
    body: "Para menores de 18 años con necesidades especiales. Los padres deben preguntar por las reglas de pago aquí.",
    who: "Niños menores de 18",
    href: "/wisconsin/",
  },
];

const faqs = [
  {
    q: "¿Esto es de verdad?",
    a: "Sí. Son programas reales de Medicaid del Departamento de Servicios de Salud de Wisconsin — IRIS, Family Care y Servicios de Cuidado Personal. Llevan años pagando a cuidadores familiares. Nosotros solo le ayudamos a inscribirse, y aplicar no le cuesta nada.",
  },
  {
    q: "¿Por qué me pagaría el gobierno?",
    a: "El cuidado en casa le cuesta a Medicaid mucho menos que un asilo. Por eso Wisconsin paga a familiares por dar ese cuidado en casa. Es bueno para su ser querido, y es la ley funcionando como debe.",
  },
  {
    q: "¿Cuánto me pagarán?",
    a: "En Wisconsin, los cuidadores familiares generalmente ganan de $12 a $17 por hora. Su pago exacto depende del programa y del plan de cuidado. Le decimos su cifra real antes de inscribirse.",
  },
  {
    q: "¿Necesito estudios o una licencia?",
    a: "No necesita licencia. La mayoría de los programas piden una verificación de antecedentes sencilla, y algunos dan un entrenamiento corto. Si ya cuida a su ser querido, es muy probable que pueda hacer esto.",
  },
  {
    q: "¿Y si mi ser querido todavía no tiene Medicaid?",
    a: "No hay problema. Muchas familias califican sin saberlo. Le ayudamos a verificar y aplicar — es gratis.",
  },
  {
    q: "¿Puedo recibir pago por cuidar a mi esposo(a)?",
    a: "En Wisconsin, sí. El programa IRIS permite contratar a familiares — incluso a un esposo o esposa. No todos los estados lo permiten, así que las familias de Wisconsin tienen suerte.",
  },
  {
    q: "¿Cuánto tiempo toma?",
    a: "La mayoría de las familias terminan la inscripción en unas 2 a 4 semanas después de entregar el papeleo. Después, los pagos llegan cada semana.",
  },
];

export default function HomePageEs() {
  return (
    <Shell lang="es">
      {/* ------------------------------------------------------------ Hero */}
      <section className="bg-paper" lang="es">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-2 md:pt-14">
          <div>
            <h1 className="display text-4xl font-extrabold leading-[1.05] tracking-tight text-spruce sm:text-5xl lg:text-6xl">
              <span className="text-teal">Wisconsin</span> paga a cuidadores
              familiares.{" "}
              <span className="block mt-2">
                Reciba <span className="text-pay">pago</span> por cuidar a{" "}
                <RotatingWord
                  words={["mamá", "papá", "su esposo", "su esposa", "la abuela"]}
                />
                .
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink">
              Un programa de Medicaid, no una bolsa de trabajo. Le ayudamos a
              inscribirse y recibir su pago — aplicar es gratis.
            </p>
            <div className="mt-7">
              <QuickStart lang="es" />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/qualify/?lang=es" className="btn-primary">
                Vea si califica →
              </Link>
              <CallButton lang="es" />
            </div>
          </div>
          <HeroPhoto lang="es" />
        </div>
      </section>

      {/* ----------------------------------------------------- Trust strip */}
      <TrustStrip
        lang="es"
        programs={["IRIS", "Family Care", "Cuidado Personal (PCS)", "CLTS"]}
      />

      {/* ------------------------------------------------- Pay-rate module */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" lang="es">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <PayRateModule state={wisconsin} lang="es" />
          <div>
            <h2 className="display text-3xl font-extrabold text-spruce">
              Pago real por el cuidado que ya da
            </h2>
            <p className="mt-4 leading-relaxed">
              Usted ya ayuda con comidas, baños, medicinas y traslados.
              Wisconsin tiene programas que pagan a familiares por ese mismo
              trabajo — generalmente <Money>$12–$17/hr</Money>, cada semana
              por depósito directo.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Su tarifa exacta se fija dentro del presupuesto del programa. Le
              mostraremos su cifra real antes de firmar nada.
            </p>
            <Link
              href="/wisconsin/caregiver-pay/"
              className="mt-4 inline-block font-semibold text-teal underline"
            >
              Vea cómo funciona el pago en Wisconsin (en inglés) →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Step timeline */}
      <section id="how-it-works" className="scroll-mt-20 bg-mist" lang="es">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-extrabold text-spruce">
            Cómo funciona
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            Cuatro pasos. Nosotros hacemos la parte difícil — el papeleo.
          </p>
          <div className="mt-8">
            <StepTimeline steps={steps} />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- Program picker */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" lang="es">
        <h2 className="display text-3xl font-extrabold text-spruce">
          Los programas de Wisconsin, en palabras sencillas
        </h2>
        <p className="mt-2 max-w-xl text-muted">
          Cada familia encaja en un programa distinto. La verificación de 2
          minutos le dice el suyo.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {wiPrograms.map((p) => (
            <article key={p.name} className="card flex flex-col !p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="display text-xl font-bold text-spruce">
                  {p.name}
                </h3>
                <span className="rounded-full bg-marigold-soft px-2.5 py-1 text-xs font-bold text-spruce">
                  {p.tag}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed">{p.body}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">
                {p.who}
              </p>
              <Link
                href={p.href}
                className="mt-3 text-sm font-semibold text-teal underline"
              >
                Más información →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <QuizCta lang="es" state="wisconsin" />
        </div>
      </section>

      {/* --------------------------------------------------------- FAQ ---- */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6" lang="es">
        <Faq heading="Respuestas honestas" items={faqs} id="home-faq-es" />
        <FaqJsonLd items={faqs} url={`${site.domain}/es/`} />
        <p className="mt-8 text-center">
          <Link href="/qualify/?lang=es" className="btn-primary">
            Vea si califica →
          </Link>
        </p>
      </section>

      {/* ------------------------------------------- Other states pointer -- */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6" lang="es">
        <div className="rounded-3xl border border-mist bg-white p-6 text-center">
          <p className="font-semibold text-spruce">
            ¿No vive en Wisconsin? Cada estado tiene su propio programa.
          </p>
          <p className="mt-1 text-sm text-muted">
            Elija su estado en la verificación de 2 minutos y le mostraremos lo
            que paga.
          </p>
          <Link
            href="/qualify/?lang=es"
            className="mt-3 inline-block font-semibold text-teal underline"
          >
            Verificar mi estado →
          </Link>
        </div>
      </section>
    </Shell>
  );
}
