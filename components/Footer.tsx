"use client";

import { useApp } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-neutral-200/60 px-5 py-8 dark:border-neutral-800/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-neutral-500 sm:flex-row">
        <span>
          © 2026 {SITE.name}
        </span>
        <span>{t.footer.madeWith}</span>
      </div>
    </footer>
  );
}
