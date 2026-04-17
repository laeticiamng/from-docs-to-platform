import { useMemo } from "react";
import { TrendingUp } from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Preorder, AnalyticsEvent } from "./types";

type Props = {
  preorders: Preorder[];
  events: AnalyticsEvent[];
};

const tooltipStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "8px",
  fontSize: "12px",
};

const AdminCharts = ({ preorders, events }: Props) => {
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
      day: day.slice(5),
      events: count,
    }));
  }, [events]);

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

  const packDistribution = useMemo(() => {
    const map = new Map<string, number>();
    preorders.forEach((p) => map.set(p.pack, (map.get(p.pack) ?? 0) + 1));
    const colors = [
      "hsl(var(--primary))",
      "hsl(var(--secondary))",
      "hsl(var(--accent))",
      "hsl(var(--muted))",
      "hsl(var(--destructive))",
    ];
    return Array.from(map.entries()).map(([name, value], i) => ({
      name,
      value,
      fill: colors[i % colors.length],
    }));
  }, [preorders]);

  return (
    <div className="space-y-4">
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
                <RTooltip contentStyle={tooltipStyle} />
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
                  <Pie
                    data={packDistribution}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={40}
                    outerRadius={75}
                    paddingAngle={2}
                  >
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
                <RTooltip contentStyle={tooltipStyle} />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCharts;
