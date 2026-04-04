import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ResearchPaper } from '../../types/research';
import papers from '../../data/research-papers.json';
import { useAnalytics, AquaVentEvents } from '../../hooks/useAnalytics';

const focusFilters = [
  { key: 'all', label: 'Toutes', color: '#424242' },
  { key: 'spirulina', label: 'Spiruline', color: '#1E88E5' },
  { key: 'anthocyanes', label: 'Anthocyanes', color: '#8B2C5A' },
  { key: 'eucalyptus', label: 'Eucalyptus', color: '#43A047' },
  { key: 'propolis', label: 'Propolis', color: '#FFB300' },
  { key: 'cessation', label: 'Sevrage', color: '#E53935' },
  { key: 'general', label: 'Général', color: '#757575' },
];

export default function ResearchLibrary() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null);
  const { trackEvent } = useAnalytics();

  const filteredPapers = useMemo(() => {
    return (papers as ResearchPaper[]).filter((p) => {
      const matchesFilter = filter === 'all' || p.componentFocus === filter;
      const matchesSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-4">Bibliothèque scientifique</h3>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
          Recherches validées par des pairs soutenant la technologie PhytoTech™
        </p>

        {/* Search & Filters */}
        <div className="max-w-3xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Rechercher par titre, sujet ou mot-clé..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-[#8B2C5A] focus:ring-2 focus:ring-[#8B2C5A]/20 outline-none transition-all"
          />
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
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full text-white"
                          style={{
                            background:
                              focusFilters.find((f) => f.key === paper.componentFocus)?.color || '#757575',
                          }}
                        >
                          {paper.componentFocus}
                        </span>
                        <span className="text-xs text-gray-400">
                          {paper.journal} · {paper.year}
                        </span>
                      </div>
                      <h4 className="font-semibold text-lg mb-1">{paper.title}</h4>
                      <p className="text-sm text-gray-500">{paper.authors.join(', ')}</p>
                    </div>
                    <div className="flex items-center gap-0.5 shrink-0">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < paper.validationLevel ? 'text-yellow-400' : 'text-gray-200'}`}
                        >
                          ★
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
                        <h5 className="font-medium text-sm text-gray-700 mb-2">Résumé</h5>
                        <p className="text-sm text-gray-600 mb-4">{paper.abstract}</p>

                        <h5 className="font-medium text-sm text-gray-700 mb-2">Résultats clés</h5>
                        <ul className="space-y-1 mb-4">
                          {paper.keyFindings.map((finding, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-green-500 mt-0.5">✓</span>
                              {finding}
                            </li>
                          ))}
                        </ul>

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
              Aucune publication trouvée pour cette recherche.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
