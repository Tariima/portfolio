"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { SunIcon, MoonIcon, DownloadIcon } from "./icons";

export default function Header() {
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { id: "experience", n: "01", label: t.nav.experience },
    { id: "projects", n: "02", label: t.nav.projects },
    { id: "skills", n: "03", label: t.nav.skills },
    { id: "education", n: "04", label: t.nav.education },
    { id: "contact", n: "05", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-bg/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {SITE.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted lg:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="transition-colors hover:text-fg">
              <span className="text-accent">{l.n}</span>&nbsp;{l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.cv[lang]}
            download
            className="hidden items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-ink transition hover:brightness-110 sm:inline-flex"
          >
            <DownloadIcon width={14} height={14} />
            {t.nav.cv}
          </a>
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider transition-colors hover:border-accent hover:text-accent"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-line p-1.5 transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? <SunIcon width={15} height={15} /> : <MoonIcon width={15} height={15} />}
          </button>
        </div>
      </div>
    </header>
  );
}
