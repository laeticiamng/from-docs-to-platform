import { useState, useCallback } from 'react';
import type { ProductVersion } from '../types/product';

interface UserProfile {
  smokingStatus: 'current' | 'former' | 'never';
  primaryGoal: 'cessation' | 'wellness' | 'relaxation' | 'respiratory';
  lifestyle: 'urban' | 'suburban' | 'rural';
  budget: 'standard' | 'premium' | 'unlimited';
}

interface Recommendation {
  version: ProductVersion;
  program: string;
  duration: string;
  estimatedBenefit: string;
  monthlyBudget: string;
}

export function usePersonalization() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const generateRecommendation = useCallback((userProfile: UserProfile): Recommendation => {
    const isSmokingCessation = userProfile.smokingStatus === 'current' || userProfile.primaryGoal === 'cessation';
    const version: ProductVersion = isSmokingCessation ? 'medical' : 'wellness';

    const programs: Record<string, { program: string; duration: string; benefit: string }> = {
      cessation: {
        program: 'Programme Sevrage Progressif 90 jours',
        duration: '3 mois intensif + 3 mois maintenance',
        benefit: 'Réduction de 82% des envies dès la 2ème semaine',
      },
      wellness: {
        program: 'Programme Bien-être Quotidien',
        duration: 'Usage continu',
        benefit: 'Amélioration de 32% de la capacité respiratoire',
      },
      relaxation: {
        program: 'Programme Relaxation & Mindfulness',
        duration: 'Usage flexible',
        benefit: 'Réduction du stress et amélioration du sommeil',
      },
      respiratory: {
        program: 'Programme Santé Respiratoire',
        duration: '6 mois suivi médical',
        benefit: 'Réduction de 47% des marqueurs inflammatoires',
      },
    };

    const selected = programs[userProfile.primaryGoal];
    const budgetMap = { standard: '€36/mois', premium: '€54/mois', unlimited: '€72/mois' };

    const rec: Recommendation = {
      version,
      program: selected.program,
      duration: selected.duration,
      estimatedBenefit: selected.benefit,
      monthlyBudget: budgetMap[userProfile.budget],
    };

    setRecommendation(rec);
    return rec;
  }, []);

  const updateProfile = useCallback((data: UserProfile) => {
    setProfile(data);
    generateRecommendation(data);
  }, [generateRecommendation]);

  return { profile, recommendation, updateProfile, generateRecommendation };
}
