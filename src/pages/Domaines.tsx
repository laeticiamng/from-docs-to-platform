import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";
import HowToGuide from "@/components/HowToGuide";
import { howToGuides } from "@/data/howToData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AppItem {
  tag: string;
  title: string;
  desc: string;
}

interface Domain {
  emoji: string;
  title: string;
  subtitle: string;
  apps: AppItem[];
}

const tagColors: Record<string, string> = {
  "EAU": "bg-blue-500/20 text-blue-700 dark:text-blue-300",
  "ÉNERGIE": "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300",
  "LUMIÈRE": "bg-amber-400/20 text-amber-700 dark:text-amber-300",
  "AIR": "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300",
  "STOCKAGE": "bg-purple-500/20 text-purple-700 dark:text-purple-300",
  "MATÉRIAUX": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "IMAGERIE": "bg-pink-500/20 text-pink-700 dark:text-pink-300",
  "DISPOSITIFS": "bg-rose-500/20 text-rose-700 dark:text-rose-300",
  "MONITORING": "bg-teal-500/20 text-teal-700 dark:text-teal-300",
  "PLATEFORME": "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300",
  "ÉCLAIRAGE": "bg-amber-400/20 text-amber-700 dark:text-amber-300",
  "BÂTIMENTS": "bg-stone-500/20 text-stone-700 dark:text-stone-300",
  "CAPTEURS": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
  "MOBILIER": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "TRANSPORT": "bg-sky-500/20 text-sky-700 dark:text-sky-300",
  "IRRIGATION": "bg-blue-500/20 text-blue-700 dark:text-blue-300",
  "ALIMENTATION": "bg-green-500/20 text-green-700 dark:text-green-300",
  "EMBALLAGE": "bg-lime-500/20 text-lime-700 dark:text-lime-300",
  "FERTILISANT": "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
  "PÉDAGOGIE": "bg-violet-500/20 text-violet-700 dark:text-violet-300",
  "LABO": "bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300",
  "ÉMERVEILLEMENT": "bg-pink-500/20 text-pink-700 dark:text-pink-300",
  "CAPTURE": "bg-teal-500/20 text-teal-700 dark:text-teal-300",
  "TEXTILE": "bg-rose-500/20 text-rose-700 dark:text-rose-300",
  "ÉLECTRONIQUE": "bg-slate-500/20 text-slate-700 dark:text-slate-300",
  "SANTÉ": "bg-red-500/20 text-red-700 dark:text-red-300",
  "DIAGNOSTIC": "bg-orange-500/20 text-orange-700 dark:text-orange-300",
  "AMBIANCE": "bg-amber-400/20 text-amber-700 dark:text-amber-300",
  "FAÇADE": "bg-stone-500/20 text-stone-700 dark:text-stone-300",
  "PACKAGING": "bg-lime-500/20 text-lime-700 dark:text-lime-300",
  "SUPPORT VIE": "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300",
  "PRODUCTION H₂": "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300",
  "RÉGLEMENTATION": "bg-slate-500/20 text-slate-700 dark:text-slate-300",
  "URBANISME": "bg-stone-500/20 text-stone-700 dark:text-stone-300",
  "ÉDUCATION": "bg-violet-500/20 text-violet-700 dark:text-violet-300",
  "STRATÉGIE": "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300",
  "TEINTURE": "bg-rose-500/20 text-rose-700 dark:text-rose-300",
  "COSMÉTIQUE": "bg-pink-500/20 text-pink-700 dark:text-pink-300",
};

