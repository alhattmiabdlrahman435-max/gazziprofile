import { useEffect } from "react";
import { useLocation } from "wouter";

export default function RouteEffects() {
  const [location] = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const main = document.getElementById("main-content");
    if (!prefersReduced) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
    // Focus main content for accessibility
    main?.focus();
  }, [location]);

  return null;
}

