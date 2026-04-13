export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Seu Nome',
      role: 'Desenvolvedor Front-End',
      description: 'Criando experiências digitais com foco em UI/UX, performance e atenção aos detalhes. Transformo ideias em interfaces elegantes e funcionais.',
      cta: 'Ver projetos',
      ctaSecondary: 'Fale comigo',
    },
    about: {
      tag: 'Sobre mim',
      title: 'Design é sobre resolver problemas com elegância',
      p1: 'Sou um desenvolvedor front-end apaixonado por criar interfaces que combinam estética e funcionalidade. Com experiência em React, TypeScript e design systems, busco entregar produtos digitais que fazem a diferença.',
      p2: 'Acredito que um bom produto nasce da intersecção entre tecnologia, design e empatia pelo usuário. Cada detalhe importa — da tipografia à micro-interação.',
    },
    skills: {
      tag: 'Habilidades',
      title: 'Ferramentas & Tecnologias',
      description: 'Stack focada em performance, escalabilidade e experiências de alto nível.',
    },
    projects: {
      tag: 'Projetos',
      title: 'Trabalhos selecionados',
      viewProject: 'Ver projeto',
      viewCode: 'Ver código',
    },
    experience: {
      tag: 'Trajetória',
      title: 'Experiência profissional',
    },
    contact: {
      tag: 'Contato',
      title: 'Vamos conversar?',
      description: 'Estou aberto a novas oportunidades, projetos freelance e colaborações. Se você tem uma ideia interessante, entre em contato.',
      email: 'Enviar email',
      or: 'ou encontre-me em',
    },
    footer: {
      designed: 'Projetado e desenvolvido com',
      by: 'por',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Your Name',
      role: 'Front-End Developer',
      description: 'Crafting digital experiences focused on UI/UX, performance and attention to detail. I turn ideas into elegant, functional interfaces.',
      cta: 'View projects',
      ctaSecondary: 'Get in touch',
    },
    about: {
      tag: 'About me',
      title: 'Design is about solving problems with elegance',
      p1: "I'm a front-end developer passionate about creating interfaces that blend aesthetics and functionality. With experience in React, TypeScript and design systems, I strive to deliver digital products that make a difference.",
      p2: 'I believe great products are born at the intersection of technology, design and user empathy. Every detail matters — from typography to micro-interactions.',
    },
    skills: {
      tag: 'Skills',
      title: 'Tools & Technologies',
      description: 'Stack focused on performance, scalability and premium experiences.',
    },
    projects: {
      tag: 'Projects',
      title: 'Selected work',
      viewProject: 'View project',
      viewCode: 'View code',
    },
    experience: {
      tag: 'Journey',
      title: 'Professional experience',
    },
    contact: {
      tag: 'Contact',
      title: "Let's talk?",
      description: "I'm open to new opportunities, freelance projects and collaborations. If you have an interesting idea, get in touch.",
      email: 'Send email',
      or: 'or find me at',
    },
    footer: {
      designed: 'Designed and developed with',
      by: 'by',
      rights: 'All rights reserved.',
    },
  },
} as const;
