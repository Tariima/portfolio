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
    nav: {
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Stack",
      education: "Formación",
      contact: "Contacto",
      cv: "CV",
    },
    hero: {
      eyebrow: "Desarrollador full-stack · Rosario, Argentina",
      h1a: "Llevo software",
      h1b: "a producción.",
      tagline:
        "Construyo plataformas web, apps móviles y agentes de IA que hoy operan negocios reales: ERPs a medida, discadores de voz, bots de WhatsApp integrados a Odoo y sistemas de venta con pagos online. De la base de datos al deploy.",
      ctaProjects: "Ver proyectos",
      ctaCv: "Descargar CV",
      shipLogTitle: "ship-log — últimos pases a producción",
      shipLogFoot: "y más abajo, el detalle de cada uno",
      photoAlt: "Foto de Matías Sione",
    },
    metrics: { title: "En números" },
    now: { title: "Ahora mismo", live: "en curso" },
    experience: {
      title: "Experiencia",
      subtitle: "Dos equipos, clientes reales y productos propios.",
      present: "actualidad",
    },
    projects: {
      title: "Proyectos",
      subtitle:
        "Cada tarjeta es un sistema que existe y se usa. Los de clientes están anonimizados; los propios y los de Krownsoft, con nombre.",
      featuredLabel: "Destacados",
      otherLabel: "Más trabajo",
      roleLabel: "Mi rol",
      problemLabel: "El problema",
      builtLabel: "Lo que construí",
      stackLabel: "Stack",
      visit: "Ver en vivo",
      viewCode: "Ver código",
      privateCode: "Código privado",
      status: {
        prod: "En producción",
        pilot: "Listo para lanzar",
        dev: "En desarrollo",
        done: "Finalizado",
      },
      context: {
        solvant: "Solvant",
        krownsoft: "Krownsoft",
        freelance: "Freelance",
        personal: "Producto propio",
        academic: "Académico",
      },
    },
    skills: {
      title: "Stack",
      subtitle:
        "Lo que uso todos los días para construir y operar sistemas en producción.",
    },
    education: {
      title: "Formación",
      certsLabel: "Cursos y certificaciones",
      langsLabel: "Idiomas",
      languages: ["Español — nativo", "Inglés — B2 (técnico, lectura y escritura fluida)"],
    },
    contact: {
      title: "Contacto",
      headline: "¿Construimos algo?",
      text: "Si necesitás alguien que tome un problema de negocio y lo convierta en software funcionando, escribime. Respondo en el día.",
      emailCta: "Enviar email",
      cvCta: "Descargar CV",
    },
    footer: {
      built: "Next.js 15 · Tailwind CSS 4 · Vercel",
      updated: "Actualizado",
    },
  },
  en: {
    nav: {
      experience: "Experience",
      projects: "Projects",
      skills: "Stack",
      education: "Education",
      contact: "Contact",
      cv: "Resume",
    },
    hero: {
      eyebrow: "Full-stack developer · Rosario, Argentina",
      h1a: "I ship software",
      h1b: "to production.",
      tagline:
        "I build web platforms, mobile apps and AI agents that run real businesses today: custom ERPs, AI voice dialers, WhatsApp bots wired into Odoo, and ticketing systems with online payments. From the database to the deploy.",
      ctaProjects: "View projects",
      ctaCv: "Download resume",
      shipLogTitle: "ship-log — latest production releases",
      shipLogFoot: "details on each one below",
      photoAlt: "Photo of Matías Sione",
    },
    metrics: { title: "By the numbers" },
    now: { title: "Right now", live: "ongoing" },
    experience: {
      title: "Experience",
      subtitle: "Two teams, real clients and products of my own.",
      present: "present",
    },
    projects: {
      title: "Projects",
      subtitle:
        "Every card is a system that exists and is used. Client work is anonymized; my own products and Krownsoft's are named.",
      featuredLabel: "Featured",
      otherLabel: "More work",
      roleLabel: "My role",
      problemLabel: "The problem",
      builtLabel: "What I built",
      stackLabel: "Stack",
      visit: "Visit",
      viewCode: "View code",
      privateCode: "Private code",
      status: {
        prod: "In production",
        pilot: "Launch-ready",
        dev: "In development",
        done: "Completed",
      },
      context: {
        solvant: "Solvant",
        krownsoft: "Krownsoft",
        freelance: "Freelance",
        personal: "Own product",
        academic: "Academic",
      },
    },
    skills: {
      title: "Stack",
      subtitle: "What I use every day to build and run systems in production.",
    },
    education: {
      title: "Education",
      certsLabel: "Courses & certifications",
      langsLabel: "Languages",
      languages: ["Spanish — native", "English — B2 (technical, fluent reading and writing)"],
    },
    contact: {
      title: "Contact",
      headline: "Let's build something.",
      text: "If you need someone who takes a business problem and turns it into working software, write to me. I reply the same day.",
      emailCta: "Send email",
      cvCta: "Download resume",
    },
    footer: {
      built: "Next.js 15 · Tailwind CSS 4 · Vercel",
      updated: "Updated",
    },
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
    try {
      const sl = localStorage.getItem("lang");
      if (sl === "es" || sl === "en") setLangState(sl);
      else if (navigator.language && !navigator.language.toLowerCase().startsWith("es")) setLangState("en");
      const st = localStorage.getItem("theme");
      if (st === "light" || st === "dark") setThemeState(st);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
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
