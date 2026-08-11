import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";
import { categoryGroups } from "@/data/categories";
import { tools } from "@/data/tools";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "카테고리 | AI 도구 활용 목적별 찾기 - AIAtlas.kr" },
      { name: "description", content: "블로그·유튜브·업무·쇼핑몰·개발·학습 등 활용 목적별 AI 도구 카테고리." },
      { property: "og:title", content: "카테고리 | AIAtlas.kr" },
      { property: "og:description", content: "활용 목적별로 AI 도구를 모아봤습니다." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="카테고리"
        title="활용 목적으로 찾기"
        description="하려는 일이 정해져 있다면 카테고리에서 바로 찾는 것이 가장 빠릅니다."
      />
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10">
        {categoryGroups.map((group) => (
          <section key={group.label}>
            <h2 className="pb-4 text-lg font-extrabold">{group.label}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((c) => {
                const count = tools.filter((t) => t.categories.includes(c.slug)).length;
                return (
                  <Link
                    key={c.slug}
                    to="/category/$slug"
                    params={{ slug: c.slug }}
                    className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-elevated"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-lg">
                      {c.emoji}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold">
                        {c.name} <span className="text-xs font-medium text-muted-foreground">{count}개</span>
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                        {c.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
