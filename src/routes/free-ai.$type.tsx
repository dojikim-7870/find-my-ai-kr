import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";
import { ToolGrid } from "@/components/site/tool-card";
import { tools } from "@/data/tools";
import { sortTools } from "@/lib/search";
import type { AITool } from "@/data/types";

const types: Record<string, { name: string; categories: string[]; description: string }> = {
  writing: { name: "글쓰기", categories: ["writing", "blog", "document"], description: "무료로 쓸 수 있는 글쓰기 AI 도구입니다." },
  image: { name: "이미지", categories: ["image"], description: "무료 또는 무료 크레딧으로 이미지를 만들 수 있는 AI입니다." },
  video: { name: "영상", categories: ["video", "shorts", "youtube"], description: "무료로 영상 제작·편집에 활용할 수 있는 AI입니다." },
  voice: { name: "음성", categories: ["voice"], description: "무료로 사용할 수 있는 음성 AI 도구입니다." },
  coding: { name: "코딩", categories: ["coding"], description: "무료로 쓸 수 있는 코딩 AI 도구입니다." },
  translate: { name: "번역", categories: ["translate"], description: "무료로 사용할 수 있는 번역 AI입니다." },
};

export const Route = createFileRoute("/free-ai/$type")({
  loader: ({ params }) => {
    const type = types[params.type];
    if (!type) throw notFound();
    const items = sortTools(
      tools.filter(
        (t) =>
          t.categories.some((c) => type.categories.includes(c)) &&
          (t.pricing === "무료" || t.freePlan || t.freeTrial || t.pricing === "크레딧"),
      ),
      "popularity",
    );
    return { type, items };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "페이지를 찾을 수 없습니다 | AIAtlas.kr" }, { name: "robots", content: "noindex" }] };
    const title = `무료 ${loaderData.type.name} AI 추천 | AIAtlas.kr`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.type.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.type.description },
      ],
    };
  },
  component: FreeAITypePage,
});

function FreeAITypePage() {
  const { type, items } = Route.useLoaderData() as { type: { name: string; description: string }; items: AITool[] };
  return (
    <>
      <PageHeader eyebrow="무료 AI" title={`무료 ${type.name} AI`} description={type.description} />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="pb-5 text-sm font-semibold">
          검색 결과 <span className="text-brand">{items.length}</span>개
        </p>
        <ToolGrid items={items} />
      </div>
    </>
  );
}
