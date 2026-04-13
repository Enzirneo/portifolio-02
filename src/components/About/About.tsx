import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';
import SectionReveal from '@/components/SectionReveal/SectionReveal';

const About = () => {
  const { language } = useAppContext();
  const t = translations[language].about;

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="label-tag mb-4">{t.tag}</p>
          <div className="divider-accent mb-8" />
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <SectionReveal delay={0.1}>
            <h2 className="heading-section">
              {t.title}
            </h2>
          </SectionReveal>

          <div className="space-y-6">
            <SectionReveal delay={0.2}>
              <p className="text-body">{t.p1}</p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <p className="text-body">{t.p2}</p>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
