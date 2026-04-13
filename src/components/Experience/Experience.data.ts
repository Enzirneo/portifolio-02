export interface ExperienceItem {
  role: { pt: string; en: string };
  company: string;
  period: string;
  description: { pt: string; en: string };
}

export const experiences: ExperienceItem[] = [
  {
    role: { pt: 'Desenvolvedor Front-End Senior', en: 'Senior Front-End Developer' },
    company: 'Tech Company',
    period: '2023 — Presente',
    description: {
      pt: 'Liderança técnica no desenvolvimento de aplicações React, criação de design systems e mentoria de desenvolvedores juniores.',
      en: 'Technical leadership in React application development, design system creation and mentoring junior developers.',
    },
  },
  {
    role: { pt: 'Desenvolvedor Front-End', en: 'Front-End Developer' },
    company: 'Digital Agency',
    period: '2021 — 2023',
    description: {
      pt: 'Desenvolvimento de interfaces responsivas e acessíveis para clientes de diversos segmentos, utilizando React e TypeScript.',
      en: 'Development of responsive and accessible interfaces for clients across various segments, using React and TypeScript.',
    },
  },
  {
    role: { pt: 'Desenvolvedor Web Junior', en: 'Junior Web Developer' },
    company: 'Startup',
    period: '2019 — 2021',
    description: {
      pt: 'Início da carreira com foco em HTML, CSS, JavaScript e primeiros projetos em React.',
      en: 'Career start focused on HTML, CSS, JavaScript and first React projects.',
    },
  },
];
