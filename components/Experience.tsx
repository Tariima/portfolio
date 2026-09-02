"use client";

import { useApp } from "@/lib/i18n";
import { experience } from "@/content/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { ArrowUpRightIcon } from "./icons";

export default function Experience() {
  const { t, lang } = useApp();

  return (
    <section id="experience" className="scroll-mt-24 px-5 pt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="01" title={t.experience.title} subtitle={t.experience.subtitle} />

        <ol className="mt-12 space-y-14">
          {experience.map((e, i) => (
            <li key={e.id} className="grid gap-6 lg:grid-cols-[15rem_1fr] lg:gap-12">
              <Reveal delay={i * 60}>
                <div className="lg:sticky lg:top-24">
                  <div className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted">{e.period[lang]}</div>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                    {e.url ? (
                      <a href={e.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                        {e.company}
                        <ArrowUpRightIcon width={16} height={16} className="text-muted" />
                      </a>
                    ) : (
                      e.company
                    )}
                  </h3>
                  <div className="mt-1 text-sm text-muted">{e.location[lang]}</div>
                </div>
              </Reveal>

              <Reveal delay={i * 60 + 80}>
                <div className="border-l border-line pl-6 lg:pl-8">
                  <div className="font-medium text-fg">{e.role[lang]}</div>
                  <p className="mt-3 max-w-3xl leading-relaxed text-muted">{e.summary[lang]}</p>
                  <ul className="mt-5 space-y-3">
                    {e.bullets.map((b) => (
                      <li key={b.en} className="flex gap-3 text-[15px] leading-relaxed">
                        <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{b[lang]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {e.stack.map((s) => (
                      <span key={s} className="rounded-md border border-line bg-bg2 px-2 py-0.5 font-mono text-[11px] text-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
