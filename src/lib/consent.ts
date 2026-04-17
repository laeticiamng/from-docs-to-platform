/**
 * Gestion granulaire du consentement RGPD.
 * 3 catégories : essentiels (obligatoires), analytics, marketing.
 */
export type ConsentCategories = {
  essential: true; // toujours true
  analytics: boolean;
  marketing: boolean;
};

const KEY = "phytotech_consent_v2";
const LEGACY_KEY = "phytotech_cookie_consent";

const DEFAULT: ConsentCategories = {
  essential: true,
  analytics: false,
  marketing: false,
};

export const getConsent = (): ConsentCategories | null => {
  if (typeof window === "undefined") return null;
  // migration depuis ancienne clé booléenne
  const legacy = localStorage.getItem(LEGACY_KEY);
  const raw = localStorage.getItem(KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as ConsentCategories;
      return { ...DEFAULT, ...parsed, essential: true };
    } catch {
      return null;
    }
  }
  if (legacy === "accepted") return { essential: true, analytics: true, marketing: true };
  if (legacy === "refused") return { essential: true, analytics: false, marketing: false };
  return null;
};

export const setConsent = (consent: Partial<Omit<ConsentCategories, "essential">>) => {
  const next: ConsentCategories = {
    essential: true,
    analytics: consent.analytics ?? false,
    marketing: consent.marketing ?? false,
  };
  localStorage.setItem(KEY, JSON.stringify(next));
  localStorage.removeItem(LEGACY_KEY);
  window.dispatchEvent(new CustomEvent("consent:updated", { detail: next }));
  return next;
};

export const acceptAll = () => setConsent({ analytics: true, marketing: true });
export const rejectAll = () => setConsent({ analytics: false, marketing: false });
export const resetConsent = () => {
  localStorage.removeItem(KEY);
  localStorage.removeItem(LEGACY_KEY);
};

export const hasConsent = (cat: keyof ConsentCategories): boolean => {
  const c = getConsent();
  return c ? c[cat] === true : false;
};
