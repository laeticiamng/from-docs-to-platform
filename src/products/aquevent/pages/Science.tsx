import AquaVentLayout from '../components/AquaVentLayout';
import ValidationDashboard from '../components/science/ValidationDashboard';
import SafetyCalculator from '../components/science/SafetyCalculator';
import ResearchLibrary from '../components/science/ResearchLibrary';
import SEOHead from '@/components/SEOHead';

export default function Science() {
  return (
    <AquaVentLayout>
      <SEOHead title="Validation Scientifique — AquaVent" description="Preuves scientifiques et validation sécurité AquaVent." path="/aquevent/science" />
      <div className="pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
            Validation Scientifique
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-4 max-w-2xl mx-auto">
          Des preuves solides, des etudes rigoureuses, une transparence totale.
          Chaque composant AquaVent valide pour l'inhalation humaine.
        </p>
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold font-mono text-[#8B2C5A]">15+</div>
            <div className="text-xs text-gray-500">Etudes Inhalation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-mono text-[#43A047]">0</div>
            <div className="text-xs text-gray-500">Effets Indesirables</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-mono text-[#1E88E5]">100%</div>
            <div className="text-xs text-gray-500">Validation Securite</div>
          </div>
        </div>
      </div>

      <ValidationDashboard />
      <SafetyCalculator />
      <ResearchLibrary />

      {/* Revolutionary Conclusion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              CONCLUSION REVOLUTIONNAIRE
            </h3>
            <p className="text-lg mb-2">
              Premier produit monde ou CHAQUE composant a ete valide pour l'inhalation humaine
            </p>
            <p className="font-bold text-lg mb-2">
              Aucun concurrent ne peut faire cette affirmation scientifique
            </p>
            <p className="text-sm opacity-80">
              Base scientifique inattaquable pour le claim "usage illimite"
            </p>
          </div>
        </div>
      </section>
    </AquaVentLayout>
  );
}
