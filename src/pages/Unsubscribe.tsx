import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Loader2, CheckCircle2, XCircle, MailMinus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";

type Status = "validating" | "valid" | "already" | "invalid" | "confirming" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("validating");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const validate = async () => {
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`;
        const res = await fetch(url, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        });
        const data = await res.json();
        if (!res.ok) {
          setStatus("invalid");
        } else if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already");
        } else if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      } catch {
        setStatus("invalid");
      }
    };
    void validate();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setStatus("confirming");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
    if (error || !data?.success) {
      if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } else {
      setStatus("success");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <SEOHead title="Désabonnement — PHYTOTECH" description="Gestion de votre abonnement aux emails" noIndex />
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
            <MailMinus className="w-6 h-6 text-muted-foreground" />
          </div>
          <CardTitle>Désabonnement</CardTitle>
          <CardDescription>Gérer la réception de nos emails</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {status === "validating" && (
            <div className="flex flex-col items-center gap-2 py-4">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Vérification du lien…</p>
            </div>
          )}
          {status === "valid" && (
            <>
              <p className="text-sm">Confirmez-vous votre désabonnement ? Vous ne recevrez plus d'emails de notre part.</p>
              <Button onClick={confirm} className="w-full">Confirmer le désabonnement</Button>
            </>
          )}
          {status === "confirming" && (
            <div className="flex flex-col items-center gap-2 py-4">
              <Loader2 className="w-6 h-6 animate-spin" />
              <p className="text-sm text-muted-foreground">Traitement…</p>
            </div>
          )}
          {status === "success" && (
            <div className="flex flex-col items-center gap-2 py-4">
              <CheckCircle2 className="w-10 h-10 text-primary" />
              <p className="font-medium">Désabonnement confirmé</p>
              <p className="text-sm text-muted-foreground">Vous ne recevrez plus d'emails de notre part.</p>
            </div>
          )}
          {status === "already" && (
            <div className="flex flex-col items-center gap-2 py-4">
              <CheckCircle2 className="w-10 h-10 text-muted-foreground" />
              <p className="font-medium">Déjà désabonné(e)</p>
              <p className="text-sm text-muted-foreground">Cette adresse n'est plus dans notre liste.</p>
            </div>
          )}
          {(status === "invalid" || status === "error") && (
            <div className="flex flex-col items-center gap-2 py-4">
              <XCircle className="w-10 h-10 text-destructive" />
              <p className="font-medium">Lien invalide ou expiré</p>
              <p className="text-sm text-muted-foreground">
                Contactez-nous si le problème persiste.
              </p>
            </div>
          )}
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Unsubscribe;
