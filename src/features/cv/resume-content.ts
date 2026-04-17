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
    role: "Desenvolvedor Full Stack · Arquitetura de Software · UX/UI",
    summary:
      "Desenvolvedor Full Stack com foco em desenvolvimento web moderno, arquitetura de software e experiência do usuário. Atuo na construção de aplicações escaláveis, bem estruturadas e orientadas a produto, buscando sempre alinhar performance, usabilidade e qualidade de código. Tenho experiência no desenvolvimento de interfaces modernas e responsivas, integração com APIs, organização de sistemas front-end e back-end, além da aplicação de boas práticas de engenharia de software. Também possuo interesse em soluções em cloud e na criação de arquiteturas que favoreçam manutenção, escalabilidade e evolução contínua dos sistemas.",
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
      { label: "Foco", value: "Frontend, full stack e arquitetura" },
      { label: "Disponibilidade", value: "Aberto a oportunidades" },
    ],
    metricsTitle: "Resumo rápido",
    metrics: [
      {
        value: "4+",
        label: "projetos em destaque",
        detail: "Portfólio com landing pages, interfaces e aplicações React.",
      },
      {
        value: "2 anos",
        label: "experiência em TI",
        detail: "Vivência em suporte, infraestrutura e evolução para desenvolvimento.",
      },
      {
        value: "1",
        label: "pós em andamento",
        detail: "Especialização com foco em arquitetura de software.",
      },
      {
        value: "C1",
        label: "inglês",
        detail: "Leitura técnica e comunicação profissional.",
      },
    ],
    experienceTitle: "Experiência",
    experience: [
      {
        period: "2024 · Atual",
        role: "Desenvolvedor Web & UX Freelancer",
        company: "Projetos autorais e clientes reais",
        bullets: [
          "Criação de aplicações web, landing pages e interfaces digitais com foco em usabilidade e organização visual.",
          "Estruturação de componentes reutilizáveis, design systems e fluxos de navegação mais claros.",
          "Atuação combinando front-end, UX/UI e visão de produto para entregas mais consistentes.",
        ],
      },
      {
        period: "2022 · 2024",
        role: "Estagiário de Infraestrutura",
        company: "TCE-RJ",
        bullets: [
          "Suporte e manutenção de ambientes corporativos de TI.",
          "Configuração de redes, servidores, VPN e apoio à segurança da informação.",
          "Troubleshooting de sistemas internos e experiência prática com operação em ambiente real.",
        ],
      },
      {
        period: "2020 · 2024",
        role: "Membro da Equipe de Robótica",
        company: "Snake Tech",
        bullets: [
          "Desenvolvimento de soluções com foco em acessibilidade e integração entre hardware e software.",
          "Prototipagem com Arduino em ambiente multidisciplinar.",
          "Vivência em construção colaborativa e resolução prática de problemas.",
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
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Back-end & dados",
        items: ["Node.js", "Python", "Java", "SQL", "MySQL", "PostgreSQL"],
      },
      {
        title: "Arquitetura & produto",
        items: ["Arquitetura de software", "Componentização", "Design systems", "UX/UI", "Organização de código"],
      },
      {
        title: "Ferramentas",
        items: ["Git", "GitHub", "Figma", "Vercel", "Docker"],
      },
    ],
    educationTitle: "Formação",
    education: [
      {
        period: "Concluído",
        title: "Engenharia da Computação",
        school: "Graduação",
        detail: "Base em computação, lógica, desenvolvimento e integração entre software e hardware.",
      },
      {
        period: "Em andamento",
        title: "Pós-graduação em Arquitetura de Software",
        school: "Especialização",
        detail: "Aprofundamento em escalabilidade, manutenibilidade, sistemas distribuídos e visão arquitetural.",
      },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "C1 · Avançado" },
      { name: "Francês", level: "B1 · Intermediário" },
    ],
    contactTitle: "Contato",
    contactIntro:
      "Aberto a oportunidades em desenvolvimento full stack, arquitetura de software, frontend estratégico e produtos digitais com forte preocupação em UX.",
    footerNote: "Esta versão do CV acompanha o portfólio e pode evoluir junto com os projetos.",
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
    role: "Full Stack Developer · Software Architecture · UX/UI",
    summary:
      "Desenvolvedor Full Stack com foco em desenvolvimento web moderno, arquitetura de software e experiência do usuário. Atuo na construção de aplicações escaláveis, bem estruturadas e orientadas a produto, buscando sempre alinhar performance, usabilidade e qualidade de código. Tenho experiência no desenvolvimento de interfaces modernas e responsivas, integração com APIs, organização de sistemas front-end e back-end, além da aplicação de boas práticas de engenharia de software. Também possuo interesse em soluções em cloud e na criação de arquiteturas que favoreçam manutenção, escalabilidade e evolução contínua dos sistemas.",
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
      { label: "Focus", value: "Frontend, full stack, architecture" },
      { label: "Availability", value: "Open to opportunities" },
    ],
    metricsTitle: "Snapshot",
    metrics: [
      {
        value: "4+",
        label: "featured projects",
        detail: "Portfolio with landing pages, interfaces, and React applications.",
      },
      {
        value: "2 years",
        label: "IT experience",
        detail: "Background in support, infrastructure, and transition into development.",
      },
      {
        value: "1",
        label: "postgraduate track",
        detail: "Specialization focused on software architecture.",
      },
      {
        value: "C1",
        label: "English",
        detail: "Technical reading and professional communication.",
      },
    ],
    experienceTitle: "Experience",
    experience: [
      {
        period: "2024 · Present",
        role: "Freelance Web & UX Developer",
        company: "Independent and client projects",
        bullets: [
          "Building web applications, landing pages, and digital interfaces focused on usability and visual organization.",
          "Structuring reusable components, design systems, and clearer navigation flows.",
          "Working across frontend, UX/UI, and product thinking for more consistent deliveries.",
        ],
      },
      {
        period: "2022 · 2024",
        role: "Infrastructure Intern",
        company: "TCE-RJ",
        bullets: [
          "Supported and maintained enterprise IT environments.",
          "Worked with networks, servers, VPN, and information security support.",
          "Handled troubleshooting in real internal systems and operational contexts.",
        ],
      },
      {
        period: "2020 · 2024",
        role: "Robotics Team Member",
        company: "Snake Tech",
        bullets: [
          "Developed accessibility-focused solutions integrating hardware and software.",
          "Built Arduino-based prototypes in a multidisciplinary environment.",
          "Gained hands-on experience in collaborative problem solving.",
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
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Back-end & data",
        items: ["Node.js", "Python", "Java", "SQL", "MySQL", "PostgreSQL"],
      },
      {
        title: "Architecture & product",
        items: ["Software architecture", "Component-based design", "Design systems", "UX/UI", "Code organization"],
      },
      {
        title: "Tools",
        items: ["Git", "GitHub", "Figma", "Vercel", "Docker"],
      },
    ],
    educationTitle: "Education",
    education: [
      {
        period: "Completed",
        title: "Computer Engineering",
        school: "Bachelor's degree",
        detail: "Foundation in computing, logic, development, and software-hardware integration.",
      },
      {
        period: "In progress",
        title: "Postgraduate in Software Architecture",
        school: "Specialization",
        detail: "Focused on scalability, maintainability, distributed systems, and architectural thinking.",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "C1 · Advanced" },
      { name: "French", level: "B1 · Intermediate" },
    ],
    contactTitle: "Contact",
    contactIntro:
      "Open to opportunities in full stack development, software architecture, strategic frontend work, and digital products with a strong UX mindset.",
    footerNote: "This resume version follows the portfolio and can evolve with future projects.",
  },
};
