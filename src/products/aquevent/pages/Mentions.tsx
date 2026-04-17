import AquaVentLayout from '../components/AquaVentLayout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertTriangle,
  ShieldAlert,
  FlaskConical,
  CheckCircle2,
  Clock,
  XCircle,
  Building2,
  Mail,
  FileText,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const contraindications = [
  'Femmes enceintes ou allaitantes',
  'Mineurs (moins de 18 ans)',
  'Personnes asthmatiques ou souffrant de pathologies respiratoires (BPCO, emphysème…)',
  'Personnes allergiques à l\'un des extraits végétaux utilisés',
  'Personnes sous traitement médical (interactions possibles non encore caractérisées)',
];

const validationRoadmap = [
  {
    phase: 'Phase 0 — Conception',
    status: 'done',
    period: '2024-2025',
    items: [
      'Définition du concept et de la formulation cible',
      'Sélection des extraits végétaux candidats (spiruline, anthocyanes, phycocyanine)',
      'Étude de la littérature scientifique existante',
    ],
  },
  {
    phase: 'Phase 1 — Validation laboratoire',
    status: 'in-progress',
    period: '2025-2026',
    items: [
      'Caractérisation physico-chimique des extraits',
      'Tests de stabilité de la formulation',
      'Étude de l\'aérosolisation par voie inhalée (granulométrie, dépôt pulmonaire)',
      'Tests cytotoxiques in vitro sur cellules épithéliales bronchiques',
    ],
  },
  {
    phase: 'Phase 2 — Évaluation pré-clinique',
    status: 'todo',
    period: '2026-2027',
    items: [
      'Études toxicologiques selon protocoles OCDE',
      'Évaluation de la sensibilisation respiratoire',
      'Validation par un laboratoire indépendant accrédité COFRAC',
    ],
  },
  {
    phase: 'Phase 3 — Conformité réglementaire',
    status: 'todo',
    period: '2027-2028',
    items: [
      'Dossier de conformité CE applicable au statut produit retenu',
      'Notification aux autorités compétentes (ANSES, DGCCRF selon classification)',
      'Audit qualité fabrication (norme ISO 13485 ou équivalent applicable)',
    ],
  },
  {
    phase: 'Phase 4 — Mise sur le marché',
    status: 'todo',
    period: '2028+',
    items: [
      'Pré-commercialisation auprès des inscrits sur la liste d\'attente',
      'Pharmacovigilance / cosmétovigilance selon le statut final retenu',
      'Suivi post-commercialisation et publications',
    ],
  },
];

