"use client";

import Image from "next/image";
import { useApp } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import ShipLog from "./ShipLog";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon, DownloadIcon } from "./icons";

export default function Hero() {
  const { t, lang } = useApp();

  return (
    <section id="top" className="hero-bg relative overflow-hidden px-5 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Left: statement */}
        <div>
          <p className="rise font-mono text-[12px] uppercase tracking-[0.18em] text-muted" style={{ animationDelay: "40ms" }}>
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-ok align-middle" />
            {t.hero.eyebrow}
          </p>

          <h1 className="rise mt-6 font-display text-[2.9rem] font-bold leading-[0.98] tracking-[-0.03em] sm:text-7xl" style={{ animationDelay: "120ms" }}>
            {t.hero.h1a}
            <br />
            <span className="text-accent">{t.hero.h1b}</span>
          </h1>

          <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: "220ms" }}>
            {t.hero.tagline}
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "320ms" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 font-medium text-bg transition hover:bg-accent hover:text-accent-ink"
            >
              {t.hero.ctaProjects}
              <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={SITE.cv[lang]}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-medium transition hover:border-accent hover:text-accent"
            >
              <DownloadIcon />
              {t.hero.ctaCv}
            </a>
          </div>

          <div className="rise mt-10 flex items-center gap-5 text-muted" style={{ animationDelay: "420ms" }}>
            <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
              <GithubIcon width={22} height={22} />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
              <LinkedinIcon width={22} height={22} />
            </a>
            <a href={`mailto:${SITE.email}`} aria-label="Email" className="transition-colors hover:text-accent">
              <MailIcon width={22} height={22} />
            </a>
            <span className="font-mono text-[12px] text-muted">{SITE.email}</span>
          </div>
        </div>

        {/* Right: photo + ship log */}
        <div className="rise relative lg:pt-40" style={{ animationDelay: "260ms" }}>
          <div className="absolute -top-2 right-6 z-10 hidden w-36 rotate-3 overflow-hidden rounded-2xl border border-line bg-terra shadow-xl transition-transform duration-500 hover:rotate-0 lg:block">
            <Image src="/foto.webp" alt={t.hero.photoAlt} width={320} height={400} priority className="block h-auto w-full" />
          </div>
          <div className="absolute left-0 top-10 hidden max-w-[16rem] font-mono text-[11.5px] leading-relaxed text-muted lg:block">
            <span className="text-accent">//</span> {SITE.location}
            <br />
            <span className="text-accent">//</span> GitHub @{SITE.githubUser}
            <br />
            <span className="text-accent">//</span> Solvant · Krownsoft · Nocta
          </div>
          <div className="mb-5 flex items-center gap-4 lg:hidden">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line bg-terra">
              <Image src="/foto-sm.webp" alt={t.hero.photoAlt} width={160} height={200} priority className="block h-full w-full object-cover object-top" />
            </div>
            <div className="font-mono text-[12px] text-muted">
              {SITE.location} · GitHub @{SITE.githubUser}
            </div>
          </div>
          <ShipLog />
        </div>
      </div>
    </section>
  );
}
