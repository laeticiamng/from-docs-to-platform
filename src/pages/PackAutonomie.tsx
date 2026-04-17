import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";
import HowToGuide from "@/components/HowToGuide";
import { howToGuides } from "@/data/howToData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FlaskConical, Droplets, Zap, Waves, Sprout, Home, Globe, CheckCircle, AlertTriangle,
} from "lucide-react";

const tiers = [
  {
    color: "border-primary/40",
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Module Biogaz — Le cœur du système",
    subtitle: "Produit l'électricité pour le frigo, la TV, le lave-linge",
    price: "~3 500€",
    specs: [
      "Photobioréacteur vertical à algues (2-3 m², balcon ou toiture)",
      "Mini-digesteur anaérobie (convertit la biomasse en biogaz)",
      "Micro-CHP biogaz → électricité + chaleur (1-2 kW)",
      "Production : ~3 000-3 300 kWh/an électrique",
      "Plus que suffisant pour couvrir les 1 300 kWh résiduels",
      "Bonus : la chaleur du CHP préchauffe l'eau sanitaire",
    ],
  },
  {
    color: "border-blue-400/40",
    icon: <Droplets className="w-6 h-6" />,
    title: "Module Hydrogène — Chauffage & Cuisson",
    subtitle: "Remplace le chauffage électrique et les plaques",
    price: "~2 800€",
    specs: [
      "Feuilles artificielles sur balcon/toiture (5-10 m²)",
      "Réservoir hydrogène compact basse pression",
      "Pile à combustible pour chauffage (chaleur directe)",
      "Brûleur H₂ pour cuisson (remplace les plaques)",
      "Production : H₂ suffisant pour chauffage d'appoint + cuisson quotidienne",
      "Complément : chauffe-eau solaire thermique (panneau 2m²)",
    ],
  },
  {
    color: "border-yellow-400/40",
    icon: <Zap className="w-6 h-6" />,
    title: "Module Stockage — Batterie quinone + PMFC",
    subtitle: "Stocke le surplus et couvre les micro-besoins",
    price: "~1 200€",
    specs: [
      "Batterie à flux quinone végétale (2-5 kWh capacité)",
      "6 pots PMFC connectés en série (éclairage LED + capteurs)",
      "Capsules bioluminescentes (veilleuses couloir/salle de bain)",
      "Hub domotique alimenté par PMFC (monitoring complet)",
      "Aucune batterie lithium — 100% organique et biodégradable",
      "Stocke le biogaz-électricité pour les pics (machine à laver)",
    ],
  },
  {
    color: "border-purple-400/40",
    icon: <Waves className="w-6 h-6" />,
    title: "Module Eau & Air — Économie 90%",
    subtitle: "Recirculation douche + purification air intérieur",
    price: "~1 500€",
    specs: [
      "Douche cyclique avec biofiltre algal (5L par douche)",
      "Panneau mural microalgues (60×90 cm, salon ou cuisine)",
      "Le panneau capte le CO₂ intérieur → rejette de l'O₂",
      "La biomasse algale alimente le digesteur (boucle fermée)",
      "Économie eau estimée : ~35 000-45 000 L/an pour un couple [1]",
      "Économie facture eau estimée : ~150-250€/an [1]",
    ],
  },
];

const statusIcons: Record<string, React.ReactNode> = {
  "✅": <CheckCircle className="w-4 h-4 text-primary inline" />,
  "🔶": <AlertTriangle className="w-4 h-4 text-yellow-600 inline" />,
  "❌": <span className="text-destructive font-bold">✗</span>,
};

