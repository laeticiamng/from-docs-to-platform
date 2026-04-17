import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Device3DViewer from '../3d/Device3DViewer';
import AquaVentButton from '../ui/AquaVentButton';
import type { ProductVersion, Ingredient } from '../../types/product';

const ingredients: Ingredient[] = [
  {
    id: 'spirulina',
    name: 'Spirulina Extract',
    scientificName: 'Arthrospira platensis',
    category: 'superfood',
    description: 'Extrait de spiruline ultra-pur aux proprietes anti-inflammatoires puissantes pour les poumons',
    benefits: ['Detox metaux lourds', 'Immunite respiratoire', 'Anti-inflammatoire', 'Antioxydant'],
    concentration: '1.2mg/ml',
    safetyRating: 5,
    color: '#1E88E5',
  },
  {
    id: 'anthocyanes',
    name: 'Anthocyanes Myrtille',
    scientificName: 'Vaccinium myrtillus extract',
    category: 'antioxidant',
    description: "Pigments naturels de myrtille, puissants protecteurs cellulaires. EFSA: aucune limite de securite",
    benefits: ['Protection cellulaire', 'Antioxydant ultra-puissant', 'Conservation naturelle', 'Anti-age'],
    concentration: '2.5mg/ml',
    safetyRating: 5,
    color: '#8B2C5A',
  },
  {
    id: 'phycocyanine',
    name: 'Phycocyanine Concentree',
    scientificName: 'C-Phycocyanin extract',
    category: 'superfood',
    description: 'Pigment bleu de spiruline concentre, 20+ ans d\'utilisation sans aucun incident rapporte',
    benefits: ['Performance respiratoire', 'Anti-inflammatoire', 'Neuroprotecteur', 'VO2 max'],
    concentration: '0.8mg/ml',
    safetyRating: 5,
    color: '#7B1FA2',
  },
];

export default function ProductShowcase() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* 3D Viewer */}
          <div>
            <Device3DViewer version="unlimited" />
          </div>

          {/* Product Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aquevent-accent/10 text-aquevent-accent text-xs font-bold mb-4">
              PREMIERE MONDIALE
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              AquaVent UNLIMITED™
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              L'inhalateur premium avec formulation unique usage illimite.
              100% naturel, scientifiquement valide, zero restriction.
            </p>

            <div className="bg-green-50 p-4 rounded-xl border border-green-200 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg mt-0.5">&#10003;</span>
                <div>
                  <p className="font-bold text-green-700 text-sm">REVOLUTION SECURITE</p>
                  <p className="text-green-600 text-sm">
                    ZERO composant limitant - Usage illimite scientifiquement prouve
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <AquaVentButton variant="premium" size="lg">
                Reserver — 199&#8364;
              </AquaVentButton>
              <AquaVentButton variant="secondary" size="lg">
                En savoir plus
              </AquaVentButton>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>Device premium</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Cartouches 4.99&#8364;</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Gravure gratuite</span>
            </div>
          </div>
        </div>

        {/* Formulation Visualization */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-4">Formulation UNLIMITED™</h3>
          <p className="text-center text-gray-500 mb-4">
            Chaque composant valide individuellement pour l'inhalation humaine
          </p>

          {/* Water Base Bar */}
          <div className="mb-8">
            <div className="h-8 rounded-full bg-gradient-to-r from-aquevent-secondary/20 via-aquevent-primary/20 to-[#7B1FA2]/20 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full rounded-full" style={{ width: '95.7%', background: 'linear-gradient(90deg, #E3F2FD, #E8EAF6)' }} />
              <div className="absolute right-0 top-0 h-full flex items-center gap-0.5 pr-2">
                <div className="h-full w-3 rounded-full bg-aquevent-secondary/60" />
                <div className="h-full w-4 rounded-full bg-aquevent-primary/60" />
                <div className="h-full w-2 rounded-full bg-[#7B1FA2]/60" />
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Eau Spirulina Filtree (95.7%)</span>
              <span>Complexe Actif (4.3%)</span>
            </div>
          </div>

          {/* Ingredient Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
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
                          <span className="text-xs text-gray-500">Securite:</span>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={i < ing.safetyRating ? 'text-yellow-400' : 'text-gray-200'}
                            >
                              &#9733;
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
