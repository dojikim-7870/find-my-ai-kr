import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { searchExamples } from "@/data/categories";
import { cn } from "@/lib/utils";

export function SearchBox({
  defaultValue = "",
  size = "lg",
  className,
}: {
  defaultValue?: string;
  size?: "lg" | "md";
  className?: string;
}) {
  const navigate = useNavigate();
  const [value, setValue] = useState(defaultValue);
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setExampleIndex((i) => (i + 1) % searchExamples.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    navigate({ to: "/tools", search: { q: value.trim() } });
  }

  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)}>
      <div
        className={cn(
          "flex items-center gap-2 rounded-2xl border border-border bg-card shadow-elevated transition-colors focus-within:border-brand",
          size === "lg" ? "p-2 pl-4" : "p-1.5 pl-3",
        )}
      >
        <Search className={cn("shrink-0 text-muted-foreground", size === "lg" ? "size-5" : "size-4")} />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="AI 도구 검색"
          placeholder={
            size === "lg" ? `어떤 AI를 찾고 계신가요?  예) ${searchExamples[exampleIndex]}` : "AI 검색"
          }
          className={cn(
            "min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground",
            size === "lg" ? "py-3 text-base" : "py-2 text-sm",
          )}
        />
        <button
          type="submit"
          className={cn(
            "shrink-0 rounded-xl bg-brand font-semibold text-brand-foreground transition-opacity hover:opacity-90",
            size === "lg" ? "px-5 py-3 text-sm" : "px-3 py-2 text-sm",
          )}
        >
          검색
        </button>
      </div>
    </form>
  );
}
