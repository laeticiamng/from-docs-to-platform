import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const milestones = [
  { year: "2025", title: "Création d'EmotionsCare SASU", desc: "Immatriculation le 6 mai 2025 à Amiens. Laeticia Motongane fonde la société avec une vision claire : utiliser le vivant pour résoudre les problèmes que la tech classique ignore." },
  { year: "2025", title: "R&D PhytoTech & AquaMR", desc: "Exploration des PMFC, photobioréacteurs, batteries quinone. Développement du cockpit vasculaire vert AquaMR Flow — agent de contraste IRM à base de betterave." },
  { year: "2026", title: "Lancement PhytoTech Home", desc: "Mise en marché de la gamme complète : Pot Vivant, Module Maison, Autonomie Village. Cartographie de 11 technologies et 60+ applications. Premiers déploiements pilotes." },
];

const values = [
  { icon: "🔬", title: "Rigueur scientifique", desc: "Chaque affirmation repose sur des données publiées. On dit ce qui marche, ce qui ne marche pas encore, et ce qu'on explore." },
  { icon: "🌱", title: "Partir du vivant", desc: "Pas de minerais, pas de terres rares, pas de dépendance géopolitique. Nos matières premières se cultivent, se compostent, se renouvellent." },
  { icon: "🤝", title: "Transparence radicale", desc: "Un pot de menthe ne fait pas tourner un appartement — et on le dit clairement. La confiance se construit sur l'honnêteté, pas sur le marketing." },
  { icon: "🌍", title: "Adapter, pas imposer", desc: "Chaque territoire a ses plantes, ses contraintes, ses besoins. On ne parachute pas un modèle unique — on connecte ce qui existe déjà." },
  { icon: "♻️", title: "Cycle fermé", desc: "Tout ce qu'on fabrique retourne à la terre en fin de vie. Zéro déchet toxique, zéro obsolescence programmée." },
  { icon: "⚡", title: "Autonomie progressive", desc: "Du premier pot qui allume une LED au système complet qui vous libère du réseau. Chaque module fonctionne seul et prépare le suivant." },
];

const team = [
  { emoji: "👩‍💼", role: "Présidente & Fondatrice", name: "Laeticia Motongane", desc: "Vision stratégique, direction générale et pilotage de l'écosystème PhytoTech. À l'origine du projet EmotionsCare." },
  { emoji: "🧬", role: "R&D & Sciences", name: "Direction scientifique", desc: "Conception des technologies bio-intégrées, brevets, partenariats recherche avec les universités." },
  { emoji: "🏭", role: "Bio-manufacture", name: "Production & Ingénierie", desc: "Cultiver les algues, mouler le PHA, assembler les kits. Fabrication locale et régionale." },
  { emoji: "🌍", role: "Déploiement terrain", name: "Impact & Partenariats", desc: "Coordination des déploiements en Afrique, formation des communautés, suivi des territoires pilotes." },
];

const APropos = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-foreground text-background py-24">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-3xl">
          <Badge variant="secondary" className="font-mono text-xs tracking-wider">
            À PROPOS
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
            Soleil + Eau + Plantes<br />
            <span className="text-primary italic">= Autonomie</span>
          </h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            EmotionsCare est née d'une conviction simple : les trois ressources les plus universellement disponibles sur Terre — le soleil, l'eau et les plantes — suffisent à couvrir les besoins fondamentaux de l'humanité.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-3">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">Notre histoire</p>
            <h2 className="text-3xl md:text-4xl text-foreground">D'une idée à un écosystème</h2>
          </div>

          <div className="relative">
            <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                    <Card>
                      <CardContent className="p-6 space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{m.title}</h3>
                        <p className="text-sm text-muted-foreground">{m.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-mono text-xs font-bold">
                      {m.year}
                    </div>
                  </div>
                  <div className={`flex-1 md:hidden`}>
                    <Card>
                      <CardContent className="p-5 space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{m.title}</h3>
                        <p className="text-sm text-muted-foreground">{m.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Valeurs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 space-y-3">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">Nos convictions</p>
            <h2 className="text-3xl md:text-4xl text-foreground">Ce en quoi on croit</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-3">
                  <div className="text-3xl">{v.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-3">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">L'équipe</p>
            <h2 className="text-3xl md:text-4xl text-foreground">Les piliers d'EmotionsCare</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Une équipe pluridisciplinaire qui réunit biologie, ingénierie, design et terrain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((t) => (
              <Card key={t.role} className="hover:shadow-lg transition-all">
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="text-4xl flex-shrink-0">{t.emoji}</div>
                  <div className="space-y-1">
                    <Badge variant="secondary" className="font-mono text-[10px] tracking-wider">{t.role}</Badge>
                    <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* La vision */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <p className="font-mono text-sm text-primary tracking-widest uppercase">La vision</p>
          <h2 className="text-3xl md:text-5xl leading-tight">
            On ne vous promet pas de quitter EDF demain avec un pot de menthe.
          </h2>
          <p className="text-lg opacity-70">
            On vous promet un chemin progressif — du premier pot qui allume une LED, jusqu'au système complet qui vous libère. Chaque module fonctionne seul et prépare le suivant.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { n: "11", l: "Technologies" },
              { n: "60+", l: "Applications identifiées" },
              { n: "1=1", l: "Vendu = Offert" },
            ].map((s) => (
              <div key={s.l} className="space-y-1">
                <p className="text-3xl font-bold text-primary font-mono">{s.n}</p>
                <p className="text-xs opacity-60">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos légales */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center space-y-6">
          <h2 className="text-2xl text-foreground">EmotionsCare SASU</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              { l: "Forme juridique", v: "SASU" },
              { l: "SIREN", v: "944 505 445" },
              { l: "Siège social", v: "5 rue Caudron, 80000 Amiens" },
              { l: "Présidente", v: "Laeticia Motongane" },
              { l: "Date de création", v: "6 mai 2025" },
              { l: "Activité", v: "Édition / Biotechnologie verte" },
            ].map((info) => (
              <div key={info.l} className="text-left p-3 rounded-lg bg-secondary/50">
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{info.l}</p>
                <p className="text-sm font-medium text-foreground mt-1">{info.v}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center pt-4">
            <Button className="rounded-full">
              Nous contacter →
            </Button>
            <Button variant="outline" className="rounded-full">
              Devenir partenaire
            </Button>
          </div>
        </div>
      </section>
      <CommentSection pageSlug="a-propos" />
    </main>
    <Footer />
  </div>
);

export default APropos;
