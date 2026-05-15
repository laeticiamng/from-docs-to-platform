import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const materials = [
  {
    name: "Céramique tournée main",
    role: "Le corps",
    desc: "Argile blanche cuite à 1240°C. Inerte, recyclable, vit dix ans dans un salon. Façonnée en France.",
    spec: "SiO₂ + Al₂O₃",
    accent: "#d6c9a3",
  },
  {
    name: "Cuivre pur 99,9%",
    role: "L'anode",
    desc: "Capte les électrons libérés par les bactéries électroactives. Filé à la main, patine vivante.",
    spec: "Cu — 8,96 g/cm³",
    accent: "#b87333",
  },
  {
    name: "Carbone graphité",
    role: "La cathode",
    desc: "Tissu carboné poreux. Reçoit les électrons et ferme le circuit, en silence.",
    spec: "C — surface 1500 m²/g",
    accent: "#3a3a3a",
  },
  {
    name: "Substrat micro-organismes",
    role: "Le moteur",
    desc: "Sol vivant inoculé en Geobacter sulfurreducens et Shewanella oneidensis. Digère la matière, produit du courant.",
    spec: "Geobacter spp.",
    accent: "#5a4a2a",
  },
  {
    name: "Microalgues Chlorella",
    role: "L'air",
    desc: "Capte le CO₂ ambiant, libère de l'O₂. Photosynthèse C3, 25× plus efficace qu'un arbre par m².",
    spec: "Chlorella vulgaris",
    accent: "hsl(142 60% 35%)",
  },
  {
    name: "Quinone végétale",
    role: "Le stockage",
    desc: "Molécule extraite de la rhubarbe. Stocke l'énergie sans lithium, sans terres rares, biodégradable.",
    spec: "C₁₀H₆O₂",
    accent: "hsl(35 70% 45%)",
  },
  {
    name: "PHA bioplastique",
    role: "Le coffret",
    desc: "Polyhydroxyalcanoate produit par fermentation. Compostable en 6 mois, résistant à l'humidité.",
    spec: "PHA — biosourcé 100%",
    accent: "hsl(40 30% 70%)",
  },
];

const MaterialsParchment = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallaxe lente sur la "feuille de parchemin"
  const parchmentY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--secondary)/0.3) 0%, hsl(40 35% 88%) 30%, hsl(40 30% 85%) 70%, hsl(var(--background)) 100%)",
      }}
      aria-label="Matériaux et ingénierie du Pot Vivant"
    >
      {/* Texture parchemin */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply pointer-events-none"
        style={{
          y: parchmentY,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.3 0 0 0 0 0.15 0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Bordures parchemin (haut & bas déchirés) */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-secondary/40 to-transparent" />
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-4 max-w-5xl relative">
        <div className="text-center mb-16 space-y-3">
          <Badge
            variant="outline"
            className="font-mono text-xs tracking-[0.25em] uppercase border-foreground/30 text-foreground/70 bg-background/40 backdrop-blur-sm"
          >
            Carnet de matériaux · Recto
          </Badge>
          <h2 className="text-3xl md:text-5xl text-foreground font-serif">
            Sept matières,<br className="hidden md:block" /> une seule sculpture vivante.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Tout ce qui compose le Pot Vivant est choisi pour vivre, vieillir, puis
            retourner à la terre. Pas un seul polymère pétrosourcé.
          </p>
        </div>

        {/* Grille parchemin — chaque matière est une vignette manuscrite */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {materials.map((m, i) => (
            <motion.article
              key={m.name}
              initial={reduce ? false : { opacity: 0, y: 30, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-background/70 backdrop-blur-sm border border-foreground/10 rounded-sm p-6 md:p-7 shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.25)]
                         hover:shadow-[0_12px_40px_-12px_hsl(var(--foreground)/0.35)] hover:-translate-y-0.5 transition-all duration-300"
              style={{
                boxShadow: `0 1px 0 hsl(var(--background)) inset, 0 8px 30px -12px hsl(var(--foreground)/0.25)`,
              }}
            >
              {/* Numéro + pastille couleur */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  N° {String(i + 1).padStart(2, "0")} · {m.role}
                </span>
                <span
                  aria-hidden
                  className="inline-block w-5 h-5 rounded-full border border-foreground/20 shadow-inner"
                  style={{ backgroundColor: m.accent }}
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">{m.name}</h3>
              <p className="font-mono text-xs text-primary tracking-wider mb-3">{m.spec}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>

              {/* Trait manuscrit sous-titré */}
              <div className="mt-5 flex items-center gap-2">
                <div className="h-px flex-1 bg-foreground/15" />
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-foreground/40">
                  EmotionsCare · Atelier
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Annotation "scellé" */}
        <div className="mt-16 text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-3 border-2 border-dashed border-foreground/20 rounded-full bg-background/40 backdrop-blur-sm"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/60">
              Scellé · Atelier Paris · 2026
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsParchment;
