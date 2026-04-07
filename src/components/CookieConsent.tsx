import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "phytotech_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem(CONSENT_KEY, accepted ? "accepted" : "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-card border-t shadow-lg p-4 md:p-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{" "}
          <a href="/politique-confidentialite" className="underline text-primary hover:text-primary/80">
            politique de confidentialité
          </a>.
        </p>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" size="sm" className="rounded-full" onClick={() => handleChoice(false)}>
            Refuser
          </Button>
          <Button size="sm" className="rounded-full" onClick={() => handleChoice(true)}>
            Accepter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
