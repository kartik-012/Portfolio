import { useState } from "react";

interface SkillItem {
  name: string;
  tier: "Daily Production" | "System Architecture" | "Deep Internals" | "Enterprise Stack";
  tierColor: string;
  context: string;
  projectRef?: string;
}

interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  category: "all" | "ai" | "backend" | "data" | "devops";
  accentColor: string;
  borderHover: string;
  skills: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "ai-llm",
    title: "AI, LLMs & Retrieval",
    subtitle: "RAG Evaluation • Agents • Neural Internals",
    icon: "🧠",
    category: "ai",
    accentColor: "from-rose-500/15 via-primary/20 to-transparent",
    borderHover: "hover:border-primary/60",
    skills: [
      {
        name: "Transformers from Scratch",
        tier: "Deep Internals",
        tierColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
        context: "Manual 8-head attention, backprop & causal masking",
        projectRef: "NumPyGPT",
      },
      {
        name: "RAG & Hallucination Auditing",
        tier: "System Architecture",
        tierColor: "bg-violet-500/15 text-violet-300 border-violet-500/30",
        context: "Version-partitioned vector indexing & AST semantic diffs",
        projectRef: "VersionRAG, ApexRAG",
      },
      {
        name: "Autonomous Agent Orchestration",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "Multi-turn debate state machines & LLM persona synthesis",
        projectRef: "Debate Arena, AtlasOS",
      },
      {
        name: "Sentence Transformers & RRF",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "Cross-encoder re-ranking & Reciprocal Rank Fusion (k=60)",
        projectRef: "ApexRAG",
      },
      {
        name: "Model Context Protocol (MCP)",
        tier: "System Architecture",
        tierColor: "bg-violet-500/15 text-violet-300 border-violet-500/30",
        context: "Two-phase SHA256 tokens & Saga transaction rollbacks",
        projectRef: "GitHub MCP Toolkit",
      },
    ],
  },
  {
    id: "backend-core",
    title: "Backend & System APIs",
    subtitle: "High-Throughput Services • Async Sockets",
    icon: "⚡",
    category: "backend",
    accentColor: "from-teal-500/15 via-emerald-500/20 to-transparent",
    borderHover: "hover:border-teal-500/60",
    skills: [
      {
        name: "Python (AsyncIO / Typing / OOP)",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "Primary daily language for all microservices & agents",
        projectRef: "All Systems",
      },
      {
        name: "FastAPI & Pydantic v2",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "Strict schema contracts, streaming SSE & dependency injection",
        projectRef: "VersionRAG, AIOps, MCP",
      },
      {
        name: "WebSockets & Streaming Pipelines",
        tier: "System Architecture",
        tierColor: "bg-violet-500/15 text-violet-300 border-violet-500/30",
        context: "Sub-45ms real-time telemetry streaming & socket multiplexing",
        projectRef: "AtlasOS, Debate Arena",
      },
      {
        name: "TypeScript & React 19",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "Full-stack UI with TanStack Start, Tailwind v4 & Vite",
        projectRef: "Atlas AI Resume, Portfolio",
      },
      {
        name: "Causal DAG Graph Traversal",
        tier: "System Architecture",
        tierColor: "bg-violet-500/15 text-violet-300 border-violet-500/30",
        context: "NetworkX graph algorithms & EWMA anomaly isolation",
        projectRef: "AIOps Correlator",
      },
    ],
  },
  {
    id: "databases-vectors",
    title: "Databases & Vector Storage",
    subtitle: "Hybrid Search • Vector Indices • Graphs",
    icon: "🗄️",
    category: "data",
    accentColor: "from-cyan-500/15 via-blue-500/20 to-transparent",
    borderHover: "hover:border-cyan-500/60",
    skills: [
      {
        name: "PostgreSQL 16 + pgvector",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "HNSW index partitioning & 5.4ms cosine similarity lookup",
        projectRef: "VersionRAG, AIOps",
      },
      {
        name: "ChromaDB & Qdrant",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "Embedded vector stores & collection filtering on CPU",
        projectRef: "ApexRAG",
      },
      {
        name: "Redis",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "In-memory caching, pub/sub messaging & rate-limiting",
        projectRef: "AIOps Correlator",
      },
      {
        name: "MongoDB & Neo4j",
        tier: "Enterprise Stack",
        tierColor: "bg-sky-500/15 text-sky-300 border-sky-500/30",
        context: "Document storage & knowledge graph lineage modeling",
        projectRef: "Debate Arena, RagaAI",
      },
    ],
  },
  {
    id: "devops-infra",
    title: "DevOps & Production Tooling",
    subtitle: "Containerization • Observability • CI/CD",
    icon: "⚙️",
    category: "devops",
    accentColor: "from-violet-500/15 via-purple-500/20 to-transparent",
    borderHover: "hover:border-violet-500/60",
    skills: [
      {
        name: "Docker & Container Architecture",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "Multi-stage builds, isolated runtime sandboxes & compose",
        projectRef: "GitHub MCP, AtlasOS",
      },
      {
        name: "Git, GitHub Actions & CI/CD",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "Automated test suites, linter gates & semantic releases",
        projectRef: "All Repositories",
      },
      {
        name: "Ollama & Local Model Serving",
        tier: "System Architecture",
        tierColor: "bg-violet-500/15 text-violet-300 border-violet-500/30",
        context: "Zero-cost local LLM inference (Llama 3.1, Phi-3, Mistral)",
        projectRef: "ApexRAG, MCP Server",
      },
      {
        name: "Linux (Debian/Ubuntu) & Bash",
        tier: "Daily Production",
        tierColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        context: "Process orchestration, systemd management & shell tooling",
        projectRef: "Production Servers",
      },
      {
        name: "Three.js / WebGL Visualizations",
        tier: "Enterprise Stack",
        tierColor: "bg-sky-500/15 text-sky-300 border-sky-500/30",
        context: "Real-time 3D topology graphs & simulation rendering",
        projectRef: "AIOps Correlator",
      },
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Competencies" },
  { id: "ai", label: "AI & Retrieval" },
  { id: "backend", label: "Backend & APIs" },
  { id: "data", label: "Databases & Vectors" },
  { id: "devops", label: "DevOps & Tooling" },
] as const;

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredGroups =
    activeCategory === "all"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="relative bg-background py-24 md:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[var(--gradient-glow)] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="reveal inline-block rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground"
            data-reveal
          >
            Technical Competencies &amp; Production Stack
          </span>
          <h2
            className="reveal mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
            data-reveal
            style={{ ["--reveal-delay" as string]: "90ms" }}
          >
            Architectural Skillset
          </h2>
          <p
            className="reveal mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground"
            data-reveal
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            Categorized by engineering tier and real-world system implementations. No arbitrary percentage bars — each competency is backed by production repositories and benchmarks.
          </p>

          {/* Category Filter Pills */}
          <div
            className="reveal mt-8 flex flex-wrap justify-center gap-2"
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-md glow-red scale-105"
                    : "border border-border/80 bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredGroups.map((group, groupIdx) => (
            <div
              key={group.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(groupIdx % 2) * 120}ms` }}
              className={`reveal group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 ${group.borderHover} hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]`}
            >
              {/* Corner Ambient Gradient */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${group.accentColor} opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between border-b border-border/50 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-secondary/60 text-2xl shadow-sm">
                      {group.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                        {group.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-border/60 bg-secondary/50 px-2.5 py-1 text-[10px] font-mono font-bold text-muted-foreground">
                    {group.skills.length} Tools
                  </span>
                </div>

                {/* Skills List */}
                <ul className="mt-5 space-y-3.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group/item rounded-2xl border border-border/40 bg-secondary/25 p-3.5 transition-all duration-300 hover:border-primary/40 hover:bg-secondary/45"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <span className="font-display text-xs font-bold text-foreground sm:text-sm">
                          {skill.name}
                        </span>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${skill.tierColor}`}
                        >
                          {skill.tier}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {skill.context}
                      </p>

                      {skill.projectRef && (
                        <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-primary/90 font-medium">
                          <span className="text-muted-foreground">Deployed in:</span>
                          <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">
                            {skill.projectRef}
                          </span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
