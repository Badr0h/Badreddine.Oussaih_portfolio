type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  id?: string;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  id,
}: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-24">
      {label && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {label}
        </p>
      )}
      <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
    </div>
  );
}
