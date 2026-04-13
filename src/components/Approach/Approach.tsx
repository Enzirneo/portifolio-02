import { Layers, Boxes, Zap, Sparkles } from 'lucide-react';
import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';
import SectionReveal from '@/components/SectionReveal/SectionReveal';

const iconMap = {
  layers: Layers,
  boxes: Boxes,
  zap: Zap,
  sparkles: Sparkles,
};

const Approach = () => {
  const { language } = useAppContext();
  const t = translations[language].approach;

  return (
    <section id="approach" className="section-padding">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <SectionReveal key={i} delay={0.1 + i * 0.08}>
                <div className="card-system h-full">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;
