## v4.4 — 2026-04-17
### Ajouté
- Changelog public visible dans `/admin/audit` (5e onglet) — historique versionné v1 → v4.
- Tests Playwright des 3 parcours critiques : signup, contact, précommande (`e2e/`).
- Connector monitoring externe **PostHog** (analytics produit + erreurs JS), respect strict du consentement RGPD `analytics`.
### Sécurité
- Edge function `cleanup-e2e-data` (delete by email pattern, admin-only) pour isolation des tests.

## v4.3 — 2026-04-17
### Ajouté
- 6 templates auth emails brandés PHYTOTECH (signup, recovery, magic-link, invite, email-change, reauthentication) déployés via `auth-email-hook`.
### Refactorisé
- `Admin.tsx` (415 lignes) découpé en 5 sous-composants : `AdminStats`, `AdminCharts`, `AdminPreordersTable`, `AdminMessagesTable`, `AdminEventsTable`.
- Migration de 158 occurrences hex → tokens Tailwind sémantiques (`text-aquevent-*`, `bg-biobot-*`) sur les pages internes AquaVent et BioBot.

## v4.2 — 2026-04-17
### Ajouté
- Dashboard **Email Delivery** dans `/admin/audit` : stats dédupliquées par `message_id` (Sent/Failed/Suppressed), filtres période/template/statut, alertes auto si taux d'échec > 10%.

## v4.1 — 2026-04-17
### Ajouté
- Infrastructure email transactionnelle sur `notify.emotionscare.com` : queue `pgmq` + cron, 3 templates (`contact-ack`, `preorder-confirm`, `admin-alert`).
- Edge functions `send-transactional-email`, `process-email-queue`, `handle-email-suppression`, `handle-email-unsubscribe`.
- Tables `email_send_log`, `email_send_state`, `suppressed_emails`, `email_unsubscribe_tokens` avec RLS service-role.

## v3.0 — Observabilité & Admin
### Ajouté
- Dashboard admin `/admin` : KPIs, graphiques activité 14j, répartition packs, top pages.
- Page `/admin/audit` : rate-limits, contacts, précommandes (lecture seule, RLS admin).
- Tracking analytics global (`useTracking`) avec respect du consentement RGPD.

## v2.0 — Sécurité serveur & RGPD
### Ajouté
- Edge functions `submit-contact` et `submit-preorder` avec validation Zod et rate-limiting (5/h/IP).
- Bandeau cookies granulaire (essentiels / analytics / marketing) — `localStorage` + événement `consent:updated`.
- Page `/preferences` : export RGPD Art.20 (JSON) et suppression compte Art.17 via `delete-account`.
- Pages légales : `/cgv`, `/mentions-legales`, `/politique-confidentialite` (EmotionsCare SASU).

## v1.0 — Identité & rôles
### Ajouté
- Authentification Supabase (email + Google OAuth).
- Table `user_roles` + fonction `has_role()` security definer.
- Composant `RequireAdmin` pour protection des routes admin.
- Profils utilisateur avec trigger `handle_new_user`.
