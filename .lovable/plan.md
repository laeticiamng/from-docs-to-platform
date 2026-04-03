
# PhytoTech — Plateforme Complète

## Design System
- Palette nature/organique : verts (#16a34a, #22c55e), fond clair (#fafdf7, #f0f5eb), texte sombre (#0f1a12)
- Polices : Instrument Serif (titres), DM Sans (corps), JetBrains Mono (tags/labels)
- Composants arrondis, animations subtiles au hover, style premium écologique

## Pages

### 1. Landing Page (`/`)
Reproduction fidèle du document "Home" avec toutes les sections :
- **Hero** plein écran avec grille 2 colonnes, CTA "Découvrir les kits" + visuel plante emoji
- **Manifesto** (section sombre avec citation)
- **Comparaison** : 3 cartes (EDF / Solaire / PhytoTech) avec la carte PhytoTech mise en avant
- **Gamme Produits** : 3 kits (Pot Vivant 49-199€, Module Maison 690-2490€, Autonomie Village 4900-19000€) avec détails, features et CTA
- **Comment ça marche** : 4 étapes (Plantez → Bactéries → Courant → Cycle) sur fond sombre
- **Impact réel** : grille de 4 cartes + bannière "1 acheté = 1 offert"
- **Modèle économique** : flow R&D → Bio-manufacture → Vente → Impact
- **Projections revenus** : tableau avec les 4 lignes produit et total 2.2M€
- **Canaux de distribution** : badges/chips
- **CTA final** + Footer EmotionsCare

### 2. Domaines d'Application (`/domaines`)
Reproduction du document "Cartographie" avec thème sombre :
- **Hero** avec titre "11 technologies · Tous les domaines de la vie"
- **11 sections domaines** accordéon/collapsibles : Habitat, Santé, Urbanisme, Agriculture, Éducation, Industrie, Pays en développement, Tourisme, Défense/Spatial, Gouvernance, Mode/Cosmétique
- Chaque domaine contient ses cartes d'applications avec tags colorés (Énergie, Eau, Lumière, etc.)
- **Axes émergents** : section spéciale avec 5 explorations futures
- **Matrice Technologies × Domaines** : tableau interactif avec indicateurs ● et ◐
- Footer

### 3. Navigation
- Header sticky avec logo PhytoTech, liens vers les sections et les 2 pages
- Navigation fluide avec scroll smooth entre sections
- Responsive mobile (menu hamburger)

## Composants réutilisables
- `Navbar` : navigation globale
- `ProductCard` : carte produit avec tier, prix, features
- `CompareCard` : carte comparaison
- `DomainSection` : section domaine collapsible avec apps
- `AppCard` : carte application avec tag coloré
- `StepCard` : étape "comment ça marche"
- `ImpactCard` : carte impact
- `TechMatrix` : matrice interactive
- `Footer` : pied de page
