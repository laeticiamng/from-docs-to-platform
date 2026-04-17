import AquaVentLayout from '../components/AquaVentLayout';
import SEOHead from '@/components/SEOHead';
import { FlaskConical, AlertTriangle } from 'lucide-react';

/**
 * Page Science — version assainie.
 *
 * Les compteurs précédents ("15+ études inhalation", "0 effets indésirables",
 * "100% validation sécurité") et la "CONCLUSION REVOLUTIONNAIRE" n'étaient pas
 * sourcés et présentaient un risque de publicité trompeuse en santé. Les
 * composants ValidationDashboard / SafetyCalculator / ResearchLibrary qui
 * affichaient des données fabriquées sont retirés du rendu tant qu'aucune
 * étude tierce vérifiable ne les alimente.
 */
export default function Science() {
  return (
    <AquaVentLayout>
      <SEOHead
        title="Approche scientifique — AquaVent"
        description="Approche scientifique du projet AquaVent : ingrédients, état des connaissances et programme de validation en cours."
        path="/aquevent/science"
      />
      <div className="pt-12 pb-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FlaskConical className="w-10 h-10 text-[#8B2C5A] mx-auto mb-4" strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
              Approche scientifique
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            État des connaissances sur les ingrédients d'AquaVent et programme de
            validation pré-commerciale en cours.
          </p>
        </div>
      </div>

      {/* Avertissement honnête */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-2 text-sm text-amber-900">
                <p className="font-semibold">Aucune étude clinique propre n'est encore publiée.</p>
                <p>
                  Les ingrédients utilisés (spiruline, anthocyanes de myrtille, phycocyanine)
                  sont reconnus dans l'alimentation par les autorités européennes (EFSA,
                  ANSES). Leur tolérance et leur biodisponibilité <strong>par voie inhalée</strong> font
                  actuellement l'objet de tests internes et n'ont pas encore été publiées
                  dans une revue à comité de lecture.
                </p>
                <p>
                  Aucune allégation thérapeutique n'est faite. AquaVent n'est pas un
                  médicament, n'est pas un substitut nicotinique, n'est pas un dispositif
                  médical et ne se substitue à aucun traitement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingrédients — données factuelles */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">Ingrédients étudiés</h2>
          <div className="space-y-4">
            {[
              {
                name: 'Extrait de spiruline (Arthrospira platensis)',
                status: 'Reconnue comme aliment (ANSES, EFSA novel food framework).',
                inhalation: 'Données spécifiques par voie inhalée limitées. Tests internes en cours.',
              },
              {
                name: 'Anthocyanes (extrait de myrtille)',
                status: 'Polyphénols largement consommés dans l\'alimentation. Activité antioxydante documentée par voie orale.',
                inhalation: 'Profil inhalation peu documenté dans la littérature publique. Évaluation interne en cours.',
              },
              {
                name: 'Phycocyanine',
                status: 'Pigment de spiruline, autorisé comme colorant alimentaire (E18).',
                inhalation: "Tolérance par voie inhalée à confirmer par nos études internes.",
              },
              {
                name: 'Eau filtrée (solvant)',
                status: 'Solvant principal. Aucun propylène glycol, aucune glycérine végétale.',
                inhalation: 'Spécifications pharmaceutiques (pureté, charge endotoxinique, stérilité) seront publiées avec la fiche technique finale.',
              },
            ].map((ing) => (
              <div
                key={ing.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <h3 className="font-bold text-base mb-3 text-[#8B2C5A]">{ing.name}</h3>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="font-semibold text-gray-700">Statut alimentaire :</dt>
                    <dd className="text-gray-600">{ing.status}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">Voie inhalée :</dt>
                    <dd className="text-gray-600">{ing.inhalation}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme de validation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-8">Programme de validation</h2>
          <ol className="space-y-4">
            {[
              { phase: 'En cours', text: 'Caractérisation analytique de la formulation et tests de stabilité.' },
              { phase: 'À venir', text: 'Tests de tolérance in vitro sur cellules épithéliales bronchiques.' },
              { phase: 'À venir', text: 'Étude utilisateurs encadrée avec professionnels de santé partenaires.' },
              { phase: 'À venir', text: 'Publication des résultats et qualification réglementaire finale.' },
            ].map((step, i) => (
              <li key={i} className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                <span className="text-xs font-bold text-[#8B2C5A] uppercase tracking-wider pt-1 w-20 shrink-0">
                  {step.phase}
                </span>
                <span className="text-sm text-gray-700">{step.text}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs text-gray-400 text-center mt-6">
            Calendrier indicatif, susceptible d'évoluer selon les résultats intermédiaires.
          </p>
        </div>
      </section>
    </AquaVentLayout>
  );
}
