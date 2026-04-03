import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowToGuide from "@/components/HowToGuide";
import { howToGuides } from "@/data/howToData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ZoneApp {
  tag: string;
  title: string;
  desc: string;
}

interface EcoZone {
  emoji: string;
  name: string;
  regions: string;
  plants: string[];
  priority: string;
  priorityColor: string;
  desc: string;
  apps: ZoneApp[];
}

const zones: EcoZone[] = [
  {
    emoji: "🏜️",
    name: "Zone sahélienne",
    regions: "Sahel, nord Sénégal, Mali, Niger, Tchad",
    plants: ["Mil", "Sorgho", "Acacia", "Balanites", "Moringa"],
    priority: "EAU",
    priorityColor: "bg-blue-500/20 text-blue-700",
    desc: "L'eau est la ressource la plus critique. Les plantes résistantes à la sécheresse sont déjà là — il faut les connecter à des systèmes de purification et de récupération.",
    apps: [
      { tag: "EAU", title: "Biofiltre algal sur puits existants", desc: "Les algues purifient l'eau des puits sans chimie, sans électricité. Les communautés ont déjà les puits — on ajoute le biofiltre." },
      { tag: "ÉNERGIE", title: "PMFC sur cultures de mil et sorgho", desc: "Les racines de mil et sorgho produisent des exsudats riches — idéal pour les PMFC. Capteurs de qualité d'eau et LED alimentés par les champs existants." },
      { tag: "ALIMENTATION", title: "Spiruline en photobioréacteur simple", desc: "Protéine complète cultivable avec peu d'eau dans des bassins ouverts. Le moringa pousse déjà partout — on ajoute la spiruline." },
      { tag: "ÉCLAIRAGE", title: "Bioluminescence pour balisage nocturne", desc: "Capsules bactériennes sur les chemins et places du village — pas de câblage, pas de panneaux solaires à voler." },
    ],
  },
  {
    emoji: "🌴",
    name: "Zone tropicale humide",
    regions: "Côte d'Ivoire, Cameroun, RDC, Ghana, Guinée",
    plants: ["Manioc", "Plantain", "Cacao", "Palmier à huile", "Bambou"],
    priority: "ÉNERGIE",
    priorityColor: "bg-yellow-500/20 text-yellow-700",
    desc: "La biomasse est abondante. La végétation pousse vite et partout. L'enjeu est de transformer cette abondance végétale en énergie utilisable sans déforestation.",
    apps: [
      { tag: "ÉNERGIE", title: "Biogaz à partir de résidus de manioc et plantain", desc: "Les épluchures et résidus de transformation du manioc sont une source massive de biomasse — actuellement jetée. Un digesteur anaérobie la convertit en biogaz." },
      { tag: "ÉNERGIE", title: "PMFC grande surface en sous-bois de cacao", desc: "Les plantations de cacao couvrent des dizaines d'hectares. Des PMFC en sous-bois alimentent les capteurs de monitoring des cultures." },
      { tag: "EAU", title: "Biofiltre algal sur eaux de lavage de cacao", desc: "Les eaux de fermentation du cacao polluent les rivières. Les biofiltres algaux les purifient et la biomasse algale devient fertilisant." },
      { tag: "MATÉRIAUX", title: "Bioplastique PHA à partir de fibres de palmier", desc: "Les résidus de palmier à huile deviennent des bioplastiques — emballages, contenants, mobilier, remplaçant le plastique importé." },
    ],
  },
  {
    emoji: "🌿",
    name: "Zone de savane",
    regions: "Burkina Faso, Tanzanie, Mozambique, Kenya rural, Ouganda",
    plants: ["Maïs", "Arachide", "Karité", "Graminées", "Sésame"],
    priority: "ÉNERGIE + EAU",
    priorityColor: "bg-emerald-500/20 text-emerald-700",
    desc: "Terrain ouvert, ensoleillement fort, saisons marquées. Les graminées et cultures vivrières couvrent de vastes surfaces — parfait pour les PMFC à grande échelle et les feuilles artificielles.",
    apps: [
      { tag: "ÉNERGIE", title: "Réseau PMFC en champs d'arachide et maïs", desc: "Les champs de graminées sont les meilleurs substrats pour les PMFC — les racines produisent naturellement les exsudats nécessaires." },
      { tag: "ÉNERGIE", title: "Feuilles artificielles H₂ pour cuisson", desc: "Ensoleillement fort + eau disponible en saison = production d'hydrogène pour remplacer le charbon de bois (cause majeure de déforestation)." },
      { tag: "EAU", title: "Douche cyclique communautaire", desc: "Un point d'eau avec biofiltre algal dessert un quartier entier — économie de 90% d'eau." },
      { tag: "MONITORING", title: "Capteurs agricoles autonomes PMFC", desc: "Surveillance sol et météo alimentée par les cultures elles-mêmes. Pas de piles, pas de panneaux, pas de maintenance." },
    ],
  },
  {
    emoji: "🌊",
    name: "Zone côtière & insulaire",
    regions: "Sénégal côte, Madagascar, Comores, Tanzanie côte, Cap-Vert",
    plants: ["Cocotier", "Mangrove", "Algues marines", "Palétuviers", "Riz de mangrove"],
    priority: "EAU",
    priorityColor: "bg-blue-500/20 text-blue-700",
    desc: "Paradoxe : entourés d'eau mais manque d'eau potable. Les mangroves et algues marines sont des ressources sous-exploitées pour la purification et l'alimentation.",
    apps: [
      { tag: "EAU", title: "Biofiltre algal marin pour dessalement biologique", desc: "Les algues marines tolèrent la salinité et filtrent les contaminants. Pré-traitement biologique avant dessalement simple." },
      { tag: "ALIMENTATION", title: "Aquaculture + spiruline intégrée", desc: "Les bassins d'aquaculture existants intègrent un photobioréacteur à spiruline — double production : poisson + protéine végétale." },
      { tag: "MATÉRIAUX", title: "Bioplastique algal à partir d'algues de récif", desc: "Les algues envahissantes qui étouffent les coraux deviennent la matière première de bioplastiques — dépollution + valorisation." },
      { tag: "ÉNERGIE", title: "PMFC en mangrove pour monitoring côtier", desc: "Les mangroves sont des écosystèmes PMFC naturels. Des capteurs y surveillent la montée des eaux et la salinité." },
    ],
  },
  {
    emoji: "⛰️",
    name: "Zone d'altitude",
    regions: "Éthiopie, Rwanda, Burundi, hauts plateaux du Kenya",
    plants: ["Café", "Teff", "Eucalyptus", "Bambou", "Enset (faux bananier)"],
    priority: "ÉNERGIE",
    priorityColor: "bg-yellow-500/20 text-yellow-700",
    desc: "Températures fraîches la nuit, ensoleillement intense le jour. Le café et le teff sont des cultures de rente — les résidus de transformation sont une source de biogaz inexploitée.",
    apps: [
      { tag: "ÉNERGIE", title: "Micro-CHP biogaz sur résidus de café", desc: "Les cerises de café produisent 40% de résidus. Un digesteur anaérobie les convertit en biogaz pour électricité + chaleur nocturne." },
      { tag: "STOCKAGE", title: "Batterie quinone pour stockage jour→nuit", desc: "L'énergie produite le jour stockée dans des batteries organiques pour les besoins nocturnes — chauffage, éclairage." },
      { tag: "ÉCLAIRAGE", title: "Bioluminescence pour les chemins de montagne", desc: "Les sentiers de montagne balisés par des capsules bioluminescentes — sécurité nocturne sans infrastructure électrique." },
      { tag: "EAU", title: "Biofiltre sur sources d'altitude", desc: "Les sources de montagne sont souvent contaminées en aval. Les biofiltres algaux purifient sans pompage — gravité seule." },
    ],
  },
];

