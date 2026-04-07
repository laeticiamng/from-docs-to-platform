import { motion } from 'framer-motion';
import BioBotLayout from '../components/BioBotLayout';
import businessData from '../data/business.json';
import SEOHead from '@/components/SEOHead';

const statusColors = {
  validated: { bg: 'bg-green-100', text: 'text-green-700', label: 'Valide' },
  developing: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'En cours' },
  research: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Recherche' },
};

export default function Science() {
  const roadmap = businessData.fundraising;

  return (
    <BioBotLayout>
      <div className="pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#2E7D32] to-[#00897B] bg-clip-text text-transparent">
            Validation Faisabilite Technique
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Technologies existantes confirmees — evaluation honnete des risques et opportunites
        </p>
      </div>

      {/* TRL Dashboard */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Technologies Existantes Confirmees</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {businessData.feasibility.map((tech, i) => {
              const status = statusColors[tech.status as keyof typeof statusColors];
              return (
                <motion.div
                  key={tech.technology}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{tech.technology}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${status.bg} ${status.text}`}>
                          {status.label}
                        </span>
                        <span className="text-xs text-gray-400">TRL {tech.trl}</span>
                        <span className="text-xs text-gray-400">{tech.timeline}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold font-mono text-[#2E7D32]">{tech.probability}</p>
                      <p className="text-xs text-gray-400">probabilite succes</p>
                    </div>
                  </div>

                  {/* TRL Bar */}
                  <div className="mb-3">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${(parseInt(tech.trl.split('-')[0]) / 9) * 100}%`,
                          background: tech.status === 'validated' ? '#43A047' : tech.status === 'developing' ? '#1E88E5' : '#FFB300',
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                      <span>TRL 1</span><span>TRL 9</span>
                    </div>
                  </div>

                  {/* Companies */}
                  <div className="flex flex-wrap gap-1">
                    {tech.companies.map((company) => (
                      <span key={company} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                        {company}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Assessment */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Evaluation Honnete des Risques</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="space-y-4">
                {[
                  { label: 'Technique', value: '70%', desc: 'probabilite succes (base existant)', color: '#43A047' },
                  { label: 'Timeline', value: '5-10 ans', desc: 'vs projete 3-5 ans', color: '#1E88E5' },
                  { label: 'Cout', value: '2-5x', desc: 'plus expensive que estime initial', color: '#FFB300' },
                  { label: 'Marche', value: 'Lent', desc: 'adoption plus lente que espere', color: '#FF9800' },
                  { label: 'Competition', value: 'Possible', desc: 'tech giants peuvent entrer', color: '#E53935' },
                ].map((risk) => (
                  <div key={risk.label} className="flex items-center gap-4">
                    <div className="w-24 shrink-0">
                      <p className="text-sm font-bold" style={{ color: risk.color }}>{risk.label}</p>
                    </div>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: risk.label === 'Technique' ? '70%' : risk.label === 'Competition' ? '40%' : '55%', background: risk.color }} />
                    </div>
                    <div className="w-40 text-right">
                      <span className="text-sm font-mono font-bold" style={{ color: risk.color }}>{risk.value}</span>
                      <span className="text-xs text-gray-400 ml-2">{risk.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-800">
                  <span className="font-bold">Conclusion honnete:</span> Faisable mais difficile + long + cher.
                  Probablement 2x plus long et couteux que projete. Neanmoins, l'urgence planetaire
                  et la convergence technologique rendent ce projet essentiel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Roadmap Realiste Developpement</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            4 phases progressives avec jalons clairs et budget realiste
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {roadmap.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#00897B] flex items-center justify-center text-white font-bold">
                      {phase.phase}
                    </div>
                    {i < roadmap.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-2" />}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-lg text-[#2E7D32]">{phase.name}</h4>
                          <span className="text-xs text-gray-400 font-mono">{phase.timeline}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold font-mono text-[#2E7D32]">{phase.budget}&#8364;</p>
                          <p className="text-xs text-gray-400">budget</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{phase.team}</p>
                      <p className="text-sm font-medium text-gray-800 mb-2">Deliverable: {phase.deliverable}</p>
                      {(phase as Record<string, unknown>).revenue && (
                        <p className="text-xs text-green-600 font-mono">Revenue: {(phase as Record<string, unknown>).revenue as string} annual</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline Reality Check */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-gray-800 rounded-2xl p-8 text-white text-center">
              <h3 className="font-bold text-lg mb-4">Timeline Reality Check</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { scenario: 'Conservative', time: '15-20 ans', desc: 'civilization impact' },
                  { scenario: 'Realiste', time: '10-15 ans', desc: 'market deployment' },
                  { scenario: 'Optimiste', time: '7-10 ans', desc: 'commercial success' },
                  { scenario: 'Moonshot', time: '5-7 ans', desc: 'breakthrough' },
                ].map((t) => (
                  <div key={t.scenario} className="p-3 bg-white/10 rounded-lg">
                    <p className="font-bold text-[#FFB300]">{t.scenario}</p>
                    <p className="font-mono text-lg">{t.time}</p>
                    <p className="text-xs text-white/60">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </BioBotLayout>
  );
}
