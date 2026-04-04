import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Device3DViewer from '../3d/Device3DViewer';
import AquaVentButton from '../ui/AquaVentButton';
import type { ProductVersion, ProductSpec, Ingredient } from '../../types/product';

const specs: ProductSpec[] = [
  { label: 'Capacité cartouche', wellness: '2ml / ~300 bouffées', medical: '3ml / ~450 bouffées' },
  { label: 'Autonomie batterie', wellness: '800 mAh / 2 jours', medical: '1200 mAh / 3 jours' },
  { label: 'Temps de chauffe', wellness: '< 3 secondes', medical: '< 2 secondes' },
  { label: 'Ingrédients actifs', wellness: '5 composés naturels', medical: '8 composés + prescriptifs' },
  { label: 'Suivi santé', wellness: 'App basique', medical: 'App + monitoring médical' },
  { label: 'Certification', wellness: 'CE / FCC', medical: 'CE / FCC / Dispositif Médical' },
  { label: 'Garantie', wellness: '1 an', medical: '2 ans + support médical' },
  { label: 'Prix', wellness: '79 €', medical: '149 €' },
];

const ingredients: Ingredient[] = [
  {
    id: 'spirulina',
    name: 'Spiruline',
    scientificName: 'Arthrospira platensis',
    category: 'superfood',
    description: 'Micro-algue riche en phycocyanine aux propriétés anti-inflammatoires puissantes',
    benefits: ['Anti-inflammatoire', 'Antioxydant', 'Immunostimulant', 'Détoxifiant'],
    concentration: '15mg/ml',
    safetyRating: 5,
    color: '#1E88E5',
  },
  {
    id: 'anthocyanes',
    name: 'Anthocyanes',
    scientificName: 'Vaccinium myrtillus extract',
    category: 'antioxidant',
    description: "Pigments naturels de myrtille, puissants protecteurs cellulaires contre le stress oxydatif",
    benefits: ['Protection cellulaire', 'Anti-âge', 'Cardioprotecteur', 'Neuroprotecteur'],
    concentration: '8mg/ml',
    safetyRating: 5,
    color: '#8B2C5A',
  },
  {
    id: 'eucalyptus',
    name: 'Eucalyptus',
    scientificName: 'Eucalyptus globulus',
    category: 'essential',
    description: "Huile essentielle aux propriétés bronchodilatatrices et décongestionnantes",
    benefits: ['Bronchodilatateur', 'Décongestionnant', 'Antiseptique', 'Expectorant'],
    concentration: '5mg/ml',
    safetyRating: 4,
    color: '#43A047',
  },
  {
    id: 'propolis',
    name: 'Propolis',
    scientificName: 'Propolis extract',
    category: 'adaptogen',
    description: "Substance naturelle produite par les abeilles, antimicrobien et immunomodulateur",
    benefits: ['Antimicrobien', 'Immunomodulateur', 'Cicatrisant', 'Anti-viral'],
    concentration: '10mg/ml',
    safetyRating: 5,
    color: '#FFB300',
  },
];

export default function ProductShowcase() {
  const [version, setVersion] = useState<ProductVersion>('wellness');
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Version Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {(['wellness', 'medical'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setVersion(v)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  version === v
                    ? v === 'wellness'
                      ? 'bg-[#8B2C5A] text-white shadow-lg'
                      : 'bg-[#1E88E5] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {v === 'wellness' ? '🌿 Wellness' : '🏥 Medical'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Viewer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={version}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <Device3DViewer version={version} />
            </motion.div>
          </AnimatePresence>

          {/* Product Info */}
          <div>
            <motion.h2
              className="text-4xl font-bold mb-4"
              style={{ color: version === 'wellness' ? '#8B2C5A' : '#1E88E5' }}
            >
              AquaVent {version === 'wellness' ? 'Wellness' : 'Medical'}
            </motion.h2>
            <p className="text-lg text-gray-600 mb-8">
              {version === 'wellness'
                ? "L'inhalateur naturel pour votre bien-être quotidien. Détente, vitalité et respiration optimale."
                : "Le dispositif médical certifié pour le sevrage tabagique et la santé respiratoire."}
            </p>

            <div className="flex gap-4 mb-8">
              <AquaVentButton variant="premium" size="lg">
                Précommander — {version === 'wellness' ? '79€' : '149€'}
              </AquaVentButton>
              <AquaVentButton variant="secondary" size="lg">
                En savoir plus
              </AquaVentButton>
            </div>
          </div>
        </div>

        {/* Spec Comparison Table */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Comparaison détaillée</h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Spécification</th>
                  <th className="text-center py-3 px-4 font-semibold" style={{ color: '#8B2C5A' }}>
                    Wellness
                  </th>
                  <th className="text-center py-3 px-4 font-semibold" style={{ color: '#1E88E5' }}>
                    Medical
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-3 px-4 text-sm font-medium text-gray-700">{spec.label}</td>
                    <td className="py-3 px-4 text-sm text-center text-gray-600">{spec.wellness}</td>
                    <td className="py-3 px-4 text-sm text-center text-gray-600">{spec.medical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ingredients Explorer */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-4">Ingrédients actifs</h3>
          <p className="text-center text-gray-500 mb-10">
            100% naturels, scientifiquement validés, zéro addiction
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ingredients.map((ing) => (
              <motion.button
                key={ing.id}
                onClick={() => setSelectedIngredient(selectedIngredient?.id === ing.id ? null : ing)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                  selectedIngredient?.id === ing.id
                    ? 'border-current shadow-lg scale-[1.02]'
                    : 'border-transparent bg-white shadow-md hover:shadow-lg'
                }`}
                style={{
                  color: selectedIngredient?.id === ing.id ? ing.color : undefined,
                }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold"
                  style={{ background: ing.color }}
                >
                  {ing.name[0]}
                </div>
                <h4 className="font-bold text-lg mb-1">{ing.name}</h4>
                <p className="text-xs text-gray-400 italic mb-2">{ing.scientificName}</p>
                <p className="text-sm text-gray-600 mb-3">{ing.description}</p>

                <AnimatePresence>
                  {selectedIngredient?.id === ing.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="pt-3 border-t space-y-2">
                        <p className="text-xs font-mono" style={{ color: ing.color }}>
                          Concentration: {ing.concentration}
                        </p>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-gray-500">Sécurité:</span>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={i < ing.safetyRating ? 'text-yellow-400' : 'text-gray-200'}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {ing.benefits.map((b) => (
                            <span
                              key={b}
                              className="text-xs px-2 py-0.5 rounded-full"
                              style={{ background: `${ing.color}15`, color: ing.color }}
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
