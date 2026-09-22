// ============================================================
// All hardcoded content for the portfolio
// ============================================================

export const personalInfo = {
  name: "Manaswini",
  fullName: "Rani Sree Naga Surya Sai Sahithi Manaswini",
  tagline: "Software Engineer | Java | Full-Stack Developer",
  hook: "3 live full-stack, cybersecurity & RAG/AI apps deployed with real databases, REST APIs, and real users — as a 3rd-year B.Tech student.",
  email: "manaswinirani18@gmail.com",
  phone: "+91-9160436790",
  github: "https://github.com/manaswini1877",
  linkedin: "https://www.linkedin.com/in/manaswini-rani-7429suni18/",
  leetcode: "https://leetcode.com/u/manaswini-18",
  resume: "/resume.pdf",
};

export const stats = [
  { value: 9.68, suffix: "", label: "CGPA", decimals: 2 },
  { value: 250, suffix: "+", label: "LeetCode Problems", decimals: 0 },
  { value: 3, suffix: "", label: "Live Deployed Apps", decimals: 0 },
];

export const typingRoles = [
  "Software Engineer",
  "Java Developer",
  "Full-Stack Developer",
  "DSA Enthusiast",
  "Problem Solver",
];

export const aboutText = [
  "I’m a third-year B.Tech Computer Science and Engineering student at SVECW, graduating in 2028. I’m passionate about software development and currently focusing on strengthening my skills in Java, Data Structures and Algorithms, and Full-Stack Development.",
  "Currently learning AI integration and building practical applications with LLM APIs and RAG, alongside full-stack development. Experienced in open-source collaboration, hackathons, and team-based development.",
];

export const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Computer Networks",
  "Operating Systems",
  "Cyber Security",
];

export const education = {
  degree: "B.Tech Computer Science and Engineering",
  institution: "Shri Vishnu Engineering College for Women (SVECW)",
  location: "Bhimavaram, Andhra Pradesh",
  year: "2024 – 2028 (Graduating 2028)",
  cgpa: "9.68 / 10",
};

export const skillGroups = [
  {
    label: "Languages",
    color: "violet",
    skills: ["Java (Primary)", "Python", "JavaScript", "C"],
  },
  {
    label: "CS / DSA",
    color: "rose",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "Arrays",
      "Strings",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Trees",
      "250+ LeetCode",
    ],
  },
  {
    label: "Frontend",
    color: "blue",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "emerald",
    skills: ["Node.js", "FastAPI", "REST APIs", "JWT Authentication", "bcrypt"],
  },
  {
    label: "Databases",
    color: "amber",
    skills: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    label: "AI Integration",
    color: "cyan",
    skills: ["Gemini API", "RAG", "embeddings/vector search", "LLM API integration"],
  },
  {
    label: "Tools & Deployment",
    color: "violet",
    skills: ["Git", "GitHub", "VS Code", "Render", "Vercel"],
  },
];

export const skillColorMap: Record<string, { bg: string; text: string; border: string }> = {
  violet: {
    bg: "bg-violet-500/10 dark:bg-violet-500/10",
    text: "text-violet-700 dark:text-violet-300",
    border: "border-violet-500/30",
  },
  blue: {
    bg: "bg-blue-500/10 dark:bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-500/30",
  },
  emerald: {
    bg: "bg-emerald-500/10 dark:bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-500/30",
  },
  amber: {
    bg: "bg-amber-500/10 dark:bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-500/30",
  },
  rose: {
    bg: "bg-rose-500/10 dark:bg-rose-500/10",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-500/30",
  },
  cyan: {
    bg: "bg-cyan-500/10 dark:bg-cyan-500/10",
    text: "text-cyan-700 dark:text-cyan-300",
    border: "border-cyan-500/30",
  },
};

export const flagshipProjects = [
  {
    id: 1,
    number: "01",
    year: "2026",
    name: "TalentDash",
    subtitle: "Salary Intelligence Platform",
    description:
      "Built and deployed a full-stack salary benchmarking platform with 60+ company records and a validated REST API.",
    longDesc:
      "Architected a Next.js and PostgreSQL benchmarking platform; leveraged Incremental Static Regeneration (ISR) to reduce page load times to under 2 seconds and improve SEO indexing.",
    stack: ["Next.js", "React", "PostgreSQL", "Neon", "REST API", "ISR", "Tailwind CSS"],
    github: "https://github.com/manaswini1877/talentdash-fullstack",
    live: "https://talentdash-fullstack.onrender.com",
    gradient: "from-violet-600/20 to-blue-600/20",
    accent: "#7c3aed",
  },
  {
    id: 2,
    number: "02",
    year: "2026",
    name: "Attack Path Visualizer",
    subtitle: "Cybersecurity Infrastructure Tool",
    description:
      "Built and deployed a cybersecurity dashboard to visualize multi-hop attack paths, choke points, and network risk scores.",
    longDesc:
      "Added a Mitigation Simulator to estimate security risk reduction and support remediation analysis.",
    stack: ["React", "Node.js", "REST API", "Network Graph", "Cybersecurity", "Tailwind CSS"],
    github: "https://github.com/manaswini1877/attack-path-visualizer",
    live: "https://attack-path-visualizer.onrender.com",
    gradient: "from-blue-600/20 to-violet-600/20",
    accent: "#2563eb",
  },
  {
    id: 3,
    number: "03",
    year: "2026",
    name: "InfoNexus",
    subtitle: "SVECW College Chatbot",
    description:
      "Bilingual (English/Telugu), voice-enabled RAG chatbot answering SVECW admissions, placements, and campus queries with grounded, source-cited responses.",
    longDesc:
      "Engineered a bilingual RAG pipeline using Python, FastAPI, and ChromaDB to query campus databases, utilizing Gemini API for grounded vector-search responses and Google TTS for real-time voice output.",
    stack: ["Python", "FastAPI", "Gemini API", "ChromaDB", "React", "Google STT/TTS"],
    github: "https://github.com/manaswini1877/svecw-chatbot",
    live: "https://svecw-chatbot-frontend.onrender.com",
    gradient: "from-emerald-600/20 to-cyan-600/20",
    accent: "#059669",
  },
];

