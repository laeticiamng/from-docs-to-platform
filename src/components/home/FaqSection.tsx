import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const homeFaqItems = [
  {
    q: "Qu'est-ce que PhytoTech Home ?",
    a: "PhytoTech Home est une gamme de kits domestiques bio-inspirés conçus par EmotionsCare SASU. Ils utilisent plantes, microalgues, bactéries électroactives et biofiltres pour aider à produire un peu d'électricité, purifier l'air intérieur et recycler l'eau à petite échelle.",
  },
  {
    q: "À qui s'adresse la plateforme ?",
    a: "Aux foyers engagés dans la transition écologique, aux projets pédagogiques, aux sites pilotes d'autonomie partielle et aux programmes de coopération internationale dans des territoires aux ressources contraintes.",
  },
  {
    q: "Comment fonctionne un kit ?",
    a: "Chaque kit combine un ou plusieurs modules : pile microbienne à plante (PMFC) pour l'IoT basse consommation, panneau à microalgues pour la purification de l'air, biofiltre algal pour la recirculation de l'eau de douche, ou batterie quinone végétale pour le stockage. L'utilisateur installe le module, l'entretient simplement et suit la production via une application.",
  },
  {
    q: "Faut-il être technicien pour l'installer ?",
    a: "Le Pot Vivant (niveau 1) s'installe comme un pot de fleurs classique. Le Module Maison (niveau 2) demande quelques branchements simples documentés dans le guide fourni. Le niveau 3 (Autonomie Village) inclut une formation locale.",
  },
  {
    q: "Est-ce que cela remplace le réseau électrique ou les panneaux solaires ?",
    a: "Non, et nous le disons clairement. PhytoTech Home ne remplace ni le réseau ni les panneaux solaires : il les complète. Les kits couvrent les usages très basse consommation (capteurs, veilleuses, éclairage d'ambiance) et apportent des bénéfices que le solaire ne fournit pas (purification d'air, recirculation d'eau).",
  },
  {
    q: "Quelles sont les limites annoncées ?",
    a: "La densité énergétique des PMFC est environ mille fois inférieure à celle des panneaux solaires (≈ 23 mW/m² contre ≈ 200 W/m²). Aucun kit ne peut alimenter seul un appartement complet. Les chiffres affichés (litres économisés, CO₂ absorbé) correspondent à des estimations basées sur les configurations recommandées.",
  },
  {
    q: "Comment précommander ou contacter l'équipe ?",
    a: "La précommande se fait via la page dédiée /precommande. Pour toute question commerciale, partenariat ou presse, le formulaire de la page /contact ou l'adresse contact@emotionscare.fr permettent de joindre l'équipe directement.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-24 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12 space-y-3">
        <Badge variant="outline" className="font-mono text-xs tracking-widest">
          QUESTIONS FRÉQUENTES
        </Badge>
        <h2 className="text-3xl md:text-4xl text-foreground">Tout ce qu'on nous demande</h2>
        <p className="text-muted-foreground text-sm">
          Réponses courtes, factuelles et citables — pour vous comme pour les assistants IA.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {homeFaqItems.map((item, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
