import { useEffect, useRef, useState } from "react";

type Group = { title: string; items: { name: string; level: number }[] };

const GROUPS: Group[] = [
  {
    title: "Programming & Core",
    items: [
      { name: "Python (Async/OOP)", level: 96 },
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "SQL & Cypher", level: 88 },
      { name: "Linear Algebra & Tensors", level: 90 },
    ],
  },
  {
    title: "Frameworks & Backend",
    items: [
      { name: "FastAPI & AsyncIO", level: 95 },
      { name: "React 19 & Vite", level: 92 },
      { name: "WebSockets & Streaming", level: 90 },
      { name: "TanStack Router & State", level: 88 },
    ],
  },
  {
    title: "AI / ML & Architecture",
    items: [
      { name: "Transformers from Scratch", level: 95 },
      { name: "RAG & Hallucination Auditing", level: 94 },
      { name: "Multi-Agent Orchestration", level: 92 },
      { name: "SentenceTransformers & Embeddings", level: 90 },
    ],
  },
  {
    title: "Databases & Graph AI",
    items: [
      { name: "Neo4j (Graph AI Lineage)", level: 90 },
      { name: "MongoDB & Mongoose", level: 88 },
      { name: "Vector Databases & Chunks", level: 92 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    title: "DevOps & Tooling",
    items: [
      { name: "Docker & Containers", level: 88 },
      { name: "Git, GitHub & CI/CD", level: 94 },
      { name: "Postman & API Testing", level: 92 },
      { name: "Linux & Bash", level: 85 },
    ],
  },
];

function SkillCard({ group, index }: { group: Group; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      style={{ ["--reveal-delay" as string]: `${(index % 3) * 110}ms` }}
      className="reveal group card-dark flex w-full max-w-[380px] flex-col justify-between rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_0_50px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
    >
      <div>
        <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-foreground">
          {group.title}
        </h3>

        <ul className="mt-6 space-y-5">
          {group.items.map((item, i) => (
            <li key={item.name}>
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground/90">{item.name}</span>
                <span className="font-bold text-primary">{item.level}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full transition-[width] duration-1000 ease-out"
                  style={{
                    width: filled ? `${item.level}%` : "0%",
                    backgroundImage: "var(--gradient-red)",
                    transitionDelay: `${i * 140}ms`,
                    boxShadow: "0 0 14px color-mix(in oklab, var(--primary) 70%, transparent)",
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[var(--gradient-glow)] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="reveal inline-block rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground"
            data-reveal
          >
            Technical Skills
          </span>
          <h2
            className="reveal mt-6 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl"
            data-reveal
            style={{ ["--reveal-delay" as string]: "90ms" }}
          >
            My Skillset
          </h2>
          <p
            className="reveal mt-4 text-sm leading-relaxed text-muted-foreground"
            data-reveal
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            A comprehensive overview of my programming languages, frameworks, databases and
            engineering concepts.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {GROUPS.map((g, i) => (
            <SkillCard key={g.title} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
