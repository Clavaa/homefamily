import type { MetadataRoute } from "next";
import { isIndexable, site } from "@/site.config";
import { states } from "@/data/states";

/**
 * Production serves the real robots.txt. Every other deployment — previews,
 * local builds — serves disallow-all, so a staging copy of 3,300 pages can
 * never compete with the live site for its own keywords.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: [
      `${site.domain}/sitemap/core.xml`,
      ...states.map((s) => `${site.domain}/sitemap/${s.slug}.xml`),
    ],
  };
}
