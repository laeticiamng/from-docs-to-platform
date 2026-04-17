import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RATE_WINDOW_MIN = 60;
const RATE_MAX = 5;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim().slice(0, 100);
    const email = String(body.email ?? "").trim().slice(0, 255);
    const subject = String(body.subject ?? "Question générale").trim().slice(0, 100);
    const message = String(body.message ?? "").trim().slice(0, 2000);

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Champs requis manquants" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Email invalide" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const identifier = `${ip}:${email.toLowerCase()}`;

    const { data: allowed, error: rlErr } = await supabase.rpc("check_rate_limit", {
      _identifier: identifier,
      _action: "contact",
      _window_minutes: RATE_WINDOW_MIN,
      _max_attempts: RATE_MAX,
    });
    if (rlErr) throw rlErr;
    if (!allowed) {
      return new Response(JSON.stringify({ error: "Trop de soumissions. Réessayez plus tard." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: inserted, error } = await supabase
      .from("contact_messages")
      .insert({ name, email, subject, message })
      .select("id")
      .single();
    if (error) throw error;

    const ADMIN_EMAIL = "m.laeticia@hotmail.fr";
    const sendEmail = (templateName: string, recipientEmail: string, idempotencyKey: string, templateData: Record<string, unknown>) =>
      supabase.functions.invoke("send-transactional-email", {
        body: { templateName, recipientEmail, idempotencyKey, templateData },
      }).catch((err) => console.error(`[email:${templateName}]`, err));

    void sendEmail("contact-ack", email, `contact-ack-${inserted.id}`, { name, subject });
    void sendEmail("admin-alert", ADMIN_EMAIL, `admin-contact-${inserted.id}`, {
      alertType: "Nouveau message contact",
      fromName: name,
      fromEmail: email,
      details: `${subject} — ${message.slice(0, 200)}`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
