import { Mail, Github } from 'lucide-react';
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

        <div className="max-w-3xl">
          <SectionReveal delay={0.1}>
            <h2 className="heading-section mb-6">{t.title}</h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="text-body mb-10">{t.description}</p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="mailto:enzo.bispo22@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-md transition-all duration-300 hover:opacity-90"
              >
                <Mail className="w-4 h-4" />
                {t.email}
              </a>

              <a
                href="https://github.com/Enzirneo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 border border-border text-foreground text-sm font-medium tracking-wide rounded-md transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card-system">
                <p className="mono-label mb-2">email</p>
                <p className="text-sm text-foreground break-all">enzo.bispo22@gmail.com</p>
              </div>
              <div className="card-system">
                <p className="mono-label mb-2">github</p>
                <p className="text-sm text-foreground break-all">github.com/Enzirneo</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
