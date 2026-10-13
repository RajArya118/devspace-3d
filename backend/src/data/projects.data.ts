export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: string;
  statusType: 'active' | 'concept';
  tags: string[];
  githubUrl: string | null;
  liveDemoUrl: string | null;
}

export const sampleProjects: Project[] = [
  {
    id: 'p1',
    title: 'DevSpace 3D',
    tagline: 'Developer Portfolio with Glassmorphic 3D Aesthetics',
    description: 'An interactive personal portfolio built with React 19 and Vite. Features ambient glowing backgrounds, responsive navbar, and modular architecture.',
    status: 'Work in Progress (Active)',
    statusType: 'active',
    tags: ['React', 'Vite', 'Framer Motion', 'CSS3', 'Node.js', 'Express'],
    githubUrl: null,
    liveDemoUrl: null,
  },
  {
    id: 'p2',
    title: 'AstroExplore',
    tagline: 'Interactive 3D Space Explorer',
    description: 'A planned space exploration web app featuring interactive planet cards, scientific facts, filter categories, and a favorites list saved to localStorage.',
    status: 'Concept / Planned',
    statusType: 'concept',
    tags: ['React', 'CSS Grid', 'LocalStorage', 'Framer Motion'],
    githubUrl: null,
    liveDemoUrl: null,
  },
  {
    id: 'p3',
    title: 'FocusFlow',
    tagline: 'Productivity & Pomodoro Study Hub',
    description: 'A planned student productivity dashboard featuring a customizable Pomodoro timer, task priority boards, and daily study streak tracking.',
    status: 'Concept / Planned',
    statusType: 'concept',
    tags: ['React', 'Custom Hooks', 'LocalStorage', 'CSS'],
    githubUrl: null,
    liveDemoUrl: null,
  },
];
