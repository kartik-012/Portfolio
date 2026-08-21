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

export function Nav() {
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

        <ul className="hidden items-center gap-1 rounded-full border border-border bg-card/50 px-2 py-1.5 backdrop-blur-md md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                  active === l.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-primary glow-red" />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/Kartik_Raikar_Resume.pdf"
            download="Kartik_Raikar_Resume.pdf"
            className="hidden items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:text-primary sm:inline-flex"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105 glow-red sm:inline-block"
          >
            Hire Me
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border md:hidden"
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
        <ul className="mx-5 mt-3 space-y-1 rounded-2xl border border-border bg-card p-3">
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
    </header>
  );
}
