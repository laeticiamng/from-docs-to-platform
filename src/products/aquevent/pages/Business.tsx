import { motion } from 'framer-motion';
import AquaVentLayout from '../components/AquaVentLayout';
import InvestmentDashboard from '../components/business/InvestmentDashboard';
import FinancialCalculators from '../components/business/FinancialCalculators';
import MarketAnalysis from '../components/business/MarketAnalysis';
import SEOHead from '@/components/SEOHead';

export default function Business() {
  return (
    <AquaVentLayout>
      <div className="pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
            Investment Opportunity
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          AquaVent PhytoTech UNLIMITED™ — La revolution de l'inhalation naturelle
        </p>
      </div>

      {/* Executive Summary */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] p-8 rounded-2xl text-white max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Investment Opportunity: La Revolution</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Market Size', value: '28M personnes', subtitle: 'Europe addressable' },
                { title: 'Revenue Projection', value: '900M\u20AC', subtitle: 'Annee 5' },
                { title: 'Exit Valuation', value: '8-12Md\u20AC', subtitle: 'Licorne confirmee' },
                { title: 'Competitive', value: 'Blue Ocean', subtitle: 'Aucun concurrent direct' },
              ].map((metric, i) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 bg-white/10 rounded-xl"
                >
                  <p className="text-xs text-white/70 mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold font-mono">{metric.value}</p>
                  <p className="text-xs text-white/60">{metric.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Revolutionary */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Pourquoi Revolutionnaire ?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Worldwide First',
                subtitle: 'Unlimited Use Claim',
                description: "Aucun produit inhalation monde ne peut dire 'usage illimite'. Nous sommes les premiers.",
                competitive: 'Tous concurrents ont restrictions doses',
              },
              {
                title: 'Science Breakthrough',
                subtitle: 'PhytoTech Platform',
                description: 'Technologie algues vivantes comme plateforme. Applications infinies futures.',
                competitive: 'Chimie traditionnelle obsolete',
              },
              {
                title: 'Business Model Premium',
                subtitle: 'Razor + Blade Optimise',
                description: 'Device premium + cartouches recurrentes = revenus previsibles, marges elevees.',
                competitive: 'E-cig commodity, pharma one-shot',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              >
                <h4 className="text-lg font-bold text-[#8B2C5A] mb-1">{card.title}</h4>
                <p className="text-sm text-[#FFB300] font-bold mb-3">{card.subtitle}</p>
                <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                <p className="text-xs text-gray-400 bg-gray-50 rounded-lg p-2">
                  vs. {card.competitive}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraising Timeline */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-4">Strategie de Financement</h3>
          <p className="text-center text-gray-500 mb-10">
            Capital total: 165M&#8364; — Exit valuation: 8-12Md&#8364;
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Serie A',
                  amount: '15M\u20AC',
                  timing: 'Mois 6',
                  purpose: 'R&D + Clinical + Production',
                  milestones: ['Formulation locked', 'Clinical start', 'Regulatory pathway'],
                  color: '#8B2C5A',
                },
                {
                  name: 'Serie B',
                  amount: '50M\u20AC',
                  timing: 'Mois 24',
                  purpose: 'Launch + Scale + International',
                  milestones: ['Market approval', 'Commercial launch', 'EU expansion'],
                  color: '#1E88E5',
                },
                {
                  name: 'Serie C',
                  amount: '100M\u20AC',
                  timing: 'Mois 48',
                  purpose: 'Global + Platform + Exit prep',
                  milestones: ['Global presence', 'Platform products', 'IPO ready'],
                  color: '#43A047',
                },
              ].map((round, i) => (
                <motion.div
                  key={round.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white rounded-2xl shadow-md p-6 border-t-4"
                  style={{ borderColor: round.color }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-lg" style={{ color: round.color }}>{round.name}</h4>
                    <span className="text-xs text-gray-400 font-mono">{round.timing}</span>
                  </div>
                  <p className="text-3xl font-bold font-mono mb-2" style={{ color: round.color }}>
                    {round.amount}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{round.purpose}</p>
                  <div className="space-y-2">
                    {round.milestones.map((m) => (
                      <div key={m} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="text-green-500">&#10003;</span>
                        {m}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InvestmentDashboard />
      <FinancialCalculators />
      <MarketAnalysis />
    </AquaVentLayout>
  );
}
