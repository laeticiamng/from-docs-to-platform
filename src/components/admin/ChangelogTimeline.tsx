import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wrench, ShieldCheck, RefreshCw, FileText } from "lucide-react";
import changelogRaw from "@/data/changelog.md?raw";

type Section = { title: string; type: SectionType; items: string[] };
type SectionType = "Ajouté" | "Corrigé" | "Refactorisé" | "Sécurité" | "Autre";
type Release = { version: string; date: string; sections: Section[] };

const TYPE_META: Record<SectionType, { icon: typeof Sparkles; cls: string }> = {
  "Ajouté": { icon: Sparkles, cls: "bg-primary/10 text-primary border-primary/20" },
  "Corrigé": { icon: Wrench, cls: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20" },
  "Refactorisé": { icon: RefreshCw, cls: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20" },
  "Sécurité": { icon: ShieldCheck, cls: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20" },
  "Autre": { icon: FileText, cls: "bg-muted text-muted-foreground border-border" },
};

const parseChangelog = (raw: string): Release[] => {
  const releases: Release[] = [];
  const lines = raw.split("\n");
  let current: Release | null = null;
  let currentSection: Section | null = null;

  for (const line of lines) {
    const versionMatch = line.match(/^##\s+(v[\d.]+)\s+—\s+(.+)$/);
    if (versionMatch) {
      if (current) releases.push(current);
      current = { version: versionMatch[1], date: versionMatch[2].trim(), sections: [] };
      currentSection = null;
      continue;
    }
    const sectionMatch = line.match(/^###\s+(.+)$/);
    if (sectionMatch && current) {
      const title = sectionMatch[1].trim();
      const type: SectionType = (["Ajouté", "Corrigé", "Refactorisé", "Sécurité"].includes(title)
        ? title
        : "Autre") as SectionType;
      currentSection = { title, type, items: [] };
      current.sections.push(currentSection);
      continue;
    }
    const itemMatch = line.match(/^-\s+(.+)$/);
    if (itemMatch && currentSection) {
      currentSection.items.push(itemMatch[1].trim());
    }
  }
  if (current) releases.push(current);
  return releases;
};

const ChangelogTimeline = () => {
  const [releases, setReleases] = useState<Release[]>([]);

  useEffect(() => {
    setReleases(parseChangelog(changelogRaw));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" /> Historique des releases
        </CardTitle>
        <CardDescription>
          Source : <code className="text-xs">src/data/changelog.md</code> — versionné en code.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-border">
          {releases.map((r) => (
            <div key={r.version} className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <h3 className="text-lg font-semibold tracking-tight">{r.version}</h3>
                <span className="text-xs text-muted-foreground font-mono">{r.date}</span>
              </div>
              <div className="space-y-3">
                {r.sections.map((s, i) => {
                  const { icon: Icon, cls } = TYPE_META[s.type];
                  return (
                    <div key={i} className="space-y-2">
                      <Badge variant="outline" className={`gap-1 ${cls}`}>
                        <Icon className="w-3 h-3" /> {s.title}
                      </Badge>
                      <ul className="ml-1 space-y-1.5 text-sm text-foreground/90">
                        {s.items.map((item, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="text-muted-foreground mt-0.5">•</span>
                            <div className="flex-1 prose prose-sm max-w-none prose-code:text-xs prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
                              <ReactMarkdown>{item}</ReactMarkdown>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          {!releases.length && (
            <p className="text-sm text-muted-foreground text-center py-8">Aucune release enregistrée.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChangelogTimeline;
