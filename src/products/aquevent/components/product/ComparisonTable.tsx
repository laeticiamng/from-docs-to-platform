import { motion } from 'framer-motion';
import type { Competitor } from '../../types/business';
import competitors from '../../data/competitor-analysis.json';

export default function ComparisonTable() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-4">Analyse concurrentielle</h3>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          AquaVent PhytoTech™ se positionne comme la seule solution combinant ingrédients 100% naturels,
          validation scientifique et technologie brevetée.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Produit</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Catégorie</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Naturel</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Forces</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Faiblesses</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Part marché</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Prix</th>
              </tr>
            </thead>
            <tbody>
              {(competitors as Competitor[]).map((c, i) => {
                const isAquaVent = c.name.includes('AquaVent');
                return (
                  <motion.tr
                    key={c.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`border-b ${
                      isAquaVent
                        ? 'bg-gradient-to-r from-[#8B2C5A]/5 to-[#1E88E5]/5 font-medium'
                        : i % 2 === 0
                        ? 'bg-gray-50/50'
                        : ''
                    }`}
                  >
                    <td className="py-4 px-4">
                      <span className={isAquaVent ? 'text-[#8B2C5A] font-bold' : ''}>
                        {c.name}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{c.category}</td>
                    <td className="py-4 px-4 text-center">
                      {c.naturalIngredients ? (
                        <span className="text-green-500 text-lg">✓</span>
                      ) : (
                        <span className="text-red-400 text-lg">✗</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {c.strengths.slice(0, 3).map((s) => (
                          <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {c.weaknesses.slice(0, 2).map((w) => (
                          <span key={w} className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600">
                            {w}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${c.marketShare}%`,
                              background: isAquaVent
                                ? 'linear-gradient(90deg, #8B2C5A, #1E88E5)'
                                : '#9CA3AF',
                            }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{c.marketShare}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-sm font-mono text-gray-600">
                      {c.priceRange}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
