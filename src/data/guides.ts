export interface Guide {
  slug: string;
  title: string;
  summary: string;
  emoji: string;
  category: string;
  readingTime: string;
  dateAdded: string;
  relatedTools: string[];
  sections: { heading: string; body: string[] }[];
}

export const guides: Guide[] = [
  {
    slug: "chatgpt-start",
    title: "ChatGPT 처음 사용하는 방법",
    summary: "가입부터 첫 질문까지, AI를 처음 써보는 분을 위한 기본 사용법을 정리했습니다.",
    emoji: "🚀",
    category: "입문",
    readingTime: "5분",
    dateAdded: "2026-02-01",
    relatedTools: ["chatgpt", "wrtn", "clova-x"],
    sections: [
      {
        heading: "1. 무료로 시작하기",
        body: [
          "ChatGPT는 무료 플랜으로도 대부분의 글쓰기 작업을 시도해볼 수 있습니다. 구글 계정이나 이메일로 가입한 뒤 바로 대화창에서 한국어로 질문하면 됩니다.",
          "처음에는 완벽한 질문을 만들려고 애쓰지 말고, 평소 사람에게 부탁하듯 편하게 써보는 것이 좋습니다.",
        ],
      },
      {
        heading: "2. 좋은 결과를 얻는 질문 방식",
        body: [
          "① 상황을 알려줍니다. 예: ‘나는 카페를 운영하는 자영업자야.’",
          "② 원하는 결과물을 지정합니다. 예: ‘인스타그램에 올릴 홍보 문구 3개를 써줘.’",
          "③ 조건을 붙입니다. 예: ‘20~30대 대상, 이모지 없이, 두 문장 이내로.’",
        ],
      },
      {
        heading: "3. 결과를 그대로 쓰지 않기",
        body: [
          "AI가 만든 문장에는 사실과 다른 내용이 섞일 수 있습니다. 숫자, 가격, 법률·의료 정보처럼 정확도가 중요한 내용은 반드시 직접 확인한 뒤 사용하세요.",
        ],
      },
    ],
  },
  {
    slug: "ai-naver-blog",
    title: "AI로 네이버 블로그 글 작성하기",
    summary: "주제 선정부터 초안, 소제목 구성, 이미지까지 블로그 글 한 편을 만드는 흐름입니다.",
    emoji: "📝",
    category: "블로그",
    readingTime: "7분",
    dateAdded: "2026-02-03",
    relatedTools: ["chatgpt", "claude", "canva", "wrtn"],
    sections: [
      {
        heading: "1. 주제와 독자를 먼저 정합니다",
        body: [
          "‘누가 어떤 상황에서 검색할 글인가’를 한 문장으로 적어두면 AI 결과의 방향이 훨씬 좋아집니다.",
        ],
      },
      {
        heading: "2. 목차부터 만들기",
        body: [
          "글 전체를 한 번에 쓰게 하기보다, 먼저 소제목 5~7개를 뽑고 마음에 드는 구성으로 고친 뒤 문단별로 작성하게 하면 완성도가 올라갑니다.",
        ],
      },
      {
        heading: "3. 내 경험을 섞기",
        body: [
          "AI 초안에 직접 겪은 사례, 사진, 실제 가격이나 후기 같은 정보를 더해야 검색에서도 사람에게도 잘 읽히는 글이 됩니다.",
        ],
      },
      {
        heading: "4. 이미지 준비",
        body: ["Canva나 이미지 생성 AI로 대표 이미지와 본문 삽입 이미지를 만들면 글 완성도가 높아집니다."],
      },
    ],
  },
  {
    slug: "ai-youtube-shorts",
    title: "AI로 유튜브 쇼츠 만들기",
    summary: "대본, 음성, 편집, 자막까지 쇼츠 한 편을 AI로 제작하는 순서입니다.",
    emoji: "📱",
    category: "영상",
    readingTime: "6분",
    dateAdded: "2026-02-05",
    relatedTools: ["chatgpt", "capcut", "vrew", "elevenlabs", "suno"],
    sections: [
      {
        heading: "1. 대본 만들기",
        body: ["쇼츠는 30~60초 분량입니다. ‘첫 3초에 궁금증, 이후 핵심 3가지, 마지막 한 줄 정리’ 구조를 요청해 보세요."],
      },
      {
        heading: "2. 음성 또는 자막",
        body: ["직접 녹음하거나 AI 음성으로 나레이션을 만들고, Vrew·CapCut의 자동 자막으로 가독성을 높입니다."],
      },
      {
        heading: "3. 편집과 배경음악",
        body: ["템플릿 편집으로 화면 전환을 정리하고, 저작권 걱정이 적은 AI 배경음악을 사용할 수 있습니다."],
      },
    ],
  },
  {
    slug: "free-ai-image",
    title: "무료 AI 이미지 생성 방법",
    summary: "비용 없이 이미지 생성을 시작하는 방법과 상업적 사용 시 확인할 점을 정리했습니다.",
    emoji: "🖼️",
    category: "이미지",
    readingTime: "5분",
    dateAdded: "2026-02-07",
    relatedTools: ["canva", "leonardo", "chatgpt"],
    sections: [
      {
        heading: "1. 무료로 쓸 수 있는 방식",
        body: ["완전 무료 서비스, 무료 플랜, 매일 지급되는 무료 크레딧 등 세 가지가 있습니다. 용도에 따라 선택하세요."],
      },
      {
        heading: "2. 프롬프트 작성 요령",
        body: ["‘무엇을 / 어떤 스타일로 / 어떤 배경에서 / 어떤 색감으로’ 네 가지를 적으면 결과가 안정적입니다."],
      },
      {
        heading: "3. 상업적 사용 주의",
        body: ["쇼핑몰 상세페이지나 광고에 쓸 이미지라면 각 서비스의 이용약관에서 상업적 사용 조건을 반드시 확인하세요."],
      },
    ],
  },
  {
    slug: "ai-product-description",
    title: "AI로 상품 설명 작성하기",
    summary: "스마트스토어·쇼핑몰 상세페이지 문구를 AI로 빠르게 만드는 방법입니다.",
    emoji: "🏷️",
    category: "쇼핑몰",
    readingTime: "6분",
    dateAdded: "2026-02-09",
    relatedTools: ["chatgpt", "canva", "leonardo", "julius"],
    sections: [
      {
        heading: "1. 상품 정보를 정리해서 입력",
        body: ["소재, 크기, 사용 상황, 경쟁 상품과의 차이, 주요 구매층을 먼저 정리해 한 번에 알려주면 결과가 달라집니다."],
      },
      {
        heading: "2. 문구를 여러 버전으로 받기",
        body: ["‘실용 강조 / 감성 강조 / 가격 강조’처럼 방향을 나눠 3개 버전을 받아 비교해 보세요."],
      },
      {
        heading: "3. 표현 검토",
        body: ["과장 광고로 해석될 수 있는 표현은 반드시 직접 걸러내야 합니다. 효능·최상급 표현은 특히 주의하세요."],
      },
    ],
  },
  {
    slug: "ai-pdf-summary",
    title: "AI로 PDF 요약하기",
    summary: "긴 보고서와 논문을 빠르게 파악하는 실무형 요약 방법입니다.",
    emoji: "📑",
    category: "업무",
    readingTime: "4분",
    dateAdded: "2026-02-11",
    relatedTools: ["notebooklm", "claude", "chatgpt"],
    sections: [
      {
        heading: "1. 자료 기반 도구를 쓰기",
        body: ["업로드한 문서 안에서만 답하는 도구를 쓰면 엉뚱한 내용이 섞일 가능성이 줄어듭니다."],
      },
      {
        heading: "2. 요약 요청 방식",
        body: ["‘핵심 5줄 → 근거 → 내가 확인해야 할 항목’ 순서로 요청하면 실무에 바로 쓸 수 있습니다."],
      },
    ],
  },
  {
    slug: "ai-work-automation",
    title: "AI로 업무 자동화하기",
    summary: "반복 업무를 줄이는 자동화 아이디어와 시작 순서를 정리했습니다.",
    emoji: "⚙️",
    category: "업무",
    readingTime: "7분",
    dateAdded: "2026-02-13",
    relatedTools: ["zapier", "notion-ai", "chatgpt"],
    sections: [
      {
        heading: "1. 자동화할 업무 고르기",
        body: ["매주 반복되고, 규칙이 명확하고, 실수가 잦은 업무부터 시작하는 것이 좋습니다."],
      },
      {
        heading: "2. 작게 시작하기",
        body: ["문의 메일 분류, 주문 정보 기록, 회의록 정리처럼 한 가지 흐름부터 만들어 보세요."],
      },
    ],
  },
  {
    slug: "ai-blog-content",
    title: "AI로 블로그 콘텐츠 만드는 방법",
    summary: "한 주제로 블로그·SNS·쇼츠까지 콘텐츠를 확장하는 방법입니다.",
    emoji: "🔁",
    category: "블로그",
    readingTime: "6분",
    dateAdded: "2026-02-15",
    relatedTools: ["chatgpt", "canva", "capcut"],
    sections: [
      {
        heading: "1. 하나의 주제, 여러 형태",
        body: ["블로그 글 한 편을 쓰면 카드뉴스, 쇼츠 대본, SNS 문구로 재구성할 수 있습니다."],
      },
      {
        heading: "2. 발행 주기 만들기",
        body: ["주 1회 주제를 정하고 형태별로 나눠 발행하면 꾸준함을 유지하기 쉽습니다."],
      },
    ],
  },
  {
    slug: "ai-solo-business",
    title: "AI를 활용한 1인 사업 아이디어",
    summary: "혼자 운영하는 사업에서 AI로 시간을 아끼는 현실적인 방법을 소개합니다.",
    emoji: "💼",
    category: "비즈니스",
    readingTime: "8분",
    dateAdded: "2026-02-17",
    relatedTools: ["chatgpt", "canva", "zapier", "julius"],
    sections: [
      {
        heading: "1. 마케팅 업무",
        body: ["광고 문구, 상세페이지, SNS 콘텐츠 초안 작성에 가장 효과가 큽니다."],
      },
      {
        heading: "2. 운영 업무",
        body: ["고객 문의 응대 초안, 매출 데이터 정리, 재고 기록 자동화 등에 활용할 수 있습니다."],
      },
      {
        heading: "3. 주의할 점",
        body: ["고객 개인정보를 AI 서비스에 그대로 입력하지 않도록 내부 기준을 정해두는 것이 좋습니다."],
      },
    ],
  },
  {
    slug: "ai-for-office-workers",
    title: "직장인을 위한 AI 활용법",
    summary: "보고서, 메일, 회의록, 엑셀까지 실무에서 바로 쓰는 활용법입니다.",
    emoji: "🏢",
    category: "업무",
    readingTime: "7분",
    dateAdded: "2026-02-19",
    relatedTools: ["chatgpt", "notion-ai", "julius", "deepl"],
    sections: [
      {
        heading: "1. 보고서와 메일",
        body: ["초안을 AI로 만들고 사실 확인과 톤 조정을 직접 하는 방식이 가장 효율적입니다."],
      },
      {
        heading: "2. 회의록",
        body: ["녹음 정리 → 결정 사항 → 담당자별 할 일 순서로 정리하도록 요청하세요."],
      },
      {
        heading: "3. 보안 확인",
        body: ["회사 내부 자료를 외부 AI에 입력해도 되는지 사내 규정을 먼저 확인해야 합니다."],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
