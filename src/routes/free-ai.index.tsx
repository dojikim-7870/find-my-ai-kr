import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";
import { ToolGrid } from "@/components/site/tool-card";
import { tools } from "@/data/tools";
import { sortTools } from "@/lib/search";

const filters = [
  { key: "all", label: "전체" },
  { key: "free", label: "완전 무료" },
  { key: "plan", label: "무료 플랜" },
  { key: "trial", label: "무료 체험" },
  { key: "nosignup", label: "가입 없이 사용" },
  { key: "credit", label: "무료 크레딧" },
];

export const Route = createFileRoute("/free-ai/")({
  validateSearch: (search: Record<string, unknown>) => ({
    f: typeof search['f'] === "string" && search['f'] ? (search['f'] as string) : "all",
  }),
  head: () => ({
    meta: [
      { title: "무료 AI 찾기 | 무료로 쓸 수 있는 AI 도구 - AIAtlas.kr" },
      { name: "description", content: "완전 무료, 무료 플랜, 무료 체험, 무료 크레딧까지. 비용 없이 시작할 수 있는 AI 도구를 모았습니다." },
      { property: "og:title", content: "무료 AI 찾기 | AIAtlas.kr" },
      { property: "og:description", content: "무료로 쓸 수 있는 AI 도구 모음." },
    ],
  }),
  component: FreeAIPage,
});

function FreeAIPage() {
  const { f } = Route.useSearch();
  const items = sortTools(
    tools.filter((t) => {
      if (f === "free") return t.pricing === "무료";
      if (f === "plan") return t.freePlan;
      if (f === "trial") return t.freeTrial;
      if (f === "nosignup") return Boolean(t.noSignupFree);
      if (f === "credit") return t.pricing === "크레딧";
      return t.pricing === "무료" || t.freePlan || t.freeTrial || t.pricing === "크레딧";
    }),
    "popularity",
  );

  return (
    <>
      <PageHeader
        eyebrow="무료 AI"
        title="무료 AI 찾기"
        description="비용 부담 없이 시작할 수 있는 AI 도구입니다. 무료 범위와 조건은 서비스별로 다르니 공식 사이트에서 확인해 주세요."
      >
        <div className="flex flex-wrap gap-2">
          {filters.map((opt) => (
            <Link
              key={opt.key}
              to="/free-ai"
              search={{ f: opt.key }}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                f === opt.key ? "border-brand bg-brand text-brand-foreground" : "border-border bg-card hover:border-brand hover:text-brand"
              }`}
            >
              {opt.label}
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {[
            { to: "/free-ai/writing", label: "무료 글쓰기 AI" },
            { to: "/free-ai/image", label: "무료 이미지 AI" },
            { to: "/free-ai/video", label: "무료 영상 AI" },
          ].map((l) => (
            <Link key={l.to} to="/free-ai/$type" params={{ type: l.to.split("/").pop() as string }} className="font-semibold text-brand hover:underline">
              {l.label}
            </Link>
          ))}
        </div>
      </PageHeader>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="pb-5 text-sm font-semibold">
          검색 결과 <span className="text-brand">{items.length}</span>개
        </p>
        <ToolGrid items={items} />
      </div>
    </>
  );
}
