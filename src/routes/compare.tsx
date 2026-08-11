import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/section";
import { tools } from "@/data/tools";
import { KoreanBadge } from "@/components/site/badges";

const rows = [
  "가격",
  "무료 사용",
  "한국어",
  "글쓰기",
  "이미지",
  "코딩",
  "문서 분석",
  "검색",
  "업무 활용",
  "초보자 친화성",
];

const fitNotes: Record<string, string> = {
  chatgpt: "범용 AI — 무엇부터 시작할지 모를 때",
  claude: "긴 문서와 글쓰기 중심 작업",
  gemini: "Google 서비스와 함께 쓰는 업무 환경",
  perplexity: "출처가 필요한 자료 조사",
};

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "AI 비교 | ChatGPT vs Claude vs Gemini - AIAtlas.kr" },
      { name: "description", content: "가격, 무료 사용, 한국어 지원, 글쓰기·코딩·문서 분석까지 항목별로 AI를 비교해 보세요." },
      { property: "og:title", content: "AI 비교 | AIAtlas.kr" },
      { property: "og:description", content: "AI 도구를 항목별로 나란히 비교합니다." },
    ],
  }),
  component: ComparePage,
});

const comparable = tools.filter((t) => t.compare);

function ComparePage() {
  const [selected, setSelected] = useState<string[]>(["chatgpt", "claude", "gemini"]);

  function toggle(slug: string) {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length >= 3 ? prev : [...prev, slug],
    );
  }

  const chosen = comparable.filter((t) => selected.includes(t.slug));

  return (
    <>
      <PageHeader
        eyebrow="AI 비교"
        title="AI 비교하기"
        description="최대 3개까지 선택해 항목별로 비교할 수 있습니다. 아래 평가는 공개된 정보를 바탕으로 정리한 참고용 요약입니다."
      >
        <div className="flex flex-wrap gap-2">
          {comparable.map((t) => (
            <button
              key={t.slug}
              type="button"
              onClick={() => toggle(t.slug)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                selected.includes(t.slug)
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-card hover:border-brand hover:text-brand"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 py-10">
        {chosen.length === 0 ? (
          <p className="rounded-2xl border bg-card p-8 text-center text-sm text-muted-foreground">
            비교할 AI를 선택해 주세요.
          </p>
        ) : (
          <>
            <div className="overflow-x-auto rounded-2xl border bg-card shadow-card">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-surface">
                    <th className="w-32 px-4 py-3 text-left text-xs font-bold text-muted-foreground">항목</th>
                    {chosen.map((t) => (
                      <th key={t.slug} className="px-4 py-3 text-left text-sm font-extrabold">
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row} className="border-b border-border/60 last:border-0">
                      <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground">{row}</th>
                      {chosen.map((t) => (
                        <td key={t.slug} className="px-4 py-3 align-top">
                          {t.compare?.[row] ?? "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="pb-4 pt-10 text-lg font-extrabold">어떤 사람에게 적합한가?</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {chosen.map((t) => (
                <div key={t.slug} className="rounded-2xl border bg-card p-5 shadow-card">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold">{t.name}</h3>
                    <KoreanBadge level={t.koreanSupport} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{fitNotes[t.slug] ?? t.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
