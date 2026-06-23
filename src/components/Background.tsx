import { experience, skills } from "@/data/content";
import { SectionHeading } from "./Projects";

export function Background() {
  return (
    <section id="background" className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Background" title="Internships & technical range" />

        <div className="mt-14 grid md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            {experience.map((e, i) => (
              <div key={e.org} className={`pb-8 ${i !== experience.length - 1 ? "border-b border-line" : ""}`}>
                <h3 className="font-display text-[1.2rem] text-ink">{e.role}</h3>
                <p className="font-mono text-[12px] text-moss mt-1 mb-3">{e.org}</p>
                <ul className="space-y-1.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="text-[14.5px] text-ink-soft leading-relaxed flex gap-2">
                      <span className="text-ochre mt-[7px] w-1 h-1 rounded-full bg-ochre shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-7">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft/70">
                  {group}
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[12px] text-ink border border-line px-2.5 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
