import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article from "@/components/Article";
import { getGuide, guidesIn } from "@/content";
import { pageMeta } from "@/lib/seo";
import { CLUSTER_LABEL } from "@/content/types";

export function generateStaticParams() {
  return guidesIn("compare").map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide("compare", slug);
  if (!g) return {};
  return pageMeta({
    title: g.title,
    description: g.description,
    path: `/compare/${g.slug}/`,
    article: { published: g.published, modified: g.updated, section: CLUSTER_LABEL[g.cluster] },
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const g = getGuide("compare", slug);
  if (!g) notFound();
  return <Article g={g} />;
}
