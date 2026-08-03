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

export const goals = {
  statement: 'My goal is to become a strong AI/ML Engineer with a core foundation in Mathematics.',
  paragraphs: [
    "I'm working to build a deep, first-principles understanding of the math that underpins modern AI — linear algebra, calculus, probability, and optimization — rather than treating ML frameworks as black boxes. That foundation is what lets me reason about why a model works, not just how to call it.",
    "Alongside that, I want to keep building practical, production-grade AI/ML and agentic systems, closing the gap between theory and real-world engineering — the same way I've approached projects like InsightStream and my agentic tooling work.",
  ],
  focusAreas: [
    'Linear Algebra & Calculus',
    'Probability & Statistics',
    'Optimization Theory',
    'Deep Learning Foundations',
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
      "A production-grade multi-agent AI system that solves a real information-overload problem: with thousands of news articles published daily, most aggregators just dump everything on you with no personalization. InsightStream fixes that with a pipeline of specialized agents orchestrated in LangGraph — a preference-extraction agent turns a plain-English description of your interests into structured categories, a planner picks which of 41 RSS sources to pull from, a classifier tags every article, semantic deduplication removes near-duplicate stories, a ranking agent scores relevance to you specifically, a summarizer distills each story into sharp bullet points, and a verification agent fact-checks the summaries before anything gets sent. The result lands in your inbox every morning at 9 AM, with retry loops built in if too few articles are found or a summary fails verification.",
    highlights: [
      'Designed the 8-agent LangGraph pipeline (extraction → planning → fetch → classify → dedupe → rank → summarize → verify)',
      'Integrated AWS Bedrock (Claude Sonnet 4.5, Llama 3.3 70B) and OpenAI (GPT-5.1/5.2) across different pipeline stages',
      'Deployed on AWS ECS Fargate with Docker + ECR, behind an Application Load Balancer, with CI/CD via GitHub Actions',
    ],
    tech: ['LangGraph', 'AWS Bedrock', 'OpenAI', 'Streamlit', 'PostgreSQL', 'Docker', 'AWS ECS'],
    github: 'https://github.com/jsahani9/InsightStream',
    live: 'http://insightstream-alb-2074513672.us-east-1.elb.amazonaws.com',
  },
  {
    title: 'Navi',
    description:
      'A Kotlin Multiplatform trip-planning app built as a team project, aimed at making group travel planning collaborative instead of chaotic. Navi lets a group create shared itineraries, add and manage events, vote on competing plans, and get intelligent, AI-powered suggestions for nearby activities and travel optimizations based on the group\u2019s preferences and location. The backend runs on Ktor with a PostgreSQL database, and an AI microservice (Claude-backed) generates the contextual recommendations that get surfaced back into the trip itinerary.',
    highlights: [
      'Built with Kotlin Multiplatform (KMP) so the same core logic targets multiple platforms, currently shipping on the JS/web target with full map integration',
      'Backend built on Ktor with PostgreSQL, containerized with Docker for local and deployed environments',
      'Added an AI microservice that calls an LLM (Claude) to generate itinerary and activity suggestions',
    ],
    tech: ['Kotlin Multiplatform', 'Ktor', 'PostgreSQL', 'Docker', 'Claude API'],
    github: 'https://github.com/Ciftelia/Navi',
    live: '',
  },
  {
    title: 'Youtube Assistant — LangChain',
    description:
      "An intelligent chatbot that lets you 'talk' to any YouTube video instead of watching the whole thing to find what you need. It pulls the video's transcript, splits and embeds it, and stores the embeddings in a FAISS vector index, so when a user asks a question, the assistant retrieves the most semantically relevant transcript chunks and passes them to an LLM to generate a grounded, context-aware answer — rather than hallucinating from general knowledge.",
    highlights: [
      'Built a retrieval-augmented generation (RAG) pipeline: transcript extraction \u2192 chunking \u2192 embeddings \u2192 FAISS similarity search \u2192 LLM answer generation',
      'Used HuggingFace sentence-transformer embeddings with a Claude (Anthropic) model for answer generation via LangChain',
      'Wrapped the whole flow in a simple Streamlit UI for interactive Q&A over any video URL',
    ],
    tech: ['LangChain', 'FAISS', 'HuggingFace', 'Claude', 'Streamlit'],
    github: 'https://github.com/Aakashdeepsangwan/Youtube-Assistant--LangChain',
    live: '',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Goals', href: '#goals' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
