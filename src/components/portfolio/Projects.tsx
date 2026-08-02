interface ProjectItem {
  n: string;
  badge: string;
  title: string;
  tagline: string;
  body: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

const PROJECTS: ProjectItem[] = [
  {
    n: "01",
    badge: "Autonomous AI Operating System",
    title: "AtlasOS",
    tagline: "Next-Gen Web-Based AI Desktop Environment & Multi-Agent OS",
    body: "A futuristic web-based AI operating system and intelligent workspace. Features windowed multi-tasking, integrated terminal, virtual file system sandbox, autonomous agent co-pilots, and dynamic system telemetry built with React 19, TypeScript, and FastAPI.",
    highlights: [
      "Windowed desktop environment with fluid gesture physics and multi-window multitasking",
      "Autonomous agent workspace copilot with live tool execution and terminal access",
      "Virtual file system sandbox, process manager, and real-time telemetry HUD",
    ],
    tags: ["React 19", "TypeScript", "FastAPI", "WebSockets", "TailwindCSS", "Multi-Agent"],
    githubUrl: "https://github.com/kartik-012/atlas-os",
    demoUrl: "#home",
  },
  {
    n: "02",
    badge: "Flagship Production RAG System",
    title: "Atlas AI Resume",
    tagline: '"Talk with my Resume." — Full-Stack AI Career Portal & RAG Studio',
    body: "A production-quality, full-stack AI Resume Portal engineered with futuristic dark glassmorphic aesthetics and smooth micro-interactions. Enables recruiters to explore credentials interactively, inspect a high-fidelity PDF layout with real-time keyword highlights, and converse with Atlas AI—an intelligent agent powered by Gemini 3.5 Flash, dynamic vector embeddings, Dual-Engine retrieval (Cosine similarity + keyword fallback), and Server-Sent Events (SSE) word-by-word streaming.",
    highlights: [
      "Dual-Engine Search: Gemini Embedding 2 Preview with cosine similarity + keyword fallback",
      "Interactive PDF Viewer: Real-time keyword highlight, zoom controls, and instant printable layout",
      "SaaS Recruiter Console: Real-time telemetry, session metrics, and interactive SVG area charts",
      "RAG Index Studio & Admin: Drag-and-drop document chunking and live embedding into local index",
      "Floating Atlas AI Chatbot: SSE streaming, markdown/tables/code panels, confidence scores & citations",
    ],
    tags: [
      "React 19",
      "Gemini 3.5 Flash",
      "Express / Node",
      "Vector Embeddings",
      "SSE Streaming",
      "Tailwind CSS v4",
      "TypeScript",
    ],
    githubUrl: "https://github.com/kartikraikar2005/atlas-ai-resume.git",
    demoUrl: "https://github.com/kartikraikar2005/atlas-ai-resume.git",
  },
  {
    n: "03",
    badge: "Enterprise LLM Evaluation",
    title: "RagaAI Catalyst",
    tagline: "Full-Stack Enterprise LLM Evaluation & Benchmarking Platform",
    body: "Architected a full-stack platform scoring LLM outputs across faithfulness, relevance, toxicity, and correctness. Integrated five LLM providers (GPT-4, Claude 3.5, Gemini, Llama 3, Mistral) behind a unified REST API with WebSocket streaming for real-time benchmark telemetry and automated regression testing.",
    highlights: [
      "Unified REST API orchestrating 5 leading LLM providers",
      "WebSocket streaming with real-time multi-metric evaluation",
      "Automated regression auditing and toxicity mitigation guardrails",
    ],
    tags: ["Python", "FastAPI", "React.js", "MongoDB", "LLMs", "WebSockets"],
    githubUrl: "https://github.com/kartik-012",
    demoUrl: "https://github.com/kartik-012",
  },
  {
    n: "04",
    badge: "Multi-Agent Orchestration",
    title: "AI Debate Arena",
    tagline: "Autonomous Multi-Model Debate & Courtroom Visualizer",
    body: "An AI-powered multi-agent debate platform with real-time argument generation and interactive courtroom visualization. Integrated advanced language model APIs (Gemini, GPT-4, Claude) for intelligent persona synthesis and counter-argumentation. Designed a responsive courtroom frontend in React and TailwindCSS with FastAPI backend and live WebSocket streaming.",
    highlights: [
      "Autonomous multi-agent turn-taking and persona synthesis",
      "Real-time WebSocket streaming with sentiment analysis overlays",
      "Automated judge scoring and rubric evaluation system",
    ],
    tags: ["React.js", "FastAPI", "MongoDB", "Multi-Agent", "Gemini API", "TailwindCSS"],
    githubUrl: "https://github.com/kartikraikar2005/debate-arena",
    demoUrl: "https://github.com/kartikraikar2005/debate-arena",
  },
  {
    n: "05",
    badge: "Deep Learning Internals",
    title: "NumPyGPT From Scratch",
    tagline: "Zero-Framework GPT Transformer Built from Mathematical First Principles",
    body: "A complete GPT-style Transformer model implemented completely from scratch without external ML frameworks (no PyTorch, no TensorFlow). Manually engineered Matrix Multiplication, 8-Head Multi-Head Attention, Layer Normalization, Softmax, FeedForward layers, and Backpropagation. Includes an interactive visualizer for live activation matrices and attention heatmaps.",
    highlights: [
      "100% Zero ML Framework dependencies — pure matrix mathematics",
      "8-Head Multi-Head Attention mechanism with causal masking",
      "Interactive attention weight heatmap visualizer and token inspector",
    ],
    tags: ["TypeScript", "React.js", "Deep Learning", "Matrix Math", "Vite", "Transformers"],
    githubUrl: "https://github.com/kartikraikar2005/numpygpt",
    demoUrl: "https://github.com/kartikraikar2005/numpygpt",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <span
          className="reveal inline-block rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground"
          data-reveal
        >
          Featured AI Systems
        </span>

        <h2
          className="reveal mt-6 max-w-xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl"
          data-reveal
          style={{ ["--reveal-delay" as string]: "80ms" }}
        >
          Work that
          <br />
          speaks
          <br />
          <span className="text-gradient-red">for itself</span>
        </h2>

        <p
          className="reveal mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground"
          data-reveal
          style={{ ["--reveal-delay" as string]: "150ms" }}
        >
          A selection of production-grade AI systems, LLM evaluation pipelines, multi-agent frameworks,
          and transformers architected by Kartik Raikar.
        </p>

        <div className="mt-16 space-y-8">
          {PROJECTS.map((p, i) => (
            <article
              key={p.n}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 80}ms` }}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_0_70px_-25px_color-mix(in_oklab,var(--primary)_75%,transparent)] md:p-10"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-4">
                  <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    <span className="animate-pulse-ring inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    {p.badge}
                  </p>
                  <span className="font-mono text-xs font-bold text-muted-foreground/60">
                    // SYSTEM #{p.n}
                  </span>
                </div>

                <div className="mt-5 flex flex-col gap-1">
                  <h3 className="flex items-baseline gap-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                    <span className="text-muted-foreground/50">{p.n}</span>
                    <span className="transition-colors duration-300 group-hover:text-primary">
                      {p.title}
                    </span>
                  </h3>
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground/90">
                  {p.body}
                </p>

                {/* Key Highlights list */}
                <div className="mt-5 space-y-2 rounded-2xl border border-border/40 bg-secondary/30 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/75">
                    Key Technical Highlights:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-primary font-bold">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-[11px] font-medium text-foreground/80 transition-colors duration-300 hover:border-primary hover:text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Action Links */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2 text-xs font-semibold transition-all duration-300 hover:bg-secondary hover:border-primary/50"
                  >
                    <span>Inspect Codebase</span>
                    <span className="text-xs">↗</span>
                  </a>
                  <a
                    href={p.demoUrl}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-md transition-transform duration-300 hover:scale-105"
                  >
                    <span>Explore System</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
