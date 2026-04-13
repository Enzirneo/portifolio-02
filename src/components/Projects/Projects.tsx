import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { useAppContext } from '@/lib/theme';
import { translations } from '@/lib/i18n';
import SectionReveal from '@/components/SectionReveal/SectionReveal';
import { projects } from './Projects.data';

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { language } = useAppContext();
  const t = translations[language].projects;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="card-system group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="mono-label">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.link && (
            <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors" aria-label={t.viewProject}>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="space-y-3 mb-5">
        <div>
          <p className="mono-label mb-1">{t.problem}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.problem[language]}</p>
        </div>
        <div>
          <p className="mono-label mb-1">{t.solution}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.solution[language]}</p>
        </div>
        <div>
          <p className="mono-label mb-1">{t.architecture}</p>
          <p className="text-sm font-mono text-primary/80 leading-relaxed">{project.architecture[language]}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
        {project.tags.map(tag => (
          <span key={tag} className="text-[11px] font-mono tracking-wider text-muted-foreground border border-border px-2.5 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { language } = useAppContext();
  const t = translations[language].projects;
  const featured = projects.filter(p => p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="label-tag mb-4">{t.tag}</p>
          <div className="divider-accent mb-8" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="heading-section mb-12">{t.title}</h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
