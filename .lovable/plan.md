

# Audit complet & Plan d'intégration — Ce qu'il manque

## Problemes identifies

### 1. Emojis restants (pas remplacés par Lucide)
Les fichiers suivants contiennent encore des emojis au lieu d'icones Lucide :
- **Navbar.tsx** : 🌿 dans le logo
- **Footer.tsx** : 🌿 dans le logo
- **Contact.tsx** : 📍, ✉️, 🕐
- **Profile.tsx** : 🔒, 👤
- **ResetPassword.tsx** : 🔐
- **Index.tsx** : ⚠️ (×2 dans les badges/titres)
- **PackAutonomie.tsx** : ⚠️
- **AquaVent Landing.tsx** : 🌿, 🛡️, 🚀 dans les données

### 2. SEO manquant sur les pages produits
Aucune page AquaVent (6 pages) ni BioBot (6 pages) n'utilise le composant `SEOHead`. Pas de balises title/description/OG sur 12 pages.

### 3. Twitter meta incorrecte
`index.html` reference `@Lovable` au lieu de `@EmotionsCare` dans les balises Twitter Card.

### 4. Anti-pattern dans Profile.tsx
Le chargement des donnees se fait dans le corps du render au lieu d'un `useEffect`, ce qui provoque des appels multiples.

### 5. Pas de bandeau cookies/RGPD
Aucun mecanisme de consentement aux cookies — requis par la loi pour un site francais.

### 6. Pas de validation d'entree sur les formulaires
Les formulaires Contact et Precommande n'ont aucune validation de longueur ni de format cote client. Risque d'injection et de donnees corrompues.

### 7. Pas de JSON-LD (donnees structurees)
Aucun markup Schema.org pour l'organisation EmotionsCare — nuit au referencement.

---

## Plan d'implementation

### Etape 1 — Remplacer les derniers emojis
- **Navbar.tsx** & **Footer.tsx** : remplacer 🌿 par `<Leaf className="w-5 h-5 text-primary" />`
- **Contact.tsx** : remplacer 📍 par `MapPin`, ✉️ par `Mail`, 🕐 par `Clock`
- **Profile.tsx** : remplacer 🔒 par `Lock`, 👤 par `UserRound`
- **ResetPassword.tsx** : remplacer 🔐 par `KeyRound`
- **Index.tsx** & **PackAutonomie.tsx** : remplacer ⚠️ par `AlertTriangle`
- **AquaVent Landing.tsx** : remplacer les emoji strings par des icones Lucide

### Etape 2 — Corriger Profile.tsx (anti-pattern)
Deplacer le fetch du profil dans un `useEffect` avec dependance sur `user?.id` au lieu du corps du composant.

### Etape 3 — Ajouter SEOHead sur les 12 pages produits
Importer et ajouter `<SEOHead>` sur chaque page AquaVent (Landing, Product, Science, Business, Academy, Community) et BioBot (Landing, Technology, Applications, Science, Business, Ecosystem).

### Etape 4 — Corriger les meta Twitter
Dans `index.html`, changer `@Lovable` en `@EmotionsCare` dans la balise `twitter:site`.

### Etape 5 — Ajouter JSON-LD Organisation
Dans `SEOHead.tsx`, injecter un script JSON-LD `Organization` avec les infos EmotionsCare (nom, adresse, SIREN, site web).

### Etape 6 — Validation des formulaires
Ajouter une validation client-side sur les formulaires Contact et Precommande :
- Longueur max sur nom (100 chars), email (255), message (2000)
- Trim des espaces
- Feedback d'erreur visuel

### Etape 7 — Bandeau de consentement RGPD
Creer un composant `CookieConsent.tsx` :
- Affiche un bandeau en bas de page au premier chargement
- Stocke le consentement dans `localStorage`
- Boutons "Accepter" / "Refuser"
- Integre dans `App.tsx`

### Details techniques
- **Fichiers modifies** : ~20 fichiers (Navbar, Footer, Contact, Profile, ResetPassword, Index, PackAutonomie, AquaVent Landing + 12 pages produits, SEOHead, index.html, App.tsx)
- **Fichiers crees** : 1 (CookieConsent.tsx)
- **Aucune migration de base de donnees requise**
- **Aucune dependance supplementaire**

