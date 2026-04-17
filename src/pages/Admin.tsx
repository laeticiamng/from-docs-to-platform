import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Download, Inbox, ShoppingCart, BarChart3, Users, ArrowLeft, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

type Preorder = {
  id: string;
  name: string;
  email: string;
  pack: string;
  message: string | null;
  created_at: string;
};

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};

type AnalyticsEvent = {
  id: string;
  event_name: string;
  event_category: string | null;
  page_path: string | null;
  created_at: string;
};

const toCsv = (rows: Record<string, unknown>[]): string => {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const escape = (v: unknown) => {
    const s = v == null ? "" : String(v);
    return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [headers.join(","), ...rows.map((r) => headers.map((h) => escape(r[h])).join(","))].join("\n");
};

const downloadCsv = (filename: string, rows: Record<string, unknown>[]) => {
  const csv = toCsv(rows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

const fmtDate = (iso: string) => new Date(iso).toLocaleString("fr-FR");

const Admin = () => {
  const [preorders, setPreorders] = useState<Preorder[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [pre, msg, ev] = await Promise.all([
        supabase.from("preorders").select("*").order("created_at", { ascending: false }).limit(500),
        supabase.from("contact_messages").select("*").order("created_at", { ascending: false }).limit(500),
        supabase
          .from("analytics_events")
          .select("id, event_name, event_category, page_path, created_at")
          .order("created_at", { ascending: false })
          .limit(500),
      ]);
      if (pre.data) setPreorders(pre.data as Preorder[]);
      if (msg.data) setMessages(msg.data as ContactMessage[]);
      if (ev.data) setEvents(ev.data as AnalyticsEvent[]);
      setLoading(false);
    };
    void load();
  }, []);

  const stats = [
    { label: "Précommandes", value: preorders.length, icon: ShoppingCart },
    { label: "Messages contact", value: messages.length, icon: Inbox },
    { label: "Événements analytics", value: events.length, icon: BarChart3 },
    { label: "Sources uniques", value: new Set(events.map((e) => e.page_path)).size, icon: Users },
  ];

  // Série temporelle : événements par jour (14 derniers jours)
  const eventsByDay = useMemo(() => {
    const map = new Map<string, number>();
    const today = new Date();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      map.set(d.toISOString().slice(0, 10), 0);
    }
    events.forEach((e) => {
      const day = e.created_at.slice(0, 10);
      if (map.has(day)) map.set(day, (map.get(day) ?? 0) + 1);
    });
    return Array.from(map.entries()).map(([day, count]) => ({
      day: day.slice(5), // MM-DD
      events: count,
    }));
  }, [events]);

  // Top pages
  const topPages = useMemo(() => {
    const map = new Map<string, number>();
    events.forEach((e) => {
      const p = e.page_path ?? "(inconnu)";
      map.set(p, (map.get(p) ?? 0) + 1);
    });
    return Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([page, count]) => ({ page: page.length > 25 ? page.slice(0, 22) + "…" : page, count }));
  }, [events]);

  // Répartition packs précommandes
  const packDistribution = useMemo(() => {
    const map = new Map<string, number>();
    preorders.forEach((p) => map.set(p.pack, (map.get(p.pack) ?? 0) + 1));
    const colors = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))", "hsl(var(--muted))", "hsl(var(--destructive))"];
    return Array.from(map.entries()).map(([name, value], i) => ({
      name,
      value,
      fill: colors[i % colors.length],
    }));
  }, [preorders]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Admin — Pilotage de la plateforme"
        description="Tableau de bord administrateur PHYTOTECH"
        noIndex
      />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <Button variant="ghost" size="sm" asChild className="mb-2">
              <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" /> Retour au site</Link>
            </Button>
            <h1 className="text-3xl font-semibold tracking-tight">Tableau de bord</h1>
            <p className="text-sm text-muted-foreground">Lecture seule — données sensibles</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/admin/audit">Audit & Gouvernance</Link>
            </Button>
            <Badge variant="secondary" className="gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Live
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <s.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-2xl font-semibold">{loading ? "—" : s.value}</span>
                </div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="preorders">
          <TabsList>
            <TabsTrigger value="preorders">Précommandes ({preorders.length})</TabsTrigger>
            <TabsTrigger value="messages">Messages ({messages.length})</TabsTrigger>
            <TabsTrigger value="events">Analytics ({events.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="preorders" className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">Dernières précommandes</CardTitle>
                <Button size="sm" variant="outline" onClick={() => downloadCsv("preorders.csv", preorders)} disabled={!preorders.length}>
                  <Download className="w-4 h-4 mr-2" /> Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Pack</TableHead>
                        <TableHead>Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {preorders.map((p) => (
                        <TableRow key={p.id}>
                          <TableCell className="text-xs whitespace-nowrap">{fmtDate(p.created_at)}</TableCell>
                          <TableCell>{p.name}</TableCell>
                          <TableCell className="text-xs">{p.email}</TableCell>
                          <TableCell><Badge variant="outline">{p.pack}</Badge></TableCell>
                          <TableCell className="text-xs max-w-xs truncate">{p.message ?? "—"}</TableCell>
                        </TableRow>
                      ))}
                      {!loading && !preorders.length && (
                        <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">Aucune précommande</TableCell></TableRow>
                      )}
                    </TableBody>
                  </Table>
        </div>

        {/* KPIs visuels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" /> Événements (14 derniers jours)
              </CardTitle>
              <CardDescription>Activité analytics agrégée par jour</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={eventsByDay} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="evGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} allowDecimals={false} />
                  <RTooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Area type="monotone" dataKey="events" stroke="hsl(var(--primary))" fill="url(#evGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Répartition packs</CardTitle>
              <CardDescription>Précommandes par pack</CardDescription>
            </CardHeader>
            <CardContent>
              {packDistribution.length === 0 ? (
                <div className="h-[220px] flex items-center justify-center text-sm text-muted-foreground">
                  Aucune précommande
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={packDistribution} dataKey="value" nameKey="name" innerRadius={40} outerRadius={75} paddingAngle={2}>
                      {packDistribution.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Legend wrapperStyle={{ fontSize: "11px" }} />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Top pages visitées</CardTitle>
            <CardDescription>Basé sur les événements analytics récents</CardDescription>
          </CardHeader>
          <CardContent>
            {topPages.length === 0 ? (
              <div className="h-[180px] flex items-center justify-center text-sm text-muted-foreground">
                Aucune donnée
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={topPages} layout="vertical" margin={{ top: 5, right: 20, left: 60, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={11} allowDecimals={false} />
                  <YAxis type="category" dataKey="page" stroke="hsl(var(--muted-foreground))" fontSize={11} width={120} />
                  <RTooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">Messages de contact</CardTitle>
                <Button size="sm" variant="outline" onClick={() => downloadCsv("messages.csv", messages)} disabled={!messages.length}>
                  <Download className="w-4 h-4 mr-2" /> Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Sujet</TableHead>
                        <TableHead>Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {messages.map((m) => (
                        <TableRow key={m.id}>
                          <TableCell className="text-xs whitespace-nowrap">{fmtDate(m.created_at)}</TableCell>
                          <TableCell>{m.name}</TableCell>
                          <TableCell className="text-xs">{m.email}</TableCell>
                          <TableCell>{m.subject}</TableCell>
                          <TableCell className="text-xs max-w-md truncate">{m.message}</TableCell>
                        </TableRow>
                      ))}
                      {!loading && !messages.length && (
                        <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">Aucun message</TableCell></TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">Événements analytics récents</CardTitle>
                <Button size="sm" variant="outline" onClick={() => downloadCsv("events.csv", events)} disabled={!events.length}>
                  <Download className="w-4 h-4 mr-2" /> Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Événement</TableHead>
                        <TableHead>Catégorie</TableHead>
                        <TableHead>Page</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {events.map((e) => (
                        <TableRow key={e.id}>
                          <TableCell className="text-xs whitespace-nowrap">{fmtDate(e.created_at)}</TableCell>
                          <TableCell className="text-xs font-mono">{e.event_name}</TableCell>
                          <TableCell><Badge variant="secondary">{e.event_category ?? "—"}</Badge></TableCell>
                          <TableCell className="text-xs text-muted-foreground">{e.page_path ?? "—"}</TableCell>
                        </TableRow>
                      ))}
                      {!loading && !events.length && (
                        <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">Aucun événement enregistré</TableCell></TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
