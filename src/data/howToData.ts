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

  // ── Pack Autonomie modules ──
  "Module Biogaz — Le cœur du système": {
    difficulty: "Avancé",
    cost: "Version mini : 100–200€",
    materials: ["Bidon 60L hermétique", "Tuyau gaz + valve anti-retour", "Résidus végétaux (épluchures, algues)", "Brûleur de camping", "Thermomètre"],
    steps: [
      { step: "Construisez le digesteur", detail: "Percez le bidon pour y fixer le tuyau de sortie gaz. Ajoutez un mélange eau + matière organique (épluchures, herbe coupée)." },
      { step: "Maintenez la température", detail: "Les bactéries travaillent entre 25-40°C. En intérieur ou dans un endroit ensoleillé. Brassez tous les 2 jours." },
      { step: "Récoltez le biogaz", detail: "En 2-3 semaines, du méthane sort par le tuyau. Testez avec une flamme (précaution : en extérieur !)." },
      { step: "Cuisinez au biogaz", detail: "Raccordez à un brûleur de camping. Un bidon de 60L = environ 1 semaine de cuisson légère." },
    ],
  },
  "Module Hydrogène — Chauffage & Cuisson": {
    difficulty: "Avancé",
    cost: "Version démo : 50–100€",
    materials: ["Panneau solaire petit (5W)", "Eau distillée", "2 électrodes inox", "Récipient en verre", "Tuyau de récupération gaz"],
    steps: [
      { step: "Montez l'électrolyseur", detail: "Plongez 2 plaques d'inox dans l'eau distillée. Connectez au panneau solaire. Des bulles apparaissent : c'est l'hydrogène." },
      { step: "Récupérez le gaz", detail: "Retournez un entonnoir au-dessus d'une électrode et raccordez un tuyau. Le H₂ se collecte par déplacement d'eau." },
      { step: "Observez la réaction", detail: "Le panneau solaire sépare l'eau en H₂ + O₂. C'est le principe exact des feuilles artificielles à grande échelle." },
      { step: "Comprenez le potentiel", detail: "À l'échelle d'un balcon (5-10m²), des feuilles artificielles produiraient assez d'H₂ pour la cuisson quotidienne." },
    ],
  },
  "Module Stockage — Batterie quinone + PMFC": {
    difficulty: "Moyen",
    cost: "60–120€",
    materials: ["Rhubarbe ou carthame", "6 pots de menthe", "Électrodes zinc + cuivre (×6)", "Fil de cuivre", "LED basse conso", "Condensateur 1F (optionnel)"],
    steps: [
      { step: "Créez la batterie quinone", detail: "Extrait de rhubarbe + bocaux + membrane = batterie organique rechargeable (voir guide quinone)." },
      { step: "Montez les 6 pots PMFC", detail: "Chaque pot : plante + 2 électrodes dans le sol humide. Connectez les 6 en série = ~3-4V." },
      { step: "Connectez au condensateur", detail: "Le condensateur accumule l'énergie des pots et la restitue en pic pour alimenter un capteur ou une LED." },
      { step: "Résultat", detail: "Vos plantes d'intérieur alimentent capteurs et veilleuses 24/7. Zéro pile, zéro facture, zéro déchet." },
    ],
  },
  "Module Eau & Air — Économie 90%": {
    difficulty: "Moyen",
    cost: "80–180€",
    materials: ["Pompe d'aquarium", "Filtre charbon actif", "Culture spiruline", "Bocal 5L", "Aquarium plat pour panneau mural", "Pompe à air"],
    steps: [
      { step: "Montez la douche cyclique", detail: "Circuit fermé : pomme → bac → filtre charbon → biofiltre spiruline → retour. 5L suffisent." },
      { step: "Fabriquez le panneau à algues", detail: "Remplissez l'aquarium plat de chlorella + eau + nutriments. Fixez au mur près d'une fenêtre." },
      { step: "Connectez la pompe à air", detail: "Les bulles brassent les algues dans le panneau = photosynthèse maximale = absorption CO₂." },
      { step: "Boucle fermée", detail: "L'excédent d'algues du panneau alimente le digesteur biogaz. L'eau de la douche arrose les plantes PMFC. Tout est connecté." },
    ],
  },

  // ── Santé & Médecine (compléments) ──
  "Nano-transporteurs à virus de plantes": {
    difficulty: "Avancé",
    cost: "10–20€ (démo)",
    materials: ["Feuilles de tabac ou tomate", "Mixeur", "Filtre à café", "Microscope (optionnel)"],
    steps: [
      { step: "Récupérez les virus végétaux", detail: "Les feuilles de tabac contiennent naturellement le TMV — inoffensif pour l'homme." },
      { step: "Broyez et filtrez", detail: "Mixez les feuilles dans de l'eau, filtrez. Le liquide contient des nanoparticules virales tubulaires." },
      { step: "Observez au microscope", detail: "Au ×400, vous voyez les cristaux de TMV — les mêmes structures utilisées en nano-médecine." },
      { step: "Comprenez", detail: "Ces tubes creux naturels transportent des molécules médicamenteuses — comme des nano-seringues végétales." },
    ],
  },
  "Capteurs médicaux biodégradables": {
    difficulty: "Moyen",
    cost: "15–30€",
    materials: ["Papier cellulose épais", "Crayon graphite 9B", "Ruban adhésif cuivre", "LED", "Multimètre", "Sel + eau"],
    steps: [
      { step: "Dessinez le circuit au graphite", detail: "Sur le papier cellulose, tracez un circuit au crayon (appuyez fort — le graphite conduit)." },
      { step: "Ajoutez les contacts cuivre", detail: "Collez du ruban cuivre aux extrémités. Connectez une LED pour vérifier." },
      { step: "Testez la détection", detail: "Déposez une goutte d'eau salée : la résistance change. C'est le principe d'un biocapteur." },
      { step: "Biodégradez", detail: "Plongez dans l'eau : en 48h, tout se dissout. Zéro déchet électronique." },
    ],
  },
  "Batteries implantables à mélanine": {
    difficulty: "Moyen",
    cost: "10–20€",
    materials: ["Encre de seiche", "Électrodes cuivre/zinc", "Eau salée", "Bocal", "Multimètre"],
    steps: [
      { step: "Préparez l'électrolyte", detail: "Diluez l'encre de seiche dans l'eau salée. La mélanine est un semi-conducteur naturel." },
      { step: "Immergez les électrodes", detail: "Zinc + cuivre dans la solution. Mesurez : ~0.5-0.8V." },
      { step: "Observez la recharge", detail: "La mélanine interagit avec les ions sodium — principe des batteries Na-ion biocompatibles." },
      { step: "Application médicale", detail: "En miniaturisant, ce type de pile alimenterait un implant temporaire biodégradable." },
    ],
  },
  "Patch cutané BPV pour suivi vasculaire": {
    difficulty: "Moyen",
    cost: "20–40€",
    materials: ["Culture de spiruline vivante", "Film transparent adhésif", "Feuille d'aluminium", "LED rouge", "Photorésistance LDR"],
    steps: [
      { step: "Créez le bio-panneau", detail: "Spiruline vivante entre 2 films transparents = cellule photovoltaïque biologique." },
      { step: "Connectez les électrodes", detail: "Feuilles d'alu de chaque côté. Sous la lumière, les algues produisent un micro-courant." },
      { step: "Ajoutez le capteur optique", detail: "LED rouge éclaire la peau, la photorésistance mesure la pulsation cardiaque." },
      { step: "Résultat", detail: "Monitoring vasculaire alimenté par la photosynthèse, sans pile." },
    ],
  },
  "AquaMR Flow — cockpit vasculaire vert": {
    difficulty: "Facile",
    cost: "5–15€",
    materials: ["Betteraves (3)", "Mixeur", "Aimant néodyme", "Tube transparent", "Colorant bleu"],
    steps: [
      { step: "Extrayez la bétalaïne", detail: "Mixez les betteraves, filtrez. Ce pigment est paramagnétique." },
      { step: "Simulez un vaisseau", detail: "Tube + jus + colorant bleu = modèle de vaisseau sanguin." },
      { step: "Testez au magnétique", detail: "L'aimant fait réagir le mélange — c'est l'interaction utilisée en IRM." },
      { step: "Le concept AquaMR", detail: "La bétalaïne remplace le gadolinium toxique pour visualiser les vaisseaux en IRM." },
    ],
  },

  // ── Urbanisme (compléments) ──
  "Façades à photobioréacteurs": {
    difficulty: "Avancé",
    cost: "100–200€ (prototype)",
    materials: ["Tubes PVC transparents (2m × 4)", "Raccords T", "Pompe d'aquarium", "Culture chlorella", "Cadre bois"],
    steps: [
      { step: "Montez le serpentin", detail: "4 tubes verticaux reliés en serpentin dans un cadre bois." },
      { step: "Remplissez", detail: "Eau + nutriments + chlorella. La pompe fait circuler en boucle." },
      { step: "Fixez au mur ensoleillé", detail: "Capture CO₂, produit O₂, isole thermiquement. Triple fonction." },
      { step: "Récoltez", detail: "Toutes les 2-3 semaines, la biomasse algale devient engrais ou alimentation pour digesteur." },
    ],
  },
  "Traitement des eaux urbaines par PMFC": {
    difficulty: "Moyen",
    cost: "40–80€",
    materials: ["Grand bac (50L+)", "Terre de jardin", "Roseaux ou joncs", "Électrodes graphite", "Fil de cuivre"],
    steps: [
      { step: "Créez la zone humide", detail: "Bac de terre saturée d'eau + roseaux plantés." },
      { step: "Ajoutez les eaux grises", detail: "Eau de vaisselle/douche. Les racines et bactéries décomposent les polluants." },
      { step: "Installez les PMFC", detail: "Électrodes dans le sol humide : les bactéries libèrent des électrons en décomposant." },
      { step: "Double résultat", detail: "Eau purifiée + électricité produite. Mini-station d'épuration domestique." },
    ],
  },
  "Réseau IoT urbain alimenté par les plantes": {
    difficulty: "Moyen",
    cost: "30–60€",
    materials: ["3-4 jardinières", "Électrodes graphite (×8)", "ESP32 + DHT22", "Supercap 5.5V 1F"],
    steps: [
      { step: "Préparez les jardinières PMFC", detail: "2 électrodes par jardinière. 4 en série = ~2-3V." },
      { step: "Chargez le condensateur", detail: "Les PMFC chargent le supercap en 4-6h." },
      { step: "Programmez l'ESP32", detail: "Deep-sleep 99%. Réveil toutes les 15 min : lecture → envoi WiFi → veille." },
      { step: "Chaque jardinière = un capteur", detail: "Qualité d'air, température, humidité. Zéro infrastructure." },
    ],
  },
  "Mobilier urbain en bioplastique algal": {
    difficulty: "Moyen",
    cost: "20–50€ (maquette)",
    materials: ["Agar-agar (100g)", "Glycérine", "Spiruline (colorant)", "Moule en carton", "Eau"],
    steps: [
      { step: "Préparez", detail: "30g agar + 1L eau + glycérine + spiruline. Ébullition." },
      { step: "Moulez un mini-banc", detail: "Versez dans un moule en carton renforcé." },
      { step: "Séchez 5-7 jours", detail: "Le résultat est dur, coloré, 100% compostable." },
      { step: "À l'échelle urbaine", detail: "Mêmes moules en grand = mobilier de ville entièrement biodégradable." },
    ],
  },
  "Filtres GoGreen sur flottes de bus": {
    difficulty: "Avancé",
    cost: "60–120€",
    materials: ["Tube transparent large", "Culture chlorella dense", "Pompe à air", "Adaptateur tuyau", "Nutriments"],
    steps: [
      { step: "Construisez le bioréacteur", detail: "Tube rempli de chlorella + eau + nutriments. Pompe pour le brassage." },
      { step: "Canalisez le CO₂", detail: "L'adaptateur dirige l'air vicié vers le tube d'algues." },
      { step: "Absorption biologique", detail: "Le CO₂ est absorbé par photosynthèse. Plus de CO₂ = croissance plus rapide." },
      { step: "Recyclage", detail: "La biomasse produite = biocombustible ou engrais. Le gaz sort purifié." },
    ],
  },

  // ── Agriculture (compléments) ──
  "Recyclage des eaux grises par biofiltre algal": {
    difficulty: "Moyen",
    cost: "40–80€",
    materials: ["Bac 30L", "Culture chlorella", "Filtre à sable", "Tuyaux", "Robinet"],
    steps: [
      { step: "Collectez les eaux grises", detail: "Eau de vaisselle/douche (sans javel) dans un bac de décantation." },
      { step: "Filtrez au sable", detail: "Gravier → sable grossier → sable fin. Élimine les grosses particules." },
      { step: "Biofiltre algal", detail: "L'eau pré-filtrée entre dans le bac de chlorella. Les algues purifient." },
      { step: "Arrosez votre jardin", detail: "L'eau est propre pour l'irrigation. Les algues deviennent de l'engrais." },
    ],
  },
  "Microalgues comme superaliment": {
    difficulty: "Facile",
    cost: "15–30€",
    materials: ["Bassine 10-20L", "Culture starter spiruline", "Bicarbonate", "Sel", "Tissu filtrant"],
    steps: [
      { step: "Milieu de culture", detail: "Eau tiède + 8g/L bicarbonate + 5g/L sel. pH 9-11." },
      { step: "Ensemencez", detail: "20% de volume en starter. Au soleil indirect." },
      { step: "Récoltez en 2 semaines", detail: "Filtrez au tissu. Pâte verte = spiruline fraîche." },
      { step: "60% de protéines", detail: "Fraîche en smoothie ou séchée en poudre. Super-aliment complet." },
    ],
  },
  "Films alimentaires en bioplastique algal": {
    difficulty: "Facile",
    cost: "5–10€",
    materials: ["Agar-agar (5g)", "Eau (200ml)", "Glycérine (2ml)", "Plaque lisse"],
    steps: [
      { step: "Dissolvez l'agar", detail: "Chauffez eau + agar + glycérine à ébullition." },
      { step: "Coulez en film mince", detail: "Étalez sur une plaque lisse. Séchage 24-48h." },
      { step: "Décollez", detail: "Le film est souple, transparent, étanche." },
      { step: "Remplace le plastique", detail: "Emballez vos aliments. Se composte en 4 semaines." },
    ],
  },
  "Biomasse algale comme engrais": {
    difficulty: "Facile",
    cost: "0€ (sous-produit)",
    materials: ["Algues récoltées", "Plateau de séchage", "Sol de jardin"],
    steps: [
      { step: "Récoltez l'excédent", detail: "Filtrez le surplus de vos cultures d'algues." },
      { step: "Séchez au soleil", detail: "2-3 jours → poudre verte." },
      { step: "Mélangez au sol", detail: "Incorporez au terreau ou arrosez avec l'eau résiduelle." },
      { step: "Croissance +30%", detail: "Engrais naturel, gratuit, en boucle fermée." },
    ],
  },

  // ── Éducation & Recherche ──
  "Kits PMFC pour écoles": {
    difficulty: "Facile",
    cost: "10–20€",
    materials: ["Pot de fleurs", "Menthe ou basilic", "Électrodes zinc + cuivre", "LED rouge", "Multimètre"],
    steps: [
      { step: "Plantez et arrosez", detail: "Plante dans le pot, terreau bien humide." },
      { step: "Électrodes dans le sol", detail: "Zinc et cuivre espacés de 10cm." },
      { step: "Mesurez", detail: "Multimètre : ~0.3-0.7V par pot." },
      { step: "4 pots = 1 LED", detail: "En série, assez pour allumer une LED rouge. Bioélectricité en direct." },
    ],
  },
  "Mini-photobioréacteurs de classe": {
    difficulty: "Facile",
    cost: "15–25€",
    materials: ["Bouteille PET 1.5L", "Culture chlorella", "Pompe à air d'aquarium", "Nutriments"],
    steps: [
      { step: "Remplissez", detail: "Eau + nutriments + chlorella. Laissez 5cm d'air." },
      { step: "Branchez la pompe", detail: "Les bulles brassent et apportent du CO₂." },
      { step: "Près d'une fenêtre", detail: "En 1 semaine, l'eau est vert vif — photosynthèse visible !" },
      { step: "Mesurez le CO₂", detail: "Jus de chou rouge comme indicateur pH : les algues absorbent le CO₂." },
    ],
  },
  "Circuits biodégradables pour TP électronique": {
    difficulty: "Moyen",
    cost: "10–20€",
    materials: ["Papier cellulose", "Crayon graphite 9B", "Ruban cuivre", "LED", "Pile bouton"],
    steps: [
      { step: "Dessinez le circuit", detail: "Pistes au crayon 9B — le graphite conduit." },
      { step: "Ajoutez composants", detail: "LED + ruban cuivre. Connectez à une pile pour tester." },
      { step: "Itérez", detail: "Effacez et re-dessinez. Prototypage instantané." },
      { step: "Compostez", detail: "En fin de TP, tout se composte. Zéro e-waste." },
    ],
  },
  "Jardins bioluminescents pédagogiques": {
    difficulty: "Facile",
    cost: "25–50€",
    materials: ["Flacons verre (×5)", "Dinoflagellés", "Eau de mer artificielle", "Nutriments F/2"],
    steps: [
      { step: "5 bio-lampes", detail: "Chaque flacon : eau de mer + dinoflagellés. Formes variées." },
      { step: "Cycle lumière", detail: "12h lumière / 12h obscurité. Près d'une fenêtre." },
      { step: "Séance nocturne", detail: "Rideaux tirés → les flacons brillent d'un bleu magique." },
      { step: "Biologie en action", detail: "Luciférine + luciférase = lumière. Même mécanisme que les lucioles." },
    ],
  },

  // ── Industrie & Fabrication ──
  "Bioplastiques PHA à grande échelle": {
    difficulty: "Moyen",
    cost: "15–30€",
    materials: ["Agar-agar", "Amidon de maïs", "Glycérine", "Vinaigre", "Moules variés"],
    steps: [
      { step: "Mélangez", detail: "1 dose agar + 1 dose amidon + eau + glycérine + vinaigre. Chauffez." },
      { step: "Variez les recettes", detail: "Plus d'amidon = rigide. Plus de glycérine = souple." },
      { step: "Moulez et séchez", detail: "3-5 jours. Résultat étonnamment solide." },
      { step: "Testez la biodégradation", detail: "Enterrez : 4-8 semaines → disparu. Plastique classique : 400 ans." },
    ],
  },
  "Scrubbers industriels à microalgues": {
    difficulty: "Moyen",
    cost: "50–100€",
    materials: ["Grand tube transparent", "Culture chlorella", "Pompe à air", "Vinaigre + bicarbonate (CO₂)", "pH-mètre"],
    steps: [
      { step: "Bioréacteur vertical", detail: "Tube rempli de chlorella. Pompe à air en continu." },
      { step: "Injectez du CO₂", detail: "Vinaigre + bicarbonate → CO₂ canalisé dans le tube." },
      { step: "Mesurez l'absorption", detail: "Le pH monte — les algues alcalinisent en absorbant le CO₂." },
      { step: "À l'échelle industrielle", detail: "1 tonne d'algues absorbe ~1.8 tonnes de CO₂. Sur les cheminées d'usines." },
    ],
  },
  "Teintures algales et fibres PHA": {
    difficulty: "Facile",
    cost: "10–20€",
    materials: ["Spiruline en poudre", "Betterave", "Curcuma", "Vinaigre", "Tissu blanc coton"],
    steps: [
      { step: "3 bains de teinture", detail: "Spiruline = bleu-vert. Betterave = rose. Curcuma = jaune." },
      { step: "Trempez le tissu 1-2h", detail: "Ajoutez du vinaigre comme fixateur." },
      { step: "Séchez", detail: "Couleurs vives, naturelles, zéro chimie." },
      { step: "Comparez", detail: "L'industrie textile utilise 20 000 produits chimiques. Ici : zéro." },
    ],
  },
  "Circuits imprimés biodégradables": {
    difficulty: "Moyen",
    cost: "10–15€",
    materials: ["Papier cellulose", "Crayon graphite", "Ruban cuivre", "LED", "Composants récupérés"],
    steps: [
      { step: "Pistes au graphite", detail: "Dessinez sur papier cellulose avec un 9B conducteur." },
      { step: "Connexions cuivre", detail: "Ruban cuivre adhésif — pas de soudure." },
      { step: "Testez", detail: "La LED s'allume. Circuit fonctionnel sur papier." },
      { step: "Compostez", detail: "Retirez les composants réutilisables. Le reste se composte." },
    ],
  },
  "Batteries à flux quinone pour stockage industriel": {
    difficulty: "Avancé",
    cost: "50–100€",
    materials: ["Rhubarbe (500g)", "Bocaux 2L (×2)", "Membrane céramique", "Électrodes graphite larges", "Pompe péristaltique"],
    steps: [
      { step: "Extraction en quantité", detail: "500g rhubarbe bouillie dans 2L d'eau acidifiée. Filtrez." },
      { step: "Cellule à flux", detail: "2 bocaux reliés par membrane + pompe de circulation." },
      { step: "Chargez à 3V", detail: "2 piles AA en série. Les quinones stockent l'énergie." },
      { step: "Scalez", detail: "En industrie : cuves de 1000L. Même principe, capacité MWh. Sans lithium." },
    ],
  },

  // ── Pays en développement ──
  "Feuilles artificielles pour H₂ en zone rurale": {
    difficulty: "Moyen",
    cost: "40–80€",
    materials: ["Panneau solaire 5W", "Eau", "Électrodes inox", "Récipient", "Tuyau gaz"],
    steps: [
      { step: "Électrolyseur solaire", detail: "Panneau → électrodes dans l'eau. Le soleil sépare H₂O en H₂ + O₂." },
      { step: "Collectez le H₂", detail: "Entonnoir inversé → tuyau. Stockage par déplacement d'eau." },
      { step: "Testez", detail: "Allumette → le H₂ brûle avec un 'pop'. Énergie propre." },
      { step: "À l'échelle village", detail: "Des feuilles artificielles sur un toit remplacent le charbon de bois." },
    ],
  },
  "Purification d'eau par PMFC + algues": {
    difficulty: "Moyen",
    cost: "30–60€",
    materials: ["Bac 20L", "Lentilles d'eau", "Électrodes graphite", "Culture chlorella"],
    steps: [
      { step: "Zone humide artificielle", detail: "Bac + terre + eau polluée + lentilles d'eau." },
      { step: "PMFC intégrées", detail: "Électrodes dans le sol. Les bactéries épuratrices génèrent de l'électricité." },
      { step: "Étape algale", detail: "L'eau pré-purifiée passe dans un bac de chlorella." },
      { step: "94% de réduction", detail: "Eau potabilisée + électricité en bonus." },
    ],
  },
  "AquaMR Mobile — imagerie portable": {
    difficulty: "Facile",
    cost: "5–10€",
    materials: ["Betteraves", "Mixeur", "Aimant puissant", "Tube transparent"],
    steps: [
      { step: "Jus de betterave", detail: "Bétalaïne paramagnétique = agent de contraste végétal." },
      { step: "Simulez l'IRM", detail: "Tube + jus + aimant. Le liquide réagit visuellement." },
      { step: "Le concept", detail: "IRM bas-champ portable + agent végétal = imagerie sans infrastructure." },
      { step: "L'impact", detail: "Pour 2,3 milliards de personnes sans accès IRM." },
    ],
  },
  "Éclairage bioluminescent sans réseau": {
    difficulty: "Facile",
    cost: "20–40€",
    materials: ["Flacons verre", "Dinoflagellés", "Eau de mer", "Nutriments F/2"],
    steps: [
      { step: "Lampes vivantes", detail: "Chaque flacon : eau de mer + culture bioluminescente." },
      { step: "Cycle solaire naturel", detail: "Le soleil fait le cycle jour/nuit." },
      { step: "Disposez dans le village", detail: "Accrochez aux entrées, le long des chemins." },
      { step: "Aucune infrastructure", detail: "Pas de câbles, pas de panneaux, pas de vol possible." },
    ],
  },
  "Fermes à spiruline": {
    difficulty: "Facile",
    cost: "20–40€",
    materials: ["Bassine 20L", "Starter spiruline", "Bicarbonate", "Sel", "Tissu filtrant"],
    steps: [
      { step: "Bassin simple", detail: "Ombre partielle. Eau + bicarbonate 8g/L + sel 5g/L." },
      { step: "Ensemencez 20%", detail: "Brassez 2x/jour." },
      { step: "Récoltez en 2 semaines", detail: "Filtrez au tissu. Séchez au soleil." },
      { step: "10g/jour = une famille nourrie", detail: "60% des besoins en protéines d'un enfant." },
    ],
  },
  "Biocapteurs de qualité d'eau bioluminescents": {
    difficulty: "Moyen",
    cost: "25–50€",
    materials: ["Vibrio fischeri (bactérie lumineuse)", "Eau de mer", "Échantillons d'eau", "Flacons", "Boîte noire"],
    steps: [
      { step: "Cultivez les bactéries", detail: "Vibrio fischeri dans eau de mer + nutriments. Le flacon brille en 24h." },
      { step: "Testez différentes eaux", detail: "Divisez la culture. Ajoutez des échantillons à chaque flacon." },
      { step: "Observez dans le noir", detail: "Eau propre = lumière forte. Eau polluée = lumière faible." },
      { step: "Test de toxicité instantané", detail: "Visuel, sans labo, sans électricité." },
    ],
  },

  // ── Tourisme & Hôtellerie ──
  "Douches cycliques dans chaque chambre": {
    difficulty: "Moyen",
    cost: "80–150€",
    materials: ["Pompe d'aquarium", "Filtre charbon", "Biofiltre spiruline", "Tuyaux silicone"],
    steps: [
      { step: "Circuit fermé standard", detail: "Pomme → bac → filtre charbon → biofiltre → retour." },
      { step: "×100 chambres", detail: "5 400 000 L d'eau économisés/an. Rentabilité immédiate." },
      { step: "Auto-entretien", detail: "Le biofiltre se renouvelle naturellement." },
      { step: "Marketing vert", detail: "Affichez l'économie en temps réel. Les clients adorent." },
    ],
  },
  "Jardins et couloirs bioluminescents": {
    difficulty: "Moyen",
    cost: "50–100€",
    materials: ["Tubes transparents (2-3m)", "Dinoflagellés", "Eau de mer", "Supports muraux"],
    steps: [
      { step: "Tubes vivants", detail: "Fixés le long des couloirs et chemins de jardin." },
      { step: "Cycle automatique", detail: "Timer LED pour la recharge diurne." },
      { step: "Expérience immersive", detail: "Couloirs qui pulsent d'un bleu organique. Zéro pollution lumineuse." },
      { step: "Avis 5 étoiles", detail: "Ce n'est pas juste de l'éclairage, c'est une expérience." },
    ],
  },
  "Spa-resort à façade algale": {
    difficulty: "Avancé",
    cost: "150–300€ (maquette)",
    materials: ["Tubes PVC transparents (×6)", "Culture chlorella", "Pompe", "Cadre bois 1×2m"],
    steps: [
      { step: "Panneau façade", detail: "6 tubes verticaux en serpentin dans un cadre bois." },
      { step: "Activez", detail: "Eau + chlorella + nutriments. Les tubes deviennent vert émeraude." },
      { step: "Triple fonction", detail: "Filtre CO₂ + ombrage naturel + réduction clim de 20-30%." },
      { step: "Biomasse spa", detail: "Algues récoltées = masques, soins, engrais." },
    ],
  },
  "Amenities en bioplastique algal": {
    difficulty: "Facile",
    cost: "5–15€",
    materials: ["Agar-agar", "Glycérine", "Moules de flacons", "Colorants naturels"],
    steps: [
      { step: "Bioplastique standard", detail: "Agar + eau + glycérine + colorant. Ébullition." },
      { step: "Moulez", detail: "Flacons, coupelles, plateaux. Ajoutez des huiles essentielles." },
      { step: "Séchez 24-48h", detail: "Objets rigides, esthétiques." },
      { step: "100% compostable", detail: "Le client jette dans le compost. Zéro plastique océanique." },
    ],
  },

  // ── Défense, Spatial & Expéditions ──
  "Photobioréacteurs pour stations spatiales": {
    difficulty: "Moyen",
    cost: "30–60€",
    materials: ["Bouteille PET hermétique", "Culture chlorella", "Pompe à air", "Lampe LED croissance"],
    steps: [
      { step: "Système clos", detail: "Bouteille hermétique + chlorella = micro-écosystème fermé." },
      { step: "Mesurez le CO₂", detail: "Jus de chou rouge comme indicateur : le CO₂ diminue, l'O₂ augmente." },
      { step: "Soufflez dedans", detail: "CO₂ humain → algues → O₂. Boucle de vie fermée." },
      { step: "Projet réel", detail: "L'ESA teste déjà ça sur l'ISS (programme MELISSA)." },
    ],
  },
  "BPV pour capteurs en terrain hostile": {
    difficulty: "Moyen",
    cost: "25–50€",
    materials: ["Cyanobactéries", "Film transparent", "Électrodes aluminium", "Capteur température", "Condensateur"],
    steps: [
      { step: "Bio-panneau", detail: "Cyanobactéries entre 2 films avec électrodes." },
      { step: "Exposez à la lumière", detail: "Micro-courant par photosynthèse." },
      { step: "Condensateur tampon", detail: "Accumule et restitue par impulsions." },
      { step: "Zéro logistique", detail: "Pas de batteries à transporter. La lumière suffit." },
    ],
  },
  "Structures temporaires en bioplastique cultivable": {
    difficulty: "Moyen",
    cost: "30–50€",
    materials: ["Agar-agar", "Amidon de maïs", "Glycérine", "Fibres de jute", "Moules plats"],
    steps: [
      { step: "Renforcez", detail: "Agar + amidon + glycérine + fibres de jute = résistance mécanique." },
      { step: "Coulez en panneaux", detail: "Moules 30×50cm. Séchage 5-7 jours." },
      { step: "Assemblez", detail: "Tenons en bois. Abri modulaire." },
      { step: "Fin de mission", detail: "Abandonnez : compostage en 2-3 mois. Zéro trace." },
    ],
  },
  "Feuilles artificielles pour carburant de mission": {
    difficulty: "Moyen",
    cost: "40–80€",
    materials: ["Panneau solaire 5W", "Eau distillée", "Électrodes inox", "Ballon collecteur"],
    steps: [
      { step: "Électrolyse solaire", detail: "Panneau → électrodes → l'H₂ se forme à la cathode." },
      { step: "Collectez", detail: "Le gaz gonfle un ballon sur une journée de soleil." },
      { step: "Brûlez proprement", detail: "L'H₂ ne produit que de l'eau. Carburant le plus propre." },
      { step: "Vision expédition", detail: "Feuilles artificielles sur véhicule = carburant en roulant." },
    ],
  },

  // ── Gouvernance & Politiques publiques ──
  "Normes 'Green Radiology' pour hôpitaux": {
    difficulty: "Facile",
    cost: "0€",
    materials: ["Ordinateur", "Tableur", "Données consommation gadolinium"],
    steps: [
      { step: "Mesurez l'empreinte", detail: "Injections de gadolinium/an × impact environnemental = tableau de bord." },
      { step: "Eco-Impact Score", detail: "CO₂ des IRM + toxicité gadolinium + conso électrique = score composite." },
      { step: "Proposez les alternatives", detail: "Pour chaque examen : un agent végétal (BBCA) peut-il remplacer le gadolinium ?" },
      { step: "Objectif -50%", detail: "Présentez au comité médical. Transition en 3 ans." },
    ],
  },
  "Code du bâtiment intégrant les façades algales": {
    difficulty: "Facile",
    cost: "0€",
    materials: ["Documentation technique", "Comparatif énergétique", "Note pour la mairie"],
    steps: [
      { step: "Chiffrez les gains", detail: "1m² panneau algal : -20% clim, -30kg CO₂/an, production biomasse." },
      { step: "Comparez au solaire", detail: "Même surface : le panneau algal purifie l'air + isole + produit de la biomasse." },
      { step: "Proposition municipale", detail: "Crédit d'impôt pour façades algales, comme pour le solaire." },
      { step: "Précédent : BIQ House", detail: "Hambourg (2013) — premier bâtiment à façade algale au monde." },
    ],
  },
  "Réglementation douche cyclique pour le neuf": {
    difficulty: "Facile",
    cost: "0€",
    materials: ["Données consommation d'eau", "Analyse coût/bénéfice", "Modèle de proposition"],
    steps: [
      { step: "Calculez l'impact", detail: "10 000 logements × 54 000L = 540 millions de litres/an." },
      { step: "ROI : 2,5 ans", detail: "Installation : 500€. Économie : 200€/an." },
      { step: "Proposition réglementaire", detail: "Obligation de pré-équipement en recirculation dans le neuf." },
      { step: "Exemples existants", detail: "Suède et Israël ont déjà des lois similaires." },
    ],
  },
  "Subvention PMFC pour agriculture durable": {
    difficulty: "Facile",
    cost: "0€",
    materials: ["Données PAC", "Chiffrage PMFC/hectare", "Modèle de dossier"],
    steps: [
      { step: "Cadre PAC", detail: "Les PMFC s'intègrent dans les aides agro-écologiques existantes." },
      { step: "Chiffrage", detail: "10 capteurs/ha × 50€ = 500€. Économie piles : 200€/an. ROI : 2,5 ans." },
      { step: "Pilote 10 exploitations", detail: "Proposez à la chambre d'agriculture locale. Coût total : 50 000€." },
      { step: "Publiez les résultats", detail: "Après 1 an : données en continu, zéro maintenance. Le modèle se réplique." },
    ],
  },
  "Programme scolaire 'PhytoTech'": {
    difficulty: "Facile",
    cost: "10–20€ par classe",
    materials: ["Kits PMFC", "Bouteilles photobioréacteurs", "Flacons bioluminescents", "Fiches pédagogiques"],
    steps: [
      { step: "Kit 3-en-1", detail: "1 pot PMFC + 1 photobioréacteur + 1 flacon bioluminescent." },
      { step: "Aligné au programme", detail: "SVT : photosynthèse. Physique : électricité. Chimie : réactions redox." },
      { step: "Clé en main", detail: "Kit + fiches de 4 séances. Aucune compétence spéciale requise." },
      { step: "50 000 classes", detail: "×20€ = 1M€. Le ministère finance déjà des projets EDD." },
    ],
  },
  "Plan national de souveraineté bio-matériaux": {
    difficulty: "Facile",
    cost: "0€",
    materials: ["Données d'importation", "Comparatif bio-matériaux", "Note stratégique"],
    steps: [
      { step: "Cartographiez la dépendance", detail: "100% des terres rares importées (Chine). Batteries : Congo/Chili." },
      { step: "Substituts français", detail: "Quinones (rhubarbe) → batteries. PHA (algues) → plastiques. Cellulose → électronique." },
      { step: "500M€ de marché", detail: "Remplacer 10% des plastiques importés = 10 000 emplois." },
      { step: "Plan Bio-Matériaux 2027", detail: "Budget calqué sur le Plan Hydrogène." },
    ],
  },

  // ── Mode, Cosmétique & Lifestyle ──
  "Vêtements en fibres PHA algales": {
    difficulty: "Moyen",
    cost: "15–30€",
    materials: ["Agar-agar", "Glycérine", "Seringue sans aiguille", "Fil de fer", "Vinaigre"],
    steps: [
      { step: "Préparez le gel", detail: "Agar + eau + glycérine chauffés. Le gel sera extrudé en fibres." },
      { step: "Extrudez", detail: "Seringue → filaments fins dans un bain de vinaigre (coagulation)." },
      { step: "Séchez sur fil de fer", detail: "24h → fils souples et résistants." },
      { step: "Tissez", detail: "La fibre est 100% compostable. La mode sans déchets." },
    ],
  },
  "Colorants spiruline / SeaDyes": {
    difficulty: "Facile",
    cost: "5–15€",
    materials: ["Spiruline", "Betterave", "Curcuma", "Eau chaude", "Tissu blanc"],
    steps: [
      { step: "3 couleurs naturelles", detail: "Spiruline = bleu-vert. Betterave = rose. Curcuma = jaune." },
      { step: "Trempez 1-2h", detail: "Coton blanc dans chaque bain." },
      { step: "Fixez au vinaigre", detail: "Rincez eau froide + vinaigre." },
      { step: "Fast fashion compostable", detail: "Palette complète, zéro chimie." },
    ],
  },
  "Bétalaïnes de betterave en soins": {
    difficulty: "Facile",
    cost: "5–10€",
    materials: ["Betteraves (2)", "Huile de coco", "Cire d'abeille (5g)", "Petit pot verre"],
    steps: [
      { step: "Extrayez", detail: "Mixez les betteraves, filtrez. Bétalaïnes = antioxydant puissant." },
      { step: "Fondez cire + huile", detail: "5g cire d'abeille + 2 cuillères huile de coco + 1 cuillère jus betterave." },
      { step: "Versez dans le pot", detail: "En 1h : baume solide, rose, naturel." },
      { step: "100% comestible", detail: "Baume à lèvres ou crème teintée. Anti-inflammatoire, zéro chimie." },
    ],
  },
  "Flacons en bioplastique algal": {
    difficulty: "Moyen",
    cost: "10–20€",
    materials: ["Agar-agar", "Glycérine", "Moule de flacon (silicone)", "Spiruline (colorant)"],
    steps: [
      { step: "Bioplastique coloré", detail: "Agar + eau + glycérine + spiruline. Ébullition." },
      { step: "Moulez", detail: "Noyau amovible au centre pour un flacon creux." },
      { step: "Séchez 3-5 jours", detail: "Flacon rigide, translucide vert." },
      { step: "Packaging compostable", detail: "Le flacon se composte avec le produit fini." },
    ],
  },

  // ── Afrique compléments restants ──
  "Bioluminescence pour balisage nocturne": {
    difficulty: "Facile",
    cost: "20–40€",
    materials: ["Flacons verre (×5)", "Dinoflagellés", "Eau de mer", "Nutriments", "Ficelle"],
    steps: [
      { step: "Lanternes simples", detail: "Chaque flacon : eau de mer + culture bioluminescente." },
      { step: "Accrochez aux chemins", detail: "Ficelle aux arbres, poteaux, murets." },
      { step: "Le vent active la lumière", detail: "Chaque vibration déclenche la bioluminescence." },
      { step: "Zéro vol possible", detail: "Pas de valeur marchande. Entretien : nutriments toutes les 2 semaines." },
    ],
  },
  "PMFC grande surface en sous-bois de cacao": {
    difficulty: "Moyen",
    cost: "30–60€",
    materials: ["Charbon de bois pilé", "Grillage inox", "Fil de cuivre", "Sol sous cacaoyer"],
    steps: [
      { step: "Électrodes charbon", detail: "Charbon pilé entre 2 grillages = électrode." },
      { step: "Enterrez sous les cacaoyers", detail: "Anode à 10-15cm, cathode en surface. Exsudats riches des racines de cacao." },
      { step: "Réseau de 10 cellules", detail: "En série = capteur de surveillance des cultures." },
      { step: "Auto-surveillance", detail: "La plantation monitore son propre sol 24/7 sans pile." },
    ],
  },
  "Biofiltre algal sur eaux de lavage de cacao": {
    difficulty: "Moyen",
    cost: "30–50€",
    materials: ["Bac 30L", "Culture chlorella", "Filtre à sable", "Eaux de fermentation"],
    steps: [
      { step: "Collectez", detail: "Les eaux de lavage du cacao sont très polluantes." },
      { step: "Pré-filtrez", detail: "Filtre à sable pour les gros résidus." },
      { step: "Biofiltre chlorella", detail: "Les algues absorbent les nutriments et neutralisent le pH." },
      { step: "Double bénéfice", detail: "Eau purifiée + algues-engrais pour les cacaoyers." },
    ],
  },
  "Bioplastique PHA à partir de fibres de palmier": {
    difficulty: "Moyen",
    cost: "10–25€",
    materials: ["Fibres de palmier séchées", "Agar-agar", "Glycérine", "Moules", "Eau"],
    steps: [
      { step: "Broyez les fibres", detail: "Poudre fine = renfort du bioplastique." },
      { step: "Mélangez", detail: "Agar + eau + glycérine + fibres. Plus résistant que l'agar pur." },
      { step: "Moulez", detail: "Contenants, assiettes, plateaux. Séchage 3-5 jours." },
      { step: "Économie circulaire", detail: "Chaque objet local = un plastique importé en moins." },
    ],
  },
  "PMFC en mangrove pour monitoring côtier": {
    difficulty: "Moyen",
    cost: "25–50€",
    materials: ["Électrodes graphite", "Fil de cuivre étanche", "2 clous + multimètre (capteur salinité)", "Boîtier étanche"],
    steps: [
      { step: "En zone de mangrove", detail: "Électrodes dans le sol vaseux. Sol riche = plus de courant." },
      { step: "Capteur de salinité DIY", detail: "2 clous dans l'eau + multimètre. La résistance varie avec le sel." },
      { step: "Surveillance permanente", detail: "Montée des eaux = salinité qui augmente = alerte." },
      { step: "Protection communautaire", detail: "Le monitoring côtier autonome protège les villages." },
    ],
  },
  "Biofiltre algal marin pour dessalement biologique": {
    difficulty: "Moyen",
    cost: "40–80€",
    materials: ["Bac 20L", "Algues marines (Dunaliella)", "Filtre à sable", "Charbon actif"],
    steps: [
      { step: "Pré-filtrez l'eau de mer", detail: "Filtre à sable → eau propre mais encore salée." },
      { step: "Biofiltre marin", detail: "Dunaliella tolère le sel et absorbe contaminants et métaux lourds." },
      { step: "Charbon actif final", detail: "Élimine goûts et odeurs résiduels." },
      { step: "Eau biologiquement purifiée", detail: "Potable après traitement UV solaire." },
    ],
  },
  "Aquaculture + spiruline intégrée": {
    difficulty: "Moyen",
    cost: "30–60€",
    materials: ["Bassine 30L (poissons)", "Bassine 20L (spiruline)", "Tuyau siphon", "Starter spiruline", "Tilapia"],
    steps: [
      { step: "Aquaculture", detail: "Bassine avec poissons. L'eau s'enrichit en nutriments." },
      { step: "Siphonnez vers la spiruline", detail: "L'eau enrichie nourrit les algues." },
      { step: "Retour d'eau propre", detail: "L'eau filtrée retourne aux poissons. Circuit fermé." },
      { step: "Double récolte", detail: "Poissons + spiruline = 2 sources de protéines dans 1 système." },
    ],
  },
  "Bioplastique algal à partir d'algues de récif": {
    difficulty: "Moyen",
    cost: "10–25€",
    materials: ["Agar-agar (algues séchées)", "Glycérine", "Moules", "Eau"],
    steps: [
      { step: "Récoltez les nuisibles", detail: "Les algues qui étouffent les coraux = matière première gratuite." },
      { step: "Transformez", detail: "Agar + glycérine + eau. Chauffez et moulez." },
      { step: "Objets utiles", detail: "Contenants, ustensiles, emballages. Tout compostable." },
      { step: "Dépollution + valorisation", detail: "Récif protégé + objet produit. Économie circulaire marine." },
    ],
  },
  "Micro-CHP biogaz sur résidus de café": {
    difficulty: "Moyen",
    cost: "50–100€",
    materials: ["Bidon 60L hermétique", "Résidus de café", "Tuyau gaz + valve", "Brûleur", "Eau"],
    steps: [
      { step: "Collectez les résidus", detail: "40% de la cerise de café = déchet habituellement jeté." },
      { step: "Chargez le digesteur", detail: "Résidus + eau 1:1 dans le bidon hermétique. 25-35°C." },
      { step: "Biogaz en 2-3 semaines", detail: "Méthane sort par le tuyau avec valve anti-retour." },
      { step: "Cuisinez pour tout le village", detail: "Les résidus d'un village = énergie de cuisson collective." },
    ],
  },
  "Batterie quinone pour stockage jour→nuit": {
    difficulty: "Avancé",
    cost: "50–80€",
    materials: ["Rhubarbe", "Bocaux 2L (×2)", "Membrane céramique", "Électrodes graphite", "Panneau solaire 5W"],
    steps: [
      { step: "Extrayez", detail: "Rhubarbe bouillie dans eau acidifiée → filtrez." },
      { step: "Montez la batterie", detail: "2 bocaux + membrane + électrodes." },
      { step: "Chargez au soleil", detail: "Le panneau solaire charge pendant la journée." },
      { step: "Utilisez la nuit", detail: "LED et capteurs nocturnes alimentés. Sans lithium." },
    ],
  },
  "Bioluminescence pour les chemins de montagne": {
    difficulty: "Facile",
    cost: "25–50€",
    materials: ["Flacons verre épais", "Dinoflagellés", "Eau de mer", "Nutriments", "Corde"],
    steps: [
      { step: "Lanternes robustes", detail: "Verre épais pour résister au froid d'altitude." },
      { step: "Installez tous les 10m", detail: "Accrochez aux arbres ou sur des cairns." },
      { step: "Activation par le vent", detail: "Les rafales agitent les flacons → bioluminescence." },
      { step: "Sécurité sans infrastructure", detail: "Bergers et marcheurs voient le chemin sans lampe." },
    ],
  },
  "Biofiltre sur sources d'altitude": {
    difficulty: "Moyen",
    cost: "20–40€",
    materials: ["Seau 10L", "Culture chlorella", "Filtre à sable", "Tuyau", "Pierres"],
    steps: [
      { step: "Source contaminée", detail: "Souvent polluée en aval par les troupeaux." },
      { step: "Installation par gravité", detail: "Source → filtre sable → bac chlorella → sortie. Aucun pompage." },
      { step: "Chlorella purifie", detail: "Absorbe bactéries et nutriments excédentaires." },
      { step: "Entretien minimal", detail: "Filtre sable 1x/mois. Algues = engrais pour le potager." },
    ],
  },
  "Réseau PMFC en champs d'arachide et maïs": {
    difficulty: "Moyen",
    cost: "30–60€",
    materials: ["Charbon de bois", "Grillage (×4 paires)", "Fil cuivre", "Capteur humidité", "Arduino"],
    steps: [
      { step: "4 cellules PMFC", detail: "Charbon entre 2 grillages. Anode à 10cm, cathode en surface." },
      { step: "Dans le champ", detail: "Espacées de 5m dans les rangs de maïs/arachide." },
      { step: "En série = capteur", detail: "4 cellules = ~2V, assez pour un capteur d'humidité." },
      { step: "Le champ se surveille", detail: "Le paysan reçoit les données sur son téléphone." },
    ],
  },
  "Feuilles artificielles H₂ pour cuisson": {
    difficulty: "Moyen",
    cost: "40–80€",
    materials: ["Panneau solaire 5-10W", "Électrodes inox", "Eau", "Collecteur H₂", "Brûleur"],
    steps: [
      { step: "Électrolyseur solaire", detail: "Panneau → électrodes dans l'eau. H₂ dès que le soleil brille." },
      { step: "Stockez basse pression", detail: "Tube inversé ou ballon." },
      { step: "Remplacez le charbon de bois", detail: "H₂ brûle proprement. Fini la déforestation." },
      { step: "Cause n°1 de déforestation", detail: "La cuisson au charbon éliminée grâce à l'H₂ solaire." },
    ],
  },
  "Capteurs agricoles autonomes PMFC": {
    difficulty: "Moyen",
    cost: "25–50€",
    materials: ["Électrodes graphite", "Capteur DHT11", "Arduino Nano", "Condensateur 1F"],
    steps: [
      { step: "Électrodes dans le sol cultivé", detail: "Entre les rangs. Les racines alimentent le système." },
      { step: "Condensateur tampon", detail: "PMFC → condensateur → Arduino par impulsions." },
      { step: "Mesure toutes les 30 min", detail: "Humidité, température. Envoi radio basse conso." },
      { step: "Zéro maintenance", detail: "Pas de pile, pas de panneau. La plante fait tout." },
    ],
  },
};
