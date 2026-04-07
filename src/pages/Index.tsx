import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";
import HowToGuide from "@/components/HowToGuide";
import { howToGuides } from "@/data/howToData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Leaf, Sprout, Zap, Droplets, Wind, Radio, Lightbulb, Layers, Battery,
  Recycle, Globe, Home, FlaskConical, Factory, Package, ShoppingCart, School, Building,
  Flower2, Bug,
} from "lucide-react";

const IconBox = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary ${className}`}>
    {children}
  </div>
);

const HeroSection = () => (
  <section className="min-h-[85vh] flex items-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono">
          <Leaf className="w-4 h-4" /> PhytoTech Home par EmotionsCare
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight text-foreground">
          L'énergie qui pousse.<br />
          <span className="text-primary">L'eau qui revient.</span><br />
          La lumière qui vit.
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          Des kits prêts à installer qui utilisent les plantes, les algues et l'eau pour produire votre électricité, purifier votre air et recycler votre eau. Sans réseau. Sans batteries toxiques. Sans abonnement.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button size="lg" className="rounded-full text-base px-8" asChild>
            <Link to="/precommande">Découvrir les kits →</Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-base px-8" asChild>
            <a href="#comment-ca-marche">Comment ça marche</a>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-primary/5 flex items-center justify-center">
            <Sprout className="w-24 h-24 md:w-32 md:h-32 text-primary" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ManifestoSection = () => (
  <section className="bg-foreground text-background py-24">
    <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
      <h2 className="text-3xl md:text-5xl leading-tight">
        Et si votre prochaine source d'énergie n'était pas un panneau sur le toit, mais une plante dans le salon ?
      </h2>
      <p className="text-lg opacity-70">
        La photosynthèse alimente la vie sur Terre depuis 3,5 milliards d'années. On a enfin appris à brancher nos appareils dessus. Trois ingrédients suffisent : du soleil, de l'eau, et du vivant.
      </p>
    </div>
  </section>
);

/* ─── Soyons honnêtes ─── */
const HonestySection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12 space-y-3">
        <Badge variant="outline" className="font-mono text-xs tracking-widest border-destructive text-destructive">
          ⚠️ TRANSPARENCE
        </Badge>
        <h2 className="text-3xl md:text-5xl text-foreground">Soyons honnêtes</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Un pot de fleurs ne peut pas faire tourner un appartement. Et il faut le dire clairement.
        </p>
      </div>

      {/* The hard truth */}
      <Card className="border-destructive/30 bg-destructive/5 mb-8">
        <CardContent className="p-8 space-y-4">
          <h3 className="text-xl font-semibold text-destructive flex items-center gap-2">
            ⚠️ Le problème de puissance
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center my-6">
            <div className="space-y-1">
              <p className="text-3xl font-bold text-foreground font-mono">500–900W</p>
              <p className="text-xs text-muted-foreground">Consommation continue d'un appartement</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-foreground font-mono">23 mW/m²</p>
              <p className="text-xs text-muted-foreground">Production d'un pot PMFC</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-foreground font-mono">21 700 m²</p>
              <p className="text-xs text-muted-foreground">Surface PMFC pour 500W continus</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Pour produire 500W continus avec des PMFC, il faudrait plus de <strong className="text-foreground">deux hectares</strong> de surface plantée. C'est impossible dans un appartement. Un panneau solaire produit ~200W/m² en pic — c'est un facteur ×1 000 de différence.
          </p>
          <p className="text-sm font-semibold text-foreground">
            Quiconque prétendrait alimenter un lave-vaisselle avec un pot de menthe vous mentirait.
          </p>
        </CardContent>
      </Card>

      {/* The real positioning */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="p-8 space-y-4">
          <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
            Maintenant, voici pourquoi ce n'est pas un problème
          </h3>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Le PhytoTech n'est pas une alternative aux panneaux solaires — c'est leur complément naturel.</strong> Vous gardez vos panneaux pour le frigo, la machine à laver, la télé. Et vous ajoutez le PhytoTech pour tout le reste.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {[
              { icon: <Droplets className="w-6 h-6" />, title: "L'eau", desc: "Une douche cyclique économise 54 000 litres/an. Ni EDF ni un panneau solaire ne font ça. Valeur : 150–250€/an." },
              { icon: <Wind className="w-6 h-6" />, title: "L'air", desc: "Un panneau à microalgues absorbe le CO₂ intérieur et rejette de l'O₂. Un panneau solaire ne purifie pas votre air." },
              { icon: <Radio className="w-6 h-6" />, title: "L'IoT ultra-basse conso", desc: "Capteurs domotiques (température, humidité, mouvement) consomment des microwatts. Les PMFC suffisent — plus jamais de piles à changer." },
              { icon: <Lightbulb className="w-6 h-6" />, title: "L'éclairage d'ambiance", desc: "Capsules bioluminescentes et LED ultra-basse conso : veilleuses, balisage, jardin. Les PMFC couvrent ça parfaitement." },
              { icon: <Layers className="w-6 h-6" />, title: "Les matériaux", desc: "Bioplastiques, circuits biodégradables, agents de contraste végétaux — rien à voir avec la puissance électrique." },
              { icon: <Battery className="w-6 h-6" />, title: "Le stockage", desc: "Les batteries quinone stockent l'énergie de vos panneaux solaires existants — mais sans métaux rares. Elles complètent le solaire." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-1 p-3 rounded-lg bg-background/50">
                <div className="flex gap-3">
                  <span className="text-primary flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                {howToGuides[item.title] && (
                  <HowToGuide
                    title={item.title}
                    steps={howToGuides[item.title].steps}
                    materials={howToGuides[item.title].materials}
                    difficulty={howToGuides[item.title].difficulty}
                    cost={howToGuides[item.title].cost}
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Developing countries note */}
      <Card className="mt-8 bg-card border-primary/20">
        <CardContent className="p-8 space-y-3">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" /> Pour les pays en développement, c'est différent
          </h3>
          <p className="text-sm text-muted-foreground">
            Le problème n'est pas l'absence de végétation — c'est l'absence de connexion entre les ressources naturelles existantes et les technologies capables de les valoriser. On n'envoie pas des plantes. <strong className="text-foreground">On connecte celles qui sont déjà là.</strong>
          </p>
          <Link to="/afrique">
            <Button variant="outline" size="sm" className="rounded-full mt-2">
              Découvrir l'approche Afrique & Territoires →
            </Button>
          </Link>
        </CardContent>
      </Card>

      <div className="text-center mt-12">
        <p className="text-sm text-muted-foreground italic max-w-xl mx-auto">
          "On ne remplace pas votre compteur. On complète votre vie."
        </p>
      </div>
    </div>
  </section>
);

/* ─── Compare — updated honest version ─── */
const compareData = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Réseau EDF",
    price: "~1 500€ /an",
    role: "Gros appareils",
    points: [
      { bad: true, text: "Dépendance totale au réseau" },
      { bad: true, text: "Hausse des tarifs chaque année" },
      { bad: true, text: "Coupures possibles" },
      { bad: true, text: "Énergie nucléaire/fossile" },
      { bad: false, text: "Couvre les gros appareils" },
    ],
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>,
    title: "Panneaux solaires",
    price: "12 000€ install.",
    role: "Électricité pure",
    points: [
      { bad: false, text: "200W/m² — haute densité" },
      { bad: true, text: "Silicium + terres rares" },
      { bad: true, text: "Ne fonctionne pas la nuit" },
      { bad: true, text: "Ne purifie pas l'eau ni l'air" },
    ],
  },
  {
    icon: <Leaf className="w-10 h-10" />,
    title: "PhytoTech Home",
    price: "à partir de 49€",
    role: "Complément naturel",
    highlight: true,
    points: [
      { bad: false, text: "Économise 54 000L d'eau/an" },
      { bad: false, text: "Purifie l'air intérieur" },
      { bad: false, text: "IoT + éclairage sans piles" },
      { bad: false, text: "100% biodégradable" },
      { bad: false, text: "Complète solaire + réseau" },
    ],
  },
];

const CompareSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-3">
        <p className="font-mono text-sm text-primary tracking-widest uppercase">Comparez honnêtement</p>
        <h2 className="text-3xl md:text-5xl text-foreground">Pas un remplacement — un complément</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Le PhytoTech ne remplace pas votre compteur. Il couvre tout ce que le réseau fait mal et tout ce que le solaire ne fait pas du tout.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {compareData.map((c) => (
          <Card
            key={c.title}
            className={`relative overflow-hidden transition-all hover:shadow-lg ${
              c.highlight
                ? "border-primary ring-2 ring-primary/20 shadow-xl scale-[1.02]"
                : ""
            }`}
          >
            {c.highlight && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            )}
            <CardContent className="p-6 space-y-4">
              <div className="text-muted-foreground">{c.icon}</div>
              <h3 className="text-xl font-semibold text-foreground">{c.title}</h3>
              <p className="font-mono text-lg text-primary font-semibold">{c.price}</p>
              <Badge variant="secondary" className="text-xs">{c.role}</Badge>
              <ul className="space-y-2">
                {c.points.map((p) => (
                  <li key={p.text} className="flex items-start gap-2 text-sm">
                    <span className={p.bad ? "text-destructive" : "text-primary"}>
                      {p.bad ? "✗" : "✓"}
                    </span>
                    <span className="text-muted-foreground">{p.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const products = [
  {
    level: "NIVEAU 1 — DÉCOUVERTE",
    title: "Le Pot Vivant",
    price: "49 — 199€",
    icon: <Flower2 className="w-10 h-10 text-primary" />,
    desc: "Un pot de fleurs qui produit de l'électricité. Branchez une LED, un capteur de température ou un petit écran e-ink — alimenté par les racines de votre plante.",
    features: [
      "Pot avec électrodes PMFC intégrées",
      "LED bioluminescente ou capteur inclus",
      "App mobile pour suivre la production en temps réel",
      "Choix de 5 plantes optimisées (fougère, papyrus, riz, menthe, graminée)",
      "Fonctionne en intérieur ou extérieur",
    ],
    cta: "Précommander →",
  },
  {
    level: "NIVEAU 2 — HABITAT",
    title: "Le Module Maison",
    price: "690 — 2 490€",
    icon: <Home className="w-10 h-10 text-primary" />,
    desc: "Le pack complet pour un foyer qui veut réduire sa dépendance. Électricité, air, eau — trois systèmes bio-intégrés.",
    features: [
      "Jardinière PMFC multi-pots (capteurs domotiques)",
      "Panneau mural à microalgues (purification air + CO₂)",
      "Kit recirculation douche avec biofiltre algal (5L en boucle)",
      "Batterie quinone végétale pour stockage surplus",
      "Capsules bioluminescentes pour veilleuses",
      "Hub central connecté — monitoring via app",
    ],
    cta: "Configurer mon module →",
  },
  {
    level: "NIVEAU 3 — COMMUNAUTÉ",
    title: "L'Autonomie Village",
    price: "4 900 — 19 000€",
    icon: <Globe className="w-10 h-10 text-primary" />,
    desc: "Un système modulaire pour équiper un village entier. Électricité, eau potable, alimentation protéinée, éclairage — tout fonctionne avec le soleil et l'eau locale.",
    features: [
      "Réseau PMFC en série (éclairage collectif continu)",
      "Photobioréacteur communautaire (purification eau + spiruline)",
      "Feuilles artificielles pour production H₂",
      "Capsules bioluminescentes pour balisage",
      "Formation locale incluse",
      "Tout est cultivable et réparable sur place",
    ],
    cta: "Devenir partenaire déploiement →",
  },
];

const ProductsSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-3">
        <p className="font-mono text-sm text-primary tracking-widest uppercase">La gamme PhytoTech Home</p>
        <h2 className="text-3xl md:text-5xl text-foreground">Trois niveaux d'autonomie</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <Card key={p.title} className="overflow-hidden hover:shadow-xl transition-all group">
            <CardContent className="p-8 space-y-5">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="font-mono text-xs tracking-wider">
                  {p.level}
                </Badge>
                {p.icon}
              </div>
              <h3 className="text-2xl md:text-3xl text-foreground">{p.title}</h3>
              <p className="font-mono text-2xl text-primary font-bold">{p.price}</p>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">●</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-full group-hover:shadow-md transition-shadow" asChild>
                <Link to="/precommande">{p.cta}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pack Autonomie Totale teaser */}
      <Card className="mt-12 border-primary/30 bg-primary/5 max-w-3xl mx-auto overflow-hidden">
        <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
          <Zap className="w-16 h-16 text-primary flex-shrink-0" strokeWidth={1.5} />
          <div className="flex-1 space-y-2">
            <Badge className="font-mono text-xs tracking-wider bg-primary/20 text-primary border-0">
              NIVEAU 4 — AUTONOMIE TOTALE
            </Badge>
            <h3 className="text-2xl text-foreground">Pack Autonomie Totale Paris</h3>
            <p className="font-mono text-xl text-primary font-bold">~9 000€ · ROI en 4,6 ans</p>
            <p className="text-sm text-muted-foreground">
              Peut-on vivre 100% sur le vivant dans un appartement ? Oui — mais pas avec des pots de fleurs seuls. Découvrez la stratégie complète.
            </p>
          </div>
          <Link to="/pack-autonomie">
            <Button className="rounded-full whitespace-nowrap">Voir le détail →</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  </section>
);

const steps = [
  { num: "01", title: "Plantez", desc: "Installez la plante dans le pot.", icon: <Sprout className="w-12 h-12" /> },
  { num: "02", title: "Les bactéries travaillent", desc: "Des bactéries électroactives oxydent les composés et libèrent des électrons captés par les électrodes.", icon: <Bug className="w-12 h-12" /> },
  { num: "03", title: "Le courant circule", desc: "Un flux d'électrons continu alimente vos appareils ultra-basse consommation : LED, capteurs, écrans e-ink.", icon: <Zap className="w-12 h-12" /> },
  { num: "04", title: "Le cycle continue", desc: "La plante pousse, les bactéries se multiplient, l'énergie se renouvelle. Pas de batterie à changer. Jamais.", icon: <Recycle className="w-12 h-12" /> },
];

const HowItWorksSection = () => (
  <section id="comment-ca-marche" className="py-24 bg-foreground text-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-3">
        <p className="font-mono text-sm text-primary tracking-widest uppercase">Simple et naturel</p>
        <h2 className="text-3xl md:text-5xl">Comment ça marche</h2>
      </div>
      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s) => (
          <div key={s.num} className="text-center space-y-4">
            <div className="flex justify-center text-primary mb-2">{s.icon}</div>
            <div className="font-mono text-primary text-sm">{s.num}</div>
            <h3 className="text-xl">{s.title}</h3>
            <p className="text-sm opacity-70">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const impacts = [
  { icon: <Droplets className="w-10 h-10" />, title: "54 000 litres d'eau économisés /an", desc: "La douche cyclique à biofiltre utilise 5L par douche au lieu de 80L." },
  { icon: <Leaf className="w-10 h-10" />, title: "12 kg de CO₂ absorbés /an", desc: "Le panneau mural à microalgues capture le CO₂ et rejette de l'oxygène." },
  { icon: <Zap className="w-10 h-10" />, title: "Zéro batterie toxique", desc: "Batteries quinone à base de molécules végétales, biodégradables. Pas de lithium." },
  { icon: <Recycle className="w-10 h-10" />, title: "100% compostable en fin de vie", desc: "Chaque composant est bio-sourcé. En fin de vie, tout retourne à la terre." },
];

const ImpactSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-3">
        <p className="font-mono text-sm text-primary tracking-widest uppercase">L'impact réel</p>
        <h2 className="text-3xl md:text-5xl text-foreground">Ce qu'un seul Module Maison change concrètement</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
        {impacts.map((i) => (
          <Card key={i.title} className="hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center space-y-3">
              <div className="flex justify-center text-primary">{i.icon}</div>
              <h3 className="text-lg font-semibold text-foreground">{i.title}</h3>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-primary text-primary-foreground max-w-3xl mx-auto overflow-hidden">
        <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 text-center">
            <p className="text-6xl md:text-7xl font-bold font-mono leading-none">1=1</p>
            <p className="text-xs opacity-70 mt-2 font-mono tracking-wider">SYSTÈME = TERRITOIRE</p>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl">Un système déployé = un territoire connecté</h3>
            <p className="opacity-80">
              Chaque kit vendu en Europe finance un déploiement adapté aux ressources locales d'un territoire. On n'envoie pas des plantes — on connecte celles qui sont déjà là.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

const businessFlow = [
  { icon: <FlaskConical className="w-8 h-8" />, title: "R&D EmotionsCare", desc: "Conception, prototypage, brevets" },
  { icon: <Factory className="w-8 h-8" />, title: "Bio-manufacture locale", desc: "Algues cultivées, PHA moulé, assemblage régional" },
  { icon: <Package className="w-8 h-8" />, title: "Vente B2C", desc: "Site web, marketplaces, jardineries" },
  { icon: <Globe className="w-8 h-8" />, title: "Impact 1=1", desc: "1 système déployé = 1 territoire connecté" },
];

const BusinessSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-3">
        <p className="font-mono text-sm text-primary tracking-widest uppercase">Le modèle économique</p>
        <h2 className="text-3xl md:text-5xl text-foreground">De la R&D à l'impact</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Les marges sont possibles parce que la matière première se cultive. Pas de minerais, pas de chaîne d'approvisionnement complexe.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto mb-16">
        {businessFlow.map((b, i) => (
          <div key={b.title} className="flex items-center gap-4">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center space-y-2 min-w-[180px]">
                <div className="flex justify-center text-primary">{b.icon}</div>
                <h3 className="text-sm font-semibold text-foreground">{b.title}</h3>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </CardContent>
            </Card>
            {i < businessFlow.length - 1 && (
              <span className="text-2xl text-primary font-bold hidden md:block">→</span>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl text-center mb-6 text-foreground">Projections de revenus — Année 1</h3>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-mono">Produit</TableHead>
                  <TableHead className="font-mono">Prix moyen</TableHead>
                  <TableHead className="font-mono">Unités</TableHead>
                  <TableHead className="font-mono text-right">CA</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Kit Découverte "Le Pot Vivant"</TableCell>
                  <TableCell>99 €</TableCell>
                  <TableCell>5 000</TableCell>
                  <TableCell className="text-right font-semibold">495 000 €</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Module Maison</TableCell>
                  <TableCell>1 490 €</TableCell>
                  <TableCell>800</TableCell>
                  <TableCell className="text-right font-semibold">1 192 000 €</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Autonomie Village (B2B/ONG)</TableCell>
                  <TableCell>12 000 €</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell className="text-right font-semibold">360 000 €</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Abonnement app + consommables</TableCell>
                  <TableCell>4,99 €/mois</TableCell>
                  <TableCell>3 000</TableCell>
                  <TableCell className="text-right font-semibold">179 640 €</TableCell>
                </TableRow>
                <TableRow className="bg-primary/10 font-bold">
                  <TableCell colSpan={3}>Total Année 1</TableCell>
                  <TableCell className="text-right text-primary text-lg">2 226 640 €</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const channels = [
  { icon: <Leaf className="w-4 h-4" />, label: "Jardineries (Truffaut, Botanic)" },
  { icon: <ShoppingCart className="w-4 h-4" />, label: "E-commerce (site propre)" },
  { icon: <Package className="w-4 h-4" />, label: "Marketplaces (Amazon, Cdiscount)" },
  { icon: <Building className="w-4 h-4" />, label: "B2B Hôtellerie & Collectivités" },
  { icon: <Globe className="w-4 h-4" />, label: "ONG & Programmes humanitaires" },
  { icon: <School className="w-4 h-4" />, label: "Kits pédagogiques pour écoles" },
];

const ChannelsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 text-center space-y-8">
      <h2 className="text-3xl md:text-4xl text-foreground">Canaux de distribution</h2>
      <p className="text-muted-foreground">Le PhytoTech se vend là où les gens achètent déjà du vivant et de la tech verte.</p>
      <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
        {channels.map((c) => (
          <Badge key={c.label} variant="secondary" className="text-sm px-4 py-2 rounded-full inline-flex items-center gap-2">
            {c.icon} {c.label}
          </Badge>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
      <h2 className="text-3xl md:text-5xl">
        L'énergie du futur ne sortira pas d'une mine. Elle poussera dans votre jardin.
      </h2>
      <p className="opacity-80">
        Soleil, eau, plantes. Trois ingrédients. Zéro abonnement. Autonomie totale.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Button size="lg" variant="secondary" className="rounded-full text-base px-8" asChild>
          <Link to="/precommande">Rejoindre la liste d'attente →</Link>
        </Button>
        <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
          <Link to="/contact">Devenir partenaire</Link>
        </Button>
      </div>
    </div>
  </section>
);

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <SEOHead title="PhytoTech Home — L'énergie qui pousse" description="Des kits bio-énergie utilisant plantes, algues et eau pour produire votre électricité, purifier votre air et recycler votre eau. Sans réseau. Sans batteries toxiques." path="/" />
      <HeroSection />
      <ManifestoSection />
      <HonestySection />
      <CompareSection />
      <ProductsSection />
      <HowItWorksSection />
      <ImpactSection />
      <BusinessSection />
      <ChannelsSection />
      <CTASection />
      <CommentSection pageSlug="index" />
    </main>
    <Footer />
  </div>
);

export default Index;
