import { ExternalLinkIcon, GithubIcon } from "@/shared/components/icons";
import type { Project } from "@/shared/data/projects";
import { useTranslations } from "@/shared/i18n/LanguageProvider";

const linkClass =
  "flex items-center gap-2 rounded-md text-sm font-medium text-black/70 transition-colors hover:text-[#2f6b57] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6b57]";

export function ProjectLinks({ project }: { project: Project }) {
  const { copy } = useTranslations();

  if (!project.url && !project.weburl) return null;

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {project.weburl && (
        <a
          href={project.weburl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${copy.projects.liveDemo}: ${project.name}`}
          className={linkClass}
        >
          <ExternalLinkIcon className="h-5 w-5" />
          <span>{copy.projects.liveDemo}</span>
        </a>
      )}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${copy.projects.source}: ${project.name}`}
          className={linkClass}
        >
          <GithubIcon className="h-5 w-5" />
          <span>{copy.projects.source}</span>
        </a>
      )}
    </div>
  );
}
