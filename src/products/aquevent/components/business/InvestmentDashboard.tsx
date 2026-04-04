import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import marketData from '../../data/market-data.json';
import financialData from '../../data/financial-projections.json';
import { formatCurrency } from '../../utils/calculations';

const COLORS = ['#8B2C5A', '#1E88E5', '#43A047', '#FFB300'];

export default function InvestmentDashboard() {
  const projections = marketData.projections;
  const segments = marketData.segments;
  const tiers = marketData.investmentTiers;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Market Opportunity */}
        <h3 className="text-3xl font-bold text-center mb-4">Opportunité de marché</h3>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Un marché de €85B en pleine croissance, porté par la demande de solutions naturelles et la réglementation anti-tabac.
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

        {/* Market Segments Pie */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h4 className="text-xl font-bold mb-6">Segmentation du marché</h4>
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
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    labelLine
                  >
                    {segments.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => formatCurrency(value, true)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Croissance par segment</h4>
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Projections */}
        <h4 className="text-xl font-bold mb-6">Projections financières (5 ans)</h4>
        <div className="h-96 mb-16 bg-white rounded-2xl shadow-md p-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projections}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(v) => formatCurrency(v, true)} />
              <Tooltip
                formatter={(value: number, name: string) => [
                  formatCurrency(value, true),
                  name === 'revenue' ? 'Revenus' : name === 'costs' ? 'Coûts' : 'Profit',
                ]}
              />
              <Bar dataKey="revenue" fill="#8B2C5A" radius={[4, 4, 0, 0]} name="revenue" />
              <Bar dataKey="costs" fill="#1E88E5" radius={[4, 4, 0, 0]} name="costs" />
              <Bar dataKey="profit" fill="#43A047" radius={[4, 4, 0, 0]} name="profit" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Growth */}
        <h4 className="text-xl font-bold mb-6">Croissance clients</h4>
        <div className="h-72 mb-16 bg-white rounded-2xl shadow-md p-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={projections}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
              <Tooltip formatter={(value: number) => [`${value.toLocaleString('fr-FR')} clients`]} />
              <Line type="monotone" dataKey="customers" stroke="#8B2C5A" strokeWidth={3} dot={{ fill: '#8B2C5A', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Unit Economics */}
        <h4 className="text-xl font-bold mb-6">Unit Economics</h4>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {(['wellnessDevice', 'medicalDevice'] as const).map((key) => {
            const data = financialData.unitEconomics[key];
            const isWellness = key === 'wellnessDevice';
            return (
              <div
                key={key}
                className="p-6 rounded-2xl bg-white shadow-md border-2"
                style={{ borderColor: isWellness ? '#8B2C5A' : '#1E88E5' }}
              >
                <h5 className="font-bold text-lg mb-4" style={{ color: isWellness ? '#8B2C5A' : '#1E88E5' }}>
                  {isWellness ? 'Wellness Edition' : 'Medical Edition'}
                </h5>
                <div className="space-y-3">
                  {[
                    ['Prix device', `€${data.retailPrice}`],
                    ['COGS device', `€${data.cogs}`],
                    ['Marge brute', `${data.grossMargin}%`],
                    ['Prix cartouche', `€${data.cartridgePrice}`],
                    ['Cartouches/mois', `${data.averageCartridgesPerMonth}`],
                    ['LTV 12 mois', `€${data.ltv12Months}`],
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
              <p className="text-2xl font-bold font-mono mt-2 mb-1">{tier.amount}</p>
              <p className="text-sm text-gray-400 mb-4">Equity: {tier.equity}</p>
              <p className="text-lg font-bold mb-4" style={{ color: COLORS[i] }}>
                ROI: {tier.roi}
              </p>
              <ul className="space-y-2">
                {tier.perks.map((perk) => (
                  <li key={perk} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-green-500">✓</span>
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
