import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  // Featured Project 1: Dance Move Insight
  {
    id: "dance-move-insight",
    title: "Dance Move Insight - Real-time Pose Analysis API",
    period: {
      start: "09.2025",
      end: "09.2025",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "Python",
      "Flask",
      "MediaPipe",
      "OpenCV",
      "Computer Vision",
      "Docker",
      "AWS ECS",
      "REST API",
    ],
    description: `AI-powered REST API for real-time dance pose detection and analysis using computer vision.

**Key Features:**
- Processes videos up to 100MB across MP4, AVI, MOV formats
- Detects 7 distinct dance moves through landmark coordinate analysis
- Extracts 33 body landmarks with timestamped pose sequences
- Deployed on AWS ECS with Docker containerization
- Achieved 99%+ pose detection accuracy with MediaPipe

**Technical Highlights:**
- Frame-by-frame video analysis pipeline for choreography insights
- Geometric angle calculations for move classification
- Health monitoring and JSON response formatting
- Production-grade deployment on cloud infrastructure`,
    
    isExpanded: true,
  },

  // Featured Project 2: ARISE
  {
    id: "arise-resume-intelligence",
    title: "ARISE - AI-based Resume Intelligence and Scoring Engine",
    period: {
      start: "04.2025",
      end: "04.2025",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "Python",
      "NLP",
      "Scikit-learn",
      "TF-IDF",
      "spaCy",
      "Flask",
      "Machine Learning",
      "API Integration",
    ],
    description: `Intelligent resume evaluation system using NLP and ML to match candidates with job descriptions.

**Key Features:**
- 96% accuracy in resume-job fit prediction
- Semantic similarity analysis using TF-IDF and spaCy
- LanguageTool API integration for grammar validation
- AI-driven suggestions for ATS optimization
- Actionable feedback generation for resume improvement

**Technical Highlights:**
- Trained classification model with 96% validation accuracy
- NLP-powered semantic matching algorithms
- Grammar checking and readability scoring
- Flask-based REST API for easy integration`,
    
    isExpanded: true,
  },

  // Featured Project 3: Deep Facial Verification
  {
    id: "facial-verification-siamese",
    title: "Deep Facial Verification - Siamese Neural Network",
    period: {
      start: "03.2023",
      end: "03.2023",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "CUDA",
      "Python",
      "Computer Vision",
      "Neural Networks",
    ],
    description: `High-accuracy facial verification system using Siamese Neural Networks for identity authentication.

**Key Achievements:**
- 99.6% verification accuracy on test data
- ROC AUC score of 0.998 demonstrating excellent discrimination
- Trained for 1050 epochs using contrastive loss function
- CUDA-accelerated training for faster convergence

**Technical Implementation:**
- Siamese architecture for one-shot learning
- Contrastive loss optimization for embedding spaces
- Euclidean distance-based similarity computation
- Precision-recall metrics for robust evaluation`,
    isExpanded: true,
  },

  // Hackathon Project: Disaster Response Agent
  {
    id: "disaster-response-agent",
    title: "Autonomous Disaster Response Agent",
    period: {
      start: "09.2025",
      end: "09.2025",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "AWS",
      "Python",
      "AI Agents",
      "Hackathon",
      "Real-time Processing",
      "Satellite Data",
      "Agent Orchestration",
    ],
    description: `AWS-powered AI agent system for autonomous disaster monitoring and response coordination.

- Built for AWS hackathon with tight deadline constraints
- Autonomous incident ingestion from public satellite feeds
- Real-time processing of open-source disaster databases
- Multi-agent orchestration for task planning and coordination
- Intelligent prioritization of emergency response actions
- Scalable backend implementation on AWS infrastructure`,
    isExpanded: true,
  },

  // Open Source: Omarchy Contributions
  {
    id: "omarchy-contributions",
    title: "Omarchy - Open Source Linux Menu System",
    period: {
      start: "10.2025",
    },
    link: "https://github.com/basecamp/omarchy",
    skills: ["Open Source", "Bash", "Linux", "dmenu", "Git", "Collaboration"],
    description: `Active contributor to Omarchy open-source Linux menu system developed by Basecamp.

**Contributions:**
- PR #2253: Added fuzzy search functionality to menu system
- PR #2258: Integrated dedicated search option in main menu
- dmenu integration for fast keyboard-driven interface
- Enhanced user experience with intelligent search matching
- Collaborated with Basecamp maintainers through code reviews

**Impact:**
- Improved navigation efficiency for Linux power users
- Reduced command access time with direct search capability
- Successfully merged into main repository benefiting entire community`,
    isExpanded: true,
  },

  // Portfolio Website
  {
    id: "portfolio-nskr-me",
    title: "nskr.me - Personal Portfolio Website",
    period: {
      start: "10.2025",
    },
    link: "https://nskr.me",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GitHub Pages",
      "Responsive Design",
      "SEO",
      "CI/CD",
    ],
    description: `Custom-built portfolio website showcasing AI engineering and DevOps expertise.

- Modern space-themed design with neural network animations
- Red accent color scheme reflecting personal brand
- AI/ML project focus with interactive showcase
- GitHub Pages deployment with custom domain
- Mobile-first responsive design for all devices
- Performance optimized with <3 second load times
- SEO optimized for search visibility`,
    
    isExpanded: false,
  },

  // n8n Automation Suite (Skin Seoul Work)
  {
    id: "n8n-automation-suite",
    title: "n8n Workflow Automation Suite",
    period: {
      start: "07.2025",
      end: "09.2025",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "n8n",
      "TypeScript",
      "API Integration",
      "WooCommerce",
      "Klaviyo",
      "Google Sheets",
      "Automation",
    ],
    description: `Production-grade automation workflows developed at Skin Seoul internship.

**Achievements:**
- Automated 20+ API integrations with 98% success rate
- Reduced manual tasks by 40%, saving 15+ hours weekly
- Multi-currency support (SGD, AED, JPY) for order processing
- Custom TypeScript code nodes for complex logic
- Real-time Slack notifications for team coordination
- Intelligent PIC assignment and logistics automation`,
    isExpanded: false,
  },

  // Learning Project: Python Virtual Environment Management
  {
    id: "python-env-management",
    title: "Advanced Python Environment Management",
    period: {
      start: "01.2025",
      end: "03.2025",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "Python",
      "Virtual Environments",
      "Linux",
      "System Administration",
      "Package Management",
    ],
    description: `Learning project focused on Python version management and virtual environments on Arch Linux.

- Compiled and installed Python 3.12 from source
- Created isolated virtual environments for multiple projects
- Package dependency management and conflict resolution
- Learned best practices for Python project organization
- System-level Python configuration on Linux`,
  },

  // Learning Project: Docker on Arch Linux
  {
    id: "docker-arch-setup",
    title: "Docker Development Environment Setup",
    period: {
      start: "06.2025",
      end: "07.2025",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "Docker",
      "Arch Linux",
      "Containerization",
      "DevOps",
      "System Configuration",
    ],
    description: `Learning project for Docker containerization on Arch Linux.

- Configured Docker daemon on Arch Linux system
- Troubleshot permission issues and user group management
- Built custom Docker images for Python applications
- Learned container networking and volume management
- Created docker-compose configurations for multi-container apps`,
  },

  // Learning Project: Linux Customization
  {
    id: "linux-desktop-customization",
    title: "Arch Linux Desktop Environment Customization",
    period: {
      start: "03.2025",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "Linux",
      "Arch Linux",
      "Bash Scripting",
      "Wayland",
      "Rofi",
      "Hyprland",
      "System Configuration",
    ],
    description: `Custom Linux desktop environment configuration and automation scripts.

- Configured Hyprland Wayland compositor on Arch Linux
- Custom rofi scripts for application launching and workflows
- Bash scripting for system automation and task management
- Dotfiles management and version control
- Production-grade shell configuration for development efficiency
- Explored running macOS apps via Darling compatibility layer`,
  },

  // Learning Project: R and RStudio Setup
  {
    id: "r-data-analysis-setup",
    title: "R Programming and Data Analysis Environment",
    period: {
      start: "02.2025",
      end: "03.2025",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "R Programming",
      "RStudio",
      "Data Analysis",
      "Statistical Computing",
      "Tidyverse",
      "Package Management",
    ],
    description: `Learning project for R programming and statistical analysis setup.

- Installed and configured R and RStudio on Arch Linux
- Troubleshot R package dependencies and compilation issues
- Installed tidyverse package ecosystem for data manipulation
- Learned R syntax and data analysis workflows
- Applied R for statistical computing in data science projects`,
  },

  // Side Project: AI Prompt Engineering
  {
    id: "ai-prompt-engineering",
    title: "AI-Assisted Workflow Development",
    period: {
      start: "05.2025",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "Prompt Engineering",
      "Cursor",
      "AI Tools",
      "Workflow Automation",
      "Code Generation",
    ],
    description: `Leveraging AI tools for automated code generation and workflow development.

- Crafting detailed prompts for Cursor AI-assisted development
- Automated Google Sheets workflow management with AI
- Team assignment automation using AI-generated code
- TypeScript code node development for n8n with AI assistance
- Learned effective prompt engineering techniques for code generation`,
  },

  // Learning Project: Node.js and npm Ecosystem
  {
    id: "nodejs-npm-learning",
    title: "Node.js and npm Ecosystem Exploration",
    period: {
      start: "04.2025",
      end: "06.2025",
    },
    link: "https://github.com/nskrdev",
    skills: ["Node.js", "npm", "JavaScript", "Package Management", "Debugging"],
    description: `Hands-on learning with Node.js ecosystem and package management.

- Set up Node.js development environment on Arch Linux
- Learned npm package management and dependency resolution
- Troubleshot common npm issues and permission errors
- Built CLI tools and automation scripts with Node.js
- Explored popular npm packages for automation and APIs`,
  },

  // Academic Project: HarvardX Data Science Capstone
  {
    id: "harvardx-capstone",
    title: "HarvardX Data Science Capstone Project",
    period: {
      start: "05.2025",
      end: "07.2025",
    },
    link: "https://courses.edx.org/certificates/91c0ead05f6c46f5886d61c03d194f99",
    skills: [
      "Data Science",
      "R Programming",
      "Statistical Analysis",
      "Machine Learning",
      "Research",
    ],
    description: `Capstone project for HarvardX Data Science Professional Certificate.

- End-to-end data analysis project from Harvard University program
- Applied statistical inference and machine learning techniques
- Developed predictive models with cross-validation
- Created comprehensive data visualizations and reports
- Demonstrated research methodology and scientific approach
- Earned verified certificate upon successful completion`,
  },

  // Side Project: Freelance Exploration
  {
    id: "freelance-n8n-development",
    title: "Freelance n8n Automation Development",
    period: {
      start: "09.2025",
    },
    link: "https://github.com/nskrdev",
    skills: [
      "n8n",
      "Freelancing",
      "Client Communication",
      "Automation",
      "Business Development",
    ],
    description: `Exploring freelance opportunities in n8n workflow automation.

- Researched n8n freelance market and client needs
- Built portfolio of automation workflow examples
- Learned client communication and project scoping
- Developed expertise in diverse automation use cases
- Explored platforms for finding automation development work`,
  },
];
