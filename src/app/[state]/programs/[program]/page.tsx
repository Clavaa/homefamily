import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import {
  Breadcrumbs,
  Faq,
  FaqJsonLd,
  NeighborStateLinks,
  PageJsonLd,
  QuickStart,
  QuizCta,
  TopCountyLinks,
  VerdictBadge,
} from "@/components/Blocks";
import { site } from "@/site.config";
import { pageMeta } from "@/lib/seo";
import { neighborStates } from "@/data/adjacency";
import { getState, states } from "@/data/states";
import { topCountiesBy65 } from "@/data/county-facts";
import { getProgram, programsFor, verdictOf, type ProgramRecord } from "@/data/programs";
import { getGuide, guidePath } from "@/content";

/**
 * /{state}/programs/{program}/ — one named program, e.g. "Structured Family
 * Caregiving in Georgia". People search these by name; the state's
 * caregiver-program page answers "what is it called here", this one answers
 * "how does THIS program work and how do I get paid through it".
 *
 * Every fact comes from src/data/programs/<state>.json (primary-sourced,
 * seo/PROGRAM-BRIEF.md). Nothing here claims Sunroom operates in the state.
 */

export function generateStaticParams() {
  return states.flatMap((s) => programsFor(s.slug).map((p) => ({ state: s.slug, program: p.slug })));
}
export const dynamicParams = false;

type Props = { params: Promise<{ state: string; program: string }> };

function shortName(p: ProgramRecord) {
  const m = p.name.match(/\(([^)]+)\)\s*$/);
  return m && m[1].length <= 12 ? m[1] : p.name;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, program } = await params;
  const s = getState(state);
  const p = s && getProgram(s.slug, program);
  if (!s || !p) return {};
  const full = `${p.name} in ${s.name}: Get Paid as a Family Caregiver`;
  const mid = `${p.name} (${s.name}): Who Gets Paid & How to Apply`;
  const title = full.length <= 60 ? full : mid.length <= 60 ? mid : `${shortName(p)} in ${s.name}: Family Caregiver Pay`;
  const pay = p.pay?.display ? ` Pay: ${p.pay.display}.` : "";
  return pageMeta({
    title,
    description: `${p.summary.split(". ")[0].replace(/\.$/, "")}.${pay} Who qualifies, who can be paid and how to apply.`.slice(0, 158),
    path: `/${s.slug}/programs/${p.slug}/`,
  });
}

const GUIDE_FOR: [RegExp, string][] = [
  [/structured family|sfc/i, "structured-family-caregiving"],
  [/ihss|in-home supportive/i, "ihss"],
  [/cdpap|consumer directed|consumer-directed|self-direct|participant[- ]directed|cdass|cds\b|choice/i, "consumer-directed-care"],
  [/child|katie beckett|tefra|parent/i, "paid-parent-caregiver"],
];