const domains: Domain[] = [
  {
    emoji: "🏠",
    title: "Habitat & Vie domestique",
    subtitle: "Le foyer autonome du futur — la maison devient un organisme vivant.",
    apps: [
      { tag: "EAU", title: "Douche cyclique à biofiltre algal", desc: "5 litres en boucle fermée. Les algues remplacent les filtres UV." },
      { tag: "ÉNERGIE", title: "Plantes d'intérieur productrices d'électricité", desc: "PMFC dans les pots de fleurs alimentent les capteurs domotiques." },
      { tag: "LUMIÈRE", title: "Éclairage bioluminescent", desc: "Plantes ou capsules bactériennes qui émettent une lumière douce sans électricité." },
      { tag: "AIR", title: "Murs d'algues purificateurs d'air", desc: "Microalgues qui absorbent le CO₂ et rejettent de l'O₂." },
      { tag: "STOCKAGE", title: "Batteries domestiques à quinones végétales", desc: "Stockage d'énergie dans des batteries organiques biodégradables." },
      { tag: "MATÉRIAUX", title: "Mobilier en bioplastique algal", desc: "Chaises, étagères en PHA — compostables, imprimables en 3D." },
    ],
  },
  {
    emoji: "🏥",
    title: "Santé & Médecine",
    subtitle: "Imagerie verte, dispositifs biodégradables, capteurs autonomes.",
    apps: [
      { tag: "IMAGERIE", title: "Agent de contraste IRM végétal (BBCA)", desc: "Betterave → bétalaïne paramagnétique. Pas de gadolinium, biodégradable." },
      { tag: "IMAGERIE", title: "Nano-transporteurs à virus de plantes", desc: "Virus végétaux non pathogènes comme véhicules d'agents de contraste organiques." },
      { tag: "DISPOSITIFS", title: "Capteurs médicaux biodégradables", desc: "Transistors OECT sur cellulose. Monitoring post-opératoire éphémère." },
      { tag: "ÉNERGIE", title: "Batteries implantables à mélanine", desc: "Batteries sodium-ion biocompatibles pour implants temporaires." },
      { tag: "MONITORING", title: "Patch cutané BPV pour suivi vasculaire", desc: "Cyanobactéries alimentant un capteur de flux sanguin continu." },
      { tag: "PLATEFORME", title: "AquaMR Flow — cockpit vasculaire vert", desc: "CI-AKI Engine + Bio-MRA + Digital Twin contrast-free + Eco-Impact Score." },
    ],
  },
  {
    emoji: "🏙",
    title: "Urbanisme & Smart City",
    subtitle: "La ville qui respire, qui s'éclaire et qui se nourrit d'elle-même.",
    apps: [
      { tag: "ÉCLAIRAGE", title: "Lampadaires à algues bioluminescentes", desc: "Lampes vivantes à bactéries marines — sans électricité, zéro émission." },
      { tag: "BÂTIMENTS", title: "Façades à photobioréacteurs", desc: "Isolation thermique, ombrage adaptatif, capture CO₂, production biomasse." },
      { tag: "EAU", title: "Traitement des eaux urbaines par PMFC", desc: "Zones humides artificielles productrices d'électricité." },
      { tag: "CAPTEURS", title: "Réseau IoT urbain alimenté par les plantes", desc: "Capteurs de qualité d'air, température, bruit — autonomes." },
      { tag: "MOBILIER", title: "Mobilier urbain en bioplastique algal", desc: "Bancs, poubelles, abribus en PHA — biodégradables, fabrication locale." },
      { tag: "TRANSPORT", title: "Filtres GoGreen sur flottes de bus", desc: "Filtres à algues sur les pots d'échappement — réduction CO₂ biologique." },
    ],
  },
  {
    emoji: "🌾",
    title: "Agriculture & Alimentation",
    subtitle: "Du champ à l'assiette, alimenté par le vivant.",
    apps: [
      { tag: "MONITORING", title: "Capteurs de sol PMFC autonomes", desc: "Surveillance humidité/pH/température alimentée par les racines des cultures." },
      { tag: "IRRIGATION", title: "Recyclage des eaux grises par biofiltre algal", desc: "Circuit fermé ferme-eau-ferme." },
      { tag: "ALIMENTATION", title: "Microalgues comme superaliment", desc: "Spiruline, chlorella — protéines complètes, vitamines, minéraux." },
      { tag: "EMBALLAGE", title: "Films alimentaires en bioplastique algal", desc: "Emballages B'ZEOS — biodégradables en milieu marin." },
      { tag: "FERTILISANT", title: "Biomasse algale comme engrais", desc: "Résidus de photobioréacteurs deviennent des biofertilisants." },
    ],
  },
  {
    emoji: "📚",
    title: "Éducation & Recherche",
    subtitle: "Apprendre en cultivant, enseigner en créant.",
    apps: [
      { tag: "PÉDAGOGIE", title: "Kits PMFC pour écoles", desc: "Les élèves construisent leur propre pile végétale et mesurent le courant." },
      { tag: "PÉDAGOGIE", title: "Mini-photobioréacteurs de classe", desc: "Culture d'algues dans des tubes transparents — photosynthèse en action." },
      { tag: "LABO", title: "Circuits biodégradables pour TP électronique", desc: "Transistors imprimés sur cellulose — zéro déchet électronique." },
      { tag: "ÉMERVEILLEMENT", title: "Jardins bioluminescents pédagogiques", desc: "Plantes qui brillent la nuit — bioluminescence visible." },
    ],
  },
  {
    emoji: "🏭",
    title: "Industrie & Fabrication",
    subtitle: "De la pétrochimie à la bio-manufacture.",
    apps: [
      { tag: "MATÉRIAUX", title: "Bioplastiques PHA à grande échelle", desc: "Remplacement du polyéthylène par des PHA algaux — 100% biodégradable." },
      { tag: "CAPTURE", title: "Scrubbers industriels à microalgues", desc: "Les algues capturent le CO₂ des cheminées et produisent de la biomasse." },
      { tag: "TEXTILE", title: "Teintures algales et fibres PHA", desc: "SeaDyes : teintures sans chimie toxique. Fibres PHA pour tissus biodégradables." },
      { tag: "ÉLECTRONIQUE", title: "Circuits imprimés biodégradables", desc: "Graphène + cellulose + ablation laser. Matériaux 100% dégradables." },
      { tag: "ÉNERGIE", title: "Batteries à flux quinone pour stockage industriel", desc: "Batteries organiques sans métaux rares pour le stockage stationnaire." },
    ],
  },
  {
    emoji: "🌍",
    title: "Pays en développement & Humanitaire",
    subtitle: "La première révolution tech dont les ingrédients sont gratuits et partout.",
    apps: [
      { tag: "ÉNERGIE", title: "Feuilles artificielles pour H₂ en zone rurale", desc: "Conçu pour fonctionner dans l'eau impure — pensé pour les pays en développement." },
      { tag: "EAU", title: "Purification d'eau par PMFC + algues", desc: "Biofiltres algaux éliminent 94% de la DBO sans électricité." },
      { tag: "SANTÉ", title: "AquaMR Mobile — imagerie portable", desc: "IRM bas champ + BBCA betterave + pile H₂. Station d'imagerie solaire." },
      { tag: "ÉCLAIRAGE", title: "Éclairage bioluminescent sans réseau", desc: "Capsules bactériennes pour villages sans électricité." },
      { tag: "ALIMENTATION", title: "Fermes à spiruline", desc: "Protéine complète, cultivable partout, indépendante du sol et du climat." },
      { tag: "DIAGNOSTIC", title: "Biocapteurs de qualité d'eau bioluminescents", desc: "Microorganismes lumineux qui changent d'intensité en présence de toxines." },
    ],
  },
  {
    emoji: "🏨",
    title: "Tourisme & Hôtellerie",
    subtitle: "L'éco-luxe vivant.",
    apps: [
      { tag: "EAU", title: "Douches cycliques dans chaque chambre", desc: "Économie de 70-90% d'eau par douche × centaines de chambres." },
      { tag: "AMBIANCE", title: "Jardins et couloirs bioluminescents", desc: "Éclairage vivant — zéro pollution lumineuse, expérience immersive." },
      { tag: "FAÇADE", title: "Spa-resort à façade algale", desc: "Murs photobioréacteurs — purification air, régulation thermique." },
      { tag: "PACKAGING", title: "Amenities en bioplastique algal", desc: "Flacons, emballages, couverts en PHA compostable." },
    ],
  },
  {
    emoji: "🚀",
    title: "Défense, Spatial & Expéditions",
    subtitle: "Autonomie totale en milieu extrême.",
    apps: [
      { tag: "SUPPORT VIE", title: "Photobioréacteurs pour stations spatiales", desc: "Algues recyclant CO₂ en O₂, produisant nourriture et purifiant l'eau." },
      { tag: "ÉNERGIE", title: "BPV pour capteurs en terrain hostile", desc: "Capteurs auto-alimentés par bio-panneaux — pas de batteries à remplacer." },
      { tag: "MATÉRIAUX", title: "Structures temporaires en bioplastique cultivable", desc: "Panneaux PHA cultivés sur place — construction biodégradable." },
      { tag: "PRODUCTION H₂", title: "Feuilles artificielles pour carburant de mission", desc: "Production d'hydrogène à partir d'eau et de lumière solaire." },
    ],
  },
  {
    emoji: "🏛",
    title: "Gouvernance & Politiques publiques",
    subtitle: "La transition pilotée par le vivant.",
    apps: [
      { tag: "RÉGLEMENTATION", title: "Normes 'Green Radiology' pour hôpitaux", desc: "Tracking du gadolinium, Eco-Impact Score comme KPI hospitalier." },
      { tag: "URBANISME", title: "Code du bâtiment intégrant les façades algales", desc: "Crédit d'impôt pour photobioréacteurs — comme les panneaux solaires." },
      { tag: "EAU", title: "Réglementation douche cyclique pour le neuf", desc: "Obligation de recirculation d'eau dans les constructions neuves." },
      { tag: "ÉNERGIE", title: "Subvention PMFC pour agriculture durable", desc: "Aide publique aux exploitations installant des capteurs PMFC." },
      { tag: "ÉDUCATION", title: "Programme scolaire 'PhytoTech'", desc: "Kits PMFC et photobioréacteurs dans les programmes scolaires." },
      { tag: "STRATÉGIE", title: "Plan national de souveraineté bio-matériaux", desc: "Réduction de la dépendance aux terres rares via bioplastiques algaux." },
    ],
  },
  {
    emoji: "💄",
    title: "Mode, Cosmétique & Lifestyle",
    subtitle: "Le luxe biodégradable.",
    apps: [
      { tag: "TEXTILE", title: "Vêtements en fibres PHA algales", desc: "Tissus biodégradables cultivés à partir d'algues — fast fashion compostable." },
      { tag: "TEINTURE", title: "Colorants spiruline / SeaDyes", desc: "Palette de couleurs naturelles sans chimie toxique." },
      { tag: "COSMÉTIQUE", title: "Bétalaïnes de betterave en soins", desc: "Antioxydant puissant, anti-inflammatoire, dans les crèmes et sérums." },
      { tag: "PACKAGING", title: "Flacons en bioplastique algal", desc: "Packaging luxe entièrement compostable — certification B Corp." },
    ],
  },
];

