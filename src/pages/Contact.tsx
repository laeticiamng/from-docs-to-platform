import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const subjects = [
  "Question générale",
  "Partenariat / Déploiement",
  "Précommande",
  "Presse / Médias",
  "Autre",
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name,
      email: form.email,
      subject: form.subject || "Question générale",
      message: form.message,
    });
    if (error) {
      toast.error("Erreur lors de l'envoi. Réessayez.");
    } else {
      toast.success("Message envoyé ! Nous vous répondrons rapidement.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="Contact — PhytoTech par EmotionsCare" description="Contactez EmotionsCare pour toute question sur PhytoTech, partenariats ou déploiements terrain." path="/contact" />
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <Badge variant="secondary" className="font-mono text-xs tracking-wider mb-4">CONTACT</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Parlons-en</h1>
            <p className="text-lg text-muted-foreground">
              Question, partenariat, déploiement terrain ou simplement envie de discuter — on est là.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5 bg-card border rounded-2xl p-8 shadow-sm">
                <div className="space-y-2">
                  <Label htmlFor="c-name">Nom complet</Label>
                  <Input id="c-name" required placeholder="Votre nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" required placeholder="email@exemple.fr" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-subject">Sujet</Label>
                  <select id="c-subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                    <option value="">Choisir un sujet</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-message">Message</Label>
                  <Textarea id="c-message" required rows={5} placeholder="Votre message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <Button type="submit" className="w-full rounded-full" disabled={loading}>
                  {loading ? "Envoi..." : "Envoyer le message →"}
                </Button>
              </form>
            </div>
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">📍 Adresse</h3>
                  <p className="text-sm text-muted-foreground">EmotionsCare SASU<br />5 rue Caudron<br />80000 Amiens, France</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">✉️ Email</h3>
                  <a href="mailto:contact@emotionscare.fr" className="text-sm text-primary hover:underline">contact@emotionscare.fr</a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">🕐 Réponse</h3>
                  <p className="text-sm text-muted-foreground">Nous répondons sous 48h ouvrées.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
