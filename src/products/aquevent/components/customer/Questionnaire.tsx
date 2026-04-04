import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AquaVentButton from '../ui/AquaVentButton';
import { usePersonalization } from '../../hooks/usePersonalization';

interface StepProps {
  onNext: (value: string) => void;
  onBack?: () => void;
}

const steps = [
  {
    id: 'smoking',
    question: 'Quel est votre rapport au tabac ?',
    options: [
      { value: 'current', label: 'Fumeur actuel', emoji: '🚬', desc: 'Je fume régulièrement' },
      { value: 'former', label: 'Ex-fumeur', emoji: '✅', desc: "J'ai arrêté mais je reste vigilant" },
      { value: 'never', label: 'Non-fumeur', emoji: '🌱', desc: "Je n'ai jamais fumé" },
    ],
  },
  {
    id: 'goal',
    question: 'Quel est votre objectif principal ?',
    options: [
      { value: 'cessation', label: 'Arrêter de fumer', emoji: '🎯', desc: 'Sevrage progressif et naturel' },
      { value: 'wellness', label: 'Bien-être quotidien', emoji: '✨', desc: 'Améliorer ma vitalité' },
      { value: 'relaxation', label: 'Relaxation', emoji: '🧘', desc: 'Gérer le stress naturellement' },
      { value: 'respiratory', label: 'Santé respiratoire', emoji: '🫁', desc: 'Améliorer ma respiration' },
    ],
  },
  {
    id: 'lifestyle',
    question: 'Quel est votre mode de vie ?',
    options: [
      { value: 'urban', label: 'Urbain', emoji: '🏙️', desc: 'Vie en ville, pollution quotidienne' },
      { value: 'suburban', label: 'Périurbain', emoji: '🏡', desc: 'Entre ville et campagne' },
      { value: 'rural', label: 'Rural', emoji: '🌾', desc: 'Environnement naturel' },
    ],
  },
  {
    id: 'budget',
    question: 'Quel budget mensuel envisagez-vous ?',
    options: [
      { value: 'standard', label: 'Standard', emoji: '💚', desc: '~36€/mois • Wellness Edition' },
      { value: 'premium', label: 'Premium', emoji: '💎', desc: '~54€/mois • Programme complet' },
      { value: 'unlimited', label: 'Illimité', emoji: '👑', desc: '~72€/mois • Expérience maximale' },
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
        smokingStatus: newAnswers.smoking as 'current' | 'former' | 'never',
        primaryGoal: newAnswers.goal as 'cessation' | 'wellness' | 'relaxation' | 'respiratory',
        lifestyle: newAnswers.lifestyle as 'urban' | 'suburban' | 'rural',
        budget: newAnswers.budget as 'standard' | 'premium' | 'unlimited',
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
        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-2xl font-bold mb-2">Votre programme personnalisé</h3>

        <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-[#8B2C5A]/5 to-[#1E88E5]/5 text-left space-y-4">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Version recommandée</span>
            <p className="text-lg font-bold" style={{ color: recommendation.version === 'wellness' ? '#8B2C5A' : '#1E88E5' }}>
              AquaVent {recommendation.version === 'wellness' ? 'Wellness' : 'Medical'} Edition
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Programme</span>
            <p className="text-lg font-bold text-gray-800">{recommendation.program}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Durée</span>
            <p className="text-gray-700">{recommendation.duration}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bénéfice attendu</span>
            <p className="text-[#43A047] font-medium">{recommendation.estimatedBenefit}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Budget mensuel</span>
            <p className="text-xl font-bold font-mono text-[#8B2C5A]">{recommendation.monthlyBudget}</p>
          </div>
        </div>

        <div className="mt-8 flex gap-4 justify-center">
          <AquaVentButton variant="premium" size="lg">
            Précommander maintenant
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
          <h3 className="text-2xl font-bold mb-8 text-center">{step.question}</h3>

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
              ← Retour
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
