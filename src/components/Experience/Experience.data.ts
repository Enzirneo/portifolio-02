export interface ExperienceItem {
  role: { pt: string; en: string };
  company: string;
  period: string;
  description: { pt: string; en: string };
  phase: { pt: string; en: string };
}

export const experiences: ExperienceItem[] = [
  {
    role: { pt: 'Membro da Equipe de Robótica', en: 'Robotics Team Member' },
    company: 'Snake Tech',
    period: '2020 — 2024',
    phase: { pt: 'Robótica', en: 'Robotics' },
    description: {
      pt: 'Desenvolvimento de soluções com foco em acessibilidade, integração entre hardware e software e prototipagem com Arduino em um ambiente multidisciplinar.',
      en: 'Development of accessibility-focused solutions, hardware and software integration, and Arduino prototyping in a multidisciplinary environment.',
    },
  },
  {
    role: { pt: 'Estagiário de Infraestrutura', en: 'Infrastructure Intern' },
    company: 'TCE-RJ',
    period: '2022 — 2024',
    phase: { pt: 'Infraestrutura', en: 'Infrastructure' },
    description: {
      pt: 'Suporte e manutenção de ambientes corporativos de TI, configuração de redes, servidores, VPN e apoio em segurança da informação com troubleshooting de sistemas internos.',
      en: 'Support and maintenance of enterprise IT environments, including networks, servers, VPN and information security support with troubleshooting for internal systems.',
    },
  },
  {
    role: { pt: 'Designer Web & UX Freelancer', en: 'Freelance Web & UX Designer' },
    company: 'Projetos autorais e clientes reais',
    period: '2024 — Presente',
    phase: { pt: 'UX + Frontend', en: 'UX + Frontend' },
    description: {
      pt: 'Criação de aplicações web, interfaces digitais, design systems e fluxos de navegação com foco em usabilidade, organização de código e evolução sustentável dos produtos.',
      en: 'Creation of web applications, digital interfaces, design systems and navigation flows focused on usability, code organization and sustainable product evolution.',
    },
  },
  {
    role: { pt: 'Especialização em Arquitetura de Software', en: 'Software Architecture Specialization' },
    company: 'PUC Campinas',
    period: '2026 — atual',
    phase: { pt: 'Arquitetura', en: 'Architecture' },
    description: {
      pt: 'Aprofundamento em design de sistemas, escalabilidade, manutenibilidade e construção de soluções pensadas para crescer com clareza técnica e visão de produto.',
      en: 'Deepening knowledge in systems design, scalability, maintainability and building solutions designed to grow with technical clarity and product vision.',
    },
  },
];
