type SectionHeadingProps = {
  number: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SectionHeading({ number, title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className={`text-[10px] font-medium uppercase tracking-[0.38em] ${light ? 'text-white/75' : 'text-accent'}`}>
          {number}
        </p>
        <h2 className={`mt-3 font-serif text-4xl tracking-tight md:text-5xl ${light ? 'text-white' : 'text-ink'}`}>
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className={`max-w-xl text-sm md:text-base ${light ? 'text-white/70' : 'text-muted'}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
