import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { ProductVersion } from '../../types/product';

interface Device3DViewerProps {
  version: ProductVersion;
  onConfigure?: () => void;
}

const Device3DViewer = forwardRef<HTMLDivElement, Device3DViewerProps>(({ version, onConfigure }, _ref) => {
  const [rotation, setRotation] = useState(0);
  const [isExploded, setIsExploded] = useState(false);

  const colors = {
    wellness: { body: '#8B2C5A', accent: '#FFB300', label: 'Bien-être' },
    medical: { body: '#1E88E5', accent: '#43A047', label: 'Accompagnement' },
    unlimited: { body: '#000000', accent: '#FFB300', label: 'AquaVent' },
  };

  const current = colors[version];
  const isUnlimited = version === 'unlimited';

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
          animate={{ scale: isExploded ? 0.8 : 1 }}
        >
          {/* Main body */}
          <motion.div
            className="w-20 h-56 rounded-[2rem] shadow-2xl relative overflow-hidden"
            style={{
              background: isUnlimited
                ? 'linear-gradient(180deg, #000000, #1a1a2e)'
                : `linear-gradient(180deg, ${current.body}, ${current.body}dd)`,
              boxShadow: isUnlimited
                ? '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,179,0,0.2)'
                : `0 20px 60px ${current.body}40`,
            }}
          >
            {/* Gold trim for UNLIMITED */}
            {isUnlimited && (
              <div className="absolute inset-0 rounded-[2rem] border border-aquevent-accent/30" />
            )}

            {/* Mouthpiece */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-8 rounded-b-xl"
              style={{
                background: isUnlimited ? '#1a1a2e' : `${current.body}ee`,
              }}
              animate={{ y: isExploded ? -20 : 0 }}
            />

            {/* LED indicator */}
            <motion.div
              className="absolute top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
              style={{ background: current.accent }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Logo area */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center">
              <span className="text-white/80 text-[8px] font-bold tracking-[0.2em]">
                PHYTOTECH
              </span>
            </div>

            {/* Cartridge window */}
            <motion.div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 w-8 h-12 rounded-lg border-2"
              style={{
                borderColor: isUnlimited ? 'rgba(255,179,0,0.3)' : 'rgba(255,255,255,0.2)',
              }}
              animate={{ y: isExploded ? 30 : 0 }}
            >
              <div
                className="w-full h-full rounded-md opacity-60"
                style={{
                  background: isUnlimited
                    ? 'linear-gradient(180deg, #FFB30080, #8B2C5A40)'
                    : `linear-gradient(180deg, ${current.accent}80, ${current.accent}20)`,
                }}
              />
            </motion.div>

            {/* Airflow vents */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1 h-4 rounded-full"
                  style={{
                    background: isUnlimited ? 'rgba(255,179,0,0.3)' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Shadow */}
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full blur-xl"
            style={{ background: isUnlimited ? 'rgba(255,179,0,0.2)' : `${current.body}30` }}
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
          style={{
            color: isUnlimited ? '#FFB300' : current.body,
            background: isUnlimited ? 'rgba(255,179,0,0.1)' : `${current.body}15`,
          }}
        >
          {current.label}
        </span>
        {isUnlimited && (
          <p className="text-[10px] text-gray-400 mt-1">199\u20AC - Premium Device</p>
        )}
      </motion.div>

      {/* Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => setRotation((r) => r + 90)}
          className="w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center text-xs hover:bg-white transition-colors"
          title="Rotation"
        >
          &#8635;
        </button>
        <button
          onClick={() => setIsExploded(!isExploded)}
          className="w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center text-xs hover:bg-white transition-colors"
          title="Vue eclatee"
        >
          &#8853;
        </button>
        {onConfigure && (
          <button
            onClick={onConfigure}
            className="w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center text-xs hover:bg-white transition-colors"
            title="Configurer"
          >
            &#9881;
          </button>
        )}
      </div>
    </div>
  );
});

Device3DViewer.displayName = "Device3DViewer";

export default Device3DViewer;
