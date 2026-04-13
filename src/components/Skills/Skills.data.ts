export interface Skill {
  name: string;
  category: string;
  level: number; // 0-100
}

export const skills: Skill[] = [
  { name: 'React', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Next.js', category: 'Frontend', level: 85 },
  { name: 'Tailwind CSS', category: 'Styling', level: 95 },
  { name: 'Framer Motion', category: 'Animation', level: 80 },
  { name: 'Figma', category: 'Design', level: 85 },
  { name: 'Node.js', category: 'Backend', level: 70 },
  { name: 'Git', category: 'Tools', level: 90 },
  { name: 'Design Systems', category: 'Design', level: 85 },
  { name: 'GSAP', category: 'Animation', level: 70 },
  { name: 'JavaScript', category: 'Frontend', level: 95 },
  { name: 'HTML/CSS', category: 'Frontend', level: 95 },
];

export const categories = [...new Set(skills.map(s => s.category))];
