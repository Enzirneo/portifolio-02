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

  // CV não deve forçar modo claro
  const isLightMode = true;

  const sectionLabels: Record<string, string> = {
    about: copy.nav.about,
    projects: copy.nav.projects,
    skills: copy.nav.skills,
    contact: copy.nav.contact,
  };

  const openMenuLabel = language === "pt-BR" ? "Abrir menu" : "Open menu";
  const closeMenuLabel = language === "pt-BR" ? "Fechar menu" : "Close menu";

  const neoButtonBase =
    "relative shrink-0 rounded-full border border-transparent whitespace-nowrap font-semibold outline-none " +
    "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform";
  
  const cvButtonLight =
    `${neoButtonBase} px-5 py-2.5 text-sm bg-[#eef2f7] text-slate-700 ` +
    "shadow-[-4px_-4px_10px_rgba(255,255,255,0.9),4px_4px_10px_rgba(163,177,198,0.2)] " +
    "hover:text-slate-800 hover:shadow-[-5px_-5px_12px_rgba(255,255,255,0.94),5px_5px_12px_rgba(163,177,198,0.24)]";
  
  const cvButtonLightActive =
    `${neoButtonBase} px-5 py-2.5 text-sm bg-[#eef2f7] text-slate-800 ` +
    "shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.92),inset_3px_3px_7px_rgba(163,177,198,0.24)] " +
    "scale-[0.985]";
  
  const langButtonLight =
    `${neoButtonBase} px-4 py-2.5 text-sm bg-[#eef2f7] text-slate-600 ` +
    "shadow-[-4px_-4px_10px_rgba(255,255,255,0.88),4px_4px_10px_rgba(163,177,198,0.18)] " +
    "hover:text-slate-800 hover:shadow-[-5px_-5px_12px_rgba(255,255,255,0.92),5px_5px_12px_rgba(163,177,198,0.22)] " +
    "active:shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.9),inset_3px_3px_7px_rgba(163,177,198,0.22)] active:scale-[0.985]";
  
  const cvButtonDark =
    `${neoButtonBase} px-5 py-2.5 text-sm bg-[#0f172a] text-white/90 ` +
    "shadow-[-6px_-6px_14px_rgba(255,255,255,0.06),6px_6px_14px_rgba(0,0,0,0.42)] " +
    "hover:text-white hover:shadow-[-7px_-7px_16px_rgba(255,255,255,0.075),7px_7px_16px_rgba(0,0,0,0.48)]";
  
  const cvButtonDarkActive =
    `${neoButtonBase} px-5 py-2.5 text-sm bg-[#0f172a] text-white ` +
    "shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.06),inset_5px_5px_10px_rgba(0,0,0,0.56)] " +
    "scale-[0.982]";
  
  const langButtonDark =
    `${neoButtonBase} px-4 py-2.5 text-sm bg-[#0f172a] text-white/78 ` +
    "shadow-[-6px_-6px_14px_rgba(255,255,255,0.05),6px_6px_14px_rgba(0,0,0,0.38)] " +
    "hover:text-white/95 hover:shadow-[-7px_-7px_16px_rgba(255,255,255,0.065),7px_7px_16px_rgba(0,0,0,0.44)] " +
    "active:shadow-[inset_-4px_-4px_9px_rgba(255,255,255,0.05),inset_4px_4px_9px_rgba(0,0,0,0.5)] active:scale-[0.985]";
  
  const mobileCvButtonLight =
    `${neoButtonBase} px-4 py-2 text-sm bg-[#eef2f7] text-slate-700 ` +
    "shadow-[-4px_-4px_10px_rgba(255,255,255,0.9),4px_4px_10px_rgba(163,177,198,0.2)]";
  
  const mobileCvButtonLightActive =
    `${neoButtonBase} px-4 py-2 text-sm bg-[#eef2f7] text-slate-800 ` +
    "shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.92),inset_3px_3px_7px_rgba(163,177,198,0.24)] scale-[0.985]";
  
  const mobileLangButtonLight =
    `${neoButtonBase} px-4 py-2 text-sm bg-[#eef2f7] text-slate-600 ` +
    "shadow-[-4px_-4px_10px_rgba(255,255,255,0.88),4px_4px_10px_rgba(163,177,198,0.18)] " +
    "active:shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.9),inset_3px_3px_7px_rgba(163,177,198,0.22)] active:scale-[0.985]";
  
  const mobileCvButtonDark =
    `${neoButtonBase} px-4 py-2 text-sm bg-[#0f172a] text-white/90 ` +
    "shadow-[-6px_-6px_14px_rgba(255,255,255,0.06),6px_6px_14px_rgba(0,0,0,0.42)]";
  
  const mobileCvButtonDarkActive =
    `${neoButtonBase} px-4 py-2 text-sm bg-[#0f172a] text-white ` +
    "shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.06),inset_5px_5px_10px_rgba(0,0,0,0.56)] scale-[0.982]";
  
  const mobileLangButtonDark =
    `${neoButtonBase} px-4 py-2 text-sm bg-[#0f172a] text-white/78 ` +
    "shadow-[-6px_-6px_14px_rgba(255,255,255,0.05),6px_6px_14px_rgba(0,0,0,0.38)] " +
    "active:shadow-[inset_-4px_-4px_9px_rgba(255,255,255,0.05),inset_4px_4px_9px_rgba(0,0,0,0.5)] active:scale-[0.985]";
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-70">
      <div className="mx-2 mt-2 sm:mx-4 sm:mt-4">
        <div
          className={`max-w-5xl mx-auto rounded-[1.75rem] px-3 py-3 sm:rounded-full sm:px-6 sm:py-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isLightMode
              ? "bg-white/80 backdrop-blur-md border border-black/5 shadow-sm hover:bg-white/90"
              : "glass hover:bg-black/80"
          }`}
        >
          <div className="relative z-80 flex items-center justify-between gap-3 sm:hidden">
            <Link
              href="/"
              onClick={handleLogoClick}
              className={`text-lg font-black tracking-tight transition-colors duration-500 uppercase shrink-0 ${
                isLightMode ? "text-black hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              enzo b<span className="text-accent">.</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-label={isMobileMenuOpen ? closeMenuLabel : openMenuLabel}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              className={`relative z-90 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isLightMode
                  ? "border-black/8 bg-white/85 text-black hover:bg-white"
                  : "border-white/10 bg-white/6 text-white hover:bg-white/10"
              }`}
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 rounded-full transition-all duration-500 ${
                    isMobileMenuOpen ? "top-[7px] rotate-45" : ""
                  } ${isLightMode ? "bg-black" : "bg-white"}`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full transition-all duration-500 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  } ${isLightMode ? "bg-black" : "bg-white"}`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full transition-all duration-500 ${
                    isMobileMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
                  } ${isLightMode ? "bg-black" : "bg-white"}`}
                />
              </span>
            </button>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/"
              onClick={handleLogoClick}
              className={`text-xl font-black tracking-tight transition-colors duration-500 uppercase shrink-0 ${
                isLightMode ? "text-black hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              enzo b<span className="text-accent">.</span>
            </Link>

            <span
              aria-hidden="true"
              className={`h-5 w-px shrink-0 rounded-full transition-colors duration-500 ${
                isLightMode ? "bg-black/12" : "bg-white/14"
              }`}
            />

            <div className="min-w-0 flex-1 flex items-center justify-end gap-2">
              <div className="min-w-0 flex items-center gap-2 overflow-x-auto overflow-y-visible no-scrollbar pr-0.5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item)}
                    className={`relative capitalize text-sm font-medium px-4 py-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap ${
                      activeSection === item.name
                        ? isLightMode
                          ? "text-white bg-black"
                          : "text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        : isLightMode
                          ? "text-black/70 hover:text-black hover:bg-black/5"
                          : "text-white/70 hover:text-white hover:bg-white/10"
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
                  className={
                    isCvPage
                      ? isLightMode
                        ? cvButtonLightActive
                        : cvButtonDarkActive
                      : isLightMode
                        ? cvButtonLight
                        : cvButtonDark
                  }
                >
                  {copy.nav.cv}
                </Link>

                <button
                  type="button"
                  onClick={toggleLanguage}
                  aria-label={copy.nav.languageToggle}
                  title={copy.nav.languageToggle}
                  className={isLightMode ? langButtonLight : langButtonDark}
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
          className={`pointer-events-auto absolute bottom-2 right-2 top-[4.9rem] flex w-[min(64vw,352px)] min-w-63 max-w-[84vw] flex-col overflow-y-auto rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,#09111d_0%,#08101a_100%)] px-6 pb-8 pt-6 shadow-[-28px_0_64px_rgba(0,0,0,0.48)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-[104%]"
          }`}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 self-start">
              <Link
                href="/cv"
                onClick={() => setIsMobileMenuOpen(false)}
                className={
                  isCvPage
                    ? isLightMode
                      ? mobileCvButtonLightActive
                      : mobileCvButtonDarkActive
                    : isLightMode
                      ? mobileCvButtonLight
                      : mobileCvButtonDark
                }
              >
                {copy.nav.cv}
              </Link>

              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={copy.nav.languageToggle}
                title={copy.nav.languageToggle}
                className={isLightMode ? mobileLangButtonLight : mobileLangButtonDark}
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
                    className={`border-b border-white/10 py-6 text-[1.65rem] font-semibold tracking-tight capitalize transition-colors duration-500 ${
                      isActive ? "text-white" : "text-white/88 hover:text-white"
                    }`}
                  >
                    {sectionLabels[item.name] ?? item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-end border-t border-white/10 pt-6">
            <span className="text-[0.72rem] font-medium tracking-[0.18em] text-white/28">
              ~/portifolio-enzo-bispo.vercel.app
            </span>
          </div>
        </aside>
      </div>
    </nav>
  );
}