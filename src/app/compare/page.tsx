import type { Metadata } from "next";
import Hub from "@/components/Hub";
import { guidesIn } from "@/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Compare Home Care & Family Caregiver Companies",
  description:
    "Honest comparisons of FreedomCare, Help at Home, Home Instead, Right at Home, PPL and other home care companies — what each does, where, and how family caregivers get paid.",
  path: "/compare/",
});

export default function CompareHub() {
  return (
    <Hub
      path="/compare/"
      name="Compare"
      eyebrow="Side by side"
      title="Comparing home care and family caregiver companies"
      lead="Some companies send a stranger to the house. Some pay a family member to do the caring. Here is what each one actually does, where it works, and what to ask before you sign anything."
      items={guidesIn("compare")}
      also={{
        href: "/guides/",
        label: "All family caregiver guides",
        text: "Programs, pay rates, costs and how to get started in your state.",
      }}
    />
  );
}
