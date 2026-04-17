"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "@/shared/i18n/LanguageProvider";

export function HeroSection() {
  const { copy, language } = useTranslations();
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const firstWordRef = useRef<HTMLSpanElement>(null);
  const secondWordRef = useRef<HTMLSpanElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const roles = copy.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [showAboutHint, setShowAboutHint] = useState(false);
  const availabilityBadge =
    copy.hero.badge || (language === "pt-BR" ? "Disponível para trabalhos" : "Available for work");

  const aboutHintLabel = language === "pt-BR" ? "Sobre" : "About";

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          titleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            skewY: 5,
          },
          "-=0.4"
        )
        .from(
          roleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          quoteRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        ;
    },
    { scope: containerRef }
  );

  useEffect(() => {
    let frameId: number | null = null;

    const getRoleTargets = () =>
      [firstWordRef.current, secondWordRef.current].filter(
        (target): target is HTMLSpanElement => target !== null
      );

    const animateRole = () => {
      const targets = getRoleTargets();
      if (targets.length === 0) return;

      gsap.to(targets, {
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          setRoleIndex((prev) => (prev + 1) % roles.length);

          frameId = window.requestAnimationFrame(() => {
            const nextTargets = getRoleTargets();
            if (nextTargets.length === 0) return;

            gsap.fromTo(
              nextTargets,
              { opacity: 0, y: -20 },
              { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
            );
          });
        },
      });
    };

    const intervalId = window.setInterval(animateRole, 2400);
    return () => {
      window.clearInterval(intervalId);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      gsap.killTweensOf(getRoleTargets());
    };
  }, [roles.length]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setRoleIndex(0);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, [language]);

  useEffect(() => {
    let frameId: number | null = null;

    const updateAboutHint = () => {
      const hero = containerRef.current;
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const heroHeight = Math.max(hero.offsetHeight, window.innerHeight, 1);
      const scrolledInsideHero = Math.max(0, -rect.top);
      const progress = scrolledInsideHero / heroHeight;
      const shouldShow =
        scrolledInsideHero > 56 &&
        rect.bottom > window.innerHeight * 0.18 &&
        progress < 0.78;

      setShowAboutHint(shouldShow);
      frameId = null;
    };

    const requestUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateAboutHint);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative z-10 flex min-h-[100svh] items-center justify-center overflow-visible bg-[#f7f3ee] px-4 pt-20 sm:min-h-dvh sm:px-6 sm:pt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[16px_16px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:hidden bg-[linear-gradient(180deg,rgba(247,243,238,0)_0%,rgba(247,243,238,0.12)_58%,rgba(247,243,238,0.28)_100%)]" />
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <button
          ref={badgeRef}
          type="button"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group mb-5 inline-flex cursor-default items-center gap-3.5 rounded-full border border-black/6 bg-white/78 px-5 py-2.5 shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-all sm:mb-8 sm:px-7 sm:py-3"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-sm" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <span className="text-[11px] sm:text-xs font-black text-black/80 uppercase tracking-[0.08em]">
            {availabilityBadge}
          </span>
        </button>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-4 sm:mb-6 tracking-tight leading-[0.95] text-black"
        >
          Enzo{" "}
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-[#2f6b57] via-[#3b7d66] to-[#7fa08f] pr-0 block sm:inline sm:pr-4">
            Bispo
          </span>
        </h1>

        <p
          ref={roleRef}
          className="mb-5 flex flex-wrap items-baseline justify-center gap-2 text-xl font-semibold tracking-tight text-[#2f6b57] sm:mb-6 sm:gap-3 sm:text-4xl md:text-5xl"
        >
          <span ref={firstWordRef}>{roles[roleIndex]?.first}</span>
          <span ref={secondWordRef} className="text-black">
            {roles[roleIndex]?.second}
          </span>
        </p>

        <p
          ref={quoteRef}
          className="mx-auto mb-7 max-w-xl text-[0.95rem] font-medium leading-relaxed text-gray-700 sm:mb-12 sm:max-w-2xl sm:text-lg"
        >
          {copy.hero.quote}
        </p>

        <div
          ref={ctaRef}
          className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-6"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-base font-bold text-white shadow-lg shadow-black/20 transition-all hover:bg-gray-800 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            {copy.hero.ctaPrimary}
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-black/5 px-6 py-3 text-base font-bold text-black transition-all hover:-translate-y-1 hover:border-black/20 hover:bg-black/10 sm:w-auto sm:px-8 sm:text-lg"
          >
            {copy.hero.ctaSecondary}
          </a>
        </div>

      </div>

      <button
        type="button"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        aria-label={aboutHintLabel}
        className={`fixed bottom-4 left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-[11px] font-semibold tracking-[0.08em] text-black/75 uppercase shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 sm:bottom-6 sm:px-4 sm:py-2.5 ${
          showAboutHint
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white sm:h-6 sm:w-6">
          ↓
        </span>
        <span>{aboutHintLabel}</span>
      </button>
    </section>
  );
}
