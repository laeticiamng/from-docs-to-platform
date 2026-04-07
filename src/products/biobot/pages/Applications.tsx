import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BioBotLayout from '../components/BioBotLayout';
import applications from '../data/applications.json';
import SEOHead from '@/components/SEOHead';

export default function Applications() {
  const [activeBot, setActiveBot] = useState('healthbot');

  const currentApp = applications.find((a) => a.id === activeBot) || applications[0];

  return (
    <BioBotLayout>
      <div className="pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#2E7D32] to-[#00897B] bg-clip-text text-transparent">
            Applications Revolutionnaires
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          3 applications transformatrices integrees dans l'ecosysteme PhytoTech
        </p>
      </div>

      {/* Bot Selector */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-center gap-4">
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => setActiveBot(app.id)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeBot === app.id
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={activeBot === app.id ? { background: app.color } : undefined}
            >
              {app.icon} {app.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeBot}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                  <span className="text-6xl mb-4 block">{currentApp.icon}</span>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: currentApp.color }}>
                    {currentApp.name}
                  </h2>
                  <p className="text-gray-600 text-lg">{currentApp.mission}</p>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100">
                    <span className="text-sm font-mono font-bold" style={{ color: currentApp.color }}>
                      {currentApp.revenue}&#8364;
                    </span>
                    <span className="text-xs text-gray-500">revenue par unite</span>
                  </div>
                </div>

                {/* Capabilities & Impact */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                    <h3 className="font-bold text-lg mb-4" style={{ color: currentApp.color }}>
                      Capacites
                    </h3>
                    <div className="space-y-3">
                      {currentApp.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5" style={{ color: currentApp.color }}>&#9679;</span>
                          <span className="text-gray-700">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                    <h3 className="font-bold text-lg mb-4 text-green-700">
                      Impact Revolutionnaire
                    </h3>
                    <div className="space-y-3">
                      {currentApp.impact.map((imp) => (
                        <div key={imp} className="flex items-start gap-2 text-sm">
                          <span className="text-green-500 mt-0.5">&#10003;</span>
                          <span className="text-gray-700">{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Case Study for HealthBot */}
                {currentApp.id === 'healthbot' && (currentApp as typeof applications[0] & { caseStudy?: { title: string; steps: string[] } }).caseStudy && (
                  <div className="bg-gradient-to-r from-[#E53935] to-[#C62828] rounded-2xl p-8 text-white mb-12">
                    <h3 className="text-xl font-bold mb-4">
                      Case Study: {(currentApp as typeof applications[0] & { caseStudy: { title: string; steps: string[] } }).caseStudy.title}
                    </h3>
                    <div className="space-y-3">
                      {(currentApp as typeof applications[0] & { caseStudy: { title: string; steps: string[] } }).caseStudy.steps.map((step, i) => (
                        <div key={step} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">
                            {i + 1}
                          </div>
                          <p className="text-white/90 text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* AquaVent Integration for AgroBot */}
                {currentApp.id === 'agrobot' && (currentApp as typeof applications[0] & { integration?: string }).integration && (
                  <div className="bg-green-50 rounded-2xl p-6 border border-green-200 mb-12">
                    <h4 className="font-bold text-green-700 mb-2">Integration AquaVent Ecosystem</h4>
                    <p className="text-green-600">{(currentApp as typeof applications[0] & { integration: string }).integration}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      {/* Swarm Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Applications Essaim Revolutionnaires</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '\uD83C\uDF3E', title: 'Agriculture', desc: 'Coordination robots 1000+ ha' },
              { icon: '\uD83C\uDF0A', title: 'Ocean', desc: 'Nettoyage pollution essaims' },
              { icon: '\uD83D\uDE80', title: 'Espace', desc: 'Exploration planetes autonome' },
              { icon: '\uD83C\uDFE5', title: 'Medical', desc: 'Intervention chirurgie collaborative' },
              { icon: '\uD83D\uDEA8', title: 'Rescue', desc: 'Sauvetage catastrophes naturelles' },
              { icon: '\uD83D\uDD2C', title: 'Research', desc: 'Discovery scientifique acceleree' },
            ].map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-100"
              >
                <span className="text-3xl mb-3 block">{app.icon}</span>
                <h4 className="font-bold text-lg mb-1">{app.title}</h4>
                <p className="text-sm text-gray-600">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </BioBotLayout>
  );
}
