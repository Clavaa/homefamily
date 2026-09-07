import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Shell from "@/components/Shell";
import { QuizCta, TrustStrip } from "@/components/Blocks";
import { site } from "@/site.config";

export const metadata: Metadata = pageMeta({
  title: "About Us — Who We Are and How We Get Paid",
  description:
    "KinCare Pay helps family members get paid to care for their loved ones through real state Medicaid programs. The program pays us — you never pay a fee.",
  path: "/about/",
});

const values = [
  {
    name: "Plain words",
    body: "Medicaid rules are confusing. We explain them the way a friend would — no jargon, no fine print tricks.",
  },
  {
    name: "The truth, even when it's no",
    body: "If a program won't work for your family, we tell you. We'd rather lose a sign-up than waste your time.",
  },
  {
    name: "Family first",
    body: "The best caregiver is usually someone who already loves the person. Our job is to make that possible.",
  },
  {
    name: "Your info stays yours",
    body: "Everything you share is confidential and HIPAA-protected. We never sell your information. Ever.",
  },
];

const promises = [
  "You never pay us a fee. Not to apply, not to enroll, not ever.",
  "We tell you your real pay number before you sign anything.",
  "If you don't qualify, we say so — and point you to what might help instead.",
  "A real person answers your questions. No robots, no runaround.",
];

export default function AboutPage() {
  const url = `${site.domain}/about/`;
  return (
    <Shell lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": `${url}#webpage`,
            url,
            name: `About ${site.brand}`,
            inLanguage: "en-US",
            isPartOf: { "@id": `${site.domain}/#organization` },
          }),
        }}
      />

      {/* ------------------------------------------------------------ Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-wide text-teal">
          About {site.brand}
        </p>
        <h1 className="display mt-2 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-spruce sm:text-5xl">
          We help family members get{" "}
          <span className="text-pay">paid</span> to care for the people they
          love.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          Every state has Medicaid programs that can pay a family member to
          care for a loved one at home. They're real. They've been around for
          years. Most families just never hear about them. That's the problem
          we exist to fix.
        </p>
      </section>

      {/* ----------------------------------------------------- Trust strip */}
      <div className="mt-10">
        <TrustStrip programs={["IRIS", "Family Care", "Personal Care (PCS)", "CLTS"]} />
      </div>

      {/* ----------------------------------------------------- Why we exist */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card !p-6 sm:!p-8">
            <h2 className="display text-2xl font-extrabold text-spruce">
              Why we exist
            </h2>
            <p className="mt-3 leading-relaxed">
              Caring for a parent, a spouse, or a child with special needs is
              real work. Many caregivers cut their hours or quit their jobs to
              do it. The money runs short, and nobody tells them help exists.
            </p>
            <p className="mt-3 leading-relaxed">
              Meanwhile, the programs that could pay them sit behind
              confusing websites, long forms, and phone trees. We built{" "}
              {site.brand} to be the bridge: we find your program, do the
              paperwork with you, and stay with you until the first payment
              arrives — and after.
            </p>
          </div>
          <div className="card border-l-8 border-marigold !p-6 sm:!p-8">
            <h2 className="display text-2xl font-extrabold text-spruce">
              How we make money
            </h2>
            <p className="mt-3 text-xl font-bold text-pay">
              The program pays us — you never pay a fee.
            </p>
            <p className="mt-3 leading-relaxed">
              Here's how it works, with nothing hidden. When your family
              enrolls, the state Medicaid program pays for the care. Part of
              that program funding pays for our work: our nurses, our
              coordinators, and the payroll that sends your check.
            </p>
            <p className="mt-3 leading-relaxed">
              You never get a bill from us. There's no sign-up fee, no
              percentage taken from your pay, no charge to apply. If anyone
              ever asks you to pay money to join a caregiver program, walk
              away — that's not how real programs work, and it's not how we
              work.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Our promise */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-mist p-6 sm:p-8">
          <h2 className="display text-2xl font-extrabold text-spruce">
            Our promise to your family
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {promises.map((p) => (
              <li key={p} className="flex items-start gap-2 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pay text-xs text-white"
                >
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------------------------------------- Values */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <h2 className="display text-3xl font-extrabold text-spruce">
          What we believe
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article key={v.name} className="card !p-5">
              <h3 className="display text-lg font-bold text-spruce">
                {v.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------- Is this legit? */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="card !p-6 sm:!p-8">
          <h2 className="display text-2xl font-extrabold text-spruce">
            "Is this legit?" — a fair question
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            Getting paid to care for your own mom sounds too good to be true.
            So check us: the programs we work with are run by state Medicaid
            agencies — like Wisconsin's IRIS program at dhs.wisconsin.gov.
            You can call the state yourself and ask. We hope you do.
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed">
            We are not a state agency, and we'll never pretend to be one.
            We're a family-focused home care organization with nurses on
            staff. Our job is helping your family find the right program,
            enroll in it, and get paid — and the program pays us for that
            work, not you.
          </p>
          <Link
            href="/about/leadership/"
            className="mt-4 inline-block font-semibold text-teal underline"
          >
            Meet the people who run {site.brand} →
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------- CTA */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <QuizCta lang="en" />
      </section>
    </Shell>
  );
}
