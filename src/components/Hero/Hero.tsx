import { motion } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';
import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';

const Hero = () => {
  const { language } = useAppContext();
  const t = translations[language].hero;

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-8"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">{t.greeting}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="heading-display mb-3"
          >
            {t.name}
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl font-mono font-medium text-muted-foreground mb-8"
          >
            {t.role}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '2rem' }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="h-[2px] bg-primary mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-body max-w-lg mb-12"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-md transition-all duration-300 hover:opacity-90"
            >
              {t.cta}
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium tracking-wide rounded-md transition-all duration-300 hover:border-primary hover:text-primary"
            >
              {t.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.querySelector('#approach')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
