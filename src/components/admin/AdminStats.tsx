import { ShoppingCart, Inbox, BarChart3, Users, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Preorder, ContactMessage, AnalyticsEvent } from "./types";

type Props = {
  preorders: Preorder[];
  messages: ContactMessage[];
  events: AnalyticsEvent[];
  loading: boolean;
};

const AdminStats = ({ preorders, messages, events, loading }: Props) => {
  const stats: { label: string; value: number; icon: LucideIcon }[] = [
    { label: "Précommandes", value: preorders.length, icon: ShoppingCart },
    { label: "Messages contact", value: messages.length, icon: Inbox },
    { label: "Événements analytics", value: events.length, icon: BarChart3 },
    { label: "Sources uniques", value: new Set(events.map((e) => e.page_path)).size, icon: Users },
  ];

  return (
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
  );
};

export default AdminStats;
