export interface Project {
  id: number;
  title: string;
  description: { pt: string; en: string };
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Design System',
    description: {
      pt: 'Sistema de design completo com componentes reutilizáveis, tokens e documentação interativa.',
      en: 'Complete design system with reusable components, tokens and interactive documentation.',
    },
    tags: ['React', 'TypeScript', 'Storybook'],
    featured: true,
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: {
      pt: 'Plataforma de e-commerce com foco em UX, performance e conversão.',
      en: 'E-commerce platform focused on UX, performance and conversion.',
    },
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    featured: true,
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: {
      pt: 'Dashboard interativo com visualizações de dados em tempo real e relatórios customizáveis.',
      en: 'Interactive dashboard with real-time data visualizations and customizable reports.',
    },
    tags: ['React', 'D3.js', 'WebSocket'],
    featured: true,
    link: '#',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description: {
      pt: 'Aplicativo bancário com foco em acessibilidade e experiência premium.',
      en: 'Banking app focused on accessibility and premium experience.',
    },
    tags: ['React Native', 'TypeScript'],
    featured: false,
    link: '#',
  },
];
