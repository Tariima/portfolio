import type { Localized } from "@/lib/i18n";

export type SkillGroup = {
  label: Localized;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    label: { es: "Backend", en: "Backend" },
    items: ["Node.js", "Python", "FastAPI", "tRPC", "REST APIs"],
  },
  {
    label: { es: "Datos", en: "Data" },
    items: ["PostgreSQL", "Supabase", "SQL", "MySQL"],
  },
  {
    label: { es: "DevOps & Tools", en: "DevOps & Tools" },
    items: ["Git", "Vercel", "Docker", "Vitest"],
  },
  {
    label: { es: "Conceptos", en: "Concepts" },
    items: [
      "Auth / JWT",
      "Row-Level Security",
      "Webhooks",
      "Integración de pagos",
      "CI / CD",
    ],
  },
];

export type Project = {
  id: string;
  title: Localized;
  summary: Localized;
  highlights: Localized[];
  stack: string[];
  accent: string; // tailwind gradient classes
  privateCode?: boolean;
  repo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "ticketing",
    featured: true,
    accent: "from-sky-500 to-indigo-600",
    title: {
      es: "Plataforma de venta de entradas y control de acceso",
      en: "Event ticketing & access control platform",
    },
    summary: {
      es: "Sistema multi-tenant para vender entradas a eventos con pago online y validación de acceso en puerta, incluso sin conexión.",
      en: "Multi-tenant system to sell event tickets with online payment and at-the-door access validation, even offline.",
    },
    highlights: [
      {
        es: "QR firmados con HMAC para entradas imposibles de falsificar.",
        en: "HMAC-signed QR codes for tamper-proof tickets.",
      },
      {
        es: "PWA offline: escaneo y validación en puerta sin internet, con sincronización posterior.",
        en: "Offline PWA: scan and validate at the door with no internet, syncing afterwards.",
      },
      {
        es: "Webhooks de pago idempotentes con manejo de cupos atómico.",
        en: "Idempotent payment webhooks with atomic quota handling.",
      },
      {
        es: "Tests sobre la firma de QR y el flujo de pago.",
        en: "Tests covering QR signing and the payment flow.",
      },
    ],
    stack: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Mercado Pago", "PWA", "Vitest", "Vercel"],
    privateCode: true,
  },
  {
    id: "saas-reporting",
    featured: true,
    accent: "from-emerald-500 to-teal-600",
    title: {
      es: "Plataforma SaaS de reporting multi-tenant",
      en: "Multi-tenant SaaS reporting platform",
    },
    summary: {
      es: "Panel de reporting para una plataforma de IA de voz, con aislamiento total entre clientes y sincronización de datos contra una API externa.",
      en: "Reporting dashboard for a voice-AI platform, with full tenant isolation and data sync against an external API.",
    },
    highlights: [
      {
        es: "Row-Level Security por workspace para aislar los datos de cada cliente.",
        en: "Per-workspace Row-Level Security isolating each client's data.",
      },
      {
        es: "Cifrado AES-256 de credenciales sensibles en la base de datos.",
        en: "AES-256 encryption of sensitive credentials at rest.",
      },
      {
        es: "Motor de sincronización idempotente (agentes, números, llamadas).",
        en: "Idempotent sync engine (agents, numbers, calls).",
      },
      {
        es: "Control de acceso por roles (administrador / cliente).",
        en: "Role-based access control (admin / client).",
      },
    ],
    stack: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Tailwind CSS"],
    privateCode: true,
  },
  {
    id: "marketing-ops",
    featured: true,
    accent: "from-fuchsia-500 to-purple-600",
    title: {
      es: "Frontend de plataforma de operaciones de marketing",
      en: "Marketing operations platform — frontend",
    },
    summary: {
      es: "Frontend de una plataforma enterprise multi-workspace para gestionar contenido, campañas y aprobaciones de múltiples cuentas.",
      en: "Frontend of a multi-workspace enterprise platform to manage content, campaigns and approvals across many accounts.",
    },
    highlights: [
      {
        es: "Design system con brand tokens que re-tematizan el portal por cliente.",
        en: "Design system with brand tokens that re-theme the portal per client.",
      },
      {
        es: "Previews pixel-perfect de publicaciones (Instagram, TikTok, Facebook, YouTube).",
        en: "Pixel-perfect post previews (Instagram, TikTok, Facebook, YouTube).",
      },
      {
        es: "Portal de aprobación con UX mobile: gestos swipe y comentarios con @menciones.",
        en: "Approval portal with mobile UX: swipe gestures and @mention comments.",
      },
      {
        es: "Multi-workspace con paleta de comandos (⌘K) y manejo de estado complejo.",
        en: "Multi-workspace with command palette (⌘K) and complex state management.",
      },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Recharts", "@dnd-kit"],
    privateCode: true,
  },
  {
    id: "nlp-tool",
    featured: true,
    accent: "from-amber-500 to-orange-600",
    title: {
      es: "Herramienta de recomendación con NLP",
      en: "NLP-based recommendation tool",
    },
    summary: {
      es: "Herramienta propia que recomienda opciones analizando texto con embeddings y similitud semántica.",
      en: "A personal tool that recommends options by analyzing text with embeddings and semantic similarity.",
    },
    highlights: [
      {
        es: "Embeddings con sentence-transformers y ranking por similitud coseno.",
        en: "Embeddings with sentence-transformers and cosine-similarity ranking.",
      },
      {
        es: "Scraper con Selenium para alimentar y actualizar los datos.",
        en: "Selenium scraper to feed and refresh the data.",
      },
      {
        es: "Interfaz de escritorio en Python (Tkinter).",
        en: "Python desktop interface (Tkinter).",
      },
    ],
    stack: ["Python", "sentence-transformers", "Selenium", "Pandas", "Tkinter"],
    privateCode: true,
  },
  {
    id: "fleet",
    featured: false,
    accent: "from-neutral-500 to-neutral-700",
    title: {
      es: "Sistema de gestión de flota",
      en: "Fleet management system",
    },
    summary: {
      es: "Aplicación de consola en Python (POO, ~1.800 líneas) para gestionar vehículos, conductores, mantenimientos y asignaciones.",
      en: "Python console app (OOP, ~1,800 lines) to manage vehicles, drivers, maintenance and assignments.",
    },
    highlights: [],
    stack: ["Python", "OOP"],
  },
  {
    id: "python-projects",
    featured: false,
    accent: "from-neutral-500 to-neutral-700",
    title: {
      es: "Colección de proyectos en Python",
      en: "Python projects collection",
    },
    summary: {
      es: "Un clon de Space Invaders (Pygame), web scraping, un asistente de voz, gestores con archivos y más.",
      en: "A Space Invaders clone (Pygame), web scraping, a voice assistant, file-based managers and more.",
    },
    highlights: [],
    stack: ["Python", "Pygame", "Tkinter"],
  },
  {
    id: "deep-learning",
    featured: false,
    accent: "from-neutral-500 to-neutral-700",
    title: {
      es: "Deep Learning con TensorFlow",
      en: "Deep Learning with TensorFlow",
    },
    summary: {
      es: "Formación en redes neuronales convolucionales (CNN) y procesamiento de lenguaje natural con TensorFlow.",
      en: "Training in convolutional neural networks (CNNs) and natural language processing with TensorFlow.",
    },
    highlights: [],
    stack: ["TensorFlow", "Python", "Deep Learning"],
  },
];
