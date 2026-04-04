import { useCallback } from 'react';

export const AquaVentEvents = {
  PRODUCT_VIEW: 'aquevent_product_view',
  DEVICE_CONFIGURE: 'aquevent_device_configure',
  VERSION_SWITCH: 'aquevent_version_switch',
  WAITLIST_JOIN: 'aquevent_waitlist_join',
  NEWSLETTER_SIGNUP: 'aquevent_newsletter_signup',
  BETA_APPLICATION: 'aquevent_beta_apply',
  INVESTOR_DECK_VIEW: 'aquevent_investor_deck_view',
  FINANCIAL_CALCULATOR_USE: 'aquevent_calculator_use',
  WHITEPAPER_DOWNLOAD: 'aquevent_whitepaper_download',
  COURSE_START: 'aquevent_course_start',
  QUIZ_COMPLETE: 'aquevent_quiz_complete',
  RESEARCH_PAPER_VIEW: 'aquevent_research_view',
  PAGE_VIEW: 'aquevent_page_view',
  CTA_CLICK: 'aquevent_cta_click',
} as const;

type EventName = (typeof AquaVentEvents)[keyof typeof AquaVentEvents];

export function useAnalytics() {
  const trackEvent = useCallback((event: EventName, properties?: Record<string, unknown>) => {
    // Log to console in development
    if (import.meta.env.DEV) {
      console.log(`[AquaVent Analytics] ${event}`, properties);
    }

    // Future: Send to analytics provider (Mixpanel, GA4, etc.)
    // if (window.mixpanel) { window.mixpanel.track(event, properties); }
  }, []);

  const trackPageView = useCallback((page: string) => {
    trackEvent(AquaVentEvents.PAGE_VIEW, { page, timestamp: Date.now() });
  }, [trackEvent]);

  return { trackEvent, trackPageView, events: AquaVentEvents };
}
