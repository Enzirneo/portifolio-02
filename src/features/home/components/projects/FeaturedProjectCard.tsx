import { Code2, Star } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import type { Project } from "@/shared/data/projects";
import { useTranslations } from "@/shared/i18n/LanguageProvider";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { ProjectTech } from "./ProjectTech";
import { ProjectVisual } from "./ProjectVisual";

interface FeaturedProjectCardProps {
  project: Project;
  isVisualFirst: boolean;
}

export function FeaturedProjectCard({ project, isVisualFirst }: FeaturedProjectCardProps) {
  const { language } = useTranslations();
  const copy = project.copy[language];

  return (
    <article className="project-card grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
      <div
        className={cn(
          "order-2 flex flex-col gap-5 text-left sm:gap-6 lg:col-span-5",
          isVisualFirst ? "lg:order-2" : "lg:order-1"
        )}
      >
        <div className="flex items-center gap-4">
          <div className="h-px w-10 shrink-0 rounded-full bg-[#2f6b57]/55" />
          <h3 className="text-3xl font-bold text-[#161616] sm:text-4xl md:text-5xl">{project.name}</h3>
        </div>

        <div>
          <ProjectStatusBadge status={project.status} />
        </div>

        <p className="text-base leading-relaxed text-[#4b4b4b] sm:text-lg">{copy.description}</p>

        <div className="my-2 flex flex-col gap-3 sm:my-4">
          <div className="flex items-start gap-3">
            <Star className="mt-1 h-5 w-5 shrink-0 text-[#2f6b57]" aria-hidden="true" />
            <p className="text-[#4f4f4f]">{copy.outcome}</p>
          </div>
          <div className="flex items-start gap-3">
            <Code2 className="mt-1 h-5 w-5 shrink-0 text-[#2f6b57]" aria-hidden="true" />
            <p className="text-[#4f4f4f]">{copy.role}</p>
          </div>
        </div>

        <ProjectTech tech={project.tech} />
        <ProjectLinks project={project} />
      </div>

      <div className={cn("order-1 lg:col-span-7", isVisualFirst ? "lg:order-1" : "lg:order-2")}>
        <ProjectVisual project={project} />
      </div>
    </article>
  );
}
