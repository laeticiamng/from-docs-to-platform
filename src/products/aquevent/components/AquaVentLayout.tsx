import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/aquevent" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B2C5A] to-[#1E88E5] flex items-center justify-center">
              <span className="text-white text-xs font-bold">AV</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight leading-none">
                <span className="text-[#8B2C5A]">Aqua</span>
                <span className="text-[#1E88E5]">Vent</span>
              </span>
              <span className="text-[8px] text-[#FFB300] font-bold tracking-wider leading-none">
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
                  isActive(link) ? 'text-[#8B2C5A]' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              PhytoTech Home
            </Link>
            <Link
              to="/aquevent/community"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
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
          <div className="md:hidden border-t bg-white px-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(link) ? 'text-[#8B2C5A]' : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-xs text-gray-400"
            >
              ← PhytoTech Home
            </Link>
            <Link
              to="/aquevent/community"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] text-white text-sm font-semibold"
            >
              Rejoindre La Revolution
            </Link>
          </div>
        )}
      </header>

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B2C5A] to-[#1E88E5] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AV</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">
                    <span className="text-[#8B2C5A]">Aqua</span>
                    <span className="text-[#1E88E5]">Vent</span>
                  </span>
                  <span className="text-[7px] text-[#FFB300] font-bold tracking-wider">UNLIMITED™</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Premier inhalateur monde usage illimite, 100% naturel, scientifiquement valide.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                PhytoTech™ & UNLIMITED™ sont des marques deposees.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-3">Produit</h4>
              <div className="space-y-2">
                <Link to="/aquevent/product" className="block text-sm text-gray-500 hover:text-[#8B2C5A]">UNLIMITED™ Edition</Link>
                <Link to="/aquevent/product" className="block text-sm text-gray-500 hover:text-[#8B2C5A]">Configurateur 3D</Link>
                <Link to="/aquevent/science" className="block text-sm text-gray-500 hover:text-[#8B2C5A]">Formulation</Link>
                <Link to="/aquevent/science" className="block text-sm text-gray-500 hover:text-[#8B2C5A]">Calculateur Securite</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-3">Ressources</h4>
              <div className="space-y-2">
                <Link to="/aquevent/academy" className="block text-sm text-gray-500 hover:text-[#8B2C5A]">Academy</Link>
                <Link to="/aquevent/business" className="block text-sm text-gray-500 hover:text-[#8B2C5A]">Investisseurs</Link>
                <Link to="/aquevent/science" className="block text-sm text-gray-500 hover:text-[#8B2C5A]">Recherche</Link>
                <Link to="/" className="block text-sm text-gray-500 hover:text-[#8B2C5A]">PhytoTech Home</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <p>contact@aquevent-phytotech.com</p>
                <p>EmotionsCare SASU</p>
                <p>Amiens, France</p>
                <p className="text-xs text-gray-400">SIREN 944 505 445</p>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} AquaVent PhytoTech UNLIMITED™ — EmotionsCare SASU. Tous droits reserves.
          </div>
        </div>
      </footer>
    </div>
  );
}
