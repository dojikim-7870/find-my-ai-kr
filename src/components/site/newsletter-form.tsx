import { Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("이메일 주소를 확인해 주세요.");
      return;
    }
    setEmail("");
    toast.success("신청이 접수되었습니다. 메일 발송 기능은 준비 중입니다.");
  }

  return (
    <div className="rounded-3xl border bg-brand-soft p-6 sm:p-10">
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
            <Mail className="size-5 shrink-0 text-brand" />새 AI 도구 소식 받기
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            새로 추가된 AI 도구와 활용 가이드를 정리해서 보내드립니다. 지금은 신청만 받고 있으며, 메일 발송
            기능은 준비 중입니다.
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소"
            aria-label="이메일 주소"
            className="min-w-0 flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            신청하기
          </button>
        </form>
      </div>
    </div>
  );
}
