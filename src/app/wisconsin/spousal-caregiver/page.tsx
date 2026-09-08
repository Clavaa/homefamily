import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Shell from "@/components/Shell";
import {
  CallButton,
  Faq,
  FaqJsonLd,
  Money,
  PayRateModule,
  QuizCta,
} from "@/components/Blocks";
import { site } from "@/site.config";
import { wisconsin } from "@/data/states";

export const metadata: Metadata = pageMeta({
  title: "Get Paid to Care for Your Spouse in Wisconsin — Here's How",
  description:
    "Wisconsin is one of the few states that pays spouses as caregivers. The IRIS program lets you hire your husband or wife. No waitlist. Free 2-minute check.",
  path: "/wisconsin/spousal-caregiver/",
});

const faqs = [
  {
    q: "Really — Wisconsin pays husbands and wives?",
    a: "Yes, really. Wisconsin's IRIS program lets the person getting care hire relatives, and that includes a spouse. Many states ban this. Wisconsin doesn't.",
  },
  {
    q: "Why do most states say no to spouses?",
    a: "Old Medicaid rules treated a spouse's care as a family duty, not a job. Wisconsin's IRIS program works differently: the person getting care is the employer and picks their own worker — including a spouse.",
  },
  {
    q: "How much would I earn caring for my spouse?",
    a: "Family caregivers in Wisconsin typically earn about $12 to $17 per hour, set within the IRIS budget. Payment comes weekly through a state-approved payroll agent.",
  },
  {
    q: "Does my spouse need Medicaid first?",
    a: "Yes — IRIS is a Medicaid program, so your spouse must qualify for Wisconsin Medicaid and need long-term care. Not sure? We check with you for free.",
  },
  {
    q: "Is there a waitlist?",
    a: "No. IRIS is an entitlement — if your spouse qualifies, you're in.",
  },
  {
    q: "What if we don't qualify for IRIS?",
    a: "Family Care, Wisconsin's other long-term care program, also has a self-directed option where relatives can be hired. The 2-minute check sorts out which fits you.",
  },
];

export default function SpousalPage() {
  const url = `${site.domain}/wisconsin/spousal-caregiver/`;
  return (
    <Shell lang="en">
      <FaqJsonLd items={faqs} url={url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumbs`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${site.domain}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Wisconsin",
                item: `${site.domain}/wisconsin/`,
              },
              { "@type": "ListItem", position: 3, name: "Spousal caregiver pay in Wisconsin", item: url },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: "Get Paid to Care for Your Spouse in Wisconsin",
            inLanguage: "en-US",
            isPartOf: { "@id": `${site.domain}/#organization` },
            breadcrumb: { "@id": `${url}#breadcrumbs` },
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/wisconsin/" className="text-teal underline">
            Wisconsin
          </Link>{" "}
          / Spousal caregiver
        </nav>
        <h1 className="display mt-2 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-spruce sm:text-5xl">
          Can I get <span className="text-pay">paid</span> to care for my
          spouse in <span className="text-teal">Wisconsin</span>?
        </h1>
        <p className="mt-4 max-w-2xl text-2xl font-bold text-pay">
          Yes. Wisconsin is one of the few states that allows it.
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed">
          The IRIS program lets your husband or wife hire{" "}
          <em>you</em> as their paid caregiver. You care for them like you
          already do. The state pays you for it — typically{" "}
          <Money>$12–$17/hr</Money>, every week.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/qualify/?state=wisconsin&rel=spouse" className="btn-primary">
            See if you qualify →
          </Link>
          <CallButton />
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        <div className="card !p-6">
          <h2 className="display text-lg font-bold text-spruce">
            What has to be true
          </h2>
          <ul className="mt-3 space-y-2.5">
            {[
              "Your spouse is 18 or older and lives in Wisconsin.",
              "Your spouse has Medicaid, or can qualify. We help you check — free.",
              "Your spouse needs long-term care help at home.",
              "You pass a simple background check. No license needed.",
            ].map((li) => (
              <li key={li} className="flex items-start gap-2 leading-relaxed">
                <span aria-hidden="true" className="mt-0.5 text-pay">✓</span>
                {li}
              </li>
            ))}
          </ul>
        </div>
        <PayRateModule state={wisconsin} lang="en" />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-mist p-6 sm:p-8">
          <h2 className="display text-2xl font-extrabold text-spruce">
            Why this matters
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            In most states, a wife who leaves her job to care for her husband
            earns nothing. Wisconsin decided that's wrong. Through IRIS, the
            person who needs care is the boss — and the boss can hire the
            person they trust most. For many couples, that's each other.
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed">
            There's no waitlist. If your spouse qualifies, the benefit starts.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <Faq heading="Spouse questions, answered" items={faqs} id="spouse-faq" />
        <p className="mt-6 text-xs text-muted">
          Sources: Wisconsin DHS (dhs.wisconsin.gov/iris) ·
          medicaidplanningassistance.org · Updated {site.updated}. Rules
          change — always confirm with the program.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <QuizCta lang="en" state="wisconsin" />
      </section>
    </Shell>
  );
}
