import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Gift, Sparkles } from "lucide-react";
import { SearchBox } from "@/components/site/search-box";
import { Section, SectionHeader } from "@/components/site/section";
import { ToolGrid } from "@/components/site/tool-card";
import { NewsletterForm } from "@/components/site/newsletter-form";
import { categoryGroups, intents, popularKeywords } from "@/data/categories";
import { tools } from "@/data/tools";
import { guides } from "@/data/guides";
import { sortTools } from "@/lib/search";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AIAtlas.kr | 나에게 맞는 AI를 쉽게 찾다" },
      {
        name: "description",
        content:
          "글쓰기·이미지·영상·코딩·업무 자동화까지, 한국 사용자에게 유용한 AI 도구를 검색하고 비교하세요. 무료 여부와 한국어 지원을 한눈에.",
      },
      { property: "og:title", content: "AIAtlas.kr | 나에게 맞는 AI를 쉽게 찾다" },
      {
        property: "og:description",
        content: "활용 목적으로 찾는 한국형 AI 도구 검색·비교 플랫폼.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = sortTools(
    tools.filter((t) => t.featured),
    "popularity",
  ).slice(0, 6);
  const free = sortTools(
    tools.filter((t) => t.pricing === "무료" || t.freePlan),
    "popularity",
  ).slice(0, 3);
  const fresh = sortTools(tools, "new").slice(0, 3);
  const popularCategories = [
    "blog",
    "image",
    "video",
    "shorts",
    "writing",
    "coding",
    "translate",
    "pdf",
    "excel",
    "smartstore",
    "presentation",
    "study",
  ];
  const categoryLookup = categoryGroups.flatMap((g) => g.items);

  return (
    <>
      {/* Hero */}
      <section className="hero-surface border-b">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-semibold text-brand shadow-card">
            <Sparkles className="size-3.5" />
            한국인을 위한 AI 도구 검색·비교·활용 플랫폼
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
            나에게 맞는 AI를
            <br className="sm:hidden" /> 쉽게 찾아보세요
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            글쓰기부터 이미지·영상·코딩·업무 자동화까지, 한국 사용자에게 유용한 AI 도구를 한곳에서 검색하고
            비교하세요.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
            <SearchBox />
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">많이 찾는 검색어</span>
            {popularKeywords.map((keyword) => (
              <Link
                key={keyword}
                to="/tools"
                search={{ q: keyword }}
                className="rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                {keyword}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 무엇을 하려고 하세요 */}
      <Section>
        <SectionHeader
          title="무엇을 하려고 하세요?"
          description="AI 이름을 몰라도 괜찮습니다. 하려는 일을 고르면 맞는 도구를 보여드려요."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {intents.map((intent) => (
            <Link
              key={intent.id}
              to="/tools"
              search={{ q: intent.query }}
              className="group flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-elevated"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-lg">
                {intent.emoji}
              </span>
              <span className="min-w-0 flex-1 text-sm font-semibold leading-snug">{intent.label}</span>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
            </Link>
          ))}
        </div>
      </Section>

      {/* 인기 카테고리 */}
      <Section className="pt-0">
        <SectionHeader
          title="인기 카테고리"
          description="활용 목적별로 정리된 카테고리에서 바로 찾아보세요."
          moreTo="/categories"
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {popularCategories.map((slug) => {
            const category = categoryLookup.find((c) => c.slug === slug);
            if (!category) return null;
            return (
              <Link
                key={slug}
                to="/category/$slug"
                params={{ slug }}
                className="flex flex-col items-center gap-2 rounded-2xl border bg-card px-3 py-5 text-center shadow-card transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-elevated"
              >
                <span className="text-2xl">{category.emoji}</span>
                <span className="text-sm font-semibold">{category.name}</span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* 주목받는 AI 도구 */}
      <Section className="pt-0">
        <SectionHeader
          title="주목받는 AI 도구"
          description="실제 사용량 데이터가 쌓이기 전까지는 편집 기준으로 선정한 목록입니다."
          moreTo="/popular"
        />
        <ToolGrid items={featured} />
      </Section>

      {/* 무료 AI */}
      <Section className="pt-0">
        <div className="rounded-3xl border bg-surface p-5 sm:p-8">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 pb-5">
            <div className="min-w-0">
              <h2 className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
                <Gift className="size-5 shrink-0 text-brand" />
                무료로 쓸 수 있는 AI
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                비용 부담 없이 시작할 수 있는 도구부터 살펴보세요.
              </p>
            </div>
            <Link
              to="/free-ai"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand hover:underline"
            >
              무료 AI 찾기
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <ToolGrid items={free} />
        </div>
      </Section>

      {/* 신규 AI */}
      <Section className="pt-0">
        <SectionHeader title="새로 추가된 AI" description="AIAtlas에 최근 등록된 도구입니다." moreTo="/new" />
        <ToolGrid items={fresh} />
      </Section>

      {/* 가이드 */}
      <Section className="pt-0">
        <SectionHeader title="AI 활용 가이드" description="실제 업무와 콘텐츠 제작에 바로 쓰는 방법." moreTo="/guides" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.slice(0, 3).map((guide) => (
            <Link
              key={guide.slug}
              to="/guides/$slug"
              params={{ slug: guide.slug }}
              className="flex h-full flex-col rounded-2xl border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <span className="text-2xl">{guide.emoji}</span>
              <h3 className="mt-3 text-base font-bold">{guide.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{guide.summary}</p>
              <span className="mt-4 text-xs font-medium text-muted-foreground">
                {guide.category} · 약 {guide.readingTime}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 소개 */}
      <Section className="pt-0">
        <div className="rounded-3xl border bg-card p-6 shadow-card sm:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
                <Compass className="size-5 text-brand" />
                AIAtlas 소개
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                AIAtlas.kr은 “AI가 뭔지는 알겠는데 어떤 걸 써야 하지?”라는 질문에서 출발했습니다. AI 도구를
                이름이 아니라 <strong className="text-foreground">하려는 일</strong> 기준으로 찾을 수 있도록
                정리하고, 무료 사용 여부와 한국어 지원 수준을 함께 보여드립니다.
              </p>
              <Link
                to="/about"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
              >
                서비스 소개 자세히 보기
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "찾기", body: "한국어 문장으로 검색" },
                { title: "비교하기", body: "요금·한국어·난이도 비교" },
                { title: "선택하기", body: "내 상황에 맞는 도구 결정" },
                { title: "활용하기", body: "가이드로 바로 실행" },
              ].map((step, i) => (
                <li key={step.title} className="rounded-2xl bg-surface p-4">
                  <span className="text-xs font-bold text-brand">STEP {i + 1}</span>
                  <p className="mt-1 text-sm font-bold">{step.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 구독 */}
      <Section className="pt-0">
        <NewsletterForm />
      </Section>
    </>
  );
}