export const moreProjects = [
  {
    name: "college-discovery-platform",
    displayName: "UniDiscover",
    description:
      "Full-stack college discovery platform with 60+ colleges, an 11-exam admission predictor, JWT-secured auth, and side-by-side college comparison.",
    language: "TypeScript",
    github: "https://github.com/manaswini1877/college-discovery-platform",
    live: "https://college-discovery-platform-e3g4.onrender.com",
    updated: "2026",
  },
  {
    name: "library-management-system",
    displayName: "Library Management System",
    description:
      "Web app to manage books, students, and borrowing records with separate student/admin interfaces.",
    language: "JavaScript",
    github: "https://github.com/manaswini1877/library-management-system",
    updated: "2025",
  },
  {
    name: "EduQuest",
    displayName: "EduQuest",
    description:
      "Interactive quiz application with real-time score tracking, instant feedback, and multiple quiz categories.",
    language: "JavaScript",
    github: "https://github.com/manaswini1877/EduQuest",
    updated: "2025",
  },
  {
    name: "ATM-Simulation-Java",
    displayName: "ATM Simulation",
    description:
      "Java-based ATM simulation with PIN auth, balance inquiry, deposits, withdrawals, and transaction history.",
    language: "Java",
    github: "https://github.com/manaswini1877/ATM-Simulation-Java",
    updated: "2025",
  },
  {
    name: "Diabetes-prediction-manaswini1877",
    displayName: "Diabetes Prediction",
    description:
      "ML-based diabetes prediction model using Scikit-learn with feature engineering and accuracy benchmarking.",
    language: "Python",
    github: "https://github.com/manaswini1877/Diabetes-prediction-manaswini1877",
    updated: "2026",
  },
  {
    name: "Traffic-managemennt-system",
    displayName: "Traffic Management System",
    description:
      "Python simulation of intelligent traffic signal management with adaptive timing algorithms.",
    language: "Python",
    github: "https://github.com/manaswini1877/Traffic-managemennt-system",
    updated: "2026",
  },
  {
    name: "Hackathon-2.0-Challengers",
    displayName: "Verifiable Student Credentials",
    description:
      "Hackathon project: digital verifiable student credential system for academic recruiters.",
    language: "JavaScript",
    github: "https://github.com/manaswini1877/Hackathon-2.0-Challengers-",
    updated: "2025",
  },
  {
    name: "incident-management-dashboard",
    displayName: "Incident Management Dashboard",
    description:
      "Full-stack operational incident management app with Spring Boot REST API backend and React dashboard.",
    language: "JavaScript",
    github: "https://github.com/manaswini1877/threat-incident-management",
    live: "https://threat-incident-management.vercel.app",
    updated: "2026",
  },
];

export const languageColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3776ab",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  C: "#555555",
};

export const certifications = [
  {
    name: "Oracle Java Foundations",
    issuer: "Oracle",
    year: "2026",
    icon: "☕",
  },
  {
    name: "IBM Cloud Computing",
    issuer: "IBM",
    year: "2026",
    icon: "☁️",
  },
  {
    name: "Introduction to Quantum Computing",
    issuer: "NPTEL",
    year: "2026",
    icon: "⚛️",
  },
];

export const achievements = [
  "9.68/10 CGPA — Academic excellence at SVECW",
  "250+ LeetCode problems solved across multiple difficulty levels",
  "3 deployed full-stack, cybersecurity & RAG/AI apps with live databases & real users",
  "Oracle Java Foundations Certified (2026)",
  "IBM Cloud Computing Certified (2026)",
  "NPTEL Quantum Computing Certified (2026)",
  "Alta AI Fellowship — building AI-powered applications",
];

export const hackathons = [
  {
    type: "program",
    title: "GCI World",
    role: "Participant",
    year: "2026",
    description:
      "Participated in the global open-source program, contributing to developer tooling and community codebases.",
  },
  {
    type: "opensource",
    title: "IEEE Summer School of Code (SSOC)",
    role: "Open Source Contributor",
    year: "2026",
    description:
      "Contributed to open source software repositories, collaborating with maintainers on real-world codebases and resolving issues.",
  },
  {
    type: "hackathon",
    title: "Amrita Hackathon",
    role: "Participant",
    year: "2026",
    description:
      "Competed in a national-level hackathon, collaborating in a team to build innovative tech solutions under time pressure.",
  },
  {
    type: "hackathon",
    title: "Deknext Hackathon",
    role: "Participant",
    year: "2026",
    description:
      "Participated in a competitive hackathon challenge, presenting a prototype solution to a panel of industry judges.",
  },
  {
    type: "leadership",
    title: "Project Team Lead",
    role: "Team Lead — 4 Members",
    year: "2025",
    org: "SVECW",
    description:
      "Led a 4-member team using Git/GitHub branching workflows and pull-request code reviews, coordinating tasks through Agile-style milestone planning to ensure timely delivery.",
  },
];
