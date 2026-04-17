import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertTriangle,
  Mail,
  ShieldAlert,
  ScrollText,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

/**
 * Page /investisseurs — informationnelle uniquement.
 *
 * Héberge les projections financières précédemment affichées sur la home,
 * encadrées par un avertissement AMF clair (pas une offre publique, pas
 * une sollicitation à investir, réservé aux investisseurs professionnels
 * pour la suite du dialogue).
 */

const revenuProjections = [
  { product: "Kit Découverte « Le Pot Vivant »", price: "99 €", units: "5 000", ca: "495 000 €" },
  { product: "Module Maison", price: "1 490 €", units: "800", ca: "1 192 000 €" },
  { product: "Autonomie Village (B2B/ONG)", price: "12 000 €", units: "30", ca: "360 000 €" },
  { product: "Abonnement app + consommables", price: "4,99 €/mois", units: "3 000", ca: "179 640 €" },
];

const totalCa = "2 226 640 €";

export default function Investisseurs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <SEOHead
        title="Investisseurs — PhytoTech (informationnel)"
        description="Projections de revenus indicatives PhytoTech. Document informationnel uniquement, ne constitue pas une offre publique de titres ni une sollicitation à investir."
        path="/investisseurs"
        noIndex
      />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background border-b">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
            <TrendingUp className="w-10 h-10 text-primary mx-auto" strokeWidth={1.5} />
            <Badge variant="secondary" className="font-mono text-xs">Document informationnel</Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Investisseurs — PhytoTech
            </h1>
            <p className="text-muted-foreground">
              EmotionsCare SASU porte le projet PhytoTech (kits domestiques
              bio-inspirés) en phase pré-commerciale. Cette page partage des
              projections indicatives à destination d'investisseurs intéressés.
            </p>
          </div>
        </section>

        {/* Avertissement AMF */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="rounded-2xl border-l-4 border-destructive bg-destructive/10 p-5">
              <div className="flex gap-3">
                <ShieldAlert className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div className="space-y-2 text-sm text-foreground/90">
                  <p className="font-semibold">
                    Avertissement — informationnel uniquement, pas une offre au public.
                  </p>
                  <p>
                    Cette page n'est pas un document d'offre, ne constitue pas un
                    appel public à l'épargne au sens du règlement (UE) 2017/1129
                    (« Prospectus »), et ne doit pas être interprétée comme une
                    sollicitation à investir, à acquérir ou à souscrire des titres
                    financiers de EmotionsCare SASU.
                  </p>
                  <p>
                    Aucune levée de fonds publique n'est ouverte à ce jour. Les
                    discussions avec des investisseurs sont conduites de gré à gré,
                    sous accord de confidentialité, exclusivement avec des
                    investisseurs professionnels qualifiés au sens de l'article
                    L. 533-16 du Code monétaire et financier.
                  </p>
                  <p>
                    Les chiffres présentés ci-dessous sont des <strong>projections
                    indicatives</strong>, basées sur des hypothèses internes et susceptibles
                    d'évoluer. Ils ne constituent en aucun cas une garantie de
                    résultat ou un engagement contractuel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statut projet */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-8">Statut du projet</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Phase",
                  body: "Pré-commerciale. Plusieurs briques au stade prototype (TRL 6-8). Aucun produit n'est en vente à ce jour ; les prix affichés sur le site sont indicatifs.",
                },
                {
                  title: "Modèle",
                  body: "B2C (kits domestiques 49 €-2 490 €), B2B/ONG (Autonomie Village), abonnement app + consommables. Distribution ciblée jardineries, e-commerce, marketplaces.",
                },
                {
                  title: "Différenciation",
                  body: "PhytoTech se positionne en complément du solaire et du réseau, jamais en remplacement. Briques bio-inspirées (PMFC, microalgues, biofiltres).",
                },
                {
                  title: "Gouvernance",
                  body: "EmotionsCare SASU, fondée par Laeticia Motongane. Siège social : 5 rue Caudron, 80000 Amiens — SIREN 944 505 445.",
                },
              ].map((c) => (
                <Card key={c.title}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="font-semibold text-base text-primary">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projections */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 mb-2">
              <ScrollText className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Projections de revenus — Année 1 (indicatif)</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Hypothèses internes basées sur les volumes ciblés en première année
              de commercialisation, sous réserve de la finalisation R&D, de la
              qualification réglementaire et de la mise en place des canaux de
              distribution.
            </p>
            <Card>
              <CardContent className="p-0 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-mono text-xs">Produit</TableHead>
                      <TableHead className="font-mono text-xs">Prix moyen</TableHead>
                      <TableHead className="font-mono text-xs">Unités</TableHead>
                      <TableHead className="font-mono text-xs text-right">CA projeté</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {revenuProjections.map((r) => (
                      <TableRow key={r.product}>
                        <TableCell className="text-sm">{r.product}</TableCell>
                        <TableCell className="text-sm">{r.price}</TableCell>
                        <TableCell className="text-sm">{r.units}</TableCell>
                        <TableCell className="text-right font-semibold text-sm">{r.ca}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-primary/10 font-bold">
                      <TableCell colSpan={3}>Total Année 1 (projection)</TableCell>
                      <TableCell className="text-right text-primary">{totalCa}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <div className="mt-4 rounded-xl border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20 p-4">
              <div className="flex gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 dark:text-amber-200">
                  <strong>Hypothèses, méthodologie et limites</strong> : les volumes,
                  prix et taux d'attrition retenus sont détaillés dans le memo
                  confidentiel partagé sur demande sous NDA. Voir aussi notre page{" "}
                  <Link to="/methodologie" className="underline">/methodologie</Link>{" "}
                  pour les principes éditoriaux appliqués à tous les chiffres
                  publiés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 border-t">
          <div className="container mx-auto px-4 max-w-2xl text-center space-y-4">
            <Mail className="w-10 h-10 text-primary mx-auto" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold">Investisseur professionnel ?</h2>
            <p className="text-muted-foreground">
              Pour demander le memo confidentiel, accéder au business plan détaillé
              ou rencontrer l'équipe, contactez-nous directement. Nous répondons
              sous 5 jours ouvrés aux demandes qualifiées.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button asChild>
                <Link to="/contact">
                  Contacter l'équipe <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/methodologie">Voir la méthodologie</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground pt-4">
              Réservé aux investisseurs professionnels au sens de l'article
              L. 533-16 du Code monétaire et financier.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
