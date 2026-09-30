/**
 * Content model for the long-form library: /guides/* and /compare/*.
 *
 * Every page is data, rendered by one component (components/Article.tsx), so
 * the SEO scaffolding — table of contents, anchored H2s, Article + FAQ +
 * Breadcrumb schema, related-reading links, state grids — is identical and
 * can't drift page to page. Writers only touch words.
 *
 * Inline markup in any string field that is rendered as prose:
 *   [anchor text](/internal/path/)   internal link (checked at build)
 *   [anchor text](https://…)         external link (rel=nofollow noopener)
 *   **bold**
 */

export type Section = "guides" | "compare";

/**
 * Topic clusters. Each is a hub-and-spoke silo: every page links to its
 * cluster siblings, and the hub pages group by cluster.
 */
export type Cluster =
  | "get-paid"
  | "programs"
  | "costs"
  | "types-of-care"
  | "finding-care"
  | "support"
  | "careers"
  | "compare";

export const CLUSTER_LABEL: Record<Cluster, string> = {
  "get-paid": "Getting paid to care",
  programs: "Programs that pay family",
  costs: "Costs, pay rates & insurance",
  "types-of-care": "Types of home care",
  "finding-care": "Finding care near you",
  support: "Support for caregivers",
  careers: "Becoming a caregiver",
  compare: "Comparisons",
};

export type Block =
  /** A paragraph. Supports inline links and **bold**. */
  | string
  | { h3: string }
  | { ul: string[] }
  | { ol: string[] }
  | {
      table: {
        caption?: string;
        head: string[];
        rows: string[][];
      };
    }
  | { callout: { title?: string; text: string; tone?: "info" | "warn" | "money" } }
  /**
   * An auto-generated 51-row table built from states.json, every row linking
   * into that state's pages. The strongest internal-link block on the site.
   *   programs — state · programs that pay family · link to /{state}/caregiver-program/
   *   pay      — state · reported pay · link to /{state}/caregiver-pay/
   *   spouse   — state · can a spouse be paid · link to /{state}/spousal-caregiver/
   */
  | { stateTable: "programs" | "pay" | "spouse" }
  /** Chip list of links, e.g. counties or cities. */
  | { chips: { href: string; label: string }[] }
  /** Card grid of links with a one-line description each. */
  | { cards: { href: string; title: string; text: string }[] }
  /** Mid-article eligibility CTA. */
  | { cta: true };

export interface ArticleSection {
  /** Anchor id — lowercase-hyphenated, unique within the page. */
  id: string;
  /** The H2. Written around a real search phrase, not a clever pun. */
  h2: string;
  blocks: Block[];
}

export interface Guide {
  slug: string;
  section: Section;
  cluster: Cluster;
  /** <title>, ≤ 60 chars; the "| Sunroom Care" suffix is added. */
  title: string;
  /** Meta description, 120–158 chars. */
  description: string;
  h1: string;
  /** Short label for cards, breadcrumbs and the table of contents. */
  short: string;
  eyebrow: string;
  lead: string;
  /**
   * The 40–60 word direct answer to the page's main query, rendered in a box
   * directly under the hero. Written to be lifted whole into a featured
   * snippet or an AI overview.
   */
  answer: string;
  takeaways: string[];
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
  /** Paths of related pages, e.g. "/guides/cdpap/" or "/compare/freedomcare/". */
  related: string[];
  sources: { label: string; url: string }[];
  /** ISO dates. */
  published: string;
  updated: string;
  /** One of /public/photos/*.webp. */
  photo: { src: string; alt: string };
  /** The search phrases this page is written to answer. Not rendered. */
  keywords: string[];
}
