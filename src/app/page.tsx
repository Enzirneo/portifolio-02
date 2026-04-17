"use client";

import { Navbar, Footer } from "@/shared/components/layout";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  GithubSection,
  CTASection,
} from "@/features/home/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#161616] font-(family-name:--font-geist-sans)">
      <Navbar />
      <main className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <div className="container mx-auto px-4 py-16 space-y-16 sm:px-8 sm:py-24 sm:space-y-24">
          <GithubSection />
          <SkillsSection />
          <ContactSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
