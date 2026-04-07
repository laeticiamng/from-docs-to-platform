import { useState } from 'react';
import AquaVentLayout from '../components/AquaVentLayout';
import CourseModule from '../components/education/CourseModule';
import InteractiveQuiz from '../components/education/InteractiveQuiz';
import SEOHead from '@/components/SEOHead';

export default function Academy() {
  const [tab, setTab] = useState<'courses' | 'quiz'>('courses');

  return (
    <AquaVentLayout>
      <div className="pt-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
            PhytoTech Academy
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Apprenez, comprenez, maîtrisez. Devenez expert en inhalation naturelle.
        </p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setTab('courses')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                tab === 'courses'
                  ? 'bg-[#8B2C5A] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Cours
            </button>
            <button
              onClick={() => setTab('quiz')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                tab === 'quiz'
                  ? 'bg-[#1E88E5] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Quiz
            </button>
          </div>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          {tab === 'courses' ? <CourseModule /> : <InteractiveQuiz />}
        </div>
      </section>
    </AquaVentLayout>
  );
}
