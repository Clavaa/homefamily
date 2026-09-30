import Link from "next/link";
import { Fragment } from "react";
import Shell from "@/components/Shell";
import {
  Breadcrumbs,
  Faq,
  FaqJsonLd,
  PageHero,
  PageJsonLd,
  ProofBar,
  QuizCta,
  VerdictBadge,
} from "@/components/Blocks";
import { site } from "@/site.config";
import { states } from "@/data/states";
import { CLUSTER_LABEL, type Block, type Guide } from "@/content/types";
import { guideByPath, guidesInCluster, guidePath } from "@/content";

/**
 * The one renderer behind every /guides/* and /compare/* page.
 *
 * Built for how search works now, not in 2015:
 *  - a 40–60 word answer box right under the hero, the unit Google lifts into
 *    featured snippets and AI overviews
 *  - every H2 carries an id and appears in a table of contents, so the page
 *    can earn jump-to links in results and a reader can skip to their part
 *  - Article + FAQPage + BreadcrumbList + WebPage JSON-LD, all @id-linked to
 *    the site organization node
 *  - contextual in-body links, a cluster sibling rail, related-reading cards
 *    and a 51-state link grid, so no page on the site is ever a dead end and
 *    link equity flows from the library into the state and county pages that
 *    actually convert
 */

/* ------------------------------------------------------------ rich text -- */
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

