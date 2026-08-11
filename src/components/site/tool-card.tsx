import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { KoreanBadge, PricingBadge, DifficultyBadge } from "./badges";
import { categoryName } from "@/data/categories";
import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";
import type { AITool } from "@/data/types";

export function ToolCard({ tool, compact = false }: { tool: AITool; compact?: boolean }) {
  const { isFavorite, toggle, hydrated } = useFavorites();
  const favorited = hydrated && isFavorite(tool.slug);

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/tools/$slug" params={{ slug: tool.slug }} className="min-w-0">
              <h3 className="truncate text-base font-bold group-hover:text-brand">{tool.name}</h3>
            </Link>
            {tool.isNew && (
              <span className="rounded-md bg-brand-soft px-1.5 py-0.5 text-[11px] font-bold text-brand">NEW</span>
            )}
          </div>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
        </div>
        <button
          type="button"
          onClick={() => toggle(tool.slug)}
          aria-label={favorited ? "찜 해제" : "찜하기"}
          className="grid size-9 shrink-0 place-items-center rounded-full border bg-background transition-colors hover:bg-accent"
        >
          <Heart className={cn("size-4", favorited ? "fill-brand text-brand" : "text-muted-foreground")} />
        </button>
      </div>

      {!compact && (
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/80">{tool.koreanDescription}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        <PricingBadge tool={tool} />
        <KoreanBadge level={tool.koreanSupport} />
        <DifficultyBadge level={tool.difficulty} />
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {tool.categories.slice(0, 3).map((c) => (
          <Link
            key={c}
            to="/category/$slug"
            params={{ slug: c }}
            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent"
          >
            {categoryName(c)}
          </Link>
        ))}
      </div>

      <Link
        to="/tools/$slug"
        params={{ slug: tool.slug }}
        className="absolute inset-0 rounded-2xl"
        aria-label={`${tool.name} 자세히 보기`}
        style={{ zIndex: 0 }}
      />
      <div className="pointer-events-none absolute inset-0" />
    </article>
  );
}

export function ToolGrid({ items }: { items: AITool[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