const tagColors: Record<string, string> = {
  "EAU": "bg-blue-500/20 text-blue-700",
  "ÉNERGIE": "bg-yellow-500/20 text-yellow-700",
  "ALIMENTATION": "bg-green-500/20 text-green-700",
  "ÉCLAIRAGE": "bg-amber-400/20 text-amber-700",
  "MATÉRIAUX": "bg-orange-500/20 text-orange-700",
  "MONITORING": "bg-teal-500/20 text-teal-700",
  "STOCKAGE": "bg-purple-500/20 text-purple-700",
};

const adaptationTable = [
  { pays: "Niger", priorite: "Eau", plante: "Mil + acacia", solution: "Biofiltre algal sur puits" },
  { pays: "RDC", priorite: "Énergie", plante: "Manioc + palmier", solution: "Biogaz + PMFC grande surface" },
  { pays: "Sénégal (côte)", priorite: "Eau", plante: "Mangrove + algues", solution: "Dessalement biologique" },
  { pays: "Éthiopie", priorite: "Énergie", plante: "Café + teff", solution: "Micro-CHP biogaz + batterie quinone" },
  { pays: "Tanzanie", priorite: "Énergie + Eau", plante: "Maïs + graminées", solution: "PMFC en champs + feuilles H₂" },
  { pays: "Madagascar", priorite: "Eau", plante: "Riz + cocotier", solution: "Biofiltre + aquaculture spiruline" },
  { pays: "Burkina Faso", priorite: "Énergie", plante: "Karité + arachide", solution: "PMFC + bioluminescence" },
  { pays: "Rwanda", priorite: "Énergie", plante: "Café + bambou", solution: "Biogaz résidus café + batterie quinone" },
  { pays: "Ghana", priorite: "Énergie", plante: "Cacao + plantain", solution: "Biogaz résidus + PMFC sous-bois" },
  { pays: "Mali", priorite: "Eau", plante: "Mil + moringa", solution: "Biofiltre + spiruline" },
];

