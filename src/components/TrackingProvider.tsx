import { useTracking } from "@/hooks/useTracking";

/**
 * Composant invisible qui active le tracking automatique des pageviews.
 * Doit être monté à l'intérieur du BrowserRouter.
 */
const TrackingProvider = () => {
  useTracking("site");
  return null;
};

export default TrackingProvider;
