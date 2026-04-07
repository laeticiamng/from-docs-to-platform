import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const CGV = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead title="CGV — PhytoTech par EmotionsCare" description="Conditions générales de vente d'EmotionsCare SASU pour les produits PhytoTech." path="/cgv" />
    <Navbar />
    <main className="flex-1 py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm dark:prose-invert">
        <h1>Conditions Générales de Vente</h1>
        <p><em>Dernière mise à jour : avril 2026</em></p>

        <h2>Article 1 — Objet</h2>
        <p>Les présentes CGV régissent les ventes de produits PhytoTech Home par EmotionsCare SASU (5 rue Caudron, 80000 Amiens, SIREN 944 505 445) à toute personne physique ou morale (ci-après "le Client").</p>

        <h2>Article 2 — Produits</h2>
        <p>Les produits proposés sont des kits de biotechnologie végétale pour l'habitat et les communautés. Les caractéristiques essentielles sont décrites sur chaque fiche produit du site.</p>

        <h2>Article 3 — Prix</h2>
        <p>Les prix sont indiqués en euros TTC. EmotionsCare se réserve le droit de modifier ses prix à tout moment, les produits étant facturés sur la base des tarifs en vigueur au moment de la commande.</p>

        <h2>Article 4 — Commande et précommande</h2>
        <p>Les précommandes passées via le site constituent un engagement d'intérêt. Le paiement sera sollicité lors de la mise en production du produit. Le Client peut annuler sa précommande à tout moment avant le paiement effectif.</p>

        <h2>Article 5 — Livraison</h2>
        <p>Les délais de livraison sont donnés à titre indicatif. EmotionsCare s'engage à livrer dans un délai raisonnable. Les frais de livraison sont indiqués avant la validation de la commande.</p>

        <h2>Article 6 — Droit de rétractation</h2>
        <p>Conformément à l'article L.221-18 du Code de la consommation, le Client dispose d'un délai de 14 jours à compter de la réception du produit pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.</p>

        <h2>Article 7 — Garanties</h2>
        <p>Les produits bénéficient de la garantie légale de conformité (articles L.217-4 et suivants du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 et suivants du Code civil).</p>

        <h2>Article 8 — Responsabilité</h2>
        <p>EmotionsCare ne saurait être tenue responsable des dommages résultant d'une mauvaise utilisation des produits. Les produits biologiques vivants (plantes, algues) nécessitent un entretien conforme aux instructions fournies.</p>

        <h2>Article 9 — Données personnelles</h2>
        <p>Les données collectées lors de la commande sont nécessaires à son traitement. Elles sont traitées conformément à notre <a href="/politique-confidentialite">Politique de confidentialité</a>.</p>

        <h2>Article 10 — Droit applicable</h2>
        <p>Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux d'Amiens seront compétents.</p>

        <h2>Contact</h2>
        <p>Pour toute question : <a href="mailto:contact@emotionscare.fr">contact@emotionscare.fr</a></p>
      </div>
    </main>
    <Footer />
  </div>
);

export default CGV;
