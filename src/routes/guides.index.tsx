import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";
import { guides } from "@/data/guides";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "AI 활용 가이드 | AIAtlas.kr" },
      { name: "description", content: "블로그 글쓰기, 쇼츠 제작, 상품 설명, 업무 자동화까지 AI를 실제로 쓰는 방법을 정리했습니다." },
      { property: "og:title", content: "AI 활용 가이드 | AIAtlas.kr" },
      { property: "og:description", content: "한국 사용자를 위한 실전 AI 활용 가이드." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="활용 가이드" title="AI 활용 가이드" description="따라 하면 되는 실전 사용법을 정리했습니다." />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              to="/guides/$slug"
              params={{ slug: g.slug }}
              className="flex h-full flex-col rounded-2xl border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <span className="text-2xl">{g.emoji}</span>
              <h2 className="mt-3 text-base font-bold">{g.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{g.summary}</p>
              <span className="mt-auto pt-4 text-xs font-medium text-muted-foreground">
                {g.category} · 약 {g.readingTime}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  ),
});
