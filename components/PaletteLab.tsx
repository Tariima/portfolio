"use client";

import { useEffect, useState } from "react";
import { palettes } from "@/lib/palettes";
import { useApp } from "@/lib/i18n";

/* Selector temporal de paletas. Se abre con ?lab=1 y se cierra con ?lab=0 o el botón. */
export default function PaletteLab() {
  const { theme } = useApp();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search).get("lab");
      if (q === "1") localStorage.setItem("lab", "1");
      if (q === "0") localStorage.removeItem("lab");
      setOpen(localStorage.getItem("lab") === "1");
      setCurrent(localStorage.getItem("palette") || "");
    } catch {}
  }, []);

  const apply = (id: string) => {
    setCurrent(id);
    try {
      if (id) {
        document.documentElement.dataset.palette = id;
        localStorage.setItem("palette", id);
      } else {
        delete document.documentElement.dataset.palette;
        localStorage.removeItem("palette");
      }
    } catch {}
  };

  const close = () => {
    setOpen(false);
    try {
      localStorage.removeItem("lab");
    } catch {}
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[70] w-60 rounded-2xl border border-line bg-bg2 p-3 shadow-[var(--shadow)]">
      <div className="mb-2 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
        <span>Paletas</span>
        <button onClick={close} className="hover:text-fg" aria-label="Cerrar">
          ✕
        </button>
      </div>
      <ul className="space-y-1">
        {palettes.map((p) => (
          <li key={p.id}>
            <button
              onClick={() => apply(p.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left text-sm transition-colors hover:bg-bg ${
                current === p.id ? "bg-bg ring-1 ring-accent" : ""
              }`}
            >
              <span
                className="h-5 w-5 shrink-0 rounded-full border border-line"
                style={{ background: theme === "dark" ? p.swatchDark : p.swatchLight }}
              />
              <span className="flex-1">
                <span className="block font-medium leading-tight">{p.name}</span>
                <span className="block text-[11px] text-muted">{p.vibe}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-2 font-mono text-[10px] text-muted">Probá también el modo claro/oscuro arriba.</p>
    </div>
  );
}
