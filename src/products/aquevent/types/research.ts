export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  journal: string;
  year: number;
  componentFocus: string;
  validationLevel: 1 | 2 | 3 | 4 | 5;
  keyFindings: string[];
  tags: string[];
  pdfUrl?: string;
}

export interface SafetyMetric {
  component: string;
  metric: string;
  value: string;
  benchmark: string;
  status: 'excellent' | 'good' | 'acceptable';
}

export interface ClinicalTrial {
  id: string;
  phase: string;
  title: string;
  status: 'completed' | 'ongoing' | 'planned';
  participants: number;
  startDate: string;
  endDate?: string;
  results?: string;
}
