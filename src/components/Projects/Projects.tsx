import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';
import SectionReveal from '@/components/SectionReveal/SectionReveal';
import { projects } from './Projects.data';

const Projects = () => {
  const { language } = useAppContext();
  const t = translations[language].projects;

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="label-tag mb-4">{t.tag}</p>
          <div className="divider-accent mb-8" />
          <h2 className="heading-section mb-12">{t.title}</h2>
        </SectionReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-[1.75rem] border border-border bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative overflow-hidden border-b border-border bg-secondary/30">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description[language]}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
                      {language === 'pt' ? 'Problema' : 'Problem'}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.problem[language]}
                    </p>
                  </div>

                  <div>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
                      {language === 'pt' ? 'Solução' : 'Solution'}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.solution[language]}
                    </p>
                  </div>

                  <div>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
                      {language === 'pt' ? 'Arquitetura' : 'Architecture'}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.architecture[language]}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
                    >
                      <ExternalLink size={16} />
                      {language === 'pt' ? 'Ver projeto' : 'Live project'}
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
