"use client";

import { useEffect, useRef, useState } from "react";
import { useApp } from "@/lib/i18n";
import { metrics, type Metric } from "@/content/data";

function useCountUp(target: number, run: boolean, duration = 1100) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return v;
}

function Tile({ m, run, lang }: { m: Metric; run: boolean; lang: "es" | "en" }) {
  const v = useCountUp(m.value, run);
  const formatted = new Intl.NumberFormat(lang === "es" ? "es-AR" : "en-US").format(v);
  return (
    <div className="border-line px-5 py-6 sm:px-7 sm:py-8 [&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-b-0 sm:[&:not(:last-child)]:border-r">
      <div className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {m.prefix}
        {formatted}
        {m.suffix && <span className="text-muted">{m.suffix}</span>}
      </div>
      <p className="mt-2 max-w-[16rem] font-mono text-[11.5px] leading-relaxed text-muted">{m.label[lang]}</p>
    </div>
  );
}

export default function Metrics() {
  const { lang } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          ob.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <section aria-label="metrics" className="px-5">
      <div ref={ref} className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-line bg-bg2 sm:grid-cols-4">
        {metrics.map((m, i) => (
          <Tile key={i} m={m} run={run} lang={lang} />
        ))}
      </div>
    </section>
  );
}
