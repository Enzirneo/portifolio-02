"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const prefersNativeTouchScroll =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches ||
      navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || prefersNativeTouchScroll) {
      document.documentElement.classList.remove("lenis");
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
      autoRaf: true,
    });

    const onHashChange = () => {
      requestAnimationFrame(() => lenis.resize());
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      document.body.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
    };
  }, []);

  return null;
}
