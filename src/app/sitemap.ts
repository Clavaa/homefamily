import type { MetadataRoute } from "next";
import { site } from "@/site.config";
import { states } from "@/data/states";
import {
  countiesByState,
  UNIVERSAL_STATE_SUBROUTES,
} from "@/data/counties";

/**
 * Sharded sitemaps: /sitemap/core.xml carries every non-county page;
 * /sitemap/{state-slug}.xml carries that state's county pages.
 * robots.ts lists all shards.
 */
export function generateSitemaps(): { id: string }[] {
  return [{ id: "core" }, ...states.map((s) => ({ id: s.slug }))];
}

/**
 * lastmod has to mean something. It was new Date() at build time, so all
 * 3,305 URLs carried the same timestamp and it changed on every deploy —
 * which is exactly the pattern Google treats as a build artifact and
 * ignores. These are the real dates the underlying content last changed:
 * the data vintage for pages built from the county/state datasets, and the
 * content review date for hand-written pages.
 */
const DATA_UPDATED = new Date("2026-09-06T00:00:00Z");
const CONTENT_UPDATED = new Date("2026-09-14T00:00:00Z");

export default function sitemap({
  id,
}: {
  id: string;
}): MetadataRoute.Sitemap {
  const now = CONTENT_UPDATED;
  const base = site.domain;

  if (id === "core") {
    return [
      { url: `${base}/`, lastModified: now, priority: 1 },
      { url: `${base}/es/`, lastModified: now, priority: 0.9 },
      { url: `${base}/qualify/`, lastModified: now, priority: 0.9 },
      { url: `${base}/states/`, lastModified: now, priority: 0.8 },
      { url: `${base}/about/`, lastModified: now, priority: 0.6 },
      { url: `${base}/wisconsin/iris/`, lastModified: now, priority: 0.9 },
      // Every state carries the two money pages; the home state ranks highest.
      ...states.flatMap((s) => [
        {
          url: `${base}/${s.slug}/`,
          lastModified: now,
          priority: s.slug === site.homeStateSlug ? 0.9 : 0.7,
        },
        ...UNIVERSAL_STATE_SUBROUTES.map((sub) => ({
          url: `${base}/${s.slug}/${sub}/`,
          lastModified: now,
          priority: s.slug === site.homeStateSlug ? 0.9 : 0.8,
        })),
      ]),
    ];
  }

  const counties = countiesByState[id] ?? [];
  return counties.map((c) => ({
    url: `${base}/${id}/${c.slug}/`,
    lastModified: DATA_UPDATED,
    priority: 0.5,
  }));
}
