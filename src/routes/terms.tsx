import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "이용약관 | AIAtlas.kr" },
      { name: "description", content: "AIAtlas.kr 서비스 이용에 관한 약관입니다." },
      { property: "og:title", content: "이용약관 | AIAtlas.kr" },
      { property: "og:description", content: "AIAtlas.kr 이용약관." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="정책" title="이용약관" description="최종 업데이트: 2026년 8월" />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 text-sm leading-relaxed text-foreground/85">
        <section>
          <h2 className="text-base font-extrabold text-foreground">1. 서비스 목적</h2>
          <p className="mt-2">
            AIAtlas.kr은 AI 도구에 관한 정보를 정리해 제공하는 정보 서비스입니다. 특정 서비스의 구매나 이용을
            권유하지 않습니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-extrabold text-foreground">2. 정보의 정확성</h2>
          <p className="mt-2">
            게재된 요금제, 기능, 한국어 지원 수준은 작성 시점의 공개 자료를 기준으로 하며 변경될 수 있습니다.
            실제 이용 전 각 서비스 공식 사이트에서 최신 정보를 확인해야 합니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-extrabold text-foreground">3. 책임의 제한</h2>
          <p className="mt-2">
            이용자가 외부 AI 서비스를 이용하며 발생한 결과에 대해 AIAtlas.kr은 책임을 지지 않습니다.
          </p>
        </section>
        <section>
          <h2 className="text-base font-extrabold text-foreground">4. 저작권</h2>
          <p className="mt-2">
            사이트에 게재된 설명과 편집물의 권리는 AIAtlas.kr에 있으며, 각 AI 서비스의 명칭과 상표는 해당
            권리자에게 있습니다.
          </p>
        </section>
      </div>
    </>
  ),
});
