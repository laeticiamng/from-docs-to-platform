import { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

/**
 * Reveal au scroll (fade + slide y).
 * Respecte prefers-reduced-motion : rendu instantané sans transform.
 */
const Reveal = ({ children, className, delay = 0, y = 24, once = true }: RevealProps) => {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
