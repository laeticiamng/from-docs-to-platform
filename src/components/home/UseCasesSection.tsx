import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, GraduationCap, Sun, Globe } from "lucide-react";

const useCases = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Foyer engagé",
    desc: "Un appartement ou une maison qui souhaite réduire sa consommation d'eau, purifier son air intérieur et alimenter ses capteurs domotiques sans piles.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Projet pédagogique",
    desc: "École, fablab ou tiers-lieu qui veut faire découvrir concrètement la photosynthèse, les piles microbiennes et le cycle de l'eau aux apprenants.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Site pilote d'autonomie partielle",
    desc: "Logement déjà équipé en solaire qui cherche à compléter son installation avec des modules vivants pour l'eau, l'air et le stockage non lithium.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Programme de coopération",
    desc: "ONG, collectivité ou village qui veut équiper un territoire avec des solutions modulaires, réparables localement et adaptées aux ressources existantes.",
  },
];

const UseCasesSection = () => (
  <section id="cas-d-usage" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-12 space-y-3">
        <Badge variant="outline" className="font-mono text-xs tracking-widest">
          CAS D'USAGE
        </Badge>
        <h2 className="text-3xl md:text-4xl text-foreground">
          À qui s'adresse PhytoTech Home
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Quatre profils types pour lesquels les kits ont été pensés. Si votre situation
          ne ressemble à aucune, l'équipe peut vous orienter vers la configuration
          adaptée.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {useCases.map((uc) => (
          <Card key={uc.title} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 space-y-3">
              <div className="text-primary">{uc.icon}</div>
              <h3 className="text-base font-semibold text-foreground">{uc.title}</h3>
              <p className="text-sm text-muted-foreground">{uc.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
