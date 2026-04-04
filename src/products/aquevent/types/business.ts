export interface FinancialProjection {
  year: number;
  revenue: number;
  costs: number;
  profit: number;
  marketShare: number;
  customers: number;
}

export interface MarketSegment {
  id: string;
  name: string;
  size: string;
  growth: string;
  tam: number;
  sam: number;
  som: number;
  color: string;
}

export interface Competitor {
  name: string;
  category: string;
  strengths: string[];
  weaknesses: string[];
  marketShare: number;
  naturalIngredients: boolean;
  priceRange: string;
}

export interface InvestmentTier {
  name: string;
  amount: string;
  equity: string;
  perks: string[];
  roi: string;
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  bio: string;
  avatar?: string;
}

export interface FinancialInputs {
  investmentAmount: number;
  marketPenetration: number;
  pricePoint: number;
  growthRate: number;
  timeHorizon: number;
}
