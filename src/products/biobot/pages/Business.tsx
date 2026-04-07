import { motion } from 'framer-motion';
import BioBotLayout from '../components/BioBotLayout';
import businessData from '../data/business.json';
import SEOHead from '@/components/SEOHead';

export default function Business() {
  return (
    <BioBotLayout>
      <div className="pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#2E7D32] to-[#00897B] bg-clip-text text-transparent">
            Business Model Revolutionnaire
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Platform PhytoTech Ecosystem — Creation d'un secteur trillion &#8364;
        </p>
      </div>

      {/* Revenue Streams */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">4 Flux de Revenus</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {businessData.revenueStreams.map((stream, i) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
              >
                <h3 className="font-bold text-lg text-[#2E7D32] mb-4">{stream.name}</h3>
                <div className="space-y-2">
                  {stream.streams.map((s, j) => (
                    <div key={j} className="flex justify-between items-center text-sm py-1 border-b border-gray-50 last:border-0">
                      <span className="text-gray-600">
                        {'bot' in s ? s.bot : 'category' in s ? s.category : ''}
                      </span>
                      <span className="font-mono font-bold text-gray-800">
                        {'price' in s ? `${s.price}\u20AC` : 'royalty' in s ? s.royalty : 'model' in s ? s.model : 'fee' in s ? s.fee : ''}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-12 bg-gradient-to-r from-[#2E7D32] to-[#00897B]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-10">Projections Financieres Revolutionnaires</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {businessData.projections.map((p, i) => (
              <motion.div
                key={p.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl text-white"
              >
                <p className="text-sm text-white/60 mb-1">An {p.year}</p>
                <p className="text-3xl font-bold font-mono">{p.revenue}&#8364;</p>
                <p className="text-xs text-white/70 mt-2">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Pourquoi Maintenant ?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '\uD83C\uDF0D', title: 'Urgence climatique', desc: 'Solutions urgentement necessaires' },
              { icon: '\uD83E\uDDEC', title: 'Bio-tech breakthrough', desc: 'CRISPR + biologie synthetique' },
              { icon: '\uD83E\uDDE0', title: 'IA + Bio convergence', desc: 'Bio-AI hybride possible' },
              { icon: '\uD83E\uDDF1', title: 'Materiaux bio', desc: 'Bio-composites commerciaux' },
              { icon: '\uD83D\uDD0B', title: 'Stockage energie', desc: 'Bio-batteries en developpement' },
              { icon: '\uD83C\uDFED', title: 'Bio-production', desc: 'Manufacturing biologique scaling' },
              { icon: '\uD83D\uDCB0', title: 'Marche pret', desc: 'Premium pour durabilite' },
              { icon: '\uD83D\uDC65', title: 'Equipe prete', desc: 'Expertise PhytoTech + vision' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <span className="text-2xl block mb-2">{item.icon}</span>
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Creation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Creation de Marche vs Capture</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Nouveau secteur', value: 'Bio-Robotics (0 \u2192 trillion)' },
                { label: 'Platform effects', value: 'Network > linear scaling' },
                { label: 'Ecosystem control', value: 'Technology + applications' },
                { label: 'Global reach', value: 'Every country + sector' },
                { label: 'Monopole position', value: '10+ years advance technologique' },
                { label: 'Mission critical', value: 'Durabilite civilisation' },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white rounded-xl shadow-sm flex items-center gap-3">
                  <span className="text-green-500">&#10003;</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valuation */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-6">Valorisation Ecosysteme Total</h2>
            <div className="space-y-4">
              {[
                { label: 'AquaVent standalone', value: businessData.valuation.aquaventStandalone + '\u20AC' },
                { label: 'BioBot standalone', value: businessData.valuation.biobotStandalone + '\u20AC' },
                { label: 'Synergie multiplicateur', value: businessData.valuation.synergieMultiplicateur + 'x' },
                { label: 'Platform monopoly', value: businessData.valuation.platformMonopoly + '\u20AC' },
              ].map((v) => (
                <div key={v.label} className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white/70">{v.label}</span>
                  <span className="font-mono font-bold text-[#FFB300] text-xl">{v.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-3">Exit Strategy</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {businessData.valuation.exitStrategy.map((exit) => (
                  <span key={exit} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/80">
                    {exit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </BioBotLayout>
  );
}
