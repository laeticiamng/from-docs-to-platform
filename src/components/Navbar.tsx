import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthDialog from "@/components/AuthDialog";
import { useUserRole } from "@/hooks/useUserRole";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isAdmin } = useUserRole();

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/pack-autonomie", label: "Autonomie Totale" },
    { to: "/afrique", label: "Afrique & Territoires" },
    { to: "/domaines", label: "Domaines" },
    { to: "/a-propos", label: "À propos" },
    { to: "/aquevent", label: "AquaVent™" },
    { to: "/biobot", label: "BioBot™" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-primary" />
          <span className="font-mono text-lg font-semibold tracking-tight text-foreground">
            PHYTOTECH
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <AuthDialog />
          {isAdmin && (
            <Link
              to="/admin"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              title="Espace administrateur"
            >
              <ShieldCheck className="w-4 h-4" /> Admin
            </Link>
          )}
          <Button size="sm" className="rounded-full" asChild>
            <Link to="/precommande">Précommander →</Link>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background px-4 pb-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <AuthDialog />
          {isAdmin && (
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 py-2 text-sm font-medium text-primary"
            >
              <ShieldCheck className="w-4 h-4" /> Admin
            </Link>
          )}
          <Button size="sm" className="rounded-full w-full" asChild>
            <Link to="/precommande" onClick={() => setOpen(false)}>Précommander →</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
