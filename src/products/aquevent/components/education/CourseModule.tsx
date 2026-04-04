import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AquaVentButton from '../ui/AquaVentButton';
import { useAnalytics, AquaVentEvents } from '../../hooks/useAnalytics';

interface Lesson {
  title: string;
  duration: string;
  content: string;
  keyPoints: string[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  lessons: Lesson[];
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  color: string;
}

const courses: Course[] = [
  {
    id: 'phytotech-101',
    title: 'PhytoTech™ Deep Dive',
    description: 'Comprendre la technologie révolutionnaire derrière AquaVent',
    icon: '🔬',
    duration: '25 min',
    level: 'Débutant',
    color: '#8B2C5A',
    lessons: [
      {
        title: "Qu'est-ce que la technologie PhytoTech™ ?",
        duration: '5 min',
        content: "PhytoTech™ est une technologie brevetée de micro-encapsulation et de délivrance pulmonaire de composés naturels. Elle permet d'inhaler des principes actifs végétaux avec une biodisponibilité optimale, sans combustion ni produits chimiques.",
        keyPoints: [
          'Micro-encapsulation brevetée',
          'Zéro combustion',
          'Biodisponibilité 280% supérieure à la voie orale',
          '100% ingrédients naturels',
        ],
      },
      {
        title: 'Le processus de micro-encapsulation',
        duration: '8 min',
        content: "Les principes actifs sont encapsulés dans des micro-particules de 2 à 5 μm, taille optimale pour le dépôt alvéolaire. Ce processus préserve l'intégrité moléculaire et maximise l'absorption pulmonaire.",
        keyPoints: [
          'Taille optimale 2-5 μm',
          'Stabilité thermique 24 mois',
          'Intégrité moléculaire préservée',
          'Dépôt alvéolaire ciblé',
        ],
      },
      {
        title: 'Sécurité et validation',
        duration: '7 min',
        content: 'Chaque formulation PhytoTech™ passe par un processus de validation rigoureux incluant des tests toxicologiques, des essais cliniques et une revue par des pairs. Le profil de sécurité est excellent avec zéro toxicité pulmonaire aux doses recommandées.',
        keyPoints: [
          '0% toxicité pulmonaire',
          '0% potentiel addictif',
          '47 études de sécurité analysées',
          'Compatible avec traitements existants',
        ],
      },
      {
        title: 'Applications et bénéfices',
        duration: '5 min',
        content: "La technologie PhytoTech™ ouvre de nouvelles possibilités thérapeutiques : sevrage tabagique naturel, amélioration de la capacité respiratoire, réduction du stress, et protection contre la pollution urbaine.",
        keyPoints: [
          'Sevrage tabagique 67% de réussite',
          '+32% capacité respiratoire',
          '-47% inflammation pulmonaire',
          'Protection anti-pollution',
        ],
      },
    ],
  },
  {
    id: 'spirulina-power',
    title: 'Spiruline : Superfood pour vos poumons',
    description: 'Découvrez les propriétés extraordinaires de la spiruline en inhalation',
    icon: '🌀',
    duration: '20 min',
    level: 'Intermédiaire',
    color: '#1E88E5',
    lessons: [
      {
        title: "La spiruline : une micro-algue millénaire",
        duration: '5 min',
        content: "Utilisée depuis des millénaires par les Aztèques, la spiruline (Arthrospira platensis) est une cyanobactérie riche en phycocyanine, un pigment bleu aux propriétés anti-inflammatoires et antioxydantes exceptionnelles.",
        keyPoints: [
          'Riche en phycocyanine',
          'Utilisée depuis 3000+ ans',
          '65% de protéines complètes',
          'Cultivable durablement',
        ],
      },
      {
        title: 'Propriétés anti-inflammatoires respiratoires',
        duration: '8 min',
        content: "Des études cliniques ont démontré que la phycocyanine de spiruline réduit de 47% les marqueurs inflammatoires pulmonaires. Par voie inhalée, l'efficacité est amplifiée grâce à la délivrance directe aux tissus cibles.",
        keyPoints: [
          '-47% marqueurs inflammatoires',
          'Action directe sur les poumons',
          'Efficacité supérieure vs oral',
          'Résultats dès 2 semaines',
        ],
      },
      {
        title: 'Synergie avec la formule PhytoTech',
        duration: '7 min',
        content: "Dans la formule AquaVent, la spiruline agit en synergie avec les anthocyanes et l'eucalyptus. Cette combinaison unique amplifie les bénéfices individuels de chaque composant.",
        keyPoints: [
          'Effet synergique documenté',
          'Amplification mutuelle des bénéfices',
          'Formulation brevetée',
          'Concentration optimisée',
        ],
      },
    ],
  },
  {
    id: 'cessation-psychology',
    title: 'Psychologie du sevrage réussi',
    description: 'Comprendre les mécanismes psychologiques pour arrêter de fumer définitivement',
    icon: '🧠',
    duration: '30 min',
    level: 'Avancé',
    color: '#43A047',
    lessons: [
      {
        title: "Le cycle de l'addiction à la nicotine",
        duration: '10 min',
        content: "Comprendre le mécanisme de récompense dopaminergique est la première étape. La nicotine crée un cycle de manque-satisfaction en 30 minutes qui renforce la dépendance. AquaVent brise ce cycle en offrant le geste rituel sans la dépendance chimique.",
        keyPoints: [
          'Cycle dopaminergique de 30 min',
          'Dépendance physique + psychologique',
          "L'importance du geste rituel",
          'Remplacement naturel du circuit de récompense',
        ],
      },
      {
        title: 'Stratégies cognitivo-comportementales',
        duration: '10 min',
        content: "Les techniques de TCC (Thérapie Cognitivo-Comportementale) combinées à l'utilisation d'AquaVent augmentent le taux de sevrage de 67%. Identification des déclencheurs, restructuration cognitive et techniques de relaxation.",
        keyPoints: [
          'Identifier vos déclencheurs',
          'Restructuration cognitive',
          'Techniques de gestion du craving',
          'Plan de prévention de rechute',
        ],
      },
      {
        title: 'Le programme de sevrage AquaVent 90 jours',
        duration: '10 min',
        content: "Un programme structuré en 3 phases : Phase 1 (J1-J30) remplacement actif, Phase 2 (J31-J60) réduction progressive, Phase 3 (J61-J90) maintien et autonomie. Chaque phase est accompagnée de formulations PhytoTech adaptées.",
        keyPoints: [
          'Phase 1 : Remplacement actif',
          'Phase 2 : Réduction progressive',
          'Phase 3 : Autonomie complète',
          '82% réduction envies dès semaine 2',
        ],
      },
    ],
  },
];

const levelColors = {
  'Débutant': 'bg-green-100 text-green-700',
  'Intermédiaire': 'bg-blue-100 text-blue-700',
  'Avancé': 'bg-purple-100 text-purple-700',
};

export default function CourseModule() {
  const [activeCourse, setActiveCourse] = useState<string | null>(null);
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const { trackEvent } = useAnalytics();

  const handleStartCourse = (courseId: string) => {
    setActiveCourse(courseId);
    setActiveLesson(0);
    trackEvent(AquaVentEvents.COURSE_START, { course_id: courseId });
  };

  const handleCompleteLesson = (courseId: string, lessonIndex: number) => {
    const key = `${courseId}-${lessonIndex}`;
    setCompletedLessons((prev) => new Set(prev).add(key));

    const course = courses.find((c) => c.id === courseId);
    if (course && lessonIndex < course.lessons.length - 1) {
      setActiveLesson(lessonIndex + 1);
    }
  };

  const course = courses.find((c) => c.id === activeCourse);

  if (course) {
    const lesson = course.lessons[activeLesson];
    const progress = (completedLessons.size / course.lessons.length) * 100;

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
        {/* Header */}
        <button
          onClick={() => setActiveCourse(null)}
          className="text-sm text-gray-400 hover:text-gray-600 mb-4 transition-colors"
        >
          ← Retour aux cours
        </button>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{course.icon}</span>
          <div>
            <h3 className="text-xl font-bold">{course.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, background: course.color }}
                />
              </div>
              <span className="text-xs text-gray-400">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {course.lessons.map((l, i) => {
            const isCompleted = completedLessons.has(`${course.id}-${i}`);
            return (
              <button
                key={i}
                onClick={() => setActiveLesson(i)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                  activeLesson === i
                    ? 'text-white shadow-md'
                    : isCompleted
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                style={activeLesson === i ? { background: course.color } : undefined}
              >
                {isCompleted ? '✓ ' : ''}{l.title.substring(0, 25)}...
              </button>
            );
          })}
        </div>

        {/* Lesson Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLesson}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-bold">{lesson.title}</h4>
              <span className="text-xs text-gray-400 font-mono">{lesson.duration}</span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">{lesson.content}</p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h5 className="font-bold text-sm text-gray-700 mb-3">Points clés</h5>
              <div className="grid sm:grid-cols-2 gap-2">
                {lesson.keyPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: course.color }}>●</span>
                    <span className="text-sm text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              {activeLesson > 0 && (
                <button
                  onClick={() => setActiveLesson(activeLesson - 1)}
                  className="text-sm text-gray-400 hover:text-gray-600"
                >
                  ← Précédent
                </button>
              )}
              <div className="ml-auto">
                <AquaVentButton
                  variant="primary"
                  size="md"
                  onClick={() => handleCompleteLesson(course.id, activeLesson)}
                >
                  {activeLesson < course.lessons.length - 1 ? 'Leçon suivante →' : 'Terminer le cours ✓'}
                </AquaVentButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  }

  // Course List
  return (
    <div>
      <h3 className="text-3xl font-bold text-center mb-4">PhytoTech Academy</h3>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Apprenez tout sur la science, la technologie et la psychologie derrière AquaVent
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {courses.map((c, i) => {
          const completedCount = c.lessons.filter((_, li) =>
            completedLessons.has(`${c.id}-${li}`)
          ).length;

          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-2" style={{ background: c.color }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{c.icon}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${levelColors[c.level]}`}>
                    {c.level}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-2">{c.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{c.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>{c.duration}</span>
                  <span>{c.lessons.length} leçons</span>
                  {completedCount > 0 && (
                    <span className="text-green-600 font-medium">
                      {completedCount}/{c.lessons.length} terminées
                    </span>
                  )}
                </div>
                <AquaVentButton
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  onClick={() => handleStartCourse(c.id)}
                >
                  {completedCount > 0 ? 'Continuer' : 'Commencer'}
                </AquaVentButton>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