const readiness = [
  { name: "PMFC (pots producteurs d'électricité)", status: "✅", detail: "Démontré — Plant-e, études universitaires", horizon: "Maintenant" },
  { name: "Douche cyclique", status: "✅", detail: "Commercialisé — ILYA, Orbital, Flow Loop", horizon: "Maintenant" },
  { name: "Photobioréacteur façade/mural", status: "✅", detail: "Démontré — BIQ House, CSTB prototype", horizon: "Maintenant" },
  { name: "Batteries quinone", status: "🔶", detail: "Prototype avancé — Quino Energy (TRL 6-8)", horizon: "2025-2027" },
  { name: "Feuille artificielle scalable", status: "🔶", detail: "Prototype — UNIST 16cm², 11.2% efficacité", horizon: "2026-2028" },
  { name: "Micro-CHP biogaz domestique", status: "✅", detail: "Commercialisé — technologies existantes", horizon: "Maintenant" },
  { name: "Biogaz d'algues domestique", status: "🔶", detail: "Démontré en labo, pas encore en kit", horizon: "2026-2028" },
  { name: "Bioluminescence intérieure", status: "🔶", detail: "Prototypes — Glowee, Woodlight, Light Bio", horizon: "2025-2027" },
  { name: "Biofiltre algal pour douche", status: "🔶", detail: "Démontré en labo (AMBR), pas en kit", horizon: "2026-2028" },
  { name: "Pack intégré tout-en-un", status: "❌", detail: "N'existe pas encore", horizon: "C'est l'opportunité EmotionsCare" },
];

const profiles = [
  { icon: <Sprout className="w-10 h-10" />, title: "Le Curieux", desc: "Veut comprendre et commencer. Achète Le Pot Vivant (49€). Alimente une LED et un capteur.", price: "49€" },
  { icon: <Home className="w-10 h-10" />, title: "L'Éco-Conscient", desc: "Veut réduire sa facture et son impact. Achète le Module Maison (1 490€). Économise l'eau, purifie l'air.", price: "1 490€" },
  { icon: <Zap className="w-10 h-10" />, title: "L'Autonomiste", desc: "Vise l'autonomie énergétique progressive. Pack Autonomie Totale (~9 000€, projection). ROI estimé ~4-6 ans selon usage et hypothèses.", price: "~9 000€" },
  { icon: <Globe className="w-10 h-10" />, title: "Le Bâtisseur", desc: "Veut équiper un village. Achète l'Autonomie Village (12 000€). Éclairage, eau, nourriture pour 50 personnes.", price: "12 000€" },
];

