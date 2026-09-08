/**
 * Site-wide config. Everything marked TODO is a launch blocker —
 * no fabricated numbers or names may ship.
 */

/**
 * The origin every canonical, sitemap URL and schema @id is built from.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL — set this in Vercel once the real domain exists
 *  2. NEXT_PUBLIC_VERCEL_URL — Vercel sets this automatically, so preview
 *     deploys are self-consistent instead of claiming to be the live domain
 *  3. the placeholder below, for local development
 *
 * A preview that canonicalises to the production domain is how a staging site
 * quietly deindexes the real one, so this is not cosmetic.
 */
function resolveDomain(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "https://sunroomcare.com";
}

/**
 * Only the production deployment may be indexed. Previews and local builds
 * serve a disallow-all robots.txt and a noindex header.
 *
 * NEXT_PUBLIC_BLOCK_INDEXING=true beats everything, including production.
 * That switch exists because Vercel promotes a project's FIRST deploy
 * straight to production — so a site can be live and crawlable before it has
 * a name, a domain, or a real phone number. Keep it set until launch.
 *
 * NEXT_PUBLIC_ALLOW_INDEXING=true forces indexing on non-Vercel hosts.
 */
export const isIndexable =
  process.env.NEXT_PUBLIC_BLOCK_INDEXING === "true"
    ? false
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
      process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const site = {
  brand: "Sunroom Care",
  // Two-tone wordmark pieces used by the Logo component.
  brandMark: { primary: "Sunroom", accent: "Care" },
  // TODO: replace with the real call-tracked number before launch (555 = placeholder)
  phone: "(608) 555-0123",
  phoneHref: "tel:+16085550123",
  domain: resolveDomain(),
  // TODO: replace with the real intake inbox before launch
  email: "hello@sunroomcare.com",
  leadTo: "leads@sunroomcare.com",
  homeState: "Wisconsin",
  homeStateSlug: "wisconsin",
  updated: "September 2026", // data snapshot date shown on pay modules
  updatedEs: "septiembre de 2026",
} as const;
