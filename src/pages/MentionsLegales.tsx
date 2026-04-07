import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const MentionsLegales = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead title="Mentions légales — PhytoTech par EmotionsCare" description="Mentions légales du site PhytoTech Home par EmotionsCare SASU." path="/mentions-legales" />
    <Navbar />
    <main className="flex-1 py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm dark:prose-invert">
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          <strong>EmotionsCare SASU</strong><br />
          5 rue Caudron, 80000 Amiens, France<br />
          SIREN : 944 505 445<br />
          Présidente : Laeticia Motongane<br />
          Email : <a href="mailto:contact@emotionscare.fr">contact@emotionscare.fr</a>
        </p>

        <h2>Hébergement</h2>
        <p>
          Ce site est hébergé par Lovable (lovable.dev).<br />
          Les données sont stockées sur des serveurs sécurisés en Europe.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive d'EmotionsCare SASU, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les données personnelles collectées sur ce site sont traitées conformément au RGPD. Pour en savoir plus, consultez notre <a href="/politique-confidentialite">Politique de confidentialité</a>.
        </p>

        <h2>Responsabilité</h2>
        <p>
          EmotionsCare SASU s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, elle ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site utilise des cookies strictement nécessaires au fonctionnement du service (authentification, session). Aucun cookie publicitaire ou de suivi tiers n'est utilisé.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default MentionsLegales;
