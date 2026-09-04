"use client";

import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { FiMapPin, FiClock } from "react-icons/fi";
import { useState, useEffect } from "react";
import { InteractiveDottedGlobe } from "@/shared/components/ui/InteractiveDottedGlobe";
import { useTranslations } from "@/shared/i18n/LanguageProvider";

export function AboutSection() {
  const { copy, language } = useTranslations();
  const [currentTime, setCurrentTime] = useState("");

  const softHoverTransition =
    "transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";
  const cardHoverProfile =
    `${softHoverTransition} hover:scale-[1.01] hover:border-[#3f7f5f]/45 hover:shadow-[0_0_0_1px_rgba(63,127,95,0.22),0_22px_46px_rgba(0,0,0,0.32)]`;
  const cardHoverWho = cardHoverProfile;
  const cardHoverGlobal =
    `${softHoverTransition} hover:scale-[1.008] hover:border-[#3f7f5f]/40 hover:shadow-[0_0_0_1px_rgba(63,127,95,0.20),0_20px_44px_rgba(0,0,0,0.3)]`;
  const aboutTagClass =
    "px-4 py-1.5 rounded-full border border-white/12 bg-white/6 text-[#f4efe7] text-xs font-semibold tracking-[0.01em] shadow-[0_10px_24px_rgba(0,0,0,0.16)]";

  useEffect(() => {
    const isPortuguese = language === "pt-BR";
    const locale = isPortuguese ? "pt-BR" : "en-US";
    const timeZone = "America/Sao_Paulo";

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString(locale, {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: !isPortuguese,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <section
      id="about"
      className="relative z-0 overflow-hidden bg-[#061410] px-4 py-24 text-white sm:px-6 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:radial-gradient(circle_at_3%_18%,rgba(255,255,255,0.9)_1.2px,transparent_1.8px),radial-gradient(circle_at_8%_72%,rgba(255,255,255,0.55)_0.9px,transparent_1.6px),radial-gradient(circle_at_15%_34%,rgba(255,255,255,0.75)_1px,transparent_1.7px),radial-gradient(circle_at_22%_81%,rgba(255,255,255,0.7)_1.3px,transparent_1.9px),radial-gradient(circle_at_28%_16%,rgba(255,255,255,0.45)_0.8px,transparent_1.5px),radial-gradient(circle_at_35%_58%,rgba(255,255,255,0.85)_1.1px,transparent_1.8px),radial-gradient(circle_at_41%_22%,rgba(255,255,255,0.52)_0.9px,transparent_1.6px),radial-gradient(circle_at_49%_76%,rgba(255,255,255,0.82)_1.2px,transparent_1.9px),radial-gradient(circle_at_57%_12%,rgba(255,255,255,0.42)_0.8px,transparent_1.4px),radial-gradient(circle_at_63%_46%,rgba(255,255,255,0.8)_1.2px,transparent_1.8px),radial-gradient(circle_at_71%_84%,rgba(255,255,255,0.65)_1px,transparent_1.7px),radial-gradient(circle_at_79%_28%,rgba(255,255,255,0.9)_1.3px,transparent_2px),radial-gradient(circle_at_86%_63%,rgba(255,255,255,0.46)_0.8px,transparent_1.4px),radial-gradient(circle_at_92%_20%,rgba(255,255,255,0.7)_1px,transparent_1.7px),radial-gradient(circle_at_97%_78%,rgba(255,255,255,0.84)_1.2px,transparent_1.9px)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_20%_22%,rgba(255,255,255,0.95)_0.8px,transparent_1.2px),radial-gradient(circle_at_72%_34%,rgba(255,255,255,0.9)_1px,transparent_1.4px),radial-gradient(circle_at_42%_70%,rgba(255,255,255,0.9)_0.8px,transparent_1.2px),radial-gradient(circle_at_86%_78%,rgba(255,255,255,0.95)_1px,transparent_1.4px)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(3,10,8,0.78)_0%,rgba(5,16,12,0.44)_22%,rgba(6,20,15,0.16)_60%,rgba(6,20,15,0)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(0deg,rgba(3,10,8,0.78)_0%,rgba(5,16,12,0.44)_22%,rgba(6,20,15,0.16)_60%,rgba(6,20,15,0)_100%)]" />

      <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">
        <h2 className="sr-only">{copy.about.srOnly}</h2>

        <div className="grid auto-rows-min grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <div
            className={`group relative flex min-h-72 cursor-default flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[rgba(8,21,16,0.94)] p-5 md:col-span-1 md:min-h-100 md:p-8 ${cardHoverProfile}`}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(280px circle at 50% 38%, rgba(63,127,95,0.34), rgba(47,107,87,0.16) 40%, rgba(8,15,12,0) 70%), linear-gradient(135deg, rgba(63,127,95,0.16) 0%, rgba(15,18,16,0) 45%, rgba(127,160,143,0.14) 100%)",
              }}
            />

            <div className="relative z-10">
              <h3 className="mb-2 text-3xl font-serif italic tracking-wide sm:text-4xl">
                Enzo{" "}
                <span className="font-sans not-italic font-bold text-gray-400">
                  Bispo
                </span>
              </h3>

              <div className="mb-4 flex items-center gap-2 text-xs text-gray-400 sm:mb-6 sm:text-sm">
                <FiMapPin className="h-3 w-3 md:h-4 md:w-4" />
                <span>
                  {copy.about.location} - {currentTime}
                </span>
              </div>
            </div>

            <div className="relative z-10 flex gap-4">
              <a
                href="https://github.com/Enzirneo"
                aria-label="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/20"
              >
                <SiGithub size={20} />
              </a>
              <a
                href="https://www.instagram.com/enzirneo/"
                aria-label="Instagram Profile"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/20"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/enzo-bispo-68738a24b/"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/20"
              >
                <SiLinkedin size={20} />
              </a>
            </div>
          </div>

          <div
            className={`group relative flex cursor-default flex-col justify-center gap-5 overflow-hidden rounded-3xl border border-white/10 bg-[rgba(8,21,16,0.94)] p-5 md:col-span-2 md:p-10 ${cardHoverWho}`}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(280px circle at 50% 38%, rgba(63,127,95,0.34), rgba(47,107,87,0.16) 40%, rgba(8,15,12,0) 70%), linear-gradient(135deg, rgba(63,127,95,0.16) 0%, rgba(15,18,16,0) 45%, rgba(127,160,143,0.14) 100%)",
              }}
            />

            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                {copy.about.whoTitle}
              </h3>

              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                {copy.about.whoParagraph1.prefix}
                <a
                  href="#projects"
                  className="font-medium text-[#e6c17a] underline decoration-[#e6c17a]/70 underline-offset-4 transition-all hover:text-[#f2d59b] hover:decoration-[#f2d59b]"
                >
                  {copy.about.whoParagraph1.linkBuildTools}
                </a>
                {copy.about.whoParagraph1.middle}
                <span className="border-b border-[#e6c17a]/45 text-[#e6c17a] transition-all hover:border-[#f2d59b] hover:text-[#f2d59b]">
                  {copy.about.whoParagraph1.linkEmpathy}
                </span>
                ,{" "}
                <span className="border-b border-[#e6c17a]/45 text-[#e6c17a] transition-all hover:border-[#f2d59b] hover:text-[#f2d59b]">
                  {copy.about.whoParagraph1.linkScalability}
                </span>
                , {language === "pt-BR" ? "e" : "and"}{" "}
                <span className="border-b border-[#e6c17a]/45 text-[#e6c17a] transition-all hover:border-[#f2d59b] hover:text-[#f2d59b]">
                  {copy.about.whoParagraph1.linkPerformance}
                </span>
                {copy.about.whoParagraph1.suffix}
              </p>

              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                {copy.about.whoParagraph2.prefix}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white underline decoration-white/70 underline-offset-4 transition-all hover:text-white hover:decoration-white"
                >
                  {copy.about.whoParagraph2.linkNext}
                </a>
                {copy.about.whoParagraph2.middle1}
                <a
                  href="https://www.typescriptlang.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#7db8ec] underline decoration-[#3178c6] underline-offset-4 transition-all hover:text-[#a6d0f5] hover:decoration-[#5a9fe0]"
                >
                  {copy.about.whoParagraph2.linkTypescript}
                </a>
                {copy.about.whoParagraph2.middle2}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#5fc9f0] underline decoration-[#38bdf8] underline-offset-4 transition-all hover:text-[#9ce0fb] hover:decoration-[#7dd6fb]"
                >
                  {copy.about.whoParagraph2.linkTailwind}
                </a>
                {copy.about.whoParagraph2.suffix}
              </p>
            </div>

            <div className="relative z-10 mt-2 flex flex-wrap gap-3">
              {copy.about.tags.map((tag) => (
                <span key={tag} className={aboutTagClass}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`relative flex min-h-56 cursor-default flex-col justify-center gap-5 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,20,16,0.96)_0%,rgba(9,24,19,0.94)_52%,rgba(12,32,25,0.92)_100%)] p-5 md:col-span-2 md:min-h-62.5 md:p-8 ${cardHoverGlobal}`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,107,87,0.16),transparent_30%),radial-gradient(circle_at_24%_38%,rgba(63,127,95,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(127,160,143,0.10),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[28px_28px]" />

            <div className="z-10 w-full space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {copy.about.globalLabel}
              </span>

              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                {copy.about.globalTitle} <br />
                <span className="text-gray-500">
                  {copy.about.globalTitleEmphasis}
                </span>
              </h3>

              <p className="max-w-lg text-sm text-gray-400">
                {copy.about.globalParagraph.prefix}
                <span className="border-b border-gray-600 text-gray-300 transition-all hover:border-white hover:text-white">
                  {copy.about.globalParagraph.linkAsync}
                </span>
                {copy.about.globalParagraph.middle}
                <a
                  href="#contact"
                  className="border-b border-gray-600 text-gray-300 transition-colors hover:border-white hover:text-white"
                >
                  {copy.about.globalParagraph.linkCommunication}
                </a>
                {copy.about.globalParagraph.suffix}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 py-1 text-xs font-bold text-white">
                  <FiClock className="text-[#7fa08f]" />
                  <span>{copy.about.globalBadge}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative min-h-72 overflow-hidden rounded-3xl border border-white/10 bg-[rgba(6,18,14,0.96)] md:col-span-1 md:min-h-87 ${cardHoverGlobal}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(78%_58%_at_50%_4%,rgba(127,160,143,0.12),rgba(4,10,8,0)_62%)]" />

            <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 text-base font-semibold text-white/90">
              <FiMapPin className="h-4 w-4 text-white/90" />
              <span>{language === "pt-BR" ? "Brasil" : "Brazil"}</span>
            </div>

            <div
              className="absolute inset-x-0 -bottom-18 mx-auto aspect-square h-72 w-full max-w-180 sm:-bottom-22 sm:h-84 sm:max-w-200 lg:-bottom-26 lg:h-96"
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                maxWidth: "800px",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 66%, rgba(0, 0, 0, 0) 82%)",
                maskImage:
                  "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 66%, rgba(0, 0, 0, 0) 82%)",
              }}
            >
              <InteractiveDottedGlobe
                className="h-full w-full"
                marker={{ lat: -14.235, lng: -51.925, size: 0.18 }}
                initialLongitude={-52}
                initialLatitude={-6}
                autoRotateSpeed={0.0026}
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-[#020a08] to-transparent">
              <div className="absolute inset-x-0 bottom-4 text-center text-[9px] font-mono uppercase tracking-[0.18em] text-white/35">
                {language === "pt-BR"
                  ? "arraste para os lados"
                  : "drag sideways"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}