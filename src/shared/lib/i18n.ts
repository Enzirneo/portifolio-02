export type Language = "pt-BR" | "en";

export const defaultLanguage: Language = "pt-BR";
export const LANGUAGE_COOKIE_KEY = "portfolio-language";

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "pt-BR" || value === "en";
}

function parseAcceptLanguage(header: string): string[] {
  return header
    .split(",")
    .map((entry) => {
      const [tag, ...params] = entry.trim().split(";");
      const quality = params.find((param) => param.trim().startsWith("q="));
      return { tag: tag.toLowerCase(), quality: quality ? Number(quality.trim().slice(2)) : 1 };
    })
    .filter(({ tag, quality }) => tag !== "" && quality > 0)
    .sort((a, b) => b.quality - a.quality)
    .map(({ tag }) => tag);
}

function toSupportedLanguage(tag: string): Language | undefined {
  const primarySubtag = tag.split("-")[0];
  if (primarySubtag === "pt") return "pt-BR";
  if (primarySubtag === "en") return "en";
  return undefined;
}

export function getLanguageFromAcceptLanguage(
  acceptLanguage: string | null | undefined
): Language {
  if (!acceptLanguage) return defaultLanguage;

  for (const tag of parseAcceptLanguage(acceptLanguage)) {
    const language = toSupportedLanguage(tag);
    if (language) return language;
  }

  return defaultLanguage;
}

