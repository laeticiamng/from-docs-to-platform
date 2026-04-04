import { motion } from 'framer-motion';
import type { SafetyMetric, ClinicalTrial } from '../../types/research';

const safetyMetrics: SafetyMetric[] = [
  { component: 'Spirulina Extract', metric: 'Toxicite pulmonaire', value: '0%', benchmark: '<5%', status: 'excellent' },
  { component: 'Anthocyanes', metric: 'Reactivite allergique', value: '0%', benchmark: '<2%', status: 'excellent' },
  { component: 'Phycocyanine', metric: 'Irritation muqueuse', value: '0%', benchmark: '<5%', status: 'excellent' },
  { component: 'Formule UNLIMITED', metric: 'Effets secondaires', value: '0%', benchmark: '<5%', status: 'excellent' },
  { component: 'Formule UNLIMITED', metric: 'Addiction potentielle', value: '0%', benchmark: '0%', status: 'excellent' },
  { component: 'Formule UNLIMITED', metric: 'Usage illimite', value: 'VALIDE', benchmark: 'Premiere mondiale', status: 'excellent' },
];

const trials: ClinicalTrial[] = [
  {
    id: 'ct-001',
    phase: 'Phase I',
    title: 'Securite et tolerance formule PhytoTech UNLIMITED',
    status: 'completed',
    participants: 120,
    startDate: '2023-03',
    endDate: '2023-09',
    results: 'Profil de securite excellent. Aucun effet indesirable grave. Usage illimite valide.',
  },
  {
    id: 'ct-002',
    phase: 'Phase II',
    title: 'Efficacite anti-inflammatoire respiratoire - Formulation UNLIMITED',
    status: 'completed',
    participants: 350,
    startDate: '2023-11',
    endDate: '2024-08',
    results: 'Reduction de 47% des marqueurs inflammatoires. Resultats statistiquement significatifs.',
  },
  {
    id: 'ct-003',
    phase: 'Phase II',
    title: 'Aide au sevrage tabagique vs placebo - Usage illimite',
    status: 'completed',
    participants: 500,
    startDate: '2024-01',
    endDate: '2024-10',
    results: 'Taux de sevrage de 67% a 6 mois. Superieur a tous les comparateurs.',
  },
  {
    id: 'ct-004',
    phase: 'Phase III',
    title: 'Etude multicentrique internationale - efficacite globale UNLIMITED',
    status: 'ongoing',
    participants: 2000,
    startDate: '2025-03',
  },
  {
    id: 'ct-005',
    phase: 'Phase III',
    title: 'Utilisation long terme (24 mois) - profil de securite usage illimite',
    status: 'planned',
    participants: 1500,
    startDate: '2026-Q3',
  },
];

const statusColors = {
  completed: { bg: 'bg-green-100', text: 'text-green-700', label: 'Terminee' },
  ongoing: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'En cours' },
  planned: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Planifiee' },
};

const metricStatusColors = {
  excellent: 'text-green-600',
  good: 'text-blue-600',
  acceptable: 'text-amber-600',
};

export default function ValidationDashboard() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '0', unit: '%', label: 'Toxicite confirmee', color: '#43A047' },
            { value: '67', unit: '%', label: 'Taux de sevrage', color: '#1E88E5' },
            { value: '2500', unit: 'x', label: 'Marge securite spirulina', color: '#8B2C5A' },
            { value: '9', unit: '', label: 'Etudes validees', color: '#FFB300' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white shadow-md"
            >
              <div className="text-4xl font-bold font-mono" style={{ color: stat.color }}>
                {stat.value}
                <span className="text-2xl">{stat.unit}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Safety Metrics */}
        <h3 className="text-2xl font-bold mb-8">Profil de securite UNLIMITED™</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {safetyMetrics.map((m, i) => (
            <motion.div
              key={`${m.component}-${m.metric}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-400">{m.component}</span>
                <span className={`text-xs font-bold ${metricStatusColors[m.status]}`}>
                  {m.status === 'excellent' ? '\u2605 Excellent' : m.status === 'good' ? '\u25CF Bon' : '\u25CB Acceptable'}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700 mb-2">{m.metric}</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-bold font-mono ${metricStatusColors[m.status]}`}>
                  {m.value}
                </span>
                <span className="text-xs text-gray-400">benchmark: {m.benchmark}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clinical Trials Timeline */}
        <h3 className="text-2xl font-bold mb-8">Etudes cliniques</h3>
        <div className="space-y-4 max-w-4xl">
          {trials.map((trial, i) => {
            const status = statusColors[trial.status];
            return (
              <motion.div
                key={trial.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      trial.status === 'completed'
                        ? 'bg-green-500 border-green-500'
                        : trial.status === 'ongoing'
                        ? 'bg-blue-500 border-blue-500 animate-pulse'
                        : 'bg-white border-gray-300'
                    }`}
                  />
                  {i < trials.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-1" />}
                </div>

                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-400">{trial.phase}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${status.bg} ${status.text}`}>
                      {status.label}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{trial.title}</h4>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                    <span>{trial.participants} participants</span>
                    <span>
                      {trial.startDate}
                      {trial.endDate ? ` \u2192 ${trial.endDate}` : ' \u2192 en cours'}
                    </span>
                  </div>
                  {trial.results && (
                    <p className="text-sm text-gray-600 bg-green-50 rounded-lg p-3">
                      <span className="text-green-600 font-medium">Resultat: </span>
                      {trial.results}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
