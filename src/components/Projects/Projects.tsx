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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="aspect-[16/10] bg-secondary rounded-lg mb-6 overflow-hidden relative flex items-center justify-center border border-border group-hover:border-primary/30 transition-all duration-500">
        <span className="text-6xl font-display font-light text-muted-foreground/20 group-hover:text-primary/20 transition-colors duration-500">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
      </div>

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
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

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {project.description[language]}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[11px] tracking-wider uppercase text-muted-foreground border border-border px-3 py-1 rounded-full">
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
          <h2 className="heading-section mb-16">{t.title}</h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
