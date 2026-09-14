import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { Suspense } from "react";
import Analytics from "@/components/Analytics";
import { isIndexable, site } from "@/site.config";
import "./globals.css";

/**
 * Display face is a serif now. Bricolage Grotesque is a lively, chunky
 * grotesque — great for a consumer app, wrong for a page asking a worried
 * family to believe a Medicaid benefit is real. The premium end of this
 * category is editorial and serif (Careforth runs Source Serif 4 at 900),
 * and a serif reads as institution rather than startup.
 *
 * Fraunces over Source Serif so we are not wearing a competitor's face:
 * its SOFT axis keeps the warmth this subject needs, and low WONK keeps it
 * from getting whimsical.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  // Variable axes require the weight to stay variable; .display sets
  // SOFT/WONK via font-variation-settings in globals.css.
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-display",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin", "latin-ext"], // latin-ext → proper Spanish diacritics
  weight: ["400", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `Get Paid to Care for a Family Member | ${site.brand}`,
    /**
     * No brand suffix on inner pages. Every generator already budgets its
     * title to ~60 characters — appending " | Sunroom Care" pushed 3,249 of
     * 3,305 pages past where Google truncates, so the brand was being cut off
     * anyway while eating the space the location and the offer need. A new
     * site has no brand equity to trade that width for; the wordmark, the H1
     * and the OG tags carry the name instead.
     */
    template: "%s",
  },
  description:
    "Medicaid programs in all 50 states can pay you to care for a family member at home. Free 2-minute check. We help you enroll — free to apply.",
  // Belt and braces with robots.ts: a preview URL that leaks into a link
  // still carries noindex on the page itself.
  ...(isIndexable ? {} : { robots: { index: false, follow: false } }),
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.domain}/#organization`,
  name: site.brand,
  url: site.domain,
  email: site.email,
  // Omitted entirely rather than published as null when unset.
  ...(site.phone ? { telephone: site.phone } : {}),
  description:
    "We help family caregivers enroll in state Medicaid programs that pay them to care for a loved one at home.",
  areaServed: "US",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
        {/* useSearchParams needs a boundary or every one of the 3,305 pages
            opts out of static rendering. The beacon renders nothing, so the
            fallback is null. */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
