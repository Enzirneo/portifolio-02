import type { IconType } from 'react-icons';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaPython,
  FaJava,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiAngular,
  SiVuedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
} from 'react-icons/si';

export type LocalizedText = {
  pt: string;
  en: string;
};

export type SkillItem = {
  name: string;
  icon?: IconType;
};

export type SkillCategory = {
  title: LocalizedText;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: {
      pt: 'Architecture & Engineering',
      en: 'Architecture & Engineering',
    },
    items: [
      { name: 'System Design' },
      { name: 'Scalable Systems' },
      { name: 'Clean Architecture' },
      { name: 'Design Patterns' },
      { name: 'API Design' },
      { name: 'Modular Architecture' },
      { name: 'Performance Optimization' },
      { name: 'Code Organization', icon: FaGitAlt },
    ],
  },
  {
    title: {
      pt: 'Development',
      en: 'Development',
    },
    items: [
      { name: 'React', icon: FaReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Python', icon: FaPython },
      { name: 'Java', icon: FaJava },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'Angular', icon: SiAngular },
      { name: 'Vue', icon: SiVuedotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Docker', icon: FaDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Git', icon: FaGitAlt },
    ],
  },
  {
    title: {
      pt: 'UX & Product',
      en: 'UX & Product',
    },
    items: [
      { name: 'Figma', icon: FaFigma },
      { name: 'UX/UI Design' },
      { name: 'Design Systems' },
      { name: 'User-Centered Design' },
      { name: 'Product Thinking' },
      { name: 'Wireframing' },
      { name: 'Prototyping' },
      { name: 'Information Architecture' },
    ],
  },
];