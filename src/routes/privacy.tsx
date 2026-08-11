import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "개인정보처리방침 | AIAtlas.kr" },
      { name: "description", content: "AIAtlas.kr의 개인정보 수집·이용에 관한 안내입니다." },
      { property: "og:title", content: "개인정보처리방침 | AIAtlas.kr" },
      { property: "og:description", content: "AIAtlas.kr 개인정보처리방침." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="정책" title="개인정보처리방침" description="최종 업데이트: 2026년 8월" />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 text-sm leading-relaxed text-foreground/85">
        <section>
          <h2 className="text-base font-extrabold text-foreground">1. 수집하는 정보</h2>
          <p className="mt-2">
            AIAtlas.kr은 회원가입 없이 이용할 수 있으며, 별도의 개인정보를 수집하지 않습니다. 소식 받기나 문의
            화면에 입력한 이메일 주소는 현재 저장되지 않습니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-extrabold text-foreground">2. 브라우저 저장소</h2>
          <p className="mt-2">
            ‘찜한 AI’ 기능은 이용자의 브라우저 로컬 저장소(localStorage)에만 저장되며 서버로 전송되지 않습니다.
            브라우저 데이터를 삭제하면 목록도 함께 사라집니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-extrabold text-foreground">3. 외부 링크</h2>
          <p className="mt-2">
            각 AI 도구의 공식 사이트로 이동한 이후의 개인정보 처리는 해당 서비스의 정책을 따릅니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-extrabold text-foreground">4. 문의</h2>
          <p className="mt-2">개인정보 관련 문의는 사이트 내 문의하기 페이지를 통해 접수해 주세요.</p>
        </section>
      </div>
    </>
  ),
});
