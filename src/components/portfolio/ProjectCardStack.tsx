import { useState, useRef, MouseEvent } from "react";

interface ProjectCard {
  id: string;
  n: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

const CARDS: ProjectCard[] = [
  {
    id: "atlas-os",
    n: "01",
    title: "AtlasOS",
    category: "AI DESKTOP OS & WORKSPACE",
    desc: "Futuristic web-based AI operating system featuring windowed multi-tasking, terminal execution, and autonomous agent co-pilots.",
    tags: ["React 19", "TypeScript", "FastAPI", "WebSockets", "Multi-Agent"],
    metrics: [
      { label: "Frame Physics", value: "60 FPS" },
      { label: "IPC Sync", value: "< 15ms" },
      { label: "Sandbox ISO", value: "100%" },
    ],
    accentColor: "from-rose-500/20 to-primary/30 border-rose-500/40",
  },
  {
    id: "atlas-ai-resume",
    n: "02",
    title: "Atlas AI Resume",
    category: "TALK WITH MY RESUME • DUAL-ENGINE RAG",
    desc: 'Full-stack AI Resume Portal powered by Gemini 3.5 Flash, Dual-Engine RAG, SSE streaming, and interactive PDF keyword highlights.',
    tags: ["React 19", "Gemini 3.5", "Express", "Vector RAG", "SSE Stream"],
    metrics: [
      { label: "SSE Latency", value: "< 18ms" },
      { label: "Layout Shift", value: "0ms" },
      { label: "Vector Chunks", value: "1,864" },
    ],
    accentColor: "from-blue-500/20 to-indigo-600/30 border-blue-500/40",
  },
  {
    id: "apex-rag",
    n: "03",
    title: "ApexRAG Evaluation",
    category: "RAG EVALUATION & 5-STRATEGY BENCHMARK",
    desc: "Production-grade evaluation harness benchmarking 5 retrieval strategies across 100 React doc Q&As on local hardware at $0 cost.",
    tags: ["Python", "FastAPI", "ChromaDB", "RRF Fusion", "Ollama"],
    metrics: [
      { label: "Recall@4", value: "61% ➔ 85%" },
      { label: "Infra Cost", value: "$0.00" },
      { label: "Corpus Chunks", value: "2,580" },
    ],
    accentColor: "from-cyan-500/20 to-blue-600/30 border-cyan-500/40",
  },
  {
    id: "github-mcp",
    n: "04",
    title: "GitHub MCP Toolkit",
    category: "MODEL CONTEXT PROTOCOL & SAGA ENGINE",
    desc: "Enterprise MCP server with two-phase preview-token protocol, Saga pattern action rollbacks, and pure-Python TF-IDF engine.",
    tags: ["Python", "MCP Server", "FastAPI", "Pydantic", "Saga Journal"],
    metrics: [
      { label: "Tool Selection", value: "62% ➔ 98%" },
      { label: "Blind Write", value: "0%" },
      { label: "Local Triage", value: "86% ➔ 100%" },
    ],
    accentColor: "from-teal-500/20 to-emerald-600/30 border-teal-500/40",
  },
  {
    id: "raga-ai",
    n: "05",
    title: "RagaAI Catalyst",
    category: "ENTERPRISE LLM EVALUATION",
    desc: "Full-stack evaluation engine scoring outputs across faithfulness, relevance, toxicity, and correctness with 5 leading model providers.",
    tags: ["Python", "FastAPI", "React", "WebSocket", "MongoDB"],
    metrics: [
      { label: "Faithfulness", value: "99.4%" },
      { label: "Providers", value: "5 LLMs" },
      { label: "WS Latency", value: "< 45ms" },
    ],
    accentColor: "from-emerald-500/20 to-teal-600/30 border-emerald-500/40",
  },
  {
    id: "debate-arena",
    n: "06",
    title: "AI Debate Arena",
    category: "MULTI-AGENT ORCHESTRATION",
    desc: "Autonomous multi-agent courtroom system orchestrating real-time streaming debates between Gemini, GPT-4, and Claude with automated judging.",
    tags: ["React", "FastAPI", "MongoDB", "Multi-Agent", "TailwindCSS"],
    metrics: [
      { label: "Debate Agents", value: "Multi-LLM" },
      { label: "Stream", value: "Realtime" },
      { label: "Auditing", value: "Automated" },
    ],
    accentColor: "from-violet-500/20 to-purple-600/30 border-violet-500/40",
  },
  {
    id: "numpygpt",
    n: "07",
    title: "NumPyGPT From Scratch",
    category: "DEEP LEARNING INTERNALS",
    desc: "Full GPT-style Transformer built completely from scratch without ML frameworks. Includes 8 attention heads, layer norm, and interactive visualizer.",
    tags: ["TypeScript", "React", "Matrix Math", "Transformers", "Vite"],
    metrics: [
      { label: "Dependencies", value: "0 Frameworks" },
      { label: "Attention", value: "8 Heads" },
      { label: "Visualizer", value: "Active" },
    ],
    accentColor: "from-amber-500/20 to-orange-600/30 border-amber-500/40",
  },
];

export function ProjectCardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / (rect.height / 2)) * 8,
      y: (x / (rect.width / 2)) * 8,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % CARDS.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  return (
    <div className="relative mx-auto w-full max-w-lg select-none perspective-[1200px]">
      {/* Controls Header */}
      <div className="mb-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
          <span className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Featured Systems ({activeIndex + 1} / {CARDS.length})
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={prevCard}
            aria-label="Previous project"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border/80 bg-card/80 text-xs font-bold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            ←
          </button>
          <button
            onClick={nextCard}
            aria-label="Next project"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border/80 bg-card/80 text-xs font-bold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            →
          </button>
        </div>
      </div>

      {/* 3D Stack Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[380px] w-full cursor-pointer transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        onClick={nextCard}
      >
        {CARDS.map((card, i) => {
          const offset = (i - activeIndex + CARDS.length) % CARDS.length;

          // Only render top 3 stacked cards
          if (offset > 2) return null;

          const isTop = offset === 0;

          return (
            <div
              key={card.id}
              className={`absolute inset-0 flex flex-col justify-between rounded-3xl border bg-gradient-to-br p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 ease-out ${
                card.accentColor
              } ${
                isTop
                  ? "z-30 bg-card/95 opacity-100 shadow-[0_25px_60px_-15px_color-mix(in_oklab,var(--primary)_40%,transparent)]"
                  : offset === 1
                    ? "z-20 bg-card/75 opacity-70"
                    : "z-10 bg-card/50 opacity-40"
              }`}
              style={{
                transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.05}) translateZ(${-offset * 50}px)`,
                pointerEvents: isTop ? "auto" : "none",
              }}
            >
              <div>
                {/* Card Badge */}
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span className="font-mono text-xs font-bold tracking-widest text-primary">
                    // {card.n} • {card.category}
                  </span>
                  <span className="rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    Click to cycle
                  </span>
                </div>

                {/* Title & Description */}
                <div className="mt-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90 sm:text-sm">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div>
                {/* Metric Highlights */}
                <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border/40 bg-background/50 p-2.5">
                  {card.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="font-display text-xs font-bold text-foreground sm:text-sm">
                        {m.value}
                      </p>
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tag Badges */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border/50 bg-secondary/60 px-2 py-0.5 text-[10px] font-semibold text-foreground/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View details link */}
                <div className="mt-4 flex items-center justify-between pt-1">
                  <a
                    href="#projects"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-all hover:underline"
                  >
                    <span>Inspect Full Project</span>
                    <span>→</span>
                  </a>

                  <div className="flex gap-1">
                    {CARDS.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          dotIdx === activeIndex ? "w-5 bg-primary" : "w-1.5 bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
