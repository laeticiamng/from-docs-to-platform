import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ResearchPaper } from '../../types/research';
import papers from '../../data/research-papers.json';
import { useAnalytics, AquaVentEvents } from '../../hooks/useAnalytics';

const focusFilters = [
  { key: 'all', label: 'Tous', color: '#424242' },
  { key: 'spirulina', label: 'Spirulina', color: '#1E88E5' },
  { key: 'anthocyanes', label: 'Anthocyanes', color: '#8B2C5A' },
  { key: 'phycocyanine', label: 'Phycocyanine', color: '#7B1FA2' },
  { key: 'general', label: 'Formulation', color: '#43A047' },
  { key: 'cessation', label: 'Sevrage', color: '#E53935' },
];

const typeFilters = [
  { key: 'all', label: 'Tous types' },
  { key: 'safety', label: 'Securite' },
  { key: 'efficacy', label: 'Efficacite' },
  { key: 'toxicology', label: 'Toxicologie' },
];

export default function ResearchLibrary() {
  const [filter, setFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null);
  const { trackEvent } = useAnalytics();

  const filteredPapers = useMemo(() => {
    return (papers as ResearchPaper[]).filter((p) => {
      const matchesFilter = filter === 'all' || p.componentFocus === filter;
      const matchesType = typeFilter === 'all' || p.studyType === typeFilter;
      const matchesSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesType && matchesSearch;
    });
  }, [filter, typeFilter, searchQuery]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-4">Bibliotheque Scientifique: Validation Absolue</h3>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
          Chaque composant AquaVent valide par etudes inhalation humaine.
          Recherches publiees et validees par des pairs.
        </p>

        {/* Search & Filters */}
        <div className="max-w-3xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Rechercher par titre, sujet ou mot-cle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-[#8B2C5A] focus:ring-2 focus:ring-[#8B2C5A]/20 outline-none transition-all"
          />

          {/* Component Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {focusFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filter === f.key
                    ? 'text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                style={filter === f.key ? { background: f.color } : undefined}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Study Type Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {typeFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setTypeFilter(f.key)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  typeFilter === f.key
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Papers List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredPapers.map((paper) => (
              <motion.article
                key={paper.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => {
                    setExpandedPaper(expandedPaper === paper.id ? null : paper.id);
                    trackEvent(AquaVentEvents.RESEARCH_PAPER_VIEW, {
                      paper_id: paper.id,
                      component: paper.componentFocus,
                    });
                  }}
                  className="w-full text-left p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full text-white"
                          style={{
                            background:
                              focusFilters.find((f) => f.key === paper.componentFocus)?.color || '#757575',
                          }}
                        >
                          {paper.componentFocus}
                        </span>
                        {paper.studyType && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            {paper.studyType}
                          </span>
                        )}
                        <span className="text-xs text-gray-400">
                          {paper.journal} · {paper.year}
                        </span>
                      </div>
                      <h4 className="font-semibold text-lg mb-1">{paper.title}</h4>
                      <p className="text-sm text-gray-500">{paper.authors.join(', ')}</p>
                      {paper.duration && (
                        <div className="flex gap-4 mt-2 text-xs text-gray-400">
                          {paper.duration && <span>Duree: {paper.duration}</span>}
                          {paper.participants && <span>Participants: {paper.participants}</span>}
                          {paper.dosage && <span>Dosage: {paper.dosage}</span>}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-0.5 shrink-0">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < paper.validationLevel ? 'text-yellow-400' : 'text-gray-200'}`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedPaper === paper.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t pt-4">
                        <h5 className="font-medium text-sm text-gray-700 mb-2">Resume</h5>
                        <p className="text-sm text-gray-600 mb-4">{paper.abstract}</p>

                        <h5 className="font-medium text-sm text-gray-700 mb-2">Resultats cles</h5>
                        <ul className="space-y-1 mb-4">
                          {paper.keyFindings.map((finding, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-green-500 mt-0.5">&#10003;</span>
                              {finding}
                            </li>
                          ))}
                        </ul>

                        {paper.relevance && (
                          <div className="bg-blue-50 rounded-lg p-3 mb-4">
                            <p className="text-xs text-blue-700">
                              <span className="font-bold">Pertinence UNLIMITED: </span>
                              {paper.relevance}
                            </p>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1">
                          {paper.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </AnimatePresence>

          {filteredPapers.length === 0 && (
            <p className="text-center text-gray-400 py-12">
              Aucune publication trouvee pour cette recherche.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
