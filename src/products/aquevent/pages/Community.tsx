import { useState } from 'react';
import { motion } from 'framer-motion';
import AquaVentLayout from '../components/AquaVentLayout';
import Questionnaire from '../components/customer/Questionnaire';
import WaitlistSignup from '../components/customer/WaitlistSignup';
import AquaVentButton from '../components/ui/AquaVentButton';

const communityStats = [
  { value: '2,547', label: 'Early adopters inscrits' },
  { value: '23', label: 'Pays representes' },
  { value: '156', label: 'Medecins interesses' },
  { value: '89%', label: 'Taux de recommandation' },
];

const referralRewards = [
  { refs: 1, reward: '25\u20AC credit', icon: '\uD83E\uDD49' },
  { refs: 5, reward: 'Device gratuit', icon: '\uD83E\uDD48' },
  { refs: 10, reward: 'Edition limitee + coaching', icon: '\uD83E\uDD47' },
  { refs: 25, reward: 'VIP program a vie', icon: '\uD83D\uDC8E' },
];

const launchTimeline = [
  {
    date: 'Mois 6',
    title: 'Clinical Results',
    description: 'Publication resultats etude securite',
    status: 'upcoming' as const,
  },
  {
    date: 'Mois 12',
    title: 'Regulatory Approval',
    description: 'Autorisation commerciale Europe',
    status: 'upcoming' as const,
  },
  {
    date: 'Mois 15',
    title: 'Limited Launch',
    description: '1000 premiers early adopters',
    status: 'future' as const,
  },
  {
    date: 'Mois 18',
    title: 'Public Launch',
    description: 'Disponibilite generale',
    status: 'future' as const,
  },
];

export default function Community() {
  const [referralCopied, setReferralCopied] = useState(false);

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(
      'Decouvre AquaVent PhytoTech UNLIMITED™ - Premier inhalateur monde usage illimite 100% naturel !'
    );
    setReferralCopied(true);
    setTimeout(() => setReferralCopied(false), 2000);
  };

  return (
    <AquaVentLayout>
      <div className="pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
            Rejoignez La Revolution
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Soyez parmi les premiers a respirer l'avenir
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

      {/* Early Access Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-[#8B2C5A] to-[#1E88E5] p-8 rounded-2xl text-white max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Early Access Program</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: '\uD83C\uDFAF', title: 'Premier Servi', subtitle: 'Livraison prioritaire' },
                { icon: '\uD83D\uDCB0', title: 'Prix Special', subtitle: '-30% early bird' },
                { icon: '\uD83C\uDF81', title: 'Exclusivite', subtitle: 'Edition limitee or' },
              ].map((benefit) => (
                <div key={benefit.title} className="p-3 bg-white/10 rounded-xl">
                  <span className="text-2xl block mb-1">{benefit.icon}</span>
                  <p className="text-sm font-bold">{benefit.title}</p>
                  <p className="text-xs opacity-80">{benefit.subtitle}</p>
                </div>
              ))}
            </div>

            <WaitlistSignup />
          </div>
        </div>
      </section>

      {/* Personalization Questionnaire */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Trouvez votre programme</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Repondez a quelques questions pour obtenir une recommandation personnalisee.
            Rappel: Usage illimite scientifiquement valide.
          </p>
          <Questionnaire />
        </div>
      </section>

      {/* Referral Program - "Breathe Together" */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Programme "Breathe Together"
            </h2>
            <p className="text-center text-gray-500 mb-10">
              Partagez la revolution et gagnez des recompenses
            </p>

            <div className="grid sm:grid-cols-4 gap-4 mb-8">
              {referralRewards.map((reward) => (
                <motion.div
                  key={reward.refs}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-2xl bg-white shadow-md border border-gray-100 text-center"
                >
                  <span className="text-3xl block mb-2">{reward.icon}</span>
                  <p className="text-lg font-bold text-[#8B2C5A] font-mono">{reward.refs}</p>
                  <p className="text-xs text-gray-400 mb-1">{reward.refs === 1 ? 'filleul' : 'filleuls'}</p>
                  <p className="text-sm font-medium text-gray-700">{reward.reward}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <AquaVentButton
                variant="premium"
                size="lg"
                onClick={handleCopyReferral}
              >
                {referralCopied ? 'Copie !' : 'Copier mon lien de parrainage'}
              </AquaVentButton>
              <p className="text-xs text-gray-400 mt-3">
                Partagez avec vos amis et montez dans la file d'attente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Timeline Revolution</h2>
          <p className="text-center text-gray-500 mb-10">
            Position actuelle: Developpement R&D
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {launchTimeline.map((milestone, i) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        milestone.status === 'upcoming'
                          ? 'bg-[#1E88E5] border-[#1E88E5] animate-pulse'
                          : 'bg-white border-gray-300'
                      }`}
                    />
                    {i < launchTimeline.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-1" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-400 font-mono">{milestone.date}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          milestone.status === 'upcoming'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {milestone.status === 'upcoming' ? 'Prochainement' : 'A venir'}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">{milestone.title}</h4>
                    <p className="text-sm text-gray-500">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beta Program */}
      <section className="py-16 bg-gradient-to-br from-[#8B2C5A]/5 to-[#1E88E5]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Programme Beta Testeur</h2>
            <p className="text-gray-600 mb-8">
              Testez AquaVent UNLIMITED™ avant tout le monde et contribuez a faconner le produit final.
              Places limitees a 200 testeurs selectionnes.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { icon: '\uD83C\uDF81', title: 'Device gratuit', desc: 'Recevez un AquaVent offert' },
                { icon: '\uD83D\uDDE3\uFE0F', title: 'Votre voix compte', desc: 'Influencez le design final' },
                { icon: '\uD83C\uDFF7\uFE0F', title: '-50% a vie', desc: 'Reduction permanente cartouches' },
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
