import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "서비스 소개 | AIAtlas.kr" },
      { name: "description", content: "AIAtlas.kr은 한국 사용자를 위한 AI 도구 검색·비교·활용 플랫폼입니다." },
      { property: "og:title", content: "서비스 소개 | AIAtlas.kr" },
      { property: "og:description", content: "찾기 → 비교하기 → 선택하기 → 활용하기." },
    ],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="서비스 소개"
        title="AIAtlas.kr 소개"
        description="한국인을 위한 AI 도구 검색·비교·활용 플랫폼입니다."
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 text-sm leading-relaxed text-foreground/85">
        <section>
          <h2 className="text-lg font-extrabold text-foreground">왜 만들었나요?</h2>
          <p className="mt-3">
            AI 서비스는 많지만, 정작 “내 일에는 어떤 걸 써야 하지?”라는 질문에 답해주는 곳은 드물었습니다.
            AIAtlas.kr은 AI 도구를 이름이 아니라 하려는 일 기준으로 찾을 수 있게 정리합니다.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-extrabold text-foreground">무엇이 다른가요?</h2>
          <ul className="mt-3 space-y-2">
            <li>· 한국 사용자 관점의 설명과 활용 사례</li>
            <li>· 무료 사용 가능 여부를 명확히 표시</li>
            <li>· 한국어 지원 수준을 항목으로 제공</li>
            <li>· ‘무엇을 하려고 하세요?’ 기반의 추천</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-extrabold text-foreground">정보의 기준</h2>
          <p className="mt-3">
            AIAtlas.kr은 사용자 수, 점유율, 순위, 후기 등 확인되지 않은 수치를 만들어 내지 않습니다. 실제 데이터가
            쌓이기 전까지는 ‘주목받는 AI’, ‘많이 찾는 도구’처럼 중립적인 표현을 사용합니다.
          </p>
        </section>
        <p>
          문의는{" "}
          <Link to="/contact" className="font-semibold text-brand hover:underline">
            문의하기
          </Link>{" "}
          페이지를 이용해 주세요.
        </p>
      </div>
    </>
  ),
});
