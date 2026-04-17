import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { wireConsentToPostHog } from "./lib/posthog";

wireConsentToPostHog();

createRoot(document.getElementById("root")!).render(<App />);
