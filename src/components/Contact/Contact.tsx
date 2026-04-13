import { Mail, Linkedin, Github } from 'lucide-react';
import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';
import SectionReveal from '@/components/SectionReveal/SectionReveal';

const Contact = () => {
  const { language } = useAppContext();
  const t = translations[language].contact;

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="label-tag mb-4">{t.tag}</p>
          <div className="divider-accent mb-8" />
        </SectionReveal>

        <div className="max-w-2xl">
          <SectionReveal delay={0.1}>
            <h2 className="heading-section mb-6">{t.title}</h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="text-body mb-10">{t.description}</p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-90 mb-8"
            >
              <Mail className="w-4 h-4" />
              {t.email}
            </a>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <p className="text-sm text-muted-foreground mb-4">{t.or}</p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
