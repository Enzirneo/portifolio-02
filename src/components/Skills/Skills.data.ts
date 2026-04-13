export interface Skill {
  name: string;
  category: 'architecture' | 'development' | 'ux';
}

export const skills: Skill[] = [
  // Architecture & Engineering
  { name: 'System Design', category: 'architecture' },
  { name: 'Microservices', category: 'architecture' },
  { name: 'Design Patterns', category: 'architecture' },
  { name: 'Clean Architecture', category: 'architecture' },
  { name: 'CI/CD', category: 'architecture' },
  { name: 'Cloud (AWS)', category: 'architecture' },
  { name: 'Docker', category: 'architecture' },
  { name: 'API Design', category: 'architecture' },

  // Development
  { name: 'React', category: 'development' },
  { name: 'TypeScript', category: 'development' },
  { name: 'Node.js', category: 'development' },
  { name: 'Next.js', category: 'development' },
  { name: 'Python', category: 'development' },
  { name: 'PostgreSQL', category: 'development' },
  { name: 'Git', category: 'development' },
  { name: 'Testing', category: 'development' },

  // UX & Product
  { name: 'Design Systems', category: 'ux' },
  { name: 'Figma', category: 'ux' },
  { name: 'User Research', category: 'ux' },
  { name: 'Product Thinking', category: 'ux' },
];

export const categoryLabels = {
  architecture: { pt: 'Arquitetura & Engenharia', en: 'Architecture & Engineering' },
  development: { pt: 'Desenvolvimento', en: 'Development' },
  ux: { pt: 'UX & Produto', en: 'UX & Product' },
};