const emergingAxes = [
  { tag: "NOUVEAU", title: "Bioluminescence — le 11ème axe", desc: "Éclairage vivant sans électricité. Glowee + Woodlight (France), Light Bio (USA)." },
  { tag: "À EXPLORER", title: "Mycelium computing", desc: "Réseaux mycéliens comme substrats de calcul distribué." },
  { tag: "À EXPLORER", title: "Phytomining — extraction de métaux par les plantes", desc: "Plantes hyperaccumulatrices extraient nickel, zinc, cadmium des sols contaminés." },
  { tag: "À EXPLORER", title: "Béton auto-cicatrisant bactérien", desc: "Bactéries qui produisent du calcaire quand des fissures apparaissent." },
  { tag: "À EXPLORER", title: "Piézoélectricité végétale", desc: "Structures végétales générant un courant par déformation du vent." },
];

const matrixTechs = ["PMFC", "CO₂ algues", "Façades", "BPV", "H₂ vert", "Bioplast.", "Eau cycle", "BBCA", "Bioélec.", "Bio-batt.", "Biolum."];
const matrixDomains = [
  { name: "Habitat",       vals: ["●","●","●","●","◐","●","●","◐","●","●",""] },
  { name: "Santé",          vals: ["◐","","","●","◐","●","●","●","◐","",""] },
  { name: "Ville",          vals: ["●","●","●","●","◐","●","●","◐","◐","●",""] },
  { name: "Agriculture",    vals: ["●","●","","●","◐","●","●","●","◐","",""] },
  { name: "Éducation",      vals: ["●","●","◐","●","◐","●","","●","◐","●",""] },
  { name: "Industrie",      vals: ["◐","●","●","◐","●","●","◐","●","●","",""] },
  { name: "Pays en dév.",   vals: ["●","●","◐","●","●","●","●","●","●","●","●"] },
  { name: "Tourisme",       vals: ["◐","◐","●","","","●","●","","●","",""] },
  { name: "Défense/Space",  vals: ["●","●","","●","●","●","●","●","●","◐",""] },
  { name: "Gouvernance",    vals: ["●","●","●","◐","●","●","●","●","◐","◐","●"] },
  { name: "Mode/Cosm.",     vals: ["","","","","●","","●","","◐","",""] },
];

