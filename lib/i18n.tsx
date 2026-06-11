"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";
export type Theme = "light" | "dark";
export type Localized = { es: string; en: string };

export function pick(value: Localized, lang: Lang): string {
  return value[lang];
}

export const dict = {
  es: {
    nav: { about: "Sobre mí", skills: "Skills", projects: "Proyectos", contact: "Contacto" },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador full-stack — Next.js · TypeScript · Python",
      tagline:
        "Construyo aplicaciones web reales: integraciones de pago, plataformas multi-tenant y herramientas de automatización. Del diseño de la base de datos al frontend y el deploy.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contacto",
    },
    about: {
      title: "Sobre mí",
      p1: "Soy estudiante de la Tecnicatura Universitaria en Programación y desarrollo software full-stack con foco en la web moderna. Trabajé en plataformas SaaS multi-tenant, sistemas de venta con integración de pagos y herramientas de automatización.",
      p2: "Me interesa el código que resuelve problemas reales: seguridad, performance y experiencias claras. Disfruto llevar un proyecto de punta a punta — modelar la base de datos, construir la API, pulir el frontend y dejarlo corriendo en producción.",
    },
    skills: { title: "Stack & Skills" },
    projects: {
      title: "Proyectos",
      subtitle: "Una selección de lo que construí — de la base de datos al deploy.",
      featuredLabel: "Destacados",
      otherLabel: "Otros proyectos y fundamentos",
      caseStudy: "Caso de estudio",
      privateCode: "Código privado",
      viewCode: "Ver código",
      stackLabel: "Stack",
    },
    contact: {
      title: "Contacto",
      text: "¿Tenés un proyecto en mente o una oportunidad? Escribime.",
      emailCta: "Enviar email",
    },
    footer: { madeWith: "Hecho con Next.js y Tailwind CSS" },
  },
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      role: "Full-stack developer — Next.js · TypeScript · Python",
      tagline:
        "I build real web apps: payment integrations, multi-tenant platforms and automation tools. From database design to the frontend and the deploy.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
    },
    about: {
      title: "About me",
      p1: "I'm a Computer Programming student building full-stack software with a focus on the modern web. I've worked on multi-tenant SaaS platforms, sales systems with payment integration, and automation tools.",
      p2: "I care about code that solves real problems: security, performance and clear experiences. I enjoy taking a project end to end — modeling the database, building the API, polishing the frontend and shipping it to production.",
    },
    skills: { title: "Stack & Skills" },
    projects: {
      title: "Projects",
      subtitle: "A selection of what I've built — from the database to the deploy.",
      featuredLabel: "Featured",
      otherLabel: "Other projects & fundamentals",
      caseStudy: "Case study",
      privateCode: "Private code",
      viewCode: "View code",
      stackLabel: "Stack",
    },
    contact: {
      title: "Contact",
      text: "Got a project in mind or an opportunity? Reach out.",
      emailCta: "Send email",
    },
    footer: { madeWith: "Built with Next.js and Tailwind CSS" },
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (typeof dict)["es"];
};

const AppCtx = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const sl = localStorage.getItem("lang");
    if (sl === "es" || sl === "en") setLangState(sl);
    const st = localStorage.getItem("theme");
    if (st === "light" || st === "dark") setThemeState(st);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang: setLangState,
    toggleLang: () => setLangState((p) => (p === "es" ? "en" : "es")),
    theme,
    toggleTheme: () => setThemeState((p) => (p === "dark" ? "light" : "dark")),
    t: dict[lang],
  };

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const c = useContext(AppCtx);
  if (!c) throw new Error("useApp must be used within AppProvider");
  return c;
}
