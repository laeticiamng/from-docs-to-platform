import { useEffect, useMemo, useState } from "react";
import { Mail, CheckCircle2, XCircle, Ban, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type EmailLog = {
  id: string;
  message_id: string | null;
  template_name: string;
  recipient_email: string;
  status: string;
  error_message: string | null;
  created_at: string;
};

type Range = "24h" | "7d" | "30d";
const RANGE_HOURS: Record<Range, number> = { "24h": 24, "7d": 168, "30d": 720 };

const fmt = (iso: string) => new Date(iso).toLocaleString("fr-FR");

const statusBadge = (status: string) => {
  const map: Record<string, { variant: "default" | "destructive" | "secondary" | "outline"; label: string }> = {
    sent: { variant: "default", label: "Envoyé" },
    pending: { variant: "secondary", label: "En attente" },
    failed: { variant: "destructive", label: "Échec" },
    dlq: { variant: "destructive", label: "DLQ" },
    suppressed: { variant: "outline", label: "Supprimé" },
    bounced: { variant: "destructive", label: "Bounce" },
    complained: { variant: "destructive", label: "Plainte" },
  };
  const cfg = map[status] ?? { variant: "outline" as const, label: status };
  return <Badge variant={cfg.variant}>{cfg.label}</Badge>;
};

const PAGE_SIZE = 50;

const EmailDeliveryPanel = () => {
  const [logs, setLogs] = useState<EmailLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState<Range>("7d");
  const [templateFilter, setTemplateFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const since = new Date(Date.now() - RANGE_HOURS[range] * 3600_000).toISOString();
      const { data } = await supabase
        .from("email_send_log")
        .select("*")
        .gte("created_at", since)
        .order("created_at", { ascending: false })
        .limit(2000);
      setLogs((data ?? []) as EmailLog[]);
      setPage(0);
      setLoading(false);
    };
    void load();
  }, [range]);

  // Déduplication par message_id : on garde la dernière entrée (la plus récente)
  const dedupedLogs = useMemo(() => {
    const seen = new Map<string, EmailLog>();
    for (const log of logs) {
      const key = log.message_id ?? log.id;
      if (!seen.has(key)) seen.set(key, log);
    }
    return Array.from(seen.values()).sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
  }, [logs]);

  const templates = useMemo(
    () => Array.from(new Set(dedupedLogs.map((l) => l.template_name))).sort(),
    [dedupedLogs],
  );

  const filtered = useMemo(() => {
    return dedupedLogs.filter((l) => {
      if (templateFilter !== "all" && l.template_name !== templateFilter) return false;
      if (statusFilter !== "all") {
        if (statusFilter === "failed" && !["failed", "dlq", "bounced", "complained"].includes(l.status)) return false;
        if (statusFilter === "sent" && l.status !== "sent") return false;
        if (statusFilter === "suppressed" && l.status !== "suppressed") return false;
      }
      return true;
    });
  }, [dedupedLogs, templateFilter, statusFilter]);

  const stats = useMemo(() => {
    const total = dedupedLogs.length;
    const sent = dedupedLogs.filter((l) => l.status === "sent").length;
    const failed = dedupedLogs.filter((l) => ["failed", "dlq", "bounced", "complained"].includes(l.status)).length;
    const suppressed = dedupedLogs.filter((l) => l.status === "suppressed").length;
    return { total, sent, failed, suppressed };
  }, [dedupedLogs]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className="space-y-4">
      {/* Filtres */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Filtres</CardTitle>
          <CardDescription>Stats dédupliquées par message_id (un email = une ligne)</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <div className="flex gap-1">
            {(["24h", "7d", "30d"] as Range[]).map((r) => (
              <Button
                key={r}
                size="sm"
                variant={range === r ? "default" : "outline"}
                onClick={() => setRange(r)}
              >
                {r === "24h" ? "24 h" : r === "7d" ? "7 jours" : "30 jours"}
              </Button>
            ))}
          </div>
          <Select value={templateFilter} onValueChange={(v) => { setTemplateFilter(v); setPage(0); }}>
            <SelectTrigger className="w-[200px]"><SelectValue placeholder="Template" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les templates</SelectItem>
              {templates.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(0); }}>
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Statut" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="sent">Envoyés</SelectItem>
              <SelectItem value="failed">Échecs</SelectItem>
              <SelectItem value="suppressed">Supprimés</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard icon={Mail} label="Total" value={stats.total} tone="muted" />
        <StatCard icon={CheckCircle2} label="Envoyés" value={stats.sent} tone="success" />
        <StatCard icon={XCircle} label="Échecs" value={stats.failed} tone="destructive" />
        <StatCard icon={Ban} label="Supprimés" value={stats.suppressed} tone="muted" />
      </div>

      {/* Alerte si taux d'échec élevé */}
      {stats.total > 0 && stats.failed / stats.total > 0.1 && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="pt-6 flex items-center gap-3 text-sm text-destructive">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>
              Taux d'échec élevé : {((stats.failed / stats.total) * 100).toFixed(1)}% — vérifiez DKIM, suppressions ou rate-limit.
            </span>
          </CardContent>
        </Card>
      )}

      {/* Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2 flex-wrap">
          <div>
            <CardTitle className="text-base">Journal des envois ({filtered.length})</CardTitle>
            <CardDescription>Page {page + 1} / {totalPages}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" disabled={page === 0} onClick={() => setPage((p) => p - 1)}>Précédent</Button>
            <Button size="sm" variant="outline" disabled={page >= totalPages - 1} onClick={() => setPage((p) => p + 1)}>Suivant</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Template</TableHead>
                  <TableHead>Destinataire</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Erreur</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pageRows.map((l) => (
                  <TableRow key={l.id}>
                    <TableCell className="text-xs whitespace-nowrap">{fmt(l.created_at)}</TableCell>
                    <TableCell><Badge variant="outline">{l.template_name}</Badge></TableCell>
                    <TableCell className="text-xs">{l.recipient_email}</TableCell>
                    <TableCell>{statusBadge(l.status)}</TableCell>
                    <TableCell className="text-xs text-muted-foreground max-w-xs truncate">
                      {l.error_message ?? "—"}
                    </TableCell>
                  </TableRow>
                ))}
                {!loading && !pageRows.length && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                      Aucun envoi sur cette période
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const StatCard = ({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Mail;
  label: string;
  value: number;
  tone: "muted" | "success" | "destructive";
}) => {
  const toneClass =
    tone === "success" ? "text-primary" : tone === "destructive" ? "text-destructive" : "text-muted-foreground";
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
          </div>
          <Icon className={`w-5 h-5 ${toneClass}`} />
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailDeliveryPanel;
