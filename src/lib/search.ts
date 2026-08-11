import { tools } from "@/data/tools";
import { allCategories } from "@/data/categories";
import type { AITool } from "@/data/types";

const STOPWORDS = [
  "ai",
  "에이아이",
  "인공지능",
  "만드는",
  "만들어주는",
  "만들기",
  "써주는",
  "해주는",
  "하는",
  "잘하는",
  "좋은",
  "추천",
  "도구",
  "툴",
  "사이트",
  "서비스",
  "프로그램",
  "어플",
  "앱",
  "찾기",
  "무엇",
  "뭐",
  "있나요",
  "알려줘",
];

/** 검색어 → 내부 키워드 확장 (한국어 검색 의도 대응) */
const SYNONYMS: Record<string, string[]> = {
  블로그: ["블로그", "네이버", "티스토리", "글쓰기", "포스팅"],
  네이버: ["네이버", "블로그", "스마트스토어"],
  유튜브: ["유튜브", "영상", "썸네일", "자막"],
  쇼츠: ["쇼츠", "릴스", "영상", "숏폼"],
  릴스: ["릴스", "쇼츠", "sns", "영상"],
  숏폼: ["쇼츠", "영상"],
  글쓰기: ["글쓰기", "작성", "문서", "카피"],
  글: ["글쓰기", "작성"],
  이미지: ["이미지", "그림", "사진", "썸네일", "디자인"],
  그림: ["이미지"],
  사진: ["이미지", "사진"],
  썸네일: ["썸네일", "이미지", "유튜브"],
  영상: ["영상", "비디오", "편집"],
  동영상: ["영상"],
  편집: ["편집", "영상"],
  음악: ["음악", "bgm", "배경음악"],
  음성: ["음성", "tts", "더빙", "나레이션"],
  더빙: ["더빙", "음성"],
  번역: ["번역", "영어", "외국어"],
  영어: ["영어", "번역", "학습"],
  공부: ["학습", "공부", "시험"],
  시험: ["시험", "학습"],
  코딩: ["코딩", "개발", "코드"],
  개발: ["개발", "코딩"],
  엑셀: ["엑셀", "데이터", "분석", "csv"],
  데이터: ["데이터", "분석", "엑셀"],
  분석: ["분석", "데이터"],
  pdf: ["pdf", "요약", "문서"],
  요약: ["요약", "문서", "pdf"],
  회의록: ["회의록", "회의", "정리"],
  회의: ["회의록"],
  이메일: ["이메일", "메일", "문서"],
  메일: ["이메일"],
  ppt: ["프레젠테이션", "발표"],
  발표: ["프레젠테이션", "발표"],
  프레젠테이션: ["프레젠테이션", "발표"],
  자동화: ["자동화", "업무"],
  업무: ["업무", "생산성", "문서"],
  직장인: ["직장인", "업무"],
  마케팅: ["마케팅", "광고", "카피"],
  광고: ["광고", "마케팅"],
  쇼핑몰: ["쇼핑몰", "스마트스토어", "상품", "상세페이지"],
  스마트스토어: ["스마트스토어", "쇼핑몰", "상품", "상세페이지"],
  상품: ["상품", "상세페이지", "쇼핑몰"],
  "상품 설명": ["상품", "상세페이지", "쇼핑몰"],
  상세페이지: ["상세페이지", "상품", "이미지"],
  자영업: ["자영업자", "소상공인", "쇼핑몰"],
  소상공인: ["소상공인", "자영업자"],
  무료: ["무료"],
  검색: ["검색", "리서치", "조사"],
  조사: ["조사", "리서치", "검색"],
  여행: ["여행", "일정"],
  일정: ["일정", "일정관리"],
  학생: ["학생", "학습"],
  카드뉴스: ["sns", "이미지", "디자인"],
  sns: ["sns", "인스타그램", "이미지"],
  인스타: ["sns", "인스타그램", "릴스"],
};

