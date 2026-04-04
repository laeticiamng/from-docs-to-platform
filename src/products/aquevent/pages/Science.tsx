import AquaVentLayout from '../components/AquaVentLayout';
import ValidationDashboard from '../components/science/ValidationDashboard';
import ResearchLibrary from '../components/science/ResearchLibrary';

export default function Science() {
  return (
    <AquaVentLayout>
      <div className="pt-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
            Validation scientifique
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Des preuves solides, des études rigoureuses, une transparence totale
        </p>
      </div>

      <ValidationDashboard />
      <ResearchLibrary />
    </AquaVentLayout>
  );
}
