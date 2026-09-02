"use client";

import { useApp } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-line px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-mono text-[11.5px] text-muted sm:flex-row">
        <span>© 2026 {SITE.name}</span>
        <span>{t.footer.built}</span>
        <span>
          {t.footer.updated} {SITE.updated}
        </span>
      </div>
    </footer>
  );
}
