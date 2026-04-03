import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthDialog from "@/components/AuthDialog";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/pack-autonomie", label: "Autonomie Totale" },
    { to: "/afrique", label: "Afrique & Territoires" },
    { to: "/domaines", label: "Domaines" },
    { to: "/a-propos", label: "À propos" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-mono text-lg font-semibold tracking-tight text-foreground">
            PHYTOTECH
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
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
          <Button size="sm" className="rounded-full" asChild>
            <Link to="/precommande">Précommander →</Link>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background px-4 pb-4 space-y-3">
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
          <Button size="sm" className="rounded-full w-full" asChild>
            <Link to="/precommande" onClick={() => setOpen(false)}>Précommander →</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
