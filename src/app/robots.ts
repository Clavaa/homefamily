import type { MetadataRoute } from "next";
import { isIndexable, site } from "@/site.config";

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
    // One line, not 52: /sitemap.xml is an index and Google walks it to the
    // shards. Listing every shard here as well just duplicates the index.
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
