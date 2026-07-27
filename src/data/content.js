// Edit this file to customize the entire site's content.

export const profile = {
  name: 'Akash Deep',
  title: 'AI Software Developer @ Ciena',
  tagline:
    'I build agentic AI systems and ML-powered products — turning ambiguous problems into intelligent, production-ready software.',
  location: '',
  email: 'akashsangwan3721@gmail.com',
  resumeUrl: '', // e.g. '/resume.pdf' — drop a file in the public/ folder
  socials: {
    github: 'https://github.com/Aakashdeepsangwan',
    linkedin: 'https://www.linkedin.com/in/akash-deep-sangwan/',
    twitter: '',
  },
};

export const about = {
  paragraphs: [
    "I'm an AI Software Developer at Ciena, where I design and build intelligent, agentic systems that solve real engineering problems. My work spans machine learning, agentic AI architectures, and data-driven decision making.",
    'I enjoy working across the stack — from training and fine-tuning models to building the infrastructure, like MCP servers and agentic skills, that lets AI systems act autonomously and reliably.',
  ],
};

export const skills = [
  { category: 'Machine Learning', items: [] },
  { category: 'Agentic Systems', items: ['Agentic AI', 'MCP', 'Agentic Skills'] },
  { category: 'Data Analysis', items: [] },
];

export const projects = [
  {
    title: 'InsightStream',
    description:
      'A production-grade multi-agent AI system that monitors 41 news sources, filters the noise, and delivers a personalized AI-curated news digest by email every morning — built on a LangGraph pipeline with retrieval, ranking, summarization, and verification agents.',
    tech: ['LangGraph', 'AWS Bedrock', 'OpenAI', 'Streamlit', 'PostgreSQL', 'Docker', 'AWS ECS'],
    github: 'https://github.com/jsahani9/InsightStream',
    live: 'http://insightstream-alb-2074513672.us-east-1.elb.amazonaws.com',
  },
  {
    title: 'Navi',
    description:
      'A Kotlin Multiplatform app that helps users plan, organize, and share trips collaboratively — create itineraries, manage events, vote on plans, and get AI-powered suggestions for nearby activities and travel optimization.',
    tech: ['Kotlin Multiplatform', 'Ktor', 'PostgreSQL', 'Docker', 'Claude API'],
    github: 'https://github.com/Ciftelia/Navi',
    live: '',
  },
  {
    title: 'Youtube Assistant — LangChain',
    description:
      'An intelligent chatbot that analyzes YouTube videos and answers user queries based on the video content, using semantic search over video transcripts.',
    tech: ['LangChain', 'FAISS', 'HuggingFace', 'Claude', 'Streamlit'],
    github: 'https://github.com/Aakashdeepsangwan/Youtube-Assistant--LangChain',
    live: '',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
