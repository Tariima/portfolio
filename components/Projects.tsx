"use client";

import { useApp } from "@/lib/i18n";
import { projects, type Project, type Status } from "@/content/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { ArrowUpRightIcon, LockIcon } from "./icons";

const statusDot: Record<Status, string> = {
  prod: "bg-ok",
  pilot: "bg-accent",
  dev: "bg-terra",
  done: "bg-muted",
};

function StatusBadge({ status }: { status: Status }) {
  const { t } = useApp();
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em]">
      <span className={`h-1.5 w-1.5 rounded-full ${statusDot[status]} ${status === "prod" ? "animate-pulse" : ""}`} />
      {t.projects.status[status]}
    </span>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span key={s} className="rounded-md border border-line bg-bg2 px-2 py-0.5 font-mono text-[11px] text-muted">
          {s}
        </span>
      ))}
    </div>
  );
}

function Links({ p }: { p: Project }) {
  const { t } = useApp();
  return (
    <div className="flex items-center gap-4 font-mono text-[11.5px] uppercase tracking-[0.12em]">
      {p.link && (
        <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
          {t.projects.visit}
          <ArrowUpRightIcon width={14} height={14} />
        </a>
      )}
      {p.repo ? (
        <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
          {t.projects.viewCode}
          <ArrowUpRightIcon width={14} height={14} />
        </a>
      ) : (
        <span className="inline-flex items-center gap-1 text-muted">
          <LockIcon width={13} height={13} />
          {t.projects.privateCode}
        </span>
      )}
    </div>
  );
}

function FeaturedCard({ p, hero }: { p: Project; hero?: boolean }) {
  const { t, lang } = useApp();
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg2 transition-colors hover:border-accent/60 ${
        hero ? "lg:grid lg:grid-cols-[1.4fr_1fr]" : ""
      }`}
    >
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={p.status} />
          <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] text-accent">
            {t.projects.context[p.context]}
          </span>
          <span className="ml-auto font-mono text-[11px] text-muted">{p.period}</span>
        </div>

        <h3 className={`mt-5 font-display font-bold tracking-tight ${hero ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
          {p.title[lang]}
        </h3>
        <p className="mt-2 font-mono text-[11.5px] uppercase tracking-[0.12em] text-accent">
          {t.projects.roleLabel}: <span className="text-fg/80 normal-case tracking-normal">{p.role[lang]}</span>
        </p>

        <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{t.projects.problemLabel}</dt>
            <dd className="mt-1 text-fg/85">{p.problem[lang]}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{t.projects.builtLabel}</dt>
            <dd className="mt-1">
              <ul className="space-y-2">
                {p.built.map((b) => (
                  <li key={b.en} className="flex gap-3">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{b[lang]}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="mt-auto space-y-4 pt-6">
          <Stack items={p.stack} />
          <Links p={p} />
        </div>
      </div>

      {p.metrics && (
        <div className={`border-t border-line bg-bg/40 ${hero ? "lg:flex lg:items-center lg:border-l lg:border-t-0" : ""}`}>
          <div
            className={`grid w-full ${
              hero ? "grid-cols-2" : p.metrics.length === 3 ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-4"
            }`}
          >
            {p.metrics.map((m, i) => (
              <div
                key={i}
                className={`border-line p-5 ${
                  hero
                    ? "[&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b"
                    : p.metrics!.length === 3
                      ? "[&:not(:last-child)]:border-r"
                      : "[&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b sm:[&:not(:last-child)]:border-r sm:[&:nth-child(-n+2)]:border-b-0"
                }`}
              >
                <div className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{m.value}</div>
                <div className="mt-1 font-mono text-[11px] leading-snug text-muted">{m.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function CompactCard({ p }: { p: Project }) {
  const { t, lang } = useApp();
  return (
    <article className="flex h-full flex-col rounded-xl border border-line p-5 transition-colors hover:border-accent/60">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={p.status} />
        <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent">{t.projects.context[p.context]}</span>
        <span className="ml-auto font-mono text-[11px] text-muted">{p.period}</span>
      </div>
      <h4 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight">{p.title[lang]}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{p.problem[lang]}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed">{p.built[0][lang]}</p>
      <div className="mt-4 font-mono text-[11px] text-accent">{p.role[lang]}</div>
      <div className="mt-3">
        <Stack items={p.stack} />
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useApp();
  const hero = projects.find((p) => p.hero);
  const featured = projects.filter((p) => p.featured && !p.hero);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 px-5 pt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="02" title={t.projects.title} subtitle={t.projects.subtitle} />

        {hero && (
          <Reveal className="mt-12">
            <FeaturedCard p={hero} hero />
          </Reveal>
        )}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 80} className="h-full">
              <FeaturedCard p={p} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">{t.projects.otherLabel}</h3>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {other.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 70} className="h-full">
              <CompactCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
