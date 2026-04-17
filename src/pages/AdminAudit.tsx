import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Inbox, ShoppingCart, AlertTriangle, Mail, FileText, ExternalLink, BarChart3 } from "lucide-react";
import EmailDeliveryPanel from "@/components/admin/EmailDeliveryPanel";
import ChangelogTimeline from "@/components/admin/ChangelogTimeline";
import { isPostHogConfigured } from "@/lib/posthog";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

type RateLimit = {
  id: string;
  identifier: string;
  action: string;
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

type Preorder = {
  id: string;
  name: string;
  email: string;
  pack: string;
  message: string | null;
  created_at: string;
};

const fmt = (iso: string) => new Date(iso).toLocaleString("fr-FR");

const AdminAudit = () => {
  const [rateLimits, setRateLimits] = useState<RateLimit[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [preorders, setPreorders] = useState<Preorder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [rl, msg, pre] = await Promise.all([
        supabase.from("rate_limits").select("*").order("created_at", { ascending: false }).limit(200),
        supabase.from("contact_messages").select("*").order("created_at", { ascending: false }).limit(200),
        supabase.from("preorders").select("*").order("created_at", { ascending: false }).limit(200),
      ]);
      if (rl.data) setRateLimits(rl.data as RateLimit[]);
      if (msg.data) setMessages(msg.data as ContactMessage[]);
      if (pre.data) setPreorders(pre.data as Preorder[]);
      setLoading(false);
    };
    void load();
  }, []);

  // Détection abus : > 3 tentatives même IP/action en 1h
  const suspiciousActivity = rateLimits.reduce<Record<string, number>>((acc, r) => {
    const key = `${r.identifier}::${r.action}`;
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
  const suspicious = Object.entries(suspiciousActivity).filter(([, n]) => n >= 3);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Audit & Monitoring — Admin"
        description="Surveillance gouvernance, anti-spam et conformité"
        noIndex
      />
      <div className="container mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <Button variant="ghost" size="sm" asChild className="mb-2">
              <Link to="/admin"><ArrowLeft className="w-4 h-4 mr-2" /> Retour au dashboard</Link>
            </Button>
            <h1 className="text-3xl font-semibold tracking-tight flex items-center gap-2">
              <Shield className="w-7 h-7 text-primary" /> Audit & Gouvernance
            </h1>
            <p className="text-sm text-muted-foreground">Surveillance opérationnelle — accès admin uniquement</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {isPostHogConfigured() && (
              <Button variant="outline" size="sm" asChild>
                <a href="https://eu.posthog.com" target="_blank" rel="noopener noreferrer">
                  <BarChart3 className="w-4 h-4 mr-1.5" /> PostHog <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            )}
            {suspicious.length > 0 && (
              <Badge variant="destructive" className="gap-1">
                <AlertTriangle className="w-3 h-3" /> {suspicious.length} alerte(s) abus
              </Badge>
            )}
          </div>
        </div>

        {suspicious.length > 0 && (
          <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-destructive">
                <AlertTriangle className="w-4 h-4" /> Activité suspecte détectée
              </CardTitle>
              <CardDescription>Identifiants avec ≥ 3 tentatives sur la même action</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm font-mono">
                {suspicious.map(([key, count]) => (
                  <li key={key} className="flex items-center justify-between border-b border-border/40 py-1">
                    <span className="truncate">{key}</span>
                    <Badge variant="destructive">{count}</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="ratelimits">
          <TabsList>
            <TabsTrigger value="ratelimits" className="gap-2">
              <Shield className="w-4 h-4" /> Rate limits ({rateLimits.length})
            </TabsTrigger>
            <TabsTrigger value="messages" className="gap-2">
              <Inbox className="w-4 h-4" /> Messages ({messages.length})
            </TabsTrigger>
            <TabsTrigger value="preorders" className="gap-2">
              <ShoppingCart className="w-4 h-4" /> Précommandes ({preorders.length})
            </TabsTrigger>
            <TabsTrigger value="emails" className="gap-2">
              <Mail className="w-4 h-4" /> Email Delivery
            </TabsTrigger>
            <TabsTrigger value="changelog" className="gap-2">
              <FileText className="w-4 h-4" /> Changelog
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ratelimits" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tentatives récentes (anti-spam)</CardTitle>
                <CardDescription>Limite : 5 tentatives / heure / IP par action</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Identifiant (IP)</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rateLimits.map((r) => (
                        <TableRow key={r.id}>
                          <TableCell className="text-xs whitespace-nowrap">{fmt(r.created_at)}</TableCell>
                          <TableCell className="text-xs font-mono">{r.identifier}</TableCell>
                          <TableCell><Badge variant="outline">{r.action}</Badge></TableCell>
                        </TableRow>
                      ))}
                      {!loading && !rateLimits.length && (
                        <TableRow><TableCell colSpan={3} className="text-center text-muted-foreground py-8">Aucune tentative enregistrée</TableCell></TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Messages de contact</CardTitle>
                <CardDescription>Lecture seule — données protégées par RLS admin</CardDescription>
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
                          <TableCell className="text-xs whitespace-nowrap">{fmt(m.created_at)}</TableCell>
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

          <TabsContent value="preorders" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Précommandes reçues</CardTitle>
                <CardDescription>Lecture seule — données protégées par RLS admin</CardDescription>
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
                          <TableCell className="text-xs whitespace-nowrap">{fmt(p.created_at)}</TableCell>
                          <TableCell>{p.name}</TableCell>
                          <TableCell className="text-xs">{p.email}</TableCell>
                          <TableCell><Badge variant="outline">{p.pack}</Badge></TableCell>
                          <TableCell className="text-xs max-w-md truncate">{p.message ?? "—"}</TableCell>
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

          <TabsContent value="emails" className="mt-4">
            <EmailDeliveryPanel />
          </TabsContent>

          <TabsContent value="changelog" className="mt-4">
            <ChangelogTimeline />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminAudit;
