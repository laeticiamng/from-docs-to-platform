---
name: Observabilité & QA
description: PostHog conditionné au consentement, tests Playwright avec data-testid, edge function cleanup-e2e-data, changelog public
type: feature
---
**Monitoring externe** : PostHog (`src/lib/posthog.ts`) initialisé seulement si `VITE_POSTHOG_KEY` défini ET consentement `analytics` accordé. Bridge automatique avec `useTracking` (mirror des events). Session replay activé seulement si consentement `marketing`. Toggle dynamique via event `consent:updated`.

**Tests E2E** : specs dans `e2e/` (auth, contact, preorder), lancés via `npx playwright test`. Selectors stables via `data-testid` minimaux : `auth-open`, `auth-dialog`, `auth-submit`, `contact-submit`, `preorder-submit`. Tous les emails de test utilisent `e2e+{ts}@phytotech.test`.

**Cleanup E2E** : edge function `cleanup-e2e-data` protégée par secret `E2E_CLEANUP_TOKEN`, garde-fou pattern doit contenir "e2e", purge `preorders` / `contact_messages` / `analytics_events`. Auth users à purger manuellement.

**Changelog** : source de vérité `src/data/changelog.md`, parsé par `ChangelogTimeline.tsx`, affiché en 5e onglet de `/admin/audit`. Format `## vX.Y — date` puis `### Ajouté|Corrigé|Refactorisé|Sécurité` puis `- item`.
