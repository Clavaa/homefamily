import { site } from "@/site.config";

/**
 * Sunroom Care logo — a civic "benefits program" mark, deliberately not fintech.
 *
 * Mark: two abstract people side-by-side (family + support) — a larger spruce
 * figure and a smaller civic-teal figure leaning in — with a small payment-green
 * check badge (approval, not money). Wordmark: "Sunroom" (Bricolage 800, spruce)
 * + "Care" (payment green — green reads as approved here, not as a payout).
 *
 * The accent stays green rather than the marigold the brand palette uses for
 * highlights: marigold on warm paper fails contrast at body-text weight, and
 * a logo is not the place to lose legibility.
 *
 * `variant="reverse"` renders the white-on-spruce version for the footer.
 */

type Variant = "default" | "reverse";

const COLORS: Record<
  Variant,
  { back: string; front: string; halo: string; badge: string; check: string }
> = {
  default: {
    back: "#12302E", // spruce
    front: "#2C6559", // civic teal
    halo: "#FFFFFF",
    badge: "#0F6B45", // payment green
    check: "#FFFFFF",
  },
  reverse: {
    back: "#FFFFFF",
    front: "#A9C6BC", // light teal, reads on spruce
    halo: "#12302E", // spruce ground shows through the gap
    badge: "#22855B", // brightened payment green for dark ground
    check: "#FFFFFF",
  },
};

export function LogoMark({
  variant = "default",
  className = "h-10 w-10",
  title,
}: {
  variant?: Variant;
  className?: string;
  title?: string;
}) {
  const c = COLORS[variant];
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      fill="none"
    >
      {title ? <title>{title}</title> : null}
      {/* A sunroom window: four panes, with light coming through the top two. */}
      <rect
        x="6.5"
        y="6.5"
        width="27"
        height="27"
        rx="2"
        stroke={c.back}
        strokeWidth="2.5"
      />
      <path d="M20 7v26M7 20h26" stroke={c.back} strokeWidth="2.5" />
      <rect x="9" y="9" width="9" height="9" fill={c.badge} opacity="0.9" />
      <rect x="22" y="9" width="9" height="9" fill={c.front} opacity="0.35" />
    </svg>
  );
}

export function Logo({
  variant = "default",
  className = "",
  markClassName = "h-9 w-9",
  textClassName = "text-xl",
}: {
  variant?: Variant;
  className?: string;
  markClassName?: string;
  textClassName?: string;
}) {
  const reverse = variant === "reverse";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark variant={variant} className={markClassName} />
      <span
        className={`display font-semibold tracking-tight ${textClassName} ${
          reverse ? "text-white" : "text-spruce"
        }`}
      >
        {site.brandMark.primary}
        <span className={reverse ? "text-[#6FD39F]" : "text-pay"}>
          {" "}
          {site.brandMark.accent}
        </span>
      </span>
    </span>
  );
}
