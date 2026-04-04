import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AquaVentButton from '../ui/AquaVentButton';
import { useAnalytics, AquaVentEvents } from '../../hooks/useAnalytics';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    question: 'Quel est le principal composant anti-inflammatoire de la spiruline ?',
    options: ['Chlorophylle', 'Phycocyanine', 'Bêta-carotène', 'Oméga-3'],
    correct: 1,
    explanation: 'La phycocyanine est le pigment bleu unique de la spiruline, responsable de ses propriétés anti-inflammatoires puissantes. Elle réduit de 47% les marqueurs inflammatoires pulmonaires.',
  },
  {
    question: 'Quelle est la taille optimale des micro-particules PhytoTech pour le dépôt alvéolaire ?',
    options: ['0.1-0.5 μm', '2-5 μm', '10-20 μm', '50-100 μm'],
    correct: 1,
    explanation: 'Les particules de 2-5 μm sont la taille optimale pour le dépôt dans les alvéoles pulmonaires, maximisant la biodisponibilité des principes actifs.',
  },
  {
    question: 'Quel est le taux de sevrage tabagique observé avec AquaVent à 6 mois ?',
    options: ['35%', '52%', '67%', '89%'],
    correct: 2,
    explanation: "L'étude clinique sur 500 participants a démontré un taux de sevrage de 67% à 6 mois, supérieur à tous les comparateurs y compris les patchs nicotiniques (42%).",
  },
  {
    question: "Quel est le potentiel d'addiction des composés PhytoTech ?",
    options: ['Très faible (< 1%)', 'Faible (1-5%)', 'Nul (0%)', 'Modéré (5-10%)'],
    correct: 2,
    explanation: "Les composés 100% naturels de la formule PhytoTech n'ont aucun potentiel addictif. Contrairement à la nicotine, ils n'agissent pas sur le circuit dopaminergique de récompense.",
  },
  {
    question: "De combien la biodisponibilité est-elle augmentée par inhalation vs voie orale ?",
    options: ['50%', '120%', '280%', '500%'],
    correct: 2,
    explanation: 'La micro-encapsulation PhytoTech augmente la biodisponibilité de 280% par rapport à la voie orale, grâce au dépôt direct dans les alvéoles pulmonaires.',
  },
];

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { trackEvent } = useAnalytics();

  const question = quizQuestions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
      trackEvent(AquaVentEvents.QUIZ_COMPLETE, {
        score,
        total: quizQuestions.length,
      });
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto text-center py-12"
      >
        <div className="text-6xl mb-4">{percentage >= 80 ? '🏆' : percentage >= 60 ? '👏' : '📚'}</div>
        <h3 className="text-2xl font-bold mb-2">Quiz terminé !</h3>
        <p className="text-4xl font-bold font-mono mb-4" style={{ color: percentage >= 80 ? '#43A047' : percentage >= 60 ? '#FFB300' : '#8B2C5A' }}>
          {score}/{quizQuestions.length}
        </p>
        <p className="text-gray-600 mb-8">
          {percentage >= 80
            ? 'Excellent ! Vous maîtrisez la technologie PhytoTech.'
            : percentage >= 60
            ? 'Bien ! Quelques notions à approfondir.'
            : 'Continuez à explorer nos cours pour en apprendre davantage.'}
        </p>
        <AquaVentButton variant="secondary" size="md" onClick={handleReset}>
          Recommencer le quiz
        </AquaVentButton>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-lg font-bold">Quiz PhytoTech</h4>
        <span className="text-sm text-gray-400 font-mono">
          {currentQuestion + 1}/{quizQuestions.length}
        </span>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-gray-200 rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5]"
          animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <h3 className="text-xl font-bold mb-6">{question.question}</h3>

          <div className="space-y-3">
            {question.options.map((option, i) => {
              let classes = 'border-gray-200 hover:border-[#8B2C5A]/30';
              if (showExplanation) {
                if (i === question.correct) {
                  classes = 'border-green-500 bg-green-50';
                } else if (i === selectedAnswer && i !== question.correct) {
                  classes = 'border-red-500 bg-red-50';
                } else {
                  classes = 'border-gray-200 opacity-50';
                }
              } else if (selectedAnswer === i) {
                classes = 'border-[#8B2C5A] bg-[#8B2C5A]/5';
              }

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={showExplanation}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${classes}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-gray-700">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100"
            >
              <p className="text-sm text-blue-800">
                <span className="font-bold">Explication : </span>
                {question.explanation}
              </p>
            </motion.div>
          )}

          {showExplanation && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 flex justify-end">
              <AquaVentButton variant="primary" size="md" onClick={handleNext}>
                {currentQuestion < quizQuestions.length - 1 ? 'Question suivante →' : 'Voir les résultats'}
              </AquaVentButton>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
