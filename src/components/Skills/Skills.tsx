import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';
import SectionReveal from '@/components/SectionReveal/SectionReveal';
import { skills, categoryLabels } from './Skills.data';

const categories = ['architecture', 'development', 'ux'] as const;

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

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => {
            const catSkills = skills.filter(s => s.category === cat);
            return (
              <SectionReveal key={cat} delay={0.1 + ci * 0.1}>
                <div className="card-system h-full">
                  <p className="mono-label mb-5">{categoryLabels[cat][language]}</p>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map(skill => (
                      <span
                        key={skill.name}
                        className="text-sm px-3 py-1.5 rounded-md bg-secondary text-foreground border border-border transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
