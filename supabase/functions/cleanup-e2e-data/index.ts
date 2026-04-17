/**
 * Edge function de nettoyage des données de test E2E.
 * Supprime les rows insérées par les specs Playwright (emails matchant un pattern).
 * Protégée par un secret partagé E2E_CLEANUP_TOKEN.
 *
 * Usage : POST avec header `x-e2e-token: <secret>` et body { pattern: "e2e+%@phytotech.test" }
 */
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-e2e-token",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ALLOWED_TABLES = ["preorders", "contact_messages", "analytics_events"] as const;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const expected = Deno.env.get("E2E_CLEANUP_TOKEN");
  const provided = req.headers.get("x-e2e-token");
  if (!expected || !provided || provided !== expected) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let body: { pattern?: string } = {};
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid json" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const pattern = (body.pattern ?? "").trim();
  if (!pattern || !pattern.includes("e2e")) {
    return new Response(
      JSON.stringify({ error: "pattern must include 'e2e' to prevent accidental deletion" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );

  const results: Record<string, number | string> = {};
  for (const table of ALLOWED_TABLES) {
    const column = table === "analytics_events" ? "session_id" : "email";
    const { error, count } = await supabase
      .from(table)
      .delete({ count: "exact" })
      .like(column, pattern);
    results[table] = error ? `error: ${error.message}` : (count ?? 0);
  }

  return new Response(JSON.stringify({ ok: true, deleted: results }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
