# Tests End-to-End (Playwright)

Filet de sécurité automatisé pour les 3 parcours critiques de la plateforme.

## Specs couvertes

| Spec | Parcours | Données générées |
|------|----------|------------------|
| `auth.spec.ts` | Ouverture dialog, signup, signin invalid | `e2e+signup-{ts}@phytotech.test` |
| `contact.spec.ts` | Envoi message + validation form | `e2e+contact-{ts}@phytotech.test` |
| `preorder.spec.ts` | Précommande complète + reset form | `e2e+preorder-{ts}@phytotech.test` |

Tous les emails de test utilisent le domaine `@phytotech.test` pour faciliter l'isolation et le cleanup.

## Lancer les tests localement

```bash
# Installation initiale (une fois)
npx playwright install

# Tous les tests
npx playwright test

# Une spec en particulier
npx playwright test e2e/preorder.spec.ts

# Mode UI interactif
npx playwright test --ui
```

## Cleanup des données de test

Une edge function `cleanup-e2e-data` purge les rows générées par les specs.

**Prérequis** : configurer le secret `E2E_CLEANUP_TOKEN` dans Lovable Cloud.

**Appel** :
```bash
curl -X POST \
  -H "x-e2e-token: <token>" \
  -H "Content-Type: application/json" \
  -d '{"pattern":"e2e+%@phytotech.test"}' \
  https://<project-ref>.supabase.co/functions/v1/cleanup-e2e-data
```

La fonction supprime dans `preorders`, `contact_messages`, `analytics_events`.
Le pattern doit obligatoirement contenir `e2e` (garde-fou anti-suppression accidentelle).

> Note : la suppression des comptes auth (signups) doit se faire manuellement via le dashboard
> backend, car nous ne purgeons pas `auth.users` automatiquement.

## Selectors stables

Les specs utilisent des `data-testid` minimaux sur les éléments critiques :
- `auth-open`, `auth-dialog`, `auth-submit`
- `contact-submit`
- `preorder-submit`

Les autres éléments sont ciblés via labels accessibles (`getByLabel`, `getByRole`).

## Pas de CI/CD

Les tests sont conçus pour être lancés à la main avant chaque release.
Pour intégrer en CI, ajouter un workflow GitHub Actions appelant `npx playwright test`
puis l'edge function de cleanup en post-step.
