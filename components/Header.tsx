"use client";

import { useApp } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { SunIcon, MoonIcon } from "./icons";

export default function Header() {
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();

  const links = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur-md dark:border-neutral-800/60 dark:bg-neutral-950/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="text-lg font-bold tracking-tight">
          <span className="text-sky-500">{SITE.initials}</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-neutral-600 sm:flex dark:text-neutral-400">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="rounded-md border border-neutral-300 px-2.5 py-1 text-xs font-semibold transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-neutral-700"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md border border-neutral-300 p-1.5 transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-neutral-700"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
