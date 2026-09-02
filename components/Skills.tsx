"use client";

import { useApp } from "@/lib/i18n";
import { skills } from "@/content/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Skills() {
  const { t, lang } = useApp();

  return (
    <section id="skills" className="scroll-mt-24 px-5 pt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="03" title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.label.en} delay={(i % 3) * 60} className="h-full">
              <div className="h-full bg-bg p-6">
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{group.label[lang]}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md border border-line bg-bg2 px-2.5 py-1 text-[13px] text-fg/90">
                      {item}
                    </li>
                  ))}
                </ul>
                {group.note && <p className="mt-3 text-xs text-muted">{group.note[lang]}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
