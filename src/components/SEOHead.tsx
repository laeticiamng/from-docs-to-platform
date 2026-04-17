import { useEffect } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  faqItems?: FAQItem[];
}

const SITE_URL = "https://craft-your-vision-32.lovable.app";

const SEOHead = ({ title, description, path = "", noIndex = false, faqItems }: SEOHeadProps) => {
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

    const canonicalUrl = `${SITE_URL}${path}`;

    setMeta("description", description);
    setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // JSON-LD: Organization + WebSite
    const orgId = "phytotech-org-jsonld";
    let orgScript = document.getElementById(orgId) as HTMLScriptElement | null;
    if (!orgScript) {
      orgScript = document.createElement("script");
      orgScript.id = orgId;
      orgScript.type = "application/ld+json";
      document.head.appendChild(orgScript);
    }
    orgScript.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "EmotionsCare SASU",
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.ico`,
        description: "PhytoTech Home — Kits bio-énergie utilisant plantes, algues et eau.",
        brand: { "@type": "Brand", name: "PhytoTech Home" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "5 rue Caudron",
          addressLocality: "Amiens",
          postalCode: "80000",
          addressCountry: "FR",
        },
        founder: { "@type": "Person", name: "Laeticia Motongane" },
        taxID: "SIREN 944 505 445",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "PhytoTech Home",
        url: SITE_URL,
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: canonicalUrl,
      },
    ]);

    // JSON-LD: FAQPage (optional)
    const faqId = "phytotech-faq-jsonld";
    let faqScript = document.getElementById(faqId) as HTMLScriptElement | null;
    if (faqItems && faqItems.length > 0) {
      if (!faqScript) {
        faqScript = document.createElement("script");
        faqScript.id = faqId;
        faqScript.type = "application/ld+json";
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      });
    } else if (faqScript) {
      faqScript.remove();
    }

    return () => {
      document.title = "PhytoTech Home — EmotionsCare";
    };
  }, [title, description, path, noIndex, faqItems]);

  return null;
};

export default SEOHead;
