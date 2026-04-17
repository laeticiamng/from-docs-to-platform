

## Audit gouvernance v4 — Cadrage final

### État actuel (v1 → v3 livrés)
- **Identité/RGPD/Sécurité serveur/Observabilité** : tous opérationnels ✓
- **Email infrastructure** : domaine `notify.emotionscare.com` configuré, queue pgmq + cron, 3 templates (`contact-ack`, `preorder-confirm`, `admin-alert`), edge functions de send/unsubscribe/suppression branchées sur `submit-contact` et `submit-preorder` ✓
- **Admin** : dashboard KPI + page `/admin/audit` (rate-limits, contacts, précommandes) ✓

### Gaps restants pour fermer la gouvernance

**A. Monitoring email (gouvernance opérationnelle critique)**
La table `email_send_log` enregistre tous les envois (status, message_id, template, erreurs) mais **aucune UI ne l'expose**. Sans visibilité, impossible de détecter un email qui échoue silencieusement (DKIM, suppression, rate-limit Resend).
→ Nouvel onglet dans `/admin/audit` : **Email Delivery** avec stats dédupliquées par `message_id` (Total/Sent/Failed/Suppressed), filtres (template, statut, période 24h/7j/30j), table paginée des 50 derniers envois avec badges colorés et détail d'erreur.

**B. Refactor `Admin.tsx` (dette technique, 410 lignes)**
Découpage en sous-composants : `AdminStats`, `AdminCharts`, `AdminPreordersTable`, `AdminMessagesTable`, `AdminEventsTable` dans `src/components/admin/`. Améliore maintenabilité + permet réutilisation dans `/admin/audit`.

**C. Cohérence design tokens (dette restante)**
Pages internes AquaVent (`WaitlistSignup`, `FinancialCalculators`, `InvestmentDashboard`, `MarketAnalysis`, `Questionnaire`, `ParticleBackground`) utilisent encore `#8B2C5A` etc. → migration mécanique vers classes `text-aquevent-*` / `bg-aquevent-*` / `ring-aquevent-*`. Idem pour pages internes BioBot si présent.

**D. Auth emails brandés (cohérence expérience)**
Les emails Auth Supabase (mot de passe oublié, vérification) utilisent encore les templates par défaut. Brander avec PHYTOTECH (logo, couleurs, signature EmotionsCare SASU) via scaffold auth-email-templates.

### Ordre d'exécution

```text
1. Email monitoring dashboard       (visibilité critique sur la prod)
2. Refactor Admin.tsx               (dette tech avant d'ajouter du code)
3. Auth emails brandés              (cohérence UX)
4. Refactor design tokens internes  (dette propre)
```

### Détails techniques
- **Email dashboard** : 3e onglet dans `/admin/audit`. Query déduplication via `DISTINCT ON (message_id) ORDER BY message_id, created_at DESC`. Composants `Tabs` + `Table` shadcn. Filtres locaux React state.
- **Refactor Admin** : extraction sans changement de comportement, props typés, queries inchangées.
- **Auth emails** : `scaffold_auth_email_templates` puis personnalisation des `.tsx` avec brand tokens HSL.
- **Tokens** : `sed`-like remplacement `#8B2C5A` → `text-aquevent-primary` (déjà mappé dans `tailwind.config.ts`).

### Aucune migration DB requise. `email_send_log` déjà en place avec RLS admin.

