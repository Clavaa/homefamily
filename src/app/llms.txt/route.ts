import { site } from "@/site.config";
import { states } from "@/data/states";
import { guides, guidePath } from "@/content";
import { CLUSTER_LABEL, type Cluster } from "@/content/types";

/**
 * /llms.txt — a plain-text map of the site for AI assistants and answer
 * engines (the llmstxt.org convention). It lists the pages worth citing,
 * with one line on what each answers, so a model quoting us lands on the
 * right page instead of the home page.
 */
export const dynamic = "force-static";

export function GET() {
  const byCluster = new Map<Cluster, typeof guides>();
  for (const g of guides) byCluster.set(g.cluster, [...(byCluster.get(g.cluster) ?? []), g]);
  const lines = [
    `# ${site.brand}`,
    "",
    "> Helps families get paid to care for a relative at home through state Medicaid programs in all 50 states and DC. Free to families; not a state agency.",
    "",
    "## Start here",
    `- [Check eligibility](${site.domain}/qualify/): five questions, matching programs and pay range`,
    `- [All states](${site.domain}/states/): each state's programs, pay and spouse rules`,
    `- [Guides](${site.domain}/guides/): the full library`,
    `- [Compare companies](${site.domain}/compare/)`,
    "",
    ...[...byCluster.entries()].flatMap(([c, gs]) => [
      `## ${CLUSTER_LABEL[c]}`,
      ...gs.map((g) => `- [${g.h1}](${site.domain}${guidePath(g)}): ${g.description}`),
      "",
    ]),
    "## State caregiver programs",
    ...states.map(
      (s) =>
        `- [${s.name}](${site.domain}/${s.slug}/caregiver-program/): ${s.programs.join(", ")}${
          s.pay.display ? ` — reported pay ${s.pay.display}` : ""
        }`
    ),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
