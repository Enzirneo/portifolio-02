import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';
import SectionReveal from '@/components/SectionReveal/SectionReveal';
import { experiences } from './Experience.data';

const TimelineItem = ({ item, index }: { item: typeof experiences[0]; index: number }) => {
  const { language } = useAppContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-10 last:pb-0 group"
    >
      <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-border group-last:hidden" />
      <div className="absolute left-[-3px] top-2 w-[7px] h-[7px] rounded-full bg-primary" />

      <div className="flex items-center gap-3 mb-1">
        <span className="mono-label">{item.period[language]}</span>
        <span className="mono-label text-primary">{item.phase[language]}</span>
      </div>

      <h3 className="text-base font-semibold text-foreground mb-0.5">
        {item.role[language]}
      </h3>

      <p className="text-sm font-medium text-primary mb-2">
        {item.company[language]}
      </p>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {item.description[language]}
      </p>
    </motion.div>
  );
};

const Experience = () => {
  const { language } = useAppContext();
  const t = translations[language].experience;

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="label-tag mb-4">{t.tag}</p>
          <div className="divider-accent mb-8" />
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <SectionReveal delay={0.1}>
            <h2 className="heading-section">{t.title}</h2>
          </SectionReveal>

          <div>
            {experiences.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;