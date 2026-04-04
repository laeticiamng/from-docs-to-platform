import { motion } from 'framer-motion';
import competitors from '../../data/competitor-analysis.json';

const teamMembers = [
  {
    name: 'Dr. Marie Dupont',
    role: 'CEO & Co-fondatrice',
    expertise: 'Pharmacologie respiratoire, 15 ans R&D',
    bio: "Docteure en pharmacologie, ex-directrice R&D chez un leader mondial de la sante respiratoire. Inventrice de la technologie PhytoTech™.",
  },
  {
    name: 'Prof. Jean-Luc Bernard',
    role: 'CSO (Chief Science Officer)',
    expertise: 'Phytotherapie, Toxicologie',
    bio: 'Professeur emerite de phytotherapie. 200+ publications scientifiques. Expert reconnu en securite des produits naturels.',
  },
  {
    name: 'Alexandre Martin',
    role: 'CTO',
    expertise: 'Hardware, IoT, Production',
    bio: 'Ex-ingenieur senior Apple. Expert en miniaturisation et systemes de delivrance. 12 brevets deposes.',
  },
  {
    name: 'Laeticia Mng',
    role: 'COO & Co-fondatrice',
    expertise: 'Business Development, Innovation',
    bio: 'Experte en developpement de plateformes technologiques et strategie business. Vision produit et go-to-market.',
  },
];

export default function MarketAnalysis() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Crisis + Solution */}
        <h3 className="text-3xl font-bold text-center mb-12">Market Opportunity: La Revolution Necessaire</h3>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Problem Statement */}
          <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
            <h4 className="text-xl font-bold text-red-700 mb-4">Crisis Inhalation Mondiale</h4>
            <div className="space-y-3 text-red-600">
              <p><strong>3.2M vapoteurs France</strong> empoisonnes quotidiennement PG/VG</p>
              <p><strong>15M fumeurs Europe</strong> cherchent alternative vraiment sure</p>
              <p><strong>ZERO solution naturelle</strong> usage illimite existante</p>
              <p><strong>Regulatory pressure</strong> croissante e-cigarettes</p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
            <h4 className="text-xl font-bold text-green-700 mb-4">AquaVent UNLIMITED™ Solution</h4>
            <div className="space-y-3 text-green-600">
              <p><strong>Usage illimite valide</strong> scientifiquement — premiere mondiale</p>
              <p><strong>100% naturel</strong> chaque composant prouve sur inhalation</p>
              <p><strong>Benefices sante</strong> vs dommages (revolution paradigme)</p>
              <p><strong>Premium experience</strong> Apple-level satisfaction</p>
            </div>
          </div>
        </div>

        {/* Key Market Drivers */}
        <h3 className="text-2xl font-bold text-center mb-8">Dynamique du marche</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: '\uD83D\uDEAB',
              title: 'Reglementation anti-tabac',
              desc: '85 pays renforcent la legislation. Interdictions croissantes du vapotage nicotine.',
              trend: '+23% de regulation/an',
            },
            {
              icon: '\uD83C\uDF3F',
              title: 'Demande de naturel',
              desc: '78% des consommateurs preferent les alternatives naturelles aux produits chimiques.',
              trend: '+18.7% CAGR',
            },
            {
              icon: '\uD83C\uDFE5',
              title: 'Sante respiratoire',
              desc: 'Post-COVID, la sante pulmonaire est devenue une priorite mondiale.',
              trend: '3.4B personnes concernees',
            },
            {
              icon: '\uD83D\uDCA1',
              title: 'Innovation UNLIMITED',
              desc: 'Premiere technologie brevetee usage illimite naturel. Blue ocean complet.',
              trend: '25+ brevets possibles',
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
        <h3 className="text-2xl font-bold text-center mb-4">Competitive: Blue Ocean Confirme</h3>
        <p className="text-center text-gray-500 mb-10">
          Positionnement unique: usage illimite + 100% naturel + valide scientifiquement
        </p>

        <div className="relative h-96 max-w-3xl mx-auto mb-8 bg-white rounded-2xl shadow-md p-8">
          {/* Axes */}
          <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-gray-200" />
          <div className="absolute bottom-8 left-8 top-8 w-0.5 bg-gray-200" />
          <span className="absolute bottom-2 right-8 text-xs text-gray-400">Innovation →</span>
          <span className="absolute top-4 left-2 text-xs text-gray-400 -rotate-90 origin-center">Securite →</span>

          {/* Competitor bubbles */}
          {competitors.map((c, i) => {
            const isAquaVent = c.name.includes('AquaVent');
            const positions = [
              { x: '65%', y: '70%' }, // E-cig
              { x: '50%', y: '50%' }, // Nicorette
              { x: '25%', y: '35%' }, // Aromatherapie
              { x: '45%', y: '45%' }, // CBD
              { x: '88%', y: '10%' }, // AquaVent UNLIMITED
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
                    isAquaVent ? 'w-24 h-24 shadow-lg ring-2 ring-[#FFB300]/30' : 'w-14 h-14'
                  }`}
                  style={{
                    background: isAquaVent
                      ? 'linear-gradient(135deg, #8B2C5A, #1E88E5)'
                      : `rgba(156, 163, 175, ${0.3 + c.marketShare / 100})`,
                  }}
                >
                  <span className={`text-center leading-tight ${isAquaVent ? 'text-white text-[8px] font-bold' : 'text-gray-600 text-[7px]'}`}>
                    {isAquaVent ? 'AquaVent\nUNLIMITED™' : c.name.split('(')[0].trim().substring(0, 12)}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Competitive Insights */}
        <div className="grid md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {[
            "Aucun concurrent direct sur 'usage illimite'",
            'Blue ocean complet - nouvelle categorie',
            'First-mover 18-24 mois minimum',
            'Defensive moat: IP + expertise + brand',
          ].map((insight, i) => (
            <div key={insight} className="bg-[#8B2C5A]/5 rounded-xl p-4 text-center">
              <p className="text-sm text-[#8B2C5A] font-medium">{insight}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <h3 className="text-3xl font-bold text-center mb-4">L'equipe</h3>
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
