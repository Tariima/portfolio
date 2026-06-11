import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 px-5 py-8 dark:border-neutral-800/60">
      <div className="mx-auto flex max-w-5xl items-center justify-center text-sm text-neutral-500">
        <span>© 2026 {SITE.name}</span>
      </div>
    </footer>
  );
}
