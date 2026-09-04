import type { Language } from "@/shared/lib/i18n";

type CvMetric = {
  value: string;
  label: string;
  detail: string;
};

type CvExperience = {
  period: string;
  role: string;
  company: string;
  bullets: string[];
};

type CvProject = {
  year: string;
  title: string;
  description: string;
  stack: string[];
};

type CvSkillGroup = {
  title: string;
  items: string[];
};

type CvEducation = {
  period: string;
  title: string;
  school: string;
  detail: string;
};

type CvLanguage = {
  name: string;
  level: string;
};

type CvContent = {
  topbar: {
    home: string;
    projects: string;
    contact: string;
    cv: string;
  };
  eyebrow: string;
  roleLabel: string;
  role: string;
  summary: string;
  actions: {
    download: string;
    downloadAts: string;
    contact: string;
    portfolio: string;
  };
  ats: {
    fileName: string;
    summaryTitle: string;
    achievementsTitle: string;
    skillsTitle: string;
    experienceTitle: string;
    educationTitle: string;
    languagesTitle: string;
  };
  quickFacts: Array<{
    label: string;
    value: string;
  }>;
  metricsTitle: string;
  metrics: CvMetric[];
  experienceTitle: string;
  experience: CvExperience[];
  projectsTitle: string;
  projects: CvProject[];
  skillsTitle: string;
  skillGroups: CvSkillGroup[];
  educationTitle: string;
  education: CvEducation[];
  languagesTitle: string;
  languages: CvLanguage[];
  contactTitle: string;
  contactIntro: string;
  footerNote: string;
};

