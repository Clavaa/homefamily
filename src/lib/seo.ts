import type { Metadata } from "next";
import { site } from "@/site.config";

/**
 * One social card for the whole site. Without this every share — WhatsApp,
 * iMessage, Facebook groups, Slack — renders as a grey box, and those are
 * exactly where "can my state pay me to care for mom?" gets passed between
 * families. JPEG rather than WebP: several scrapers still won't render WebP.
 */
export const OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "A younger hand and an older hand together over a form at a kitchen table",
} as const;

/**
 * Shared page metadata: title + description + canonical + Open Graph +
 * Twitter card, with optional hreflang pairs. metadataBase (set in the root
 * layout) resolves the relative paths.
 */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  locale?: "en_US" | "es_US";
  /** hreflang map, e.g. { en: "/", es: "/es/", "x-default": "/" } */
  languages?: Record<string, string>;
  /** Set when the title should be used verbatim (no "| brand" template). */
  absoluteTitle?: boolean;
}): Metadata {
  const {
    title,
    description,
    path,
    locale = "en_US",
    languages,
    absoluteTitle,
  } = opts;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.brand,
      type: "website",
      locale,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
