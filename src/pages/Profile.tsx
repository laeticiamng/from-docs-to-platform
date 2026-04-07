import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [saving, setSaving] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load profile
  if (user && !loaded) {
    supabase.from("profiles").select("display_name").eq("id", user.id).single().then(({ data }) => {
      if (data?.display_name) setDisplayName(data.display_name);
      setLoaded(true);
    });
  }

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="p-8 text-center space-y-4">
              <span className="text-5xl block">🔒</span>
              <h1 className="text-2xl font-bold text-foreground">Accès réservé</h1>
              <p className="text-muted-foreground">Connectez-vous pour accéder à votre profil.</p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from("profiles").update({ display_name: displayName }).eq("id", user.id);
    if (error) {
      toast.error("Erreur lors de la sauvegarde.");
    } else {
      toast.success("Profil mis à jour !");
    }
    setSaving(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="Mon profil — PhytoTech" description="Gérez votre profil PhytoTech." path="/profil" />
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-lg space-y-8">
          <div className="text-center space-y-2">
            <span className="text-5xl block">👤</span>
            <h1 className="text-3xl font-bold text-foreground">Mon profil</h1>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Email</span>
                <Badge variant="secondary" className="font-mono text-xs">{user.email}</Badge>
              </div>
              <form onSubmit={handleSave} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="display-name">Nom d'affichage</Label>
                  <Input
                    id="display-name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Votre nom"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full" disabled={saving}>
                  {saving ? "Sauvegarde..." : "Enregistrer les modifications"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <Button variant="outline" className="rounded-full" asChild>
              <Link to="/">← Retour à l'accueil</Link>
            </Button>
            <Button variant="ghost" className="rounded-full text-destructive hover:text-destructive" onClick={() => signOut()}>
              Se déconnecter
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
