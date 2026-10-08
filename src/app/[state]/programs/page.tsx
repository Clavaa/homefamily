import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import { Breadcrumbs, PageJsonLd, QuickStart, QuizCta, NeighborStateLinks } from "@/components/Blocks";
import { site } from "@/site.config";
import { pageMeta } from "@/lib/seo";
import { neighborStates } from "@/data/adjacency";
import { getState, states } from "@/data/states";
import { programsFor } from "@/data/programs";

/** /{state}/programs/ — every named program in the state that can pay a family caregiver. */
export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ state: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const s = getState(state);
  if (!s) return {};
  return pageMeta({
    title: `${s.name} Programs That Pay Family Caregivers`,
    description: `Every ${s.name} Medicaid program that can pay a family caregiver — ${s.programs.slice(0, 3).join(", ")} — with who qualifies, pay and how to apply.`.slice(0, 158),
    path: `/${s.slug}/programs/`,
  });
}

export default async function ProgramsIndex({ params }: Props) {
  const { state } = await params;
  const s = getState(state);
  if (!s) notFound();
  const records = programsFor(s.slug);
  const url = `${site.domain}/${s.slug}/programs/`;
  const crumbs = [{ name: s.name, path: `/${s.slug}/` }, { name: "Programs", path: `/${s.slug}/programs/` }];
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#list`,
    itemListElement: records.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: `${site.domain}/${s.slug}/programs/${p.slug}/` })),
  };
  return (
    <Shell lang="en" state={{ slug: s.slug, name: s.name }} nearbyStates={neighborStates(s.slug).map((n) => ({ slug: n.slug, name: n.name }))}>
      <PageJsonLd url={url} name={`${s.name} programs that pay family caregivers`} crumbs={crumbs} />
      {records.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />}
      <Breadcrumbs crumbs={crumbs} />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 md:pt-12">
          <p className="eyebrow">{s.name}</p>
          <h1 className="display h-hero mt-3 max-w-4xl font-extrabold text-spruce">
            {s.name} programs that pay family caregivers
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            {s.name} pays family members through {s.programs.length} Medicaid program{s.programs.length === 1 ? "" : "s"}.
            Each has its own rules for who qualifies, who can be paid and what it pays.
          </p>
          <div className="mt-6"><QuickStart lang="en" state={s.slug} /></div>
        </div>
      </section>
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {(records.length ? records : s.programs.map((name) => ({ name, slug: "", summary: "", pay: { display: null } }))).map((p) => (
            p.slug ? (
              <Link key={p.slug} href={`/${s.slug}/programs/${p.slug}/`} className="card group flex flex-col !p-6 no-underline transition-shadow hover:shadow-[0_12px_32px_-14px_rgba(15,61,68,0.3)]">
                <h2 className="display text-xl font-bold text-spruce group-hover:text-teal">{p.name}</h2>
                <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{p.summary}</p>
                {p.pay?.display && <p className="tnum mt-3 font-semibold text-pay">{p.pay.display}</p>}
                <span className="mt-4 font-semibold text-teal">How it works →</span>
              </Link>
            ) : (
              <div key={p.name} className="card !p-6"><h2 className="display text-xl font-bold text-spruce">{p.name}</h2></div>
            )
          ))}
        </div>
        <p className="mt-6 leading-relaxed">
          The overview: <Link href={`/${s.slug}/caregiver-program/`} className="prose-link">the {s.name} caregiver program</Link> ·{" "}
          <Link href={`/${s.slug}/caregiver-pay/`} className="prose-link">{s.name} caregiver pay</Link> ·{" "}
          <Link href={`/${s.slug}/spousal-caregiver/`} className="prose-link">spouse rules</Link>
        </p>
      </section>
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6"><QuizCta lang="en" state={s.slug} /></section>
      <NeighborStateLinks stateName={s.name} neighbors={neighborStates(s.slug).map((n) => ({ slug: n.slug, name: n.name }))} />
    </Shell>
  );
}
