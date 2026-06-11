"use client";

import { useApp } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon } from "./icons";

export default function Hero() {
  const { t } = useApp();

  return (
    <section id="top" className="relative overflow-hidden px-5 pt-36 pb-24">
      {/* decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-medium text-sky-500">{t.hero.greeting}</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{SITE.name}</h1>
        <h2 className="mt-4 text-xl font-medium text-neutral-600 sm:text-2xl dark:text-neutral-300">
          {t.hero.role}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.hero.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-sky-400"
          >
            {t.hero.ctaProjects}
            <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-neutral-300 px-5 py-2.5 font-medium transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-neutral-700"
          >
            {t.hero.ctaContact}
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 text-neutral-500 dark:text-neutral-400">
          <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-sky-500">
            <GithubIcon width={22} height={22} />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-sky-500">
            <LinkedinIcon width={22} height={22} />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="Email" className="transition-colors hover:text-sky-500">
            <MailIcon width={22} height={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
