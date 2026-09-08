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
  /**
   * Set both of these to a real, answered, call-tracked number and every
   * phone affordance switches back on by itself: the header pill, the mobile
   * call icon, the sticky bottom bar, the footer button, the "Call or text"
   * button on every page, the quiz CTA line, and telephone in the
   * Organization schema.
   *
   * They are null because a placeholder number is worse than no number.
   * This is a phone-first category — senior-care call leads convert around
   * 41% against roughly 1.7% for forms — so pointing that path at a dead
   * line on 3,300 indexed pages loses more than showing no number at all.
   */
  phone: null as string | null,
  phoneHref: null as string | null,
  domain: resolveDomain(),
  // Publicly displayed address. TODO: no mailbox exists behind this yet.
  email: "hello@sunroomcare.com",
  /** Where lead notifications are delivered. */
  leadTo: "support@offendersearch.app",
  /**
   * Envelope sender for lead mail. Must be a verified sender on whichever
   * SendGrid account SENDGRID_API_KEY belongs to — currently the
   * offendersearch account, so it sends as its verified support address.
   * This is transactional only and is never shown on the site.
   */
  leadFrom: "support@offendersearch.app",
  homeState: "Wisconsin",
  homeStateSlug: "wisconsin",
  updated: "September 2026", // data snapshot date shown on pay modules
  updatedEs: "septiembre de 2026",
} as const;
