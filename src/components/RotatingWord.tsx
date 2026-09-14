"use client";

import { useEffect, useState } from "react";

/**
 * Rotates the relative word in the hero headline (mom → dad → your husband …).
 * Marigold highlight per the style bible. Respects prefers-reduced-motion
 * (globals.css collapses the transition; the word still swaps, which is fine
 * for a11y since it's decorative emphasis, and aria-hidden hides churn from AT
 * while a visually-hidden static word keeps the sentence readable).
 */
export default function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((n) => (n + 1) % words.length);
        setVisible(true);
      }, 250);
    }, 2600);
    return () => clearInterval(t);
  }, [words.length]);

  // One element, not two. The previous version paired a visually-hidden
  // static word with an aria-hidden visible one — correct for screen readers,
  // but sr-only text is still in the DOM, so the rendered H1 read "care for
  // mom mom" to anything parsing text content, Google included. A plain span
  // is not a live region, so screen readers announce it once and ignore the
  // swaps; that gets the a11y behaviour without duplicating the keyword.
  return (
    <span
      className={`inline-block text-spruce transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ boxShadow: "inset 0 -0.09em 0 0 var(--color-clay)" }}
    >
      {words[i]}
    </span>
  );
}
