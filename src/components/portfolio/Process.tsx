import { MouseEvent } from "react";

const STEPS = [
  {
    n: "01",
    phase: "PHASE 01 // ANALYSIS",
    title: "Research & Problem Formulation",
    body: "Deconstructing core engineering bottlenecks, latency bounds, and causal dependency graphs to architect mathematical and system solutions.",
    tags: ["DAG Analysis", "Causal RCA", "Benchmarking"],
    accent: "from-rose-500/20 via-primary/10 to-transparent",
    glow: "rgba(244, 63, 94, 0.35)",
    border: "border-primary/40",
    pos: "lg:col-start-3 lg:row-start-1",
  },
  {
    n: "02",
    phase: "PHASE 02 // ARCHITECTURE",
    title: "System & Protocol Design",
    body: "Engineering deterministic API schemas, database-enforced partitioning (pgvector), two-phase preview tokens, and Saga compensation journals.",
    tags: ["Pydantic v2", "MCP Protocol", "HNSW Indexing"],
    accent: "from-violet-500/20 via-purple-500/10 to-transparent",
    glow: "rgba(168, 85, 247, 0.35)",
    border: "border-violet-500/40",
    pos: "lg:col-start-2 lg:row-start-2",
  },
  {
    n: "03",
    phase: "PHASE 03 // IMPLEMENTATION",
    title: "High-Performance Implementation",
    body: "Writing high-throughput asynchronous services in FastAPI, custom attention heads in TypeScript, and low-latency SSE streaming pipelines.",
    tags: ["FastAPI AsyncIO", "React 19", "WebSockets"],
    accent: "from-sky-500/20 via-blue-500/10 to-transparent",
    glow: "rgba(56, 189, 248, 0.35)",
    border: "border-sky-500/40",
    pos: "lg:col-start-4 lg:row-start-3",
  },
  {
    n: "04",
    phase: "PHASE 04 // VALIDATION",
    title: "Evaluation, CI/CD & Production",
    body: "Rigorous evaluation harnesses (ApexRAG), automated regression testing, Docker sandbox containerization, and zero-downtime production deployment.",
    tags: ["Docker Sandboxes", "GitHub Actions", "Telemetry HUD"],
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    glow: "rgba(16, 185, 129, 0.35)",
    border: "border-emerald-500/40",
    pos: "lg:col-start-2 lg:row-start-4",
  },
];

export function Process() {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    e.currentTarget.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    e.currentTarget.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--rotate-x", "0deg");
    e.currentTarget.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <section id="process" className="relative overflow-hidden bg-background py-24 md:py-32 border-t border-border/40">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[50rem] rounded-full bg-primary/5 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-600/5 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[380px_1fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <span
            className="reveal-x inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-primary"
            data-reveal
          >
            Engineering Pipeline
          </span>
          <h2
            className="reveal-x mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl text-foreground"
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            How I architect
            <br />
            production AI
            <br />
            <span className="text-gradient-red">systems</span>
          </h2>
          <p
            className="reveal-x mt-6 max-w-sm text-sm sm:text-base leading-relaxed text-muted-foreground"
            data-reveal
            style={{ ["--reveal-delay" as string]: "150ms" }}
          >
            A disciplined four-phase engineering methodology turning theoretical AI concepts into resilient, high-availability production architectures with verified benchmarks.
          </p>

          <div
            className="reveal-x mt-8 hidden lg:flex items-center gap-3 border-t border-border/40 pt-6"
            data-reveal
            style={{ ["--reveal-delay" as string]: "220ms" }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
              ⚡
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Zero Compromise Architecture</p>
              <p className="text-[11px] text-muted-foreground">Type-safe • Benchmark-verified • Resilient</p>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Animated Connecting SVG Conduits */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="conduit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <line
              x1="66%"
              y1="14%"
              x2="34%"
              y2="38%"
              stroke="url(#conduit-grad)"
              strokeWidth="2"
              className="animate-dash"
            />
            <line
              x1="34%"
              y1="38%"
              x2="76%"
              y2="62%"
              stroke="url(#conduit-grad)"
              strokeWidth="2"
              className="animate-dash"
            />
            <line
              x1="76%"
              y1="62%"
              x2="30%"
              y2="86%"
              stroke="url(#conduit-grad)"
              strokeWidth="2"
              className="animate-dash"
            />
          </svg>

          <div className="grid gap-6 lg:grid-cols-4 lg:grid-rows-4">
            {STEPS.map((s, i) => (
              <article
                key={s.n}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                data-reveal
                style={{
                  ["--reveal-delay" as string]: `${i * 120}ms`,
                  transform: undefined,
                }}
                className={`reveal-scale card-3d group relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-7 shadow-2xl backdrop-blur-xl hover:border-primary/60 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] lg:col-span-2 ${s.pos} ${
                  i % 2 === 0 ? "lg:-rotate-2 hover:rotate-0" : "lg:rotate-2 hover:rotate-0"
                }`}
              >
                {/* Dynamic Cursor Spotlight Glow */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${s.glow}, transparent 70%)`,
                  }}
                />

                {/* 3D Specular Glare Sheen */}
                <div className="glare-sheen group-hover:opacity-100" />

                {/* Subtle top ambient gradient */}
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.accent} opacity-40`} />

                <div className="relative z-10 flex flex-col justify-between h-full [transform-style:preserve-3d]">
                  <div className="card-3d-child">
                    <div className="flex items-center justify-between border-b border-border/40 pb-3">
                      <span className="font-mono text-[10px] font-bold tracking-widest text-primary">
                        {s.phase}
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 bg-secondary/60 font-mono text-xs font-bold text-foreground">
                        {s.n}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground/90">
                      {s.body}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/50 bg-secondary/50 px-2 py-0.5 text-[10px] font-mono font-medium text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
