import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import marketData from '../../data/market-data.json';
import financialData from '../../data/financial-projections.json';
import { formatCurrency } from '../../utils/calculations';
import type { MarketSegment, InvestmentTier } from '../../types/business';

const COLORS = ['#8B2C5A', '#1E88E5', '#43A047', '#FFB300'];

export default function InvestmentDashboard() {
  const [activeScenario, setActiveScenario] = useState(1); // 0=conservative, 1=realistic, 2=optimistic

  const projections = marketData.projections;
  const segments = marketData.segments as (MarketSegment & { revenue?: string })[];
  const tiers = marketData.investmentTiers as InvestmentTier[];
  const scenarios = marketData.scenarioProjections as { name: string; userGrowth: number[]; revenue: number[]; ebitda: number[] }[];

  const scenarioData = scenarios[activeScenario];
  const years = [2026, 2027, 2028, 2029, 2030];
  const scenarioChartData = years.map((year, i) => ({
    year,
    users: scenarioData.userGrowth[i],
    revenue: scenarioData.revenue[i],
    ebitda: scenarioData.ebitda[i],
  }));

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Market Opportunity */}
        <h3 className="text-3xl font-bold text-center mb-4">Opportunite de marche</h3>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          28M personnes addressable en Europe. Blue ocean complet - aucun concurrent direct.
        </p>

        {/* TAM/SAM/SOM */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'TAM', sublabel: 'Total Addressable Market', value: marketData.globalMarket.tam, color: '#8B2C5A' },
            { label: 'SAM', sublabel: 'Serviceable Addressable Market', value: marketData.globalMarket.sam, color: '#1E88E5' },
            { label: 'SOM', sublabel: 'Serviceable Obtainable Market', value: marketData.globalMarket.som, color: '#43A047' },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
            >
              <span className="text-sm font-bold tracking-wider" style={{ color: m.color }}>
                {m.label}
              </span>
              <p className="text-xs text-gray-400 mt-1 mb-4">{m.sublabel}</p>
              <p className="text-3xl font-bold font-mono" style={{ color: m.color }}>
                {formatCurrency(m.value, true)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scenario Projections */}
        <h4 className="text-xl font-bold mb-4">Projections Financieres Revolutionnaires</h4>
        <p className="text-gray-500 mb-6 text-sm">
          3 scenarios: Conservative, Realistic, Optimistic — Toutes les valeurs en M&#8364;
        </p>

        <div className="flex gap-2 mb-6">
          {scenarios.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActiveScenario(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeScenario === i
                  ? 'bg-[#8B2C5A] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {years.map((year, i) => (
            <div key={year} className="bg-white rounded-xl shadow-sm p-4 text-center border border-gray-100">
              <p className="text-sm font-mono text-gray-400">{year}</p>
              <p className="text-xl font-bold font-mono text-[#8B2C5A]">{scenarioData.revenue[i]}M&#8364;</p>
              <p className="text-xs text-gray-500">Revenue</p>
              <p className={`text-sm font-bold font-mono mt-1 ${scenarioData.ebitda[i] >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {scenarioData.ebitda[i]}M&#8364;
              </p>
              <p className="text-xs text-gray-500">EBITDA</p>
              <p className="text-xs font-mono text-gray-400 mt-1">
                {(scenarioData.userGrowth[i] / 1000).toFixed(0)}K users
              </p>
            </div>
          ))}
        </div>

        <div className="h-80 mb-16 bg-white rounded-2xl shadow-md p-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={scenarioChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(v) => `${v}M`} />
              <Tooltip formatter={(value: number) => [`${value}M\u20AC`]} />
              <Line type="monotone" dataKey="revenue" stroke="#8B2C5A" strokeWidth={3} name="Revenue" dot={{ fill: '#8B2C5A', r: 5 }} />
              <Line type="monotone" dataKey="ebitda" stroke="#43A047" strokeWidth={3} name="EBITDA" dot={{ fill: '#43A047', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Market Segments */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h4 className="text-xl font-bold mb-6">Segmentation du marche</h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={segments}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="tam"
                    nameKey="name"
                    label={({ name, percent }: { name: string; percent: number }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    labelLine
                  >
                    {segments.map((_: unknown, i: number) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => formatCurrency(value, true)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Segments addressables</h4>
            <div className="space-y-4">
              {segments.map((seg) => (
                <div key={seg.id} className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">{seg.name}</span>
                    <span className="text-sm font-bold" style={{ color: seg.color }}>
                      {seg.growth}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${(seg.tam / marketData.globalMarket.tam) * 100}%`,
                          background: seg.color,
                        }}
                      />
                    </div>
                    <span className="text-xs font-mono text-gray-400">{seg.size}</span>
                  </div>
                  {seg.revenue && (
                    <p className="text-xs text-gray-400 mt-1">{seg.revenue}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unit Economics UNLIMITED */}
        <h4 className="text-xl font-bold mb-6">Unit Economics — UNLIMITED™</h4>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {(['unlimitedDevice', 'wellnessDevice', 'medicalDevice'] as const).map((key) => {
            const data = (financialData.unitEconomics as Record<string, { retailPrice: number; cogs: number; grossMargin: number; cartridgePrice: number; cartridgeCogs: number; cartridgeMargin: number; averageCartridgesPerMonth: number; ltv12Months: number }>)[key];
            if (!data) return null;
            const isUnlimited = key === 'unlimitedDevice';
            const color = isUnlimited ? '#FFB300' : key === 'wellnessDevice' ? '#8B2C5A' : '#1E88E5';
            return (
              <div
                key={key}
                className={`p-6 rounded-2xl bg-white shadow-md border-2 ${isUnlimited ? 'ring-2 ring-[#FFB300]/20' : ''}`}
                style={{ borderColor: color }}
              >
                <h5 className="font-bold text-lg mb-4" style={{ color }}>
                  {isUnlimited ? 'UNLIMITED\u2122' : key === 'wellnessDevice' ? 'Wellness' : 'Medical'}
                  {isUnlimited && <span className="text-xs ml-2 bg-[#FFB300]/10 text-[#FFB300] px-2 py-0.5 rounded-full">STAR</span>}
                </h5>
                <div className="space-y-3">
                  {[
                    ['Prix device', `\u20AC${data.retailPrice}`],
                    ['COGS device', `\u20AC${data.cogs}`],
                    ['Marge brute', `${data.grossMargin}%`],
                    ['Prix cartouche', `\u20AC${data.cartridgePrice}`],
                    ['Cartouches/mois', `${data.averageCartridgesPerMonth}`],
                    ['LTV 12 mois', `\u20AC${data.ltv12Months}`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{label}</span>
                      <span className="font-mono font-bold text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Investment Tiers */}
        <h4 className="text-xl font-bold mb-6">Niveaux d'investissement</h4>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <span className="text-sm font-bold tracking-wider" style={{ color: COLORS[i] }}>
                {tier.name}
              </span>
              <p className="text-2xl font-bold font-mono mt-2 mb-1">\u20AC{tier.amount}</p>
              <p className="text-sm text-gray-400 mb-4">Equity: {tier.equity}</p>
              <p className="text-lg font-bold mb-4" style={{ color: COLORS[i] }}>
                ROI: {tier.roi}
              </p>
              <ul className="space-y-2">
                {tier.perks.map((perk: string) => (
                  <li key={perk} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-green-500">&#10003;</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
