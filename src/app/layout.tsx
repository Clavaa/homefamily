import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import { isIndexable, site } from "@/site.config";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bricolage",
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
    template: `%s | ${site.brand}`,
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
  telephone: site.phone,
  description:
    "We help family caregivers enroll in state Medicaid programs that pay them to care for a loved one at home.",
  areaServed: "US",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${publicSans.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
