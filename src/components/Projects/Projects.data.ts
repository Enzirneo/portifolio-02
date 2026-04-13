export interface Project {
  id: number;
  title: string;
  problem: { pt: string; en: string };
  solution: { pt: string; en: string };
  architecture: { pt: string; en: string };
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Platform Design System',
    problem: {
      pt: 'Inconsistência visual e retrabalho entre 5 squads diferentes trabalhando no mesmo produto.',
      en: 'Visual inconsistency and rework across 5 different squads working on the same product.',
    },
    solution: {
      pt: 'Design system com tokens, componentes compostos e documentação interativa.',
      en: 'Design system with tokens, compound components and interactive documentation.',
    },
    architecture: {
      pt: 'Monorepo com Turborepo · React + TypeScript · Storybook · Changesets',
      en: 'Monorepo with Turborepo · React + TypeScript · Storybook · Changesets',
    },
    tags: ['React', 'TypeScript', 'Storybook', 'Monorepo'],
    featured: true,
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'E-commerce Microservices',
    problem: {
      pt: 'Monolito legado com deploys demorados e alta taxa de incidentes em produção.',
      en: 'Legacy monolith with slow deploys and high production incident rate.',
    },
    solution: {
      pt: 'Migração incremental para microserviços com API Gateway e event-driven architecture.',
      en: 'Incremental migration to microservices with API Gateway and event-driven architecture.',
    },
    architecture: {
      pt: 'Node.js · PostgreSQL · RabbitMQ · Docker · AWS ECS',
      en: 'Node.js · PostgreSQL · RabbitMQ · Docker · AWS ECS',
    },
    tags: ['Node.js', 'Microservices', 'AWS', 'Docker'],
    featured: true,
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Real-time Analytics Dashboard',
    problem: {
      pt: 'Stakeholders sem visibilidade sobre métricas de produto em tempo real.',
      en: 'Stakeholders lacking real-time visibility on product metrics.',
    },
    solution: {
      pt: 'Dashboard interativo com streaming de dados, filtros dinâmicos e alertas configuráveis.',
      en: 'Interactive dashboard with data streaming, dynamic filters and configurable alerts.',
    },
    architecture: {
      pt: 'React · WebSocket · D3.js · Redis · TimescaleDB',
      en: 'React · WebSocket · D3.js · Redis · TimescaleDB',
    },
    tags: ['React', 'WebSocket', 'D3.js', 'Redis'],
    featured: true,
    link: '#',
  },
];
