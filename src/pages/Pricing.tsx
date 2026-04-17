import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Flower2, Home as HomeIcon, Globe, Zap, CheckCircle2, Info } from "lucide-react";

const plans = [
  {
    icon: <Flower2 className="w-10 h-10 text-primary" />,
    level: "NIVEAU 1 — DÉCOUVERTE",
    name: "Le Pot Vivant",
    price: "49 — 199 €",
    status: "Précommande ouverte",
    description:
      "Un pot de fleurs PMFC qui alimente une LED, un capteur ou un petit écran e-ink.",
    includes: [
      "Pot avec électrodes PMFC intégrées",
      "1 accessoire au choix (LED, capteur ou écran e-ink)",
      "Application mobile de suivi de production",
      "Guide d'installation et choix de plante",
    ],
    notIncluded: ["Plante (à choisir parmi 5 espèces compatibles, fournie séparément)"],
    cta: "Précommander",
    href: "/precommande",
  },
  {
    icon: <HomeIcon className="w-10 h-10 text-primary" />,
    level: "NIVEAU 2 — HABITAT",
    name: "Le Module Maison",
    price: "690 — 2 490 €",
    status: "Précommande ouverte",
    highlight: true,
    description:
      "Pack complet pour un foyer : électricité IoT, purification d'air, recirculation d'eau.",
    includes: [
      "Jardinière PMFC multi-pots",
      "Panneau mural à microalgues",
      "Kit recirculation douche avec biofiltre algal",
      "Batterie quinone végétale",
      "Capsules bioluminescentes pour veilleuses",
      "Hub central connecté + app",
    ],
    notIncluded: ["Installation par un technicien (en option, sur devis)"],
    cta: "Configurer mon module",
    href: "/precommande",
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    level: "NIVEAU 3 — COMMUNAUTÉ",
    name: "Autonomie Village",
    price: "Sur devis",
    status: "B2B / ONG / Collectivités",
    description:
      "Système modulaire pour équiper un village ou une infrastructure pilote.",
    includes: [
      "Réseau PMFC en série pour éclairage collectif",
      "Photobioréacteur communautaire",
      "Feuilles artificielles pour production H₂",
      "Formation locale et documentation",
      "Maintenance assurée la première année",
    ],
    notIncluded: ["Génie civil et logistique d'acheminement (étude au cas par cas)"],
    cta: "Demander un devis",
    href: "/contact",
  },
];

const Pricing = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <SEOHead
        title="Tarifs PhytoTech Home — Prix des kits bio-énergie"
        description="Tarifs transparents des kits PhytoTech Home : Pot Vivant à partir de 49 €, Module Maison de 690 à 2 490 €, et Autonomie Village sur devis. Détail de ce qui est inclus et statut de précommande."
        path="/pricing"
      />

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
          <Badge variant="outline" className="font-mono text-xs tracking-widest">
            TARIFS
          </Badge>
          <h1 className="text-4xl md:text-5xl text-foreground">
            Des prix clairs, sans abonnement caché
          </h1>
          <p className="text-muted-foreground">
            Trois niveaux d'autonomie, du pot de salon au village pilote. Pour le Pack
            Autonomie Totale Paris (~9 000 €), voir{" "}
            <Link to="/pack-autonomie" className="text-primary underline">
              la page dédiée
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden ${
                  plan.highlight ? "border-primary ring-2 ring-primary/20 shadow-xl" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                )}
                <CardContent className="p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="font-mono text-xs tracking-wider">
                      {plan.level}
                    </Badge>
                    {plan.icon}
                  </div>
                  <h2 className="text-2xl text-foreground">{plan.name}</h2>
                  <div className="space-y-1">
                    <p className="font-mono text-2xl text-primary font-bold">
                      {plan.price}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                      {plan.status}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>

                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                      Inclus
                    </p>
                    <ul className="space-y-2">
                      {plan.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                        Non inclus
                      </p>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Info className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button className="w-full rounded-full" asChild>
                    <Link to={plan.href}>{plan.cta} →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
              <Zap className="w-12 h-12 text-primary flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <h2 className="text-xl text-foreground font-semibold">
                  Pack Autonomie Totale Paris
                </h2>
                <p className="text-sm text-muted-foreground">
                  Combinaison complète vivant + solaire + stockage pour viser une
                  autonomie réelle en appartement parisien. Détail des composants, ROI
                  projeté ~4-6 ans (estimation indicative).
                </p>
              </div>
              <Button className="rounded-full whitespace-nowrap" asChild>
                <Link to="/pack-autonomie">Voir le pack →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
          <h2 className="text-2xl text-foreground">Une question sur la tarification ?</h2>
          <p className="text-muted-foreground text-sm">
            Voir les{" "}
            <Link to="/faq" className="text-primary underline">
              questions fréquentes
            </Link>{" "}
            ou{" "}
            <Link to="/contact" className="text-primary underline">
              contacter l'équipe
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Pricing;
