import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Suspense } from "react";
import Shell from "@/components/Shell";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = pageMeta({
  title: "Do I Qualify? Free 2-Minute Check",
  description:
    "Answer 5 easy questions and see which programs in your state can pay you to care for a family member — before you share any contact info.",
  path: "/qualify/",
});

export default function QualifyPage() {
  return (
    <Shell lang="en">
      <Suspense
        fallback={
          /* Prerendered stand-in — replaced by the quiz (which brings its own
             step h1) as soon as it mounts, so the page always has exactly one h1. */
          <div className="mx-auto max-w-xl px-4 py-16 text-center">
            <h1 className="display text-3xl font-extrabold text-spruce">
              See if you qualify
            </h1>
            <p className="mt-3 text-muted">
              5 easy questions. 2 minutes. Loading…
            </p>
          </div>
        }
      >
        <Quiz />
      </Suspense>
    </Shell>
  );
}
