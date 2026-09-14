import Link from "next/link";
import { site } from "@/site.config";
import { Logo } from "@/components/Logo";

export type Lang = "en" | "es";

const T = {
  en: {
    hablamos: "Hablamos español",
    navTopStates: "States",
    navTopHow: "How it works",
    navTopAbout: "About",
    call: "Call",
    qualify: "See if you qualify",
    qualifyArrow: "See if you qualify →",
    tagline: "We help family caregivers get paid through real state programs.",
    notAgency:
      "We are not a state agency. We help families find and enroll in state Medicaid programs. Free to apply — we're paid by the program, never by you.",
    nav: "Pages",
    navHome: "Home",
    navQuiz: "Do I qualify?",
    navStates: "Your state",
    navWi: "Wisconsin programs",
    navAbout: "About us",
    navLeadership: "Our leadership",
    privacy:
      "Your info is confidential and HIPAA-protected. We never sell your information.",
    rights: "All rights reserved.",
  },
  es: {
    hablamos: "We speak English",
    navTopStates: "Estados",
    navTopHow: "Cómo funciona",
    navTopAbout: "Quiénes somos",
    call: "Llamar",
    qualify: "Vea si califica",
    qualifyArrow: "Vea si califica →",
    tagline:
      "Ayudamos a cuidadores familiares a recibir pago por medio de programas estatales reales.",
    notAgency:
      "No somos una agencia del estado. Ayudamos a las familias a inscribirse en programas de Medicaid. Aplicar es gratis — el programa nos paga a nosotros, usted nunca paga nada.",
    nav: "Páginas",
    navHome: "Inicio",
    navQuiz: "¿Califico?",
    navStates: "Su estado",
    navWi: "Programas de Wisconsin",
    navAbout: "Quiénes somos (en inglés)",
    navLeadership: "Nuestro equipo (en inglés)",
    privacy:
      "Su información es confidencial y protegida por HIPAA. Nunca vendemos su información.",
    rights: "Todos los derechos reservados.",
  },
} as const;

/** Top utility bar: EN|ES toggle, brand, minimal nav, phone pill, green CTA.
 *  Everything that doesn't fit a given width drops out — the footer carries
 *  the full page list, and the sticky mobile bar carries Call + Qualify. */
