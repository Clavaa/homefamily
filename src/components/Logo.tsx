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
    back: "#0F3D44", // spruce
    front: "#14766B", // civic teal
    halo: "#FFFFFF",
    badge: "#178A55", // payment green
    check: "#FFFFFF",
  },
  reverse: {
    back: "#FFFFFF",
    front: "#9AD6CC", // light teal, reads on spruce
    halo: "#0F3D44", // spruce ground shows through the gap
    badge: "#1FB271", // brightened payment green for dark ground
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
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {/* back figure — larger, holding space */}
      <circle cx="24" cy="17.5" r="9.5" fill={c.back} />
      <path d="M7 56 V44 a17 17 0 0 1 34 0 V56 Z" fill={c.back} />
      {/* front figure — leaning in, halo gap keeps the overlap legible at 16px */}
      <g stroke={c.halo} strokeWidth="3" paintOrder="stroke" fill={c.front}>
        <circle cx="45.5" cy="23.5" r="7.5" />
        <path d="M32 56 V46.5 a13.5 13.5 0 0 1 27 0 V56 Z" />
      </g>
      {/* payment-green check badge — approved benefit, not a coin */}
      <g stroke={c.halo} strokeWidth="3" paintOrder="stroke" fill={c.badge}>
        <circle cx="53.5" cy="11" r="8" />
      </g>
      <path
        d="M49.5 11.2 l2.8 2.8 5.6-6"
        fill="none"
        stroke={c.check}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        className={`display font-extrabold tracking-tight ${textClassName} ${
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
