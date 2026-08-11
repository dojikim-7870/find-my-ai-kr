import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";
import { ToolCard } from "@/components/site/tool-card";
import { getGuide, type Guide } from "@/data/guides";
import { tools } from "@/data/tools";
import type { AITool } from "@/data/types";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    const related = guide.relatedTools
      .map((s) => tools.find((t) => t.slug === s))
      .filter((t): t is AITool => Boolean(t));
    return { guide, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "가이드를 찾을 수 없습니다 | AIAtlas.kr" }, { name: "robots", content: "noindex" }] };
    const title = `${loaderData.guide.title} | AIAtlas.kr`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.guide.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.guide.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: GuideDetail,
});

function GuideDetail() {
  const { guide, related } = Route.useLoaderData() as { guide: Guide; related: AITool[] };

  return (
    <>
      <PageHeader eyebrow={`활용 가이드 · ${guide.category}`} title={guide.title} description={guide.summary} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        {guide.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="text-lg font-extrabold">{section.heading}</h2>
            {section.body.map((p) => (
              <p key={p} className="mt-3 text-sm leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}
          </section>
        ))}

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="pb-4 text-lg font-extrabold">이 가이드에 쓰인 AI</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((t) => (
                <ToolCard key={t.id} tool={t} compact />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
