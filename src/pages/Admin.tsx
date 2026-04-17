import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download, Inbox, ShoppingCart, BarChart3, Users, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <Badge variant="secondary" className="gap-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Live
          </Badge>
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
