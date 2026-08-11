export type PricingType = "무료" | "무료 플랜" | "무료 체험" | "유료" | "크레딧";
export type KoreanSupport = "좋음" | "보통" | "제한적" | "미지원";
export type Difficulty = "초급" | "중급" | "고급";

export interface AITool {
  id: string;
  name: string;
  slug: string;
  description: string;
  koreanDescription: string;
  categories: string[]; // category slugs
  useCases: string[]; // use-case slugs (활용 분야)
  targetUsers: string[];
  pricing: PricingType;
  pricingDetails: string;
  koreanSupport: KoreanSupport;
  koreanNotes: string[];
  difficulty: Difficulty;
  website: string;
  features: string[];
  koreanUseCases: string[];
  pros: string[];
  cons: string[];
  tags: string[];
  rating: number;
  popularity: number;
  dateAdded: string;
  featured: boolean;
  isNew: boolean;
  freePlan: boolean;
  freeTrial: boolean;
  noSignupFree?: boolean;
  alternatives: string[]; // slugs
  compare?: Record<string, string>;
}
