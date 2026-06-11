"use client";

import { useApp } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="scroll-mt-20 border-t border-neutral-200/60 px-5 py-20 dark:border-neutral-800/60">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            {t.about.title}
          </h2>
        </Reveal>
        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          <Reveal delay={80}>
            <p>{t.about.p1}</p>
          </Reveal>
          <Reveal delay={160}>
            <p>{t.about.p2}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
