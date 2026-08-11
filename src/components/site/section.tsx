import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function SectionHeader({
  title,
  description,
  moreTo,
  moreLabel = "전체 보기",
}: {
  title: string;
  description?: string;
  moreTo?: "/tools" | "/categories" | "/popular" | "/new" | "/free-ai" | "/guides" | "/compare";
  moreLabel?: string;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 pb-5">
      <div className="min-w-0">
        <h2 className="text-xl font-extrabold sm:text-2xl">{title}</h2>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {moreTo && (
        <Link
          to={moreTo}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand hover:underline"
        >
          {moreLabel}
          <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-6xl px-4 py-10 sm:py-12 ${className}`}>{children}</section>;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {eyebrow && <p className="text-sm font-semibold text-brand">{eyebrow}</p>}
        <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">{title}</h1>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
