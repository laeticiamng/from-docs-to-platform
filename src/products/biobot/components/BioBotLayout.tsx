import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';

const navLinks = [
  { to: '/biobot', label: 'Vision', exact: true },
  { to: '/biobot/technology', label: 'Technologie' },
  { to: '/biobot/applications', label: 'Applications' },
  { to: '/biobot/science', label: 'Faisabilite' },
  { to: '/biobot/business', label: 'Business' },
  { to: '/biobot/ecosystem', label: 'Ecosysteme' },
];

export default function BioBotLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (link: typeof navLinks[0]) => {
    if ('exact' in link && link.exact) return location.pathname === link.to;
    return location.pathname.startsWith(link.to);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/biobot" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-biobot-primary to-biobot-secondary flex items-center justify-center">
              <span className="text-white text-xs font-bold">BB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight leading-none">
                <span className="text-biobot-primary">Bio</span>
                <span className="text-biobot-secondary">Bot</span>
              </span>
              <span className="text-[8px] text-biobot-accent font-bold tracking-wider leading-none">
                PHYTOTECH&#8482;
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link) ? 'text-biobot-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/aquevent" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              AquaVent
            </Link>
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              PhytoTech Home
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
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
                  isActive(link) ? 'text-biobot-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/aquevent" onClick={() => setMobileOpen(false)} className="block py-2 text-xs text-muted-foreground">
              &#8592; AquaVent UNLIMITED&#8482;
            </Link>
          </div>
        )}
      </header>

      {/* Breadcrumb */}
      {location.pathname !== '/biobot' && (
        <ProductBreadcrumb
          product="biobot"
          current={navLinks.find((l) => l.to === location.pathname)?.label ?? 'Page'}
        />
      )}

      <main>{children}</main>

      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-biobot-primary to-biobot-secondary flex items-center justify-center">
                  <span className="text-white text-xs font-bold">BB</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold"><span className="text-biobot-primary">Bio</span><span className="text-biobot-secondary">Bot</span></span>
                  <span className="text-[7px] text-biobot-accent font-bold tracking-wider">PHYTOTECH&#8482;</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Robots vivants bio-hybrides. De l'inhalation revolutionnaire a la robotique vivante.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Technologie</h4>
              <div className="space-y-2">
                <Link to="/biobot/technology" className="block text-sm text-muted-foreground hover:text-biobot-primary">Bio-Energie</Link>
                <Link to="/biobot/technology" className="block text-sm text-muted-foreground hover:text-biobot-primary">Bio-Materiaux</Link>
                <Link to="/biobot/technology" className="block text-sm text-muted-foreground hover:text-biobot-primary">Bio-Intelligence</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Applications</h4>
              <div className="space-y-2">
                <Link to="/biobot/applications" className="block text-sm text-muted-foreground hover:text-biobot-primary">HealthBot</Link>
                <Link to="/biobot/applications" className="block text-sm text-muted-foreground hover:text-biobot-primary">AgroBot</Link>
                <Link to="/biobot/applications" className="block text-sm text-muted-foreground hover:text-biobot-primary">OceanBot</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Ecosysteme</h4>
              <div className="space-y-2">
                <Link to="/aquevent" className="block text-sm text-muted-foreground hover:text-biobot-primary">AquaVent UNLIMITED&#8482;</Link>
                <Link to="/biobot/business" className="block text-sm text-muted-foreground hover:text-biobot-primary">Investisseurs</Link>
                <Link to="/biobot/ecosystem" className="block text-sm text-muted-foreground hover:text-biobot-primary">Vision Platform</Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-xs text-muted-foreground/80">
            &copy; {new Date().getFullYear()} BioBot PhytoTech&#8482; — EmotionsCare SASU. Tous droits reserves.
          </div>
        </div>
      </footer>
    </div>
  );
}
