import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { hasConsent } from "@/lib/consent";

const getSessionId = (): string => {
  if (typeof window === "undefined") return "ssr";
  let sid = sessionStorage.getItem("analytics_session_id");
  if (!sid) {
    sid = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    sessionStorage.setItem("analytics_session_id", sid);
  }
  return sid;
};

/**
 * Hook global de tracking analytics.
 * - Respecte le consentement RGPD (catégorie "analytics")
 * - Trackage automatique des pageviews
 * - trackEvent disponible pour les CTA
 */
export const useTracking = (category = "site") => {
  const location = useLocation();
  const lastTracked = useRef<string>("");

  const trackEvent = useCallback(
    async (eventName: string, properties: Record<string, unknown> = {}) => {
      if (!hasConsent("analytics")) {
        if (import.meta.env.DEV) console.log(`[Tracking blocked - no consent] ${eventName}`);
        return;
      }
      try {
        const { data: { user } } = await supabase.auth.getUser();
        await supabase.from("analytics_events").insert({
          event_name: eventName,
          event_category: category,
          user_id: user?.id ?? null,
          session_id: getSessionId(),
          properties: properties as never,
          page_path: typeof window !== "undefined" ? window.location.pathname : null,
          user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
        });
      } catch (err) {
        if (import.meta.env.DEV) console.warn("[Tracking] insert failed", err);
      }
    },
    [category],
  );

  // Auto-pageview
  useEffect(() => {
    const path = location.pathname + location.search;
    if (lastTracked.current === path) return;
    lastTracked.current = path;
    void trackEvent("page_view", { path: location.pathname, search: location.search });
  }, [location.pathname, location.search, trackEvent]);

  return { trackEvent };
};
