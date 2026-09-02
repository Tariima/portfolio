import Reveal from "./Reveal";

export default function SectionHead({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[12px] tracking-[0.18em] text-accent">{index}</span>
        <h2 className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{title}</h2>
      </div>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </Reveal>
  );
}
