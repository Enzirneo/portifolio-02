import { motion } from 'framer-motion';
import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';
import SectionReveal from '@/components/SectionReveal/SectionReveal';
import { skillCategories } from './Skills.data';

const Skills = () => {
  const { language } = useAppContext();
  const t = translations[language].skills;

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="label-tag mb-4">{t.tag}</p>
          <div className="divider-accent mb-8" />
          <h2 className="heading-section mb-12">{t.title}</h2>
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title.en}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-5 text-lg font-semibold text-foreground">
                {category.title[language]}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-3 py-2 text-sm text-foreground/90 shadow-sm transition-colors duration-200 hover:bg-secondary/50"
                    >
                      {Icon && <Icon className="h-4 w-4 shrink-0 text-primary" />}
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;