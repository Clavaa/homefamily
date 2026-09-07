import type { Metadata } from "next";
import { site } from "@/site.config";

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
    },
    twitter: { card: "summary", title, description },
  };
}
