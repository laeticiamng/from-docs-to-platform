import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AquaVentLayout from '../components/AquaVentLayout';
import ProductShowcase from '../components/product/ProductShowcase';
import ComparisonTable from '../components/product/ComparisonTable';
import Device3DViewer from '../components/3d/Device3DViewer';
import AquaVentButton from '../components/ui/AquaVentButton';
import SEOHead from '@/components/SEOHead';
import type { DeviceConfiguration } from '../types/product';

const colorOptions = [
  { id: 'black-gold' as const, name: 'Noir Or', gradient: 'linear-gradient(45deg, #000, #FFD700)' },
  { id: 'white-silver' as const, name: 'Blanc Argent', gradient: 'linear-gradient(45deg, #FFF, #C0C0C0)' },
  { id: 'aquevent-gradient' as const, name: 'PhytoTech', gradient: 'linear-gradient(45deg, #8B2C5A, #1E88E5)' },
];

const finishOptions = [
  { id: 'premium-matte' as const, name: 'Premium Matte', desc: 'Finition anti-traces, grip parfait' },
  { id: 'glossy-ceramic' as const, name: 'Ceramique Brillante', desc: 'Resistant rayures, facile nettoyage' },
  { id: 'titanium-brushed' as const, name: 'Titane Brosse', desc: 'Ultra-leger, durabilite maximale' },
];

export default function Product() {
  const [showConfigurator, setShowConfigurator] = useState(false);
  const [config, setConfig] = useState<DeviceConfiguration>({
    version: 'unlimited',
    color: 'black-gold',
    finish: 'premium-matte',
    engraving: '',
  });

  return (
    <AquaVentLayout>
      <div className="pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
            AquaVent PhytoTech UNLIMITED™
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-4 max-w-3xl mx-auto">
          La seule formulation monde permettant un usage illimite
          avec benefices sante prouves scientifiquement
        </p>
        <div className="flex justify-center mb-8">
          <span className="text-xs px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold">
            ZERO composant limitant - Usage illimite valide
          </span>
        </div>
      </div>

      <ProductShowcase />

      {/* 3D Device Configurator Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Configurez Votre AquaVent UNLIMITED™
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Design premium personnalisable - Experience unique
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* 3D Viewer */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
              <Device3DViewer version="unlimited" />

              {/* Size Comparison */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg text-white">
                <h4 className="font-semibold text-xs mb-2">Comparaison Taille</h4>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="opacity-60">iPhone</span>
                  <span className="text-[#FFB300] font-bold">AquaVent</span>
                  <span className="opacity-60">E-cig</span>
                </div>
              </div>
            </div>

            {/* Configuration Panel */}
            <div className="space-y-6">
              {/* Color Selection */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3">Couleur Signature</h4>
                <div className="grid grid-cols-3 gap-3">
                  {colorOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setConfig({ ...config, color: option.id })}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        config.color === option.id
                          ? 'border-[#8B2C5A] shadow-md'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full mx-auto mb-2"
                        style={{ background: option.gradient }}
                      />
                      <p className="text-xs font-medium">{option.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish Selection */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3">Finition Premium</h4>
                <div className="space-y-2">
                  {finishOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setConfig({ ...config, finish: option.id })}
                      className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                        config.finish === option.id
                          ? 'border-[#8B2C5A] bg-[#8B2C5A]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p className="text-sm font-bold">{option.name}</p>
                      <p className="text-xs text-gray-500">{option.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Formulation */}
              <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">&#10003;</span>
                  </div>
                  <h4 className="font-bold text-green-700 text-sm">AquaVent UNLIMITED™</h4>
                </div>
                <p className="text-green-600 text-xs mb-2">
                  Formulation unique usage illimite - 100% naturel valide scientifiquement
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] text-green-600">
                  <span>Spirulina 1.2mg/ml</span>
                  <span>-</span>
                  <span>Anthocyanes 2.5mg/ml</span>
                  <span>-</span>
                  <span>Phycocyanine 0.8mg/ml</span>
                </div>
              </div>

              {/* Personalization */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-2">Personnalisation</h4>
                <input
                  placeholder="Gravure personnalisee (optionnel)"
                  value={config.engraving || ''}
                  onChange={(e) => setConfig({ ...config, engraving: e.target.value })}
                  maxLength={20}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B2C5A] focus:ring-2 focus:ring-[#8B2C5A]/20 outline-none transition-all text-sm"
                />
                <p className="text-[10px] text-gray-400 mt-1">
                  Gravure laser gratuite - Police elegante
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] p-6 rounded-xl text-white">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">Prix Configuration</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-mono">199&#8364;</div>
                    <div className="text-xs opacity-80">Device + 2 cartouches</div>
                  </div>
                </div>
                <p className="text-xs opacity-70 mb-4">
                  Cartouches recharges: 4.99&#8364; - Marge 70%
                </p>

                <AquaVentButton
                  variant="ghost"
                  size="lg"
                  className="w-full bg-white text-[#8B2C5A] hover:bg-white/90 font-bold"
                >
                  Reserver Ma Configuration
                </AquaVentButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable />
    </AquaVentLayout>
  );
}
