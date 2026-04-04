export type ProductVersion = 'wellness' | 'medical';

export interface DeviceConfiguration {
  version: ProductVersion;
  color: string;
  finish: 'matte' | 'glossy' | 'premium';
  engraving?: string;
}

export interface ProductSpec {
  label: string;
  wellness: string;
  medical: string;
}

export interface ProductTier {
  id: string;
  name: string;
  version: ProductVersion;
  tagline: string;
  description: string;
  price: number;
  features: string[];
  specs: ProductSpec[];
  image?: string;
}

export interface Ingredient {
  id: string;
  name: string;
  scientificName: string;
  category: 'superfood' | 'antioxidant' | 'adaptogen' | 'essential';
  description: string;
  benefits: string[];
  concentration: string;
  safetyRating: number; // 1-5
  color: string;
}
