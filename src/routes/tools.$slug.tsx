import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ExternalLink, Check, X } from "lucide-react";
import { DifficultyBadge, KoreanBadge, PricingBadge } from "@/components/site/badges";
import { ToolCard } from "@/components/site/tool-card";
import { categoryName } from "@/data/categories";
import { getTool, tools } from "@/data/tools";
import type { AITool } from "@/data/types";

export const Route = createFileRoute("/tools/$slug")({
  loader: ({ params }) => {
    const tool = getTool(params.slug);
    if (!tool) throw notFound();
    return { tool };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "정보를 찾을 수 없습니다 | AIAtlas.kr" }, { name: "robots", content: "noindex" }] };
    }
    const { tool } = loaderData;
    const title = `${tool.name} - 요금제·한국어 지원·활용법 | AIAtlas.kr`;
    const description = `${tool.name}의 가격, 무료 사용 여부, 한국어 지원 수준과 한국에서의 활용 방법을 정리했습니다.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ToolDetail,
});

function ToolDetail() {
  const { tool } = Route.useLoaderData() as { tool: AITool };
  const alternatives = tool.alternatives.map((s) => tools.find((t) => t.slug === s)).filter(Boolean);

  return (
    <>
      <div className="border-b bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <nav className="text-xs text-muted-foreground">
            <Link to="/tools" className="hover:text-brand">
              AI 도구 찾기
            </Link>
            <span className="px-1">/</span>
            <span>{tool.name}</span>
          </nav>
          <div className="mt-3 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
            <div className="min-w-0">
              <h1 className="text-2xl font-extrabold sm:text-3xl">{tool.name}</h1>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{tool.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <PricingBadge tool={tool} />
                <KoreanBadge level={tool.koreanSupport} />
                <DifficultyBadge level={tool.difficulty} />
              </div>
            </div>
            <a
              href={tool.website}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
            >
              공식 사이트 <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-8 px-4 py-10">
        <Card title="기본 정보">
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            <Row label="카테고리">
              <div className="flex flex-wrap gap-1.5">
                {tool.categories.map((c) => (
                  <Link
                    key={c}
                    to="/category/$slug"
                    params={{ slug: c }}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium hover:bg-accent"
                  >
                    {categoryName(c)}
                  </Link>
                ))}
              </div>
            </Row>
            <Row label="요금제">{tool.pricingDetails}</Row>
            <Row label="무료 사용">{tool.pricing === "무료" || tool.freePlan ? "가능" : tool.freeTrial ? "무료 체험 제공" : "유료"}</Row>
            <Row label="사용 난이도">{tool.difficulty}</Row>
            <Row label="공식 웹사이트">
              <a href={tool.website} target="_blank" rel="noreferrer noopener" className="text-brand hover:underline">
                {tool.website.replace("https://", "")}
              </a>
            </Row>
            <Row label="등록일">{tool.dateAdded}</Row>
          </dl>
        </Card>

        <Card title="한국 사용자에게는?">
          <p className="text-sm leading-relaxed text-foreground/85">{tool.koreanDescription}</p>
        </Card>

        <Card title="주요 기능">
          <ul className="grid gap-2 sm:grid-cols-2">
            {tool.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                {f}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="한국어 지원">
          <div className="flex flex-wrap items-center gap-2">
            <KoreanBadge level={tool.koreanSupport} />
          </div>
          <ul className="mt-3 space-y-2">
            {tool.koreanNotes.map((n) => (
              <li key={n} className="text-sm text-muted-foreground">
                · {n}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="이런 분께 추천">
          <div className="flex flex-wrap gap-1.5">
            {tool.targetUsers.map((u) => (
              <span key={u} className="rounded-full bg-brand-soft px-3 py-1.5 text-xs font-semibold text-brand">
                {u}
              </span>
            ))}
          </div>
        </Card>

        <Card title="한국에서 이렇게 활용하세요">
          <ul className="grid gap-2 sm:grid-cols-2">
            {tool.koreanUseCases.map((u) => (
              <li key={u} className="rounded-xl bg-surface px-4 py-3 text-sm">
                {u}
              </li>
            ))}
          </ul>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card title="장점">
            <ul className="space-y-2">
              {tool.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  {p}
                </li>
              ))}
            </ul>
          </Card>
          <Card title="단점">
            <ul className="space-y-2">
              {tool.cons.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm">
                  <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  {c}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {alternatives.length > 0 && (
          <div>
            <h2 className="pb-4 text-lg font-extrabold">비슷한 AI · 대체할 수 있는 AI</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {alternatives.map((t) => t && <ToolCard key={t.id} tool={t} compact />)}
            </div>
          </div>
        )}

        <p className="rounded-2xl bg-surface p-4 text-xs leading-relaxed text-muted-foreground">
          이 페이지의 정보는 공개된 자료를 바탕으로 정리한 참고 내용입니다. 요금제와 기능은 변경될 수 있으니
          결제 전 공식 사이트에서 확인해 주세요.
        </p>
      </div>
    </>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border bg-card p-5 shadow-card sm:p-6">
      <h2 className="pb-4 text-lg font-extrabold">{title}</h2>
      {children}
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[92px_minmax(0,1fr)] items-start gap-3 border-b border-border/60 pb-3">
      <dt className="text-xs font-bold text-muted-foreground">{label}</dt>
      <dd className="min-w-0 text-sm">{children}</dd>
    </div>
  );
}
