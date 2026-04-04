import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AquaVentButton from '../ui/AquaVentButton';
import { usePersonalization } from '../../hooks/usePersonalization';

const steps = [
  {
    id: 'smoking',
    question: 'Votre Profil Respiration',
    subtitle: 'Quelle est votre situation actuelle ?',
    options: [
      { value: 'current', label: 'Je fume encore', emoji: '\uD83D\uDEAC', desc: 'Fumeur actuel regulier' },
      { value: 'vaper', label: 'Je vapote (e-cigarette)', emoji: '\uD83D\uDCA8', desc: 'Utilisateur e-cig' },
      { value: 'former', label: 'Ex-fumeur sevre', emoji: '\uD83D\uDEAB', desc: "J'ai arrete mais je reste vigilant" },
      { value: 'never', label: 'Jamais fume/vapote', emoji: '\u2728', desc: 'Interesse par le wellness' },
    ],
  },
  {
    id: 'goal',
    question: 'Votre Motivation Principale',
    subtitle: 'Pourquoi AquaVent vous interesse ?',
    options: [
      { value: 'cessation', label: 'Arreter de fumer/vapoter', emoji: '\uD83C\uDFAF', desc: 'Sevrage progressif et naturel' },
      { value: 'replace', label: 'Remplacer par plus sain', emoji: '\uD83D\uDD04', desc: 'Alternative sans toxicite' },
      { value: 'wellness', label: 'Wellness preventif', emoji: '\uD83C\uDF3F', desc: 'Bien-etre respiratoire quotidien' },
      { value: 'pollution', label: 'Protection pollution', emoji: '\uD83C\uDFD9\uFE0F', desc: 'Defense urbaine naturelle' },
    ],
  },
  {
    id: 'lifestyle',
    question: 'Votre Mode de Vie',
    subtitle: 'Combien de fois par jour utiliseriez-vous AquaVent ?',
    options: [
      { value: 'light', label: '1-5 fois/jour', emoji: '\uD83C\uDF1F', desc: 'Usage leger' },
      { value: 'moderate', label: '5-15 fois/jour', emoji: '\uD83D\uDCAA', desc: 'Usage moderee' },
      { value: 'heavy', label: '15-30 fois/jour', emoji: '\uD83D\uDD25', desc: 'Usage intensif' },
      { value: 'unlimited', label: '30+ fois/jour', emoji: '\u267E\uFE0F', desc: 'Usage illimite - c\'est possible !' },
    ],
  },
  {
    id: 'budget',
    question: 'Priorite Securite vs Performance',
    subtitle: "Qu'est-ce qui compte le plus pour vous ?",
    options: [
      { value: 'safety', label: 'Securite absolue', emoji: '\uD83D\uDEE1\uFE0F', desc: 'La securite avant tout' },
      { value: 'efficacy', label: 'Efficacite maximale', emoji: '\u26A1', desc: 'Resultats rapides et puissants' },
      { value: 'experience', label: 'Experience premium', emoji: '\u2728', desc: 'Design et sensation premium' },
      { value: 'natural', label: '100% naturel', emoji: '\uD83C\uDF3F', desc: 'La purete avant tout' },
    ],
  },
];

export default function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const { recommendation, updateProfile } = usePersonalization();

  const handleAnswer = (value: string) => {
    const step = steps[currentStep];
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep((c) => c + 1);
    } else {
      updateProfile({
        smokingStatus: (newAnswers.smoking === 'vaper' ? 'current' : newAnswers.smoking) as 'current' | 'former' | 'never',
        primaryGoal: (newAnswers.goal === 'replace' || newAnswers.goal === 'pollution' ? 'wellness' : newAnswers.goal) as 'cessation' | 'wellness' | 'relaxation' | 'respiratory',
        lifestyle: 'urban',
        budget: 'premium',
      });
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((c) => c - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult && recommendation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="text-5xl mb-4">\uD83C\uDFAF</div>
        <h3 className="text-2xl font-bold mb-2">Votre Recommandation Personnalisee</h3>

        <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-[#8B2C5A]/5 to-[#1E88E5]/5 text-left space-y-4">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Version recommandee</span>
            <p className="text-lg font-bold text-[#FFB300]">
              AquaVent UNLIMITED™
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Programme</span>
            <p className="text-lg font-bold text-gray-800">{recommendation.program}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Duree</span>
            <p className="text-gray-700">{recommendation.duration}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Benefice attendu</span>
            <p className="text-[#43A047] font-medium">{recommendation.estimatedBenefit}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-sm text-green-700 font-medium">
              Rappel: Usage illimite scientifiquement valide — aucune restriction
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Budget mensuel</span>
            <p className="text-xl font-bold font-mono text-[#8B2C5A]">{recommendation.monthlyBudget}</p>
          </div>
        </div>

        <div className="mt-8 flex gap-4 justify-center">
          <AquaVentButton variant="premium" size="lg">
            Rejoindre la liste d'attente
          </AquaVentButton>
          <AquaVentButton variant="ghost" size="lg" onClick={handleReset}>
            Recommencer
          </AquaVentButton>
        </div>
      </motion.div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {steps.map((_, i) => (
          <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-gray-200">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #8B2C5A, #1E88E5)' }}
              initial={{ width: 0 }}
              animate={{ width: i <= currentStep ? '100%' : '0%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
        <span className="text-xs text-gray-400 ml-2">
          {currentStep + 1}/{steps.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-center">{step.question}</h3>
          <p className="text-gray-500 text-center mb-8">{step.subtitle}</p>

          <div className="grid gap-4">
            {step.options.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`p-5 rounded-2xl border-2 text-left transition-all hover:shadow-md ${
                  answers[step.id] === option.value
                    ? 'border-[#8B2C5A] bg-[#8B2C5A]/5'
                    : 'border-gray-200 hover:border-[#8B2C5A]/30'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{option.emoji}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{option.label}</p>
                    <p className="text-sm text-gray-500">{option.desc}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              \u2190 Retour
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
