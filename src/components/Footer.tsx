import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🌿</span>
            <span className="font-mono text-lg font-semibold">PHYTOTECH</span>
          </div>
          <p className="text-sm opacity-70 max-w-xs">
            Home par EmotionsCare SASU · Amiens, France · 2026
          </p>
        </div>
        <div className="flex gap-12">
          <div className="space-y-2">
            <h4 className="text-sm font-mono font-semibold mb-3">Navigation</h4>
            <Link to="/" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Accueil</Link>
            <Link to="/domaines" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Domaines</Link>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-mono font-semibold mb-3">Contact</h4>
            <p className="text-sm opacity-70">contact@emotionscare.fr</p>
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
