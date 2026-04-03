// DIY guides for each technology across the site

export interface HowToData {
  steps: { step: string; detail: string }[];
  materials?: string[];
  difficulty?: "Facile" | "Moyen" | "Avancé";
  cost?: string;
}

// Keyed by technology title for easy lookup
export const howToGuides: Record<string, HowToData> = {
  // ── Habitat & Vie domestique ──
  "Douche cyclique à biofiltre algal": {
    difficulty: "Moyen",
    cost: "80–150€",
    materials: ["Pompe d'aquarium 12V", "Tube silicone alimentaire (2m)", "Bocal 5L en verre", "Spiruline vivante (culture starter)", "Filtre charbon actif", "Pomme de douche basse pression"],
    steps: [
      { step: "Assemblez le circuit d'eau", detail: "Reliez la pomme de douche → bac de récupération → pompe → filtre charbon → bocal d'algues → retour pomme de douche." },
      { step: "Préparez le biofiltre", detail: "Remplissez le bocal d'eau tiède + culture de spiruline. Placez-le près d'une fenêtre. En 1 semaine, les algues colonisent." },
      { step: "Testez le circuit", detail: "Faites circuler l'eau 10 min. L'eau doit sortir claire après 2-3 passages. Ajustez le débit de la pompe." },
      { step: "Utilisez et entretenez", detail: "Changez l'eau tous les 5 jours. Récoltez l'excédent d'algues pour vos plantes (engrais gratuit)." },
    ],
  },
  "Plantes d'intérieur productrices d'électricité": {
    difficulty: "Facile",
    cost: "15–30€",
    materials: ["Pot de fleurs en terre", "Plante à racines denses (menthe, pathos)", "Terreau humide", "2 électrodes (zinc + cuivre ou graphite)", "Fil de cuivre", "LED basse consommation ou petit voltmètre"],
    steps: [
      { step: "Plantez normalement", detail: "Mettez la plante dans le pot avec du terreau bien humide. Les racines doivent être en contact avec le sol mouillé." },
      { step: "Insérez les électrodes", detail: "Plantez l'anode (zinc) et la cathode (cuivre/graphite) dans le sol, espacés de 10-15 cm. Les bactéries du sol font le reste." },
      { step: "Connectez", detail: "Reliez les électrodes avec du fil de cuivre à votre LED. Vous devriez voir une tension de 0.3-0.7V par pot." },
      { step: "Multipliez", detail: "Connectez 4-6 pots en série pour atteindre ~3V — suffisant pour un capteur de température ou une LED." },
    ],
  },
  "Éclairage bioluminescent": {
    difficulty: "Facile",
    cost: "20–40€",
    materials: ["Flacon en verre transparent (500ml)", "Culture de Pyrocystis fusiformis (dino flagellé, achat en ligne)", "Eau de mer artificielle (sel marin)", "Nutriments F/2 (disponibles en aquariophilie)"],
    steps: [
      { step: "Préparez l'eau de mer", detail: "Dissolvez 35g de sel marin par litre d'eau distillée. Ajoutez les nutriments F/2 selon les instructions." },
      { step: "Ajoutez les dinoflagellés", detail: "Versez la culture starter dans le flacon. Remplissez avec l'eau de mer préparée. Laissez 2cm d'air." },
      { step: "Cycle lumineux", detail: "Placez près d'une fenêtre le jour (12h lumière / 12h obscurité). Les organismes se chargent en lumière." },
      { step: "Admirez la nuit", detail: "Agitez doucement le flacon dans l'obscurité — une lumière bleue magique apparaît. Durée de vie : plusieurs mois avec entretien." },
    ],
  },
  "Murs d'algues purificateurs d'air": {
    difficulty: "Moyen",
    cost: "60–120€",
    materials: ["Aquarium plat vertical (type cadre photo géant) ou sac plastique transparent", "Pompe à air d'aquarium", "Culture de Chlorella (micro-algues)", "Nutriments hydroponiques", "Tube LED croissance (optionnel)"],
    steps: [
      { step: "Créez le panneau", detail: "Utilisez un aquarium plat ou fabriquez un cadre avec 2 plaques de plexiglas et un joint silicone. Épaisseur : 3-5 cm." },
      { step: "Remplissez et inoculez", detail: "Remplissez d'eau + nutriments + culture de Chlorella. L'eau devient verte en quelques jours." },
      { step: "Aérez", detail: "Branchez la pompe à air : les bulles brassent les algues et accélèrent la photosynthèse (absorption CO₂ → rejet O₂)." },
      { step: "Accrochez au mur", detail: "Placez près d'une fenêtre. 1m² d'algues absorbe autant de CO₂ que 25 plantes d'intérieur classiques." },
    ],
  },
  "Batteries domestiques à quinones végétales": {
    difficulty: "Avancé",
    cost: "40–80€",
    materials: ["Extrait de rhubarbe ou carthame (source de quinones)", "2 bocaux en verre", "Membrane échangeuse (filtre café céramique en substitut simple)", "Électrodes en graphite (mines de crayon)", "Pompe péristaltique (optionnel)", "Multimètre"],
    steps: [
      { step: "Préparez l'électrolyte", detail: "Faites infuser la rhubarbe dans de l'eau acidifiée (vinaigre). Filtrez. Ce liquide contient des quinones naturelles." },
      { step: "Construisez la cellule", detail: "Séparez les 2 bocaux par la membrane. Insérez une électrode graphite dans chaque bocal." },
      { step: "Chargez", detail: "Appliquez une tension de 1.5V (pile AA) aux bornes. Les quinones se chargent/déchargent réversiblement." },
      { step: "Mesurez", detail: "Déconnectez la pile, mesurez la tension résiduelle. Vous avez une batterie bio ! Capacité faible mais concept prouvé." },
    ],
  },
  "Mobilier en bioplastique algal": {
    difficulty: "Avancé",
    cost: "30–60€",
    materials: ["Algues séchées (agar-agar alimentaire)", "Glycérine végétale", "Eau", "Moules en silicone", "Colorants naturels (curcuma, betterave — optionnel)"],
    steps: [
      { step: "Préparez la pâte", detail: "Mélangez 15g d'agar-agar + 500ml d'eau + 5ml de glycérine. Chauffez à ébullition en remuant." },
      { step: "Moulez", detail: "Versez dans des moules. Ajoutez du colorant si souhaité. Laissez refroidir 24h." },
      { step: "Démoulez et séchez", detail: "Le bioplastique est rigide une fois sec. Séchage complet : 3-5 jours à l'air libre." },
      { step: "Utilisez", detail: "Parfait pour des objets décoratifs, des pots, des boîtes. 100% compostable en fin de vie." },
    ],
  },

  // ── Santé & Médecine ──
  "Agent de contraste IRM végétal (BBCA)": {
    difficulty: "Facile",
    cost: "5–10€",
    materials: ["Betteraves fraîches (3-4)", "Mixeur", "Filtre à café", "Bocal en verre"],
    steps: [
      { step: "Extrayez le jus", detail: "Mixez les betteraves crues avec un peu d'eau. Filtrez pour obtenir un jus clair et concentré." },
      { step: "Observez la couleur", detail: "La bétalaïne (pigment rouge) est le composé paramagnétique — c'est lui qui remplace le gadolinium dans notre R&D." },
      { step: "Expérimentez", detail: "Ce jus est comestible et biodégradable. Placez-le près d'un aimant : la bétalaïne interagit avec les champs magnétiques." },
      { step: "Comprenez le principe", detail: "En IRM, ce pigment naturel modifie le signal des tissus comme le fait le gadolinium — mais sans toxicité rénale." },
    ],
  },

  // ── Urbanisme ──
  "Lampadaires à algues bioluminescentes": {
    difficulty: "Moyen",
    cost: "40–70€",
    materials: ["Grand bocal ou tube transparent (2-5L)", "Culture de dinoflagellés bioluminescents", "Eau de mer artificielle", "Support (trépied ou crochet)", "Timer pour cycle lumière"],
    steps: [
      { step: "Préparez le tube lumineux", detail: "Remplissez le tube d'eau de mer + culture bioluminescente. C'est un lampadaire vivant." },
      { step: "Programmez le cycle", detail: "12h de lumière (jour), 12h d'obscurité. Utilisez un timer sur une lampe LED de bureau pour simuler." },
      { step: "Installez en extérieur", detail: "Accrochez le long d'un chemin de jardin. La nuit, les organismes brillent quand le vent agite le tube." },
      { step: "Entretenez", detail: "Ajoutez des nutriments toutes les 2 semaines. La colonie se renouvelle indéfiniment." },
    ],
  },

  // ── Agriculture ──
  "Capteurs de sol PMFC autonomes": {
    difficulty: "Moyen",
    cost: "25–50€",
    materials: ["Électrodes graphite (2)", "Fil de cuivre gainé", "Capteur d'humidité DHT11 (3€)", "Arduino Nano ou ESP32", "Pot de terre avec plante"],
    steps: [
      { step: "Plantez les électrodes", detail: "Enfoncez les 2 électrodes de graphite dans le sol humide, espacées de 15cm, à 10cm de profondeur." },
      { step: "Connectez au microcontrôleur", detail: "Les électrodes alimentent un condensateur qui charge lentement l'Arduino/ESP32." },
      { step: "Branchez le capteur", detail: "Le DHT11 mesure humidité et température du sol. L'Arduino envoie les données toutes les 10 min." },
      { step: "Placez au jardin", detail: "Enterrez le dispositif près de vos plantes. Zéro pile, zéro panneau — la plante alimente le capteur." },
    ],
  },

  // ── Afrique zones ──
  "Biofiltre algal sur puits existants": {
    difficulty: "Moyen",
    cost: "30–60€",
    materials: ["Seau de 20L", "Culture de spiruline ou chlorella", "Tissu filtrant (moustiquaire fine)", "Tuyau de raccord", "Robinet"],
    steps: [
      { step: "Installez le bac de filtration", detail: "Placez le seau en aval du puits. L'eau coule par gravité dans le bac contenant les algues." },
      { step: "Ensemencez les algues", detail: "Ajoutez la culture starter. En 1 semaine au soleil, les algues colonisent le bac." },
      { step: "Filtrez", detail: "L'eau passe à travers la colonie d'algues qui absorbe les métaux lourds et bactéries. Sortie par le tissu filtrant." },
      { step: "Récoltez et entretenez", detail: "L'excédent d'algues est un super-aliment (spiruline) ou un engrais. Nettoyez le filtre toutes les 2 semaines." },
    ],
  },
  "PMFC sur cultures de mil et sorgho": {
    difficulty: "Moyen",
    cost: "20–40€",
    materials: ["Plaques de graphite ou charbon de bois pilé", "Grillage inox", "Fil de cuivre", "Sol humide des champs"],
    steps: [
      { step: "Préparez les électrodes", detail: "Pilez du charbon de bois finement. Étalez-le entre 2 grillages inox — c'est votre anode et cathode." },
      { step: "Enterrez près des racines", detail: "Placez l'anode à 10cm de profondeur près des racines de mil/sorgho. La cathode reste en surface." },
      { step: "Connectez", detail: "Reliez anode et cathode. Les bactéries du sol décomposent les exsudats racinaires → production d'électrons." },
      { step: "Alimentez un capteur", detail: "4-6 cellules en série = assez pour un capteur d'humidité du sol fonctionnant 24/7." },
    ],
  },
  "Spiruline en photobioréacteur simple": {
    difficulty: "Facile",
    cost: "15–30€",
    materials: ["Bassine transparente (10-20L)", "Culture starter de spiruline", "Bicarbonate de soude", "Sel", "Agitateur (cuillère en bois)"],
    steps: [
      { step: "Préparez le milieu", detail: "Eau tiède + 8g/L de bicarbonate + 5g/L de sel. Le pH doit être entre 9 et 11." },
      { step: "Ensemencez", detail: "Ajoutez 10-20% de volume en culture starter. Placez au soleil (pas direct, lumière forte suffit)." },
      { step: "Agitez 2x/jour", detail: "Brassez matin et soir pour homogénéiser. En 2 semaines, l'eau est vert foncé." },
      { step: "Récoltez", detail: "Filtrez avec un tissu fin. La pâte verte est de la spiruline fraîche — séchez-la au soleil. Super-aliment gratuit." },
    ],
  },
  "Biogaz à partir de résidus de manioc et plantain": {
    difficulty: "Moyen",
    cost: "50–100€",
    materials: ["Bidon plastique 200L avec couvercle hermétique", "Tuyau de sortie gaz", "Valve anti-retour", "Résidus de manioc/plantain", "Eau"],
    steps: [
      { step: "Préparez le digesteur", detail: "Percez le couvercle du bidon pour y fixer le tuyau de sortie gaz avec la valve anti-retour." },
      { step: "Chargez la matière", detail: "Mélangez les épluchures de manioc/plantain avec de l'eau (ratio 1:1). Remplissez le bidon aux 2/3." },
      { step: "Fermez hermétiquement", detail: "Scellez le couvercle. En 2-3 semaines à 25-35°C, la fermentation produit du méthane." },
      { step: "Utilisez le gaz", detail: "Le biogaz sort par le tuyau — raccordez à un brûleur de camping pour la cuisson. 1 bidon = 2-3 semaines de cuisson." },
    ],
  },
  "Douche cyclique communautaire": {
    difficulty: "Moyen",
    cost: "100–200€",
    materials: ["Réservoir 50L", "Pompe solaire 12V", "Filtre à sable", "Biofiltre algal (seau + spiruline)", "Tuyaux", "Pomme de douche"],
    steps: [
      { step: "Installez le circuit", detail: "Pomme → bac de récupération → filtre à sable → biofiltre algal → réservoir → pompe → retour pomme." },
      { step: "Le filtre à sable", detail: "Remplissez un seau de couches : gravier, sable grossier, sable fin, charbon. L'eau traverse par gravité." },
      { step: "Le biofiltre", detail: "Un 2e seau avec culture d'algues élimine les savons et bactéries restantes." },
      { step: "Résultat", detail: "50L d'eau servent à 20-30 douches. La pompe solaire rend le système autonome en énergie." },
    ],
  },

  // ── Index page technologies ──
  "L'eau": {
    difficulty: "Moyen",
    cost: "80–150€",
    materials: ["Pompe d'aquarium", "Biofiltre algal (spiruline)", "Filtre charbon", "Tuyaux silicone"],
    steps: [
      { step: "Montez le circuit fermé", detail: "Pomme de douche → bac → pompe → filtre charbon → biofiltre algal → retour." },
      { step: "Les algues font le travail", detail: "Spiruline ou chlorella absorbent les impuretés et savons biodégradables." },
      { step: "5 litres suffisent", detail: "L'eau tourne en boucle — vous économisez 54 000 litres par an." },
    ],
  },
  "L'air": {
    difficulty: "Moyen",
    cost: "60–120€",
    materials: ["Aquarium plat ou sac transparent", "Pompe à air", "Culture de chlorella", "Nutriments"],
    steps: [
      { step: "Fabriquez un panneau d'algues", detail: "Remplissez un contenant plat transparent avec de l'eau + chlorella." },
      { step: "Aérez", detail: "La pompe à air fait circuler les bulles — photosynthèse maximale." },
      { step: "Accrochez au mur", detail: "Près d'une fenêtre : le panneau absorbe le CO₂ et rejette de l'O₂ pur." },
    ],
  },
  "L'IoT ultra-basse conso": {
    difficulty: "Facile",
    cost: "15–30€",
    materials: ["Pot de fleurs", "Électrodes zinc + cuivre", "Capteur DHT11", "Arduino Nano"],
    steps: [
      { step: "Plantez les électrodes dans le pot", detail: "Zinc et cuivre dans le terreau humide, espacés de 10cm." },
      { step: "Connectez le capteur", detail: "Le courant produit par les bactéries du sol alimente le capteur via un condensateur." },
      { step: "Plus jamais de piles", detail: "Le pot alimente le capteur domotique indéfiniment tant que la plante vit." },
    ],
  },
  "L'éclairage d'ambiance": {
    difficulty: "Facile",
    cost: "20–40€",
    materials: ["Flacon en verre", "Dinoflagellés bioluminescents", "Eau de mer artificielle", "Nutriments F/2"],
    steps: [
      { step: "Préparez la bio-lampe", detail: "Eau de mer + culture bioluminescente dans un flacon transparent." },
      { step: "Cycle jour/nuit", detail: "12h de lumière indirecte, 12h d'obscurité. Les organismes se rechargent." },
      { step: "Secouez doucement le soir", detail: "Une lumière bleue douce apparaît — veilleuse vivante, zéro électricité." },
    ],
  },
  "Les matériaux": {
    difficulty: "Moyen",
    cost: "30–60€",
    materials: ["Agar-agar alimentaire", "Glycérine végétale", "Eau", "Moules en silicone"],
    steps: [
      { step: "Mélangez agar + eau + glycérine", detail: "15g agar + 500ml eau + 5ml glycérine. Chauffez à ébullition." },
      { step: "Moulez et séchez", detail: "Versez dans des moules, laissez sécher 3-5 jours." },
      { step: "Bioplastique maison", detail: "Résultat : objets rigides, résistants, 100% compostables." },
    ],
  },
  "Le stockage": {
    difficulty: "Avancé",
    cost: "40–80€",
    materials: ["Rhubarbe (source de quinones)", "Bocaux verre", "Électrodes graphite", "Membrane céramique"],
    steps: [
      { step: "Extrayez les quinones", detail: "Infusez la rhubarbe dans de l'eau acidifiée. Filtrez." },
      { step: "Construisez la cellule", detail: "2 bocaux séparés par une membrane, avec électrodes graphite." },
      { step: "Chargez et déchargez", detail: "Appliquez 1.5V pour charger. Les quinones stockent l'énergie de manière réversible." },
    ],
  },
};
