import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BioBotLayout from '../components/BioBotLayout';

const foundations = [
  { name: 'Spirulina platensis', role: 'Base Technologique', aquevent: 'Eau biofiltree + extraits 1.2mg/ml', biobot: 'Bioreacteurs vivants integres structure', color: '#1E88E5' },
  { name: 'Anthocyanes Myrtille', role: 'Couleur + Protection', aquevent: 'Conservation naturelle 2.5mg/ml', biobot: 'Pigments adaptatifs + protection UV', color: '#8B2C5A' },
  { name: 'Phycocyanine', role: 'Performance + Communication', aquevent: 'Performance respiratoire 0.8mg/ml', biobot: 'Conducteur bio-electrique + memoire', color: '#7B1FA2' },
  { name: 'Eau Biofiltree', role: 'Circulation + Vie', aquevent: 'Medium isotonique parfait', biobot: 'Systeme circulatoire robotique', color: '#00897B' },
];

const modules = [
  { icon: '\u2600\uFE0F', title: 'Bio-Energie', desc: 'Peau photosynthetique vivante + batteries biologiques', link: '/biobot/technology', color: '#FFB300' },
  { icon: '\uD83E\uDDF1', title: 'Bio-Materiaux', desc: 'AlgaComposite\u2122 + MyceliumNet\u2122 auto-assemblage', link: '/biobot/technology', color: '#2E7D32' },
  { icon: '\uD83E\uDDE0', title: 'Bio-Intelligence', desc: 'PhytoMind\u2122 neurones algaux + swarm intelligence', link: '/biobot/technology', color: '#7B1FA2' },
  { icon: '\u267B\uFE0F', title: 'Cycle Ferme', desc: 'BioRecycler\u2122 zero dechet + reproduction autonome', link: '/biobot/technology', color: '#00897B' },
  { icon: '\uD83C\uDFE5', title: 'HealthBot', desc: 'Production medicaments in-situ + extension AquaVent', link: '/biobot/applications', color: '#E53935' },
  { icon: '\uD83C\uDF3E', title: 'AgroBot', desc: 'Agriculture 5.0 revolutionnaire Beyond Organic', link: '/biobot/applications', color: '#43A047' },
  { icon: '\uD83C\uDF0A', title: 'OceanBot', desc: 'Regeneration marine + nettoyage pollution', link: '/biobot/applications', color: '#1E88E5' },
  { icon: '\uD83D\uDCB0', title: 'Business Model', desc: 'Platform ecosystem 500Md\u20AC+ valorisation', link: '/biobot/business', color: '#FF6F00' },
];

export default function Landing() {
  return (
    <BioBotLayout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#2E7D32]/5 via-white to-[#00897B]/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-sm font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
                Extension PhytoTech Platform — Robotique Vivante
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#2E7D32] to-[#00897B] bg-clip-text text-transparent">
                  BioBot PhytoTech&#8482;
                </span>
                <br />
                <span className="text-gray-900 text-4xl lg:text-5xl">Robots Vivants Bio-Hybrides</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                De l'inhalation revolutionnaire a la robotique vivante.
                Architecture complete basee sur l'ecosysteme PhytoTech valide.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link to="/biobot/technology" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#2E7D32] to-[#00897B] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow">
                  Explorer La Technologie
                </Link>
                <Link to="/biobot/business" className="px-8 py-4 rounded-full border-2 border-[#2E7D32] text-[#2E7D32] font-semibold hover:bg-[#2E7D32]/5 transition-colors">
                  Opportunite Business
                </Link>
              </div>

              {/* Key Numbers */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  { value: '500Md\u20AC', label: 'Valorisation potentielle' },
                  { value: '70%', label: 'Probabilite technique' },
                  { value: '25+', label: 'Technologies validees' },
                  { value: '\u221E', label: 'Duree vie (vivant)' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="p-4 bg-white rounded-xl shadow-sm"
                  >
                    <p className="text-2xl font-bold font-mono text-[#2E7D32]">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PhytoTech Foundation - AquaVent Bridge */}
      <section className="py-20 bg-gradient-to-r from-[#2E7D32] to-[#00897B]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Fondations: Modele PhytoTech Eprouve</h2>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
            Chaque composant AquaVent valide devient brique fondamentale BioBot
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {foundations.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: f.color }} />
                  <h4 className="font-bold">{f.name}</h4>
                  <span className="text-xs text-white/60">{f.role}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-[10px] text-white/50 mb-1 uppercase tracking-wider">AquaVent</p>
                    <p className="text-white/90">{f.aquevent}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-[10px] text-white/50 mb-1 uppercase tracking-wider">BioBot</p>
                    <p className="text-white/90">{f.biobot}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Architecture Complete</h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
            8 modules revolutionnaires integres dans un ecosysteme bio-hybride autonome
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={m.link}
                  className="block p-6 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                >
                  <span className="text-4xl mb-4 block">{m.icon}</span>
                  <h3 className="text-lg font-bold mb-2" style={{ color: m.color }}>{m.title}</h3>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Vision Ultime PhytoTech</h2>

            <div className="space-y-4 text-left">
              {[
                { label: 'AquaVent UNLIMITED\u2122', desc: 'Premier inhalateur usage illimite (2026)', value: '10Md\u20AC', color: '#8B2C5A' },
                { label: 'BioBot PhytoTech\u2122', desc: 'Robots vivants bio-hybrides (2028+)', value: '500Md\u20AC', color: '#2E7D32' },
                { label: 'Platform PhytoTech', desc: 'Ecosysteme integre global', value: '2-5T\u20AC', color: '#FFB300' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-md"
                >
                  <div className="w-2 h-16 rounded-full" style={{ background: item.color }} />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg" style={{ color: item.color }}>{item.label}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold font-mono" style={{ color: item.color }}>{item.value}</p>
                    <p className="text-xs text-gray-400">valorisation</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-[#2E7D32] to-[#00897B] rounded-2xl text-white">
              <p className="text-lg font-bold mb-2">
                BioBot PhytoTech&#8482; n'est pas science-fiction
              </p>
              <p className="text-white/80">
                C'est l'evolution inevitable basee sur recherche validee + urgence planetaire + expertise PhytoTech unique.
                De l'inhalation revolutionnaire &#8594; robotique vivante &#8594; platform civilisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </BioBotLayout>
  );
}
