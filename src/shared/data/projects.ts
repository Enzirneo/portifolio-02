export interface Project {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  outcome?: string;
  role?: string;
  tech?: string[];
  metric?: string;
  image?: string;
  imageBackground?: string;
  imageZoom?: number;
  imageAspectRatio?: number;
  weburl?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    name: "Enlemar",
    description:
      "Website institucional desenvolvido em WordPress para uma empresa fictícia de arquitetura, com foco na apresentação da marca, dos serviços e da proposta de valor do negócio. O projeto explora organização visual, estruturação de conteúdo e navegação clara, simulando a presença digital de uma empresa do setor.",
    language: "WordPress",
    stars: 0,
    url: "",
    outcome:
      "Apresentação digital clara e profissional para uma empresa fictícia de arquitetura.",
    role: "Desenvolvimento Front-end",
    tech: ["WordPress"],
    image: "/images/Enlemar.png",
  },
  {
    name: "Organo",
    description:
      "Plataforma web desenvolvida em React para organização de times de Esports, com foco em componentização, reaproveitamento de componentes e experiência de uso simples e dinâmica. O projeto permite estruturar equipes de forma visual e interativa.",
    language: "React",
    stars: 0,
    url: "",
    weburl: "https://organo-zeta-blond.vercel.app/",
    outcome:
      "Organização prática de equipes e jogadores em uma interface interativa.",
    role: "Desenvolvimento Front-end",
    tech: ["React"],
    image: "/images/organo.png",
  },
  {
    name: "Galeria de Fotos",
    description:
      "Aplicação web desenvolvida com React e Vite que consome a API do Pexels para exibição dinâmica de imagens. O projeto destaca integração com API externa, reutilização de componentes e construção de uma interface voltada para busca e experiência visual do usuário.",
    language: "React",
    stars: 0,
    url: "",
    weburl: "https://galeria-de-fotos-rosy-iota.vercel.app/",
    outcome:
      "Busca e visualização de imagens em uma galeria moderna e dinâmica.",
    role: "Desenvolvimento Front-end",
    tech: ["React", "Vite", "Pexels API"],
    image: "/images/Galeria.png",
  },
  {
    name: "NeuroSync",
    description:
      "Landing page moderna desenvolvida em React e Vite para um headset fictício voltado à neurotecnologia. O projeto foca em apresentação de produto, organização de seções estratégicas, responsividade e comunicação visual mais imersiva.",
    language: "React",
    stars: 0,
    url: "",
    weburl: "https://neurosync-ten.vercel.app/",
    outcome:
      "Apresentação visual atrativa de um produto fictício de tecnologia.",
    role: "Desenvolvimento Front-end",
    tech: ["React", "Vite"],
    image: "/images/Neuro.png",
  },
];