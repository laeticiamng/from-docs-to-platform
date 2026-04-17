import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { homeFaqItems } from "@/components/home/FaqSection";

const installFaq = [
  {
    q: "Quel niveau de bricolage faut-il pour installer un kit ?",
    a: "Le Pot Vivant ne demande aucun bricolage. Le Module Maison demande des branchements simples (visserie, raccord d'eau type douche). Tous les kits sont fournis avec un guide pas à pas illustré.",
  },
  {
    q: "Combien de temps prend l'installation ?",
    a: "Environ 15 minutes pour le Pot Vivant, entre 2 et 4 heures pour le Module Maison selon la configuration choisie.",
  },
  {
    q: "Peut-on installer un kit en appartement locatif ?",
    a: "Oui. Aucun module ne demande de modification structurelle du logement. La douche cyclique se branche en série sur le mitigeur existant et se démonte sans trace.",
  },
];

const maintenanceFaq = [
  {
    q: "Quelle maintenance demande un kit PMFC ?",
    a: "Arroser la plante normalement et ajouter une cuillère de substrat enrichi tous les 3 mois. Les électrodes sont passives et ne demandent aucun entretien sur la durée de vie estimée du module.",
  },
  {
    q: "Que faire si la production baisse ?",
    a: "L'application connectée alerte en cas de baisse anormale et propose un diagnostic guidé : pH, humidité, état du substrat. Un service après-vente est joignable via /contact.",
  },
  {
    q: "Quelle est la durée de vie d'un module ?",
    a: "Les estimations actuelles sont de 5 à 8 ans pour les modules PMFC, 10 ans pour la batterie quinone, et indéfinie pour le panneau à microalgues tant que la culture est entretenue.",
  },
];

const orderFaq = [
  {
    q: "Comment précommander ?",
    a: "Via la page /precommande. Le paiement n'est demandé qu'à l'expédition. Vous recevez une confirmation par email et pouvez modifier ou annuler votre précommande à tout moment.",
  },
  {
    q: "Quels sont les délais de livraison ?",
    a: "Les premières livraisons du Pot Vivant sont prévues en deux temps. Les délais exacts sont communiqués par email à chaque étape de fabrication.",
  },
  {
    q: "Y a-t-il une garantie ?",
    a: "Oui. Garantie légale de conformité (2 ans) sur tous les modules. Les consommables (substrat, cultures) ne sont pas couverts par cette garantie.",
  },
];

const sections = [
  { title: "Le produit", items: homeFaqItems },
  { title: "Installation", items: installFaq },
  { title: "Entretien et durée de vie", items: maintenanceFaq },
  { title: "Commande et garantie", items: orderFaq },
];

const allFaqItems = sections.flatMap((s) => s.items);

const Faq = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <SEOHead
        title="FAQ — Questions fréquentes sur PhytoTech Home"
        description="Toutes les réponses sur les kits PhytoTech Home : fonctionnement, installation, entretien, durée de vie, commande et garantie. Réponses courtes, factuelles et citables."
        path="/faq"
        faqItems={allFaqItems}
      />

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
          <Badge variant="outline" className="font-mono text-xs tracking-widest">
            QUESTIONS FRÉQUENTES
          </Badge>
          <h1 className="text-4xl md:text-5xl text-foreground">
            Tout ce que vous voulez savoir sur PhytoTech Home
          </h1>
          <p className="text-muted-foreground">
            Réponses claires et honnêtes, sans sur-promesse. Si une question manque,{" "}
            <Link to="/contact" className="text-primary underline">
              écrivez-nous
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {section.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {section.items.map((item, idx) => (
                  <AccordionItem key={idx} value={`${section.title}-${idx}`}>
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
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl space-y-4">
          <h2 className="text-3xl">Une question sans réponse ici ?</h2>
          <p className="opacity-80">
            L'équipe répond personnellement sous 48 h ouvrées.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="rounded-full" asChild>
              <Link to="/contact">Nous contacter →</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/precommande">Voir les kits</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Faq;
