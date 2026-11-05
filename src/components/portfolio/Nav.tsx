import { useEffect, useState, useCallback } from "react";
import { useActiveSection } from "./useReveal";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

interface NavProps {
  onOpenResume?: () => void;
  onOpenCommand?: () => void;
}

export function Nav({ onOpenResume, onOpenCommand }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useActiveSection(
    LINKS.map((l) => l.id),
    useCallback((id: string) => setActive(id), []),
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight group">
          <div className="relative h-7 w-7 overflow-hidden rounded-full border border-primary/50 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <img
              src="/kartik.jpg"
              alt="Kartik Raikar"
              className="h-full w-full object-cover object-[center_48%] scale-110"
            />
          </div>
          <span>Kartik Raikar</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/80 px-2.5 py-1.5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative block rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  active === l.id
                    ? "text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-primary shadow-[0_0_20px_-3px_color-mix(in_oklab,var(--primary)_80%,transparent)]" />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          {/* Spotlight Palette Search Button */}
          <button
            onClick={onOpenCommand}
            aria-label="Open command palette (Ctrl+K)"
            className="hidden items-center gap-1.5 rounded-full border border-border/80 bg-card/70 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-card hover:text-foreground active:scale-95 md:inline-flex cursor-pointer"
          >
            <span className="text-xs">🔍</span>
            <span className="text-[11px]">Search</span>
            <kbd className="rounded border border-border/60 bg-secondary/80 px-1.5 py-0.5 font-mono text-[9px] font-bold text-muted-foreground">
              ⌘K
            </kbd>
          </button>

          {/* In-Browser Resume Modal Trigger - Recruiter Focus */}
          <button
            onClick={onOpenResume}
            className="hidden items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] active:scale-95 cursor-pointer sm:inline-flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
            </svg>
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="group relative hidden overflow-hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_25px_-5px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_-3px_color-mix(in_oklab,var(--primary)_90%,transparent)] active:scale-95 sm:inline-block"
          >
            {/* Shimmer sheen */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span>Hire Me</span>
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-card/70 backdrop-blur-xl md:hidden"
          >
            <span
              className={`h-px w-5 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 md:hidden ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 mt-3 space-y-2 rounded-2xl border border-border bg-card p-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-border/50">
            <button
              onClick={() => {
                setOpen(false);
                onOpenCommand?.();
              }}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-secondary/60 py-2 text-xs font-semibold text-foreground"
            >
              <span>🔍</span>
              <span>Search (⌘K)</span>
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onOpenResume?.();
              }}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-primary py-2 text-xs font-semibold text-primary-foreground glow-red"
            >
              <span>📄</span>
              <span>View Resume</span>
            </button>
          </div>

          <ul className="space-y-1">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
