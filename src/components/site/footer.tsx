import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "AI 찾기",
    links: [
      { to: "/tools", label: "AI 도구 찾기" },
      { to: "/categories", label: "카테고리" },
      { to: "/free-ai", label: "무료 AI" },
      { to: "/compare", label: "AI 비교" },
    ],
  },
  {
    title: "콘텐츠",
    links: [
      { to: "/guides", label: "활용 가이드" },
      { to: "/popular", label: "인기 AI" },
      { to: "/new", label: "신규 AI" },
      { to: "/favorites", label: "찜한 AI" },
    ],
  },
  {
    title: "AIAtlas",
    links: [
      { to: "/about", label: "서비스 소개" },
      { to: "/contact", label: "문의하기" },
      { to: "/privacy", label: "개인정보처리방침" },
      { to: "/terms", label: "이용약관" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-brand text-sm font-bold text-brand-foreground">
                A
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                AIAtlas<span className="text-brand">.kr</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              한국인을 위한 AI 도구 검색·비교·활용 플랫폼. 나에게 맞는 AI를 쉽게 찾아보세요.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            AIAtlas.kr에 정리된 정보는 각 서비스의 공개된 내용을 바탕으로 작성한 참고 자료이며, 요금제·기능·한국어
            지원 수준은 변경될 수 있습니다. 최신 정보는 각 서비스 공식 사이트에서 확인해 주세요.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} AIAtlas.kr</p>
        </div>
      </div>
    </footer>
  );
}
