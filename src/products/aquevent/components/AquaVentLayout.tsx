import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';

const navLinks = [
  { to: '/aquevent', label: 'Accueil', exact: true },
  { to: '/aquevent/product', label: 'Produit' },
  { to: '/aquevent/science', label: 'Science' },
  { to: '/aquevent/business', label: 'Investisseurs' },
  { to: '/aquevent/academy', label: 'Academy' },
  { to: '/aquevent/community', label: 'Communaute' },
];

export default function AquaVentLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (link: typeof navLinks[0]) => {
    if ('exact' in link && link.exact) return location.pathname === link.to;
    return location.pathname.startsWith(link.to);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/aquevent" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-aquevent-primary to-aquevent-secondary flex items-center justify-center">
              <span className="text-white text-xs font-bold">AV</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight leading-none">
                <span className="text-aquevent-primary">Aqua</span>
                <span className="text-aquevent-secondary">Vent</span>
              </span>
              <span className="text-[8px] text-aquevent-accent font-bold tracking-wider leading-none">
                UNLIMITED™
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link) ? 'text-aquevent-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              PhytoTech Home
            </Link>
            <Link
              to="/aquevent/community"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-aquevent-primary to-aquevent-secondary text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
            >
              Rejoindre
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t bg-background px-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(link) ? 'text-aquevent-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-xs text-muted-foreground"
            >
              ← PhytoTech Home
            </Link>
            <Link
              to="/aquevent/community"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-aquevent-primary to-aquevent-secondary text-white text-sm font-semibold"
            >
              Rejoindre La Revolution
            </Link>
          </div>
        )}
      </header>

      {/* Breadcrumb */}
      {location.pathname !== '/aquevent' && (
        <ProductBreadcrumb
          product="aquevent"
          current={navLinks.find((l) => l.to === location.pathname)?.label ?? 'Page'}
        />
      )}

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-aquevent-primary to-aquevent-secondary flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AV</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">
                    <span className="text-aquevent-primary">Aqua</span>
                    <span className="text-aquevent-secondary">Vent</span>
                  </span>
                  <span className="text-[7px] text-aquevent-accent font-bold tracking-wider">UNLIMITED™</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Premier inhalateur monde usage illimite, 100% naturel, scientifiquement valide.
              </p>
              <p className="text-xs text-muted-foreground/80 mt-2">
                PhytoTech™ & UNLIMITED™ sont des marques deposees.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-3">Produit</h4>
              <div className="space-y-2">
                <Link to="/aquevent/product" className="block text-sm text-muted-foreground hover:text-aquevent-primary">UNLIMITED™ Edition</Link>
                <Link to="/aquevent/product" className="block text-sm text-muted-foreground hover:text-aquevent-primary">Configurateur 3D</Link>
                <Link to="/aquevent/science" className="block text-sm text-muted-foreground hover:text-aquevent-primary">Formulation</Link>
                <Link to="/aquevent/science" className="block text-sm text-muted-foreground hover:text-aquevent-primary">Calculateur Securite</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-3">Ressources</h4>
              <div className="space-y-2">
                <Link to="/aquevent/academy" className="block text-sm text-muted-foreground hover:text-aquevent-primary">Academy</Link>
                <Link to="/aquevent/business" className="block text-sm text-muted-foreground hover:text-aquevent-primary">Investisseurs</Link>
                <Link to="/aquevent/science" className="block text-sm text-muted-foreground hover:text-aquevent-primary">Recherche</Link>
                <Link to="/" className="block text-sm text-muted-foreground hover:text-aquevent-primary">PhytoTech Home</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>contact@aquevent-phytotech.com</p>
                <p>EmotionsCare SASU</p>
                <p>Amiens, France</p>
                <p className="text-xs text-muted-foreground/80">SIREN 944 505 445</p>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-xs text-muted-foreground/80">
            &copy; {new Date().getFullYear()} AquaVent PhytoTech UNLIMITED™ — EmotionsCare SASU. Tous droits reserves.
          </div>
        </div>
      </footer>
    </div>
  );
}
