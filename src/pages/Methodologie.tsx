import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Beaker,
  BookOpen,
  AlertTriangle,
  Layers,
  ScrollText,
  ArrowRight,
} from "lucide-react";

/**
 * Page /methodologie — référentiel central des estimations chiffrées
 * publiées sur le site (Pack Autonomie, AquaVent, Domaines…).
 *
 * Objectif : donner à un visiteur, un partenaire ou un investisseur
 * un seul endroit où retrouver les sources, hypothèses, limites et
 * niveaux de maturité technologique (TRL) qui sous-tendent chaque chiffre.
 */

const trlLevels = [
  { level: "TRL 1-3", label: "Recherche fondamentale", desc: "Concept formulé, principes vérifiés en laboratoire." },
  { level: "TRL 4-5", label: "Validation laboratoire", desc: "Composants validés en environnement contrôlé puis pertinent." },
  { level: "TRL 6-7", label: "Prototype démonstratif", desc: "Prototype testé en conditions opérationnelles représentatives." },
  { level: "TRL 8", label: "Système qualifié", desc: "Système final qualifié par tests et démonstration." },
  { level: "TRL 9", label: "Commercialisation", desc: "Système éprouvé en environnement réel, prêt à la mise sur le marché." },
];

const estimates = [
  {
    metric: "~35-45 000 L d'eau économisés/an",
    where: "Pack Autonomie, Home, EnBref",
    hypothesis:
      "Couple en France, ~300 L/jour de consommation totale, part hygiène ~40 %, douche cyclique recyclant l'eau (~5 L par douche au lieu de ~80 L), réduction ~80-90 % sur la part douche.",
    sources: "Centre d'information sur l'eau (cieau.com), espace-cocon.com, ilya-tech.fr.",
    limits:
      "Variable selon nombre de personnes, fréquence et durée des douches, qualité de l'eau d'entrée. La douche cyclique grand-public est encore en pré-série (TRL 7-8).",
  },
  {
    metric: "~12 kg de CO₂ absorbés/an",
    where: "Home Impact",
    hypothesis:
      "Estimation indicative pour un panneau mural à microalgues domestique en intérieur ventilé. Les rendements de captation CO₂ varient fortement selon l'éclairage, la souche d'algues et la circulation d'air.",
    sources: "Travaux Suez/Fermentalg sur Shellium et photobioréacteurs urbains, publications académiques sur microalgues et qualité de l'air intérieur.",
    limits:
      "Donnée indicative. Aucun produit grand public n'a encore publié de chiffre certifié sur la captation CO₂ intérieure.",
  },
  {
    metric: "10-80 mW/m² (densité PMFC)",
    where: "Pack Autonomie, AquaVent",
    hypothesis:
      "Plage de production réaliste mesurée sur Plant Microbial Fuel Cells (PMFC) en conditions extérieures. État de l'art laboratoire ~440 mW/m².",
    sources:
      "Helder et al., 2012, Biotechnology for Biofuels ; Plant-e (Pays-Bas) ; revues de littérature sur les bioélectrochemical systems.",
    limits:
      "Densité dépendante de la plante, du substrat, de la température, de l'humidité. Les usages domestiques se limitent à l'IoT basse consommation (capteurs, veilleuses).",
  },
  {
    metric: "ROI projeté ~4-6 ans (Pack Autonomie ~9 000 €)",
    where: "Pack Autonomie, Pricing, Home teaser",
    hypothesis:
      "Foyer 2 personnes au tarif réglementé EDF (~1 200 €/an), économies eau ~150-250 €/an, hypothèses de durée de vie ≥ 10 ans, hors aides publiques. Inclut une marge d'incertitude liée à l'évolution des tarifs énergie.",
    sources: "EDF (tarif réglementé), picbleu.fr, jechange.fr, calcul interne EmotionsCare.",
    limits:
      "Projection. Le pack n'est pas encore commercialisé (TRL 6-8 selon brique). Les aides publiques (MaPrimeRénov', CEE) ne sont pas intégrées et pourraient raccourcir le ROI.",
  },
  {
    metric: "Phase pré-commerciale AquaVent",
    where: "AquaVent Investisseurs, Mentions",
    hypothesis:
      "Inhalateur à base d'extraits végétaux (spiruline, anthocyanes, phycocyanine), sans nicotine. Aucun chiffre marché, aucune valorisation et aucune timeline de levée ne sont publiés tant qu'ils ne sont pas étayés.",
    sources: "Documentation interne EmotionsCare, partagée sur NDA aux investisseurs professionnels qualifiés.",
    limits:
      "Statut réglementaire en cours de qualification (TPD, dispositif, alimentaire). Le projet ne se positionne ni comme dispositif médical ni comme substitut nicotinique.",
  },
];

