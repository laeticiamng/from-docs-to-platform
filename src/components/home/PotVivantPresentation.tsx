import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import potVivantHero from "@/assets/pot-vivant-hero.jpg";

/**
 * Présentation scrollytelling fullscreen du Pot Vivant.
 * Tient lieu de "vidéo" : 100 % code, parallaxe pilotée par useScroll.
 * 4 chapitres révélés au scroll : Sculpture · Substrat · Électrodes · Lumière.
 */
const chapters = [
  {
    eyebrow: "Chapitre 01",
    title: "Une sculpture vivante.",
    body: "Pas un gadget. Une céramique tournée à la main, pensée pour vivre dix ans dans un salon.",
  },
  {
    eyebrow: "Chapitre 02",
    title: "Le substrat respire.",
    body: "Sous la fougère, un sol nourricier où des micro-organismes libèrent des électrons en digérant la matière organique.",
  },
  {
    eyebrow: "Chapitre 03",
    title: "Deux électrodes, zéro pile.",
    body: "Cuivre et carbone. Captent le courant biologique, en silence, en continu, depuis la racine.",
  },
  {
    eyebrow: "Chapitre 04",
    title: "La lumière, sans le réseau.",
    body: "Une micro-LED s'allume au crépuscule. Pas branchée. Juste connectée à la plante.",
  },
];

type ChapterData = (typeof chapters)[number];

const Chapter = ({
  chapter,
  index,
  total,
  progress,
  reduce,
}: {
  chapter: ChapterData;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.05), start + 0.05, end - 0.05, Math.min(1, end + 0.05)],
    reduce ? [1, 1, 1, 1] : [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, end], reduce ? ["0%", "0%"] : ["10%", "-10%"]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center space-y-5"
      style={reduce ? undefined : { opacity, y }}
    >
      <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
        {chapter.eyebrow}
      </span>
      <h2 className="text-4xl md:text-6xl leading-[1.05] font-serif">{chapter.title}</h2>
      <p className="text-lg md:text-xl opacity-70 max-w-md">{chapter.body}</p>
    </motion.div>
  );
};
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Parallax doux sur le pot
  const potScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.92]);
  const potRotate = useTransform(scrollYProgress, [0, 1], [-2, 4]);
  const potY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.65, 0.4]);

  return (
    <section
      ref={ref}
      className="relative bg-foreground text-background"
      style={{ height: reduce ? "auto" : "400vh" }}
      aria-label="Présentation du Pot Vivant"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Halo lumineux animé */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent blur-3xl"
          style={reduce ? undefined : { opacity: glow }}
        />

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne visuelle — pot sculptural */}
          <motion.div
            className="relative aspect-square max-w-md mx-auto w-full"
            style={reduce ? undefined : { scale: potScale, rotate: potRotate, y: potY }}
          >
            <div className="absolute -inset-12 bg-gradient-to-tr from-primary/40 via-accent/20 to-transparent rounded-full blur-3xl" />
            <img
              src={potVivantHero}
              alt="Le Pot Vivant — sculpture céramique avec fougère et électrodes cuivre"
              className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl"
              loading="lazy"
            />
            {/* Annotations sculpturales */}
            <motion.div
              className="absolute top-1/4 -left-8 hidden md:flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-10 h-px bg-accent" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Cuivre</span>
            </motion.div>
            <motion.div
              className="absolute bottom-1/3 -right-8 hidden md:flex items-center gap-2"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">Carbone</span>
              <div className="w-10 h-px bg-accent" />
            </motion.div>
          </motion.div>

          {/* Colonne texte — chapitres défilants */}
          <div className="relative h-[60vh] flex items-center">
            {chapters.map((c, i) => (
              <Chapter
                key={i}
                chapter={c}
                index={i}
                total={chapters.length}
                progress={scrollYProgress}
                reduce={!!reduce}
              />
            ))}
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase opacity-50">
          <div className="w-px h-8 bg-background animate-pulse" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default PotVivantPresentation;
