"use client";

import { useApp } from "@/lib/i18n";
import { now } from "@/content/data";
import Reveal from "./Reveal";

export default function Now() {
  const { t, lang } = useApp();

  return (
    <section aria-label={t.now.title} className="px-5 pt-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            {t.now.title} · {t.now.live}
          </div>
        </Reveal>
        <ul className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {now.map((n, i) => (
            <Reveal key={n.tag} delay={i * 60} className="h-full">
              <li className="flex h-full flex-col gap-2 bg-bg p-5">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{n.tag}</span>
                <span className="text-sm leading-relaxed text-fg/90">{n.text[lang]}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
