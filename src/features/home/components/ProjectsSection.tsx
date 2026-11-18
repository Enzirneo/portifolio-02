"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/shared/data/projects";
import { useTranslations } from "@/shared/i18n/LanguageProvider";
import { CompactProjectCard } from "./projects/CompactProjectCard";
import { FeaturedProjectCard } from "./projects/FeaturedProjectCard";

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ProjectsSection() {
  const { copy } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-[#f1eadb] px-4 py-24 selection:bg-black/10 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={titleRef} className="mb-14 text-center sm:mb-24">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-sm font-bold tracking-[0.22em] text-black/68 uppercase">
              {copy.projects.label}
            </span>
            <h2 className="relative z-10 text-4xl font-semibold tracking-tighter text-[#171717] uppercase sm:text-6xl md:text-7xl">
              {copy.projects.titlePrimary}{" "}
              <span className="bg-linear-to-r from-[#2f6b57] via-[#3b7d66] to-[#7fa08f] bg-clip-text font-serif font-normal text-transparent normal-case italic">
                {copy.projects.titleAccent}
              </span>
            </h2>
          </div>
          <div className="mx-auto mt-5 h-px w-24 rounded-full bg-[#2f6b57]/35 sm:mt-6 sm:w-28" />
        </div>

        <div className="flex flex-col gap-16 sm:gap-24 md:gap-32">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.name}
              project={project}
              isVisualFirst={index % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-24 sm:mt-32">
          <h3 className="mb-8 text-center text-sm font-bold tracking-[0.22em] text-black/68 uppercase">
            {copy.projects.othersTitle}
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherProjects.map((project) => (
              <CompactProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        <p className="mt-20 text-center text-black/60 sm:mt-28">{copy.projects.footer}</p>
      </div>
    </section>
  );
}
