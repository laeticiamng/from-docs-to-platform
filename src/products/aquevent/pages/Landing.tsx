import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/3d/ParticleBackground';
import Device3DViewer from '../components/3d/Device3DViewer';
import AquaVentButton from '../components/ui/AquaVentButton';
import WaitlistSignup from '../components/customer/WaitlistSignup';
import AquaVentLayout from '../components/AquaVentLayout';
import SEOHead from '@/components/SEOHead';
import { Infinity as InfinityIcon, Leaf, Shield, Rocket } from 'lucide-react';

const revolutionaryClaims: { icon: React.ReactNode; title: string; subtitle: string }[] = [
  { icon: <InfinityIcon className="w-6 h-6" />, title: 'Usage Illimite', subtitle: 'Premiere mondiale' },
  { icon: <Leaf className="w-6 h-6" />, title: '100% Naturel', subtitle: 'Valide scientifiquement' },
  { icon: <Shield className="w-6 h-6" />, title: 'Securite Absolue', subtitle: 'Zero toxicite' },
  { icon: <Rocket className="w-6 h-6" />, title: 'Innovation Breakthrough', subtitle: 'PhytoTech revolution' },
];

const stats = [
  { value: '28M', label: 'Marche addressable Europe' },
  { value: '900M\u20AC', label: 'Revenue projection An 5' },
  { value: '0%', label: 'Toxicite confirmee' },
  { value: '15+', label: 'Etudes inhalation validees' },
];

const formulation = [
  {
    name: 'Spirulina Extract',
    concentration: '1.2mg/ml',
    safety: 'Marge securite: 2500x sous seuil toxique',
    benefits: 'Detox metaux lourds - Immunite respiratoire',
    color: '#1E88E5',
  },
  {
    name: 'Anthocyanes Myrtille',
    concentration: '2.5mg/ml',
    safety: "EFSA: 'No safety concern any level'",
    benefits: 'Antioxydant ultra-puissant - Conservation naturelle',
    color: '#8B2C5A',
  },
  {
    name: 'Phycocyanine',
    concentration: '0.8mg/ml',
    safety: '20+ ans usage sans incident',
    benefits: 'Performance respiratoire - Anti-inflammatoire',
    color: '#7B1FA2',
  },
];

const testimonials = [
  {
    name: 'Sophie L.',
    role: 'Ex-fumeuse, 38 ans',
    text: "J'ai arrete de fumer en 6 semaines avec AquaVent. Le geste est la, mais sans la dependance. C'est revolutionnaire.",
    rating: 5,
  },
  {
    name: 'Dr. Thomas R.',
    role: 'Pneumologue',
    text: "Pour la premiere fois, je vois une alternative vraiment naturelle et scientifiquement validee au vapotage nicotine. L'usage illimite change tout.",
    rating: 5,
  },
  {
    name: 'Marc D.',
    role: 'Utilisateur Wellness, 45 ans',
    text: "J'utilise AquaVent quotidiennement sans aucune restriction. La qualite de ma respiration s'est nettement amelioree.",
    rating: 5,
  },
];

