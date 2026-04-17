import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { type AnalyticsEvent, fmtDate, downloadCsv } from "./types";

type Props = { events: AnalyticsEvent[]; loading: boolean };

const AdminEventsTable = ({ events, loading }: Props) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="text-base">Événements analytics récents</CardTitle>
      <Button
        size="sm"
        variant="outline"
        onClick={() => downloadCsv("events.csv", events)}
        disabled={!events.length}
      >
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
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                  Aucun événement enregistré
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

export default AdminEventsTable;
