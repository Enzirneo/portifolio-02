import organoImg from '@/assets/projects/organo.png';
import galeriaImg from '@/assets/projects/galeria.png';
import neuroImg from '@/assets/projects/neuro.png';
import enlemarImg from '@/assets/projects/enlemar.png';

export type LocalizedText = {
  pt: string;
  en: string;
};

export type Project = {
  id: number;
  title: string;
  description: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  architecture: LocalizedText;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Organo',
    description: {
      pt: 'Aplicação web para organização visual de times e colaboradores.',
      en: 'Web application for visually organizing teams and collaborators.',
    },
    problem: {
      pt: 'Era necessário apresentar equipes e participantes de forma clara, visual e organizada.',
      en: 'It was necessary to present teams and participants in a clear, visual and organized way.',
    },
    solution: {
      pt: 'Desenvolvi uma interface interativa com foco em organização visual, componentização e boa experiência de uso.',
      en: 'I built an interactive interface focused on visual organization, componentization and a good user experience.',
    },
    architecture: {
      pt: 'React com componentização, estados locais, separação de responsabilidades e layout responsivo.',
      en: 'React with component-based architecture, local state, separation of concerns and responsive layout.',
    },
    tags: ['React', 'JavaScript', 'CSS'],
    image: organoImg,
    liveUrl: 'https://organo-zeta-blond.vercel.app/',
    githubUrl: 'https://github.com/Enzirneo',
    featured: true,
  },
  {
    id: 2,
    title: 'Galeria de Fotos',
    description: {
      pt: 'Projeto focado em busca, filtros e apresentação visual de imagens.',
      en: 'Project focused on search, filters and visual image presentation.',
    },
    problem: {
      pt: 'A proposta era criar uma galeria organizada, dinâmica e agradável para navegação.',
      en: 'The goal was to create an organized, dynamic and pleasant gallery for browsing.',
    },
    solution: {
      pt: 'Criei uma interface com foco em usabilidade, estrutura modular e experiência visual mais fluida.',
      en: 'I created an interface focused on usability, modular structure and a smoother visual experience.',
    },
    architecture: {
      pt: 'React com estrutura modular, componentes reutilizáveis e organização voltada para escalabilidade.',
      en: 'React with a modular structure, reusable components and organization geared toward scalability.',
    },
    tags: ['React', 'UI', 'Responsive'],
    image: galeriaImg,
    liveUrl: 'https://galeria-de-fotos-rosy-iota.vercel.app/',
    githubUrl: 'https://github.com/Enzirneo',
    featured: true,
  },
  {
    id: 3,
    title: 'NeuroSync',
    description: {
      pt: 'Landing page de produto com foco em tecnologia, narrativa visual e conversão.',
      en: 'Product landing page focused on technology, visual storytelling and conversion.',
    },
    problem: {
      pt: 'Era preciso apresentar um produto tecnológico de forma moderna, clara e confiável.',
      en: 'It was necessary to present a tech product in a modern, clear and trustworthy way.',
    },
    solution: {
      pt: 'Desenvolvi uma landing page com seções bem estruturadas, visual forte e foco em experiência.',
      en: 'I built a landing page with well-structured sections, strong visuals and a focus on experience.',
    },
    architecture: {
      pt: 'React com TypeScript, componentização, organização por seções e layout orientado a produto.',
      en: 'React with TypeScript, componentization, section-based organization and product-oriented layout.',
    },
    tags: ['React', 'TypeScript', 'Landing Page'],
    image: neuroImg,
    liveUrl: 'https://neurosync-ten.vercel.app/',
    githubUrl: 'https://github.com/Enzirneo',
    featured: true,
  },
  {
    id: 4,
    title: 'Enlemar',
    description: {
      pt: 'Projeto visual com foco em interface moderna e apresentação de conteúdo.',
      en: 'Visual project focused on modern interface and content presentation.',
    },
    problem: {
      pt: 'O desafio era criar uma interface visualmente marcante e organizada.',
      en: 'The challenge was to create a visually striking and organized interface.',
    },
    solution: {
      pt: 'Estruturei o layout com foco em clareza, apelo visual e navegação fluida.',
      en: 'I structured the layout with a focus on clarity, visual appeal and fluid navigation.',
    },
    architecture: {
      pt: 'Frontend componentizado com foco em reutilização, organização e responsividade.',
      en: 'Component-based frontend focused on reusability, organization and responsiveness.',
    },
    tags: ['React', 'Frontend', 'UX/UI'],
    image: enlemarImg,
    liveUrl: '#',
    githubUrl: 'https://github.com/Enzirneo',
    featured: true,
  },
];