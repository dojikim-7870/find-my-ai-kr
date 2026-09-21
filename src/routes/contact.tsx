import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/site/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "문의하기 | AIFind.kr" },
      {
        name: "description",
        content: "AI 도구 등록 요청, 정보 수정 제안, 제휴 및 광고 문의를 남겨주세요.",
      },
      { property: "og:title", content: "문의하기 | AIFind.kr" },
      {
        property: "og:description",
        content: "AIFind.kr에 문의를 남겨주세요.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("success") === "true") {
        setSuccess(true);
      }
    }
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="문의하기"
        title="문의하기"
        description="AI 도구 등록 요청, 잘못된 정보 제보, 제휴 및 광고 문의를 남겨주세요. 입력하신 내용은 AIFind 운영자에게 이메일로 전송됩니다."
      />

      <div className="mx-auto max-w-2xl px-4 py-10">
        {success && (
          <div className="mb-6 rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-700">
            ✅ 문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.
          </div>
        )}

        <form
          action="https://formsubmit.co/pcdb7777@gmail.com"
          method="POST"
          className="space-y-4 rounded-2xl border bg-card p-6 shadow-card"
        >
          {/* FormSubmit 설정 */}
          <input
            type="hidden"
            name="_subject"
            value="AIFind.kr 문의가 도착했습니다."
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://aifind.kr/contact?success=true"
          />

          {/* 이름 */}
          <Field label="이름 (선택)">
            <input
              name="name"
              type="text"
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-brand"
              placeholder="이름을 입력하세요."
            />
          </Field>

          {/* 이메일 */}
          <Field label="이메일">
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-brand"
              placeholder="답변 받을 이메일 주소"
            />
          </Field>

          {/* 문의 유형 */}
          <Field label="문의 유형">
            <select
              name="type"
              className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
            >
              <option>AI 도구 등록 요청</option>
              <option>정보 수정 제보</option>
              <option>제휴·광고 문의</option>
              <option>기타</option>
            </select>
          </Field>

          {/* 문의 내용 */}
          <Field label="문의 내용">
            <textarea
              name="message"
              rows={6}
              required
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-brand"
              placeholder="문의 내용을 자세히 작성해 주세요."
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

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
