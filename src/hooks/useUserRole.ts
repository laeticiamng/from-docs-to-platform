import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export type AppRole = "admin" | "moderator" | "user";

export const useUserRole = () => {
  const { user, loading: authLoading } = useAuth();
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fetchRoles = async () => {
      if (!user) {
        setRoles([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id);
      if (cancelled) return;
      if (error) {
        // eslint-disable-next-line no-console
        console.error("[useUserRole]", error);
        setRoles([]);
      } else {
        setRoles((data ?? []).map((r) => r.role as AppRole));
      }
      setLoading(false);
    };
    if (!authLoading) void fetchRoles();
    return () => {
      cancelled = true;
    };
  }, [user, authLoading]);

  return {
    roles,
    loading: loading || authLoading,
    isAdmin: roles.includes("admin"),
    isModerator: roles.includes("moderator"),
    hasRole: (role: AppRole) => roles.includes(role),
  };
};
