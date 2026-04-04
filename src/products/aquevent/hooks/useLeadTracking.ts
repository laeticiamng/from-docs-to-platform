import { useState, useCallback } from 'react';
import { useAnalytics, AquaVentEvents } from './useAnalytics';

interface LeadData {
  email: string;
  source: 'waitlist' | 'investor' | 'beta' | 'newsletter';
  score: number;
  interests: string[];
}

export function useLeadTracking() {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const { trackEvent } = useAnalytics();

  const calculateScore = useCallback((events: string[]): number => {
    let score = 0;
    events.forEach((event) => {
      switch (event) {
        case AquaVentEvents.WAITLIST_JOIN: score += 20; break;
        case AquaVentEvents.INVESTOR_DECK_VIEW: score += 50; break;
        case AquaVentEvents.BETA_APPLICATION: score += 30; break;
        case AquaVentEvents.RESEARCH_PAPER_VIEW: score += 10; break;
        case AquaVentEvents.FINANCIAL_CALCULATOR_USE: score += 40; break;
        default: score += 5;
      }
    });
    return Math.min(score, 100);
  }, []);

  const trackLead = useCallback((data: Omit<LeadData, 'score'>) => {
    const score = calculateScore(data.interests);
    const lead = { ...data, score };
    setLeads((prev) => [...prev, lead]);

    trackEvent(AquaVentEvents.WAITLIST_JOIN, {
      source: data.source,
      score,
      email_domain: data.email.split('@')[1],
    });

    return lead;
  }, [calculateScore, trackEvent]);

  return { leads, trackLead, calculateScore };
}
