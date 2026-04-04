export type ProductVersion = 'wellness' | 'medical' | 'unlimited';

export interface DeviceConfiguration {
  version: ProductVersion;
  color: 'black-gold' | 'white-silver' | 'aquevent-gradient';
  finish: 'premium-matte' | 'glossy-ceramic' | 'titanium-brushed';
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

export interface FormulationDetails {
  waterBase: {
    spirulinaFilteredWater: number; // 95.7%
    purity: string; // >99.99%
    endotoxins: string; // <0.001 EU/ml
  };
  activeComplex: {
    spirulinaExtract: number; // 1.2mg/ml
    anthocyanesMyrtle: number; // 2.5mg/ml
    phycocyanineConcentrated: number; // 0.8mg/ml
  };
  safetyProfile: {
    unlimitedUse: boolean;
    toxicityLevel: string;
    validationStudies: number;
  };
}

export interface AquaVentProject {
  id: string;
  name: 'AquaVent PhytoTech UNLIMITED™';
  formulation: FormulationDetails;
  businessModel: {
    devicePrice: number;
    cartridgePrice: number;
    cartridgeMargin: number;
    marketAddressable: string;
    revenueProjection: string;
    exitValuation: string;
  };
  competitiveAdvantage: {
    blueOcean: boolean;
    patentsPossible: number;
    firstMoverAdvance: string;
    safetyUnique: boolean;
  };
}

export interface SafetyCalculation {
  component: string;
  userDose: number;
  toxicThreshold: number;
  safetyMargin: number;
  status: 'ULTRA_SAFE' | 'UNLIMITED_APPROVED' | 'SAFE';
  details: string;
}