const PackAutonomie = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <SEOHead title="Pack Autonomie Totale — PhytoTech" description="Vivre 100% PhytoTech dans un appartement parisien. Coût estimé ~9 000€, ROI projeté ~4-6 ans. Chiffres indicatifs basés sur la littérature scientifique." path="/pack-autonomie" />
      {/* Hero */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-3xl">
          <Badge variant="secondary" className="font-mono text-xs tracking-wider">
            PACK AUTONOMIE TOTALE
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
            Peut-on vivre <span className="text-primary italic">100% PhytoTech</span> dans un appartement à Paris ?
          </h1>
          <p className="text-lg opacity-70">
            La réponse honnête, les ordres de grandeur, et le chemin technique pour y arriver.
          </p>
          <p className="text-xs opacity-60 max-w-2xl mx-auto">
            Tous les chiffres affichés sur cette page sont des <strong>estimations indicatives</strong> issues de la littérature scientifique et de calculs internes. Le système intégré n'est pas encore commercialisé (voir tableau de maturité plus bas).
          </p>
        </div>
      </section>

      {/* Vrais chiffres */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl text-foreground mb-8">Commençons par les vrais chiffres</h2>
          <Card>
            <CardContent className="p-0">
              <div className="p-6 pb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Consommation réelle d'un appartement parisien (60m², 2 personnes)
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-mono text-xs">Poste</TableHead>
                    <TableHead className="font-mono text-xs">Puissance</TableHead>
                    <TableHead className="font-mono text-xs">Usage/jour</TableHead>
                    <TableHead className="font-mono text-xs text-right">kWh/an</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["Chauffage électrique", "2 000 W", "8h (hiver)", "1 460"],
                    ["Eau chaude (cumulus)", "2 000 W", "3h", "2 190"],
                    ["Réfrigérateur", "100 W", "24h", "438"],
                    ["Machine à laver", "2 000 W", "1h (×3/sem)", "312"],
                    ["Lave-vaisselle", "1 800 W", "1h (×4/sem)", "374"],
                    ["Plaques de cuisson", "2 500 W", "1,5h", "1 369"],
                    ["Télé 4K + box", "150 W", "4h", "219"],
                    ["Éclairage LED", "50 W", "5h", "91"],
                    ["Électronique", "80 W", "6h", "175"],
                  ].map(([a, b, c, d]) => (
                    <TableRow key={a}>
                      <TableCell className="text-sm">{a}</TableCell>
                      <TableCell className="text-sm font-mono">{b}</TableCell>
                      <TableCell className="text-sm">{c}</TableCell>
                      <TableCell className="text-sm text-right font-mono">{d}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-primary/10 font-bold">
                    <TableCell colSpan={3}>TOTAL</TableCell>
                    <TableCell className="text-right text-primary font-mono">~6 600 kWh/an</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Honest warning */}
          <Card className="mt-8 border-destructive/30 bg-destructive/5">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-destructive flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 inline mr-1" /> Soyons honnêtes — le problème de puissance
              </h3>
              <p className="text-sm text-muted-foreground">
                Un pot PMFC produit typiquement <strong className="text-foreground">~10-80 mW/m²</strong> en conditions réelles, l'état de l'art en laboratoire atteignant ~440 mW/m² [2]. Même avec une moyenne optimiste de 23 mW/m², couvrir 6 600 kWh/an demanderait plusieurs milliers de m² de pots. <strong className="text-foreground">Les pots seuls ne suffisent pas</strong> : c'est pourquoi le pack mixe PMFC, biogaz d'algues, hydrogène et solaire thermique.
              </p>
            </CardContent>
          </Card>

          {/* But... */}
          <Card className="mt-4 border-primary/30 bg-primary/5">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Mais le 100% PhytoTech est possible — avec une autre approche
              </h3>
              <p className="text-sm text-muted-foreground">
                La clé : ne pas remplacer watt pour watt, mais <strong className="text-foreground">changer la source d'énergie par poste</strong>. Chauffage et cuisson sur l'hydrogène biologique. Eau chaude via solaire thermique + H₂. Le reste via algues-biogaz + batteries quinone.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategy table */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl text-foreground mb-8">La stratégie : chaque poste a sa source bio</h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-mono text-xs">Poste</TableHead>
                    <TableHead className="font-mono text-xs">Source classique</TableHead>
                    <TableHead className="font-mono text-xs">Source PhytoTech</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["Chauffage", "Électricité (2 000W)", "Pile à H₂ (feuilles artificielles)"],
                    ["Eau chaude", "Cumulus (2 000W)", "Chauffe-eau solaire + H₂ backup"],
                    ["Cuisson", "Plaques (2 500W)", "Brûleur H₂ ou biogaz d'algues"],
                    ["Frigo", "Électricité (100W)", "Biogaz micro-CHP + batterie quinone"],
                    ["Machine à laver", "Électricité (2 000W pic)", "Biogaz micro-CHP (pic)"],
                    ["TV + électronique", "Électricité (230W)", "Micro-CHP + BPV + batterie quinone"],
                    ["Éclairage", "LED (50W)", "PMFC + bioluminescence"],
                    ["Eau de douche", "150L/jour réseau", "Douche cyclique biofiltre (15L/jour)"],
                    ["Qualité air", "Rien (ou VMC)", "Panneau mural microalgues"],
                  ].map(([a, b, c]) => (
                    <TableRow key={a}>
                      <TableCell className="text-sm font-semibold">{a}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{b}</TableCell>
                      <TableCell className="text-sm text-primary">{c}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Residual */}
          <div className="mt-12 text-center space-y-4">
            <h3 className="text-xl text-foreground">Besoin électrique résiduel après conversion</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: "~150W", l: "Puissance moyenne" },
                { n: "~3,6", l: "kWh / jour" },
                { n: "~1 300", l: "kWh / an" },
                { n: "÷5", l: "vs tout-électrique" },
              ].map((s) => (
                <Card key={s.l}>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary font-mono">{s.n}</p>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">{s.l}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              1 300 kWh/an, c'est gérable avec un photobioréacteur à algues + micro-CHP sur un balcon.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl text-foreground mb-8">L'équipement exact — Pack Autonomie Totale</h2>
          <div className="space-y-6">
            {tiers.map((t) => (
              <Card key={t.title} className={`${t.color} border-2`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <span className="text-primary">{t.icon}</span> {t.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{t.subtitle}</p>
                    </div>
                    <span className="text-2xl font-bold text-primary font-mono">{t.price}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {t.specs.map((s) => (
                      <div key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">→</span>
                        {s}
                      </div>
                    ))}
                  </div>
                  {howToGuides[t.title] && (
                    <HowToGuide
                      title={t.title}
                      steps={howToGuides[t.title].steps}
                      materials={howToGuides[t.title].materials}
                      difficulty={howToGuides[t.title].difficulty}
                      cost={howToGuides[t.title].cost}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Total recap */}
          <Card className="mt-8 border-primary border-2">
            <CardContent className="p-0">
              <div className="p-6 pb-2">
                <h3 className="text-xl font-semibold text-foreground">Pack Autonomie Totale — Récapitulatif</h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-mono text-xs">Composant</TableHead>
                    <TableHead className="font-mono text-xs">Espace</TableHead>
                    <TableHead className="font-mono text-xs">Coût</TableHead>
                    <TableHead className="font-mono text-xs">Couvre</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["Photobioréacteur + micro-CHP", "2-3 m²", "3 500 €", "100% électricité résiduelle"],
                    ["Feuilles artificielles + H₂", "5-10 m²", "2 800 €", "Chauffage + cuisson"],
                    ["Batterie quinone + PMFC", "0,5 m²", "1 200 €", "Stockage + IoT + éclairage"],
                    ["Module eau & air", "1 m²", "1 500 €", "Économie eau 90% + air pur"],
                  ].map(([a, b, c, d]) => (
                    <TableRow key={a}>
                      <TableCell className="text-sm">{a}</TableCell>
                      <TableCell className="text-sm font-mono">{b}</TableCell>
                      <TableCell className="text-sm font-mono">{c}</TableCell>
                      <TableCell className="text-sm">{d}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-primary/10 font-bold">
                    <TableCell>TOTAL</TableCell>
                    <TableCell className="font-mono">~10-15 m²</TableCell>
                    <TableCell className="text-primary font-mono">~9 000 €</TableCell>
                    <TableCell>Autonomie complète</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="p-6 pt-2">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Comparaison :</strong> une installation solaire + batterie Tesla coûte 20 000-30 000 €. Le PhytoTech coûte 3× moins cher ET couvre l'eau et l'air en plus.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl text-foreground mb-8">Retour sur investissement</h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-mono text-xs">Économie</TableHead>
                    <TableHead className="font-mono text-xs">Montant/an</TableHead>
                    <TableHead className="font-mono text-xs">Détail</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["Électricité", "~1 200 €", "Ordre de grandeur facture moyenne foyer FR [3]"],
                    ["Gaz / cuisson", "~400 €", "Hypothèse : remplacement par H₂ biologique"],
                    ["Eau", "~150-250 €", "Hypothèse douche cyclique [1]"],
                    ["Spiruline", "~100-150 €", "Production estimative dans le PBR"],
                  ].map(([a, b, c]) => (
                    <TableRow key={a}>
                      <TableCell className="text-sm font-semibold">{a}</TableCell>
                      <TableCell className="text-sm font-mono text-primary">{b}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{c}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-primary/10 font-bold">
                    <TableCell>Économies estimées/an</TableCell>
                    <TableCell className="text-primary font-mono">~1 850-2 000 €</TableCell>
                    <TableCell className="text-primary">ROI projeté ~4-6 ans</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            <strong>Projection sous hypothèses</strong> : système intégré non encore commercialisé, hypothèses de rendement basées sur les composants individuels existants (TRL 6-8 pour plusieurs briques, voir tableau de maturité). Les économies réelles dépendront du tarif énergie au moment de la commercialisation, du climat et du profil d'usage.
          </p>
        </div>
      </section>

      {/* Sources & méthodologie */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-lg font-semibold text-foreground mb-4">Sources & méthodologie</h2>
          <ol className="text-xs text-muted-foreground space-y-2 list-decimal list-inside">
            <li>
              <strong className="text-foreground">[1] Consommation eau couple France</strong> : ~100-120 m³/an (≈300 L/jour), part hygiène ~40%. Une douche cyclique type ILYA recycle l'eau de la douche pour atteindre une réduction significative de la consommation. Sources : Centre d'information sur l'eau, espace-cocon.com, ilya-tech.fr. L'estimation 35-45 000 L/an correspond à une réduction d'environ 80-90 % sur la part douche d'un couple, à conditions d'usage similaires.
            </li>
            <li>
              <strong className="text-foreground">[2] Densité de puissance PMFC</strong> : Les Plant Microbial Fuel Cells produisent typiquement 10 à 80 mW/m² en conditions réelles. L'état de l'art en laboratoire atteint ~440 mW/m² (Helder et al., 2012, <em>Biotechnology for Biofuels</em>). Plant-e (Pays-Bas) commercialise des prototypes basés sur ce principe.
            </li>
            <li>
              <strong className="text-foreground">[3] Facture électricité moyenne foyer français</strong> : ~1 200 €/an pour un foyer de 2 personnes au tarif réglementé EDF (option Base, 6 kVA). Sources : EDF, picbleu.fr, jechange.fr. Variable selon zone climatique et type de chauffage.
            </li>
            <li>
              <strong className="text-foreground">Maturité technologique</strong> : voir tableau "Ce qui existe déjà vs ce qui arrive" plus haut. Plusieurs briques (batteries quinone, biogaz d'algues domestique, biofiltre douche) sont encore au stade prototype (TRL 6-8). Les chiffres présentés sont donc des <strong>projections</strong>, pas des engagements de résultat.
            </li>
          </ol>
          <p className="mt-4 text-xs text-muted-foreground">
            Méthodologie complète, principes éditoriaux et échelle TRL :{" "}
            <Link to="/methodologie" className="underline text-primary hover:text-primary/80">
              voir /methodologie
            </Link>.
          </p>
        </div>
      </section>

      {/* Readiness */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl text-foreground mb-8">Ce qui existe déjà vs ce qui arrive</h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-mono text-xs">Composant</TableHead>
                    <TableHead className="font-mono text-xs">Statut</TableHead>
                    <TableHead className="font-mono text-xs">Horizon</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {readiness.map((r) => (
                    <TableRow key={r.name}>
                      <TableCell className="text-sm">{r.name}</TableCell>
                      <TableCell className="text-sm">
                        {statusIcons[r.status]}{" "}
                        <span className="text-muted-foreground">{r.detail}</span>
                      </TableCell>
                      <TableCell className="text-sm font-mono whitespace-nowrap">{r.horizon}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Positioning */}
          <Card className="mt-8 border-primary/30 bg-primary/5">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Le positionnement clair
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Aujourd'hui :</strong> les Modules Découverte et Habitat sont réalisables immédiatement. Ils ne remplacent pas EDF, ils le complètent.
                </p>
                <p>
                  <strong className="text-foreground">Demain (2027-2028) :</strong> le Pack Autonomie Totale devient réalisable. EmotionsCare sera la première à intégrer tout en système.
                </p>
                <p className="italic text-foreground">
                  "On ne vous promet pas de quitter EDF demain avec un pot de menthe. On vous promet un chemin progressif — du premier pot qui allume une LED, jusqu'au système complet qui vous libère."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* User profiles */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl text-center mb-12">Les 4 profils d'utilisateurs</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {profiles.map((p) => (
              <div key={p.title} className="text-center space-y-3 p-4 rounded-xl bg-background/5">
                <div className="flex justify-center text-primary">{p.icon}</div>
                <h3 className="text-lg">{p.title}</h3>
                <p className="text-sm opacity-70">{p.desc}</p>
                <p className="font-mono text-primary font-bold">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl">
            Chaque module fonctionne seul — et prépare le suivant.
          </h2>
          <p className="opacity-80">
            Commencez par un pot. Finissez par l'autonomie totale.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/">
              <Button size="lg" variant="secondary" className="rounded-full text-base px-8">
                ← Retour aux kits
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/precommande">Rejoindre la liste d'attente →</Link>
            </Button>
          </div>
        </div>
      </section>
      <CommentSection pageSlug="pack-autonomie" />
    </main>
    <Footer />
  </div>
);

export default PackAutonomie;