const principles = [
  {
    title: "Fourchettes plutôt que valeurs uniques",
    desc: "Quand un chiffre dépend fortement des conditions d'usage, nous publions une fourchette (ex. 35-45 000 L/an, ROI ~4-6 ans) au lieu d'une valeur ponctuelle qui donnerait une fausse précision.",
  },
  {
    title: "Distinguer prototype et produit",
    desc: "Toute brique technologique non encore commercialisée est explicitement marquée comme prototype, pré-série ou estimation projetée. Aucun chiffre de prototype n'est présenté comme garantie de résultat.",
  },
  {
    title: "Sources publiques de référence",
    desc: "Nous citons en priorité des sources tierces vérifiables (publications académiques, organismes publics, opérateurs régulés). Les calculs internes sont signalés comme tels.",
  },
  {
    title: "Pas de claim médical",
    desc: "AquaVent et les briques bien-être ne revendiquent aucun effet thérapeutique, médical ou substitutif. Voir aussi /aquevent/mentions.",
  },
  {
    title: "Mise à jour visible",
    desc: "Les chiffres évoluent avec la R&D et les retours terrain. Les corrections passées sont historisées dans le repo public et les changelogs internes.",
  },
];

export default function Methodologie() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SEOHead
        title="Méthodologie — Sources et hypothèses des estimations PhytoTech"
        description="Comment EmotionsCare calcule les chiffres publiés sur PhytoTech, AquaVent et Pack Autonomie : sources, hypothèses, limites et niveau de maturité technologique (TRL)."
        path="/methodologie"
      />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background border-b">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
            <Beaker className="w-10 h-10 text-primary mx-auto" strokeWidth={1.5} />
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Méthodologie
            </h1>
            <p className="text-muted-foreground">
              Comment nous calculons et présentons les estimations publiées sur ce
              site. Sources, hypothèses, limites et niveau de maturité
              technologique de chaque brique.
            </p>
          </div>
        </section>

        {/* Avertissement */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="rounded-2xl border-l-4 border-warning bg-warning/10 p-5">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                <div className="space-y-2 text-sm text-foreground/90">
                  <p className="font-semibold">
                    Les chiffres publiés sont des projections, pas des engagements.
                  </p>
                  <p>
                    PhytoTech et AquaVent sont en phase pré-commerciale. Plusieurs
                    briques sont encore au stade prototype (TRL 6-8). Les économies,
                    rendements et durées de retour sur investissement sont des
                    estimations indicatives, susceptibles d'évoluer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principes */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <ScrollText className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Nos 5 principes éditoriaux</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {principles.map((p) => (
                <Card key={p.title}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="font-semibold text-base">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Échelle TRL */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Échelle de maturité technologique (TRL)</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Pour chaque brique technologique, nous indiquons un niveau de maturité
              selon l'échelle TRL (Technology Readiness Level) utilisée par l'ESA, la
              NASA et la Commission européenne.
            </p>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-mono text-xs">Niveau</TableHead>
                      <TableHead className="font-mono text-xs">Étape</TableHead>
                      <TableHead className="font-mono text-xs">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trlLevels.map((t) => (
                      <TableRow key={t.level}>
                        <TableCell className="font-mono text-xs whitespace-nowrap">{t.level}</TableCell>
                        <TableCell className="text-sm font-medium">{t.label}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{t.desc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tableau des estimations */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Tableau des estimations publiées</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Pour chaque chiffre visible sur le site, nous documentons l'hypothèse
              de calcul, les sources mobilisées et les limites de l'estimation.
            </p>
            <div className="space-y-4">
              {estimates.map((e) => (
                <Card key={e.metric}>
                  <CardContent className="p-5 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="default" className="font-mono text-[10px]">{e.metric}</Badge>
                      <Badge variant="secondary" className="font-mono text-[10px]">{e.where}</Badge>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Hypothèse</p>
                        <p className="text-foreground/90">{e.hypothesis}</p>
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Sources</p>
                        <p className="text-foreground/90">{e.sources}</p>
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Limites</p>
                        <p className="text-foreground/90">{e.limits}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA contact */}
        <section className="py-16 bg-secondary/30 border-t">
          <div className="container mx-auto px-4 max-w-2xl text-center space-y-4">
            <h2 className="text-2xl font-bold">Une question sur un chiffre ?</h2>
            <p className="text-muted-foreground">
              Nous publions ces éléments pour pouvoir en discuter ouvertement. Si une
              estimation vous semble contestable ou incomplète, écrivez-nous : nous
              corrigeons publiquement les chiffres erronés.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button asChild>
                <Link to="/contact">
                  Contacter l'équipe <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/pack-autonomie">Voir le Pack Autonomie</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
