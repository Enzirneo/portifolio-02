"use client";

import { ReactNode } from "react";
import { skills } from "@/shared/data/skills";
import { 
  SiJavascript, SiTypescript, SiPhp, SiMysql, SiHtml5, SiCss3, SiNextdotjs, SiReact, 
  SiTailwindcss, SiFramer, SiSanity, SiContentful, SiNodedotjs, SiExpress, 
  SiPostgresql, SiMongodb, SiPrisma, SiPnpm, SiBun, SiGit, SiGithub, SiVercel, 
  SiAmazon, SiDocker, SiExpo, SiClerk, SiLinux, SiRust, SiFlutter, SiBlender, 
  SiAdobeillustrator, SiGodotengine, SiZod, SiBootstrap, SiWordpress, SiN8N, SiSupabase,
  SiPython, SiFigma, SiOpenjdk
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi"; // For Zustand (Bear)
import { useTranslations } from "@/shared/i18n/LanguageProvider";

const skillIcons: Record<string, ReactNode> = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  PHP: <SiPhp />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  NextJS: <SiNextdotjs />,
  ReactJS: <SiReact />,
  "Tailwind CSS": <SiTailwindcss />,
  Bootstrap: <SiBootstrap />,
  WordPress: <SiWordpress />,
  Motion: <SiFramer />,
  Sanity: <SiSanity />,
  Contentful: <SiContentful />,
  NodeJS: <SiNodedotjs />,
  ExpressJS: <SiExpress />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Prisma: <SiPrisma />,
  Zustand: <GiBearFace />,
  Zod: <SiZod />,
  pnpm: <SiPnpm />,
  Bun: <SiBun />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Vercel: <SiVercel />,
  AWS: <SiAmazon />,
  Docker: <SiDocker />,
  Supabase: <SiSupabase />,
  Python: <SiPython />,
  Figma: <SiFigma />,
  Java: <SiOpenjdk />,
  Expo: <SiExpo />,
  Clerk: <SiClerk />,
  Linux: <SiLinux />,
  Rust: <SiRust />,
  Flutter: <SiFlutter />,
  Blender: <SiBlender />,
  Illustrator: <SiAdobeillustrator />,
  Godot: <SiGodotengine />,
  n8n: <SiN8N />,
};

const skillColors: Record<string, { bg: string; text: string; color: string }> = {
  JavaScript: { bg: "bg-[#F7DF1E]/10", text: "text-[#F7DF1E]", color: "#F7DF1E" },
  TypeScript: { bg: "bg-[#3178C6]/10", text: "text-[#3178C6]", color: "#3178C6" },
  PHP: { bg: "bg-[#777BB4]/10", text: "text-[#777BB4]", color: "#777BB4" },
  HTML: { bg: "bg-[#E34F26]/10", text: "text-[#E34F26]", color: "#E34F26" },
  CSS: { bg: "bg-[#1572B6]/10", text: "text-[#1572B6]", color: "#1572B6" },
  NextJS: { bg: "bg-black/5", text: "text-[#111111]", color: "#111111" },
  ReactJS: { bg: "bg-[#61DAFB]/10", text: "text-[#61DAFB]", color: "#61DAFB" },
  "Tailwind CSS": { bg: "bg-[#38B2AC]/10", text: "text-[#38B2AC]", color: "#38B2AC" },
  Bootstrap: { bg: "bg-[#7952B3]/10", text: "text-[#7952B3]", color: "#7952B3" },
  WordPress: { bg: "bg-[#21759B]/10", text: "text-[#21759B]", color: "#21759B" },
  Motion: { bg: "bg-[#0055FF]/10", text: "text-[#0055FF]", color: "#0055FF" },
  Sanity: { bg: "bg-[#F03E2F]/10", text: "text-[#F03E2F]", color: "#F03E2F" },
  Contentful: { bg: "bg-[#2478CC]/10", text: "text-[#2478CC]", color: "#2478CC" },
  NodeJS: { bg: "bg-[#339933]/10", text: "text-[#339933]", color: "#339933" },
  ExpressJS: { bg: "bg-black/5", text: "text-[#111111]", color: "#111111" },
  PostgreSQL: { bg: "bg-[#336791]/10", text: "text-[#336791]", color: "#336791" },
  MySQL: { bg: "bg-[#4479A1]/10", text: "text-[#4479A1]", color: "#4479A1" },
  MongoDB: { bg: "bg-[#47A248]/10", text: "text-[#47A248]", color: "#47A248" },
  Prisma: { bg: "bg-[#2D3748]/10", text: "text-[#2D3748]", color: "#2D3748" },
  Zustand: { bg: "bg-[#443E38]/10", text: "text-[#F6C778]", color: "#443E38" }, // Using brownish for bear
  Zod: { bg: "bg-[#3068B7]/10", text: "text-[#3068B7]", color: "#3068B7" },
  pnpm: { bg: "bg-[#F69220]/10", text: "text-[#F69220]", color: "#F69220" },
  Bun: { bg: "bg-[#FBF0DF]/10", text: "text-[#FBF0DF]", color: "#FBF0DF" },
  Git: { bg: "bg-[#F05032]/10", text: "text-[#F05032]", color: "#F05032" },
  GitHub: { bg: "bg-black/5", text: "text-[#111111]", color: "#111111" },
  Vercel: { bg: "bg-black/5", text: "text-[#111111]", color: "#111111" },
  AWS: { bg: "bg-[#FF9900]/10", text: "text-[#FF9900]", color: "#FF9900" },
  Docker: { bg: "bg-[#2496ED]/10", text: "text-[#2496ED]", color: "#2496ED" },
  Supabase: { bg: "bg-[#3ECF8E]/10", text: "text-[#3ECF8E]", color: "#3ECF8E" },
  Python: { bg: "bg-[#3776AB]/10", text: "text-[#3776AB]", color: "#3776AB" },
  Figma: { bg: "bg-[#F24E1E]/10", text: "text-[#F24E1E]", color: "#F24E1E" },
  Java: { bg: "bg-[#EA2D2E]/10", text: "text-[#EA2D2E]", color: "#EA2D2E" },
  Expo: { bg: "bg-black/5", text: "text-[#111111]", color: "#111111" },
  Clerk: { bg: "bg-[#6C47FF]/10", text: "text-[#6C47FF]", color: "#6C47FF" },
  Linux: { bg: "bg-[#FCC624]/10", text: "text-[#FCC624]", color: "#FCC624" },
  Rust: { bg: "bg-black/5", text: "text-[#111111]", color: "#111111" },
  Flutter: { bg: "bg-[#02569B]/10", text: "text-[#02569B]", color: "#02569B" },
  Blender: { bg: "bg-[#E87D0D]/10", text: "text-[#E87D0D]", color: "#E87D0D" },
  Illustrator: { bg: "bg-[#FF9A00]/10", text: "text-[#FF9A00]", color: "#FF9A00" },
  Godot: { bg: "bg-[#478CBF]/10", text: "text-[#478CBF]", color: "#478CBF" },
  n8n: { bg: "bg-[#EA4B71]/10", text: "text-[#EA4B71]", color: "#EA4B71" },
};

