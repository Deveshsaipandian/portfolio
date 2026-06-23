import { credentials } from "@/data/content";

export function Credentials() {
  return (
    <section className="border-y border-line bg-paper-dim/60">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {credentials.map((c) => (
            <div key={c.title} className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-moss">
                {c.kind}
              </span>
              <h3 className="font-display text-[1.05rem] leading-snug text-ink">
                {c.title}
              </h3>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
