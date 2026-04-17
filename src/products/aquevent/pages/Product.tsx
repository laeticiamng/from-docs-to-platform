import { useState } from 'react';
import AquaVentLayout from '../components/AquaVentLayout';
import Device3DViewer from '../components/3d/Device3DViewer';
import AquaVentButton from '../components/ui/AquaVentButton';
import SEOHead from '@/components/SEOHead';
import { AlertTriangle } from 'lucide-react';
import type { DeviceConfiguration } from '../types/product';

/**
 * Page Produit — version assainie.
 *
 * Retraits effectués : "UNLIMITED™", "usage illimité", "valide scientifiquement",
 * "marge 70%", prix fermes (199€ / 4.99€), "ZERO composant limitant", "ProductShowcase"
 * et "ComparisonTable" qui contenaient des claims marketing non sourcés.
 * Le configurateur reste fonctionnel mais sans engagement de prix ni allégation.
 */

const colorOptions = [
  { id: 'black-gold' as const, name: 'Noir / Or', gradient: 'linear-gradient(45deg, #000, #FFD700)' },
  { id: 'white-silver' as const, name: 'Blanc / Argent', gradient: 'linear-gradient(45deg, #FFF, #C0C0C0)' },
  { id: 'aquevent-gradient' as const, name: 'PhytoTech', gradient: 'linear-gradient(45deg, #8B2C5A, #1E88E5)' },
];

const finishOptions = [
  { id: 'premium-matte' as const, name: 'Mat', desc: 'Finition mate, bonne préhension.' },
  { id: 'glossy-ceramic' as const, name: 'Brillant', desc: 'Finition lisse, facile à nettoyer.' },
  { id: 'titanium-brushed' as const, name: 'Brossé', desc: 'Finition métallique brossée.' },
];

export default function Product() {
  const [config, setConfig] = useState<DeviceConfiguration>({
    version: 'unlimited',
    color: 'black-gold',
    finish: 'premium-matte',
    engraving: '',
  });

  return (
    <AquaVentLayout>
      <SEOHead
        title="Produit AquaVent — Aperçu et configurateur"
        description="Aperçu du projet d'inhalateur AquaVent et configurateur visuel. Phase pré-commerciale, prix indicatifs."
        path="/aquevent/product"
      />
      <div className="pt-12 pb-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
              AquaVent — Aperçu du produit
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Inhalateur à base d'extraits végétaux (spiruline, anthocyanes,
            phycocyanine), sans nicotine. Le design et les options présentés
            ci-dessous sont indicatifs et susceptibles d'évoluer.
          </p>
        </div>
      </div>

      {/* Avertissement */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-2 text-sm text-amber-900">
                <p className="font-semibold">Produit en phase pré-commerciale.</p>
                <p>
                  Les visuels, options de personnalisation et indications de prix
                  ci-dessous sont indicatifs. Aucune commande ferme n'est ouverte.
                  L'inscription à la liste d'attente n'engage à aucun paiement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configurateur visuel */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Configurateur visuel
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Aperçu indicatif des options de finition à l'étude.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* 3D Viewer */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
              <Device3DViewer version="unlimited" />
            </div>

            {/* Configuration Panel */}
            <div className="space-y-6">
              {/* Color Selection */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3">Couleur</h4>
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
                <h4 className="text-sm font-bold text-gray-700 mb-3">Finition</h4>
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

              {/* Formulation rappel */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-700 text-sm mb-2">
                  Formulation à l'étude
                </h4>
                <p className="text-gray-600 text-xs mb-2">
                  Eau filtrée + extraits végétaux. Sans nicotine, sans propylène
                  glycol, sans glycérine. Concentrations indicatives :
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] text-gray-500">
                  <span>Spiruline ~1.2 mg/ml</span>
                  <span>·</span>
                  <span>Anthocyanes ~2.5 mg/ml</span>
                  <span>·</span>
                  <span>Phycocyanine ~0.8 mg/ml</span>
                </div>
              </div>

              {/* Personalization */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-2">Personnalisation</h4>
                <input
                  placeholder="Gravure (optionnel)"
                  value={config.engraving || ''}
                  onChange={(e) => setConfig({ ...config, engraving: e.target.value })}
                  maxLength={20}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B2C5A] focus:ring-2 focus:ring-[#8B2C5A]/20 outline-none transition-all text-sm"
                />
                <p className="text-[10px] text-gray-400 mt-1">
                  Option à confirmer en phase de production.
                </p>
              </div>

              {/* Prix indicatif */}
              <div className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] p-6 rounded-xl text-white">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold">Prix de référence</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-mono">~199 €</div>
                    <div className="text-xs opacity-80">indicatif</div>
                  </div>
                </div>
                <p className="text-xs opacity-80 mb-4">
                  Prix indicatif susceptible d'évoluer. Aucun paiement n'est demandé
                  à l'inscription sur la liste d'attente.
                </p>
                <AquaVentButton
                  variant="ghost"
                  size="lg"
                  className="w-full bg-white text-[#8B2C5A] hover:bg-white/90 font-bold"
                  onClick={() => {
                    window.location.href = '/aquevent#waitlist';
                  }}
                >
                  Rejoindre la liste d'attente
                </AquaVentButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AquaVentLayout>
  );
}
