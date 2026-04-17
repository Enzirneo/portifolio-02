export type Language = "pt-BR" | "en";

export const defaultLanguage: Language = "pt-BR";
export const LANGUAGE_COOKIE_KEY = "portfolio-language";

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "pt-BR" || value === "en";
}

export function getLanguageFromAcceptLanguage(
  acceptLanguage: string | null | undefined
): Language {
  if (!acceptLanguage) return defaultLanguage;

  const normalized = acceptLanguage.toLowerCase();
  if (normalized.includes("en")) return "en";
  if (normalized.includes("pt")) return "pt-BR";

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
        { first: "Arquitetura", second: "de Software." },
        { first: "Soluções", second: "orientadas a UX." },
      ],
      quote:
        "Construo aplicações web e sistemas escaláveis unindo frontend, backend, arquitetura e experiência do usuário.",
      ctaPrimary: "Fale comigo",
      ctaSecondary: "Ver projetos",
      ctaResume: "Ver CV",
      ctaResumeSoon: "Página de CV em breve",
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
          "Atuo com desenvolvimento full stack e arquitetura de software, com forte atenção ao ecossistema de front-end, especialmente ",
        linkNext: "Next.js",
        middle1: ", ",
        linkTypescript: "TypeScript",
        middle2: " e ",
        linkTailwind: "Tailwind CSS",
        suffix:
          ". Busco criar interfaces claras, performáticas e sustentáveis para crescer junto com o produto.",
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
        " e tenho facilidade para colaborar com equipes nos fusos dos Brasil e times globais. Retorno em 24-48h nas ",
      linkCommunication: "comunicações",
      suffix: ".",
    },
    globalBadge: "Remote-friendly · BR / US overlap",

    },
    projects: {
      label: "CONSTRUINDO EXPERIÊNCIAS DIGITAIS",
      titlePrimary: "Vitrine",
      titleAccent: "de Projetos",
      marquee: "PROJETOS SELECIONADOS",
      source: "Código",
      liveDemo: "Demo",
      fallbackRole: "Desenvolvimento Full Stack",
      footer: "E outros projetos em andamento.",
      items: [
        {
          description:
            "Website institucional desenvolvido em WordPress para uma empresa fictícia de arquitetura, com foco na apresentação da marca, dos serviços e da proposta de valor do negócio. O projeto explora organização visual, estruturação de conteúdo e navegação clara, simulando a presença digital de uma empresa do setor.",
          outcome:
            "Apresentação digital clara e profissional para uma empresa fictícia de arquitetura.",
          role: "Desenvolvimento Front-end",
        },
        {
          description:
            "Plataforma web desenvolvida em React para organização de times de Esports, com foco em componentização, reaproveitamento de componentes e experiência de uso simples e dinâmica. O projeto permite estruturar equipes de forma visual e interativa.",
          outcome:
            "Organização prática de equipes e jogadores em uma interface interativa.",
          role: "Desenvolvimento Front-end",
        },
        {
          description:
            "Aplicação web desenvolvida com React e Vite que consome a API do Pexels para exibição dinâmica de imagens. O projeto destaca integração com API externa, reutilização de componentes e construção de uma interface voltada para busca e experiência visual do usuário.",
          outcome:
            "Busca e visualização de imagens em uma galeria moderna e dinâmica.",
          role: "Desenvolvimento Front-end",
        },
        {
          description:
            "Landing page moderna desenvolvida em React e Vite para um headset fictício voltado à neurotecnologia. O projeto foca em apresentação de produto, organização de seções estratégicas, responsividade e comunicação visual mais imersiva.",
          outcome:
            "Apresentação visual atrativa de um produto fictício de tecnologia.",
          role: "Desenvolvimento Front-end",
        },
      ],
    },
    automation: {
      label: "AUTOMAÇÃO, FLUXOS & IA",
      title: "Interesse em sistemas",
      titleAccent: "orquestrados",
      description:
        "Tenho bastante interesse por automação, integrações e produtos que conectam lógica, eventos e IA. Esta seção representa bem a forma como eu penso sistemas, regras de negócio e fluxos encadeados.",
      canvasTitle: "Fluxo explorável",
      canvasHint:
        "Arraste os blocos, troque o cenário e execute o fluxo para ver a lógica em movimento.",
      logTitle: "Eventos do fluxo",
      emptyLog: "Nenhum evento ainda. Execute um cenário para ver o fluxo acontecer.",
      noteTitle: "Por que isso está aqui?",
      note:
        "Porque meu interesse não está só na interface final, mas também na lógica por trás dela. Gosto de pensar em automações que conectam contexto, regras e ações sem deixar o sistema opaco.",
      controls: {
        play: "Executar fluxo",
        reset: "Resetar layout",
      },
      status: {
        idle: "Pronto para interação",
        running: "Executando cenário",
        done: "Cenário concluído",
      },
      chips: [
        {
          title: "Webhooks",
          description: "Entrada de eventos e sinais em tempo real.",
        },
        {
          title: "APIs",
          description: "Orquestração entre serviços e plataformas.",
        },
        {
          title: "IA aplicada",
          description: "Classificação, resumo e apoio à decisão.",
        },
        {
          title: "n8n mindset",
          description: "Fluxos claros, visuais e orientados por lógica.",
        },
      ],
      presets: [
        {
          name: "WhatsApp Ops",
          summary: "Organiza conversas e aciona o próximo passo",
          nodes: {
            trigger: {
              title: "Nova conversa",
              subtitle: "Mensagem chega pelo canal",
            },
            processor: {
              title: "Ler contexto",
              subtitle: "IA resume intenção e urgência",
            },
            router: {
              title: "Definir trilha",
              subtitle: "Suporte, vendas ou financeiro",
            },
            action: {
              title: "Registrar e responder",
              subtitle: "Atualiza sistema e dispara retorno",
            },
          },
          logs: [
            "Nova conversa recebida no canal",
            "IA resumiu contexto e urgência",
            "Fluxo encaminhado para a trilha correta",
            "Histórico salvo e resposta enviada",
          ],
        },
        {
          name: "Suporte",
          summary: "Organiza tickets e aciona respostas",
          nodes: {
            trigger: {
              title: "Novo ticket",
              subtitle: "Mensagem capturada no canal",
            },
            processor: {
              title: "Classificar tópico",
              subtitle: "IA identifica urgência e tema",
            },
            router: {
              title: "Encaminhar destino",
              subtitle: "Base, humano ou financeiro",
            },
            action: {
              title: "Responder e registrar",
              subtitle: "Retorna e salva o histórico",
            },
          },
          logs: [
            "Ticket recebido do WhatsApp",
            "Assunto classificado como cobrança",
            "Fluxo enviado para fila financeira",
            "Resposta automática registrada",
          ],
        },
        {
          name: "Conteúdo",
          summary: "Transforma uma pauta em distribuição",
          nodes: {
            trigger: {
              title: "Nova pauta",
              subtitle: "Briefing criado pelo time",
            },
            processor: {
              title: "Expandir com IA",
              subtitle: "Sugere ângulos e formatos",
            },
            router: {
              title: "Definir saída",
              subtitle: "Blog, email ou social",
            },
            action: {
              title: "Publicar rascunhos",
              subtitle: "Entrega assets para revisão",
            },
          },
          logs: [
            "Pauta recebida no painel editorial",
            "IA gerou estrutura e variações",
            "Canal ideal definido como email + social",
            "Rascunhos enviados para revisão",
          ],
        },
      ],
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
        { first: "Software", second: "Engineer." },
        { first: "Software", second: "Developer." },
        { first: "Front-End", second: "Developer." },
        { first: "Mobile", second: "Developer." },
      ],
      quote:
        "I build full-stack web and mobile applications with a focus on performance, scalability, and user experience.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View projects",
      ctaResume: "View CV",
      ctaResumeSoon: "CV page coming soon",
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
          "I specialize in full-stack development with a heavy focus on the frontend ecosystem—specifically ",
        linkNext: "Next.js",
        middle1: ", ",
        linkTypescript: "TypeScript",
        middle2: " and ",
        linkTailwind: "Tailwind",
        suffix: ". I love crafting interfaces that feel instant and alive.",
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
      globalBadge: "BR / US overlap Friendly",
    },
    projects: {
      label: "CRAFTING DIGITAL EXPERIENCES",
      titlePrimary: "Venture",
      titleAccent: "Showcase",
      marquee: " PROJECTS",
      source: "Source",
      liveDemo: "Live Demo",
      fallbackRole: "Full Stack Development",
      footer: "And other projects in progress.",
      items: [
        {
          description:
            "Institutional website built with WordPress for a fictional architecture company, focused on presenting the brand, its services, and the business value proposition. The project explores visual organization, content structure, and clear navigation, simulating the digital presence of a company in this sector.",
          outcome:
            "A clear and professional digital presence for a fictional architecture company.",
          role: "Front-End Development",
        },
        {
          description:
            "Web platform developed with React for organizing Esports teams, focused on component-based structure, reusable components, and a simple, dynamic user experience. The project allows teams to be organized in a visual and interactive way.",
          outcome:
            "Practical team and player organization through an interactive interface.",
          role: "Front-End Development",
        },
        {
          description:
            "Web application built with React and Vite that integrates the Pexels API for dynamic image display. The project highlights external API integration, reusable components, and an interface designed around search and visual experience.",
          outcome:
            "Image search and visualization in a modern and dynamic gallery.",
          role: "Front-End Development",
        },
        {
          description:
            "Modern landing page developed with React and Vite for a fictional neurotechnology headset. The project focuses on product presentation, strategic section structure, responsiveness, and a more immersive visual communication.",
          outcome:
            "An attractive visual presentation for a fictional technology product.",
          role: "Front-End Development",
        },
      ],
    },
    automation: {
      label: "AUTOMATION, FLOWS & AI",
      title: "Interest in",
      titleAccent: "orchestrated systems",
      description:
        "I am genuinely interested in automation, integrations, and products that connect logic, events, and AI. This section shows a bit of how I think through flows, decisions, and chained actions.",
      canvasTitle: "Explorable flow",
      canvasHint:
        "Drag the blocks, switch scenarios, and run the flow to see the logic in motion.",
      logTitle: "Flow events",
      emptyLog: "No events yet. Run a scenario to watch the flow happen.",
      noteTitle: "Why is this here?",
      note:
        "Because my interest is not limited to the final interface. I also enjoy thinking about the logic behind it: automations that connect context, rules, and actions without turning the system into a black box.",
      controls: {
        play: "Run flow",
        reset: "Reset layout",
      },
      status: {
        idle: "Ready for interaction",
        running: "Running scenario",
        done: "Scenario completed",
      },
      chips: [
        {
          title: "Webhooks",
          description: "Real-time event intake and system signals.",
        },
        {
          title: "APIs",
          description: "Orchestration between services and platforms.",
        },
        {
          title: "Applied AI",
          description: "Classification, summarization, and decision support.",
        },
        {
          title: "n8n mindset",
          description: "Clear, visual flows driven by logic.",
        },
      ],
      presets: [
        {
          name: "WhatsApp Ops",
          summary: "Organizes conversations and triggers the next step",
          nodes: {
            trigger: {
              title: "New conversation",
              subtitle: "Message arrives through the channel",
            },
            processor: {
              title: "Read context",
              subtitle: "AI summarizes intent and urgency",
            },
            router: {
              title: "Choose path",
              subtitle: "Support, sales, or finance",
            },
            action: {
              title: "Register and reply",
              subtitle: "Updates the system and sends feedback",
            },
          },
          logs: [
            "New conversation received in the channel",
            "AI summarized context and urgency",
            "Flow routed to the correct path",
            "History saved and response sent",
          ],
        },
        {
          name: "Support",
          summary: "Organizes tickets and triggers responses",
          nodes: {
            trigger: {
              title: "New ticket",
              subtitle: "Message captured from the channel",
            },
            processor: {
              title: "Classify topic",
              subtitle: "AI detects urgency and theme",
            },
            router: {
              title: "Route destination",
              subtitle: "Knowledge base, human, or finance",
            },
            action: {
              title: "Reply and register",
              subtitle: "Sends a response and saves history",
            },
          },
          logs: [
            "Ticket received from WhatsApp",
            "Issue classified as billing",
            "Flow routed to the finance queue",
            "Automatic reply registered",
          ],
        },
        {
          name: "Content",
          summary: "Turns a brief into distribution",
          nodes: {
            trigger: {
              title: "New brief",
              subtitle: "Team creates a new content idea",
            },
            processor: {
              title: "Expand with AI",
              subtitle: "Suggests angles and formats",
            },
            router: {
              title: "Define output",
              subtitle: "Blog, email, or social",
            },
            action: {
              title: "Publish drafts",
              subtitle: "Delivers assets for review",
            },
          },
          logs: [
            "Brief received in the editorial board",
            "AI generated structure and variations",
            "Best channel chosen as email + social",
            "Drafts sent for review",
          ],
        },
      ],
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


