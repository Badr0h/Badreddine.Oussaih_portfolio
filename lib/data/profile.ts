export type Locale = "fr" | "en";

export type LocalizedString = Record<Locale, string>;

export type SkillCategory = {
  id: string;
  label: LocalizedString;
  items: string[];
};

export type Platform = {
  id: string;
  label: string;
  url: string;
};

export type Certification = {
  title: LocalizedString;
  issuer: string;
  year: number;
  skills: string[];
  url?: string;
};

export type Experience = {
  company: LocalizedString;
  role: LocalizedString;
  period: LocalizedString;
  description: LocalizedString;
  stack?: string[];
};

export type SpokenLanguage = {
  name: LocalizedString;
  level: LocalizedString;
};

export const profile = {
  name: "Badreddine Oussaih",
  title: {
    fr: "Développeur Full-Stack | Spécialiste Spring Boot",
    en: "Full-Stack Developer | Spring Boot Specialist",
  } satisfies LocalizedString,
  tagline: {
    fr: "Java · Spring Boot · Angular · Next.js",
    en: "Java · Spring Boot · Angular · Next.js",
  },
  bio: {
    fr: "Développeur full-stack passionné par la construction d'applications web robustes, performantes et sécurisées. J'aide entreprises et startups à concrétiser leurs projets techniques — de la conception base de données à l'interface utilisateur finale.",
    en: "Full-stack developer passionate about building robust, high-performance, and secure web applications. I help companies and startups bring their technical projects to life — from database design to the final user interface.",
  },
  bioExtended: {
    fr: "Rigoureux, autonome et orienté solutions, je livre du code propre et documenté en appliquant les bonnes pratiques de sécurité (XSS, CSRF, injections SQL). Basé à Casablanca, disponible en remote ou hybride.",
    en: "Rigorous, autonomous, and solution-oriented, I deliver clean, documented code and implement security best practices against web vulnerabilities (XSS, CSRF, SQL injections). Based in Casablanca, available for full remote or hybrid work.",
  },
  email: "oussaihbadreddine@gmail.com",
  github: "https://github.com/Badr0h",
  linkedin: "https://www.linkedin.com/in/badreddine-oussaih-175b5834a/",
  linkedinCertifications:
    "https://www.linkedin.com/in/badreddine-oussaih-175b5834a/details/certifications/",
  malt: "https://www.malt.com/profile/badreddineoussaih",
  freelancer: "https://www.freelancer.com/u/BadreddineOh",
  location: {
    fr: "Casablanca, Maroc — Remote / Hybride",
    en: "Casablanca, Morocco — Remote / Hybrid",
  },
  cvUrl: {
    fr: "/cv/CV_Badreddine_Oussaih_FR.pdf",
    en: "/cv/CV_Badreddine_Oussaih_EN.pdf",
  } satisfies LocalizedString,
  education: {
    school: "EMSI",
    degree: {
      fr: "Cycle ingénieur — Informatique & Génie Logiciel",
      en: "Engineering Degree — Computer Science & Software Engineering",
    },
    description: {
      fr: "Étudiant ingénieur à l'EMSI, je combine les principes académiques de l'ingénierie logicielle avec une approche freelance orientée livraison.",
      en: "Computer engineering student at EMSI, combining academic engineering principles with a freelance mindset to deliver clean, efficient, business-driven code.",
    },
  },
  spokenLanguages: [
    {
      name: { fr: "Arabe", en: "Arabic" },
      level: { fr: "Natif", en: "Native" },
    },
    {
      name: { fr: "Français", en: "French" },
      level: { fr: "Courant", en: "Fluent" },
    },
    {
      name: { fr: "Anglais", en: "English" },
      level: { fr: "Conversationnel", en: "Conversational" },
    },
  ] satisfies SpokenLanguage[],
  platforms: [
    { id: "github", label: "GitHub", url: "https://github.com/Badr0h" },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/badreddine-oussaih-175b5834a/",
    },
    {
      id: "malt",
      label: "Malt",
      url: "https://www.malt.com/profile/badreddineoussaih",
    },
    {
      id: "freelancer",
      label: "Freelancer",
      url: "https://www.freelancer.com/u/BadreddineOh",
    },
  ] satisfies Platform[],
  certifications: [
    {
      title: {
        fr: "Java Database Engineering — Spring Boot MVC & SQL",
        en: "Java Database Engineering — Spring Boot MVC & SQL",
      },
      issuer: "Coursera",
      year: 2026,
      skills: ["Java", "Spring Boot", "SQL", "MVC", "Database"],
      url: "https://www.linkedin.com/in/badreddine-oussaih-175b5834a/details/certifications/",
    },
    {
      title: {
        fr: "Java FullStack Developer",
        en: "Java FullStack Developer",
      },
      issuer: "Coursera",
      year: 2025,
      skills: ["Java", "Spring Boot", "Angular", "MySQL", "JavaScript"],
      url: "https://www.linkedin.com/in/badreddine-oussaih-175b5834a/details/certifications/",
    },
  ] satisfies Certification[],
  experience: [
    {
      company: { fr: "ZenithConvert", en: "ZenithConvert" },
      role: {
        fr: "Développeur Full-Stack & Fondateur (SaaS)",
        en: "Full-Stack Developer & Founder (SaaS)",
      },
      period: {
        fr: "Oct. 2025 — Aujourd'hui",
        en: "Oct 2025 — Present",
      },
      description: {
        fr: "Conception, développement et mise en production d'une plateforme SaaS de conversion de données. API REST sécurisée Spring Boot, interface Angular premium, PostgreSQL optimisé, déploiement production avec protection XSS/CSRF/SQL.",
        en: "Designed, built, and deployed a full data conversion SaaS platform. Secure Spring Boot REST API, premium Angular UI, optimized PostgreSQL, production deployment with XSS/CSRF/SQL protection.",
      },
      stack: [
        "Spring Boot",
        "Angular",
        "PostgreSQL",
        "OpenAI API",
        "Vercel",
      ],
    },
    {
      company: { fr: "Comptyx", en: "Comptyx" },
      role: {
        fr: "Développeur Full-Stack & Fondateur (SaaS)",
        en: "Full-Stack Developer & Founder (SaaS)",
      },
      period: {
        fr: "Jan. 2026 — Aujourd'hui",
        en: "Jan 2026 — Present",
      },
      description: {
        fr: "Conception et mise en production d'une workstation comptable SaaS : extraction IA de factures, génération d'écritures équilibrées, 6 plans comptables nationaux et exports ERP (FEC, DATEV, SAF-T, Sage, QuickBooks, Xero).",
        en: "Designed and deployed an accounting SaaS workstation: AI invoice extraction, balanced journal entries, 6 national charts of accounts, and ERP exports (FEC, DATEV, SAF-T, Sage, QuickBooks, Xero).",
      },
      stack: [
        "Spring Boot",
        "Angular",
        "PostgreSQL",
        "OpenAI API",
        "Docker",
        "Vercel",
      ],
    },
    {
      company: { fr: "Serlimpin S.L.", en: "Serlimpin S.L." },
      role: {
        fr: "Développeur Web — Site vitrine & SEO",
        en: "Web Developer — Showcase site & SEO",
      },
      period: {
        fr: "Mars — Avr. 2026",
        en: "Mar — Apr 2026",
      },
      description: {
        fr: "Création d'un site web pour un client espagnol (vaciado de pisos, Barcelone) afin d'augmenter sa visibilité en ligne, avec optimisation SEO et campagne Google Ads.",
        en: "Built a website for a Spanish client (property clearance, Barcelona) to increase online visibility, with SEO optimization and Google Ads campaign.",
      },
      stack: ["HTML/CSS/JS", "SEO", "Google Ads", "Vercel"],
    },
  ] satisfies Experience[],
  skills: [
    {
      id: "languages",
      label: { fr: "Langages", en: "Languages" },
      items: ["Java", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      id: "backend",
      label: { fr: "Backend", en: "Backend" },
      items: [
        "Spring Boot 3",
        "Spring Security",
        "REST APIs",
        "JWT",
        "PostgreSQL",
        "MySQL",
        "Flyway",
        "OpenAPI",
        "OpenAI API",
      ],
    },
    {
      id: "frontend",
      label: { fr: "Frontend", en: "Frontend" },
      items: [
        "Angular 19",
        "Next.js 16",
        "React 19",
        "Tailwind CSS 4",
        "Vite",
      ],
    },
    {
      id: "devops",
      label: { fr: "DevOps & Infra", en: "DevOps & Infra" },
      items: [
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "Vercel",
        "CI/CD",
      ],
    },
    {
      id: "tools",
      label: { fr: "Outils", en: "Tools" },
      items: [
        "Git",
        "Maven",
        "npm",
        "Postman",
        "Google Ads",
        "SEO",
        "Cursor",
      ],
    },
  ] satisfies SkillCategory[],
  knowsAbout: [
    "Full-Stack Development",
    "Spring Boot",
    "Spring Security",
    "Angular",
    "Next.js",
    "SaaS",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "TypeScript",
    "Java",
    "REST APIs",
  ],
} as const;

export function getCvUrl(locale: Locale): string {
  return profile.cvUrl[locale];
}

export const navSections = [
  { id: "hero", label: { fr: "Accueil", en: "Home" } },
  { id: "featured", label: { fr: "Vedette", en: "Featured" } },
  { id: "projects", label: { fr: "Projets", en: "Projects" } },
  { id: "experience", label: { fr: "Expérience", en: "Experience" } },
  { id: "skills", label: { fr: "Compétences", en: "Skills" } },
  { id: "certifications", label: { fr: "Certifications", en: "Certifications" } },
  { id: "about", label: { fr: "À propos", en: "About" } },
  { id: "contact", label: { fr: "Contact", en: "Contact" } },
] as const;
