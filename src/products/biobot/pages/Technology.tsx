import { useState } from 'react';
import { motion } from 'framer-motion';
import BioBotLayout from '../components/BioBotLayout';
import techData from '../data/technologies.json';
import SEOHead from '@/components/SEOHead';

type TechTab = 'energy' | 'materials' | 'intelligence' | 'lifecycle';

const tabs: { key: TechTab; label: string; icon: string; color: string }[] = [
  { key: 'energy', label: 'Bio-Energie', icon: '\u2600\uFE0F', color: '#FFB300' },
  { key: 'materials', label: 'Bio-Materiaux', icon: '\uD83E\uDDF1', color: '#2E7D32' },
  { key: 'intelligence', label: 'Bio-Intelligence', icon: '\uD83E\uDDE0', color: '#7B1FA2' },
  { key: 'lifecycle', label: 'Cycle Ferme', icon: '\u267B\uFE0F', color: '#00897B' },
];

function TechCard({ name, trademark, specs, advantages }: { name: string; trademark: string; specs: { label: string; value: string }[]; advantages: string[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <h4 className="text-xl font-bold mb-1">{name}</h4>
      <p className="text-sm text-[#FFB300] font-bold mb-4">{trademark}</p>
      <div className="space-y-2 mb-6">
        {specs.map((s) => (
          <div key={s.label} className="flex justify-between items-start gap-4 text-sm">
            <span className="text-gray-500 shrink-0">{s.label}</span>
            <span className="font-mono text-gray-800 text-right">{s.value}</span>
          </div>
        ))}
      </div>
      <h5 className="text-sm font-bold text-gray-700 mb-2">Avantages vs Conventionnel</h5>
      <div className="space-y-1">
        {advantages.map((a) => (
          <div key={a} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-green-500 mt-0.5">&#10003;</span>
            {a}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Technology() {
  const [activeTab, setActiveTab] = useState<TechTab>('energy');

  return (
    <BioBotLayout>
      <SEOHead title="Architecture Technologique — BioBot" description="Technologies bio-hybrides révolutionnaires." path="/biobot/technology" />
      <div className="pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#2E7D32] to-[#00897B] bg-clip-text text-transparent">
            Architecture Technologique
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Technologies bio-hybrides revolutionnaires — basees sur recherche validee
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? 'text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={activeTab === tab.key ? { background: tab.color } : undefined}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bio-Energie */}
      {activeTab === 'energy' && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Systeme Bio-Energetique Integre</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <TechCard
                name={techData.bioEnergy.photoSkin.name}
                trademark={techData.bioEnergy.photoSkin.trademark}
                specs={techData.bioEnergy.photoSkin.specs}
                advantages={techData.bioEnergy.photoSkin.advantages}
              />
              <TechCard
                name={techData.bioEnergy.bioBattery.name}
                trademark={techData.bioEnergy.bioBattery.trademark}
                specs={techData.bioEnergy.bioBattery.specs}
                advantages={techData.bioEnergy.bioBattery.advantages}
              />
            </div>
          </div>
        </section>
      )}

      {/* Bio-Materiaux */}
      {activeTab === 'materials' && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Innovation Bio-Composites Revolutionnaire</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <TechCard
                name={techData.bioMaterials.algaComposite.name}
                trademark={techData.bioMaterials.algaComposite.trademark}
                specs={techData.bioMaterials.algaComposite.specs}
                advantages={techData.bioMaterials.algaComposite.advantages}
              />
              <TechCard
                name={techData.bioMaterials.myceliumNet.name}
                trademark={techData.bioMaterials.myceliumNet.trademark}
                specs={techData.bioMaterials.myceliumNet.specs}
                advantages={techData.bioMaterials.myceliumNet.advantages}
              />
            </div>

            {/* Applications */}
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-6">Applications Specifiques Robot</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { part: 'Squelette', material: 'Fibres spirulina + matrice PHA' },
                  { part: 'Peau', material: 'Bio-films flexibles + capteurs integres' },
                  { part: 'Joints', material: 'Bio-elastomeres auto-lubrifiants' },
                  { part: 'Circuits', material: 'Bio-plastiques conducteurs' },
                ].map((item) => (
                  <div key={item.part} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <p className="font-bold text-[#2E7D32] text-sm">{item.part}</p>
                    <p className="text-sm text-gray-600">{item.material}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bio-Intelligence */}
      {activeTab === 'intelligence' && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Revolution Cognitive Bio-Hybride</h2>
            <div className="max-w-3xl mx-auto">
              <TechCard
                name={techData.bioIntelligence.phytoMind.name}
                trademark={techData.bioIntelligence.phytoMind.trademark}
                specs={techData.bioIntelligence.phytoMind.specs}
                advantages={techData.bioIntelligence.phytoMind.advantages}
              />

              {/* Swarm Intelligence */}
              <div className="mt-8 bg-gradient-to-r from-[#7B1FA2] to-[#4A148C] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Intelligence Collective Emergente</h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Communication Inter-Robots</h4>
                    <div className="space-y-2 text-sm text-white/80">
                      {['Pheromones: messages chimiques complexes', 'Bio-electrique: signaux 50Hz-1kHz', 'Optique: bioluminescence + couleurs', 'Tactile: vibrations mecaniques', 'Chimique: echange molecules information'].map((c) => (
                        <p key={c}>&#8226; {c}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Behaviors Emergents</h4>
                    <div className="space-y-2 text-sm text-white/80">
                      {['Coordination mouvements synchronises sans leader', 'Division travail specialisation automatique', 'Problem solving intelligence collective', 'Memoire partagee experiences transmises', 'Conscience groupe decisions consensus'].map((b) => (
                        <p key={b}>&#8226; {b}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cycle Ferme */}
      {activeTab === 'lifecycle' && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Ecosysteme Autonome — Cycle Ferme Parfait</h2>
            <div className="max-w-4xl mx-auto">
              {/* BioRecycler */}
              <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#00897B] mb-2">{techData.bioRecycler.name}</h3>
                <p className="text-[#FFB300] font-bold text-sm mb-6">{techData.bioRecycler.trademark}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-sm text-gray-700 mb-3">Inputs</h4>
                    <div className="space-y-2">
                      {techData.bioRecycler.inputs.map((input) => (
                        <div key={input} className="flex items-center gap-2 text-sm">
                          <span className="w-2 h-2 rounded-full bg-blue-400" />
                          <span className="text-gray-600">{input}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-700 mb-3">Outputs</h4>
                    <div className="space-y-2">
                      {techData.bioRecycler.outputs.map((output) => (
                        <div key={output} className="flex items-center gap-2 text-sm">
                          <span className="w-2 h-2 rounded-full bg-green-400" />
                          <span className="text-gray-600">{output}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bilan Energetique */}
                <div className="mt-6 bg-green-50 rounded-xl p-4">
                  <h5 className="font-bold text-sm text-green-700 mb-3">Bilan Energetique Positif</h5>
                  <div className="grid grid-cols-5 gap-2 text-center text-xs">
                    {Object.entries(techData.bioRecycler.bilanEnergetique).map(([key, value]) => (
                      <div key={key} className="bg-white rounded-lg p-2">
                        <p className="font-mono font-bold text-green-600">{value}</p>
                        <p className="text-gray-400 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reproduction */}
              <div className="bg-gradient-to-r from-[#00897B] to-[#2E7D32] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Reproduction & Evolution Autonome</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-3">Reproduction Biologique</h4>
                    <div className="space-y-2 text-sm text-white/80">
                      {['Division cellulaire: croissance composants', 'Assemblage dirige: auto-construction parties', 'Programming genetique: heritage behaviors', 'Ressources locales: materiau environnement', 'Timeline: 30-90 jours robot complet', 'Evolution: amelioration generation suivante'].map((r) => (
                        <p key={r}>&#8226; {r}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Scaling Exponentiel</h4>
                    <div className="space-y-2">
                      {[
                        { gen: 'Gen 1', count: '1 robot', label: 'prototype' },
                        { gen: 'Gen 2', count: '2-4', label: 'premiere reproduction' },
                        { gen: 'Gen 3', count: '8-16', label: 'croissance geometrique' },
                        { gen: 'Gen 10', count: '1K-65K', label: 'explosion' },
                      ].map((g) => (
                        <div key={g.gen} className="flex items-center gap-3 text-sm">
                          <span className="font-mono font-bold text-[#FFB300] w-12">{g.gen}</span>
                          <span className="font-bold text-white">{g.count}</span>
                          <span className="text-white/60">{g.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </BioBotLayout>
  );
}
