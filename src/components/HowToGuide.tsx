import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Lock, ChevronDown, ChevronUp, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HowToStep {
  step: string;
  detail: string;
}

interface HowToGuideProps {
  title: string;
  steps: HowToStep[];
  materials?: string[];
  difficulty?: "Facile" | "Moyen" | "Avancé";
  cost?: string;
}

const HowToGuide = ({ title, steps, materials, difficulty = "Facile", cost }: HowToGuideProps) => {
  const { user } = useAuth();
  const [expanded, setExpanded] = useState(false);

  if (!user) {
    return (
      <div className="mt-3 rounded-lg border border-dashed border-primary/30 bg-primary/5 p-3 flex items-center gap-3">
        <Lock className="h-4 w-4 text-primary shrink-0" />
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-primary">Comment faire chez soi ?</span>{" "}
          Connectez-vous pour voir le guide de réalisation simple.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-2 text-left rounded-lg border border-primary/20 bg-primary/5 p-3 hover:bg-primary/10 transition-colors"
      >
        <Wrench className="h-4 w-4 text-primary shrink-0" />
        <span className="text-xs font-semibold text-primary flex-1">Comment faire chez soi ?</span>
        <div className="flex items-center gap-2">
          {difficulty && (
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
              difficulty === "Facile" ? "bg-green-500/20 text-green-700" :
              difficulty === "Moyen" ? "bg-yellow-500/20 text-yellow-700" :
              "bg-orange-500/20 text-orange-700"
            }`}>
              {difficulty}
            </span>
          )}
          {expanded ? <ChevronUp className="h-3.5 w-3.5 text-primary" /> : <ChevronDown className="h-3.5 w-3.5 text-primary" />}
        </div>
      </button>

      {expanded && (
        <div className="mt-2 rounded-lg border border-primary/10 bg-card p-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          {cost && (
            <p className="text-[11px] font-mono text-muted-foreground">
              💰 Budget estimé : <span className="text-foreground font-semibold">{cost}</span>
            </p>
          )}

          {materials && materials.length > 0 && (
            <div>
              <p className="text-[11px] font-mono font-semibold text-foreground mb-1">🛒 Matériel :</p>
              <ul className="text-[11px] text-muted-foreground space-y-0.5">
                {materials.map((m, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-primary mt-0.5">•</span> {m}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="text-[11px] font-mono font-semibold text-foreground mb-2">📋 Étapes :</p>
            <ol className="space-y-2">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 rounded-full h-5 w-5 flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{s.step}</p>
                    <p className="text-[11px] text-muted-foreground">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowToGuide;
