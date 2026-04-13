import { motion } from 'framer-motion';

interface BrandPillProps {
  name: string;
  mark: string;
  accent: string;
  glow: string;
  gradient?: string;
}

const BrandPill = ({ name, mark, accent, glow, gradient }: BrandPillProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 px-3.5 py-3 backdrop-blur-sm"
      style={{
        ['--skill-accent' as string]: accent,
        ['--skill-glow' as string]: glow,
        ['--skill-gradient' as string]: gradient ?? `linear-gradient(135deg, ${accent}, ${glow})`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'var(--skill-gradient)' }}
      />
      <div className="pointer-events-none absolute inset-[1px] rounded-[15px] bg-background/94 dark:bg-card/94" />

      <div className="relative z-10 flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 group-hover:border-transparent group-hover:text-white"
          style={{
            color: accent,
            borderColor: `${accent}40`,
            background: `linear-gradient(135deg, ${accent}18, ${glow}10)`,
            boxShadow: `0 0 0 1px ${accent}12 inset`,
          }}
        >
          <span className="transition-all duration-300 group-hover:scale-105">{mark}</span>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-[var(--skill-accent)]">
            {name}
          </p>
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/75">
            skill
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandPill;
