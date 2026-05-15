import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

/**
 * Smooth scroll global via Lenis + gestion des ancres (#section)
 * et compatibilité modals (Radix Dialog/Sheet ajoutent overflow:hidden au body).
 * Désactivé automatiquement si l'utilisateur a `prefers-reduced-motion`.
 */
const SmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    // Expose pour usages ponctuels (anchors, scrollTo programmatique)
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Intercepte les liens d'ancre internes pour scroller via Lenis
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80 });
      history.replaceState(null, "", href);
    };
    document.addEventListener("click", onAnchorClick);

    // Pause Lenis quand un modal Radix est ouvert (data-state="open" sur body via [data-scroll-locked])
    const observer = new MutationObserver(() => {
      const locked = document.body.hasAttribute("data-scroll-locked") ||
                     document.documentElement.style.overflow === "hidden";
      if (locked) lenis.stop();
      else lenis.start();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-scroll-locked", "style"] });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });

    return () => {
      document.removeEventListener("click", onAnchorClick);
      observer.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // Hash sur navigation (initial ou changement de route)
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash;
    // Laisse le DOM se peindre
    const t = setTimeout(() => {
      const el = document.querySelector(id);
      if (!el) return;
      const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
      if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -80 });
      else (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(t);
  }, [location.pathname, location.hash]);

  return null;
};

export default SmoothScroll;
