import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';
import SectionReveal from '@/components/SectionReveal/SectionReveal';
import { skills } from './Skills.data';

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-[2px] bg-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-primary"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const { language } = useAppContext();
  const t = translations[language].skills;

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="label-tag mb-4">{t.tag}</p>
          <div className="divider-accent mb-8" />
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16">
          <SectionReveal delay={0.1}>
            <h2 className="heading-section">{t.title}</h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-body">{t.description}</p>
          </SectionReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-8">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
