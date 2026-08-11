import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";
import { ToolGrid } from "@/components/site/tool-card";
import { useFavorites } from "@/hooks/use-favorites";
import { tools } from "@/data/tools";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "찜한 AI | AIAtlas.kr" },
      { name: "description", content: "관심 있는 AI 도구를 저장하고 나중에 비교해 보세요." },
      { property: "og:title", content: "찜한 AI | AIAtlas.kr" },
      { property: "og:description", content: "내가 저장한 AI 도구 목록." },
    ],
  }),
  component: FavoritesPage,
});

function FavoritesPage() {
  const { favorites, hydrated } = useFavorites();
  const items = tools.filter((t) => favorites.includes(t.slug));

  return (
    <>
      <PageHeader
        eyebrow="찜한 AI"
        title="내가 저장한 AI"
        description="찜 목록은 이 브라우저에만 저장됩니다. 기기를 바꾸면 목록이 보이지 않을 수 있습니다."
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        {!hydrated ? null : items.length > 0 ? (
          <ToolGrid items={items} />
        ) : (
          <div className="rounded-2xl border bg-card p-10 text-center">
            <p className="text-base font-bold">아직 저장한 AI가 없습니다.</p>
            <p className="mt-2 text-sm text-muted-foreground">카드의 하트 버튼을 누르면 여기에 모아둘 수 있어요.</p>
            <Link
              to="/tools"
              className="mt-5 inline-block rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground"
            >
              AI 도구 찾아보기
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
