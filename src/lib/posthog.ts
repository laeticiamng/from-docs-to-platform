import posthog from "posthog-js";
import { getConsent, hasConsent } from "@/lib/consent";

let initialized = false;

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const POSTHOG_HOST = (import.meta.env.VITE_POSTHOG_HOST as string | undefined) ?? "https://eu.i.posthog.com";

/**
 * Initialise PostHog UNIQUEMENT si :
 * - clé publique configurée
 * - consentement "analytics" donné (RGPD)
 * Idempotent : peut être appelé plusieurs fois sans risque.
 */
export const initPostHog = () => {
  if (typeof window === "undefined") return;
  if (!POSTHOG_KEY) return;
  if (!hasConsent("analytics")) return;
  if (initialized) {
    posthog.opt_in_capturing();
    return;
  }
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    disable_session_recording: !hasConsent("marketing"), // session replay = marketing
    loaded: (ph) => {
      if (import.meta.env.DEV) ph.debug();
    },
  });
  initialized = true;
};

/** Désactive immédiatement toute capture et purge la file. */
export const shutdownPostHog = () => {
  if (!initialized) return;
  try {
    posthog.opt_out_capturing();
    posthog.reset();
  } catch {
    /* noop */
  }
};

/** Capture un événement métier (no-op si non initialisé). */
export const capturePostHog = (event: string, properties?: Record<string, unknown>) => {
  if (!initialized || !POSTHOG_KEY) return;
  if (!hasConsent("analytics")) return;
  try {
    posthog.capture(event, properties);
  } catch {
    /* fail silent */
  }
};

/** Branche les changements de consentement (à appeler une fois au boot). */
export const wireConsentToPostHog = () => {
  if (typeof window === "undefined") return;
  const handler = () => {
    const c = getConsent();
    if (c?.analytics) {
      initPostHog();
    } else {
      shutdownPostHog();
    }
  };
  window.addEventListener("consent:updated", handler);
  // état initial
  handler();
};

export const isPostHogConfigured = () => Boolean(POSTHOG_KEY);
