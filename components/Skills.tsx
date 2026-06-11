"use client";

import { useApp } from "@/lib/i18n";
import { skills } from "@/content/data";
import Reveal from "./Reveal";

export default function Skills() {
  const { t, lang } = useApp();

  return (
    <section id="skills" className="scroll-mt-20 border-t border-neutral-200/60 px-5 py-20 dark:border-neutral-800/60">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            {t.skills.title}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.label.en} delay={i * 70}>
              <div className="h-full rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 dark:border-neutral-800 dark:bg-neutral-900/40">
                <h3 className="font-semibold">{group.label[lang]}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-white px-2.5 py-1 text-sm text-neutral-700 ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:ring-neutral-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