export default async function ProgramPage({ params }: Props) {
  const { state, program } = await params;
  const s = getState(state);
  const p = s && getProgram(s.slug, program);
  if (!s || !p) notFound();

  const url = `${site.domain}/${s.slug}/programs/${p.slug}/`;
  const crumbs = [
    { name: s.name, path: `/${s.slug}/` },
    { name: "Programs", path: `/${s.slug}/programs/` },
    { name: shortName(p), path: `/${s.slug}/programs/${p.slug}/` },
  ];
  const siblings = programsFor(s.slug).filter((x) => x.slug !== p.slug);
  const pay = [
    ["Adult children & other relatives", verdictOf(p.who_can_be_paid.adult_children_relatives)],
    ["Spouse", verdictOf(p.who_can_be_paid.spouse)],
    ["Parent of a minor child", verdictOf(p.who_can_be_paid.parent_of_minor)],
  ] as const;
  const guides = [
    ...GUIDE_FOR.filter(([re]) => re.test(`${p.name} ${(p.aka ?? []).join(" ")} ${p.kind ?? ""}`)).map(([, g]) => g),
    "get-paid-to-care-for-family-member",
    "family-caregiver-pay-rates",
  ]
    .filter((g, i, a) => a.indexOf(g) === i)
    .map((g) => getGuide("guides", g))
    .filter((g): g is NonNullable<typeof g> => Boolean(g))
    .slice(0, 4);
  const iris = s.slug === "wisconsin" && /iris/i.test(p.name);

  const govService = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "@id": `${url}#service`,
    name: p.name,
    alternateName: p.aka,
    description: p.summary,
    serviceType: "Medicaid home and community-based services — paid family caregiving",
    areaServed: { "@type": "State", name: s.name },
    provider: { "@type": "GovernmentOrganization", name: s.agency.split(/[;(]/)[0].trim() },
    ...(p.contacts?.[0]?.url ? { url: p.contacts[0].url } : {}),
  };

  return (
    <Shell lang="en" state={{ slug: s.slug, name: s.name }} nearbyStates={neighborStates(s.slug).map((n) => ({ slug: n.slug, name: n.name }))}>
      <PageJsonLd url={url} name={`${p.name} in ${s.name}`} about={p.summary} crumbs={crumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(govService) }} />
      <FaqJsonLd items={p.faqs} url={url} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 pt-8 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:pt-12">
          <div>
            <p className="eyebrow">{s.name} · {p.kind ?? "Medicaid program"}</p>
            <h1 className="display h-hero mt-3 font-extrabold text-spruce">
              {p.name} <span className="text-teal">in {s.name}</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed">{p.summary}</p>
            {p.aka && p.aka.length > 0 && (
              <p className="mt-3 text-sm text-muted">Also called: {p.aka.join(" · ")}</p>
            )}
            <div className="mt-6">
              <QuickStart lang="en" state={s.slug} />
            </div>
          </div>
          <div className="card !p-6 self-start">
            <h2 className="display text-lg font-bold text-spruce">Quick facts</h2>
            <dl className="mt-4 space-y-3 text-base">
              <div className="flex justify-between gap-4 border-b border-mist pb-3">
                <dt className="font-bold text-spruce">Pay</dt>
                <dd className="tnum text-right">{p.pay?.display ?? "Set per care plan"}</dd>
              </div>
              {pay.map(([label, v]) => (
                <div key={label} className="flex items-center justify-between gap-4 border-b border-mist pb-3">
                  <dt className="font-bold text-spruce">{label}</dt>
                  <dd>{v.verdict ? <VerdictBadge status={v.verdict} /> : <span className="text-sm text-muted">{v.text || "—"}</span>}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4">
                <dt className="font-bold text-spruce">Waitlist</dt>
                <dd className="text-right capitalize">{p.waitlist?.status ?? "—"}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6">
        <section id="who-qualifies">
          <h2 className="display text-3xl font-extrabold text-spruce">Who qualifies for {shortName(p)}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed marker:text-teal">
            {p.who_qualifies.map((w) => <li key={w}>{w}</li>)}
          </ul>
        </section>

        <section id="who-can-be-paid" className="mt-12">
          <h2 className="display text-3xl font-extrabold text-spruce">Who can be paid as the caregiver</h2>
          <dl className="mt-4 space-y-4 leading-relaxed">
            {pay.map(([label, v]) => (
              <div key={label}>
                <dt className="flex items-center gap-3 font-bold text-spruce">{label} {v.verdict && <VerdictBadge status={v.verdict} />}</dt>
                <dd className="mt-1">{v.text}</dd>
              </div>
            ))}
            {p.who_can_be_paid.live_together && (
              <div>
                <dt className="font-bold text-spruce">Living together</dt>
                <dd className="mt-1">{verdictOf(p.who_can_be_paid.live_together).text || p.who_can_be_paid.live_together}</dd>
              </div>
            )}
          </dl>
          {p.self_directed_or_agency && <p className="mt-4 leading-relaxed"><strong className="text-spruce">Who employs the caregiver:</strong> {p.self_directed_or_agency}</p>}
          <p className="mt-4 leading-relaxed">
            Spouse rules differ by program — see{" "}
            <Link href={`/${s.slug}/spousal-caregiver/`} className="prose-link">spouse pay in {s.name}</Link>.
          </p>
        </section>

        <section id="pay" className="mt-12">
          <h2 className="display text-3xl font-extrabold text-spruce">How much {shortName(p)} pays</h2>
          <p className="mt-4 leading-relaxed">
            {p.pay?.display && <strong className="text-spruce">{p.pay.display}. </strong>}
            {p.pay?.detail}
          </p>
          {p.hours_or_budget && <p className="mt-4 leading-relaxed"><strong className="text-spruce">Hours and budget:</strong> {p.hours_or_budget}</p>}
          <p className="mt-4 leading-relaxed">
            Compare with other {s.name} programs on the{" "}
            <Link href={`/${s.slug}/caregiver-pay/`} className="prose-link">{s.name} caregiver pay page</Link>, or across states in{" "}
            <Link href="/guides/family-caregiver-pay-rates/" className="prose-link">pay rates by state</Link>.
          </p>
        </section>

        {p.waitlist?.detail && (
          <section id="waitlist" className="mt-12">
            <h2 className="display text-3xl font-extrabold text-spruce">Is there a waitlist?</h2>
            <p className="mt-4 leading-relaxed">{p.waitlist.detail}</p>
          </section>
        )}

        <section id="apply" className="mt-12">
          <h2 className="display text-3xl font-extrabold text-spruce">How to apply for {shortName(p)}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed marker:font-bold marker:text-teal">
            {p.how_to_apply.map((a) => <li key={a}>{a}</li>)}
          </ol>
          {p.contacts && p.contacts.length > 0 && (
            <ul className="mt-5 space-y-2 text-base">
              {p.contacts.map((c) => (
                <li key={c.name}>
                  <strong className="text-spruce">{c.name}</strong>
                  {c.phone && <> · <span className="tnum">{c.phone}</span></>}
                  {c.url && <> · <a href={c.url} rel="nofollow noopener" className="prose-link">official site</a></>}
                </li>
              ))}
            </ul>
          )}
          {iris && (
            <p className="mt-4 leading-relaxed">
              Full detail: <Link href="/wisconsin/iris/" className="prose-link">the Wisconsin IRIS guide</Link>.
            </p>
          )}
        </section>
      </div>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <QuizCta lang="en" state={s.slug} />
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <Faq heading={`${shortName(p)} questions`} items={p.faqs} id="faq" />
        <p className="mt-6 text-xs leading-relaxed text-muted">
          Sources:{" "}
          {p.sources.map((u, i) => (
            <span key={u}>{i > 0 && " · "}<a href={u} rel="nofollow noopener" className="underline hover:text-teal">{new URL(u).hostname.replace(/^www\./, "")}</a></span>
          ))}{" "}
          · Updated {p.updated ?? site.updated}. Program rules change — always confirm with the program.
        </p>
      </section>

      {(siblings.length > 0 || guides.length > 0) && (
        <section className="band band-white mt-14">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
            {siblings.length > 0 && (
              <div>
                <p className="eyebrow">Other {s.name} programs</p>
                <ul className="mt-4 space-y-2">
                  {siblings.map((x) => (
                    <li key={x.slug}><Link href={`/${s.slug}/programs/${x.slug}/`} className="prose-link">{x.name}</Link></li>
                  ))}
                  <li><Link href={`/${s.slug}/caregiver-program/`} className="prose-link">All of {s.name}&apos;s caregiver programs →</Link></li>
                </ul>
              </div>
            )}
            {guides.length > 0 && (
              <div>
                <p className="eyebrow">Guides</p>
                <ul className="mt-4 space-y-2">
                  {guides.map((g) => <li key={g.slug}><Link href={guidePath(g)} className="prose-link">{g.short}</Link></li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <TopCountyLinks stateSlug={s.slug} stateName={s.name} counties={topCountiesBy65(s.slug, 8)} />
      <NeighborStateLinks stateName={s.name} neighbors={neighborStates(s.slug).map((n) => ({ slug: n.slug, name: n.name }))} />
    </Shell>
  );
}
