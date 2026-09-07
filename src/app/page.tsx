import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/Shell";
import RotatingWord from "@/components/RotatingWord";
import {
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
  title: `Wisconsin Pays Family Caregivers — Get Paid to Care for Mom | ${site.brand}`,
  description:
    "Wisconsin Medicaid programs like IRIS can pay you to care for a family member at home — even a spouse. Free 2-minute eligibility check. Free to apply.",
  path: "/",
  languages: { en: "/", es: "/es/", "x-default": "/" },
  absoluteTitle: true,
});

const steps = [
  {
    title: "See if you qualify",
    duration: "2 minutes",
    body: "Answer 5 easy questions. You'll see your programs and pay range right away.",
  },
  {
    title: "We file the paperwork",
    duration: "about 1 week",
    body: "We fill out the forms with you and send them to the right office. You don't chase anyone.",
  },
  {
    title: "Enrollment visit",
    duration: "2–4 weeks",
    body: "The program checks your loved one's care needs. We help you get ready for it.",
  },
  {
    title: "You get paid",
    duration: "weekly",
    body: "Once enrolled, you're paid for the care you already give — by direct deposit.",
  },
];

const wiPrograms = [
  {
    name: "IRIS",
    tag: "Pays a spouse ✓",
    body: "You are the boss. You pick who cares for you — even a husband or wife. No waitlist.",
    who: "Adults 18+ on Medicaid",
    href: "/wisconsin/iris/",
  },
  {
    name: "Family Care",
    tag: "Pays a family member ✓",
    body: "A care team helps plan everything. It has a self-directed option so family can be hired.",
    who: "Adults who need long-term care",
    href: "/wisconsin/",
  },
  {
    name: "Personal Care (PCS)",
    tag: "Agency route",
    body: "You join a home care agency and get paid to care for your loved one on a schedule.",
    who: "Medicaid members who need help at home",
    href: "/wisconsin/",
  },
  {
    name: "CLTS Waiver",
    tag: "For children",
    body: "For kids under 18 with special needs. Parents should ask about payment rules here.",
    who: "Children under 18",
    href: "/wisconsin/",
  },
];

const faqs = [
  {
    q: "Is this legit?",
    a: "Yes. These are real Medicaid programs run by the Wisconsin Department of Health Services — IRIS, Family Care, and Personal Care Services. They have paid family caregivers for years. We simply help you enroll, and applying costs you nothing.",
  },
  {
    q: "Why would the government pay me?",
    a: "Care at home costs Medicaid far less than a nursing home. So Wisconsin pays family members to give that care at home. It is good for your loved one, and it is the law working the way it should.",
  },
  {
    q: "How much will I get paid?",
    a: "In Wisconsin, family caregivers typically earn about $12 to $17 per hour. Your exact pay depends on the program and your loved one's care plan. We tell you your real number before you enroll.",
  },
  {
    q: "Do I need training or a license?",
    a: "No license. Most programs need a simple background check, and some offer short training. If you already care for your loved one, you can likely do this.",
  },
  {
    q: "What if my loved one doesn't have Medicaid yet?",
    a: "That's okay. Many families qualify and don't know it. We help you check and apply — it's free.",
  },
  {
    q: "Can I get paid to care for my spouse?",
    a: "In Wisconsin, yes. The IRIS program lets you hire relatives — including a husband or wife. Not every state allows this, so Wisconsin families are lucky here.",
  },
  {
    q: "How long does it take?",
    a: "Most families finish enrollment in about 2 to 4 weeks after the paperwork goes in. Then payments arrive weekly.",
  },
];

export default function HomePage() {
  return (
    <Shell lang="en">
      {/* ------------------------------------------------------------ Hero */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-2 md:pt-14">
          <div>
            <h1 className="display text-4xl font-extrabold leading-[1.05] tracking-tight text-spruce sm:text-5xl lg:text-6xl">
              <span className="text-teal">Wisconsin</span> pays family
              caregivers.{" "}
              <span className="block mt-2">
                Get <span className="text-pay">paid</span> to care for{" "}
                <RotatingWord
                  words={["mom", "dad", "your husband", "your wife", "grandma"]}
                />
                .
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink">
              A Medicaid program, not a job board. We help you enroll and get
              paid — free to apply.
            </p>
            <div className="mt-7">
              <QuickStart lang="en" />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/qualify/" className="btn-primary">
                See if you qualify →
              </Link>
              <a href={site.phoneHref} className="btn-outline">
                Call or text <span className="tnum">{site.phone}</span>
              </a>
            </div>
          </div>
          <HeroPhoto lang="en" />
        </div>
      </section>

      {/* ----------------------------------------------------- Trust strip */}
      <TrustStrip
        lang="en"
        programs={["IRIS", "Family Care", "Personal Care (PCS)", "CLTS"]}
      />

      {/* ------------------------------------------------- Pay-rate module */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <PayRateModule state={wisconsin} lang="en" />
          <div>
            <h2 className="display text-3xl font-extrabold text-spruce">
              Real pay for the care you already give
            </h2>
            <p className="mt-4 leading-relaxed">
              You already help with meals, baths, meds, and rides. Wisconsin
              has programs that pay family members for exactly that work —
              usually <Money>$12–$17/hr</Money>, paid weekly by direct
              deposit.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Your exact rate is set inside the program's budget. We'll show
              you your real number before you sign anything.
            </p>
            <Link
              href="/wisconsin/caregiver-pay/"
              className="mt-4 inline-block font-semibold text-teal underline"
            >
              See how Wisconsin caregiver pay works →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Step timeline */}
      <section id="how-it-works" className="scroll-mt-20 bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl font-extrabold text-spruce">
            How it works
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            Four steps. We do the hard part — the paperwork.
          </p>
          <div className="mt-8">
            <StepTimeline steps={steps} />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- Program picker */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="display text-3xl font-extrabold text-spruce">
          Wisconsin's programs, in plain words
        </h2>
        <p className="mt-2 max-w-xl text-muted">
          Every family fits a different program. The 2-minute check tells you
          yours.
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
                Learn more →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <QuizCta lang="en" state="wisconsin" />
        </div>
      </section>

      {/* --------------------------------------------------------- FAQ ---- */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Faq heading="Honest answers" items={faqs} id="home-faq" />
        <FaqJsonLd items={faqs} url={`${site.domain}/`} />
        <p className="mt-8 text-center">
          <Link href="/qualify/" className="btn-primary">
            See if you qualify →
          </Link>
        </p>
      </section>

      {/* ------------------------------------------- Other states pointer -- */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-3xl border border-mist bg-white p-6 text-center">
          <p className="font-semibold text-spruce">
            Not in Wisconsin? Every state has its own program.
          </p>
          <p className="mt-1 text-sm text-muted">
            Pick your state in the 2-minute check and we'll show you what it
            pays.
          </p>
          <Link
            href="/qualify/"
            className="mt-3 inline-block font-semibold text-teal underline"
          >
            Check my state →
          </Link>
        </div>
      </section>
    </Shell>
  );
}
