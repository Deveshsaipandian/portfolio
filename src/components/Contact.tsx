import { profile } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32 bg-ink text-paper">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-[#8FA89A] mb-6">
          Get in touch
        </p>
        <h2 className="font-display text-[2.2rem] md:text-[3.4rem] leading-[1.05] max-w-2xl">
          Open to research collaborations, internships, and applied vision-AI roles.
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-[14px] border border-paper/30 px-5 py-3 hover:bg-paper hover:text-ink transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[13px] uppercase tracking-[0.06em] text-paper/70 hover:text-paper transition-colors"
          >
            GitHub →
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[13px] uppercase tracking-[0.06em] text-paper/70 hover:text-paper transition-colors"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper/50 px-6 md:px-10 py-6 border-t border-paper/10">
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-[11px]">{profile.name}</span>
        <span className="font-mono text-[11px]">Built with Next.js · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
