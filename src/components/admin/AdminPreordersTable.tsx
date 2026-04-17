import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { type Preorder, fmtDate, downloadCsv } from "./types";

type Props = { preorders: Preorder[]; loading: boolean };

const AdminPreordersTable = ({ preorders, loading }: Props) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="text-base">Dernières précommandes</CardTitle>
      <Button
        size="sm"
        variant="outline"
        onClick={() => downloadCsv("preorders.csv", preorders)}
        disabled={!preorders.length}
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
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  Aucune précommande
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

export default AdminPreordersTable;
