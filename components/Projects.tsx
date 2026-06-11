"use client";

import { useApp } from "@/lib/i18n";
import { projects } from "@/content/data";
import Reveal from "./Reveal";
import { LockIcon, ArrowRightIcon } from "./icons";

export default function Projects() {
  const { t, lang } = useApp();
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 border-t border-neutral-200/60 px-5 py-20 dark:border-neutral-800/60">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            {t.projects.title}
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
            {t.projects.subtitle}
          </p>
        </Reveal>

        {/* Featured */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-sky-500/50 dark:border-neutral-800 dark:bg-neutral-900/40">
                <div className={`h-2 bg-gradient-to-r ${p.accent}`} />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{p.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {p.summary[lang]}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {p.highlights.map((h) => (
                      <li key={h.en} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                        <span>{h[lang]}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 pt-2 text-xs font-medium text-neutral-400 dark:text-neutral-500">
                    {p.privateCode ? (
                      <>
                        <LockIcon width={14} height={14} />
                        <span>
                          {t.projects.privateCode} · {t.projects.caseStudy}
                        </span>
                      </>
                    ) : p.repo ? (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sky-500 hover:text-sky-400"
                      >
                        {t.projects.viewCode}
                        <ArrowRightIcon width={14} height={14} />
                      </a>
                    ) : (
                      <span>{t.projects.caseStudy}</span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Other */}
        <Reveal>
          <h3 className="mt-14 text-sm font-semibold uppercase tracking-widest text-neutral-500">
            {t.projects.otherLabel}
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {other.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <article className="flex h-full flex-col rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
                <h4 className="font-semibold">{p.title[lang]}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {p.summary[lang]}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
