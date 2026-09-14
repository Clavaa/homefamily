import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/Shell";
import { Breadcrumbs, PageJsonLd } from "@/components/Blocks";
import { pageMeta } from "@/lib/seo";
import { site } from "@/site.config";

/**
 * This site had no privacy policy at all, while the footer asserted that
 * information is "confidential and HIPAA-protected" and the quiz collects a
 * name and phone number. Adding visit counting made that gap untenable: a
 * page that measures people has to say so somewhere they can read it.
 *
 * Written to be true rather than to be thorough. Everything here describes
 * what the code actually does — the daily-rotating hash, the fact that quiz
 * answers reach us only if the visitor asks for a call, the honest
 * consequence that a returning visitor counts twice across days.
 */
export const metadata: Metadata = {
  ...pageMeta({
    title: "Privacy",
    description:
      "What Sunroom Care collects, why, and what we never do. No cookies, no ad networks, no selling your information — in plain words.",
    path: "/privacy/",
  }),
};

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="display text-2xl font-bold text-spruce">{heading}</h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  const url = `${site.domain}/privacy/`;
  const crumbs = [{ name: "Privacy", path: "/privacy/" }];
  return (
    <Shell lang="en">
      <PageJsonLd
        url={url}
        name={`Privacy at ${site.brand}`}
        about="What this site collects and what it does not"
        crumbs={crumbs}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="mx-auto max-w-3xl px-4 pt-6 sm:px-6">
        <h1 className="display h-hero font-extrabold text-spruce">Privacy</h1>
        <p className="mt-5 text-xl leading-relaxed">
          In one sentence: we do not set cookies, we do not run advertising
          trackers, we never sell your information, and we do not store your IP
          address.
        </p>
        <p className="mt-3 text-sm text-muted">
          Last updated {site.updated}.
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Section heading="What you give us on purpose">
          <p>
            The eligibility check asks which state you live in, who you care
            for, whether that person has Medicaid, and whether you live
            together. Those answers stay in your browser while you use it, and
            the result is worked out there — we show you your programs{" "}
            <strong>before</strong> asking for any contact details, on purpose.
          </p>
          <p>
            If you then ask us to help, we receive your name, your phone
            number, and the answers you gave, so that a person can call you
            about the right program. If you close the page instead, we receive
            none of it.
          </p>
          <p>
            We deliberately do not ask for a diagnosis, a medical record, an
            income figure, or a Social Security number. If you send one anyway,
            we will not keep it.
          </p>
        </Section>

        <Section heading="Why we collect it">
          <p>
            To call you back and to help you enroll in a state program. That is
            the whole list. We do not sell your information, and we do not
            share it with advertisers or data brokers.
          </p>
        </Section>

        <Section heading="Counting visits">
          <p>
            We count visits with our own software rather than a third
            party&rsquo;s. When you open a page we record which page it was,
            roughly how long it stayed visible on your screen, how far down it
            you scrolled, which site or search engine you arrived from, your
            device type, and the country and region your connection reports.
          </p>
          <p>
            <strong>No cookie is set for any of this.</strong>
          </p>
          <p>
            We do not store your IP address. It is combined with your
            browser&rsquo;s user-agent string and a secret value that changes
            every day, then turned into a one-way code. That lets us count how
            many separate people visited on a given day, and makes it
            impossible for us to recognise you tomorrow or to work backwards to
            your address. The honest consequence: if you come back next week,
            you are counted as a new person, and our own reports say so.
          </p>
          <p>
            None of it is joined to a form you submit. A page about a
            particular county or a particular program tells us nothing about
            you as a person, and we have built it so that it cannot.
          </p>
        </Section>

        <Section heading="Who else sees it">
          <p>
            Form submissions reach our intake inbox through an email service
            provider. Our hosting provider processes ordinary web-server
            request data in the course of serving these pages. The visit counts
            above are stored in our own cloud project, where the cloud provider
            holds them for us as a processor and never receives them as an
            advertising signal.
          </p>
          {/* TODO(legal): name each processor explicitly and confirm the
              contractual basis before counsel reviews this page. */}
        </Section>

        <Section heading="What we are not">
          <p>
            We are not a state agency, and we are not Medicaid. We help
            families find and enroll in real state programs. Applying is free,
            and the program pays us — you never pay us a fee.
          </p>
        </Section>

        <Section heading="Your choices">
          <p>
            You can ask what we hold about you, ask us to correct it, or ask us
            to delete it. Email{" "}
            <a href={`mailto:${site.email}`} className="prose-link">
              {site.email}
            </a>{" "}
            and we will do it.
          </p>
          <p>
            To keep your visits out of our counts entirely, open any page on
            this site once with{" "}
            <code className="rounded bg-mist px-1.5 py-0.5 text-sm">
              ?internal=1
            </code>{" "}
            on the end of the address. Your browser remembers the choice and we
            exclude those visits from every report.
          </p>
        </Section>

        <Section heading="Children">
          <p>
            These forms are for adults arranging care. We do not knowingly
            collect information directly from children.
          </p>
        </Section>

        <p className="mt-12 border-t border-spruce/10 pt-6 text-sm text-muted">
          Questions about any of this?{" "}
          <Link href="/about/" className="prose-link">
            Read about who we are
          </Link>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="prose-link">
            {site.email}
          </a>
          .
        </p>
      </div>
    </Shell>
  );
}
