import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/3d/ParticleBackground';
import Device3DViewer from '../components/3d/Device3DViewer';
import AquaVentButton from '../components/ui/AquaVentButton';
import WaitlistSignup from '../components/customer/WaitlistSignup';
import AquaVentLayout from '../components/AquaVentLayout';

const features = [
  {
    icon: '🌿',
    title: '100% Naturel',
    desc: 'Spiruline, anthocyanes, eucalyptus, propolis. Zéro produit chimique, zéro additif.',
  },
  {
    icon: '🔬',
    title: 'Scientifiquement validé',
    desc: '6 études publiées, 3 essais cliniques, 0% de toxicité pulmonaire confirmée.',
  },
  {
    icon: '🚫',
    title: 'Zéro addiction',
    desc: 'Aucune nicotine, aucune substance addictive. Liberté totale, sans dépendance.',
  },
  {
    icon: '💨',
    title: 'Technologie brevetée',
    desc: 'Micro-encapsulation PhytoTech™ : biodisponibilité 280% supérieure à la voie orale.',
  },
];

const stats = [
  { value: '67%', label: 'Taux de sevrage à 6 mois' },
  { value: '47%', label: 'Réduction inflammation' },
  { value: '0%', label: "Risque d'addiction" },
  { value: '280%', label: 'Biodisponibilité vs oral' },
];

const testimonials = [
  {
    name: 'Sophie L.',
    role: 'Ex-fumeuse, 38 ans',
    text: "J'ai arrêté de fumer en 6 semaines avec AquaVent. Le geste est là, mais sans la dépendance. C'est révolutionnaire.",
    rating: 5,
  },
  {
    name: 'Dr. Thomas R.',
    role: 'Pneumologue',
    text: "Pour la première fois, je vois une alternative vraiment naturelle et scientifiquement validée au vapotage nicotiné.",
    rating: 5,
  },
  {
    name: 'Marc D.',
    role: 'Utilisateur Wellness, 45 ans',
    text: "J'utilise AquaVent quotidiennement pour la relaxation. La qualité de ma respiration s'est nettement améliorée.",
    rating: 5,
  },
];

export default function Landing() {
  return (
    <AquaVentLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B2C5A]/10 text-[#8B2C5A] text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#8B2C5A] animate-pulse" />
                Révolution PhytoTech™ — Inhalation 100% naturelle
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
                  Respirez
                </span>
                <br />
                la nature.
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Le premier inhalateur 100% naturel, scientifiquement validé, zéro addiction.
                Bien-être respiratoire et sevrage tabagique réinventés.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/aquevent/product">
                  <AquaVentButton variant="premium" size="xl">
                    Découvrir AquaVent
                  </AquaVentButton>
                </Link>
                <Link to="/aquevent/science">
                  <AquaVentButton variant="secondary" size="xl">
                    La science derrière
                  </AquaVentButton>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Device3DViewer version="wellness" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-12 bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <p className="text-4xl md:text-5xl font-bold font-mono">{stat.value}</p>
                <p className="text-sm mt-2 text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Pourquoi{' '}
            <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
              AquaVent
            </span>{' '}
            ?
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
            Une innovation qui combine le meilleur de la nature et de la science pour votre bien-être respiratoire.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Comment ça marche</h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Choisissez', desc: 'Sélectionnez votre version (Wellness ou Medical) et vos objectifs personnels.' },
              { step: '02', title: 'Inhalez', desc: "Utilisez votre AquaVent comme un inhalateur classique. La technologie PhytoTech™ fait le reste." },
              { step: '03', title: 'Ressentez', desc: 'Les principes actifs naturels agissent directement sur vos poumons. Effets en quelques minutes.' },
              { step: '04', title: 'Progressez', desc: "Suivez vos progrès dans l'app. Améliorez votre santé respiratoire jour après jour." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8B2C5A] to-[#1E88E5] flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Ils en parlent</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white shadow-md border border-gray-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Waitlist */}
      <section className="py-20 bg-gradient-to-br from-[#8B2C5A]/5 to-[#1E88E5]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Rejoignez la révolution
            </h2>
            <p className="text-gray-600 mb-10">
              Inscrivez-vous sur la liste d'attente et soyez parmi les premiers à découvrir AquaVent PhytoTech™.
            </p>
            <WaitlistSignup />
          </div>
        </div>
      </section>
    </AquaVentLayout>
  );
}
