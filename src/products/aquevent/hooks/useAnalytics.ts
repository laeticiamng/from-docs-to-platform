import { useCallback } from 'react';

export const AquaVentEvents = {
  // Product Interest
  PRODUCT_VIEW: 'aquevent_product_view',
  UNLIMITED_CLAIM_VIEW: 'aquevent_unlimited_claim_view',
  DEVICE_CONFIGURE: 'aquevent_device_configure',
  VERSION_SWITCH: 'aquevent_version_switch',
  FORMULATION_EXPLORE: 'aquevent_formulation_explore',

  // Scientific Validation
  RESEARCH_PAPER_VIEW: 'aquevent_research_view',
  SAFETY_CALCULATOR_USE: 'aquevent_safety_calculator_use',
  SAFETY_MARGIN_CHECK: 'aquevent_safety_margin_check',
  COMPONENT_DEEP_DIVE: 'aquevent_component_deep_dive',

  // Business Interest
  INVESTOR_DECK_VIEW: 'aquevent_investor_deck_view',
  FINANCIAL_CALCULATOR_USE: 'aquevent_calculator_use',
  FINANCIAL_PROJECTION_USE: 'aquevent_financial_projection_use',
  MARKET_ANALYSIS_VIEW: 'aquevent_market_analysis_view',
  COMPETITIVE_COMPARISON: 'aquevent_competitive_comparison',

  // Lead Generation
  WAITLIST_JOIN: 'aquevent_waitlist_join',
  NEWSLETTER_SIGNUP: 'aquevent_newsletter_signup',
  EARLY_ACCESS_REQUEST: 'aquevent_early_access_request',
  BETA_APPLICATION: 'aquevent_beta_apply',
  REFERRAL_SHARE: 'aquevent_referral_share',

  // Engagement
  COURSE_START: 'aquevent_course_start',
  QUIZ_COMPLETE: 'aquevent_quiz_complete',
  QUESTIONNAIRE_COMPLETE: 'aquevent_questionnaire_complete',
  PERSONALIZATION_VIEW: 'aquevent_personalization_view',
  WHITEPAPER_DOWNLOAD: 'aquevent_whitepaper_download',

  // Navigation
  PAGE_VIEW: 'aquevent_page_view',
  CTA_CLICK: 'aquevent_cta_click',
  SOCIAL_SHARE: 'aquevent_social_share',
} as const;

type EventName = (typeof AquaVentEvents)[keyof typeof AquaVentEvents];

export function useAnalytics() {
  const trackEvent = useCallback((event: EventName, properties?: Record<string, unknown>) => {
    if (import.meta.env.DEV) {
      console.log(`[AquaVent Analytics] ${event}`, properties);
    }
  }, []);

  const trackPageView = useCallback((page: string) => {
    trackEvent(AquaVentEvents.PAGE_VIEW, { page, timestamp: Date.now() });
  }, [trackEvent]);

  return { trackEvent, trackPageView, events: AquaVentEvents };
}

export function calculateLeadScore(events: string[]): number {
  let score = 0;

  events.forEach((event) => {
    switch (event) {
      case AquaVentEvents.UNLIMITED_CLAIM_VIEW: score += 10; break;
      case AquaVentEvents.SAFETY_CALCULATOR_USE: score += 25; break;
      case AquaVentEvents.INVESTOR_DECK_VIEW: score += 50; break;
      case AquaVentEvents.WAITLIST_JOIN: score += 40; break;
      case AquaVentEvents.DEVICE_CONFIGURE: score += 30; break;
      case AquaVentEvents.RESEARCH_PAPER_VIEW: score += 15; break;
      case AquaVentEvents.REFERRAL_SHARE: score += 20; break;
      case AquaVentEvents.QUESTIONNAIRE_COMPLETE: score += 35; break;
      case AquaVentEvents.FINANCIAL_CALCULATOR_USE: score += 40; break;
      case AquaVentEvents.BETA_APPLICATION: score += 30; break;
      default: score += 5;
    }
  });

  return Math.min(score, 100);
}
