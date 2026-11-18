import type { Translation } from "./types";

export const en: Translation = {
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
  },
  cta: {
    line1: "Let's create",
    line2: "something real.",
  },
  footer: {
    builtWith: "Built with",
    madeWith: "Made with",
  },
};
