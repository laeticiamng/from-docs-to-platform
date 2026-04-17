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
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-card border-t shadow-lg p-3 md:p-4">
      <div className="container mx-auto max-w-5xl space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <div className="flex items-start gap-2 flex-1 min-w-0">
            <Cookie className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              Cookies essentiels actifs. Acceptez ou refusez les cookies analytiques et marketing.{" "}
              <Link to="/politique-confidentialite" className="underline text-primary hover:text-primary/80">
                En savoir plus
              </Link>
            </p>
          </div>
          <div className="flex gap-2 flex-wrap sm:flex-nowrap shrink-0">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full text-xs h-8"
              onClick={() => setShowDetails((v) => !v)}
            >
              <Settings2 className="w-3.5 h-3.5 mr-1" />
              {showDetails ? "Masquer" : "Personnaliser"}
            </Button>
            <Button variant="outline" size="sm" className="rounded-full text-xs h-8" onClick={handleRejectAll}>
              Refuser
            </Button>
            <Button size="sm" className="rounded-full text-xs h-8" onClick={handleAcceptAll}>
              Tout accepter
            </Button>
          </div>
        </div>

        {showDetails && (
          <div className="space-y-2 pl-6 border-l-2 border-muted pt-2">
            <label className="flex items-center gap-3 text-xs sm:text-sm cursor-not-allowed opacity-70">
              <input type="checkbox" checked disabled className="rounded" />
              <span><strong>Essentiels</strong> — requis pour le site (toujours actifs)</span>
            </label>
            <label className="flex items-center gap-3 text-xs sm:text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="rounded"
              />
              <span><strong>Analytiques</strong> — pages vues, événements anonymisés</span>
            </label>
            <label className="flex items-center gap-3 text-xs sm:text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="rounded"
              />
              <span><strong>Marketing</strong> — personnalisation et campagnes</span>
            </label>
            <Button variant="secondary" size="sm" className="rounded-full text-xs h-8 mt-2" onClick={handleSavePrefs}>
              Enregistrer mes choix
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
