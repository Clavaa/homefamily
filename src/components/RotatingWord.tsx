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

  return (
    <>
      <span className="sr-only">{words[0]}</span>
      <span
        aria-hidden="true"
        className={`inline-block rounded-xl bg-marigold-soft px-2 text-spruce transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ boxShadow: "inset 0 -0.18em 0 0 var(--color-marigold)" }}
      >
        {words[i]}
      </span>
    </>
  );
}
