import type { Cluster, Guide, Section } from "./types";
import { ALL } from "./registry.generated";

export const guides: Guide[] = ALL;

export function guidePath(g: Pick<Guide, "section" | "slug">): string {
  return `/${g.section}/${g.slug}/`;
}

export function guidesIn(section: Section): Guide[] {
  return guides.filter((g) => g.section === section);
}

export function getGuide(section: Section, slug: string): Guide | undefined {
  return guides.find((g) => g.section === section && g.slug === slug);
}

export function guideByPath(path: string): Guide | undefined {
  return guides.find((g) => guidePath(g) === path);
}

export function guidesInCluster(c: Cluster): Guide[] {
  return guides.filter((g) => g.cluster === c);
}
