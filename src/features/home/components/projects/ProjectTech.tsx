import { cn } from "@/shared/lib/utils";

export function ProjectTech({ tech, compact = false }: { tech: string[]; compact?: boolean }) {
  return (
    <ul className={cn("flex flex-wrap", compact ? "gap-2" : "gap-2.5 sm:gap-3")}>
      {tech.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-center gap-2 rounded-full border border-black/8 bg-white font-medium text-[#3f3f3f]",
            compact ? "px-3 py-1 text-xs" : "px-4 py-2 text-sm shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-black/45" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
