import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ProductVersion } from '../../types/product';

interface Device3DViewerProps {
  version: ProductVersion;
  onConfigure?: () => void;
}

export default function Device3DViewer({ version, onConfigure }: Device3DViewerProps) {
  const [rotation, setRotation] = useState(0);
  const [isExploded, setIsExploded] = useState(false);

  const colors = {
    wellness: { body: '#8B2C5A', accent: '#FFB300', label: 'Wellness Edition' },
    medical: { body: '#1E88E5', accent: '#43A047', label: 'Medical Edition' },
  };

  const current = colors[version];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* 3D Device Representation */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{ rotateY: rotation }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ perspective: 1000 }}
      >
        {/* Device Body */}
        <motion.div
          className="relative"
          animate={{
            scale: isExploded ? 0.8 : 1,
          }}
        >
          {/* Main body */}
          <motion.div
            className="w-20 h-56 rounded-[2rem] shadow-2xl relative overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${current.body}, ${current.body}dd)`,
              boxShadow: `0 20px 60px ${current.body}40`,
            }}
          >
            {/* Mouthpiece */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-8 rounded-b-xl"
              style={{ background: `${current.body}ee` }}
              animate={{ y: isExploded ? -20 : 0 }}
            />

            {/* LED indicator */}
            <motion.div
              className="absolute top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
              style={{ background: current.accent }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* PhytoTech logo area */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center">
              <span className="text-white/80 text-[8px] font-bold tracking-[0.2em]">
                PHYTOTECH
              </span>
            </div>

            {/* Cartridge window */}
            <motion.div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 w-8 h-12 rounded-lg border-2 border-white/20"
              animate={{ y: isExploded ? 30 : 0 }}
            >
              <div
                className="w-full h-full rounded-md opacity-60"
                style={{
                  background: `linear-gradient(180deg, ${current.accent}80, ${current.accent}20)`,
                }}
              />
            </motion.div>

            {/* Airflow vents */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-1 h-4 bg-white/20 rounded-full" />
              ))}
            </div>
          </motion.div>

          {/* Shadow */}
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full blur-xl"
            style={{ background: `${current.body}30` }}
          />
        </motion.div>
      </motion.div>

      {/* Version label */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span
          className="text-xs font-mono font-semibold tracking-wider px-3 py-1 rounded-full"
          style={{ color: current.body, background: `${current.body}15` }}
        >
          {current.label}
        </span>
      </motion.div>

      {/* Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => setRotation((r) => r + 90)}
          className="w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center text-xs hover:bg-white transition-colors"
          title="Rotation"
        >
          ↻
        </button>
        <button
          onClick={() => setIsExploded(!isExploded)}
          className="w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center text-xs hover:bg-white transition-colors"
          title="Vue éclatée"
        >
          ⊕
        </button>
        {onConfigure && (
          <button
            onClick={onConfigure}
            className="w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center text-xs hover:bg-white transition-colors"
            title="Configurer"
          >
            ⚙
          </button>
        )}
      </div>
    </div>
  );
}
