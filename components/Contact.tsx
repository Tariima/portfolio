"use client";

import { useApp } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon, DownloadIcon } from "./icons";

export default function Contact() {
  const { t, lang } = useApp();

  return (
    <section id="contact" className="scroll-mt-24 px-5 pt-24 pb-16">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="05" title={t.contact.title} />

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-bg2 p-8 sm:p-12">
            <h3 className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-6xl">
              {t.contact.headline}
              <span className="text-accent">_</span>
            </h3>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t.contact.text}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-accent-ink transition hover:brightness-110"
              >
                <MailIcon />
                {t.contact.emailCta}
                <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={SITE.cv[lang]}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-medium transition hover:border-accent hover:text-accent"
              >
                <DownloadIcon />
                {t.contact.cvCta}
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-medium transition hover:border-accent hover:text-accent"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-medium transition hover:border-accent hover:text-accent"
              >
                <GithubIcon />
                GitHub
              </a>
            </div>

            <p className="mt-8 font-mono text-[12px] text-muted">
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                {SITE.email}
              </a>
              <span className="mx-2">·</span>
              {SITE.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
