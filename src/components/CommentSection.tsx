import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Trash2, Send } from "lucide-react";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

interface Comment {
  id: string;
  comment_text: string;
  created_at: string;
  user_id: string;
  profile?: { display_name: string | null };
}

const CommentSection = ({ pageSlug }: { pageSlug: string }) => {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    const { data } = await supabase
      .from("comments")
      .select("*, profile:profiles(display_name)")
      .eq("page_slug", pageSlug)
      .order("created_at", { ascending: false });
    if (data) setComments(data as any);
  };

  useEffect(() => {
    fetchComments();

    const channel = supabase
      .channel(`comments-${pageSlug}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "comments", filter: `page_slug=eq.${pageSlug}` }, () => {
        fetchComments();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [pageSlug]);

  const handlePost = async () => {
    if (!text.trim() || !user) return;
    setLoading(true);
    const { error } = await supabase.from("comments").insert({
      page_slug: pageSlug,
      user_id: user.id,
      comment_text: text.trim(),
    });
    if (error) toast.error("Erreur : " + error.message);
    else setText("");
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    await supabase.from("comments").delete().eq("id", id);
  };

  return (
    <section className="border-t py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center gap-2 mb-6">
          <MessageCircle className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-mono font-semibold">Commentaires</h2>
          <span className="text-xs text-muted-foreground font-mono">({comments.length})</span>
        </div>

        {user ? (
          <div className="mb-8 space-y-3">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Partagez votre avis…"
              className="resize-none min-h-[80px]"
            />
            <div className="flex justify-end">
              <Button
                size="sm"
                className="rounded-full gap-2"
                onClick={handlePost}
                disabled={loading || !text.trim()}
              >
                <Send className="h-3.5 w-3.5" />
                Publier
              </Button>
            </div>
          </div>
        ) : (
          <div className="mb-8 rounded-lg border border-dashed p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Connectez-vous pour commenter — c'est simple et rapide.
            </p>
          </div>
        )}

        <div className="space-y-4">
          {comments.map((c) => (
            <div key={c.id} className="rounded-lg border p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    {(c as any).profile?.display_name || "Utilisateur"}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(c.created_at), { addSuffix: true, locale: fr })}
                  </span>
                </div>
                {user?.id === c.user_id && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-destructive"
                    onClick={() => handleDelete(c.id)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
              <p className="text-sm">{c.comment_text}</p>
            </div>
          ))}
          {comments.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-4">
              Soyez le premier à commenter !
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