const Domaines = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <SEOHead title="Domaines d'application — PhytoTech" description="11 technologies, 60+ applications : habitat, santé, urbanisme, agriculture, éducation, industrie, humanitaire et plus." path="/domaines" />
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 space-y-6 max-w-3xl">
          <Badge variant="secondary" className="font-mono text-xs tracking-wider">
            Cartographie complète
          </Badge>
          <h1 className="text-4xl md:text-6xl">
            11 technologies · Tous les domaines de la vie
          </h1>
          <p className="text-lg text-muted-foreground">
            L'écosystème PhytoTech ne s'applique pas qu'à l'habitat. Il touche la santé, la ville, l'agriculture, l'industrie, l'éducation, l'humanitaire — et même l'espace.
          </p>
        </div>
      </section>

      {/* Domains Accordion */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <Accordion type="multiple" className="space-y-4">
            {domains.map((d, i) => (
              <AccordionItem key={i} value={`domain-${i}`} className="border rounded-lg bg-card/50 px-2">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-2xl">{d.emoji}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{d.title}</h3>
                      <p className="text-sm text-muted-foreground font-sans">{d.subtitle}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-4 pb-4">
                    {d.apps.map((a, j) => (
                      <Card key={j} className="bg-secondary/30 border-0">
                        <CardContent className="p-4 space-y-2">
                          <Badge className={`font-mono text-[10px] tracking-widest border-0 ${tagColors[a.tag] || "bg-primary/20 text-primary"}`}>
                            {a.tag}
                          </Badge>
                          <h4 className="text-sm font-semibold font-sans">{a.title}</h4>
                          <p className="text-xs text-muted-foreground">{a.desc}</p>
                          {howToGuides[a.title] && (
                            <HowToGuide
                              title={a.title}
                              steps={howToGuides[a.title].steps}
                              materials={howToGuides[a.title].materials}
                              difficulty={howToGuides[a.title].difficulty}
                              cost={howToGuides[a.title].cost}
                            />
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Emerging Axes */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Axes émergents à explorer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergingAxes.map((a, i) => (
              <Card key={i} className="bg-secondary/30 border-0 hover:shadow-lg transition-all">
                <CardContent className="p-5 space-y-2">
                  <Badge className="font-mono text-[10px] tracking-widest border-0 bg-accent/20 text-accent">
                    {a.tag}
                  </Badge>
                  <h4 className="text-sm font-semibold font-sans">{a.title}</h4>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Matrix */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4">Matrice Technologies × Domaines</h2>
          <div className="flex justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <span><span className="text-primary">●</span> application directe</span>
            <span><span className="text-muted-foreground">◐</span> émergente</span>
          </div>
          <div className="overflow-x-auto">
            <Table className="min-w-[800px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-mono text-xs">Domaine</TableHead>
                  {matrixTechs.map((t) => (
                    <TableHead key={t} className="font-mono text-[10px] text-center whitespace-nowrap">{t}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {matrixDomains.map((d) => (
                  <TableRow key={d.name}>
                    <TableCell className="font-mono text-xs whitespace-nowrap">{d.name}</TableCell>
                    {d.vals.map((v, i) => (
                      <TableCell key={i} className="text-center">
                        <span className={v === "●" ? "text-primary text-lg" : v === "◐" ? "text-muted-foreground" : ""}>
                          {v}
                        </span>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 font-mono">
            11 technologies · 11 domaines · 60+ applications identifiées
          </p>
        </div>
      </section>
      
    </main>
    <Footer />
  </div>
);

export default Domaines;
