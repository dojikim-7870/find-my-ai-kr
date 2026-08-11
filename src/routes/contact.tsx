import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/site/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "문의하기 | AIAtlas.kr" },
      { name: "description", content: "AI 도구 등록 요청, 정보 수정 제안, 제휴 문의를 남겨주세요." },
      { property: "og:title", content: "문의하기 | AIAtlas.kr" },
      { property: "og:description", content: "AIAtlas.kr에 문의를 남겨주세요." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", type: "AI 도구 등록 요청", message: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.email.includes("@") || form.message.trim().length < 5) {
      toast.error("이메일과 문의 내용을 확인해 주세요.");
      return;
    }
    setForm({ name: "", email: "", type: "AI 도구 등록 요청", message: "" });
    toast.success("문의가 접수되었습니다. 접수 처리 기능은 준비 중입니다.");
  }

  return (
    <>
      <PageHeader
        eyebrow="문의하기"
        title="문의하기"
        description="AI 도구 등록 요청, 잘못된 정보 제보, 제휴 제안을 남겨주세요. 접수 기능은 준비 중이며 현재는 화면만 제공됩니다."
      />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border bg-card p-6 shadow-card">
          <Field label="이름 (선택)">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-brand"
            />
          </Field>
          <Field label="이메일">
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-brand"
            />
          </Field>
          <Field label="문의 유형">
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
            >
              <option>AI 도구 등록 요청</option>
              <option>정보 수정 제보</option>
              <option>제휴·광고 문의</option>
              <option>기타</option>
            </select>
          </Field>
          <Field label="내용">
            <textarea
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-brand"
            />
          </Field>
          <button
            type="submit"
            className="w-full rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            문의 보내기
          </button>
        </form>
      </div>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
