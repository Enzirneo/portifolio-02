import type { NextRequest } from "next/server";
import { cvContent } from "@/features/cv/resume-content";
import {
  defaultLanguage,
  isLanguage,
  type Language,
} from "@/shared/lib/i18n";

const SECTION_DIVIDER =
  "================================================================================";

function resolveLanguage(searchParam: string | null): Language {
  if (isLanguage(searchParam)) {
    return searchParam;
  }

  return defaultLanguage;
}

function dedupeSkills(language: Language) {
  const seen = new Set<string>();
  const items: string[] = [];

  cvContent[language].skillGroups.forEach((group) => {
    group.items.forEach((item) => {
      if (!seen.has(item)) {
        seen.add(item);
        items.push(item);
      }
    });
  });

  return items;
}

function buildAtsText(language: Language) {
  const content = cvContent[language];
  const location =
    language === "pt-BR"
      ? "Rio de Janeiro, Rio de Janeiro, Brasil"
      : "Rio de Janeiro, Rio de Janeiro, Brazil";
  const role = content.role;
  const skillList = dedupeSkills(language).join(", ");
  const languageList = content.languages
    .map((item) => `${item.name} (${item.level})`)
    .join(", ");

  const sections = [
    `${SECTION_DIVIDER}
${content.ats.summaryTitle}
${SECTION_DIVIDER}

${content.summary}`,
    `${SECTION_DIVIDER}
${content.ats.achievementsTitle}
${SECTION_DIVIDER}

${content.metrics
  .map((metric) => `- ${metric.value} ${metric.label} - ${metric.detail}`)
  .join("\n")}`,
    `${SECTION_DIVIDER}
${content.ats.skillsTitle}
${SECTION_DIVIDER}

${skillList}`,
    `${SECTION_DIVIDER}
${content.ats.experienceTitle}
${SECTION_DIVIDER}

${content.experience
  .map(
    (item) => `${item.role}
${item.company}
${item.period}

${item.bullets.map((bullet) => `- ${bullet}`).join("\n")}`
  )
  .join("\n\n")}`,
    `${SECTION_DIVIDER}
${content.ats.educationTitle}
${SECTION_DIVIDER}

${content.education
  .map(
    (item) => `${item.title}
${item.school}
${item.period}
${item.detail}`
  )
  .join("\n\n")}`,
    `${SECTION_DIVIDER}
${content.ats.languagesTitle}
${SECTION_DIVIDER}

${languageList}`,
  ];

  return `Enzo Villela Bispo
${role}

${location}
enzo.bispo22@gmail.com | linkedin.com/in/enzo-bispo-68738a24b | portifolio-enzo-bispo.vercel.app

${sections.join("\n\n")}`;
}

export async function GET(request: NextRequest) {
  const language = resolveLanguage(request.nextUrl.searchParams.get("lang"));
  const content = cvContent[language];
  const fileContents = buildAtsText(language);

  return new Response(fileContents, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(
        content.ats.fileName
      )}`,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