const Afrique = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-foreground text-background py-24">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-3xl">
          <Badge variant="secondary" className="font-mono text-xs tracking-wider">
            AFRIQUE & TERRITOIRES
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
            On n'envoie pas des plantes.<br />
            <span className="text-primary italic">On connecte celles qui sont déjà là.</span>
          </h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Le problème n'est pas l'absence de végétation. C'est l'absence de connexion entre les ressources naturelles existantes et les technologies capables de les valoriser.
          </p>
        </div>
      </section>

      {/* Le vrai problème */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">Le vrai problème</p>
            <h2 className="text-3xl md:text-4xl text-foreground">L'Afrique n'a pas un problème de végétation</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { n: "60%", l: "des terres arables non cultivées de la planète", icon: "🌍" },
              { n: "8×", l: "la biodiversité végétale vs l'Europe", icon: "🌿" },
              { n: "~17", l: "grands bassins fluviaux sous-exploités", icon: "💧" },
            ].map((s) => (
              <Card key={s.l}>
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl">{s.icon}</div>
                  <p className="text-3xl font-bold text-primary font-mono">{s.n}</p>
                  <p className="text-xs text-muted-foreground">{s.l}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-8 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">La vraie question</h3>
              <p className="text-sm text-muted-foreground">
                Il ne s'agit pas d'imposer un modèle unique, mais de <strong className="text-foreground">partir de l'existant</strong> : les plantes disponibles, les usages agricoles, les contraintes hydriques, et les besoins réels du territoire. Dans certains pays, la priorité sera l'énergie. Dans d'autres, la récupération et la purification de l'eau.
              </p>
              <p className="text-sm text-muted-foreground">
                C'est justement là que l'idée d'un <strong className="text-foreground">écosystème complet</strong> devient puissante : un cycle capable de relier production énergétique, gestion de l'eau et adaptation aux ressources locales.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ecosystem zones */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 space-y-3">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">5 écosystèmes, 5 approches</p>
            <h2 className="text-3xl md:text-4xl text-foreground">Chaque territoire a ses plantes, ses priorités, ses solutions</h2>
          </div>

          <Accordion type="multiple" className="space-y-4">
            {zones.map((z, i) => (
              <AccordionItem key={i} value={`zone-${i}`} className="border rounded-lg bg-card/80 px-2">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-3xl">{z.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-semibold text-foreground">{z.name}</h3>
                        <Badge className={`font-mono text-[10px] tracking-widest border-0 ${z.priorityColor}`}>
                          PRIORITÉ : {z.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-sans">{z.regions}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pb-4">
                    <p className="text-sm text-muted-foreground">{z.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-muted-foreground font-mono">PLANTES LOCALES :</span>
                      {z.plants.map((p) => (
                        <Badge key={p} variant="secondary" className="text-xs">{p}</Badge>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {z.apps.map((a, j) => (
                        <Card key={j} className="bg-secondary/30 border-0">
                          <CardContent className="p-4 space-y-2">
                            <Badge className={`font-mono text-[10px] tracking-widest border-0 ${tagColors[a.tag] || "bg-primary/20 text-primary"}`}>
                              {a.tag}
                            </Badge>
                            <h4 className="text-sm font-semibold font-sans text-foreground">{a.title}</h4>
                            <p className="text-xs text-muted-foreground">{a.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Cycle diagram */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">L'écosystème complet</p>
            <h2 className="text-3xl md:text-4xl">Un cycle qui s'adapte aux ressources, pas l'inverse</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "🌱", title: "Plantes locales", desc: "Mil, manioc, mangrove, café… déjà sur place", arrow: true },
              { icon: "⚡", title: "Énergie", desc: "PMFC, biogaz, H₂ — adaptés à la biomasse disponible", arrow: true },
              { icon: "💧", title: "Eau", desc: "Biofiltre, douche cyclique — selon les contraintes hydriques", arrow: true },
              { icon: "🌾", title: "Nutriments", desc: "Biomasse algale → fertilisant → retour aux plantes", arrow: false },
            ].map((s) => (
              <div key={s.title} className="text-center space-y-3 relative">
                <div className="text-4xl">{s.icon}</div>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="text-xs opacity-70">{s.desc}</p>
                {s.arrow && (
                  <span className="absolute -right-3 top-8 text-primary text-xl hidden md:block">→</span>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-mono">
              ♻️ Boucle fermée — le cycle se reproduit indéfiniment
            </div>
          </div>
        </div>
      </section>

      {/* Adaptation table */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">Adapter, pas imposer</p>
            <h2 className="text-3xl md:text-4xl text-foreground">Chaque pays, sa priorité, sa solution</h2>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-mono text-xs">Pays</TableHead>
                    <TableHead className="font-mono text-xs">Priorité #1</TableHead>
                    <TableHead className="font-mono text-xs">Plante locale clé</TableHead>
                    <TableHead className="font-mono text-xs">Solution PhytoTech</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adaptationTable.map((r) => (
                    <TableRow key={r.pays}>
                      <TableCell className="text-sm font-semibold">{r.pays}</TableCell>
                      <TableCell>
                        <Badge className={`font-mono text-[10px] border-0 ${
                          r.priorite.includes("Eau") ? "bg-blue-500/20 text-blue-700" : "bg-yellow-500/20 text-yellow-700"
                        }`}>
                          {r.priorite}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{r.plante}</TableCell>
                      <TableCell className="text-sm">{r.solution}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partenariats */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">Partenariats terrain</p>
            <h2 className="text-3xl md:text-4xl text-foreground">Formés sur place, maintenus par les communautés</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎓", title: "Formation locale", desc: "Chaque déploiement inclut la formation des villageois. Ils comprennent, ils maintiennent, ils transmettent." },
              { icon: "🔧", title: "Maintenance autonome", desc: "Les composants sont cultivables et réparables sur place. Pas de technicien extérieur nécessaire. Pas de pièce importée." },
              { icon: "🤝", title: "1 système = 1 territoire", desc: "Chaque système déployé en Europe finance un déploiement adapté aux ressources locales d'un territoire. 1=1." },
            ].map((c) => (
              <Card key={c.title}>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-4xl">{c.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl">
            Les plantes sont déjà là. L'eau est déjà là. Le soleil est déjà là.
          </h2>
          <p className="opacity-80">
            Il manque juste la connexion. C'est notre rôle.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="rounded-full text-base px-8">
              Devenir partenaire déploiement →
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Proposer un territoire pilote
            </Button>
          </div>
        </div>
      </section>
      <CommentSection pageSlug="afrique" />
    </main>
    <Footer />
  </div>
);

export default Afrique;