export function SkillsSection() {
  const { copy } = useTranslations();
  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full border border-[#3f7f5f]/20 bg-[#3f7f5f]/8 px-4 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#3f7f5f] shadow-[0_0_0_1px_rgba(63,127,95,0.05),0_10px_24px_rgba(15,23,42,0.05)] sm:mb-6 sm:px-5 sm:py-2">
            {copy.skills.label}
          </span>
          <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-[#161616] sm:mb-8 sm:text-7xl md:text-8xl">
            {copy.skills.title}{" "}
            <span className="font-serif italic bg-linear-to-r from-[#2f6b57] via-[#3b7d66] to-[#7fa08f] text-transparent bg-clip-text pr-2">
              {copy.skills.titleAccent}
            </span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:mb-20 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
           {copy.skills.steps.map((step) => (
             <div
               key={step.title}
               className="group relative overflow-hidden rounded-2xl border border-black/8 bg-[#fcfaf7] p-5 transition-[background-color,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#3f7f5f]/22 hover:bg-white hover:shadow-[0_0_0_1px_rgba(63,127,95,0.08),0_14px_28px_rgba(15,23,42,0.05)] sm:p-6"
             >
               <div
                 className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                 style={{
                   background:
                     "radial-gradient(160px circle at 18% 14%, rgba(47,107,87,0.10), rgba(47,107,87,0) 62%), radial-gradient(180px circle at 84% 88%, rgba(127,160,143,0.08), rgba(127,160,143,0) 64%)",
                 }}
               />
               <span className="relative z-10 mb-4 block text-4xl font-black text-black/8 transition-colors duration-500 group-hover:text-[#3f7f5f]/28">{step.icon}</span>
               <h3 className="relative z-10 mb-2 text-xl font-bold text-[#161616]">{step.title}</h3>
               <p className="relative z-10 text-sm text-[#555] leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>

        <div className="mb-10 text-center sm:mb-12">
            <h3 className="mb-6 text-2xl font-bold text-[#161616]">{copy.skills.toolboxTitle}</h3>
             <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-[#666] mb-8">
               <span>{copy.skills.toolboxCategories.frontend}</span> <span className="text-gray-700">/</span>
               <span>{copy.skills.toolboxCategories.backend}</span> <span className="text-gray-700">/</span>
               <span>{copy.skills.toolboxCategories.infrastructure}</span> <span className="text-gray-700">/</span>
               <span>{copy.skills.toolboxCategories.testing}</span>
             </div>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, index) => {
            const colors = skillColors[skill.name] || { bg: "bg-gray-800", text: "text-white", color: "#fff" };
            const icon = skillIcons[skill.name] || <span className="font-bold">?</span>;
            
            return (
              <div
                key={skill.name}
                className="group relative flex cursor-default items-center gap-2 overflow-hidden rounded-full border border-black/8 bg-[#fcfaf7] px-3 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-[transform,border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:border-[#3f7f5f]/35 hover:bg-white hover:shadow-[0_0_0_1px_rgba(63,127,95,0.12),0_12px_28px_rgba(15,23,42,0.08)] sm:gap-2.5 sm:rounded-2xl sm:px-5 sm:py-2.5"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-full sm:rounded-2xl opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "inset 0 0 10px rgba(63,127,95,0.10), 0 0 12px rgba(63,127,95,0.08)",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(130% 90% at 8% 2%, rgba(63,127,95,0.12) 0%, rgba(63,127,95,0.04) 36%, rgba(255,255,255,0) 70%), linear-gradient(145deg, rgba(111,183,202,0.06) 0%, rgba(255,255,255,0.1) 52%, rgba(163,108,231,0.04) 100%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 h-10 w-[72%] -translate-x-1/2 rounded-full blur-lg opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(62% 100% at 50% 100%, rgba(63,127,95,0.18) 0%, rgba(63,127,95,0.04) 42%, rgba(63,127,95,0) 100%)",
                  }}
                />
                <div 
                  className="relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-lg sm:text-xl"
                  style={{ color: colors.color }}
                >
                  {icon}
                </div>
                <span className="relative z-10 text-xs font-medium text-[#2f2f2f] transition-colors duration-300 group-hover:text-[#161616] sm:text-base">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