export const translations = {
  "pt-BR": {
    nav: {
      about: "sobre",
      projects: "projetos",
      skills: "habilidades",
      contact: "contato",
      cv: "CV",
      languageToggle: "Alternar idioma",
    },
    hero: {
      badge: "Disponível para oportunidades",
      roles: [
        { first: "Desenvolvedor", second: "Full Stack." },
        { first: "Front-end", second: "& UX/UI." },
        { first: "Soluções", second: "orientadas a UX." },
      ],
      quote:
        "Desenvolvedor full stack júnior com foco em front-end e UX. Criei a Flwxo, um SaaS para clínicas, e hoje atuo como Analista de Sistemas.",
      ctaPrimary: "Fale comigo",
      ctaSecondary: "Ver projetos",
      ctaResume: "Ver CV",
    },
    about: {
      srOnly: "Sobre mim",
      location: "Rio de Janeiro, RJ",
      whoTitle: "Quem eu sou",
      whoParagraph1: {
        prefix:
          "Sou o Enzo, desenvolvedor focado em transformar ideias em produtos digitais bem estruturados. Minha missão é ",
        linkBuildTools: "construir ferramentas",
        middle:
          " que capacitam pessoas e negócios a alcançar seus objetivos. Encaro cada projeto com foco em ",
        linkEmpathy: "empatia com o usuário",
        linkScalability: "escalabilidade",
        linkPerformance: "performance",
        suffix: ".",
      },
      whoParagraph2: {
        prefix:
          "Hoje sou Analista de Sistemas na Invest Smart XP e atuo como designer web e UX freelancer, com forte atenção ao front-end, especialmente ",
        linkNext: "Next.js",
        middle1: ", ",
        linkTypescript: "TypeScript",
        middle2: " e ",
        linkTailwind: "Tailwind CSS",
        suffix:
          ". Também criei a Flwxo, um SaaS para clínicas, da landing page ao sistema. Faço pós em Arquitetura de Software para construir produtos que escalam.",
      },
      tags: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "PostgreSQL",
        "Arquitetura modular",
      ],
      philosophyLabel: "FILOSOFIA DE DESIGN",
      philosophyTitleLink: "Interfaces",
      philosophyTitleEmphasis: "que você sente.",
      philosophyDescription:
        "Acredito em software que se comunica por movimento. Cada interação deve fornecer feedback imediato e significativo.",
      philosophyList: [
        "Estados de hover que informam",
        "Feedback de carregamento que tranquiliza",
        "Confirmação de intenção",
      ],
    globalLabel: "DISPONÍVEL GLOBALMENTE",
    globalTitle: "Adaptável a diferentes",
    globalTitleEmphasis: "fusos horários",
    globalParagraph: {
      prefix: "Trabalho de forma ",
      linkAsync: "async-first",
      middle:
        " e tenho facilidade para colaborar com equipes no fuso do Brasil e times globais. Retorno em 24-48h nas ",
      linkCommunication: "comunicações",
      suffix: ".",
    },
    globalBadge: "Remote-friendly · BR / US overlap",

    },
    projects: {
      label: "CONSTRUINDO EXPERIÊNCIAS DIGITAIS",
      titlePrimary: "Vitrine",
      titleAccent: "de Projetos",
      source: "Código",
      liveDemo: "Demo",
      footer: "E outros projetos em andamento.",
    },
    github: {
      label: "MINHA JORNADA NO CÓDIGO",
      title: "Atividade no GitHub",
      titleAccent: "e Aprimoramento Técnico",
    },
    skills: {
      label: "Processo e Ferramentas",
      title: "A mágica",
      titleAccent: "por trás",
      steps: [
        {
          icon: "01",
          title: "Arquitetura",
          desc: "Estruturar a solução com base sólida, visão modular e crescimento sustentável.",
        },
        {
          icon: "02",
          title: "Modularidade",
          desc: "Organizar componentes e fluxos para facilitar manutenção, escala e evolução.",
        },
        {
          icon: "03",
          title: "Performance",
          desc: "Buscar interfaces rápidas, leves e responsivas desde o início da implementação.",
        },
        {
          icon: "04",
          title: "UX como diferencial",
          desc: "Transformar clareza, usabilidade e sensação de produto em parte da entrega.",
        },
      ],
      toolboxTitle: "Minha Caixa de Ferramentas",
      toolboxCategories: {
        frontend: "FRONTEND",
        backend: "BACKEND",
        infrastructure: "INFRAESTRUTURA",
        testing: "TESTES",
      },
    },
    contact: {
      badge: "Contato",
      title: "Vamos construir algo",
      titleEmphasis: "significativo.",
      intro:
        "Atualmente estou disponível para contratação em empresa e oportunidades profissionais.",
      list: [
        {
          title: "Me contrate",
          desc: "para atuar no seu time e entregar funcionalidades críticas.",
        },
        {
          title: "Freelancer",
          desc: "para trabalhos freelance e demandas pontuais.",
        },
        {
          title: "Converse",
          desc: "sobre implementação técnica ou arquitetura.",
        },
      ],
      responseTimeLabel: "Tempo de resposta",
      responseTimeValue: "Em até 24-48 horas",
      formTitle: "Inicie um projeto",
      successTitle: "Mensagem enviada!",
      successMessage:
        "Obrigado por entrar em contato. Vou responder em até 48 horas.",
      successButton: "Enviar outra mensagem",
      labels: {
        name: "Nome",
        email: "Email",
        projectType: "Tipo de projeto",
        timeline: "Prazo",
        details: "Conte sobre o projeto",
        detailsGeneral: "Conte sobre sua mensagem",
      },
      placeholders: {
        name: "João Silva",
        email: "joao@exemplo.com",
        details: "O que vamos construir?",
        detailsGeneral: "Como posso te ajudar?",
      },
      options: {
        projectTypes: [
          "Desenvolvimento de aplicação web",
          "Landing page / Site Institucional",
          "Contratação em empresa",
          "Contato geral",
        ],
        timeline: ["Menos de 1 mês", "1 - 3 meses", "3 - 6 meses", "Flexível"],
      },
      submit: "Enviar mensagem",
      sending: "Enviando...",
      errorGeneric: "Algo deu errado. Tente novamente.",
      errorNetwork:
        "Falha ao enviar mensagem. Tente novamente ou envie um email direto.",
      errorTooFast:
        "Envio rápido demais. Aguarde alguns segundos e tente novamente.",
      errorCooldown:
        "Aguarde um minuto antes de enviar outra mensagem.",
      botFieldLabel: "Deixe este campo vazio",
      footer: "Vou responder em até 48 horas.",
    },
    cta: {
      line1: "Vamos criar",
      line2: "algo real.",
    },
    footer: {
      builtWith: "Construído com",
      madeWith: "Feito com",
    },
  },
  en: {
    nav: {
      about: "about",
      projects: "projects",
      skills: "skills",
      contact: "contact",
      cv: "CV",
      languageToggle: "Switch language",
    },
    hero: {
      badge: "Available for work",
      roles: [
        { first: "Full-Stack", second: "Developer." },
        { first: "Front-End", second: "& UX/UI." },
        { first: "UX-driven", second: "Solutions." },
      ],
      quote:
        "Junior full-stack developer focused on front-end and UX. I built Flwxo, a SaaS for clinics, and currently work as a Systems Analyst.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View projects",
      ctaResume: "View CV",
    },
    about: {
      srOnly: "About Me",
      location: "Rio de Janeiro, Brazil",
      whoTitle: "Who I am",
      whoParagraph1: {
        prefix:
          "I am Enzo, a developer focused on turning ideas into well-structured digital products. My mission is to ",
        linkBuildTools: "build tools",
        middle:
          " that empower people and businesses to achieve their goals. I approach every project with a focus on ",
        linkEmpathy: "user empathy",
        linkScalability: "scalability",
        linkPerformance: "performance",
        suffix: ".",
      },
      whoParagraph2: {
        prefix:
          "I am a Systems Analyst at Invest Smart XP and a freelance web and UX designer, with a strong focus on the front end—specifically ",
        linkNext: "Next.js",
        middle1: ", ",
        linkTypescript: "TypeScript",
        middle2: " and ",
        linkTailwind: "Tailwind",
        suffix: ". I also built Flwxo, a SaaS for clinics, from the landing page to the system. I am pursuing a postgraduate degree in Software Architecture to build products that scale.",
      },
      tags: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "PostgreSQL",
        "Clean Code",
      ],
      philosophyLabel: "DESIGN PHILOSOPHY",
      philosophyTitleLink: "Interfaces",
      philosophyTitleEmphasis: "you can feel.",
      philosophyDescription:
        "I believe in software that communicates through movement. Every interaction should provide immediate, meaningful feedback.",
      philosophyList: [
        "Hover states that inform",
        "Loading feedback that reassures",
        "Intent confirmation",
      ],
      globalLabel: "AVAILABLE GLOBALLY",
      globalTitle: "Adaptable across",
      globalTitleEmphasis: "time zones",
      globalParagraph: {
        prefix: "I work ",
        linkAsync: "async-first",
        middle:
          " and am comfortable collaborating with teams in US, UK, and European time zones. 24-48h turnaround on ",
        linkCommunication: "communications",
        suffix: ".",
      },
      globalBadge: "Remote-friendly · BR / US overlap",
    },
    projects: {
      label: "CRAFTING DIGITAL EXPERIENCES",
      titlePrimary: "Venture",
      titleAccent: "Showcase",
      source: "Source",
      liveDemo: "Live Demo",
      footer: "And other projects in progress.",
    },
    github: {
      label: "MY CODE JOURNEY",
      title: "GitHub Activity",
      titleAccent: "& Technical Improvement",
    },
    skills: {
      label: "Process & Tools",
      title: "The Magic",
      titleAccent: "Behind",
      steps: [
        {
          icon: "01",
          title: "Architecture",
          desc: "Shape the solution with a solid foundation, modular thinking, and room to grow.",
        },
        {
          icon: "02",
          title: "Modularity",
          desc: "Organize components and flows to make maintenance, scale, and evolution easier.",
        },
        {
          icon: "03",
          title: "Performance",
          desc: "Aim for fast, lightweight, and responsive interfaces from the start.",
        },
        {
          icon: "04",
          title: "UX as an edge",
          desc: "Turn clarity, usability, and product feel into part of the delivery itself.",
        },
      ],
      toolboxTitle: "My Toolbox",
      toolboxCategories: {
        frontend: "FRONTEND",
        backend: "BACKEND",
        infrastructure: "INFRASTRUCTURE",
        testing: "TESTING",
      },
    },
    contact: {
      badge: "Contact",
      title: "Let's build something",
      titleEmphasis: "meaningful.",
      intro:
        "I am currently available for full-time hiring and professional opportunities.",
      list: [
        {
          title: "Hire me",
          desc: "to join your team and ship critical product features.",
        },
        {
          title: "Freelance",
          desc: "for freelance work and scoped product demands.",
        },
        {
          title: "Discuss",
          desc: "technical implementation or architecture.",
        },
      ],
      responseTimeLabel: "Response Time",
      responseTimeValue: "Within 24-48 Hours",
      formTitle: "Start a project",
      successTitle: "Message Sent!",
      successMessage:
        "Thanks for reaching out. I'll get back to you within 48 hours.",
      successButton: "Send another message",
      labels: {
        name: "Name",
        email: "Email",
        projectType: "Project Type",
        timeline: "Timeline",
        details: "Tell me about the project",
        detailsGeneral: "Tell me about your message",
      },
      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        details: "What are we building?",
        detailsGeneral: "How can I help?",
      },
      options: {
        projectTypes: [
          "Web Application Development",
          "Landing Page / Marketing Site",
          "Hiring Opportunity (Company Role)",
          "General Contact",
        ],
        timeline: [
          "Less than 1 month",
          "1 - 3 months",
          "3 - 6 months",
          "Flexible",
        ],
      },
      submit: "Send Message",
      sending: "Sending...",
      errorGeneric: "Something went wrong. Please try again.",
      errorNetwork:
        "Failed to send message. Please try again or email directly.",
      errorTooFast:
        "Submitted too quickly. Please wait a few seconds and try again.",
      errorCooldown:
        "Please wait a minute before sending another message.",
      botFieldLabel: "Leave this field empty",
      footer: "I'll get back to you within 48 hours.",
    },
    cta: {
      line1: "Let's create",
      line2: "something real.",
    },
    footer: {
      builtWith: "Built with",
      madeWith: "Made with",
    },
  },
} as const;

export type Translation = (typeof translations)[Language];


