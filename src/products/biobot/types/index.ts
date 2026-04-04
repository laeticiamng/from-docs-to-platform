export interface BioBotModule {
  id: string;
  name: string;
  category: 'energy' | 'materials' | 'intelligence' | 'lifecycle' | 'application';
  description: string;
  trl: number; // Technology Readiness Level 1-9
  icon: string;
  color: string;
}

export interface BioTechnology {
  name: string;
  trademark: string;
  description: string;
  specs: { label: string; value: string }[];
  advantages: string[];
  research: string[];
}

export interface ApplicationBot {
  id: string;
  name: string;
  icon: string;
  mission: string;
  capabilities: string[];
  impact: string[];
  revenue: string;
  color: string;
}

export interface FeasibilityItem {
  technology: string;
  trl: string;
  probability: string;
  timeline: string;
  companies: string[];
  status: 'validated' | 'developing' | 'research';
}

export interface RoadmapPhase {
  phase: number;
  name: string;
  timeline: string;
  budget: string;
  team: string;
  deliverable: string;
  risk: string;
  successCriteria: string;
}

export interface RevenueStream {
  name: string;
  description: string;
  pricing: string;
  margin: string;
}
