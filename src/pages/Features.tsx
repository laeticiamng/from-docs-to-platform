import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Zap, Wind, Droplets, Battery, Lightbulb, Layers, Smartphone,
  Wrench, Recycle, AlertTriangle,
} from "lucide-react";

const modules = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "PMFC — Pile microbienne à plante",
    desc: "Bactéries électroactives oxydent les composés racinaires et libèrent des électrons captés par des électrodes inertes.",
    output: "≈ 23 mW/m²",
    use: "Capteurs IoT, LED ultra-basse consommation, e-ink",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Panneau à microalgues",
    desc: "Cultures de spiruline ou chlorelle qui absorbent le CO₂ intérieur et rejettent de l'oxygène.",
    output: "≈ 12 kg CO₂/an absorbés (Module Maison)",
    use: "Purification d'air en pièce de vie",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Biofiltre algal recirculant",
    desc: "Boucle de 5 L sur la douche, filtration biologique des résidus organiques entre deux passages.",
    output: "≈ 54 000 L/an économisés",
    use: "Douche cyclique, recyclage eaux grises",
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Batterie quinone végétale",
    desc: "Stockage électrochimique à base de molécules quinones extraites de végétaux. Pas de lithium, pas de terres rares.",
    output: "Stockage compatible solaire existant",
    use: "Lissage de la production solaire",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Capsules bioluminescentes",
    desc: "Cultures de bactéries ou champignons bioluminescents en capsule scellée, lumière douce sans électricité.",
    output: "Veilleuse passive 6–8 h/nuit",
    use: "Balisage, veilleuse, ambiance",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Bioplastiques et circuits PHA",
    desc: "Tous les boîtiers et supports des kits sont moulés en PHA, polymère bio-sourcé compostable.",
    output: "100 % compostable en fin de vie",
    use: "Boîtiers, supports, connectique",
  },
];

const installation = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Application connectée",
    desc: "Suivi de production en temps réel, alertes de maintenance, diagnostic guidé en cas d'anomalie.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Installation guidée",
    desc: "Niveau 1 sans outil, niveau 2 avec visserie standard et raccord d'eau type douche, niveau 3 accompagné par l'équipe.",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    title: "Maintenance simple",
    desc: "Arrosage normal, ajout de substrat enrichi tous les 3 mois, renouvellement de la culture algale tous les 12 à 18 mois.",
  },
];

const Features = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <SEOHead
        title="Fonctionnalités et composants — PhytoTech Home"
        description="Détail des modules PhytoTech Home : piles microbiennes à plante (PMFC), panneaux à microalgues, biofiltres recirculants, batterie quinone, capsules bioluminescentes et bioplastiques PHA. Performances et limites annoncées."
        path="/features"
      />

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
          <Badge variant="outline" className="font-mono text-xs tracking-widest">
            FONCTIONNALITÉS
          </Badge>
          <h1 className="text-4xl md:text-5xl text-foreground">
            Six briques bio-inspirées, un système cohérent
          </h1>
          <p className="text-muted-foreground">
            Chaque kit PhytoTech Home combine plusieurs modules. Voici comment chacun
            fonctionne, ce qu'il produit réellement, et à quoi il sert au quotidien.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <Card key={m.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="text-primary">{m.icon}</div>
                  <h2 className="text-lg font-semibold text-foreground">{m.title}</h2>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                  <div className="space-y-2 pt-2 border-t">
                    <div>
                      <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                        Performance
                      </p>
                      <p className="text-sm font-semibold text-foreground">{m.output}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                        Usages
                      </p>
                      <p className="text-sm text-muted-foreground">{m.use}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl text-center text-foreground mb-10">
            Installation, suivi et maintenance
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {installation.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 space-y-3">
                  <div className="text-primary">{item.icon}</div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-xl font-semibold text-destructive flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Limites assumées
              </h2>
              <p className="text-sm text-muted-foreground">
                Aucun kit PhytoTech Home n'a vocation à remplacer le réseau électrique
                ni les panneaux solaires. La densité énergétique des PMFC est environ
                mille fois inférieure à celle du solaire (≈ 23 mW/m² contre ≈ 200 W/m²
                en pic). Les kits couvrent les usages très basse consommation et
                apportent des bénéfices complémentaires (eau, air, IoT sans piles).
              </p>
              <p className="text-sm text-muted-foreground">
                Les performances annoncées correspondent à des configurations
                recommandées et peuvent varier selon l'entretien, la lumière disponible
                et la qualité de l'eau.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl space-y-4">
          <h2 className="text-3xl">Prêt à choisir un kit ?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="rounded-full" asChild>
              <Link to="/pricing">Voir les tarifs →</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/faq">Lire la FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Features;
