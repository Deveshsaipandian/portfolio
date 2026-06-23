"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "work", label: "Work" },
  { id: "console", label: "Console" },
  { id: "research", label: "Research" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-paper/90 backdrop-blur-sm border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-[13px] tracking-tight text-ink-soft hover:text-ink transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Devesh
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-soft hover:text-ink transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden font-mono text-[12px] uppercase tracking-[0.08em] text-ink-soft hover:text-ink transition-colors"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col px-6 pb-5 gap-4 border-t border-line">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[13px] uppercase tracking-[0.08em] text-ink-soft hover:text-ink transition-colors pt-2"
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
