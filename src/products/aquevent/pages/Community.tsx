import { motion } from 'framer-motion';
import AquaVentLayout from '../components/AquaVentLayout';
import Questionnaire from '../components/customer/Questionnaire';
import WaitlistSignup from '../components/customer/WaitlistSignup';
import AquaVentButton from '../components/ui/AquaVentButton';

const communityStats = [
  { value: '847', label: 'Inscrits sur la liste' },
  { value: '23', label: 'Pays représentés' },
  { value: '156', label: 'Beta testeurs actifs' },
  { value: '4.9/5', label: 'Satisfaction beta' },
];

export default function Community() {
  return (
    <AquaVentLayout>
      <div className="pt-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
            Communauté AquaVent
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Rejoignez une communauté engagée pour la santé respiratoire naturelle
        </p>
      </div>

      {/* Community Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white shadow-md"
              >
                <p className="text-3xl font-bold font-mono text-[#8B2C5A]">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Trouvez votre programme</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Répondez à quelques questions pour obtenir une recommandation personnalisée
          </p>
          <Questionnaire />
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Rejoindre la liste d'attente</h2>
            <p className="text-center text-gray-500 mb-10">
              Soyez parmi les premiers à recevoir votre AquaVent PhytoTech™
            </p>
            <WaitlistSignup />
          </div>
        </div>
      </section>

      {/* Beta Program */}
      <section className="py-16 bg-gradient-to-br from-[#8B2C5A]/5 to-[#1E88E5]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Programme Beta Testeur</h2>
            <p className="text-gray-600 mb-8">
              Testez AquaVent avant tout le monde et contribuez à façonner le produit final.
              Places limitées à 200 testeurs sélectionnés.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { icon: '🎁', title: 'Device gratuit', desc: 'Recevez un AquaVent offert' },
                { icon: '🗣️', title: 'Votre voix compte', desc: 'Influencez le design final' },
                { icon: '🏷️', title: '-50% à vie', desc: 'Réduction permanente sur les cartouches' },
              ].map((perk) => (
                <div key={perk.title} className="p-4 rounded-xl bg-white shadow-sm">
                  <span className="text-2xl block mb-2">{perk.icon}</span>
                  <h4 className="font-bold text-sm mb-1">{perk.title}</h4>
                  <p className="text-xs text-gray-500">{perk.desc}</p>
                </div>
              ))}
            </div>

            <AquaVentButton variant="premium" size="lg">
              Postuler au programme Beta
            </AquaVentButton>
            <p className="text-xs text-gray-400 mt-3">44 places restantes sur 200</p>
          </div>
        </div>
      </section>
    </AquaVentLayout>
  );
}
