import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BioBotLayout from '../components/BioBotLayout';
import SEOHead from '@/components/SEOHead';

export default function Ecosystem() {
  return (
    <BioBotLayout>
      <SEOHead title="Écosystème Global — PhytoTech" description="Synergie AquaVent x BioBot — Platform PhytoTech complète." path="/biobot/ecosystem" />
      <div className="pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#8B2C5A] via-[#2E7D32] to-[#1E88E5] bg-clip-text text-transparent">
            Integration Ecosysteme Global
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Synergie AquaVent x BioBot — Platform PhytoTech Complete
        </p>
      </div>

      {/* AquaVent x BioBot Synergy */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">Synergie AquaVent x BioBot Ultimate</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-[#8B2C5A]/10 to-[#8B2C5A]/5 rounded-2xl p-6 border border-[#8B2C5A]/20"
              >
                <h3 className="font-bold text-lg text-[#8B2C5A] mb-4">Production Revolutionnaire</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>&#8226; HealthBot produit AquaVent cartouches terrain</p>
                  <p>&#8226; Matieres premieres: spirulina + myrtilles optimales</p>
                  <p>&#8226; Personnalisation: genomique + environmental</p>
                  <p>&#8226; Distribution: reseau robots autonomes global</p>
                  <p>&#8226; Innovation: discovery nouveaux actifs</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#2E7D32]/10 to-[#2E7D32]/5 rounded-2xl p-6 border border-[#2E7D32]/20"
              >
                <h3 className="font-bold text-lg text-[#2E7D32] mb-4">Data Ecosystem</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>&#8226; Health monitoring: individual + population</p>
                  <p>&#8226; Environmental: air + water + soil quality</p>
                  <p>&#8226; Efficacy tracking: treatments + outcomes</p>
                  <p>&#8226; Predictive health: prevention vs traitement</p>
                  <p>&#8226; Optimization continue: formulations</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#1E88E5]/10 to-[#1E88E5]/5 rounded-2xl p-6 border border-[#1E88E5]/20"
              >
                <h3 className="font-bold text-lg text-[#1E88E5] mb-4">Business Synergies</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>&#8226; Revenue: AquaVent (10Md&#8364;) + BioBot (500Md&#8364;)</p>
                  <p>&#8226; Platform effects: 1+1 = 10 (exponential)</p>
                  <p>&#8226; Market expansion: health + agri + ocean</p>
                  <p>&#8226; Cost reduction: shared R&D + manufacturing</p>
                  <p>&#8226; Innovation acceleration: cross-pollination</p>
                </div>
              </motion.div>
            </div>

            {/* Technology Evolution */}
            <h2 className="text-2xl font-bold text-center mb-8">Evolution Technologique</h2>
            <div className="space-y-4 max-w-3xl mx-auto mb-16">
              {[
                { gen: 'Gen 1', product: 'AquaVent UNLIMITED\u2122', desc: 'Inhalateur revolutionnaire', color: '#8B2C5A', year: '2026' },
                { gen: 'Gen 2', product: 'BioBot PhytoTech\u2122', desc: 'Production + delivery autonomous', color: '#2E7D32', year: '2028+' },
                { gen: 'Gen 3', product: 'Integration Seamless', desc: 'Ecosysteme integre complet', color: '#1E88E5', year: '2030+' },
                { gen: 'Gen 4', product: 'Conscience Emergente', desc: 'Bio-technological evolution', color: '#7B1FA2', year: '2032+' },
                { gen: 'Gen 5', product: 'Transcendence', desc: 'Indistinguishable nature + technology', color: '#FFB300', year: '2035+' },
              ].map((gen, i) => (
                <motion.div
                  key={gen.gen}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: gen.color }}>
                      {gen.gen.replace('Gen ', 'G')}
                    </div>
                    {i < 4 && <div className="w-0.5 h-8 bg-gray-200" />}
                  </div>
                  <div className="flex-1 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold" style={{ color: gen.color }}>{gen.product}</h4>
                        <p className="text-sm text-gray-500">{gen.desc}</p>
                      </div>
                      <span className="text-xs font-mono text-gray-400">{gen.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Impact Civilisationnel</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '\uD83C\uDF0D', title: 'Climate Solution', desc: 'Agriculture = carbon sink, oceans regeneres, cycle ferme' },
              { icon: '\uD83C\uDFE5', title: 'Sante Globale', desc: 'Production medicaments partout, prevention, personnalisation' },
              { icon: '\uD83C\uDF3E', title: 'Fin Famine', desc: 'Production suffisante 15 milliards humains, sols restaures' },
              { icon: '\uD83C\uDF0A', title: 'Oceans Vivants', desc: '70% planete regeneres, biodiversite marine, blue economy' },
              { icon: '\u267B\uFE0F', title: 'Post-Scarcity', desc: 'Bio-economie abondance, zero dechet, surplus = croissance' },
              { icon: '\uD83E\uDD1D', title: 'Harmonie', desc: 'Humains + environnement + technologie = equilibre' },
            ].map((impact, i) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-100"
              >
                <span className="text-4xl block mb-3">{impact.icon}</span>
                <h4 className="font-bold text-lg mb-2">{impact.title}</h4>
                <p className="text-sm text-gray-600">{impact.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#2E7D32] to-[#00897B] rounded-2xl p-8 text-white text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Conclusion Revolutionnaire</h2>
              <p className="text-lg mb-4">
                BioBot PhytoTech&#8482; n'est pas science-fiction — c'est l'evolution inevitable
                basee sur recherche validee + urgence planetaire + expertise PhytoTech unique.
              </p>
              <p className="text-white/80 mb-6">
                De l'inhalation revolutionnaire &#8594; robotique vivante &#8594; platform civilisation.
                La question n'est pas SI mais QUAND. Et avec l'equipe PhytoTech + vision + timing = MAINTENANT.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/aquevent"
                  className="px-6 py-3 rounded-full bg-white text-[#8B2C5A] font-semibold hover:bg-white/90 transition-colors"
                >
                  AquaVent UNLIMITED&#8482;
                </Link>
                <Link
                  to="/biobot/business"
                  className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Opportunite Business
                </Link>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm">
              Technology indistinguishable from nature. Breathe The Revolution. Code The Future. Change The World.
            </p>
          </div>
        </div>
      </section>
    </BioBotLayout>
  );
}
