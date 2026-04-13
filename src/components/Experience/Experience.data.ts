export interface ExperienceItem {
  role: { pt: string; en: string };
  company: string;
  period: string;
  description: { pt: string; en: string };
  phase: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: { pt: 'Engenheiro de Software Senior', en: 'Senior Software Engineer' },
    company: 'Tech Company',
    period: '2023 — Presente',
    phase: 'architecture',
    description: {
      pt: 'Arquitetura de sistemas distribuídos, liderança técnica de squads e definição de padrões de engenharia para toda a organização.',
      en: 'Distributed systems architecture, technical squad leadership and engineering standards definition across the organization.',
    },
  },
  {
    role: { pt: 'Desenvolvedor Front-End Senior', en: 'Senior Front-End Developer' },
    company: 'Digital Agency',
    period: '2021 — 2023',
    phase: 'frontend',
    description: {
      pt: 'Criação de design systems, migração de codebase para TypeScript e implementação de pipelines de CI/CD.',
      en: 'Design system creation, codebase migration to TypeScript and CI/CD pipeline implementation.',
    },
  },
  {
    role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    company: 'Startup',
    period: '2019 — 2021',
    phase: 'fullstack',
    description: {
      pt: 'Desenvolvimento de APIs REST, interfaces em React e infraestrutura básica em AWS. Primeiro contato com arquitetura de microsserviços.',
      en: 'REST API development, React interfaces and basic AWS infrastructure. First contact with microservices architecture.',
    },
  },
];
