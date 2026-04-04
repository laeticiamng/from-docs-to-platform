import AquaVentLayout from '../components/AquaVentLayout';
import InvestmentDashboard from '../components/business/InvestmentDashboard';
import FinancialCalculators from '../components/business/FinancialCalculators';
import MarketAnalysis from '../components/business/MarketAnalysis';

export default function Business() {
  return (
    <AquaVentLayout>
      <div className="pt-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
            Espace Investisseurs
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Opportunité d'investissement dans l'innovation PhytoTech™ — Un marché de €85B en pleine disruption
        </p>
      </div>

      <InvestmentDashboard />
      <FinancialCalculators />
      <MarketAnalysis />
    </AquaVentLayout>
  );
}
