import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const packs = [
  { value: "decouverte", label: "🌱 Niveau 1 — Le Pot Vivant (49–149€)" },
  { value: "habitat", label: "🏡 Niveau 2 — Le Module Maison (690–2 490€)" },
  { value: "autonomie", label: "🏗️ Niveau 3 — Pack Autonomie Totale (4 900–14 900€)" },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("preorders").insert({
      name: form.name,
      email: form.email,
      pack: form.pack,
      message: form.message || null,
    });

    if (error) {
      toast.error("Erreur lors de l'envoi. Réessayez.");
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
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <span className="text-5xl mb-4 block">🚀</span>
            <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-4">
              Précommander
            </h1>
            <p className="text-lg text-muted-foreground">
              Réservez votre pack PhytoTech et faites partie des premiers à adopter
              la biotechnologie végétale chez vous.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border rounded-2xl p-8 shadow-sm">
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

              <Button type="submit" className="w-full rounded-full" disabled={loading}>
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
