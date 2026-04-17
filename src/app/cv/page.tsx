"use client";

import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  Braces,
  Cloud,
  Code2,
  Database,
  FileText,
  Github,
  GitBranch,
  GraduationCap,
  Languages,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Palette,
  Phone,
  ServerCog,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Footer, Navbar } from "@/shared/components/layout";
import { useTranslations } from "@/shared/i18n/LanguageProvider";
import type { Language } from "@/shared/lib/i18n";
import { cvContent } from "@/features/cv/resume-content";

function getSkillIcon(skill: string): LucideIcon {
  const normalized = skill.toLowerCase();

  if (
    normalized.includes("html") ||
    normalized.includes("css") ||
    normalized.includes("javascript") ||
    normalized.includes("typescript") ||
    normalized.includes("react") ||
    normalized.includes("next") ||
    normalized.includes("frontend") ||
    normalized.includes("tailwind") ||
    normalized.includes("responsive")
  ) {
    return MonitorSmartphone;
  }

  if (
    normalized.includes("node") ||
    normalized.includes("api") ||
    normalized.includes("rest") ||
    normalized.includes("backend") ||
    normalized.includes("express") ||
    normalized.includes("server")
  ) {
    return ServerCog;
  }

  if (
    normalized.includes("sql") ||
    normalized.includes("mysql") ||
    normalized.includes("postgres") ||
    normalized.includes("mongodb") ||
    normalized.includes("database") ||
    normalized.includes("banco")
  ) {
    return Database;
  }

  if (
    normalized.includes("aws") ||
    normalized.includes("cloud") ||
    normalized.includes("azure") ||
    normalized.includes("gcp") ||
    normalized.includes("deploy")
  ) {
    return Cloud;
  }

  if (
    normalized.includes("git") ||
    normalized.includes("github") ||
    normalized.includes("versionamento")
  ) {
    return GitBranch;
  }

  if (
    normalized.includes("figma") ||
    normalized.includes("ui") ||
    normalized.includes("ux") ||
    normalized.includes("design")
  ) {
    return Palette;
  }

  if (
    normalized.includes("arquitetura") ||
    normalized.includes("architecture") ||
    normalized.includes("software") ||
    normalized.includes("clean code")
  ) {
    return Layers3;
  }

  if (
    normalized.includes("integra") ||
    normalized.includes("workflow") ||
    normalized.includes("automação") ||
    normalized.includes("automation")
  ) {
    return Workflow;
  }

  if (
    normalized.includes("ferramenta") ||
    normalized.includes("tool") ||
    normalized.includes("vite") ||
    normalized.includes("webpack")
  ) {
    return Wrench;
  }

  if (
    normalized.includes("lógica") ||
    normalized.includes("algorithm") ||
    normalized.includes("estrutura")
  ) {
    return Braces;
  }

  return Code2;
}

