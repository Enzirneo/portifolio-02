import type { Language } from "@/shared/lib/i18n";

export interface ProjectCopy {
  description: string;
  outcome: string;
  role: string;
}

export type ProjectStatus = "live" | "development" | "local" | "study";

export interface Project {
  name: string;
  status: ProjectStatus;
  featured: boolean;
  copy: Record<Language, ProjectCopy>;
  tech: string[];
  url?: string;
  weburl?: string;
  image?: string;
  imageBackground?: string;
  imageZoom?: number;
  imageAspectRatio?: number;
}

export const projects: Project[] = [
  {
    name: "Flwxo",
    status: "live",
    featured: true,
    copy: {
      "pt-BR": {
        description:
          "SaaS de gestão para clínicas de odontologia, HOF e estética, em produção. Projetei e desenvolvi o produto inteiro, em monorepo (site, sistema, API e extensão de WhatsApp): agenda por profissional e sala, prontuário com odontograma, orçamentos com aceite digital, documentos com assinatura, financeiro e portal do paciente.",
        outcome:
          "Produto real, no ar, com teste grátis de 30 dias e planos pagos.",
        role: "Design e desenvolvimento full stack",
      },
      en: {
        description:
          "Management SaaS for dental, facial-aesthetics and aesthetics clinics, running in production. I designed and built the whole product as a monorepo (website, system, API and WhatsApp extension): scheduling by professional and room, charts with a dental odontogram, quotes with digital acceptance, signed documents, finance and a patient portal.",
        outcome:
          "A real, live product with a 30-day free trial and paid plans.",
        role: "Design and full-stack development",
      },
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Zod"],
    weburl: "https://flwxo.com.br/",
    image: "/images/Flwxo.jpg",
    imageBackground: "#0f3a3f",
    imageAspectRatio: 1568 / 772,
  },
  {
    name: "My Spoti Player",
    status: "local",
    featured: true,
    copy: {
      "pt-BR": {
        description:
          "Mini player do Spotify que fica sempre à vista: as cores da interface vêm da capa do álbum e a barra de progresso tem ondas animadas. App desktop para Windows em Electron, com HTML, CSS e JavaScript puros, que controla o Spotify oficial pela Web API.",
        outcome:
          "Dois modos (janela e pílula arrastável) e fundo acrílico do Windows 11.",
        role: "Design e desenvolvimento",
      },
      en: {
        description:
          "A Spotify mini player that stays in view: the interface colors come from the album cover and the progress bar has animated waves. A Windows desktop app built with Electron and plain HTML, CSS and JavaScript, controlling the official Spotify app through its Web API.",
        outcome:
          "Two modes (window and draggable pill) and the Windows 11 acrylic backdrop.",
        role: "Design and development",
      },
    },
    tech: ["Electron", "JavaScript", "Spotify Web API", "Vitest"],
    url: "https://github.com/Enzirneo/My-Spoti-Player",
    image: "/images/SpotiPlayer.png",
    imageBackground: "#161a18",
  },
  {
    name: "Enlemar",
    status: "study",
    featured: false,
    copy: {
      "pt-BR": {
        description:
          "Website institucional desenvolvido em WordPress para uma empresa fictícia de arquitetura, com foco na apresentação da marca, dos serviços e da proposta de valor do negócio. O projeto explora organização visual, estruturação de conteúdo e navegação clara, simulando a presença digital de uma empresa do setor.",
        outcome:
          "Apresentação digital clara e profissional para uma empresa fictícia de arquitetura.",
        role: "Desenvolvimento Front-end",
      },
      en: {
        description:
          "Institutional website built in WordPress for a fictional architecture firm, focused on presenting the brand, its services and its value proposition. The project explores visual organization, content structure and clear navigation, simulating the digital presence of a company in the field.",
        outcome:
          "A clear, professional digital presence for a fictional architecture firm.",
        role: "Front-end Development",
      },
    },
    tech: ["WordPress"],
    image: "/images/Enlemar.png",
  },
  {
    name: "Organo",
    status: "study",
    featured: false,
    copy: {
      "pt-BR": {
        description:
          "Plataforma web desenvolvida em React para organização de times de Esports, com foco em componentização, reaproveitamento de componentes e experiência de uso simples e dinâmica. O projeto permite estruturar equipes de forma visual e interativa.",
        outcome:
          "Organização prática de equipes e jogadores em uma interface interativa.",
        role: "Desenvolvimento Front-end",
      },
      en: {
        description:
          "Web platform built in React to organize Esports teams, focused on componentization, component reuse and a simple, dynamic user experience. It lets users structure teams visually and interactively.",
        outcome:
          "Practical organization of teams and players in an interactive interface.",
        role: "Front-end Development",
      },
    },
    tech: ["React"],
    weburl: "https://organo-zeta-blond.vercel.app/",
    image: "/images/organo.png",
  },
  {
    name: "Galeria de Fotos",
    status: "study",
    featured: false,
    copy: {
      "pt-BR": {
        description:
          "Aplicação web desenvolvida com React e Vite que consome a API do Pexels para exibição dinâmica de imagens. O projeto destaca integração com API externa, reutilização de componentes e construção de uma interface voltada para busca e experiência visual do usuário.",
        outcome:
          "Busca e visualização de imagens em uma galeria moderna e dinâmica.",
        role: "Desenvolvimento Front-end",
      },
      en: {
        description:
          "Web application built with React and Vite that consumes the Pexels API to display images dynamically. It highlights external API integration, component reuse and an interface designed around search and visual experience.",
        outcome:
          "Image search and browsing in a modern, dynamic gallery.",
        role: "Front-end Development",
      },
    },
    tech: ["React", "Vite", "Pexels API"],
    weburl: "https://galeria-de-fotos-rosy-iota.vercel.app/",
    image: "/images/Galeria.png",
  },
  {
    name: "NeuroSync",
    status: "study",
    featured: false,
    copy: {
      "pt-BR": {
        description:
          "Landing page moderna desenvolvida em React e Vite para um headset fictício voltado à neurotecnologia. O projeto foca em apresentação de produto, organização de seções estratégicas, responsividade e comunicação visual mais imersiva.",
        outcome:
          "Apresentação visual atrativa de um produto fictício de tecnologia.",
        role: "Desenvolvimento Front-end",
      },
      en: {
        description:
          "Modern landing page built with React and Vite for a fictional neurotechnology headset. It focuses on product presentation, strategic section structure, responsiveness and more immersive visual communication.",
        outcome:
          "An attractive visual presentation of a fictional technology product.",
        role: "Front-end Development",
      },
    },
    tech: ["React", "Vite"],
    weburl: "https://neurosync-ten.vercel.app/",
    image: "/images/Neuro.png",
  },
];
