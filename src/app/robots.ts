import type { MetadataRoute } from "next";
import { site } from "@/site.config";
import { states } from "@/data/states";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: [
      `${site.domain}/sitemap/core.xml`,
      ...states.map((s) => `${site.domain}/sitemap/${s.slug}.xml`),
    ],
  };
}