export function UtilityBar({ lang }: { lang: Lang }) {
  const t = T[lang];
  const home = lang === "es" ? "/es/" : "/";
  const how = lang === "es" ? "/es/#how-it-works" : "/#how-it-works";
  return (
    <header className="border-b border-mist bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link
            href={lang === "es" ? "/" : "/es/"}
            className="shrink-0 whitespace-nowrap text-sm font-semibold text-muted underline decoration-muted/30 underline-offset-4 transition-colors hover:text-spruce hover:decoration-spruce"
            lang={lang === "es" ? "en" : "es"}
          >
            {lang === "es" ? "English" : "Español"}
          </Link>
          <Link href={home} aria-label={site.brand} className="shrink-0 no-underline">
            <Logo
              markClassName="h-8 w-8 sm:h-9 sm:w-9"
              textClassName="whitespace-nowrap text-lg sm:text-xl"
            />
          </Link>
        </div>
        <nav
          aria-label={t.nav}
          className="hidden items-center gap-6 text-sm font-semibold text-spruce lg:flex"
        >
          <Link href="/states/" className="hover:text-teal">
            {t.navTopStates}
          </Link>
          <Link href={how} className="hover:text-teal">
            {t.navTopHow}
          </Link>
          <Link href="/about/" className="hover:text-teal">
            {t.navTopAbout}
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Full phone pill from md up; icon-only on phones (sticky bar has
              Call). Both disappear entirely when no number is configured. */}
          {site.phone && site.phoneHref && (
            <>
              <a
                href={site.phoneHref}
                className="hidden items-center gap-2 whitespace-nowrap rounded-full border-2 border-teal px-4 py-1.5 text-sm font-semibold text-teal transition-colors hover:bg-mist md:inline-flex"
              >
                <span aria-hidden="true">📞</span>
                <span className="tnum">{site.phone}</span>
              </a>
              <a
                href={site.phoneHref}
                aria-label={`${t.call} ${site.phone}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal text-base text-teal md:hidden"
              >
                <span aria-hidden="true">📞</span>
              </a>
            </>
          )}
          <Link
            href="/qualify/"
            className="btn-primary hidden !min-h-10 whitespace-nowrap !px-5 !py-2 text-sm sm:inline-flex"
          >
            {t.qualifyArrow}
          </Link>
        </div>
      </div>
    </header>
  );
}

/** Sticky mobile bottom bar: 📞 Call | See if you qualify. */
export function StickyBar({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-mist bg-white/95 p-2 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        {site.phone && site.phoneHref && (
          <a
            href={site.phoneHref}
            className="btn-outline w-1/2 !px-3 text-sm"
          >
            <span aria-hidden="true">📞</span> {t.call}
          </a>
        )}
        <Link
          href="/qualify/"
          className={`btn-primary !px-3 text-sm ${site.phone ? "w-1/2" : "w-full"}`}
        >
          {t.qualify}
        </Link>
      </div>
    </div>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const t = T[lang];
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-spruce pb-28 pt-12 text-white md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p>
            <Logo
              variant="reverse"
              markClassName="h-10 w-10"
              textClassName="text-2xl"
            />
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
            {t.tagline}
          </p>
          {site.phone && site.phoneHref && (
            <a
              href={site.phoneHref}
              className="btn-primary mt-5 !min-h-11 text-sm"
            >
              <span aria-hidden="true">📞</span>
              <span className="tnum">{site.phone}</span>
            </a>
          )}
          <p className="mt-3 text-sm text-white/80">{site.email}</p>
        </div>
        <nav aria-label={t.nav}>
          <p className="text-sm font-bold uppercase tracking-wide text-white/60">
            {t.nav}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={lang === "es" ? "/es/" : "/"} className="text-white/90 hover:text-white">
                {t.navHome}
              </Link>
            </li>
            <li>
              <Link href="/qualify/" className="text-white/90 hover:text-white">
                {t.navQuiz}
              </Link>
            </li>
            <li>
              <Link href="/states/" className="text-white/90 hover:text-white">
                {t.navStates}
              </Link>
            </li>
            <li>
              <Link href="/about/" className="text-white/90 hover:text-white">
                {t.navAbout}
              </Link>
            </li>
            <li>
              <Link
                href="/about/leadership/"
                className="text-white/90 hover:text-white"
              >
                {t.navLeadership}
              </Link>
            </li>
            <li>
              <Link href="/wisconsin/" className="text-white/90 hover:text-white">
                {t.navWi}
              </Link>
            </li>
            <li>
              <Link href="/wisconsin/iris/" className="text-white/90 hover:text-white">
                Wisconsin IRIS
              </Link>
            </li>
            <li>
              <Link
                href="/wisconsin/spousal-caregiver/"
                className="text-white/90 hover:text-white"
              >
                {lang === "es" ? "Pago para esposos (WI)" : "Spousal caregiver pay (WI)"}
              </Link>
            </li>
            <li>
              <Link
                href="/wisconsin/caregiver-pay/"
                className="text-white/90 hover:text-white"
              >
                {lang === "es" ? "Tarifas de pago (WI)" : "Caregiver pay rates (WI)"}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-sm leading-relaxed text-white/70">
          <p>{t.notAgency}</p>
          <p className="mt-4">{t.privacy}</p>
          <p className="mt-4">
            © <span className="tnum">{year}</span> {site.brand}. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

/** Page chrome wrapper — utility bar on top, sticky call bar + footer below. */
export default function Shell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <>
      <UtilityBar lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
      <StickyBar lang={lang} />
    </>
  );
}
