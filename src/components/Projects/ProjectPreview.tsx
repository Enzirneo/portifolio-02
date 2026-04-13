import { MonitorSmartphone, PanelsTopLeft, Sparkles } from 'lucide-react';

interface ProjectPreviewProps {
  title: string;
  accent: string;
  glow: string;
  metrics: string[];
  modules: string[];
  imageLabel: string;
}

const ProjectPreview = ({ title, accent, glow, metrics, modules, imageLabel }: ProjectPreviewProps) => {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-border bg-gradient-to-br from-background via-secondary/60 to-background p-3"
      style={{
        boxShadow: `0 1px 0 rgba(255,255,255,0.08) inset, 0 24px 80px ${accent}12`,
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: `radial-gradient(circle at top right, ${glow}, transparent 38%), radial-gradient(circle at bottom left, ${accent}, transparent 28%)` }}
      />

      <div className="relative h-full rounded-[18px] border border-border/80 bg-card/90 p-3 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 border-b border-border/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: accent }} />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.26em] text-muted-foreground">
            <MonitorSmartphone className="h-3 w-3" />
            {imageLabel}
          </div>
        </div>

        <div className="grid grid-cols-[1.05fr_0.95fr] gap-3 h-[calc(100%-3.2rem)] pt-3">
          <div className="rounded-2xl border border-border/80 bg-background/85 p-3 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.26em] text-muted-foreground">Preview</p>
                <h4 className="text-sm font-semibold text-foreground truncate max-w-[12rem]">{title}</h4>
              </div>
              <PanelsTopLeft className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {metrics.map((metric) => (
                <div key={metric} className="rounded-xl border border-border/70 bg-secondary/60 px-2.5 py-2">
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">module</p>
                  <p className="mt-1 text-xs font-medium text-foreground">{metric}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-2">
              <div className="h-2 w-full rounded-full bg-secondary/80" />
              <div className="h-2 w-4/5 rounded-full bg-secondary/80" />
              <div className="h-20 rounded-2xl border border-border/70 bg-gradient-to-br from-secondary/80 to-background" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-border/80 bg-background/85 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">Structure</p>
                <Sparkles className="h-4 w-4" style={{ color: accent }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {modules.map((module) => (
                  <span
                    key={module}
                    className="rounded-full border px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em]"
                    style={{ borderColor: `${accent}35`, color: accent, background: `${accent}10` }}
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 rounded-2xl border border-border/80 bg-background/85 p-3 grid grid-rows-3 gap-2">
              <div className="rounded-xl" style={{ background: `linear-gradient(135deg, ${accent}22, transparent)` }} />
              <div className="rounded-xl bg-secondary/70" />
              <div className="rounded-xl bg-secondary/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
