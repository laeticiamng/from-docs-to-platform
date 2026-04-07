import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Trash2, Send } from "lucide-react";
import { toast } from "sonner";

interface Comment {
  id: string;
  comment_text: string;
  user_id: string;
  created_at: string;
  profile?: { display_name: string | null };
}

interface CommentSectionProps {
  pageSlug: string;
}

const CommentSection = ({ pageSlug }: CommentSectionProps) => {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    const { data } = await supabase
      .from("comments")
      .select("id, comment_text, user_id, created_at")
      .eq("page_slug", pageSlug)
      .order("created_at", { ascending: false });

    if (data) {
      // Fetch profiles for display names
      const userIds = [...new Set(data.map(c => c.user_id))];
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, display_name")
        .in("id", userIds);

      const profileMap = new Map(profiles?.map(p => [p.id, p.display_name]) || []);

      setComments(data.map(c => ({
        ...c,
        profile: { display_name: profileMap.get(c.user_id) || null }
      })));
    }
  };

  useEffect(() => {
    fetchComments();
  }, [pageSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !text.trim()) return;
    setLoading(true);

    const { error } = await supabase.from("comments").insert({
      page_slug: pageSlug,
      comment_text: text.trim(),
      user_id: user.id,
    });

    if (error) {
      toast.error("Erreur lors de l'envoi du commentaire.");
    } else {
      setText("");
      fetchComments();
    }
    setLoading(false);
  };

  const handleDelete = async (commentId: string) => {
    const { error } = await supabase.from("comments").delete().eq("id", commentId);
    if (!error) {
      setComments(prev => prev.filter(c => c.id !== commentId));
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-2 mb-8">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Commentaires ({comments.length})
          </h2>
        </div>

        {user ? (
          <form onSubmit={handleSubmit} className="mb-8">
            <Card>
              <CardContent className="p-4 space-y-3">
                <Textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Partagez votre avis, posez une question..."
                  rows={3}
                  required
                />
                <div className="flex justify-end">
                  <Button type="submit" size="sm" className="rounded-full gap-2" disabled={loading || !text.trim()}>
                    <Send className="h-3.5 w-3.5" />
                    {loading ? "Envoi..." : "Commenter"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        ) : (
          <Card className="mb-8 border-dashed">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground">
                Connectez-vous pour laisser un commentaire.
              </p>
            </CardContent>
          </Card>
        )}

        {comments.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-8">
            Aucun commentaire pour l'instant. Soyez le premier !
          </p>
        ) : (
          <div className="space-y-4">
            {comments.map((c) => (
              <Card key={c.id} className="group">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">
                          {c.profile?.display_name || "Utilisateur"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(c.created_at)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{c.comment_text}</p>
                    </div>
                    {user?.id === c.user_id && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => handleDelete(c.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
