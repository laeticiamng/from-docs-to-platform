import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="text-6xl">🌿</div>
        <h1 className="text-5xl font-bold text-foreground font-mono">404</h1>
        <p className="text-lg text-muted-foreground">Cette page n'existe pas ou a été déplacée.</p>
        <Button asChild className="rounded-full">
          <Link to="/">Retour à l'accueil →</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
