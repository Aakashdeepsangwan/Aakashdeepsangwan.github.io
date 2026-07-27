// Edit this file to customize the entire site's content.

export const profile = {
  name: 'Your Name',
  title: 'Software Engineer',
  tagline: 'I build things for the web, and occasionally teach machines to think.',
  location: 'Your City, Country',
  email: 'you@example.com',
  resumeUrl: '', // e.g. '/resume.pdf' — drop a file in the public/ folder
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: '',
  },
};

export const about = {
  paragraphs: [
    "I'm a software engineer who enjoys turning ambiguous problems into clean, working products. I care about readable code, thoughtful UX, and shipping things that actually get used.",
    "Lately I've been exploring AI/ML systems, retrieval-augmented generation, and full-stack product development. Outside of code, I like [hobby], [hobby], and [hobby].",
  ],
};

export const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
  { category: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'FastAPI', 'PostgreSQL', 'REST APIs'] },
  { category: 'AI / ML', items: ['RAG Systems', 'LangChain', 'PyTorch', 'OpenAI API'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'CI/CD'] },
];

export const projects = [
  {
    title: 'Project One',
    description:
      'A short, punchy description of what this project does and the problem it solves.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: '',
    live: '',
  },
  {
    title: 'Project Two',
    description:
      'A short, punchy description of what this project does and the problem it solves.',
    tech: ['Python', 'FastAPI', 'Docker'],
    github: '',
    live: '',
  },
  {
    title: 'Project Three',
    description:
      'A short, punchy description of what this project does and the problem it solves.',
    tech: ['TypeScript', 'Next.js'],
    github: '',
    live: '',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