function normalize(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

export function tokenize(query: string): string[] {
  const q = normalize(query);
  const raw = q.split(/[\s,·/]+/).filter(Boolean);
  const tokens = new Set<string>();

  if (q) tokens.add(q);
  for (const word of raw) {
    if (STOPWORDS.includes(word)) continue;
    if (word.length < 1) continue;
    tokens.add(word);
    const expanded = SYNONYMS[word];
    if (expanded) expanded.forEach((t) => tokens.add(t.toLowerCase()));
  }
  // 구문 단위 동의어 (예: "상품 설명")
  for (const [key, values] of Object.entries(SYNONYMS)) {
    if (key.includes(" ") && q.includes(key)) {
      values.forEach((t) => tokens.add(t.toLowerCase()));
    }
  }
  return [...tokens];
}

function toolHaystack(tool: AITool) {
  const categoryNames = tool.categories
    .map((c) => allCategories.find((cat) => cat.slug === c)?.name ?? c)
    .join(" ");
  return {
    name: normalize(tool.name + " " + tool.slug),
    strong: normalize([categoryNames, tool.tags.join(" "), tool.useCases.join(" ")].join(" ")),
    body: normalize(
      [
        tool.description,
        tool.koreanDescription,
        tool.features.join(" "),
        tool.koreanUseCases.join(" "),
        tool.targetUsers.join(" "),
        tool.pricing,
        tool.koreanSupport,
        tool.difficulty,
        tool.freePlan ? "무료 무료플랜" : "",
        tool.freeTrial ? "무료체험" : "",
      ].join(" "),
    ),
  };
}

export function scoreTool(tool: AITool, tokens: string[]) {
  if (tokens.length === 0) return 0;
  const hay = toolHaystack(tool);
  let score = 0;
  for (const token of tokens) {
    if (hay.name.includes(token)) score += 12;
    if (hay.strong.includes(token)) score += 6;
    if (hay.body.includes(token)) score += 2;
  }
  return score;
}

export interface Filters {
  useCase?: string;
  aiType?: string;
  pricing?: string;
  korean?: string;
  difficulty?: string;
}

const AI_TYPE_MAP: Record<string, string[]> = {
  writing: ["writing", "blog", "document", "email"],
  image: ["image", "photo"],
  video: ["video", "shorts", "youtube"],
  music: ["music"],
  voice: ["voice"],
  translate: ["translate"],
  coding: ["coding", "code-review", "app", "website"],
  search: ["research"],
  productivity: ["document", "presentation", "meeting", "pdf", "excel", "personal", "schedule"],
  automation: ["automation"],
};

const USE_CASE_MAP: Record<string, string[]> = {
  work: ["work"],
  dev: ["dev"],
  education: ["education"],
  daily: ["daily"],
  blog: ["blog"],
  youtube: ["youtube"],
  shorts: ["shorts"],
  sns: ["sns"],
  marketing: ["marketing"],
  ecommerce: ["ecommerce"],
  smartstore: ["smartstore"],
};

export function applyFilters(list: AITool[], filters: Filters) {
  return list.filter((tool) => {
    if (filters.useCase && filters.useCase !== "all") {
      const targets = USE_CASE_MAP[filters.useCase] ?? [filters.useCase];
      if (!tool.useCases.some((u) => targets.includes(u))) return false;
    }
    if (filters.aiType && filters.aiType !== "all") {
      const targets = AI_TYPE_MAP[filters.aiType] ?? [filters.aiType];
      if (!tool.categories.some((c) => targets.includes(c))) return false;
    }
    if (filters.pricing && filters.pricing !== "all") {
      if (filters.pricing === "무료" && !(tool.pricing === "무료" || tool.freePlan)) return false;
      if (filters.pricing === "무료 플랜" && !tool.freePlan) return false;
      if (filters.pricing === "무료 체험" && !tool.freeTrial) return false;
      if (filters.pricing === "유료" && tool.pricing !== "유료") return false;
      if (filters.pricing === "크레딧" && tool.pricing !== "크레딧") return false;
    }
    if (filters.korean && filters.korean !== "all") {
      if (filters.korean === "지원" && tool.koreanSupport !== "좋음") return false;
      if (filters.korean === "일부" && !["보통", "제한적"].includes(tool.koreanSupport)) return false;
      if (filters.korean === "미지원" && tool.koreanSupport !== "미지원") return false;
    }
    if (filters.difficulty && filters.difficulty !== "all") {
      if (tool.difficulty !== filters.difficulty) return false;
    }
    return true;
  });
}

export type SortKey = "popularity" | "rating" | "new" | "name";

export function searchTools(query: string, filters: Filters = {}, sort: SortKey = "popularity") {
  const tokens = tokenize(query);
  let list = applyFilters(tools, filters);

  if (tokens.length > 0) {
    list = list
      .map((tool) => ({ tool, score: scoreTool(tool, tokens) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score || b.tool.popularity - a.tool.popularity)
      .map((r) => r.tool);
    if (sort !== "popularity") list = sortTools(list, sort);
    return list;
  }

  return sortTools(list, sort);
}

export function sortTools(list: AITool[], sort: SortKey) {
  const copy = [...list];
  switch (sort) {
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating);
    case "new":
      return copy.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
    case "name":
      return copy.sort((a, b) => a.name.localeCompare(b.name, "ko"));
    default:
      return copy.sort((a, b) => b.popularity - a.popularity);
  }
}

export function toolsByCategory(slug: string) {
  return sortTools(
    tools.filter((t) => t.categories.includes(slug)),
    "popularity",
  );
}
