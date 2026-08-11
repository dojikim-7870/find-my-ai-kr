import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { AITool, KoreanSupport } from "@/data/types";

const koreanStyles: Record<KoreanSupport, string> = {
  좋음: "bg-success-soft text-success border-transparent",
  보통: "bg-brand-soft text-brand border-transparent",
  제한적: "bg-muted text-muted-foreground border-transparent",
  미지원: "bg-muted text-muted-foreground border-transparent",
};

export function KoreanBadge({ level, className }: { level: KoreanSupport; className?: string }) {
  return (
    <Badge variant="outline" className={cn("font-semibold", koreanStyles[level], className)}>
      한국어 {level}
    </Badge>
  );
}

export function PricingBadge({ tool, className }: { tool: AITool; className?: string }) {
  const isFree = tool.pricing === "무료" || tool.freePlan;
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-semibold",
        isFree
          ? "border-transparent bg-success-soft text-success"
          : "border-transparent bg-secondary text-secondary-foreground",
        className,
      )}
    >
      {tool.pricing}
    </Badge>
  );
}

export function DifficultyBadge({ level }: { level: AITool["difficulty"] }) {
  return (
    <Badge variant="outline" className="border-border bg-background font-medium text-muted-foreground">
      {level}
    </Badge>
  );
}
