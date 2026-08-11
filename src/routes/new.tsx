import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";
import { ToolGrid } from "@/components/site/tool-card";
import { tools } from "@/data/tools";
import { sortTools } from "@/lib/search";

export const Route = createFileRoute("/new")({
  head: () => ({
    meta: [
      { title: "새로 추가된 AI 도구 | AIAtlas.kr" },
      { name: "description", content: "AIAtlas에 최근 등록된 AI 도구를 최신순으로 확인하세요." },
      { property: "og:title", content: "새로 추가된 AI 도구 | AIAtlas.kr" },
      { property: "og:description", content: "최근 등록된 AI 도구 목록." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="신규 AI" title="새로 추가된 AI" description="AIAtlas에 최근 등록된 순서로 보여드립니다." />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <ToolGrid items={sortTools(tools, "new")} />
      </div>
    </>
  ),
});
