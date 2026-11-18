import Image from "next/image";
import type { Project } from "@/shared/data/projects";

const DEFAULT_ASPECT_RATIO = 16 / 9.1;

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/9.1] w-full overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
      {project.image ? <ScreenshotFrame project={project} /> : <NameplateVisual project={project} />}
    </div>
  );
}

function ScreenshotFrame({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-2.5 sm:p-3 lg:p-4">
      <div
        className="relative w-full max-w-full overflow-hidden rounded-3xl border border-black/8 bg-[#fcfaf7] p-1 shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
        style={{ aspectRatio: project.imageAspectRatio ?? DEFAULT_ASPECT_RATIO }}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-2px)]"
          style={{ backgroundColor: project.imageBackground ?? "#f1ebe3" }}
        >
          <Image
            src={project.image ?? ""}
            alt={project.name}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            style={{ transform: `scale(${project.imageZoom ?? 1})` }}
            className="object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
}

// Projetos sem captura de tela: o nome vira a imagem, no mesmo verde da secao "Sobre".
function NameplateVisual({ project }: { project: Project }) {
  return (
    <div
      role="img"
      aria-label={project.name}
      className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(135deg,#061410_0%,#0d2a21_55%,#1d4a3a_100%)] p-6 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1.4px)] [background-size:22px_22px]"
      />
      <span className="relative font-serif text-4xl italic text-white sm:text-5xl lg:text-6xl">
        {project.name}
      </span>
      <span className="relative text-xs font-semibold tracking-[0.22em] text-[#9fc4b0] uppercase">
        {project.tech.slice(0, 3).join(" · ")}
      </span>
    </div>
  );
}
