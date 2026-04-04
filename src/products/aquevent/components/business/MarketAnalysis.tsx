import { motion } from 'framer-motion';
import competitors from '../../data/competitor-analysis.json';
import type { Competitor } from '../../types/business';

const teamMembers = [
  {
    name: 'Dr. Marie Dupont',
    role: 'CEO & Co-fondatrice',
    expertise: 'Pharmacologie respiratoire, 15 ans R&D',
    bio: 'Docteure en pharmacologie, ex-directrice R&D chez un leader mondial de la santé respiratoire. Inventrice de la technologie PhytoTech™.',
  },
  {
    name: 'Prof. Jean-Luc Bernard',
    role: 'CSO (Chief Science Officer)',
    expertise: 'Phytothérapie, Toxicologie',
    bio: 'Professeur émérite de phytothérapie. 200+ publications scientifiques. Expert reconnu en sécurité des produits naturels.',
  },
  {
    name: 'Alexandre Martin',
    role: 'CTO',
    expertise: 'Hardware, IoT, Production',
    bio: 'Ex-ingénieur senior Apple. Expert en miniaturisation et systèmes de délivrance. 12 brevets déposés.',
  },
  {
    name: 'Laeticia Mng',
    role: 'COO & Co-fondatrice',
    expertise: 'Business Development, Innovation',
    bio: 'Experte en développement de plateformes technologiques et stratégie business. Vision produit et go-to-market.',
  },
];

export default function MarketAnalysis() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Key Market Drivers */}
        <h3 className="text-3xl font-bold text-center mb-12">Dynamique du marché</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: '🚫',
              title: 'Réglementation anti-tabac',
              desc: '85 pays renforcent la législation. Interdictions croissantes du vapotage nicotiné.',
              trend: '+23% de régulation/an',
            },
            {
              icon: '🌿',
              title: 'Demande de naturel',
              desc: '78% des consommateurs préfèrent les alternatives naturelles aux produits chimiques.',
              trend: '+18.7% CAGR',
            },
            {
              icon: '🏥',
              title: 'Santé respiratoire',
              desc: 'Post-COVID, la santé pulmonaire est devenue une priorité mondiale.',
              trend: '3.4B personnes concernées',
            },
            {
              icon: '💡',
              title: 'Innovation PhytoTech',
              desc: 'Première technologie brevetée combinant micro-encapsulation et inhalation naturelle.',
              trend: '3 brevets déposés',
            },
          ].map((driver, i) => (
            <motion.div
              key={driver.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white shadow-md border border-gray-100"
            >
              <span className="text-3xl mb-4 block">{driver.icon}</span>
              <h4 className="font-bold text-lg mb-2">{driver.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{driver.desc}</p>
              <span className="text-xs font-mono font-bold text-[#8B2C5A]">{driver.trend}</span>
            </motion.div>
          ))}
        </div>

        {/* Competitive Matrix */}
        <h3 className="text-3xl font-bold text-center mb-4">Matrice concurrentielle</h3>
        <p className="text-center text-gray-500 mb-10">
          Positionnement unique dans l'espace naturel + scientifiquement validé
        </p>

        <div className="relative h-96 max-w-3xl mx-auto mb-16 bg-white rounded-2xl shadow-md p-8">
          {/* Axes */}
          <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-gray-200" />
          <div className="absolute bottom-8 left-8 top-8 w-0.5 bg-gray-200" />
          <span className="absolute bottom-2 right-8 text-xs text-gray-400">Innovation →</span>
          <span className="absolute top-4 left-2 text-xs text-gray-400 -rotate-90 origin-center">Naturel →</span>

          {/* Competitor bubbles */}
          {(competitors as Competitor[]).map((c, i) => {
            const isAquaVent = c.name.includes('AquaVent');
            const positions = [
              { x: '70%', y: '75%' }, // JUUL
              { x: '55%', y: '70%' }, // Nicorette
              { x: '25%', y: '35%' }, // Aromatherapie
              { x: '45%', y: '40%' }, // CBD
              { x: '85%', y: '15%' }, // AquaVent
            ];
            const pos = positions[i] || { x: '50%', y: '50%' };

            return (
              <motion.div
                key={c.name}
                className={`absolute flex items-center justify-center rounded-full text-center ${
                  isAquaVent ? 'z-10' : ''
                }`}
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.15, type: 'spring' }}
              >
                <div
                  className={`rounded-full flex items-center justify-center ${
                    isAquaVent ? 'w-20 h-20 shadow-lg' : 'w-14 h-14'
                  }`}
                  style={{
                    background: isAquaVent
                      ? 'linear-gradient(135deg, #8B2C5A, #1E88E5)'
                      : `rgba(156, 163, 175, ${0.3 + c.marketShare / 100})`,
                  }}
                >
                  <span className={`text-center leading-tight ${isAquaVent ? 'text-white text-[8px] font-bold' : 'text-gray-600 text-[7px]'}`}>
                    {c.name.split('/')[0].trim().substring(0, 12)}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Team */}
        <h3 className="text-3xl font-bold text-center mb-4">L'équipe</h3>
        <p className="text-center text-gray-500 mb-10">
          Des experts de classe mondiale en pharmacologie, technologie et business
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B2C5A] to-[#1E88E5] flex items-center justify-center text-white text-xl font-bold mb-4">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h4 className="font-bold text-lg">{member.name}</h4>
              <p className="text-sm font-medium text-[#8B2C5A] mb-2">{member.role}</p>
              <p className="text-xs text-gray-400 mb-3">{member.expertise}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
