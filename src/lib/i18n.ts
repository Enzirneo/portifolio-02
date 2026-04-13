export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      approach: 'Abordagem',
      skills: 'Skills',
      projects: 'Projetos',
      experience: 'Jornada',
      contact: 'Contato',
    },
    hero: {
      greeting: '// Olá, eu sou',
      name: 'Enzo Villela Bispo',
      role: 'Full Stack Developer · Software Architecture · UX-Oriented Solutions',
      description: 'Construo aplicações web e sistemas escaláveis unindo frontend, backend, arquitetura e experiência do usuário. Meu foco é criar soluções que funcionem bem hoje e permaneçam sustentáveis amanhã.',
      cta: 'Ver projetos',
      ctaSecondary: 'Fale comigo',
    },
    approach: {
      tag: '// abordagem',
      title: 'Como eu penso sistemas',
      description: 'Cada projeto começa com uma decisão de arquitetura. Penso em modularidade, escalabilidade e manutenibilidade antes de escrever a primeira linha de código.',
      pillars: [
        {
          title: 'Arquitetura',
          description: 'Sistemas desacoplados, bem estruturados e preparados para escalar. Separação clara de responsabilidades.',
          icon: 'layers',
        },
        {
          title: 'Modularidade',
          description: 'Componentes reutilizáveis, contratos bem definidos e código que se lê como documentação.',
          icon: 'boxes',
        },
        {
          title: 'Performance',
          description: 'Otimização desde a escolha do bundle até o render. Cada milissegundo importa na experiência.',
          icon: 'zap',
        },
        {
          title: 'UX como diferencial',
          description: 'Interfaces que funcionam com clareza. Design a serviço da usabilidade, não da estética isolada.',
          icon: 'sparkles',
        },
      ],
    },
    skills: {
      tag: '// skills',
      title: 'Stack & Competências',
      description: 'Competências organizadas para mostrar stack, repertório técnico e a identidade visual de cada tecnologia.',
    },
    projects: {
      tag: '// projetos',
      title: 'Projetos selecionados',
      viewProject: 'Ver projeto',
      viewCode: 'Ver código',
      problem: 'Problema',
      solution: 'Solução',
      architecture: 'Arquitetura',
    },
    experience: {
      tag: '// jornada',
      title: 'Evolução profissional',
    },
    contact: {
      tag: '// contato',
      title: 'Vamos construir algo juntos?',
      description: 'Aberto a oportunidades em engenharia de software, arquitetura de sistemas, frontend estratégico e produtos digitais com forte preocupação em UX.',
      email: 'Enviar email',
      or: 'ou encontre-me em',
    },
    footer: {
      designed: 'Engenharia e design por',
      by: '',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      approach: 'Approach',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Journey',
      contact: 'Contact',
    },
    hero: {
      greeting: '// Hi, I\'m',
      name: 'Enzo Villela Bispo',
      role: 'Full Stack Developer · Software Architecture · UX-Oriented Solutions',
      description: 'I build web applications and scalable systems by connecting frontend, backend, architecture and user experience. My focus is to create solutions that work well today and stay sustainable tomorrow.',
      cta: 'View projects',
      ctaSecondary: 'Get in touch',
    },
    approach: {
      tag: '// approach',
      title: 'How I think about systems',
      description: 'Every project starts with an architecture decision. I think about modularity, scalability and maintainability before writing the first line of code.',
      pillars: [
        {
          title: 'Architecture',
          description: 'Decoupled, well-structured systems ready to scale. Clear separation of concerns.',
          icon: 'layers',
        },
        {
          title: 'Modularity',
          description: 'Reusable components, well-defined contracts and code that reads like documentation.',
          icon: 'boxes',
        },
        {
          title: 'Performance',
          description: 'Optimization from bundle choice to render. Every millisecond matters in the experience.',
          icon: 'zap',
        },
        {
          title: 'UX as differentiator',
          description: 'Interfaces that work with clarity. Design in service of usability, not aesthetics alone.',
          icon: 'sparkles',
        },
      ],
    },
    skills: {
      tag: '// skills',
      title: 'Stack & Competencies',
      description: 'Competencies organized to show stack, technical range and the visual identity of each technology.',
    },
    projects: {
      tag: '// projects',
      title: 'Selected projects',
      viewProject: 'View project',
      viewCode: 'View code',
      problem: 'Problem',
      solution: 'Solution',
      architecture: 'Architecture',
    },
    experience: {
      tag: '// journey',
      title: 'Professional evolution',
    },
    contact: {
      tag: '// contact',
      title: "Let's build something together?",
      description: 'Open to opportunities in software engineering, systems architecture, strategic frontend and digital products with a strong UX mindset.',
      email: 'Send email',
      or: 'or find me at',
    },
    footer: {
      designed: 'Engineered and designed by',
      by: '',
      rights: 'All rights reserved.',
    },
  },
} as const;
