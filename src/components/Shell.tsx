import Link from "next/link";
import { site } from "@/site.config";
import { Logo } from "@/components/Logo";

export type Lang = "en" | "es";

/** The state a page is about, when it is about one. */
export interface PageState {
  slug: string;
  name: string;
}

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
      "We never sell your information, set no cookies, and never store your IP address.",
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
      "Nunca vendemos su información, no usamos cookies y nunca guardamos su dirección IP.",
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

export function Footer({
  lang,
  state,
  nearbyStates = [],
}: {
  lang: Lang;
  state?: PageState;
  /** Border states, when the page is about one. */
  nearbyStates?: PageState[];
}) {
  const t = T[lang];
  const year = new Date().getFullYear();
  const es = lang === "es";

  /**
   * The bottom nav is a real directory, not a courtesy list.
   *
   * On a 3,300-page site the footer is the only block on every single page,
   * which makes it the strongest lever there is over how crawl depth and
   * internal equity are distributed. It used to be one column of nine links
   * that pointed at Wisconsin from every page on the site. Now it is four
   * columns, and the state column changes with the page: a visitor in Texas
   * gets Texas's pages, and so does Googlebot.
   */
  const bigStates: PageState[] = [
    { slug: "california", name: "California" },
    { slug: "texas", name: "Texas" },
    { slug: "florida", name: "Florida" },
    { slug: "new-york", name: "New York" },
    { slug: "pennsylvania", name: "Pennsylvania" },
    { slug: "ohio", name: "Ohio" },
  ];
  const stateLinks = state
    ? [
        { href: `/${state.slug}/`, label: es ? `Programas de ${state.name}` : `${state.name} programs` },
        { href: `/${state.slug}/caregiver-pay/`, label: es ? `Tarifas en ${state.name}` : `${state.name} caregiver pay` },
        { href: `/${state.slug}/spousal-caregiver/`, label: es ? `Pago para esposos` : `Spousal pay in ${state.name}` },
        ...(state.slug === "wisconsin"
          ? [{ href: "/wisconsin/iris/", label: "Wisconsin IRIS" }]
          : []),
      ]
    : bigStates.map((s) => ({ href: `/${s.slug}/`, label: s.name }));

  const startLinks = [
    { href: "/qualify/", label: t.navQuiz },
    { href: "/states/", label: t.navStates },
    { href: es ? "/es/" : "/", label: t.navHome },
    { href: "/about/", label: t.navAbout },
  ];

  const column = (heading: string, links: { href: string; label: string }[]) => (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
        {heading}
      </p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-white/85 underline-offset-4 hover:text-white hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="mt-0 bg-spruce pb-28 pt-16 text-white md:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="reverse" markClassName="h-9 w-9" textClassName="text-xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              {t.tagline}
            </p>
            {site.phone && site.phoneHref && (
              <a href={site.phoneHref} className="btn-primary mt-6 !min-h-11 text-sm">
                <span className="tnum">{site.phone}</span>
              </a>
            )}
            <p className="mt-4 text-sm text-white/70">{site.email}</p>
          </div>

          {column(es ? "Empezar" : "Start here", startLinks)}
          {column(
            state ? (es ? state.name : state.name) : es ? "Estados" : "States",
            stateLinks
          )}
          {column(
            es ? "Cerca" : "Nearby",
            nearbyStates.length
              ? nearbyStates.map((s) => ({ href: `/${s.slug}/`, label: s.name }))
              : bigStates.slice(0, 4).map((s) => ({ href: `/${s.slug}/`, label: s.name }))
          )}
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/15 pt-8 text-sm leading-relaxed text-white/65 md:grid-cols-3">
          <p>{t.notAgency}</p>
          <p>
            {t.privacy}{" "}
            <Link href="/privacy/" className="underline hover:text-white">
              {lang === "es" ? "Privacidad" : "Privacy"}
            </Link>
          </p>
          <p>
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
  state,
  nearbyStates,
  children,
}: {
  lang: Lang;
  /** Set on any page about one state, so the footer links that state. */
  state?: PageState;
  /** Border states, so the footer cross-links out of the state silo. */
  nearbyStates?: PageState[];
  children: React.ReactNode;
}) {
  return (
    <>
      <UtilityBar lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} state={state} nearbyStates={nearbyStates} />
      <StickyBar lang={lang} />
    </>
  );
}
