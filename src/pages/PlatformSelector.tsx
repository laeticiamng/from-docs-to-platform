import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'aquevent',
    name: 'AquaVent PhytoTech™',
    description: "L'inhalateur 100% naturel, scientifiquement validé, zéro addiction. Bien-être respiratoire et sevrage tabagique réinventés.",
    icon: 'AV',
    gradient: 'from-[#8B2C5A] to-[#1E88E5]',
    href: '/aquevent',
    features: ['Landing immersive', 'Espace investisseurs', 'Academy', 'Communauté'],
    badge: 'NOUVEAU',
  },
  {
    id: 'phytotech',
    name: 'PhytoTech Home',
    description: 'Kits bio-énergie utilisant plantes, algues et eau pour la production d\'électricité, purification d\'air et recyclage d\'eau.',
    icon: '🌿',
    gradient: 'from-green-600 to-emerald-500',
    href: '/',
    features: ['Domaines technologiques', 'Pack Autonomie', 'Afrique & Territoires', 'Précommande'],
    badge: null,
    isLegacy: true,
  },
];

export default function PlatformSelector() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">EmotionsCare</span>{' '}
            <span className="text-gray-400">Platform</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Choisissez votre expérience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Link
                to={product.href}
                className="block group"
              >
                <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] text-white text-xs font-bold">
                      {product.badge}
                    </span>
                  )}

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {product.id === 'aquevent' ? (
                      <span className="text-white font-bold text-lg">{product.icon}</span>
                    ) : (
                      <span className="text-3xl">{product.icon}</span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-[#8B2C5A] transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    Explorer →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-gray-400 mt-8"
        >
          EmotionsCare SASU · Amiens, France · SIREN 944 505 445
        </motion.p>
      </div>
    </div>
  );
}
