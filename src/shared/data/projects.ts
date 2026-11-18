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
    name: "Central de Jogos",
    status: "development",
    featured: true,
    copy: {
      "pt-BR": {
        description:
          "Plataforma multiplayer local e remota no estilo Jackbox. Um servidor autoritativo em Colyseus mantém o estado de cada partida, e os jogos entram como módulos plugáveis. O contrato entre servidor e clientes é tipado com Zod, com cliente web em Angular em andamento e mobile em Flutter planejado.",
        outcome:
          "Monorepo (Turborepo) com servidor, protocolo e jogos separados, mais Postgres e Redis via Docker.",
        role: "Arquitetura e desenvolvimento full stack",
      },
      en: {
        description:
          "Local and remote multiplayer platform in the Jackbox style. An authoritative Colyseus server holds each match's state, and games plug in as modules. The server-client contract is typed with Zod, with an Angular web client in progress and a Flutter mobile client planned.",
        outcome:
          "Monorepo (Turborepo) with server, protocol and games kept apart, plus Postgres and Redis through Docker.",
        role: "Architecture and full-stack development",
      },
    },
    tech: ["TypeScript", "Colyseus", "Angular", "Zod", "PostgreSQL", "Redis"],
    url: "https://github.com/Enzirneo/central-de-jogos",
  },
  {
    name: "Norbit",
    status: "development",
    featured: true,
    copy: {
      "pt-BR": {
        description:
          "Agenda pessoal que se abre para outras pessoas: cada usuário tem suas agendas e escolhe quais compartilhar, com quem e em que nível. Pensada para grupos pequenos e de alta confiança, como casal, família e amigos, com privacidade granular, recorrência, convites e uma identidade visual espacial.",
        outcome:
          "Uma especificação por funcionalidade (23 documentos), com testes unitários e E2E.",
        role: "Produto, arquitetura e desenvolvimento full stack",
      },
      en: {
        description:
          "A personal calendar that opens up to other people: each user has their own calendars and chooses which to share, with whom and at what level. Built for small, high-trust groups such as couples, families and friends, with granular privacy, recurrence, invitations and a space-themed visual identity.",
        outcome:
          "One spec per feature (23 documents), backed by unit and E2E tests.",
        role: "Product, architecture and full-stack development",
      },
    },
    tech: ["Angular", "NestJS", "Prisma", "PostgreSQL", "Zod", "Nx"],
    url: "https://github.com/Enzirneo/Norbit",
  },
  {
    name: "Mosaico",
    status: "development",
    featured: true,
    copy: {
      "pt-BR": {
        description:
          "Galeria de fotos em mural (masonry): descubra imagens, favorite, envie as suas, organize em álbuns e compartilhe por link, com prévia de título e foto no WhatsApp. Ambientes de desenvolvimento e produção separados, cada um com o seu banco.",
        outcome:
          "Banco versionado em 11 migrações do Supabase, com travas que impedem o ambiente de dev de tocar produção.",
        role: "Design e desenvolvimento full stack",
      },
      en: {
        description:
          "Masonry-style photo gallery: discover images, favorite them, upload your own, organize into albums and share by link, with a title and photo preview on WhatsApp. Development and production run as separate environments, each with its own database.",
        outcome:
          "Database versioned in 11 Supabase migrations, with guards that stop the dev environment from touching production.",
        role: "Design and full-stack development",
      },
    },
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Vitest", "Vercel"],
    url: "https://github.com/Enzirneo/Mosaico-Galery",
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
