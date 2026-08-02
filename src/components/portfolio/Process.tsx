const STEPS = [
  {
    n: "01",
    title: "Research",
    body: "Understanding the goal, requirements, and technical challenges to build a plan.",
    tone: "red",
    pos: "lg:col-start-3 lg:row-start-1",
  },
  {
    n: "02",
    title: "Design",
    body: "Creating clean interfaces, intuitive experiences and scalable user journeys.",
    tone: "dark",
    pos: "lg:col-start-2 lg:row-start-2",
  },
  {
    n: "03",
    title: "Development",
    body: "Developing fast, reliable and maintainable full-stack applications.",
    tone: "dark",
    pos: "lg:col-start-4 lg:row-start-3",
  },
  {
    n: "04",
    title: "Deploy",
    body: "Shipping to production, monitoring performance and iterating on feedback.",
    tone: "red",
    pos: "lg:col-start-2 lg:row-start-4",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[380px_1fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <span
            className="reveal-x inline-block rounded-full border border-ink/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-foreground"
            data-reveal
          >
            My Process
          </span>
          <h2
            className="reveal-x mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl"
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            Here&apos;s how I<br />
            turn ideas into
            <br />
            real-world
            <br />
            applications
          </h2>
          <p
            className="reveal-x mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground"
            data-reveal
            style={{ ["--reveal-delay" as string]: "150ms" }}
          >
            I follow a structured, creative, and highly technical approach to turn ideas into robust
            full-stack applications.
          </p>
        </div>

        <div className="relative">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            aria-hidden="true"
          >
            <line
              x1="66%"
              y1="14%"
              x2="34%"
              y2="38%"
              stroke="var(--ink)"
              strokeOpacity="0.28"
              className="animate-dash"
            />
            <line
              x1="34%"
              y1="38%"
              x2="76%"
              y2="62%"
              stroke="var(--ink)"
              strokeOpacity="0.28"
              className="animate-dash"
            />
            <line
              x1="76%"
              y1="62%"
              x2="30%"
              y2="86%"
              stroke="var(--ink)"
              strokeOpacity="0.28"
              className="animate-dash"
            />
          </svg>

          <div className="grid gap-6 lg:grid-cols-4 lg:grid-rows-4">
            {STEPS.map((s, i) => (
              <article
                key={s.n}
                data-reveal
                style={{
                  ["--reveal-delay" as string]: `${i * 120}ms`,
                  transform: undefined,
                }}
                className={`reveal-scale relative rounded-2xl p-6 shadow-[0_24px_50px_-24px_oklch(0_0_0/0.45)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-0 lg:col-span-2 ${s.pos} ${
                  i % 2 === 0 ? "lg:-rotate-3" : "lg:rotate-2"
                } ${
                  s.tone === "red" ? "bg-primary text-primary-foreground" : "bg-ink text-surface"
                }`}
              >
                <p className="text-[11px] font-bold tracking-[0.3em] opacity-60">{s.n}</p>
                <h3 className="mt-3 font-display text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
