

## Audit gouvernance — État actuel & prochaines briques

### Ce qui est déjà en place (v1 → v3)
- **Identité & rôles** : `user_roles` + `has_role()` security definer, `RequireAdmin` ✓
- **RGPD** : Bandeau cookies granulaire, `/preferences` (export JSON Art.20, suppression compte Art.17 via edge function) ✓
- **Sécurité serveur** : Edge functions `submit-contact`, `submit-preorder`, `delete-account` avec rate-limiting (5 req/h/IP) ✓
- **Observabilité** : `analytics_events` + `useTracking` respectant le consentement ✓
- **Dashboard admin** : KPIs Recharts ✓
- **Design tokens HSL** : AquaVent + BioBot tokenisés ✓

### Ce qui manque pour fermer la boucle de gouvernance

**A. Sécurité Auth (critique, 2 min)**
- Activer **Leaked Password Protection** (HIBP) via `configure_auth` — bloque les mots de passe compromis lors signup/changement.

**B. Audit & monitoring admin (gouvernance opérationnelle)**
- Nouvelle page `/admin/audit` accessible aux admins :
  - Tableau des `rate_limits` récents (IP, action, timestamp) — détecter spam/abus
  - Tableau des `contact_messages` reçus (lecture seule, déjà en RLS admin)
  - Tableau des `preorders` reçus (lecture seule)
- Onglet de navigation dans `/admin` pour basculer Dashboard ↔ Audit.

**C. Notifications transactionnelles (boucle de feedback)**
- Edge function `send-transactional-email` via **Resend** :
  - Confirmation précommande → utilisateur
  - Accusé contact → utilisateur  
  - Alerte admin → `m.laeticia@hotmail.fr` sur nouveau contact/précommande
- Branchement dans `submit-contact` et `submit-preorder` (non-bloquant).
- Requiert secret `RESEND_API_KEY` — sera demandé après approbation.

**D. Cohérence design (dette technique restante)**
- Pages internes AquaVent (`FinancialCalculators`, `InvestmentDashboard`, `MarketAnalysis`, `Questionnaire`, `WaitlistSignup`, `ParticleBackground`) utilisent encore des hex codes → migration vers classes `aquevent-*`.
- Idem pour pages internes BioBot.

### Ordre d'exécution proposé
```text
1. HIBP (instant, gain sécurité majeur)
2. Page /admin/audit (gouvernance opérationnelle)
3. Notifications email Resend (boucle feedback) — nécessite secret
4. Refactor design tokens pages internes (dette propre)
```

### Détails techniques
- **HIBP** : `configure_auth({password_hibp_enabled: true})`
- **Audit page** : nouvelle route `/admin/audit` protégée par `RequireAdmin`, queries `rate_limits` / `contact_messages` / `preorders` via Supabase client (RLS déjà admin-only). Composants `Table` shadcn + filtres date.
- **Resend** : edge function unique `send-transactional-email` avec types `preorder_confirm | contact_ack | admin_alert`, appelée en fire-and-forget depuis les edge functions existantes.
- **Refactor tokens** : remplacement mécanique des `#xxxxxx` par classes `text-aquevent-*` / `bg-biobot-*`.

### Aucune migration DB requise pour A, C, D. B utilise les tables existantes.

