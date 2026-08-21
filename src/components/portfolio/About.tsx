const STACK = [
  {
    label: "Python",
    role: "Core Language & AI",
    glow: "rgba(55, 118, 171, 0.45)",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10">
        <path
          fill="#3776AB"
          d="M63.5 12.3c-27.4 0-25.7 11.9-25.7 11.9l.1 12.3h26.2v3.7H27.7S12 38.4 12 65.7c0 27.3 13.7 26.4 13.7 26.4h8.2v-11.5s-.4-13.7 13.5-13.7h23.2s13.1.2 13.1-12.8V25.2s1.9-12.9-20.2-12.9zm-14 8.2c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7z"
        />
        <path
          fill="#FFD43B"
          d="M64.5 115.7c27.4 0 25.7-11.9 25.7-11.9l-.1-12.3H63.9v-3.7h36.4s15.7 1.8 15.7-25.5c0-27.3-13.7-26.4-13.7-26.4h-8.2v11.5s.4 13.7-13.5 13.7H57.4s-13.1-.2-13.1 12.8v28.9s-1.9 12.9 20.2 12.9zm14-8.2c-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7 2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7z"
        />
      </svg>
    ),
  },
  {
    label: "FastAPI",
    role: "Async APIs & Sockets",
    glow: "rgba(0, 150, 136, 0.45)",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10">
        <circle cx="64" cy="64" r="58" fill="#009688" />
        <path fill="#FFFFFF" d="M68.5 28L40 68h21.5L59.5 100 88 60H66.5L68.5 28z" />
      </svg>
    ),
  },
  {
    label: "React",
    role: "Modern UI & State",
    glow: "rgba(97, 218, 251, 0.45)",
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-10 w-10">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    label: "PyTorch / ML",
    role: "Deep Learning & Tensors",
    glow: "rgba(238, 76, 44, 0.45)",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10">
        <path
          fill="#EE4C2C"
          d="M72.3 22.8c-1.3-.9-3-.7-4 .4L40.7 52.4c-8.9 9.8-7.7 25.1 2.3 33.6 10.3 8.7 25.7 7.2 34.3-3.2 8-9.8 6.5-24.1-3.2-32.3l-5.8 5.8c6.6 5.6 7.6 15.4 2.1 22.1s-15.4 7.6-22.1 2.1-7.6-15.4-2.1-22.1l25-27.5c1.1-1.2 2.2-2.1 3.1-3.1 1.6-1.5 1.1-4-.9-5zm16.1 11.2c-2.4-2.4-6.3-2.4-8.7 0-2.4 2.4-2.4 6.3 0 8.7s6.3 2.4 8.7 0c2.4-2.4 2.4-6.3 0-8.7z"
        />
      </svg>
    ),
  },
  {
    label: "Neo4j / DB",
    role: "Graph AI & Vectors",
    glow: "rgba(1, 140, 203, 0.45)",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10">
        <circle cx="64" cy="64" r="54" fill="#018CCB" />
        <circle cx="42" cy="48" r="14" fill="#FFFFFF" />
        <circle cx="86" cy="48" r="14" fill="#FFFFFF" />
        <circle cx="64" cy="88" r="14" fill="#FFFFFF" />
        <path d="M42 48 L86 48 L64 88 Z" stroke="#FFFFFF" strokeWidth="6" fill="none" />
      </svg>
    ),
  },
  {
    label: "Docker",
    role: "Containerization",
    glow: "rgba(36, 150, 237, 0.45)",
    icon: (
      <svg viewBox="0 0 128 128" className="h-10 w-10">
        <path
          fill="#2496ED"
          d="M120.3 54.3c-2.2-1.6-7.3-2.5-12.7-.4-.7-4.8-4-8.6-8.9-10.7l-4.1-1.6-2.5 3.7c-4.3 6.4-5.3 14.5-2.7 22.1-1.8.8-4.7 1.7-8.2 1.7H13.6c-4 0-7.3 3.3-7.3 7.3 0 17.5 10.8 33.3 26.8 39.5 28.9 11.1 63.8 3.8 85.3-17.9 7.6-7.7 11.7-18.7 11.7-29.6 0-5.7-4.3-10.9-9.8-14.1zM34.7 34.7h11.6v11.6H34.7V34.7zm15.4 0h11.6v11.6H50.1V34.7zm15.5 0h11.6v11.6H65.6V34.7zm-46.3 15.5h11.6v11.6H19.3V50.2zm15.4 0h11.6v11.6H34.7V50.2zm15.4 0h11.6v11.6H50.1V50.2zm15.5 0h11.6v11.6H65.6V50.2zm15.5 0h11.6v11.6H81.1V50.2z"
        />
      </svg>
    ),
  },
];