const statusBadge: Record<string, { label: string; className: string; icon: React.ReactNode }> = {
  done: { label: 'Terminé', className: 'bg-primary/15 text-primary border-primary/30', icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
  'in-progress': { label: 'En cours', className: 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30', icon: <Clock className="w-3.5 h-3.5" /> },
  todo: { label: 'À venir', className: 'bg-muted text-muted-foreground border-border', icon: <Clock className="w-3.5 h-3.5" /> },
};

export default function AquaVentMentions() {
  return (
    <AquaVentLayout>
      <SEOHead
        title="Statut du projet AquaVent — Mentions & Transparence"
        description="Phase pré-commerciale, absence de claim médical, contre-indications et roadmap de validation du projet AquaVent par EmotionsCare SASU."
        path="/aquevent/mentions"
        noIndex
      />

      {/* Hero */}
      <section className="py-16 md:py-20 border-b bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge variant="outline" className="mb-4 font-mono text-[10px] tracking-wider uppercase">
            <FileText className="w-3 h-3 mr-1.5" /> Mentions du projet
          </Badge>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Statut du projet AquaVent
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Toutes les informations essentielles pour comprendre où en est ce projet,
            ce qu'il est — et surtout ce qu'il n'est pas.
          </p>
        </div>
      </section>

      {/* 1. Phase pré-commerciale */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Card className="border-amber-500/40 bg-amber-500/5">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-1" strokeWidth={2} />
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    1. Phase pré-commerciale
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    AquaVent est <strong className="text-foreground">un projet en phase pré-commerciale</strong>.
                    Aucun produit n'est actuellement commercialisé, vendu, ou disponible à l'achat.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                    <li>Aucun prix ferme n'est annoncé : les fourchettes affichées sont indicatives.</li>
                    <li>Les inscriptions sur la liste d'attente n'engagent ni l'utilisateur ni EmotionsCare SASU à un achat.</li>
                    <li>Les visuels 3D, schémas et descriptions correspondent à un concept en cours de développement.</li>
                    <li>Aucune levée de fonds ouverte au public n'est en cours. Les pages "Investisseurs" sont à but documentaire et ne constituent pas une offre au sens de l'AMF.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2. Absence de claim médical */}
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-6 h-6 text-destructive shrink-0 mt-1" strokeWidth={2} />
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    2. Absence de toute allégation médicale ou thérapeutique
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    AquaVent <strong className="text-foreground">n'est pas un médicament</strong>, n'est pas un dispositif médical,
                    et n'a fait l'objet d'<strong className="text-foreground">aucune autorisation de mise sur le marché</strong>.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-3">
                    <div className="rounded-lg border border-border bg-background/60 p-3">
                      <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider mb-1.5">
                        Ce que le projet ne prétend pas
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li className="flex gap-1.5"><XCircle className="w-3.5 h-3.5 text-destructive shrink-0 mt-0.5" /> Soigner ou guérir une pathologie</li>
                        <li className="flex gap-1.5"><XCircle className="w-3.5 h-3.5 text-destructive shrink-0 mt-0.5" /> Aider au sevrage tabagique avec preuve clinique</li>
                        <li className="flex gap-1.5"><XCircle className="w-3.5 h-3.5 text-destructive shrink-0 mt-0.5" /> Remplacer un traitement prescrit</li>
                        <li className="flex gap-1.5"><XCircle className="w-3.5 h-3.5 text-destructive shrink-0 mt-0.5" /> Garantir un effet sur l'anxiété ou le sommeil</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-border bg-background/60 p-3">
                      <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider mb-1.5">
                        Ce que le projet explore
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li className="flex gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> Une expérience sensorielle de bien-être</li>
                        <li className="flex gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> Une formulation à base d'extraits végétaux sans nicotine</li>
                        <li className="flex gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> Un programme de validation laboratoire en cours</li>
                        <li className="flex gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> Un produit dont le statut réglementaire final reste à arbitrer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Contre-indications */}
          <Card>
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-foreground shrink-0 mt-1" strokeWidth={2} />
                <div className="space-y-3 w-full">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    3. Contre-indications & publics non concernés
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Même en phase pré-commerciale, le concept AquaVent <strong className="text-foreground">n'est pas destiné</strong> aux publics suivants :
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    {contraindications.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground/80 italic pt-2 border-t">
                    En cas de doute, consultez un professionnel de santé. Cette liste n'est pas exhaustive
                    et sera complétée au fil de l'avancement des études de tolérance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4. Roadmap de validation */}
          <Card>
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="flex items-start gap-3">
                <FlaskConical className="w-6 h-6 text-foreground shrink-0 mt-1" strokeWidth={2} />
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    4. Roadmap de validation
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Le calendrier ci-dessous est <strong className="text-foreground">indicatif</strong> et susceptible
                    d'évoluer en fonction des résultats des phases successives.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {validationRoadmap.map((phase) => {
                  const badge = statusBadge[phase.status];
                  return (
                    <div key={phase.phase} className="border-l-2 border-border pl-4 py-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground text-sm md:text-base">{phase.phase}</h3>
                        <Badge variant="outline" className={`text-[10px] font-mono ${badge.className}`}>
                          <span className="flex items-center gap-1">{badge.icon}{badge.label}</span>
                        </Badge>
                        <span className="text-xs font-mono text-muted-foreground">{phase.period}</span>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {phase.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-muted-foreground/50 mt-1">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* 5. Contact & éditeur */}
          <Card className="bg-muted/30">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-foreground shrink-0 mt-1" strokeWidth={2} />
                <div className="space-y-3 w-full">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    5. Éditeur & contact
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1 text-muted-foreground">
                      <p><strong className="text-foreground">EmotionsCare SASU</strong></p>
                      <p>Amiens, France</p>
                      <p className="font-mono text-xs">SIREN 944 505 445</p>
                    </div>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:contact@emotionscare.fr" className="hover:text-aquevent-primary">
                          contact@emotionscare.fr
                        </a>
                      </p>
                      <p className="text-xs">
                        Pour toute question relative au statut, à la conformité ou à la sécurité du projet.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t flex flex-wrap gap-3 text-xs">
                    <Link to="/mentions-legales" className="text-aquevent-primary hover:underline">
                      Mentions légales générales
                    </Link>
                    <span className="text-muted-foreground/50">·</span>
                    <Link to="/politique-confidentialite" className="text-aquevent-primary hover:underline">
                      Politique de confidentialité
                    </Link>
                    <span className="text-muted-foreground/50">·</span>
                    <Link to="/cgv" className="text-aquevent-primary hover:underline">
                      CGV
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </AquaVentLayout>
  );
}
