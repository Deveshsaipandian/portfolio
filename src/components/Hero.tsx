import { profile } from "@/data/content";
import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-44 pb-20 md:pb-28 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
          <div>
            <h1 className="font-display text-[2.6rem] leading-[1.05] md:text-[4.2rem] md:leading-[1.02] tracking-tight text-ink max-w-3xl">
              I teach machines to look at{" "}
              <em className="italic text-moss-deep">floods</em>,{" "}
              <em className="italic text-ochre">gemstones</em>, and{" "}
              <em className="italic">reviews</em> — and say something useful about what they see.
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              {profile.tagline} Final-year AI/ML researcher at {profile.institution}, working
              across vision-language models, applied computer vision, and decision-support
              systems — with published research to show the work holds up outside a notebook.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#console"
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 font-mono text-[13px] uppercase tracking-[0.06em] hover:bg-moss-deep transition-colors"
              >
                Run the live demo →
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 font-mono text-[13px] uppercase tracking-[0.06em] text-ink-soft hover:text-ink border border-line hover:border-ink transition-colors"
              >
                See the work
              </a>
            </div>
          </div>

          {/* Photo + Instrument-panel readout card */}
          <div className="hidden md:flex flex-col gap-6 items-center">
            <div className="relative w-40 h-52 overflow-hidden rounded-sm border border-line shadow-md">
              <Image
                src="/devesh-photo.jpg"
                alt={profile.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col gap-3 font-mono text-[12px] text-ink-soft border-l border-line pl-8 pb-1 min-w-[180px]">
              <ReadoutRow label="status" value="active research" dot="moss" />
              <ReadoutRow label="papers" value="1st author" />
              <ReadoutRow label="domain" value="vision · language" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadoutRow({
  label,
  value,
  dot,
}: {
  label: string;
  value: string;
  dot?: "moss" | "alert";
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-ink-soft/70">{label}</span>
      <span className="flex items-center gap-2 text-ink">
        {dot && (
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full ${
              dot === "moss" ? "bg-moss" : "bg-alert"
            }`}
          />
        )}
        {value}
      </span>
    </div>
  );
}
