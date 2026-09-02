"use client";

import { useApp } from "@/lib/i18n";
import { education } from "@/content/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Education() {
  const { t, lang } = useApp();
  const degrees = education.filter((e) => e.kind === "degree");
  const certs = education.filter((e) => e.kind === "cert");

  return (
    <section id="education" className="scroll-mt-24 px-5 pt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="04" title={t.education.title} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ol className="space-y-8 border-l border-line">
            {degrees.map((d, i) => (
              <Reveal key={d.title.en} delay={i * 60}>
                <li className="relative pl-7">
                  <span className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-accent" : "bg-muted"}`} />
                  <div className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted">{d.period}</div>
                  <h3 className="mt-1 font-display text-xl font-bold tracking-tight">{d.title[lang]}</h3>
                  <div className="text-sm text-muted">{d.org}</div>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-fg/85">{d.detail[lang]}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="space-y-8">
            <Reveal delay={120}>
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{t.education.certsLabel}</h3>
              <ul className="mt-4 space-y-4">
                {certs.map((c) => (
                  <li key={c.title.en} className="rounded-xl border border-line bg-bg2 p-4">
                    <div className="font-medium">{c.title[lang]}</div>
                    <div className="mt-0.5 text-sm text-muted">
                      {c.org} · {c.period}
                    </div>
                    <div className="mt-1 text-sm text-fg/80">{c.detail[lang]}</div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{t.education.langsLabel}</h3>
              <ul className="mt-4 space-y-2 text-[15px]">
                {t.education.languages.map((l) => (
                  <li key={l} className="flex gap-3">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {l}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
