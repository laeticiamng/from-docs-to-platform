import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getConsent, acceptAll, rejectAll, setConsent } from "@/lib/consent";
import { Cookie, Settings2 } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    setVisible(false);
  };
  const handleRejectAll = () => {
    rejectAll();
    setVisible(false);
  };
  const handleSavePrefs = () => {
    setConsent({ analytics, marketing });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-card border-t shadow-lg p-4 md:p-6">
      <div className="container mx-auto max-w-4xl space-y-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-foreground font-medium mb-1">Vos préférences cookies</p>
            <p className="text-sm text-muted-foreground">
              Nous utilisons des cookies essentiels au fonctionnement du site.{" "}
              Vous pouvez accepter ou refuser les cookies analytiques et marketing. Voir notre{" "}
              <Link to="/politique-confidentialite" className="underline text-primary hover:text-primary/80">
                politique de confidentialité
              </Link>.
            </p>
          </div>
        </div>

        {showDetails && (
          <div className="space-y-2 pl-8 border-l-2 border-muted">
            <label className="flex items-center gap-3 text-sm cursor-not-allowed opacity-70">
              <input type="checkbox" checked disabled className="rounded" />
              <span><strong>Essentiels</strong> — requis pour le site (toujours actifs)</span>
            </label>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="rounded"
              />
              <span><strong>Analytiques</strong> — nous aident à améliorer le site (pages vues, événements)</span>
            </label>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="rounded"
              />
              <span><strong>Marketing</strong> — personnalisation des contenus et campagnes</span>
            </label>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full"
            onClick={() => setShowDetails((v) => !v)}
          >
            <Settings2 className="w-4 h-4 mr-1" />
            {showDetails ? "Masquer" : "Personnaliser"}
          </Button>
          <Button variant="outline" size="sm" className="rounded-full" onClick={handleRejectAll}>
            Tout refuser
          </Button>
          {showDetails && (
            <Button variant="secondary" size="sm" className="rounded-full" onClick={handleSavePrefs}>
              Enregistrer mes choix
            </Button>
          )}
          <Button size="sm" className="rounded-full" onClick={handleAcceptAll}>
            Tout accepter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
