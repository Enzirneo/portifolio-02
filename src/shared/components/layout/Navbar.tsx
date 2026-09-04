"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "@/shared/i18n/LanguageProvider";

const navItems = [
  { name: "about", href: "/#about" },
  { name: "projects", href: "/#projects" },
  { name: "skills", href: "/#skills" },
  { name: "contact", href: "/#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCvPage = pathname === "/cv";

  const { language, setLanguage, copy } = useTranslations();

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.05, rootMargin: "-20% 0px -35% 0px" }
    );

    const heroElement = document.getElementById("hero");
    if (heroElement) observer.observe(heroElement);

    navItems.forEach((item) => {
      if (item.href.startsWith("/#")) {
        const sectionId = item.href.replace("/#", "");
        const element = document.getElementById(sectionId);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isHome, pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[0]
  ) => {
    setIsMobileMenuOpen(false);

    if (isHome && item.href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = item.href.replace("/#", "");
      setActiveSection(sectionId);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);

    if (!isHome) return;

    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("hero");
  };

  const toggleLanguage = () => {
    setIsMobileMenuOpen(false);
    setLanguage(language === "pt-BR" ? "en" : "pt-BR");
  };

  const sectionLabels: Record<string, string> = {
    about: copy.nav.about,
    projects: copy.nav.projects,
    skills: copy.nav.skills,
    contact: copy.nav.contact,
  };

  const openMenuLabel = language === "pt-BR" ? "Abrir menu" : "Open menu";
  const closeMenuLabel = language === "pt-BR" ? "Fechar menu" : "Close menu";

  const pillBase =
    "relative shrink-0 rounded-full whitespace-nowrap font-semibold outline-none " +
    "transition-[transform,background-color,border-color,box-shadow,color] duration-300 " +
    "ease-[cubic-bezier(0.22,1,0.36,1)]";

  // Botao neutro (cream + borda sutil, hover no verde da marca)
  const ghostPill =
    `${pillBase} border border-black/10 bg-[#fcfaf7] text-[#161616]/72 ` +
    "hover:-translate-y-0.5 hover:border-[#2f6b57]/40 hover:text-[#2f6b57] " +
    "hover:shadow-[0_0_0_1px_rgba(47,107,87,0.12)] " +
    "focus-visible:border-[#2f6b57]/50 focus-visible:text-[#2f6b57] active:scale-[0.97]";

  // Botao verde solido (CV, ou CTA)
  const solidPill =
    `${pillBase} border border-transparent bg-[#2f6b57] text-white ` +
    "shadow-[0_10px_24px_rgba(47,107,87,0.22)] hover:-translate-y-0.5 hover:bg-[#356f5c] " +
    "hover:shadow-[0_12px_28px_rgba(47,107,87,0.28)] active:scale-[0.97]";

  const cvClass = (mobile: boolean) => {
    const size = mobile ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-sm";
    return `${isCvPage ? solidPill : ghostPill} ${size} ${isCvPage ? "" : "text-[#161616]"}`;
  };
  const langClass = (mobile: boolean) =>
    `${ghostPill} ${mobile ? "px-4 py-2 text-sm" : "px-4 py-2.5 text-sm"}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-70">
      <div className="mx-2 mt-2 sm:mx-4 sm:mt-4">
        <div className="max-w-5xl mx-auto rounded-[1.75rem] px-3 py-3 sm:rounded-full sm:px-6 sm:py-3 bg-white/80 backdrop-blur-md border border-black/5 shadow-sm transition-colors duration-500 hover:bg-white/90">
          <div className="relative z-80 flex items-center justify-between gap-3 sm:hidden">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="text-lg font-black tracking-tight uppercase shrink-0 text-black transition-colors duration-300 hover:text-accent"
            >
              enzo b<span className="text-accent">.</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-label={isMobileMenuOpen ? closeMenuLabel : openMenuLabel}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              className="relative z-90 flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white/85 text-black transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#2f6b57]/30 hover:bg-white"
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-black transition-all duration-500 ${
                    isMobileMenuOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-black transition-all duration-500 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-black transition-all duration-500 ${
                    isMobileMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="text-xl font-black tracking-tight uppercase shrink-0 text-black transition-colors duration-300 hover:text-accent"
            >
              enzo b<span className="text-accent">.</span>
            </Link>

            <span
              aria-hidden="true"
              className="h-5 w-px shrink-0 rounded-full bg-black/12"
            />

            <div className="min-w-0 flex-1 flex items-center justify-end gap-2">
              <div className="min-w-0 flex items-center gap-2 overflow-x-auto overflow-y-visible no-scrollbar pr-0.5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item)}
                    className={`relative capitalize text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap ${
                      activeSection === item.name
                        ? "text-white bg-[#2f6b57] shadow-[0_8px_20px_rgba(47,107,87,0.22)]"
                        : "text-black/70 hover:text-[#2f6b57] hover:bg-[#2f6b57]/8"
                    }`}
                  >
                    {sectionLabels[item.name] ?? item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/cv"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cvClass(false)}
                >
                  {copy.nav.cv}
                </Link>

                <button
                  type="button"
                  onClick={toggleLanguage}
                  aria-label={copy.nav.languageToggle}
                  title={copy.nav.languageToggle}
                  className={langClass(false)}
                >
                  {language === "pt-BR" ? "EN" : "PT"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`pointer-events-none fixed inset-0 z-60 transition-[visibility] duration-500 sm:hidden ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          aria-label={closeMenuLabel}
          onClick={() => setIsMobileMenuOpen(false)}
          className={`pointer-events-auto absolute inset-x-0 bottom-0 top-[4.9rem] bg-[rgba(247,243,238,0.62)] backdrop-blur-[6px] transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          id="mobile-nav-drawer"
          className={`pointer-events-auto absolute bottom-2 right-2 top-[4.9rem] flex w-[min(64vw,352px)] min-w-63 max-w-[84vw] flex-col overflow-y-auto rounded-[1.75rem] border border-black/8 bg-[#fcfaf7] px-6 pb-8 pt-6 shadow-[-28px_0_64px_rgba(15,23,42,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-[104%]"
          }`}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 self-start">
              <Link
                href="/cv"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cvClass(true)}
              >
                {copy.nav.cv}
              </Link>

              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={copy.nav.languageToggle}
                title={copy.nav.languageToggle}
                className={langClass(true)}
              >
                {language === "pt-BR" ? "EN" : "PT"}
              </button>
            </div>

            <div className="flex flex-col">
              {navItems.map((item) => {
                const isActive = activeSection === item.name;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item)}
                    className={`border-b border-black/10 py-6 text-[1.65rem] font-semibold tracking-tight capitalize transition-colors duration-300 ${
                      isActive ? "text-[#2f6b57]" : "text-[#161616]/85 hover:text-[#2f6b57]"
                    }`}
                  >
                    {sectionLabels[item.name] ?? item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-end border-t border-black/10 pt-6">
            <span className="text-[0.72rem] font-medium tracking-[0.18em] text-[#161616]/30">
              ~/portifolio-enzo-bispo.vercel.app
            </span>
          </div>
        </aside>
      </div>
    </nav>
  );
}
