import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Cookie, Download, ShieldAlert, Trash2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { getConsent, setConsent } from "@/lib/consent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const Preferences = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [analytics, setAnalyticsState] = useState(false);
  const [marketing, setMarketingState] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const c = getConsent();
    if (c) {
      setAnalyticsState(c.analytics);
      setMarketingState(c.marketing);
    }
  }, []);

  const handleSave = () => {
    setConsent({ analytics, marketing });
    toast.success("Préférences enregistrées");
  };

  const handleExport = async () => {
    if (!user) return;
    setExporting(true);
    try {
      const [profile, comments, preorders, contactMsg] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", user.id).single(),
        supabase.from("comments").select("*").eq("user_id", user.id),
        supabase.from("preorders").select("*").eq("email", user.email ?? ""),
        supabase.from("contact_messages").select("*").eq("email", user.email ?? ""),
      ]);
      const data = {
        exported_at: new Date().toISOString(),
        user: { id: user.id, email: user.email, created_at: user.created_at },
        profile: profile.data,
        comments: comments.data ?? [],
        preorders: preorders.data ?? [],
        contact_messages: contactMsg.data ?? [],
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `phytotech-mes-donnees-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Vos données ont été exportées");
    } catch (e) {
      toast.error("Erreur lors de l'export");
    } finally {
      setExporting(false);
    }
  };

  const handleDelete = async () => {
    if (!user) return;
    setDeleting(true);
    try {
      const { data, error } = await supabase.functions.invoke("delete-account");
      if (error || (data as { error?: string })?.error) {
        throw new Error((data as { error?: string })?.error ?? error?.message ?? "Erreur");
      }
      await signOut();
      toast.success("Votre compte et vos données ont été supprimés définitivement.");
      navigate("/");
    } catch (e) {
      toast.error((e as Error).message || "Erreur lors de la suppression");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Préférences & confidentialité — PhytoTech"
        description="Gérez vos préférences de cookies et vos données personnelles."
        path="/preferences"
      />
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-2xl space-y-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Link>
          </Button>

          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Préférences & confidentialité</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Conformité RGPD — gérez vos cookies et exercez vos droits.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Cookie className="w-5 h-5 text-primary" /> Cookies
              </CardTitle>
              <CardDescription>Choisissez les cookies que vous acceptez.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                <div>
                  <Label className="text-sm font-medium">Essentiels</Label>
                  <p className="text-xs text-muted-foreground">Authentification, sécurité — toujours actifs</p>
                </div>
                <Switch checked disabled />
              </div>
              <div className="flex items-center justify-between p-3 rounded-md border">
                <div>
                  <Label htmlFor="analytics" className="text-sm font-medium cursor-pointer">Analytiques</Label>
                  <p className="text-xs text-muted-foreground">Pages vues, événements anonymisés</p>
                </div>
                <Switch id="analytics" checked={analytics} onCheckedChange={setAnalyticsState} />
              </div>
              <div className="flex items-center justify-between p-3 rounded-md border">
                <div>
                  <Label htmlFor="marketing" className="text-sm font-medium cursor-pointer">Marketing</Label>
                  <p className="text-xs text-muted-foreground">Personnalisation et campagnes</p>
                </div>
                <Switch id="marketing" checked={marketing} onCheckedChange={setMarketingState} />
              </div>
              <Button onClick={handleSave} className="w-full rounded-full">Enregistrer</Button>
            </CardContent>
          </Card>

          {user ? (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Download className="w-5 h-5 text-primary" /> Exporter mes données
                  </CardTitle>
                  <CardDescription>
                    Téléchargez l'ensemble de vos données personnelles au format JSON (Art. 20 RGPD — portabilité).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={handleExport} disabled={exporting} variant="outline" className="rounded-full">
                    <Download className="w-4 h-4 mr-2" />
                    {exporting ? "Export en cours..." : "Télécharger mes données"}
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-destructive/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base text-destructive">
                    <Trash2 className="w-5 h-5" /> Supprimer mes données
                  </CardTitle>
                  <CardDescription>
                    Supprime définitivement votre compte, votre profil et vos commentaires
                    (Art. 17 RGPD — droit à l'oubli). Action irréversible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="rounded-full">
                        <Trash2 className="w-4 h-4 mr-2" /> Supprimer mes données
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirmer la suppression ?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Cette action est <strong>irréversible</strong>. Votre compte d'authentification,
                          votre profil et vos commentaires seront définitivement supprimés.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} disabled={deleting} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                          {deleting ? "Suppression..." : "Confirmer la suppression"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="border-dashed">
              <CardContent className="p-6 text-center space-y-2">
                <ShieldAlert className="w-8 h-8 text-muted-foreground mx-auto" />
                <p className="text-sm text-muted-foreground">
                  Connectez-vous pour exporter ou supprimer vos données personnelles.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Preferences;
