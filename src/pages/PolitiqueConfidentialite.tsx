import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PolitiqueConfidentialite = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead title="Politique de confidentialité — PhytoTech par EmotionsCare" description="Politique de confidentialité et protection des données personnelles d'EmotionsCare SASU." path="/politique-confidentialite" />
    <Navbar />
    <main className="flex-1 py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm dark:prose-invert">
        <h1>Politique de confidentialité</h1>
        <p><em>Dernière mise à jour : avril 2026</em></p>

        <h2>Responsable du traitement</h2>
        <p>
          <strong>EmotionsCare SASU</strong><br />
          5 rue Caudron, 80000 Amiens, France<br />
          Email : <a href="mailto:contact@emotionscare.fr">contact@emotionscare.fr</a>
        </p>

        <h2>Données collectées</h2>
        <p>Nous collectons les données suivantes :</p>
        <ul>
          <li><strong>Inscription / Connexion</strong> : email, nom d'affichage, mot de passe (hashé)</li>
          <li><strong>Précommande</strong> : nom, email, pack choisi, message optionnel</li>
          <li><strong>Contact</strong> : nom, email, sujet, message</li>
          <li><strong>Commentaires</strong> : texte du commentaire, identifiant utilisateur</li>
        </ul>

        <h2>Finalités du traitement</h2>
        <ul>
          <li>Gestion des précommandes et suivi client</li>
          <li>Réponse aux demandes de contact</li>
          <li>Fonctionnement de l'espace communautaire (commentaires)</li>
          <li>Amélioration du service et analyse d'usage</li>
        </ul>

        <h2>Base légale</h2>
        <p>Le traitement est fondé sur le consentement de l'utilisateur (inscription, formulaires) et l'exécution d'un contrat (précommande).</p>

        <h2>Durée de conservation</h2>
        <ul>
          <li>Données de compte : durée du compte + 3 ans après suppression</li>
          <li>Précommandes : 5 ans (obligations comptables)</li>
          <li>Messages de contact : 2 ans</li>
        </ul>

        <h2>Destinataires</h2>
        <p>Les données ne sont partagées avec aucun tiers commercial. Seuls les prestataires techniques nécessaires au fonctionnement du service y ont accès (hébergement, base de données).</p>

        <h2>Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d'accès, de rectification et de suppression</li>
          <li>Droit à la portabilité</li>
          <li>Droit d'opposition et de limitation du traitement</li>
          <li>Droit de retirer votre consentement à tout moment</li>
        </ul>
        <p>Pour exercer ces droits : <a href="mailto:contact@emotionscare.fr">contact@emotionscare.fr</a></p>

        <h2>Sécurité</h2>
        <p>Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données : chiffrement, contrôle d'accès, politiques de sécurité au niveau de la base de données (RLS).</p>

        <h2>Réclamation</h2>
        <p>En cas de litige, vous pouvez adresser une réclamation à la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PolitiqueConfidentialite;
