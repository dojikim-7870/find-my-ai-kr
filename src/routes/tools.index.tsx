import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { PageHeader } from "@/components/site/section";
import { SearchBox } from "@/components/site/search-box";
import { ToolGrid } from "@/components/site/tool-card";
import { aiTypeFilters, popularKeywords, useCaseFilters } from "@/data/categories";
import { searchTools, type Filters, type SortKey } from "@/lib/search";

interface ToolsSearch {
  q: string;
  use: string;
  type: string;
  price: string;
  ko: string;
  level: string;
  sort: SortKey;
}

const str = (v: unknown, fallback: string) => (typeof v === "string" && v ? v : fallback);

export const Route = createFileRoute("/tools/")({
  validateSearch: (search: Record<string, unknown>): ToolsSearch => ({
    q: str(search.q, ""),
    use: str(search.use, "all"),
    type: str(search.type, "all"),
    price: str(search.price, "all"),
    ko: str(search.ko, "all"),
    level: str(search.level, "all"),
    sort: str(search.sort, "popularity") as SortKey,
  }),
  head: () => ({
    meta: [
      { title: "AI 도구 찾기 | AIAtlas.kr" },
      {
        name: "description",
        content: "블로그·이미지·영상·업무 등 하려는 일로 AI 도구를 검색하고 요금제와 한국어 지원으로 걸러보세요.",
      },
      { property: "og:title", content: "AI 도구 찾기 | AIAtlas.kr" },
      { property: "og:description", content: "한국어 문장으로 검색하는 AI 도구 디렉터리." },
    ],
  }),
  component: ToolsPage,
});

const pricingOptions = ["all", "무료", "무료 플랜", "무료 체험", "유료", "크레딧"];
const koreanOptions = [
  { value: "all", label: "전체" },
  { value: "지원", label: "한국어 지원" },
  { value: "일부", label: "한국어 일부 지원" },
  { value: "미지원", label: "한국어 미지원" },
];
const levelOptions = ["all", "초급", "중급", "고급"];
const sortOptions: { value: SortKey; label: string }[] = [
  { value: "popularity", label: "많이 찾는 순" },
  { value: "rating", label: "평점순" },
  { value: "new", label: "최신순" },
  { value: "name", label: "이름순" },
];

function ToolsPage() {
  const search = Route.useSearch();
  const results = useMemo(() => {
    const filters: Filters = {
      useCase: search.use,
      aiType: search.type,
      pricing: search.price,
      korean: search.ko,
      difficulty: search.level,
    };
    return searchTools(search.q, filters, search.sort);
  }, [search]);

  return (
    <>
      <PageHeader
        eyebrow="AI 도구 찾기"
        title={search.q ? `‘${search.q}’ 검색 결과` : "AI 도구 찾기"}
        description="AI 이름을 몰라도 됩니다. ‘블로그 글 써주는 AI’처럼 하려는 일을 그대로 검색해 보세요."
      >
        <div className="max-w-2xl">
          <SearchBox defaultValue={search.q} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {popularKeywords.slice(0, 6).map((k) => (
            <Link
              key={k}
              to="/tools"
              search={(prev) => ({ ...prev, q: k })}
              className="rounded-full border bg-card px-3 py-1.5 text-xs font-medium transition-colors hover:border-brand hover:text-brand"
            >
              {k}
            </Link>
          ))}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="space-y-4 rounded-2xl border bg-card p-4 shadow-card">
          <FilterRow label="활용 분야" paramKey="use" options={[{ value: "all", label: "전체" }, ...useCaseFilters.map((f) => ({ value: f.slug, label: f.name }))]} current={search.use} />
          <FilterRow label="AI 유형" paramKey="type" options={[{ value: "all", label: "전체" }, ...aiTypeFilters.map((f) => ({ value: f.slug, label: f.name }))]} current={search.type} />
          <FilterRow label="가격" paramKey="price" options={pricingOptions.map((p) => ({ value: p, label: p === "all" ? "전체" : p }))} current={search.price} />
          <FilterRow label="한국어" paramKey="ko" options={koreanOptions} current={search.ko} />
          <FilterRow label="난이도" paramKey="level" options={levelOptions.map((l) => ({ value: l, label: l === "all" ? "전체" : l }))} current={search.level} />
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-6">
          <p className="min-w-0 text-sm font-semibold">
            검색 결과 <span className="text-brand">{results.length}</span>개
          </p>
          <div className="flex shrink-0 flex-wrap gap-1">
            {sortOptions.map((opt) => (
              <Link
                key={opt.value}
                to="/tools"
                search={(prev) => ({ ...prev, sort: opt.value })}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  search.sort === opt.value ? "bg-brand text-brand-foreground" : "text-muted-foreground hover:bg-accent"
                }`}
              >
                {opt.label}
              </Link>
            ))}
          </div>
        </div>

        {results.length > 0 ? (
          <ToolGrid items={results} />
        ) : (
          <div className="rounded-2xl border bg-card p-10 text-center">
            <p className="text-base font-bold">조건에 맞는 AI 도구를 찾지 못했습니다.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              검색어를 더 짧게 입력하거나 필터를 초기화해 보세요.
            </p>
            <Link
              to="/tools"
              search={{ q: "", use: "all", type: "all", price: "all", ko: "all", level: "all", sort: "popularity" }}
              className="mt-5 inline-block rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground"
            >
              전체 AI 보기
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

function FilterRow({
  label,
  paramKey,
  options,
  current,
}: {
  label: string;
  paramKey: keyof ToolsSearch;
  options: { value: string; label: string }[];
  current: string;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-[80px_minmax(0,1fr)] sm:items-start">
      <span className="pt-1 text-xs font-bold text-muted-foreground">{label}</span>
      <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible">
        {options.map((opt) => (
          <Link
            key={opt.value}
            to="/tools"
            search={(prev) => ({ ...prev, [paramKey]: opt.value })}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              current === opt.value
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-background text-muted-foreground hover:border-brand hover:text-brand"
            }`}
          >
            {opt.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
