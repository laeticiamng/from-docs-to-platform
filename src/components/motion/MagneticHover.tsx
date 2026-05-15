import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface MagneticHoverProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "span";
}

/**
 * Effet hover magnétique : le contenu suit légèrement la souris.
 * Auto-désactivé si prefers-reduced-motion ou device tactile (pointer:coarse).
 */
const MagneticHover = ({ children, className, strength = 0.3, as = "div" }: MagneticHoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = as === "span" ? motion.span : motion.div;
  return (
    <Comp
      ref={ref as React.RefObject<HTMLDivElement & HTMLSpanElement>}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduce ? undefined : { x: sx, y: sy }}
      className={className}
    >
      {children}
    </Comp>
  );
};

export default MagneticHover;
