import type { LocalizedString } from "./profile";

export type Project = {
  slug: string;
  featured: boolean;
  featuredOrder?: number;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  outcome?: LocalizedString;
  stack: string[];
  accentColor: string;
  thumbnail?: string;
  images?: string[];
  github?: string;
  demo?: string;
  caseStudy?: {
    problem: LocalizedString;
    role: LocalizedString;
    approach: LocalizedString;
    result: LocalizedString;
  };
};

const zenithImages = [
  "/images/projects/zenithconvert/z.webp",
  "/images/projects/zenithconvert/zz.webp",
  "/images/projects/zenithconvert/zzz.webp",
];

const serlimpinImages = [
  "/images/projects/serlimpin/s.webp",
  "/images/projects/serlimpin/ss.webp",
  "/images/projects/serlimpin/sss.webp",
];

const recommerceImages = [
  "/images/projects/recommerce/screenshot-01.webp",
  "/images/projects/recommerce/screenshot-02.webp",
  "/images/projects/recommerce/screenshot-03.webp",
  "/images/projects/recommerce/screenshot-04.webp",
  "/images/projects/recommerce/screenshot-05.webp",
];

export const projects: Project[] = [
  {
    slug: "zenithconvert",
    featured: true,
    featuredOrder: 1,
    title: { fr: "ZenithConvert", en: "ZenithConvert" },
    tagline: {
      fr: "Convertisseur de code & données propulsé par l'IA",
      en: "AI-powered code & data converter",
    },
    description: {
      fr: "SaaS live de conversion JSON, XML, YAML, CSV et snippets de code — 27 formats, moteur GPT-4, mode invité gratuit.",
      en: "Live SaaS for JSON, XML, YAML, CSV, and code snippet conversion — 27 formats, GPT-4 engine, free guest mode.",
    },
    outcome: {
      fr: "Plateforme SaaS live avec 27 formats, conversions GPT-4 et plans Free/Pro/Enterprise.",
      en: "Live SaaS platform with 27 formats, GPT-4 conversions, and Free/Pro/Enterprise plans.",
    },
    stack: [
      "Spring Boot 3",
      "Spring Security",
      "Angular 19",
      "PostgreSQL",
      "OpenAI API",
      "Vercel",
    ],
    accentColor: "#7C3AED",
    thumbnail: zenithImages[0],
    images: zenithImages,
    demo: "https://www.zenithconvert.com/",
    github: "https://github.com/Badr0h",
    caseStudy: {
      problem: {
        fr: "Les développeurs perdent du temps à convertir manuellement JSON, XML, YAML, CSV et snippets de code entre formats — souvent avec des erreurs et sans historique.",
        en: "Developers waste time manually converting JSON, XML, YAML, CSV, and code snippets between formats — often with errors and no history.",
      },
      role: {
        fr: "Fondateur & développeur full-stack — architecture API REST sécurisée, intégration OpenAI GPT-4, frontend Angular premium dark mode, PostgreSQL et déploiement production.",
        en: "Founder & full-stack developer — secure REST API architecture, OpenAI GPT-4 integration, premium dark-mode Angular frontend, PostgreSQL, and production deployment.",
      },
      approach: {
        fr: "Backend Spring Boot + Spring Security (XSS/CSRF/SQL), cache intelligent, 8 formats gratuits + 27 en bibliothèque, interface glassmorphique, plans tarifaires Free/Pro/Enterprise.",
        en: "Spring Boot + Spring Security backend (XSS/CSRF/SQL), smart caching, 8 free formats + 27 in library, glassmorphic UI, Free/Pro/Enterprise pricing tiers.",
      },
      result: {
        fr: "Application live sur zenithconvert.com — 3 conversions gratuites/jour, historique cloud pour comptes Pro, architecture maintenable en production.",
        en: "Live application at zenithconvert.com — 3 free conversions/day, cloud history for Pro accounts, maintainable production architecture.",
      },
    },
  },
  {
    slug: "serlimpin",
    featured: true,
    featuredOrder: 2,
    title: { fr: "Serlimpin S.L.", en: "Serlimpin S.L." },
    tagline: {
      fr: "Site vitrine SEO — Vaciado de pisos Barcelona",
      en: "SEO showcase site — Property clearance Barcelona",
    },
    description: {
      fr: "Site professionnel live pour entreprise de vaciado de pisos à Barcelone — SEO local, Google Ads, +500 chantiers.",
      en: "Live professional site for Barcelona property clearance company — local SEO, Google Ads, 500+ jobs completed.",
    },
    outcome: {
      fr: "Site client live avec SEO local, Google Ads et visibilité accrue pour un business espagnol.",
      en: "Live client site with local SEO, Google Ads, and increased visibility for a Spanish business.",
    },
    stack: ["HTML", "CSS", "JavaScript", "SEO", "Google Ads", "Vercel"],
    accentColor: "#DC2626",
    thumbnail: serlimpinImages[0],
    images: serlimpinImages,
    demo: "https://www.serlimpinsl.es/",
    caseStudy: {
      problem: {
        fr: "Serlimpin S.L., spécialiste du vaciado de pisos à Barcelone (+15 ans), manquait de présence web professionnelle pour capter des clients locaux.",
        en: "Serlimpin S.L., Barcelona property clearance specialist (15+ years), lacked a professional web presence to capture local clients.",
      },
      role: {
        fr: "Développeur web freelance — design, intégration HTML/CSS/JS, optimisation SEO (sitemap, robots.txt), campagne Google Ads et déploiement.",
        en: "Freelance web developer — design, HTML/CSS/JS integration, SEO optimization (sitemap, robots.txt), Google Ads campaign, and deployment.",
      },
      approach: {
        fr: "Site statique performant, structure sémantique, meta tags optimisés, CTA WhatsApp/téléphone, témoignages clients, galerie de réalisations.",
        en: "High-performance static site, semantic structure, optimized meta tags, WhatsApp/phone CTAs, client testimonials, work gallery.",
      },
      result: {
        fr: "Site live sur serlimpinsl.es — visibilité en ligne accrue, meilleur positionnement Google, business ouvert à plus de clients.",
        en: "Live site at serlimpinsl.es — increased online visibility, better Google ranking, business open to more clients.",
      },
    },
  },
  {
    slug: "recommerce",
    featured: true,
    featuredOrder: 3,
    title: { fr: "Recommerce", en: "Recommerce" },
    tagline: {
      fr: "Plateforme de gestion de commandes",
      en: "Order management platform",
    },
    description: {
      fr: "Application full-stack de gestion de commandes recommerce — Spring Boot sécurisé, Angular 19, diagrammes UML.",
      en: "Full-stack recommerce order management app — secured Spring Boot, Angular 19, UML diagrams.",
    },
    outcome: {
      fr: "Plateforme full-stack sécurisée avec JWT, Flyway et documentation UML complète.",
      en: "Secured full-stack platform with JWT, Flyway, and complete UML documentation.",
    },
    stack: [
      "Spring Boot 3.5",
      "Spring Security",
      "JWT",
      "MySQL",
      "Flyway",
      "Angular 19",
      "OpenAPI",
    ],
    accentColor: "#059669",
    thumbnail: recommerceImages[0],
    images: recommerceImages,
    github: "https://github.com/Badr0h/Recommerce",
    caseStudy: {
      problem: {
        fr: "Besoin d'une plateforme structurée pour gérer les commandes dans un contexte recommerce, avec authentification sécurisée et architecture documentée.",
        en: "Need for a structured platform to manage orders in a recommerce context, with secure authentication and documented architecture.",
      },
      role: {
        fr: "Développeur full-stack — backend Spring Boot 3.5 + Spring Security + JWT, frontend Angular 19, modélisation UML (cas d'utilisation, classes, séquences).",
        en: "Full-stack developer — Spring Boot 3.5 + Spring Security + JWT backend, Angular 19 frontend, UML modeling (use cases, classes, sequences).",
      },
      approach: {
        fr: "Architecture modulaire backend/frontend, migrations Flyway, API documentée OpenAPI, diagrammes UML complets, uploads et validation des données.",
        en: "Modular backend/frontend architecture, Flyway migrations, OpenAPI-documented API, complete UML diagrams, uploads and data validation.",
      },
      result: {
        fr: "Application fonctionnelle avec backend sécurisé, frontend Angular responsive et documentation technique complète sur GitHub.",
        en: "Functional application with secured backend, responsive Angular frontend, and complete technical documentation on GitHub.",
      },
    },
  },
  {
    slug: "jazzablanca",
    featured: true,
    featuredOrder: 4,
    title: { fr: "Jazzablanca 2027", en: "Jazzablanca 2027" },
    tagline: {
      fr: "Dossier stratégique festival — MÉLANGE",
      en: "Festival strategic dossier — MÉLANGE",
    },
    description: {
      fr: "Landing stratégique Seven PM : vision MÉLANGE, KPIs, sponsoring 20,5M MAD, roadmap 18 mois.",
      en: "Seven PM strategic landing: MÉLANGE vision, KPIs, 20.5M MAD sponsorship, 18-month roadmap.",
    },
    outcome: {
      fr: "Dossier stratégique interactif pour repositionner Jazzablanca en festival boutique international.",
      en: "Interactive strategic dossier to reposition Jazzablanca as an international boutique festival.",
    },
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "Recharts"],
    accentColor: "#D4AF37",
    github: "https://github.com/Badr0h/jazzablanca",
    demo: "https://jazzablanca.vercel.app/",
    caseStudy: {
      problem: {
        fr: "L'équipe Seven PM avait besoin d'une vision consolidée pour l'édition 2027 : 5 jours culturels, business model, packages sponsors et campagne Gabriel Moses.",
        en: "The Seven PM team needed a consolidated vision for 2027: 5 cultural days, business model, sponsor packages, and Gabriel Moses campaign.",
      },
      role: {
        fr: "Développeur frontend — architecture Next.js App Router, data centralisée, graphiques Recharts, diagrammes et déploiement Vercel.",
        en: "Frontend developer — Next.js App Router architecture, centralized data, Recharts visualizations, diagrams, and Vercel deployment.",
      },
      approach: {
        fr: "Source de vérité unique lib/data.ts, 12 sections modulaires, visualisations interactives, design dark premium et build statique optimisé.",
        en: "Single source of truth lib/data.ts, 12 modular sections, interactive visualizations, premium dark design, and optimized static build.",
      },
      result: {
        fr: "Landing live sur jazzablanca.vercel.app — référence interne pour pitch sponsors, planification 2027 et repositionnement MÉLANGE.",
        en: "Live landing at jazzablanca.vercel.app — internal reference for sponsor pitches, 2027 planning, and MÉLANGE repositioning.",
      },
    },
  },
  {
    slug: "konta",
    featured: false,
    title: { fr: "Konta", en: "Konta" },
    tagline: {
      fr: "SaaS comptable propulsé par l'IA",
      en: "AI-powered accounting SaaS",
    },
    description: {
      fr: "Workstation intelligente : extraction de documents, réconciliation et reporting automatisés.",
      en: "Smart workstation: document extraction, reconciliation, and automated reporting.",
    },
    stack: [
      "Spring Boot 3.5",
      "Angular 19",
      "PostgreSQL",
      "OpenAI",
      "Docker",
    ],
    accentColor: "#2563EB",
    github: "https://github.com/Badr0h",
  },
  {
    slug: "sesame",
    featured: false,
    title: { fr: "Sesame Refonte", en: "Sesame Refonte" },
    tagline: {
      fr: "Refonte full-stack",
      en: "Full-stack refactor",
    },
    description: {
      fr: "Modernisation application legacy — backend Spring Boot + frontend React/Vite.",
      en: "Legacy app modernization — Spring Boot backend + React/Vite frontend.",
    },
    stack: ["Spring Boot", "React", "Vite", "TypeScript"],
    accentColor: "#6366F1",
    github: "https://github.com/Badr0h",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export function getSecondaryProjects(): Project[] {
  return projects.filter((p) => !p.featured);
}

export function getPrimaryFeaturedProject(): Project {
  return getFeaturedProjects()[0]!;
}

export function getProjectSlugs(): string[] {
  return projects
    .filter((p) => p.featured && p.caseStudy)
    .map((p) => p.slug);
}
