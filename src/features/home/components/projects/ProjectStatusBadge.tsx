import { cn } from "@/shared/lib/utils";
import type { ProjectStatus } from "@/shared/data/projects";
import { useTranslations } from "@/shared/i18n/LanguageProvider";

const statusStyles: Record<ProjectStatus, { badge: string; dot: string }> = {
  live: {
    badge: "border-emerald-700/25 bg-emerald-600/10 text-emerald-900",
    dot: "bg-emerald-600",
  },
  development: {
    badge: "border-amber-700/25 bg-amber-500/10 text-amber-900",
    dot: "bg-amber-600",
  },
  local: {
    badge: "border-sky-800/25 bg-sky-600/10 text-sky-900",
    dot: "bg-sky-700",
  },
  study: {
    badge: "border-black/15 bg-black/5 text-[#3f3f3f]",
    dot: "bg-black/45",
  },
};

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const { copy } = useTranslations();
  const styles = statusStyles[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        styles.badge
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", styles.dot)} aria-hidden="true" />
      {copy.projects.status[status]}
    </span>
  );
}
