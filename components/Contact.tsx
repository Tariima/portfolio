"use client";

import { useApp } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon } from "./icons";

export default function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className="scroll-mt-20 border-t border-neutral-200/60 px-5 py-20 dark:border-neutral-800/60">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-600 dark:text-neutral-300">
            {t.contact.text}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-sky-400"
            >
              <MailIcon />
              {t.contact.emailCta}
              <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-2.5 font-medium transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-neutral-700"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-2.5 font-medium transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-neutral-700"
            >
              <GithubIcon />
              GitHub
            </a>
          </div>

          <p className="mt-6 text-sm text-neutral-500">
            <a href={`mailto:${SITE.email}`} className="hover:text-sky-500">
              {SITE.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
