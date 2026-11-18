import Image from "next/image";
import type { Project } from "@/shared/data/projects";
import { useTranslations } from "@/shared/i18n/LanguageProvider";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { ProjectTech } from "./ProjectTech";

export function CompactProjectCard({ project }: { project: Project }) {
  const { language } = useTranslations();
  const copy = project.copy[language];

  return (
    <article className="project-card flex flex-col overflow-hidden rounded-3xl border border-black/8 bg-white/70 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
      {project.image && (
        <div
          className="relative aspect-[16/9] w-full"
          style={{ backgroundColor: project.imageBackground ?? "#f1ebe3" }}
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-xl font-bold text-[#161616]">{project.name}</h4>
          <ProjectStatusBadge status={project.status} />
        </div>
        <p className="line-clamp-4 text-sm leading-relaxed text-[#4b4b4b]">{copy.description}</p>
        <div className="mt-auto flex flex-col gap-4">
          <ProjectTech tech={project.tech} compact />
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