export default function CvPage() {
  const { language } = useTranslations();
  const content = cvContent[language as Language];
  const resumeHref = "/cv/Currículo Enzo Bispo.pdf";
  const resumeDownloadName =
    language === "pt-BR" ? "Enzo-Bispo-Curriculo.pdf" : "Enzo-Bispo-Resume.pdf";
  const atsHref = `/cv/ats?lang=${encodeURIComponent(language)}`;
  const locationLabel =
    language === "pt-BR"
      ? "Rio de Janeiro, Rio de Janeiro, Brasil"
      : "Rio de Janeiro, Rio de Janeiro, Brazil";

  return (
    <div className="min-h-screen bg-[#f7f3ee] font-(family-name:--font-geist-sans)">
      <Navbar />

      <main className="relative z-10 overflow-hidden px-4 pb-20 pt-28 text-[#171717] sm:px-6 sm:pb-24 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-size-[18px_18px] opacity-35" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_68%)]" />
        <div className="pointer-events-none absolute bottom-0 left-[-12%] h-96 w-96 rounded-full bg-white/70 blur-[110px]" />
        <div className="pointer-events-none absolute right-[-10%] top-[22%] h-88 w-88 rounded-full bg-stone-200/60 blur-[120px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(247,243,238,0)_0%,rgba(247,243,238,0.92)_100%)]" />

        <div className="relative mx-auto max-w-6xl">
          <section>
            <div className="rounded-4xl border border-black/12 bg-[#fdfbf8] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-8 lg:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#161616]/38">
                  {content.roleLabel}
                </p>
                <h1 className="mt-3 text-[2.15rem] font-semibold tracking-tight text-[#161616] min-[430px]:text-[2.35rem] sm:text-6xl lg:text-7xl">
                  Enzo{" "}
                  <span className="inline font-serif italic font-normal text-[#7b7469]">
                    Bispo
                  </span>
                </h1>
                <p className="mt-4 text-xl font-semibold tracking-tight text-[#161616]/82 sm:text-3xl">
                  {content.role}
                </p>
              </div>

              <p className="mt-6 w-full whitespace-pre-line text-base leading-relaxed text-[#161616]/66 sm:text-lg">
                {content.summary}
              </p>

              <div className="mt-8 border-t border-white/8 pt-6">
                <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                  {content.quickFacts.map((fact) => (
                    <div key={fact.label}>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#161616]/36">
                        {fact.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#161616]/84 sm:text-[0.95rem]">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-4xl border border-black/12 bg-[#fdfbf8] p-5 shadow-[0_22px_56px_rgba(0,0,0,0.22)] sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#2f6b57]/24 bg-[#2f6b57]/10 text-[#2f6b57]">
                <Sparkles className="h-4 w-4" />
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#161616] sm:text-[1.8rem]">
                {content.metricsTitle}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {content.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-[1.4rem] border border-black/12 bg-white/3 px-5 py-5 transition-[background-color,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#2f6b57]/30 hover:bg-[#f4faf6] hover:shadow-[0_0_0_1px_rgba(47,107,87,0.10),0_16px_28px_rgba(47,107,87,0.08)]"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(160px circle at 18% 14%, rgba(47,107,87,0.10), rgba(47,107,87,0) 62%), radial-gradient(180px circle at 84% 88%, rgba(47,107,87,0.06), rgba(47,107,87,0) 64%)",
                    }}
                  />
                  <p className="relative z-10 text-3xl font-black tracking-tight text-[#161616] transition-colors duration-500 group-hover:text-[#2f6b57]">
                    {metric.value}
                  </p>
                  <p className="relative z-10 mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#161616]/62 transition-colors duration-500 group-hover:text-[#161616]/78">
                    {metric.label}
                  </p>
                  <p className="relative z-10 mt-2 text-sm leading-relaxed text-[#161616]/50 transition-colors duration-500 group-hover:text-[#161616]/58">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 grid items-stretch gap-6 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-4xl border border-black/12 bg-[#fdfbf8] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#2f6b57]/24 bg-[#2f6b57]/10 text-[#2f6b57]">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-[#161616]">
                    {content.educationTitle}
                  </h2>
                </div>

                <div className="space-y-4">
                  {content.education.map((item) => (
                    <div
                      key={`${item.school}-${item.title}`}
                      className="group relative overflow-hidden rounded-3xl border border-black/12 bg-white/4 p-4 transition-[background-color,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#2f6b57]/30 hover:bg-[#f4faf6] hover:shadow-[0_0_0_1px_rgba(47,107,87,0.10),0_14px_24px_rgba(47,107,87,0.07)]"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(180px circle at 12% 12%, rgba(47,107,87,0.09), rgba(47,107,87,0) 60%)",
                        }}
                      />
                      <p className="relative z-10 text-xs font-bold uppercase tracking-[0.16em] text-[#2f6b57]">
                        {item.period}
                      </p>
                      <h3 className="relative z-10 mt-2 text-base font-semibold text-[#161616]">
                        {item.title}
                      </h3>
                      <p className="relative z-10 mt-1 text-sm text-[#161616]/58">
                        {item.school}
                      </p>
                      <p className="relative z-10 mt-2 text-sm leading-relaxed text-[#161616]/50">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-black/12 bg-[#fdfbf8] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#2f6b57]/24 bg-[#2f6b57]/10 text-[#2f6b57]">
                    <Languages className="h-4 w-4" />
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-[#161616]">
                    {content.languagesTitle}
                  </h2>
                </div>

                <div className="space-y-3">
                  {content.languages.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center justify-between overflow-hidden rounded-[1.4rem] border border-black/12 bg-white/4 px-4 py-3 transition-[background-color,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#2f6b57]/30 hover:bg-[#f4faf6] hover:shadow-[0_0_0_1px_rgba(47,107,87,0.10),0_14px_24px_rgba(47,107,87,0.07)]"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(160px circle at 12% 12%, rgba(47,107,87,0.09), rgba(47,107,87,0) 60%)",
                        }}
                      />
                      <span className="relative z-10 text-sm font-medium text-[#161616]/86">
                        {item.name}
                      </span>
                      <span className="relative z-10 text-sm text-[#161616]/50">
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="rounded-4xl border border-black/12 bg-[#fcfaf7] p-6 text-[#161616] shadow-[0_28px_80px_rgba(2,6,23,0.18)] sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#161616]/36">
                  {content.contactTitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#161616]/64 sm:text-base">
                  {content.contactIntro}
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:enzo.bispo22@gmail.com"
                    className="flex items-center gap-3 rounded-2xl border border-black/12 bg-[#f8f4ef] px-4 py-3 text-sm text-[#161616]/86 transition-colors hover:bg-white/8"
                  >
                    <Mail className="h-4 w-4 text-[#5e786d]" />
                    enzo.bispo22@gmail.com
                  </a>

                  <a
                    href="tel:+5551991288418"
                    className="flex items-center gap-3 rounded-2xl border border-black/12 bg-[#f8f4ef] px-4 py-3 text-sm text-[#161616]/86 transition-colors hover:bg-white/8"
                  >
                    <Phone className="h-4 w-4 text-[#5e786d]" />
                    +55 21 99949-1122
                  </a>

                  <div className="flex items-center gap-3 rounded-2xl border border-black/12 bg-[#f8f4ef] px-4 py-3 text-sm text-[#161616]/82">
                    <MapPin className="h-4 w-4 text-[#5e786d]" />
                    {locationLabel}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a
                    href="https://github.com/Enzirneo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-black/12 bg-[#f8f4ef] px-4 py-3 text-sm text-[#161616]/84 transition-colors hover:bg-white/8"
                  >
                    <Github className="h-4 w-4 text-[#5e786d]" />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/enzo-bispo-68738a24b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-black/12 bg-[#f8f4ef] px-4 py-3 text-sm text-[#161616]/84 transition-colors hover:bg-white/8"
                  >
                    <Linkedin className="h-4 w-4 text-[#5e786d]" />
                    LinkedIn
                  </a>
                </div>

                <div className="mt-6 flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={resumeHref}
                      aria-disabled="true"
                      download={resumeDownloadName}
                      className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#2f6b57] px-4 py-3 text-sm font-semibold text-white text-center transition-[transform,background-color,border-color] hover:-translate-y-0.5 hover:bg-[#3b7d66]"
                    >
                      <ArrowDownToLine className="h-4 w-4 shrink-0" />
                      <span className="leading-none">{content.actions.download}</span>
                    </a>

                    <Link
                      href="/#contact"
                      className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-black/12 bg-[#f7f2ec] px-4 py-3 text-sm font-semibold text-[#161616] text-center transition-[background-color,border-color,box-shadow] hover:border-[#2f6b57]/35 hover:bg-[#f4faf6] hover:shadow-[0_0_0_1px_rgba(47,107,87,0.12)]"
                    >
                      <span className="leading-none">{content.actions.contact}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </div>

                  <a
                    href={atsHref}
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-black/12 bg-[#f7f2ec] px-4 py-3 text-sm font-semibold text-[#161616] text-center transition-[background-color,border-color,box-shadow] hover:border-[#2f6b57]/35 hover:bg-[#f4faf6] hover:shadow-[0_0_0_1px_rgba(47,107,87,0.12)]"
                  >
                    <FileText className="h-4 w-4 shrink-0" />
                    <span className="leading-tight">{content.actions.downloadAts}</span>
                  </a>
                </div>
              </aside>
            </div>

            <div className="space-y-6">
              <div className="rounded-4xl border border-black/12 bg-[#fdfbf8] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-7">
                <div className="mb-7 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#2f6b57]/24 bg-[#2f6b57]/10 text-[#2f6b57]">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-[#161616] sm:text-3xl">
                    {content.experienceTitle}
                  </h2>
                </div>

                <div className="space-y-4">
                  {content.experience.map((item) => (
                    <article
                      key={`${item.company}-${item.role}`}
                      className="group relative overflow-hidden rounded-[1.6rem] border border-black/12 bg-white/4 p-5 transition-[background-color,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#2f6b57]/30 hover:bg-[#f4faf6] hover:shadow-[0_0_0_1px_rgba(47,107,87,0.10),0_14px_24px_rgba(47,107,87,0.07)]"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(180px circle at 12% 12%, rgba(47,107,87,0.09), rgba(47,107,87,0) 60%)",
                        }}
                      />
                      <p className="relative z-10 text-xs font-bold uppercase tracking-[0.18em] text-[#2f6b57]">
                        {item.period}
                      </p>
                      <h3 className="relative z-10 mt-2 text-lg font-semibold text-[#161616] sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="relative z-10 mt-1 text-sm font-medium text-[#2f6b57]">
                        {item.company}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="relative z-10 flex items-start gap-3 text-sm leading-relaxed text-[#161616]/64"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f6b57]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-black/12 bg-[#fdfbf8] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#2f6b57]/24 bg-[#2f6b57]/10 text-[#2f6b57]">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-[#161616]">
                    {content.skillsTitle}
                  </h2>
                </div>

                <div className="space-y-4">
                  {content.skillGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#161616]/42">
                        {group.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {group.items.map((item) => {
                          const Icon = getSkillIcon(item);

                          return (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1.5 rounded-full border border-black/12 bg-white/4 px-2.5 py-1 text-[10px] font-medium text-[#161616]/72"
                            >
                              <Icon className="h-3.5 w-3.5 shrink-0 text-[#2f6b57]" />
                              <span className="leading-none">{item}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-[#161616]/42 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl">{content.footerNote}</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-medium text-[#161616]/62 transition-colors hover:text-[#161616]"
            >
              {content.actions.portfolio}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}