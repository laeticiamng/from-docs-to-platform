import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false, error: null };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("[ErrorBoundary] Uncaught error:", error, errorInfo);
    // Log non-blocking vers analytics_events si dispo
    try {
      void import("@/integrations/supabase/client").then(({ supabase }) => {
        supabase.from("analytics_events").insert({
          event_name: "frontend_error",
          event_category: "error",
          properties: {
            message: error.message,
            stack: error.stack?.slice(0, 1000),
            componentStack: errorInfo.componentStack?.slice(0, 1000),
          },
          page_path: typeof window !== "undefined" ? window.location.pathname : null,
          user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
        });
      });
    } catch {
      /* noop */
    }
  }

  private handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  private handleHome = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-foreground">Une erreur est survenue</h1>
              <p className="text-sm text-muted-foreground">
                L'application a rencontré un problème inattendu. Vous pouvez recharger la page ou revenir à l'accueil.
              </p>
              {import.meta.env.DEV && this.state.error && (
                <pre className="text-xs text-left bg-muted p-3 rounded-lg overflow-auto max-h-40 mt-4">
                  {this.state.error.message}
                </pre>
              )}
            </div>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={this.handleHome}>
                <Home className="w-4 h-4 mr-2" /> Accueil
              </Button>
              <Button onClick={this.handleReload}>
                <RefreshCw className="w-4 h-4 mr-2" /> Recharger
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
