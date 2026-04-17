import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { type ContactMessage, fmtDate, downloadCsv } from "./types";

type Props = { messages: ContactMessage[]; loading: boolean };

const AdminMessagesTable = ({ messages, loading }: Props) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="text-base">Messages de contact</CardTitle>
      <Button
        size="sm"
        variant="outline"
        onClick={() => downloadCsv("messages.csv", messages)}
        disabled={!messages.length}
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
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  Aucun message
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

export default AdminMessagesTable;
