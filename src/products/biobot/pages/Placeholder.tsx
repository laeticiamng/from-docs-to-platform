import { Link } from "react-router-dom";
import { FlaskConical, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

/**
 * Placeholder honnête pour les anciennes routes /biobot/*.
 *
 * Le contenu BioBot précédent contenait des projections financières,
 * des produits "validés" et des trademarks non déposés qui n'étaient
 * pas sourcés. L'ensemble est mis hors-ligne en attendant un contenu
 * conforme et sourcé. Voir audit interne du 2026-04-17.
 */
export default function BioBotPlaceholder() {
  return (
    <>
      <SEOHead
        title="BioBot — Concept exploratoire (hors-ligne)"
        description="Le concept BioBot est en phase d'exploration interne. Aucune information publique n'est disponible à ce stade."
        path="/biobot"
        noindex
      />
      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-lg text-center space-y-6">
          <FlaskConical
            className="w-12 h-12 text-muted-foreground mx-auto"
            strokeWidth={1.5}
          />
          <h1 className="text-3xl font-bold">Concept en exploration</h1>
          <p className="text-muted-foreground leading-relaxed">
            Le concept BioBot est actuellement en phase de réflexion interne.
            Aucune projection financière, produit ou roadmap n'est communiqué publiquement
            à ce stade. Cette page sera mise à jour lorsqu'un contenu sourcé sera disponible.
          </p>
          <div className="pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à PhytoTech
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
