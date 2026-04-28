// Data pulled from nskr.dev
const SITE_DATA = {
  name: "Narra Suryakoushik Reddy",
  handle: "NSKR",
  role: "AI Automation Engineer",
  tagline: "Open Source Contributor",
  location: "India",
  email: "red@nskr.dev",
  resume: "https://github.com/reddynsk/resumes/raw/main/NSKR_Resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/reddynsk" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nskrdev" },
    { label: "X", url: "https://x.com/nskrhq" },
    { label: "LeetCode", url: "https://leetcode.com/u/reddynsk/" },
    { label: "Email", url: "mailto:red@nskr.dev" },
  ],
  bio: "I build AI agentic automations for businesses to reduce everyday tedious tasks with n8n, LangChain and Python. Enthusiastic about RAG and MCP tools, currently learning PostgreSQL and Redis.",

  experience: [
    {
      company: "Valari Solutions",
      logo: "uploads/logos/valari.webp",
      period: "Dec 2025 — Present",
      type: "Full-time",
      location: "Remote",
      tags: ["n8n", "Python", "TypeScript", "LangChain", "AI Agents"],
      roles: [
        {
          role: "AI Automations Engineer",
          period: "Feb 2026 — Present",
          highlights: [
            "Promoted from Junior AI Automations Engineer",
            "Designing and shipping production AI automation systems end-to-end",
          ],
        },
        {
          role: "Junior AI Automations Engineer",
          period: "Dec 2025 — Feb 2026",
          highlights: [
            "Built n8n workflow automations and AI agent integrations",
          ],
        },
      ],
    },
    {
      company: "Skin Seoul",
      logo: "uploads/logos/skinseoul.avif",
      role: "AI Agent Innovations Intern",
      period: "Jul 2025 — Sep 2025",
      type: "Internship",
      highlights: [
        "Automated 20+ API integrations and optimized AI agent workflows on n8n, reducing manual tasks by 40%",
        "Delivered automated solutions saving teams 15+ hours per week",
        "Increased workflow success rate to 98% using real-data analysis",
        "Built automation systems for e-commerce ops integrating WooCommerce, Klaviyo, Google Sheets",
        "Developed custom TypeScript code nodes for complex workflow logic",
        "Implemented multi-currency support (SGD, AED, JPY) and order processing pipelines",
      ],
      tags: ["n8n", "TypeScript", "Python", "WooCommerce", "Klaviyo", "REST APIs"],
    },
    {
      company: "National Service Scheme — LPU",
      logo: "uploads/logos/nss.png",
      role: "NSS Volunteer",
      period: "Aug 2024 — Present",
      type: "Volunteer",
      highlights: ["Community Service", "Leadership"],
      tags: ["Community", "Leadership"],
    },
  ],

  featuredProjects: [
    {
      id: "llm-council",
      title: "LLM Council",
      period: "Dec 2025 — Present",
      tagline: "A deliberative democracy for AI models",
      desc: "A 3-stage orchestration where GPT-5, Claude, Gemini, and Grok debate, vote, and synthesize collective wisdom. Uses GitHub Copilot free-tier models for cost-free access.",
      highlights: [
        "Anonymous peer review to prevent brand bias",
        "Color-coded UI with voting matrix + podium rankings",
        "Transparent, locally saved conversation history",
        "Supports GitHub Copilot and OpenRouter providers",
      ],
      tags: ["AI Orchestration", "FastAPI", "React", "Python", "Vite", "OAuth"],
      url: "https://github.com/reddynsk/llm-council",
    },
    {
      id: "dance-pose",
      title: "Dance Move Insight",
      period: "Sep 2025",
      tagline: "Real-time pose analysis API",
      desc: "AI-powered REST API for real-time dance pose detection and analysis using computer vision. Processes videos up to 100MB across MP4/AVI/MOV.",
      highlights: [
        "Detects 7 dance moves via landmark coordinate analysis",
        "Extracts 33 body landmarks with timestamped sequences",
        "Deployed on AWS ECS with Docker containerization",
        "99%+ pose detection accuracy with MediaPipe",
      ],
      tags: ["Python", "Flask", "MediaPipe", "OpenCV", "Docker", "AWS ECS"],
      url: "https://github.com/reddynsk",
    },
    {
      id: "arise",
      title: "ARISE",
      period: "Apr 2025",
      tagline: "AI-based Resume Intelligence and Scoring Engine",
      desc: "Intelligent resume evaluation system using NLP and ML to match candidates with job descriptions.",
      highlights: [
        "96% accuracy in resume-job fit prediction",
        "Semantic similarity via TF-IDF and spaCy",
        "LanguageTool API for grammar validation",
        "AI-driven suggestions for ATS optimization",
      ],
      tags: ["Python", "NLP", "Scikit-learn", "TF-IDF", "spaCy", "Flask"],
      url: "https://github.com/reddynsk",
    },
  ],

  otherProjects: [
    { title: "Deep Facial Verification", period: "03.2023", tagline: "Siamese Neural Network", tags: ["TensorFlow", "Keras", "CUDA", "Python"], url: "https://github.com/reddynsk" },
    { title: "Autonomous Disaster Response Agent", period: "09.2025", tagline: "Hackathon · Real-time AI", tags: ["AWS", "Python", "AI Agents"], url: "https://github.com/reddynsk" },
    { title: "Omarchy", period: "10.2025 — Present", tagline: "Open-Source Linux Menu System", tags: ["Bash", "Linux", "dmenu"], url: "https://github.com/basecamp/omarchy" },
    { title: "nskr.me", period: "10.2025 — Present", tagline: "Personal portfolio", tags: ["HTML5", "CSS3", "JavaScript"], url: "https://nskr.me" },
    { title: "n8n Workflow Automation Suite", period: "07—09.2025", tagline: "Production e-commerce automations", tags: ["n8n", "TypeScript", "WooCommerce", "Klaviyo"], url: "https://github.com/reddynsk" },
    { title: "RAG Playground", period: "2025", tagline: "Retrieval experiments on MCP tools", tags: ["LangChain", "RAG", "MCP"], url: "https://github.com/reddynsk" },
  ],

  education: [
    { school: "Lovely Professional University", degree: "Master of Computer Application (MCA)", period: "Aug 2024 — Present", note: "Specializing in AI & ML" },
    { school: "JNTU Hyderabad", degree: "Data Science using Python", period: "Sep 2021 — Mar 2023", note: "Practical data science" },
    { school: "Visakha Defence Academy", degree: "BSc Computer Science", period: "Jun 2019 — Apr 2023", note: "CS fundamentals" },
  ],

  certifications: [
    { issuer: "HarvardX (edX)", title: "Data Science Capstone", date: "Jul 2025" },
    { issuer: "Microsoft · LinkedIn Learning", title: "Career Essentials in System Administration", date: "Jan 2023" },
    { issuer: "CompTIA · LinkedIn Learning", title: "Ethical Hacking", date: "Dec 2022" },
  ],

  posts: [
    { title: "How I Hosted n8n on My Own Domain as a Student", date: "Nov 16, 2025", excerpt: "From cloud nightmares to hosting n8n at n8n.nskr.dev with DigitalOcean student credits.", isNew: true },
    { title: "Building Production-Ready E-commerce Automation with N8N", date: "Nov 11, 2025", excerpt: "Lessons from automating order processing, currency handling, and customer workflows at scale." },
  ],

  skills: {
    "AI / ML": ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "LangChain", "AWS Bedrock", "Ollama", "MCP", "CUDA"],
    "Automation": ["n8n", "LangChain", "Python", "REST API", "Slack API", "Stripe"],
    "Languages": ["Python", "TypeScript", "JavaScript", "C++", "C", "Java", "Go", "Lua", "R"],
    "Web / Frontend": ["React", "Next.js", "React Native", "Redux", "Tailwind", "Material UI", "HTML5", "CSS3"],
    "Backend": ["FastAPI", "Flask", "Node.js", "Express", "GraphQL", "Ruby on Rails"],
    "Infra / Cloud": ["Docker", "Kubernetes", "AWS", "GCP", "Firebase", "Lambda", "Linux", "Arch Linux", "Bash"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle", "Prisma"],
    "Tools": ["Git", "GitHub", "VS Code", "Cursor", "Jupyter", "Copilot", "Notion", "Figma", "Framer"],
  },
};

window.SITE_DATA = SITE_DATA;
