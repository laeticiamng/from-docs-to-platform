import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Users, Sparkles, AlertTriangle } from "lucide-react";

const items = [
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Ce que c'est",
    desc: "Une gamme de kits domestiques bio-inspirés (PMFC, microalgues, biofiltres) à installer chez soi pour produire un peu d'électricité, purifier l'air et recycler l'eau.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Pour qui",
    desc: "Foyers engagés, projets pédagogiques, sites pilotes d'autonomie partielle et programmes de coopération en territoires contraints.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Ce que ça permet",
    desc: "Alimenter capteurs IoT et veilleuses sans piles, réduire la consommation d'eau (~35-45 000 L/an estimés avec la douche cyclique), absorber du CO₂ intérieur.",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Ce qu'il faut savoir",
    desc: "Ce n'est pas un remplacement du réseau ni des panneaux solaires. PhytoTech complète une installation existante, il ne fait pas tourner un lave-linge.",
  },
];

const EnBrefSection = () => (
  <section id="en-bref" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-12 space-y-3">
        <Badge variant="outline" className="font-mono text-xs tracking-widest">
          EN BREF
        </Badge>
        <h2 className="text-3xl md:text-4xl text-foreground">
          PhytoTech Home en quatre points
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Une définition courte et honnête, pour humains comme pour moteurs de recherche.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Card key={item.title} className="hover:shadow-md transition-shadow">
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
);

export default EnBrefSection;