export const cvContent: Record<Language, CvContent> = {
  "pt-BR": {
    topbar: {
      home: "portfólio",
      projects: "projetos",
      contact: "contato",
      cv: "cv",
    },
    eyebrow: "Currículo digital",
    roleLabel: "FUNÇÃO",
    role: "Desenvolvedor Full Stack Junior · Front-End & UX/UI Design · React & Design Systems",
    summary:
      "Desenvolvedor Full Stack Junior dedicado à construção de interfaces modernas, intuitivas e centradas no usuário. Atuo na criação de produtos digitais que unem boa experiência de uso a um código bem estruturado e de fácil manutenção.\n\nTenho forte base em desenvolvimento front-end e design de interfaces, aliada à prática de organização de código e atenção aos detalhes que fazem a diferença na experiência do usuário. Atualmente estou me especializando em Arquitetura de Software por meio de pós-graduação, ampliando minha visão sobre escalabilidade e estruturação de sistemas — um passo importante na minha trajetória para, no futuro, atuar também como Arquiteto de Software.\n\nBusco desenvolver interfaces que não apenas funcionem bem, mas que sejam pensadas para oferecer experiências fluidas e evoluir junto com o produto ao longo do tempo.",
    actions: {
      download: "Download CV",
      downloadAts: "Versão em texto ATS-friendly",
      contact: "Falar comigo",
      portfolio: "Voltar ao portfólio",
    },
    ats: {
      fileName: "Enzo-Bispo-CV-ATS-PT-BR.txt",
      summaryTitle: "RESUMO",
      achievementsTitle: "DESTAQUES",
      skillsTitle: "COMPETÊNCIAS",
      experienceTitle: "EXPERIÊNCIA",
      educationTitle: "FORMAÇÃO",
      languagesTitle: "IDIOMAS",
    },
    quickFacts: [
      { label: "Base", value: "Rio de Janeiro, RJ" },
      { label: "Formato", value: "Remoto / Híbrido / Presencial" },
      { label: "Foco", value: "Front-end, full stack e UX/UI" },
      { label: "Disponibilidade", value: "Aberto a oportunidades" },
    ],
    metricsTitle: "Resumo rápido",
    metrics: [
      {
        value: "Full stack",
        label: "atuação atual",
        detail: "Analista de Sistemas na Invest Smart XP, em plataformas internas.",
      },
      {
        value: "Desde 2021",
        label: "em tecnologia",
        detail: "Da robótica e infraestrutura ao desenvolvimento full stack.",
      },
      {
        value: "Pós",
        label: "em andamento",
        detail: "Arquitetura de Software, Ciência de Dados e Cybersecurity (PUC Campinas).",
      },
      {
        value: "Avançado",
        label: "inglês",
        detail: "Intercâmbio na Irlanda (University College Dublin).",
      },
    ],
    experienceTitle: "Experiência",
    experience: [
      {
        period: "2026 · Atual",
        role: "Analista de Sistemas",
        company: "Invest Smart XP",
        bullets: [
          "Desenvolvimento full stack em projetos e plataformas internas.",
          "Configuração de ambiente de desenvolvimento local e gestão de branches em fluxos de homologação e produção.",
          "Diagnóstico e resolução de erros de deploy e configuração de ambiente.",
          "Elaboração de requisitos técnicos estruturados para o desenvolvimento das funcionalidades.",
        ],
      },
      {
        period: "2025 · Atual",
        role: "Designer Web & UX — Freelancer",
        company: "Clientes reais",
        bullets: [
          "Design e prototipação de interfaces no Figma, com foco em fluxos intuitivos e testes de usabilidade com usuários reais.",
          "Implementação de componentes front-end responsivos (React) a partir de wireframes e protótipos de alta fidelidade.",
          "Construção de design systems para padronização visual e escalabilidade das interfaces.",
          "Definição de fluxos de navegação e hierarquia de informação orientadas à usabilidade.",
          "Levantamento de requisitos e alinhamento de soluções técnicas diretamente com clientes.",
        ],
      },
      {
        period: "Jul 2023 · Mar 2025",
        role: "Estagiário de Infraestrutura",
        company: "TCE-RJ",
        bullets: [
          "Suporte e manutenção de ambientes corporativos de TI.",
          "Configuração de redes, servidores e acesso remoto (VPN).",
          "Monitoramento e suporte a sistemas internos.",
        ],
      },
      {
        period: "2021 · 2023",
        role: "Membro da Equipe de Robótica",
        company: "Snake Tech",
        bullets: [
          "Desenvolvimento de soluções tecnológicas com foco em acessibilidade.",
          "Integração entre hardware e software em sistemas embarcados.",
          "Prototipagem com microcontroladores (Arduino) em equipe multidisciplinar.",
        ],
      },
    ],
    projectsTitle: "Projetos selecionados",
    projects: [
      {
        year: "2026",
        title: "NeuroSync",
        description:
          "Landing page de produto com foco em tecnologia, narrativa visual e conversão, estruturada em React com seções modernas e experiência fluida.",
        stack: ["React", "TypeScript", "UI/UX"],
      },
      {
        year: "2025",
        title: "Galeria de Fotos",
        description:
          "Projeto com busca, filtros e apresentação visual de imagens, com foco em usabilidade e estrutura modular.",
        stack: ["React", "Filtros", "Responsivo"],
      },
      {
        year: "2025",
        title: "Organo",
        description:
          "Aplicação web voltada à organização visual de times e colaboradores, com interface clara e componentização.",
        stack: ["React", "JavaScript", "CSS"],
      },
    ],
    skillsTitle: "Competências",
    skillGroups: [
      {
        title: "Front-end",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Angular",
          "Vue",
          "Responsividade e acessibilidade (WCAG)",
        ],
      },
      {
        title: "Back-end & dados",
        items: ["Java", "Python", "Go", "FastAPI", "Node.js", "SQL / MySQL", "PostgreSQL"],
      },
      {
        title: "UX & Produto",
        items: ["UX/UI Design", "Figma", "Design Systems", "User-Centered Design"],
      },
      {
        title: "Ferramentas & Processos",
        items: ["Git", "GitHub", "Git Flow", "Scrum", "Kanban", "Desenvolvimento orientado a produto"],
      },
      {
        title: "Arquitetura & Engenharia (em aprendizado)",
        items: ["Software Architecture", "System Design", "Clean Code", "Design Patterns"],
      },
    ],
    educationTitle: "Formação",
    education: [
      {
        period: "Fev 2026 · Atual",
        title: "Pós-graduação em Arquitetura de Software, Ciência de Dados e Cybersecurity",
        school: "PUC Campinas",
        detail: "Aprofundamento em escalabilidade, estruturação de sistemas e visão arquitetural.",
      },
      {
        period: "2020 · 2024",
        title: "Graduação em Engenharia da Computação",
        school: "Universidade Veiga de Almeida",
        detail: "Base em computação, lógica, desenvolvimento e integração entre software e hardware.",
      },
      {
        period: "Jan 2019 · Fev 2019",
        title: "Curso de inglês na Irlanda",
        school: "University College Dublin",
        detail: "Imersão em inglês e vivência internacional.",
      },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Avançado · Intercâmbio na Irlanda" },
      { name: "Francês", level: "Básico" },
    ],
    contactTitle: "Contato",
    contactIntro:
      "Aberto a oportunidades em desenvolvimento full stack e front-end, com forte preocupação em UX/UI, design systems e código bem estruturado.",
    footerNote: "Esta versão do CV acompanha o portfólio e evolui junto com os projetos.",
  },
  en: {
    topbar: {
      home: "portfolio",
      projects: "projects",
      contact: "contact",
      cv: "cv",
    },
    eyebrow: "Digital resume",
    roleLabel: "ROLE",
    role: "Junior Full Stack Developer · Front-End & UX/UI Design · React & Design Systems",
    summary:
      "Junior Full Stack Developer dedicated to building modern, intuitive, user-centered interfaces. I create digital products that pair a good user experience with well-structured, maintainable code.\n\nI have a strong foundation in front-end development and interface design, along with the habit of organizing code and paying attention to the details that make a difference in the user experience. I am currently specializing in Software Architecture through a postgraduate program, broadening my view on scalability and system structure — an important step toward eventually also working as a Software Architect.\n\nI aim to build interfaces that not only work well but are designed to feel fluid and to evolve alongside the product over time.",
    actions: {
      download: "Download CV",
      downloadAts: "ATS-friendly text version",
      contact: "Get in touch",
      portfolio: "Back to portfolio",
    },
    ats: {
      fileName: "Enzo-Bispo-CV-ATS-EN.txt",
      summaryTitle: "SUMMARY",
      achievementsTitle: "HIGHLIGHTS",
      skillsTitle: "SKILLS",
      experienceTitle: "EXPERIENCE",
      educationTitle: "EDUCATION",
      languagesTitle: "LANGUAGES",
    },
    quickFacts: [
      { label: "Base", value: "Rio de Janeiro, Brazil" },
      { label: "Format", value: "Remote / Hybrid / On-site" },
      { label: "Focus", value: "Front-end, full stack, and UX/UI" },
      { label: "Availability", value: "Open to opportunities" },
    ],
    metricsTitle: "Snapshot",
    metrics: [
      {
        value: "Full stack",
        label: "current role",
        detail: "Systems Analyst at Invest Smart XP, working on internal platforms.",
      },
      {
        value: "Since 2021",
        label: "in technology",
        detail: "From robotics and infrastructure to full stack development.",
      },
      {
        value: "Postgrad",
        label: "in progress",
        detail: "Software Architecture, Data Science, and Cybersecurity (PUC Campinas).",
      },
      {
        value: "Advanced",
        label: "English",
        detail: "Study abroad in Ireland (University College Dublin).",
      },
    ],
    experienceTitle: "Experience",
    experience: [
      {
        period: "2026 · Present",
        role: "Systems Analyst",
        company: "Invest Smart XP",
        bullets: [
          "Full stack development on internal projects and platforms.",
          "Local development environment setup and branch management across homologation and production flows.",
          "Diagnosing and fixing deploy and environment configuration issues.",
          "Writing structured technical requirements for feature development.",
        ],
      },
      {
        period: "2025 · Present",
        role: "Web & UX Designer — Freelance",
        company: "Real clients",
        bullets: [
          "Interface design and prototyping in Figma, focused on intuitive flows and usability testing with real users.",
          "Implementing responsive front-end components (React) from wireframes and high-fidelity prototypes.",
          "Building design systems for visual consistency and interface scalability.",
          "Defining navigation flows and information hierarchy oriented to usability.",
          "Gathering requirements and aligning technical solutions directly with clients.",
        ],
      },
      {
        period: "Jul 2023 · Mar 2025",
        role: "Infrastructure Intern",
        company: "TCE-RJ",
        bullets: [
          "Support and maintenance of enterprise IT environments.",
          "Configuration of networks, servers, and remote access (VPN).",
          "Monitoring and support of internal systems.",
        ],
      },
      {
        period: "2021 · 2023",
        role: "Robotics Team Member",
        company: "Snake Tech",
        bullets: [
          "Developed accessibility-focused technology solutions.",
          "Integrated hardware and software in embedded systems.",
          "Built Arduino-based prototypes in a multidisciplinary team.",
        ],
      },
    ],
    projectsTitle: "Selected projects",
    projects: [
      {
        year: "2026",
        title: "NeuroSync",
        description:
          "Product landing page focused on technology, visual storytelling, and conversion, built in React with modern sections and fluid UX.",
        stack: ["React", "TypeScript", "UI/UX"],
      },
      {
        year: "2025",
        title: "Photo Gallery",
        description:
          "Project with search, filters, and visual image presentation, focused on usability and modular structure.",
        stack: ["React", "Filters", "Responsive"],
      },
      {
        year: "2025",
        title: "Organo",
        description:
          "Web application for visually organizing teams and collaborators, with a clear interface and component-based structure.",
        stack: ["React", "JavaScript", "CSS"],
      },
    ],
    skillsTitle: "Skills",
    skillGroups: [
      {
        title: "Front-end",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Angular",
          "Vue",
          "Responsiveness & accessibility (WCAG)",
        ],
      },
      {
        title: "Back-end & data",
        items: ["Java", "Python", "Go", "FastAPI", "Node.js", "SQL / MySQL", "PostgreSQL"],
      },
      {
        title: "UX & Product",
        items: ["UX/UI Design", "Figma", "Design Systems", "User-Centered Design"],
      },
      {
        title: "Tools & Process",
        items: ["Git", "GitHub", "Git Flow", "Scrum", "Kanban", "Product-oriented development"],
      },
      {
        title: "Architecture & Engineering (learning)",
        items: ["Software Architecture", "System Design", "Clean Code", "Design Patterns"],
      },
    ],
    educationTitle: "Education",
    education: [
      {
        period: "Feb 2026 · Present",
        title: "Postgraduate in Software Architecture, Data Science, and Cybersecurity",
        school: "PUC Campinas",
        detail: "Focused on scalability, system structure, and architectural thinking.",
      },
      {
        period: "2020 · 2024",
        title: "Bachelor's in Computer Engineering",
        school: "Universidade Veiga de Almeida",
        detail: "Foundation in computing, logic, development, and software-hardware integration.",
      },
      {
        period: "Jan 2019 · Feb 2019",
        title: "English course in Ireland",
        school: "University College Dublin",
        detail: "English immersion and international experience.",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Advanced · Study abroad in Ireland" },
      { name: "French", level: "Basic" },
    ],
    contactTitle: "Contact",
    contactIntro:
      "Open to opportunities in full stack and front-end development, with a strong focus on UX/UI, design systems, and well-structured code.",
    footerNote: "This resume version follows the portfolio and evolves with the projects.",
  },
};
