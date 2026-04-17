import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="font-mono text-lg font-semibold">PHYTOTECH</span>
          </div>
          <p className="text-sm opacity-70 max-w-xs">
            par EmotionsCare SASU · 5 rue Caudron, 80000 Amiens<br />
            SIREN 944 505 445 · Fondée par Laeticia Motongane
          </p>
        </div>
        <div className="flex gap-12 flex-wrap">
          <div className="space-y-2">
            <h4 className="text-sm font-mono font-semibold mb-3">Navigation</h4>
            <Link to="/" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Accueil</Link>
            <Link to="/features" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Fonctionnalités</Link>
            <Link to="/pricing" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Tarifs</Link>
            <Link to="/pack-autonomie" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Autonomie Totale</Link>
            <Link to="/afrique" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Afrique & Territoires</Link>
            <Link to="/domaines" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Domaines</Link>
            <Link to="/a-propos" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">À propos</Link>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-mono font-semibold mb-3">Produits</h4>
            <Link to="/aquevent" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">AquaVent (pré-série)</Link>
            
            <Link to="/precommande" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Précommander</Link>
            <Link to="/platform" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Toutes les plateformes</Link>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-mono font-semibold mb-3">Aide & Légal</h4>
            <Link to="/faq" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">FAQ</Link>
            <Link to="/contact" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Nous contacter</Link>
            <a href="mailto:contact@emotionscare.fr" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">contact@emotionscare.fr</a>
            <Link to="/mentions-legales" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Mentions légales</Link>
            <Link to="/cgv" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">CGV</Link>
            <Link to="/politique-confidentialite" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Confidentialité</Link>
            <Link to="/preferences" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Préférences cookies</Link>
            <Link to="/methodologie" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Méthodologie</Link>
            <Link to="/investisseurs" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Investisseurs</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 pt-6 text-center">
        <p className="text-xs opacity-50 font-mono">
          Soleil + Eau + Plantes = Autonomie · © 2026 EmotionsCare SASU
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
