"use client";

import { useApp } from "@/lib/i18n";
import { shipLog } from "@/content/data";

export default function ShipLog() {
  const { t, lang } = useApp();

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-bg2 shadow-[var(--shadow)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-terra/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-ok/80" />
        <span className="ml-2 truncate font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {t.hero.shipLogTitle}
        </span>
      </div>
      <ol className="divide-y divide-line font-mono text-[12.5px] leading-snug">
        {shipLog.map((e, i) => (
          <li key={i} className="grid grid-cols-[5.2rem_auto_1fr] items-start gap-x-3 px-4 py-2.5">
            <span className="text-muted">{e.date}</span>
            <span
              className={`mt-[1px] rounded px-1.5 py-[1px] text-[10px] font-semibold uppercase tracking-wider ${
                e.env === "prod" ? "bg-ok/15 text-ok" : "bg-accent/15 text-accent"
              }`}
            >
              {e.env}
            </span>
            <span className="text-fg">{e.text[lang]}</span>
          </li>
        ))}
      </ol>
      <div className="border-t border-line px-4 py-2 font-mono text-[11px] text-muted">
        <span className="text-accent">$</span> {t.hero.shipLogFoot} <span className="cursor-blink">▍</span>
      </div>
    </div>
  );
}
