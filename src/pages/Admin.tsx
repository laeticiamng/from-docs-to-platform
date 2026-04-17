import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import AdminStats from "@/components/admin/AdminStats";
import AdminCharts from "@/components/admin/AdminCharts";
import AdminPreordersTable from "@/components/admin/AdminPreordersTable";
import AdminMessagesTable from "@/components/admin/AdminMessagesTable";
import AdminEventsTable from "@/components/admin/AdminEventsTable";
import type { Preorder, ContactMessage, AnalyticsEvent } from "@/components/admin/types";

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

        <AdminStats preorders={preorders} messages={messages} events={events} loading={loading} />

        <AdminCharts preorders={preorders} events={events} />

        <Tabs defaultValue="preorders">
          <TabsList>
            <TabsTrigger value="preorders">Précommandes ({preorders.length})</TabsTrigger>
            <TabsTrigger value="messages">Messages ({messages.length})</TabsTrigger>
            <TabsTrigger value="events">Analytics ({events.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="preorders" className="mt-4">
            <AdminPreordersTable preorders={preorders} loading={loading} />
          </TabsContent>

          <TabsContent value="messages" className="mt-4">
            <AdminMessagesTable messages={messages} loading={loading} />
          </TabsContent>

          <TabsContent value="events" className="mt-4">
            <AdminEventsTable events={events} loading={loading} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
