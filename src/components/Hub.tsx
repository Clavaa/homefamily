import Link from "next/link";
import Shell from "@/components/Shell";
import { Breadcrumbs, PageJsonLd, QuizCta } from "@/components/Blocks";
import { StateGrid } from "@/components/Article";
import { site } from "@/site.config";
import { CLUSTER_LABEL, type Cluster, type Guide } from "@/content/types";
import { guidePath } from "@/content";

/**
 * Hub page for a content section. The hub is the "pillar" every spoke links
 * back to, so it lists every page, grouped by cluster, with ItemList schema
 * telling a parser exactly what the collection holds.
 */
export default function Hub({
  path,
  name,
  eyebrow,
  title,
  lead,
  items,
  also,
}: {
  path: string;
  name: string;
  eyebrow: string;
  title: string;
  lead: string;
  items: Guide[];
  also?: { href: string; label: string; text: string };
}) {
  const url = `${site.domain}${path}`;
  const clusters = Array.from(new Set(items.map((g) => g.cluster))) as Cluster[];
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#list`,
    name: title,
    numberOfItems: items.length,
    itemListElement: items.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.domain}${guidePath(g)}`,
      name: g.h1,
    })),
  };
  return (
    <Shell lang="en">
      <PageJsonLd url={url} name={title} about={lead} crumbs={[{ name, path }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <Breadcrumbs crumbs={[{ name, path }]} />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 md:pt-12">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display h-hero mt-3 max-w-4xl font-extrabold text-spruce">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">{lead}</p>
          {clusters.length > 1 && (
            <nav aria-label="Topics" className="mt-7 flex flex-wrap gap-2">
              {clusters.map((c) => (
                <a
                  key={c}
                  href={`#${c}`}
                  className="inline-flex items-center rounded-full border border-spruce/20 bg-white px-4 py-2 text-sm font-semibold text-teal no-underline hover:bg-mist"
                >
                  {CLUSTER_LABEL[c]}
                </a>
              ))}
            </nav>
          )}
        </div>
      </section>

      {clusters.map((c, i) => (
        <section key={c} id={c} className={`band scroll-mt-4 ${i % 2 ? "band-paper" : "band-white"}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="display h-section font-extrabold text-spruce">{CLUSTER_LABEL[c]}</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {items
                .filter((g) => g.cluster === c)
                .map((g) => (
                  <Link
                    key={g.slug}
                    href={guidePath(g)}
                    className="card group flex flex-col !p-6 no-underline transition-shadow hover:shadow-[0_12px_32px_-14px_rgba(15,61,68,0.3)]"
                  >
                    <h3 className="display text-xl font-bold text-spruce group-hover:text-teal">
                      {g.h1}
                    </h3>
                    <p className="mt-2 flex-1 text-base leading-relaxed text-muted">
                      {g.description}
                    </p>
                    <span className="mt-4 font-semibold text-teal">Read →</span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      ))}

      {also && (
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
          <Link href={also.href} className="card group block !p-6 no-underline">
            <p className="display text-2xl font-bold text-spruce group-hover:text-teal">
              {also.label} →
            </p>
            <p className="mt-1 text-muted">{also.text}</p>
          </Link>
        </section>
      )}

      <StateGrid />
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <QuizCta lang="en" />
      </section>
    </Shell>
  );
}
