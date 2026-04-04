import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { calculateROI, calculateBreakeven, generateProjections, formatCurrency } from '../../utils/calculations';
import { useAnalytics, AquaVentEvents } from '../../hooks/useAnalytics';

type CalculatorTab = 'roi' | 'breakeven' | 'projections';

export default function FinancialCalculators() {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('roi');
  const { trackEvent } = useAnalytics();

  // ROI State
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [years, setYears] = useState(5);
  const [annualReturn, setAnnualReturn] = useState(45);

  // Breakeven State
  const [fixedCosts, setFixedCosts] = useState(180000);
  const [pricePerUnit, setPricePerUnit] = useState(79);
  const [variableCost, setVariableCost] = useState(22);

  // Projection State
  const [growthRate, setGrowthRate] = useState(120);
  const [pricePoint, setPricePoint] = useState(79);

  const roiResult = useMemo(
    () => calculateROI(investmentAmount, years, annualReturn),
    [investmentAmount, years, annualReturn]
  );

  const breakevenResult = useMemo(
    () => calculateBreakeven(fixedCosts, pricePerUnit, variableCost),
    [fixedCosts, pricePerUnit, variableCost]
  );

  const projectionResult = useMemo(
    () =>
      generateProjections({
        investmentAmount,
        marketPenetration: 5,
        pricePoint,
        growthRate,
        timeHorizon: years,
      }),
    [investmentAmount, pricePoint, growthRate, years]
  );

  const handleTabChange = (tab: CalculatorTab) => {
    setActiveTab(tab);
    trackEvent(AquaVentEvents.FINANCIAL_CALCULATOR_USE, { calculator: tab });
  };

  const tabs: { key: CalculatorTab; label: string }[] = [
    { key: 'roi', label: 'ROI Investisseur' },
    { key: 'breakeven', label: 'Seuil de rentabilité' },
    { key: 'projections', label: 'Projections' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-4">Calculateurs financiers</h3>
        <p className="text-center text-gray-500 mb-10">
          Simulez vos scénarios d'investissement en temps réel
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-[#8B2C5A] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* ROI Calculator */}
          {activeTab === 'roi' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Montant d'investissement: {formatCurrency(investmentAmount)}
                  </label>
                  <input
                    type="range"
                    min={10000}
                    max={5000000}
                    step={10000}
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full accent-[#8B2C5A]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Horizon (années): {years}
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full accent-[#8B2C5A]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Rendement annuel estimé: {annualReturn}%
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={100}
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(Number(e.target.value))}
                    className="w-full accent-[#8B2C5A]"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#8B2C5A]/5 to-[#1E88E5]/5 rounded-2xl p-8">
                <h4 className="text-lg font-bold text-gray-700 mb-6">Résultats</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Retour total</p>
                    <p className="text-3xl font-bold font-mono text-[#8B2C5A]">
                      {formatCurrency(roiResult.totalReturn)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ROI</p>
                    <p className="text-2xl font-bold font-mono text-[#43A047]">
                      +{roiResult.roi.toFixed(0)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rendement annualisé</p>
                    <p className="text-2xl font-bold font-mono text-[#1E88E5]">
                      {roiResult.annualized.toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Multiple</p>
                    <p className="text-2xl font-bold font-mono text-[#FFB300]">
                      {(roiResult.totalReturn / investmentAmount).toFixed(1)}x
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Breakeven Calculator */}
          {activeTab === 'breakeven' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Coûts fixes mensuels: {formatCurrency(fixedCosts)}
                  </label>
                  <input
                    type="range"
                    min={50000}
                    max={500000}
                    step={10000}
                    value={fixedCosts}
                    onChange={(e) => setFixedCosts(Number(e.target.value))}
                    className="w-full accent-[#1E88E5]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Prix par unité: €{pricePerUnit}
                  </label>
                  <input
                    type="range"
                    min={49}
                    max={199}
                    value={pricePerUnit}
                    onChange={(e) => setPricePerUnit(Number(e.target.value))}
                    className="w-full accent-[#1E88E5]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Coût variable par unité: €{variableCost}
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={80}
                    value={variableCost}
                    onChange={(e) => setVariableCost(Number(e.target.value))}
                    className="w-full accent-[#1E88E5]"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1E88E5]/5 to-[#43A047]/5 rounded-2xl p-8">
                <h4 className="text-lg font-bold text-gray-700 mb-6">Seuil de rentabilité</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Unités nécessaires/mois</p>
                    <p className="text-3xl font-bold font-mono text-[#1E88E5]">
                      {breakevenResult === Infinity ? '∞' : breakevenResult.toLocaleString('fr-FR')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Marge par unité</p>
                    <p className="text-2xl font-bold font-mono text-[#43A047]">
                      €{pricePerUnit - variableCost}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Marge brute</p>
                    <p className="text-2xl font-bold font-mono text-[#8B2C5A]">
                      {(((pricePerUnit - variableCost) / pricePerUnit) * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">CA mensuel requis</p>
                    <p className="text-2xl font-bold font-mono text-[#FFB300]">
                      {formatCurrency(breakevenResult === Infinity ? 0 : breakevenResult * pricePerUnit)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Projections */}
          {activeTab === 'projections' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Taux de croissance: {growthRate}%/an
                  </label>
                  <input
                    type="range"
                    min={20}
                    max={300}
                    value={growthRate}
                    onChange={(e) => setGrowthRate(Number(e.target.value))}
                    className="w-full accent-[#43A047]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Prix moyen: €{pricePoint}
                  </label>
                  <input
                    type="range"
                    min={49}
                    max={199}
                    value={pricePoint}
                    onChange={(e) => setPricePoint(Number(e.target.value))}
                    className="w-full accent-[#43A047]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Horizon: {years} ans
                  </label>
                  <input
                    type="range"
                    min={3}
                    max={10}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full accent-[#43A047]"
                  />
                </div>
              </div>

              <div className="h-80 bg-white rounded-2xl shadow-md p-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projectionResult}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" />
                    <YAxis tickFormatter={(v) => formatCurrency(v, true)} />
                    <Tooltip formatter={(value: number) => formatCurrency(value, true)} />
                    <Line type="monotone" dataKey="revenue" stroke="#8B2C5A" strokeWidth={3} name="Revenus" />
                    <Line type="monotone" dataKey="costs" stroke="#1E88E5" strokeWidth={2} strokeDasharray="5 5" name="Coûts" />
                    <Line type="monotone" dataKey="profit" stroke="#43A047" strokeWidth={3} name="Profit" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
