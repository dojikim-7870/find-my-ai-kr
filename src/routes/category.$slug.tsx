import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";
import { ToolGrid } from "@/components/site/tool-card";
import { getCategory } from "@/data/categories";
import { toolsByCategory } from "@/lib/search";
import type { Category } from "@/data/categories";
import type { AITool } from "@/data/types";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, items: toolsByCategory(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "카테고리를 찾을 수 없습니다 | AIAtlas.kr" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.category.name} AI 도구 추천 | AIAtlas.kr`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData() as { category: Category; items: AITool[] };

  return (
    <>
      <PageHeader
        eyebrow="카테고리"
        title={`${category.emoji} ${category.name} AI 도구`}
        description={category.description}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="pb-5 text-sm font-semibold">
          검색 결과 <span className="text-brand">{items.length}</span>개
        </p>
        <ToolGrid items={items} />
      </div>
    </>
  );
}
