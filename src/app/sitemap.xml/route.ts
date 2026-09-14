import { site } from "@/site.config";
import { states } from "@/data/states";

/**
 * Master sitemap index at /sitemap.xml.
 *
 * Next's generateSitemaps emits the 52 shards (/sitemap/core.xml and one per
 * state) but no index tying them together, so submitting the site meant
 * pasting 52 URLs into Search Console by hand and re-pasting on any change.
 * This is the single URL to submit; Google walks it to the rest.
 *
 * lastmod mirrors the shards: county data carries the vintage of the federal
 * files it was built from, everything else the content review date. A build
 * timestamp here would be the same artifact Google discounts on the shards.
 */
const DATA_UPDATED = "2026-09-06T00:00:00.000Z";
const CONTENT_UPDATED = "2026-09-14T00:00:00.000Z";

export const dynamic = "force-static";

export function GET() {
  const entries = [
    { loc: `${site.domain}/sitemap/core.xml`, lastmod: CONTENT_UPDATED },
    ...states.map((s) => ({
      loc: `${site.domain}/sitemap/${s.slug}.xml`,
      lastmod: DATA_UPDATED,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <sitemap>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, must-revalidate",
    },
  });
}
