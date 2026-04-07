import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

const SEOHead = ({ title, description, path = "" }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", `https://craft-your-vision-32.lovable.app${path}`, "property");

    // JSON-LD Organization
    const jsonLdId = "phytotech-org-jsonld";
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = jsonLdId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "EmotionsCare SASU",
      url: "https://craft-your-vision-32.lovable.app",
      logo: "https://craft-your-vision-32.lovable.app/favicon.ico",
      description: "PhytoTech Home — Kits bio-énergie utilisant plantes, algues et eau.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5 rue Caudron",
        addressLocality: "Amiens",
        postalCode: "80000",
        addressCountry: "FR",
      },
      founder: { "@type": "Person", name: "Laeticia Motongane" },
      taxID: "SIREN 944 505 445",
    });

    return () => {
      document.title = "PhytoTech Home — EmotionsCare";
    };
  }, [title, description, path]);

  return null;
};

export default SEOHead;
