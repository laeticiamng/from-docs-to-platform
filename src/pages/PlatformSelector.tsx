import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'aquevent',
    name: 'AquaVent PhytoTech UNLIMITED\u2122',
    description: "Premier inhalateur monde usage illimite, 100% naturel, scientifiquement valide. Revolution inhalation.",
    icon: 'AV',
    gradient: 'from-[#8B2C5A] to-[#1E88E5]',
    href: '/aquevent',
    features: ['Usage Illimite', 'Securite Absolue', 'Investisseurs', 'Communaute'],
    badge: 'UNLIMITED\u2122',
    hoverColor: 'group-hover:text-[#8B2C5A]',
  },
  {
    id: 'biobot',
    name: 'BioBot PhytoTech\u2122',
    description: 'Robots vivants bio-hybrides. De l\'inhalation revolutionnaire a la robotique vivante. Platform civilisation.',
    icon: 'BB',
    gradient: 'from-[#2E7D32] to-[#00897B]',
    href: '/biobot',
    features: ['Bio-Energie', 'Bio-Materiaux', 'HealthBot / AgroBot / OceanBot', 'Ecosystem'],
    badge: 'NOUVEAU',
    hoverColor: 'group-hover:text-[#2E7D32]',
  },
  {
    id: 'phytotech',
    name: 'PhytoTech Home',
    description: 'Kits bio-energie utilisant plantes, algues et eau pour la production d\'electricite, purification d\'air et recyclage d\'eau.',
    icon: '\uD83C\uDF3F',
    gradient: 'from-green-600 to-emerald-500',
    href: '/',
    features: ['Domaines technologiques', 'Pack Autonomie', 'Afrique & Territoires', 'Precommande'],
    badge: null,
    isLegacy: true,
    hoverColor: 'group-hover:text-green-600',
  },
];

export default function PlatformSelector() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
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
            Choisissez votre experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                to={product.href}
                className="block group"
              >
                <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
                  {product.badge && (
                    <span className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white text-xs font-bold`}>
                      {product.badge}
                    </span>
                  )}

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {product.id === 'phytotech' ? (
                      <span className="text-3xl">{product.icon}</span>
                    ) : (
                      <span className="text-white font-bold text-lg">{product.icon}</span>
                    )}
                  </div>

                  <h2 className={`text-xl font-bold mb-3 transition-colors ${product.hoverColor}`}>
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
                    Explorer &#8594;
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
          EmotionsCare SASU &middot; Amiens, France &middot; SIREN 944 505 445
        </motion.p>
      </div>
    </div>
  );
}
