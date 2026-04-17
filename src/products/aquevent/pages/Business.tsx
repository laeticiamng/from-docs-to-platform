import AquaVentLayout from '../components/AquaVentLayout';
import SEOHead from '@/components/SEOHead';
import { AlertTriangle, Mail } from 'lucide-react';
import AquaVentButton from '../components/ui/AquaVentButton';
import { Link } from 'react-router-dom';

/**
 * Page Investisseurs — version assainie.
 *
 * Les chiffres marché (28M, 900M€, 8-12Md€, 165M€), la valorisation, la
 * timeline Série A/B/C et le positionnement "Licorne / Blue Ocean" précédents
 * n'étaient pas sourcés et constituaient un risque de publicité trompeuse vis-à-vis
 * d'investisseurs potentiels (AMF). Ils sont retirés tant qu'aucun document
 * (memo de levée, business plan validé, étude de marché tierce) ne les confirme.
 */
export default function Business() {
  return (
    <AquaVentLayout>
      <SEOHead
        title="Investisseurs — AquaVent"
        description="Information aux investisseurs intéressés par le projet AquaVent. Phase pré-commerciale, aucune levée publique en cours."
        path="/aquevent/business"
        noIndex
      />
      <div className="pt-12 pb-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
              Investisseurs
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            AquaVent est un projet en phase pré-commerciale porté par EmotionsCare SASU.
          </p>
        </div>
      </div>

      {/* Avertissement */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-2 text-sm text-amber-900">
                <p className="font-semibold">Aucune levée publique n'est ouverte à ce jour.</p>
                <p>
                  Cette page n'est pas un document d'offre, ne constitue pas un appel public
                  à l'épargne et ne doit pas être interprétée comme une sollicitation à
                  investir. Aucune projection financière, valorisation ou timeline de levée
                  n'est communiquée publiquement à ce stade.
                </p>
                <p>
                  Les business plans, hypothèses de marché et éléments financiers sont
                  partagés sur demande, sous accord de confidentialité, exclusivement avec
                  des investisseurs professionnels qualifiés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statut projet — éléments factuels uniquement */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">Où en est le projet ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Concept produit',
                body: "Inhalateur à base d'extraits végétaux (spiruline, anthocyanes, phycocyanine), sans nicotine, sans propylène glycol ni glycérine.",
              },
              {
                title: 'Phase actuelle',
                body: "Pré-commerciale. Validation interne de la formulation et tests de tolérance par voie inhalée en cours.",
              },
              {
                title: 'Marché ciblé',
                body: "Europe, segments bien-être et accompagnement comportemental. Ne se positionne pas comme dispositif médical ni substitut nicotinique.",
              },
              {
                title: 'Statut réglementaire',
                body: "En cours de qualification. Le cadre applicable (TPD, dispositif, alimentaire) sera précisé après finalisation de la formulation.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <h3 className="font-bold text-base mb-2 text-[#8B2C5A]">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact investisseurs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <Mail className="w-10 h-10 text-[#8B2C5A] mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="text-2xl font-bold mb-3">Investisseur professionnel ?</h2>
          <p className="text-gray-600 mb-6">
            Pour discuter du projet, demander le memo confidentiel ou rencontrer
            l'équipe, contactez-nous directement. Nous répondons sous 5 jours ouvrés
            aux demandes qualifiées.
          </p>
          <Link to="/contact">
            <AquaVentButton variant="premium" size="lg">
              Contacter l'équipe
            </AquaVentButton>
          </Link>
          <p className="text-xs text-gray-400 mt-6">
            Réservé aux investisseurs professionnels au sens de l'article L. 533-16
            du Code monétaire et financier.
          </p>
        </div>
      </section>
    </AquaVentLayout>
  );
}
