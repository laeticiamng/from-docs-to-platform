import { Link } from "react-router-dom";
import { Layers, HelpCircle, Mail, Shield, Info } from "lucide-react";

const links = [
  { to: "/features", label: "Fonctionnalités", icon: <Layers className="w-4 h-4" /> },
  { to: "/faq", label: "FAQ", icon: <HelpCircle className="w-4 h-4" /> },
  { to: "/contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  { to: "/politique-confidentialite", label: "Confidentialité", icon: <Shield className="w-4 h-4" /> },
  { to: "/a-propos", label: "À propos", icon: <Info className="w-4 h-4" /> },
];

const TrustLinksSection = () => (
  <section aria-label="Liens utiles" className="py-12 border-t bg-background">
    <div className="container mx-auto px-4 text-center space-y-4">
      <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
        Pour aller plus loin
      </p>
      <nav className="flex flex-wrap justify-center gap-3">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            {l.icon} {l.label}
          </Link>
        ))}
      </nav>
    </div>
  </section>
);

export default TrustLinksSection;