export function Rich({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      const href = m[2];
      out.push(
        href.startsWith("/") ? (
          <Link key={m.index} href={href} className="prose-link">
            {m[1]}
          </Link>
        ) : (
          <a
            key={m.index}
            href={href}
            rel="nofollow noopener"
            target="_blank"
            className="prose-link"
          >
            {m[1]}
          </a>
        )
      );
    } else {
      out.push(<strong key={m.index} className="font-bold text-spruce">{m[3]}</strong>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** Plain text of a marked-up string: for schema, word counts and FAQ text. */
export function plain(text: string): string {
  return text.replace(TOKEN, (_all, a, _h, b) => a ?? b ?? "");
}

/* --------------------------------------------------------- state tables -- */
function StateTable({ kind }: { kind: "programs" | "pay" | "spouse" }) {
  const head =
    kind === "programs"
      ? ["State", "Programs that can pay a family caregiver", ""]
      : kind === "pay"
        ? ["State", "Reported family caregiver pay", ""]
        : ["State", "Can a spouse be paid?", ""];
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-spruce/10 bg-white">
      <table className="w-full min-w-[34rem] text-left text-base">
        <thead className="bg-mist text-sm uppercase tracking-wide text-muted">
          <tr>
            {head.map((h, i) => (
              <th key={i} scope="col" className="px-4 py-3 font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {states.map((s) => (
            <tr key={s.slug} className="border-t border-mist align-top">
              <th scope="row" className="px-4 py-3 font-semibold text-spruce">
                <Link href={`/${s.slug}/`} className="hover:text-teal">
                  {s.name}
                </Link>
              </th>
              <td className="px-4 py-3">
                {kind === "programs" && s.programs.join(", ")}
                {kind === "pay" && (
                  <span className="tnum">
                    {s.pay.display ?? "Set per care plan — no flat rate published"}
                  </span>
                )}
                {kind === "spouse" && <VerdictBadge status={s.spouse.status} />}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-sm">
                <Link
                  href={
                    kind === "programs"
                      ? `/${s.slug}/caregiver-program/`
                      : kind === "pay"
                        ? `/${s.slug}/caregiver-pay/`
                        : `/${s.slug}/spousal-caregiver/`
                  }
                  className="prose-link"
                >
                  {kind === "programs"
                    ? `${s.name} program`
                    : kind === "pay"
                      ? `${s.name} pay`
                      : `${s.name} spouse rules`}{" "}
                  →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* --------------------------------------------------------------- blocks -- */
function BlockView({ b, state }: { b: Block; state?: string }) {
  if (typeof b === "string") {
    return (
      <p className="mt-4 leading-relaxed">
        <Rich text={b} />
      </p>
    );
  }
  if ("h3" in b) {
    return (
      <h3 className="display mt-8 text-xl font-bold text-spruce">
        <Rich text={b.h3} />
      </h3>
    );
  }
  if ("ul" in b || "ol" in b) {
    const items = "ul" in b ? b.ul : b.ol;
    const Tag = "ul" in b ? "ul" : "ol";
    return (
      <Tag
        className={`mt-4 space-y-2 pl-6 leading-relaxed ${
          "ul" in b ? "list-disc marker:text-teal" : "list-decimal marker:font-bold marker:text-teal"
        }`}
      >
        {items.map((it, i) => (
          <li key={i}>
            <Rich text={it} />
          </li>
        ))}
      </Tag>
    );
  }
  if ("table" in b) {
    const t = b.table;
    return (
      <div className="my-6 overflow-x-auto rounded-xl border border-spruce/10 bg-white">
        <table className="w-full min-w-[32rem] text-left text-base">
          {t.caption && (
            <caption className="px-4 pt-4 text-left text-sm font-semibold text-muted">
              {t.caption}
            </caption>
          )}
          <thead className="bg-mist text-sm uppercase tracking-wide text-muted">
            <tr>
              {t.head.map((h, i) => (
                <th key={i} scope="col" className="px-4 py-3 font-bold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r, i) => (
              <tr key={i} className="border-t border-mist align-top">
                {r.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="px-4 py-3 font-semibold text-spruce">
                      <Rich text={c} />
                    </th>
                  ) : (
                    <td key={j} className="px-4 py-3">
                      <Rich text={c} />
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if ("callout" in b) {
    const tone = b.callout.tone ?? "info";
    const cls =
      tone === "warn"
        ? "border-clay bg-clay/5"
        : tone === "money"
          ? "border-pay bg-pay/5"
          : "border-teal bg-mist/60";
    return (
      <aside className={`my-6 rounded-xl border-l-4 p-5 ${cls}`}>
        {b.callout.title && (
          <p className="font-bold text-spruce">
            <Rich text={b.callout.title} />
          </p>
        )}
        <p className={`leading-relaxed ${b.callout.title ? "mt-1" : ""}`}>
          <Rich text={b.callout.text} />
        </p>
      </aside>
    );
  }
  if ("stateTable" in b) return <StateTable kind={b.stateTable} />;
  if ("chips" in b) {
    return (
      <ul className="mt-5 flex flex-wrap gap-2">
        {b.chips.map((c) => (
          <li key={c.href + c.label}>
            <Link
              href={c.href}
              className="inline-flex items-center rounded-full border border-spruce/20 bg-white px-4 py-2 text-sm font-semibold text-teal no-underline transition-colors hover:bg-mist"
            >
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  if ("cards" in b) {
    return (
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {b.cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="card group !p-5 no-underline transition-shadow hover:shadow-[0_12px_32px_-14px_rgba(15,61,68,0.3)]"
          >
            <p className="display text-lg font-bold text-spruce group-hover:text-teal">
              {c.title} →
            </p>
            <p className="mt-1 text-base leading-relaxed text-muted">{c.text}</p>
          </Link>
        ))}
      </div>
    );
  }
  if ("cta" in b) {
    return (
      <div className="my-10">
        <QuizCta lang="en" state={state} />
      </div>
    );
  }
  return null;
}

/* -------------------------------------------------------------- helpers -- */
function blockText(b: Block): string {
  if (typeof b === "string") return plain(b);
  if ("h3" in b) return b.h3;
  if ("ul" in b) return b.ul.map(plain).join(" ");
  if ("ol" in b) return b.ol.map(plain).join(" ");
  if ("table" in b) return b.table.rows.flat().map(plain).join(" ");
  if ("callout" in b) return plain(b.callout.text);
  if ("cards" in b) return b.cards.map((c) => c.text).join(" ");
  return "";
}

export function readingMinutes(g: Guide): number {
  const words = [
    g.lead,
    g.answer,
    ...g.takeaways,
    ...g.sections.flatMap((s) => [s.h2, ...s.blocks.map(blockText)]),
    ...g.faqs.flatMap((f) => [f.q, f.a]),
  ]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(3, Math.round(words / 230));
}

function fmtDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function ArticleJsonLd({ g, url }: { g: Guide; url: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: g.h1,
    description: g.description,
    image: `${site.domain}${g.photo.src}`,
    datePublished: g.published,
    dateModified: g.updated,
    inLanguage: "en-US",
    mainEntityOfPage: { "@id": `${url}#webpage` },
    author: { "@id": `${site.domain}/#organization` },
    publisher: { "@id": `${site.domain}/#organization` },
    articleSection: CLUSTER_LABEL[g.cluster],
    keywords: g.keywords.slice(0, 20).join(", "),
    hasPart: g.sections.map((s) => ({
      "@type": "WebPageElement",
      name: s.h2,
      url: `${url}#${s.id}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------------------------------------------------------------- page -- */
export default function Article({ g }: { g: Guide }) {
  const path = guidePath(g);
  const url = `${site.domain}${path}`;
  const hub =
    g.section === "compare"
      ? { name: "Compare", path: "/compare/" }
      : { name: "Guides", path: "/guides/" };
  const crumbs = [hub, { name: g.short, path }];
  const siblings = guidesInCluster(g.cluster).filter((x) => x.slug !== g.slug);
  const related = g.related
    .map((p) => guideByPath(p))
    .filter((x): x is Guide => Boolean(x));
  const faqs = g.faqs.map((f) => ({ q: f.q, a: plain(f.a) }));
  const minutes = readingMinutes(g);

  return (
    <Shell lang="en">
      <PageJsonLd url={url} name={g.h1} about={g.description} crumbs={crumbs} />
      <ArticleJsonLd g={g} url={url} />
      {faqs.length > 0 && <FaqJsonLd items={faqs} url={url} />}
      <Breadcrumbs crumbs={crumbs} />

      <PageHero
        eyebrow={g.eyebrow}
        title={g.h1}
        lead={g.lead}
        ctaHref="/qualify/"
        ctaLabel="See if you qualify →"
        photo={g.photo}
      />

      <ProofBar />

      {/* ---------------------------------------------- Answer + takeaways -- */}
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <p className="text-sm text-muted">
          <span className="font-semibold text-spruce">{CLUSTER_LABEL[g.cluster]}</span>
          {" · "}Updated <time dateTime={g.updated}>{fmtDate(g.updated)}</time>
          {" · "}
          {minutes} min read
        </p>
        <div className="mt-4 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <div className="card border-l-8 !border-l-pay">
            <p className="eyebrow">The short answer</p>
            <p className="mt-2 text-lg leading-relaxed">
              <Rich text={g.answer} />
            </p>
          </div>
          <div className="card">
            <p className="eyebrow">Key takeaways</p>
            <ul className="mt-3 space-y-2 text-base leading-relaxed">
              {g.takeaways.map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="mt-0.5 font-bold text-pay">
                    ✓
                  </span>
                  <span>
                    <Rich text={t} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ TOC + article body -- */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[250px_1fr]">
        <aside className="lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:self-start lg:overflow-y-auto">
          <details className="card !p-5 lg:hidden">
            <summary className="cursor-pointer font-bold text-spruce">
              On this page ({g.sections.length} sections)
            </summary>
            <Toc g={g} />
          </details>
          <nav aria-label="On this page" className="hidden lg:block">
            <p className="eyebrow">On this page</p>
            <Toc g={g} />
          </nav>
        </aside>

        <article className="min-w-0 max-w-3xl">
          {g.sections.map((s, i) => (
            <Fragment key={s.id}>
              <section id={s.id} className="scroll-mt-6 pt-2">
                <h2 className="display mt-10 text-3xl font-extrabold leading-tight text-spruce first:mt-0">
                  <a href={`#${s.id}`} className="no-underline hover:text-teal">
                    {s.h2}
                  </a>
                </h2>
                {s.blocks.map((b, j) => (
                  <BlockView key={j} b={b} />
                ))}
              </section>
              {/* One CTA a third of the way down, unless the writer placed one. */}
              {i === Math.floor(g.sections.length / 3) &&
                !g.sections.some((x) => x.blocks.some((b) => typeof b === "object" && "cta" in b)) && (
                  <div className="my-10">
                    <QuizCta lang="en" />
                  </div>
                )}
            </Fragment>
          ))}

          {faqs.length > 0 && (
            <div id="faq" className="mt-14 scroll-mt-6">
              <Faq heading="Frequently asked questions" items={faqs} id="faq" />
            </div>
          )}

          {g.sources.length > 0 && (
            <p className="mt-8 text-xs leading-relaxed text-muted">
              Sources:{" "}
              {g.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && " · "}
                  <a href={s.url} rel="nofollow noopener" className="underline hover:text-teal">
                    {s.label}
                  </a>
                </span>
              ))}
              . Program rules and rates change — always confirm with the program. Reviewed{" "}
              {fmtDate(g.updated)}.
            </p>
          )}
        </article>
      </div>

      {/* ------------------------------------------------- Related reading -- */}
      {related.length > 0 && (
        <section className="band band-white mt-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="eyebrow">Keep reading</p>
            <h2 className="display h-section mt-2 font-extrabold text-spruce">
              Related guides
            </h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={guidePath(r)}
                  className="card group flex flex-col !p-6 no-underline transition-shadow hover:shadow-[0_12px_32px_-14px_rgba(15,61,68,0.3)]"
                >
                  <p className="eyebrow">{CLUSTER_LABEL[r.cluster]}</p>
                  <p className="display mt-2 text-xl font-bold text-spruce group-hover:text-teal">
                    {r.h1}
                  </p>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-muted">
                    {r.description}
                  </p>
                  <span className="mt-4 font-semibold text-teal">Read the guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ----------------------------------------------- Cluster siblings -- */}
      {siblings.length > 0 && (
        <section className="band band-mist">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="eyebrow">More in {CLUSTER_LABEL[g.cluster]}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {siblings.map((x) => (
                <li key={x.slug}>
                  <Link
                    href={guidePath(x)}
                    className="inline-flex items-center rounded-full border border-spruce/20 bg-white px-4 py-2 text-sm font-semibold text-teal no-underline transition-colors hover:bg-paper"
                  >
                    {x.short}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={hub.path}
                  className="inline-flex items-center rounded-full bg-spruce px-4 py-2 text-sm font-semibold text-white no-underline"
                >
                  All {hub.name.toLowerCase()} →
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}

      <StateGrid />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <QuizCta lang="en" />
      </section>
    </Shell>
  );
}

function Toc({ g }: { g: Guide }) {
  return (
    <ol className="mt-3 space-y-2 border-l border-mist pl-4 text-sm leading-snug">
      {g.sections.map((s) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="text-muted no-underline hover:text-teal">
            {s.h2}
          </a>
        </li>
      ))}
      {g.faqs.length > 0 && (
        <li>
          <a href="#faq" className="text-muted no-underline hover:text-teal">
            Frequently asked questions
          </a>
        </li>
      )}
    </ol>
  );
}

/** Every state's program page, one click from every guide. */
export function StateGrid({ heading = "Find your state's program" }: { heading?: string }) {
  return (
    <section className="band band-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">All 50 states + DC</p>
        <h2 className="display h-section mt-2 font-extrabold text-spruce">{heading}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          Every state runs its own Medicaid program with its own name, pay and
          rules for spouses and parents. Pick yours.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-base sm:grid-cols-3 lg:grid-cols-5">
          {states.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}/caregiver-program/`} className="prose-link !font-normal">
                {s.name}
              </Link>
              {s.pay.display && (
                <span className="tnum block text-xs text-muted">{s.pay.display}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