const STATS = [
  { value: "7", label: "Flagship AI Systems" },
  { value: "5", label: "LLMs Orchestrated" },
  { value: "8.5", label: "CGPA (AI & ML @ VTU)" },
  { value: "100%", label: "From Scratch Transformer" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-primary pb-32 pt-24 md:pt-32">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-background/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[400px_1fr]">
        {/* Left Column: Authentic Portrait with Cyber Frame & Verification Badge */}
        <div className="reveal-scale mx-auto w-full max-w-sm lg:mx-0" data-reveal>
          <div className="group relative">
            {/* Ambient Background Aura */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-white/30 via-primary-foreground/20 to-black/40 blur-xl opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" />

            {/* Floating Portrait Container */}
            <div className="animate-float relative overflow-hidden rounded-3xl border-4 border-background/90 bg-background/40 shadow-[0_30px_90px_-20px_oklch(0_0_0/0.9)] backdrop-blur-xl">
              <img
                src="/kartik.jpg"
                alt="Portrait of Kartik Raikar — AI Engineer"
                loading="eager"
                width={800}
                height={1000}
                className="h-[430px] w-full object-cover object-[center_48%] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Holographic HUD Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-5 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
                      Active AI Engineer
                    </span>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-white/90">
                    VTU • AIML
                  </span>
                </div>
                <p className="mt-1.5 font-display text-lg font-black tracking-tight text-white">
                  Kartik Raikar
                </p>
                <p className="text-xs text-white/80">
                  AI Systems • LLM Evaluation • Transformers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Core Competencies */}
        <div>
          <span className="reveal inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground backdrop-blur-sm" data-reveal>
            Engineering Profile
          </span>

          <p
            className="reveal mt-4 font-display text-5xl font-black tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl"
            data-reveal
          >
            Hello! I&apos;m Kartik
          </p>

          <p
            className="reveal mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-primary-foreground/95"
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
          >
            I am an <strong className="font-bold text-white underline decoration-white/40 underline-offset-4">AI &amp; Machine Learning Engineer</strong> passionate
            about architecting high-performance LLM evaluation platforms, multi-agent debate engines,
            factuality auditing systems, and neural transformers built from mathematical first principles.
          </p>

          <p
            className="reveal mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-primary-foreground/85"
            data-reveal
            style={{ ["--reveal-delay" as string]: "150ms" }}
          >
            Currently pursuing B.E. in Artificial Intelligence &amp; Machine Learning at VTU with an <strong className="font-semibold text-white">8.5 CGPA</strong> and serving as <strong className="font-semibold text-white">Vice President of the AIML Department</strong> at Jain College of Engineering. Competitor in national hackathons including <strong className="font-semibold text-white">IIIT Dharwad Hack2Future 2.0 (Team VELORA)</strong> and <strong className="font-semibold text-white">NITTE Code for Innovex</strong>.
          </p>

          {/* Professional Single-Line Tech Stack with Big Icons & Glowing Effects */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {STACK.map((s, i) => (
              <div
                key={s.label}
                className="reveal-scale group relative flex flex-1 min-w-[100px] flex-col items-center justify-center rounded-2xl border-2 border-background/80 bg-background/95 p-3.5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-background hover:shadow-2xl"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${100 + i * 50}ms` }}
              >
                {/* Luminous Ambient Glow on Hover */}
                <div
                  className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: s.glow }}
                />

                {/* Big SVG Icon */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover:scale-115">
                  {s.icon}
                </div>

                {/* Title Label */}
                <span className="relative z-10 mt-2 font-display text-[11px] font-black uppercase tracking-wider text-foreground text-center">
                  {s.label}
                </span>

                {/* Subtle role badge */}
                <span className="relative z-10 mt-0.5 text-[9px] font-semibold text-muted-foreground/80 text-center leading-tight">
                  {s.role}
                </span>
              </div>
            ))}
          </div>

          {/* Key Metrics Grid */}
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="reveal rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-4 backdrop-blur-sm transition-transform hover:scale-105"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              >
                <p className="font-display text-2xl sm:text-3xl font-black text-primary-foreground">
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground/80 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative mt-20 overflow-hidden border-y border-primary-foreground/20 py-4">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...STACK, ...STACK, ...STACK, ...STACK].map((s, i) => (
            <span
              key={i}
              className="font-display text-sm font-bold uppercase tracking-[0.35em] text-primary-foreground/70"
            >
              {s.label} <span className="text-primary-foreground/30">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* curved divider into the dark section */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-24 w-full"
        aria-hidden="true"
      >
        <path d="M0,120 C400,20 1040,20 1440,120 L1440,120 L0,120 Z" fill="var(--background)" />
        <path
          d="M0,118 C400,18 1040,18 1440,118"
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="3"
        />
      </svg>
    </section>
  );
}
