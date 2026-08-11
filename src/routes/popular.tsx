import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";
import { ToolGrid } from "@/components/site/tool-card";
import { tools } from "@/data/tools";
import { sortTools } from "@/lib/search";

export const Route = createFileRoute("/popular")({
  head: () => ({
    meta: [
      { title: "많이 찾는 AI 도구 | AIAtlas.kr" },
      { name: "description", content: "AIAtlas에서 많이 찾는 AI 도구를 모았습니다. 요금제와 한국어 지원을 함께 확인하세요." },
      { property: "og:title", content: "많이 찾는 AI 도구 | AIAtlas.kr" },
      { property: "og:description", content: "지금 주목받는 AI 도구 목록." },
    ],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="인기 AI"
        title="많이 찾는 AI 도구"
        description="실제 사용량 데이터가 충분히 쌓이기 전까지는 편집 기준으로 선정한 목록입니다. 한국 시장 점유율이나 순위를 의미하지 않습니다."
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <ToolGrid items={sortTools(tools, "popularity")} />
      </div>
    </>
  ),
});
