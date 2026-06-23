import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Four systems, one habit"
          subtitle="Each project starts the same way: take something a person currently judges by eye or by ear, and build a system that can do a first pass — explainably, and fast enough to be useful."
        />

        <div className="mt-16 flex flex-col">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className={`grid md:grid-cols-[1fr_280px] gap-8 md:gap-16 py-10 md:py-12 ${
                i !== 0 ? "border-t border-line" : ""
              }`}
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-moss mb-3">
                  {p.category}
                </p>
                <h3 className="font-display text-[1.7rem] md:text-[2rem] leading-tight text-ink mb-3">
                  {p.name}
                </h3>
                <p className="text-[15.5px] text-ink-soft leading-relaxed max-w-xl">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] text-ink-soft border border-line px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-5">
                  {p.hasDemo && (
                    <a
                      href="#console"
                      className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.06em] text-moss hover:text-moss-deep transition-colors"
                    >
                      Try the live console ↓
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-soft hover:text-ink transition-colors"
                    >
                      View source →
                    </a>
                  )}
                </div>
              </div>

              {/* Metric readout column */}
              <div className="flex flex-col gap-4 md:border-l border-line md:pl-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft/60">
                  Readout
                </span>
                {p.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col">
                    <span className="font-mono text-[1.6rem] text-ink leading-none">
                      {m.value}
                    </span>
                    <span className="font-mono text-[11px] text-ink-soft mt-1">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-moss mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display text-[2rem] md:text-[2.6rem] leading-[1.08] text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[16px] text-ink-soft leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
