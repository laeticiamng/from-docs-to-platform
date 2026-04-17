import { motion } from 'framer-motion';
import competitors from '../../data/competitor-analysis.json';

export default function ComparisonTable() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-4">Analyse Concurrentielle</h3>
        <p className="text-center text-gray-500 mb-4 max-w-2xl mx-auto">
          AquaVent UNLIMITED™ se positionne comme la seule solution combinant
          usage illimite, ingredients 100% naturels et validation scientifique.
        </p>

        {/* Blue Ocean Insights */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Aucun concurrent direct sur 'usage illimite'",
            'Blue ocean complet - creation nouvelle categorie',
            'First-mover advantage 18-24 mois minimum',
          ].map((insight) => (
            <span
              key={insight}
              className="text-xs px-3 py-1.5 rounded-full bg-aquevent-primary/5 text-aquevent-primary font-medium"
            >
              {insight}
            </span>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Produit</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Categorie</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Naturel</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Usage</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Securite</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Forces</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Faiblesses</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Prix</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => {
                const isAquaVent = c.name.includes('AquaVent');
                return (
                  <motion.tr
                    key={c.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`border-b ${
                      isAquaVent
                        ? 'bg-gradient-to-r from-aquevent-primary/5 to-aquevent-secondary/5 font-medium'
                        : i % 2 === 0
                        ? 'bg-gray-50/50'
                        : ''
                    }`}
                  >
                    <td className="py-4 px-4">
                      <span className={isAquaVent ? 'text-aquevent-primary font-bold' : ''}>
                        {c.name}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{c.category}</td>
                    <td className="py-4 px-4 text-center">
                      {c.naturalIngredients ? (
                        <span className="text-green-500 text-lg">&#10003;</span>
                      ) : (
                        <span className="text-red-400 text-lg">&#10007;</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        c.usageLimit?.includes('ILLIMITE')
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-50 text-red-600'
                      }`}>
                        {c.usageLimit || 'N/A'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`text-xs ${
                        c.safety?.includes('absolue')
                          ? 'text-green-600 font-bold'
                          : 'text-gray-500'
                      }`}>
                        {c.safety || 'N/A'}
                      </span>
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
