import { useState } from "react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Rocket } from "lucide-react";

const packs = [
  { value: "decouverte", label: "Niveau 1 — Le Pot Vivant (49–149€)" },
  { value: "habitat", label: "Niveau 2 — Le Module Maison (690–2 490€)" },
  { value: "autonomie", label: "Niveau 3 — Pack Autonomie Totale (4 900–14 900€)" },
  { value: "autre", label: "Autre / Je ne sais pas encore" },
];

const Precommande = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    pack: "",
    message: "",
  });
  const [website, setWebsite] = useState(""); // honeypot anti-bot

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const trimmed = {
      name: form.name.trim().slice(0, 100),
      email: form.email.trim().slice(0, 255),
      pack: form.pack,
      message: form.message.trim().slice(0, 2000) || null,
    };
    if (!trimmed.name || !trimmed.email || !trimmed.pack) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      setLoading(false);
      return;
    }
    const { data, error } = await supabase.functions.invoke("submit-preorder", { body: { ...trimmed, website } });

    if (error || (data as { error?: string })?.error) {
      const msg = (data as { error?: string })?.error ?? "Erreur lors de l'envoi. Réessayez.";
      toast.error(msg);
    } else {
      toast.success("Merci ! Votre précommande a bien été enregistrée. Nous vous contacterons bientôt.");
      setForm({ name: "", email: "", pack: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <SEOHead title="Liste d'attente — PhytoTech" description="Réservez votre pack PhytoTech sans paiement. Vous serez recontacté avant la commercialisation." path="/precommande" />
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center max-w-2xl space-y-4">
            <Rocket className="w-10 h-10 text-primary mx-auto" strokeWidth={1.5} />
            <h1 className="text-3xl md:text-5xl font-bold font-mono tracking-tight">
              Rejoindre la liste d'attente
            </h1>
            <p className="text-muted-foreground">
              Soyez parmi les premiers informés du lancement PhytoTech.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-4 max-w-xl mx-auto text-xs">
              <div className="rounded-lg border bg-card p-3">
                <p className="font-semibold text-foreground">Aucun paiement</p>
                <p className="text-muted-foreground mt-0.5">requis aujourd'hui</p>
              </div>
              <div className="rounded-lg border bg-card p-3">
                <p className="font-semibold text-foreground">Sans engagement</p>
                <p className="text-muted-foreground mt-0.5">vous restez libre</p>
              </div>
              <div className="rounded-lg border bg-card p-3">
                <p className="font-semibold text-foreground">Livraison estimée</p>
                <p className="text-muted-foreground mt-0.5">fin 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border rounded-2xl p-8 shadow-sm">
              {/* Honeypot anti-bot : ne doit jamais être rempli par un humain */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>
                <label htmlFor="p-website">Website (laissez vide)</label>
                <input id="p-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  required
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="email@exemple.fr"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Pack souhaité</Label>
                <Select
                  value={form.pack}
                  onValueChange={(v) => setForm({ ...form, pack: v })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un pack" />
                  </SelectTrigger>
                  <SelectContent>
                    {packs.map((p) => (
                      <SelectItem key={p.value} value={p.value}>
                        {p.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea
                  id="message"
                  placeholder="Questions, besoins spécifiques..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full rounded-full" disabled={loading} data-testid="preorder-submit">
                {loading ? "Envoi en cours..." : "Confirmer ma précommande →"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Aucun paiement requis pour l'instant. Nous vous contacterons pour finaliser votre commande.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Precommande;
