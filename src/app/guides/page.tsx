import type { Metadata } from "next";
import Hub from "@/components/Hub";
import { guidesIn } from "@/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Family Caregiver Guides: Pay, Programs & Home Care",
  description:
    "Plain-English guides to getting paid to care for a family member, Medicaid caregiver programs like CDPAP and IHSS, home care costs, and finding help at home.",
  path: "/guides/",
});

export default function GuidesHub() {
  return (
    <Hub
      path="/guides/"
      name="Guides"
      eyebrow="The Sunroom Care library"
      title="Guides for families caring at home"
      lead="How family caregivers get paid, which programs pay them, what home care really costs, and how to find help — written from each state's published Medicaid rules, with no made-up numbers."
      items={guidesIn("guides")}
      also={{
        href: "/compare/",
        label: "Comparing companies?",
        text: "Side-by-side comparisons of FreedomCare, Help at Home, Home Instead, Right at Home and more.",
      }}
    />
  );
}