export default function Landing() {
  return (
    <AquaVentLayout>
      <SEOHead title="AquaVent PhytoTech UNLIMITED™ — Respirez la nature" description="Premier inhalateur monde usage illimité, 100% naturel scientifiquement validé. Zéro toxicité." path="/aquevent" />
      {/* Hero Section - Breathe The Revolution */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1E88E5]/5 via-white to-[#8B2C5A]/5">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB300]/10 text-[#FFB300] text-sm font-bold mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#FFB300] animate-pulse" />
                UNLIMITED™ — Premiere mondiale usage illimite
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
                  Respirez La Nature
                </span>
                <br />
                <span className="text-gray-900">Sans Limite</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Premier inhalateur monde <span className="font-bold text-[#8B2C5A]">usage illimite</span>,
                100% naturel scientifiquement valide.
              </p>

              {/* Revolutionary Claims Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {revolutionaryClaims.map((claim, i) => (
                  <motion.div
                    key={claim.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 shadow-sm border border-gray-100"
                  >
                    <span className="text-2xl flex items-center justify-center">{claim.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{claim.title}</p>
                      <p className="text-xs text-gray-500">{claim.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/aquevent/product">
                  <AquaVentButton variant="premium" size="xl">
                    Decouvrir La Revolution
                  </AquaVentButton>
                </Link>
                <Link to="/aquevent/science">
                  <AquaVentButton variant="secondary" size="xl">
                    Pourquoi "Illimite" ?
                  </AquaVentButton>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Device3DViewer version="unlimited" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm"
          >
            Scroll pour la revolution
          </motion.div>
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

      {/* Revolutionary Formulation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
                AquaVent PhytoTech UNLIMITED™
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La seule formulation monde permettant un usage illimite
              avec benefices sante prouves scientifiquement
            </p>
          </div>

          {/* Revolution Safety Banner */}
          <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              REVOLUTION SECURITE
            </h3>
            <p className="text-green-600 text-lg">
              ZERO composant limitant - Usage illimite scientifiquement prouve -
              Formulation 100% naturelle validee pour l'inhalation humaine
            </p>
          </div>

          {/* Formulation Components */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {formulation.map((component, i) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl shadow-lg p-6 border-t-4"
                style={{ borderColor: component.color }}
              >
                <h4 className="text-lg font-bold mb-1" style={{ color: component.color }}>
                  {component.name}
                </h4>
                <p className="text-sm font-mono text-gray-500 mb-4">{component.concentration}</p>

                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-green-700 mb-1">Securite</p>
                    <p className="text-sm text-green-600">{component.safety}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-blue-700 mb-1">Benefices</p>
                    <p className="text-sm text-blue-600">{component.benefits}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Water Base */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-2">Base: Eau Spirulina Filtree (95.7%)</h4>
              <p className="text-sm text-blue-600">
                Purete &gt;99.99% - Endotoxines &lt;0.001 EU/ml - Eau de qualite pharmaceutique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">AquaVent vs Le Monde</h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Categorie</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Concurrents</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-[#8B2C5A]">AquaVent UNLIMITED™</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: 'Usage Quotidien',
                    competitors: 'Limite (restrictions doses)',
                    aquevent: 'ILLIMITE (premiere mondiale)',
                  },
                  {
                    category: 'Composants',
                    competitors: 'Chimiques (PG/VG, conservateurs)',
                    aquevent: '100% Naturels valides',
                  },
                  {
                    category: 'Securite',
                    competitors: 'Warnings, limitations',
                    aquevent: 'Securite absolue toute dose',
                  },
                  {
                    category: 'Benefices sante',
                    competitors: 'Aucun / dommages documentes',
                    aquevent: 'Prouves scientifiquement',
                  },
                  {
                    category: 'Validation',
                    competitors: 'Partielle / contestee',
                    aquevent: '15+ etudes inhalation',
                  },
                ].map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : ''}>
                    <td className="py-4 px-4 text-sm font-medium text-gray-700">{row.category}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-sm text-red-500">{row.competitors}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-sm font-bold text-green-600">{row.aquevent}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Comment ca marche</h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Choisissez', desc: "Selectionnez votre AquaVent UNLIMITED™ et personnalisez votre device." },
              { step: '02', title: 'Inhalez', desc: "Utilisez votre AquaVent sans aucune restriction. La technologie PhytoTech™ fait le reste." },
              { step: '03', title: 'Ressentez', desc: "Les principes actifs naturels agissent directement. Effets en quelques minutes." },
              { step: '04', title: 'Illimite', desc: "Pas de dose maximale, pas de restriction. Usage illimite scientifiquement valide." },
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
      <section className="py-20 bg-gray-50">
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
                    <span key={j} className="text-yellow-400">&#9733;</span>
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
              Rejoignez La Revolution
            </h2>
            <p className="text-gray-600 mb-10">
              Soyez parmi les premiers a respirer l'avenir avec AquaVent PhytoTech UNLIMITED™.
              Inscription gratuite, sans engagement.
            </p>
            <WaitlistSignup />
          </div>
        </div>
      </section>
    </AquaVentLayout>
  );
}
