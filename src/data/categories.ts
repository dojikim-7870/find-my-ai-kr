export interface CategoryGroup {
  label: string;
  items: Category[];
}

export interface Category {
  slug: string;
  name: string;
  emoji: string;
  description: string;
}

export const categoryGroups: CategoryGroup[] = [
  {
    label: "콘텐츠 제작",
    items: [
      { slug: "blog", name: "블로그", emoji: "📝", description: "네이버·티스토리 블로그 글 초안과 구성을 도와주는 AI 도구" },
      { slug: "youtube", name: "유튜브", emoji: "🎬", description: "유튜브 기획·대본·편집·썸네일에 활용할 수 있는 AI 도구" },
      { slug: "shorts", name: "쇼츠", emoji: "📱", description: "쇼츠·릴스 같은 세로형 짧은 영상을 빠르게 만드는 AI 도구" },
      { slug: "sns", name: "SNS 콘텐츠", emoji: "💬", description: "인스타그램·스레드 등 SNS 콘텐츠 제작에 쓰는 AI 도구" },
      { slug: "writing", name: "글쓰기", emoji: "✍️", description: "글 초안, 교정, 요약까지 도와주는 글쓰기 AI" },
      { slug: "image", name: "이미지", emoji: "🖼️", description: "이미지 생성과 편집에 활용하는 AI 도구" },
      { slug: "video", name: "영상", emoji: "🎥", description: "영상 생성과 편집을 도와주는 AI 도구" },
      { slug: "music", name: "음악", emoji: "🎵", description: "배경음악·효과음을 만드는 AI 도구" },
      { slug: "voice", name: "음성", emoji: "🎙️", description: "음성 합성(TTS)과 더빙에 활용하는 AI 도구" },
    ],
  },
  {
    label: "업무·생산성",
    items: [
      { slug: "document", name: "문서 작성", emoji: "📄", description: "보고서·기획서 등 업무 문서 작성을 돕는 AI" },
      { slug: "pdf", name: "PDF", emoji: "📑", description: "PDF 요약과 질의응답에 쓰는 AI 도구" },
      { slug: "excel", name: "엑셀", emoji: "📊", description: "엑셀 함수·데이터 정리·분석을 도와주는 AI" },
      { slug: "presentation", name: "프레젠테이션", emoji: "📽️", description: "발표 자료를 빠르게 만드는 AI 도구" },
      { slug: "meeting", name: "회의록", emoji: "🗒️", description: "회의 녹음을 정리하고 요약하는 AI 도구" },
      { slug: "email", name: "이메일", emoji: "📧", description: "업무 메일 작성과 톤 조정을 돕는 AI" },
      { slug: "translate", name: "번역", emoji: "🌐", description: "한국어–외국어 번역 품질이 좋은 AI 도구" },
      { slug: "automation", name: "업무 자동화", emoji: "⚙️", description: "반복 업무를 자동으로 처리하는 AI 도구" },
    ],
  },
  {
    label: "비즈니스·마케팅",
    items: [
      { slug: "marketing", name: "마케팅", emoji: "📣", description: "마케팅 기획과 콘텐츠 제작에 쓰는 AI" },
      { slug: "ads", name: "광고", emoji: "🎯", description: "광고 문구와 소재 제작을 돕는 AI 도구" },
      { slug: "crm", name: "고객관리", emoji: "🤝", description: "고객 응대와 문의 정리에 활용하는 AI" },
      { slug: "research", name: "시장조사", emoji: "🔎", description: "자료 조사와 출처 확인에 강한 AI 도구" },
      { slug: "product-description", name: "상품 설명", emoji: "🏷️", description: "상품 상세 설명과 카피를 만드는 AI" },
      { slug: "ecommerce", name: "쇼핑몰", emoji: "🛍️", description: "온라인 쇼핑몰 운영에 도움이 되는 AI 도구" },
      { slug: "smartstore", name: "스마트스토어", emoji: "🏪", description: "스마트스토어 상세페이지·이미지 제작에 쓰는 AI" },
      { slug: "online-business", name: "온라인 사업", emoji: "💼", description: "1인 사업·부업 운영에 활용하는 AI 도구" },
    ],
  },
  {
    label: "개발",
    items: [
      { slug: "coding", name: "코딩", emoji: "💻", description: "코드 작성과 디버깅을 도와주는 AI" },
      { slug: "website", name: "웹사이트 제작", emoji: "🌍", description: "웹사이트를 빠르게 만드는 AI 도구" },
      { slug: "app", name: "앱 개발", emoji: "📲", description: "앱 개발 생산성을 높여주는 AI 도구" },
      { slug: "code-review", name: "코드 리뷰", emoji: "🔍", description: "코드 품질 점검과 리뷰를 돕는 AI" },
      { slug: "data", name: "데이터 분석", emoji: "📈", description: "데이터 정리·분석·시각화에 쓰는 AI" },
    ],
  },
  {
    label: "교육·학습",
    items: [
      { slug: "english", name: "영어", emoji: "🔤", description: "영어 학습과 회화 연습에 활용하는 AI" },
      { slug: "language", name: "외국어", emoji: "🗣️", description: "외국어 학습 전반에 도움이 되는 AI 도구" },
      { slug: "exam", name: "시험 공부", emoji: "📚", description: "시험 대비 요약·문제 풀이에 쓰는 AI" },
      { slug: "assignment", name: "과제", emoji: "🎓", description: "과제 자료 정리와 구성에 도움이 되는 AI" },
      { slug: "study", name: "학습 보조", emoji: "🧠", description: "학습 자료를 정리하고 이해를 돕는 AI 도구" },
    ],
  },
  {
    label: "일상생활",
    items: [
      { slug: "travel", name: "여행", emoji: "✈️", description: "여행 일정과 정보 정리에 활용하는 AI" },
      { slug: "cooking", name: "요리", emoji: "🍳", description: "레시피와 식단 구성을 도와주는 AI" },
      { slug: "photo", name: "사진", emoji: "📷", description: "사진 보정과 편집을 도와주는 AI 도구" },
      { slug: "schedule", name: "일정관리", emoji: "🗓️", description: "일정과 할 일 정리를 돕는 AI 도구" },
      { slug: "personal", name: "개인 생산성", emoji: "⚡", description: "개인 업무와 기록 관리를 돕는 AI 도구" },
    ],
  },
];

export const allCategories: Category[] = categoryGroups.flatMap((g) => g.items);

export function getCategory(slug: string) {
  return allCategories.find((c) => c.slug === slug);
}

export function categoryName(slug: string) {
  return getCategory(slug)?.name ?? slug;
}

/** 활용 분야 필터 (검색 필터용) */
export const useCaseFilters = [
  { slug: "blog", name: "블로그" },
  { slug: "youtube", name: "유튜브" },
  { slug: "shorts", name: "쇼츠" },
  { slug: "sns", name: "SNS" },
  { slug: "work", name: "업무" },
  { slug: "marketing", name: "마케팅" },
  { slug: "ecommerce", name: "쇼핑몰" },
  { slug: "smartstore", name: "스마트스토어" },
  { slug: "education", name: "교육" },
  { slug: "dev", name: "개발" },
  { slug: "daily", name: "일상" },
];

/** AI 유형 필터 */
export const aiTypeFilters = [
  { slug: "writing", name: "글쓰기" },
  { slug: "image", name: "이미지" },
  { slug: "video", name: "영상" },
  { slug: "music", name: "음악" },
  { slug: "voice", name: "음성" },
  { slug: "translate", name: "번역" },
  { slug: "coding", name: "코딩" },
  { slug: "search", name: "검색" },
  { slug: "productivity", name: "생산성" },
  { slug: "automation", name: "자동화" },
];

export const popularKeywords = [
  "ChatGPT",
  "무료 AI",
  "블로그",
  "이미지 생성",
  "영상 생성",
  "AI 글쓰기",
  "AI 번역",
  "AI 코딩",
];

export const searchExamples = [
  "블로그 글쓰기 AI",
  "무료 이미지 생성 AI",
  "유튜브 영상 제작 AI",
  "쇼츠 만드는 AI",
  "PDF 요약 AI",
  "엑셀 분석 AI",
  "코딩 AI",
  "번역 AI",
];

export interface Intent {
  id: string;
  label: string;
  emoji: string;
  query: string;
}

export const intents: Intent[] = [
  { id: "blog", label: "블로그 글을 쓰고 싶어요", emoji: "📝", query: "블로그 글쓰기" },
  { id: "youtube", label: "유튜브 영상을 만들고 싶어요", emoji: "🎬", query: "유튜브 영상 제작" },
  { id: "shorts", label: "쇼츠를 만들고 싶어요", emoji: "📱", query: "쇼츠" },
  { id: "image", label: "이미지를 만들고 싶어요", emoji: "🖼️", query: "이미지 생성" },
  { id: "automation", label: "업무를 자동화하고 싶어요", emoji: "⚙️", query: "업무 자동화" },
  { id: "pdf", label: "PDF를 요약하고 싶어요", emoji: "📑", query: "PDF 요약" },
  { id: "english", label: "영어를 공부하고 싶어요", emoji: "🔤", query: "영어 공부" },
  { id: "product", label: "상품 설명을 만들고 싶어요", emoji: "🏷️", query: "상품 설명" },
];
