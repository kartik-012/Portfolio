import { useState } from "react";

interface ProjectMetric {
  label: string;
  val: string;
  subText: string;
  badge?: string;
}

interface ProjectItem {
  n: string;
  badge: string;
  title: string;
  tagline: string;
  body: string;
  metrics: ProjectMetric[];
  challenges: string[];
  solutions: string[];
  interviewDeepDive: string[];
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
    body: "A futuristic web-based AI operating system and intelligent workspace. Features windowed multi-tasking, integrated virtual web terminal, file system sandbox, autonomous agent co-pilots, and dynamic system telemetry built with React 19, TypeScript, and FastAPI.",
    metrics: [
      { val: "60 FPS", label: "Frame Rate Physics", subText: "Zero layout-thrashing UI", badge: "PERFORMANCE" },
      { val: "< 15ms", label: "IPC Sync Latency", subText: "Web Worker virtual process bus", badge: "LATENCY" },
      { val: "100%", label: "Sandbox Isolation", subText: "Virtual FS security boundary", badge: "SECURITY" },
      { val: "4 Co-Pilots", label: "Autonomous Agents", subText: "Concurrent terminal execution", badge: "ORCHESTRATION" },
    ],
    challenges: [
      "Managing smooth, non-blocking window state and 60 FPS gesture physics in React 19 without layout thrashing during multi-window multitasking.",
      "Synchronizing live terminal state, web worker file execution, and real-time telemetry HUD with background FastAPI agent sub-processes under <15ms IPC latency.",
    ],
    solutions: [
      "Engineered a custom z-index stack manager with decoupled gesture physics and virtual event bus for isolated window render trees.",
      "Implemented WebSockets multiplexing for live process execution logs and Web Workers for real-time memory telemetry calculations.",
    ],
    interviewDeepDive: [
      "How to build non-blocking windowing managers in React 19 by decoupling drag events from state rerenders.",
      "Architecting isolated execution environments inside browser sandboxes for multi-agent terminal copilots.",
    ],
    highlights: [
      "Windowed desktop environment with fluid 60 FPS gesture physics and multi-window multitasking",
      "Autonomous agent workspace copilot with live tool execution and terminal access",
      "Virtual file system sandbox, process manager, and real-time telemetry HUD (<15ms IPC latency)",
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
    body: "A production-quality, full-stack AI Resume Portal engineered with futuristic dark glassmorphic aesthetics and smooth micro-interactions. Enables recruiters to explore credentials interactively, inspect a high-fidelity PDF layout with real-time keyword highlights, and converse with Atlas AI—an intelligent agent powered by Gemini 3.5 Flash, dynamic vector embeddings, Dual-Engine retrieval, and Server-Sent Events (SSE) word-by-word streaming.",
    metrics: [
      { val: "< 18ms", label: "SSE Stream Latency", subText: "Word-by-word token delivery", badge: "STREAMING" },
      { val: "0ms", label: "PDF Layout Shift", subText: "Canvas text highlight sync", badge: "PRECISION" },
      { val: "1,864", label: "Document Chunks", subText: "Gemini Embedding 2 Preview", badge: "VECTOR INDEX" },
      { val: "Dual Engine", label: "Vector + Keyword", subText: "Cosine similarity + BM25", badge: "RETRIEVAL" },
    ],
    challenges: [
      "Preventing semantic search degradation on hyper-specific resume queries (e.g., specific job dates vs tech stack names).",
      "Calculating precise PDF canvas bounding boxes for real-time keyword highlights without causing UI lag during <18ms SSE LLM streaming.",
    ],
    solutions: [
      "Developed Dual-Engine Search combining Gemini 3.5 Flash vector embeddings (cosine similarity) with BM25 keyword fallback.",
      "Engineered an SSE streaming queue with low-latency client state hydration and PDF text layer alignment.",
    ],
    interviewDeepDive: [
      "Designing hybrid vector-keyword retrieval pipelines to handle domain-specific terminology without vector drift.",
      "Implementing zero-layout-shift PDF text highlighting using canvas overlays synced to search terms.",
    ],
    highlights: [
      "Dual-Engine Search: Gemini Embedding preview with cosine similarity + keyword fallback",
      "Interactive PDF Viewer: Real-time keyword highlight, zoom controls, and instant printable layout",
      "SaaS Recruiter Console: Real-time telemetry, session metrics, and interactive area charts",
      "Floating Atlas AI Chatbot: SSE streaming (<18ms token latency), confidence scores & citations",
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
    badge: "Production RAG Benchmarking Harness",
    title: "ApexRAG",
    tagline: "Production-Grade RAG Evaluation & 5-Strategy Benchmarking Harness ($0 Cost)",
    body: "A research-grade RAG evaluation harness benchmarking 5 retrieval strategies (Simple BM25, Semantic Vector, Hybrid RRF, Cross-Encoder Rerank, and Learned ML Router) across 100 human-verified Q&A pairs on React documentation — operating entirely on local CPU hardware at $0 marginal infrastructure cost.",
    metrics: [
      { val: "61% → 85%", label: "Recall@4 Accuracy", subText: "Cross-Encoder Re-Ranker (+24% gain)", badge: "BENCHMARK" },
      { val: "$0.00", label: "Marginal Cost", subText: "100% Local CPU & ChromaDB", badge: "INFRASTRUCTURE" },
      { val: "2,580", label: "Corpus Chunks", subText: "React v17 (716) & react.dev (1,864)", badge: "CORPUS" },
      { val: "100 Pairs", label: "Human Q&A Eval", subText: "0% synthetic data in eval set", badge: "GROUND TRUTH" },
    ],
    challenges: [
      "Temporal semantic drift between React legacy v17 class docs (`componentDidMount`) and modern hooks docs (`useEffect`) causing BM25 Recall@4 to drop to 61%.",
      "Score scale incompatibility: BM25 scores are unbounded [0, ∞) while Cosine similarity is bounded [-1, 1], breaking naive weighted score blending.",
      "Document stem collisions across repos (e.g. `state.md` existing in both legacy and current doc structures).",
    ],
    solutions: [
      "Achieved accuracy progression: Simple BM25 (61%) ➔ Semantic Vector (71%) ➔ Hybrid RRF (81%) ➔ Cross-Encoder Re-Ranker (85% Recall@4).",
      "Implemented Reciprocal Rank Fusion (RRF, k=60) operating on ordinal rank positions, making merging corpus-agnostic without hyperparameter tuning.",
      "Created path-relative globally unique `doc_id` indexing (`reactjs_org__content__docs__state`) to eliminate 100% of index overwrites.",
      "Engineered a scikit-learn LogisticRegression Strategy Router trained on evaluation failure logs (~62% routing accuracy).",
    ],
    interviewDeepDive: [
      "Why Reciprocal Rank Fusion (RRF, k=60) mathematically outperforms weighted score averaging when merging sparse (BM25) and dense (vector) metrics.",
      "Causal failure attribution matrix: diagnosing Retrieval Miss (74%) vs Rank Error (13%) vs Chunk Boundary (0%) vs Hallucination (0%).",
      "Building a dual-model local faithfulness debate engine (`llama3.1:8b` vs `phi3:mini`) to eliminate single-LLM judge self-preference bias (+8–12% false positive rate).",
    ],
    highlights: [
      "5 Retrieval Strategies benchmarked (61% ➔ 85% Recall@4 progression with Cross-Encoder)",
      "100% Zero-Cloud $0.00 local infra with ChromaDB, rank_bm25, sentence-transformers, and Ollama",
      "Learned ML Strategy Router & Dual-LLM Faithfulness Debate Engine",
      "Corpus Drift Detector monitoring vector centroid shifts with automated CI alerts",
    ],
    tags: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "Sentence-Transformers",
      "RAG Evaluation",
      "Ollama",
      "Scikit-Learn",
    ],
    githubUrl: "https://github.com/kartik-012/apex-rag",
    demoUrl: "https://github.com/kartik-012/apex-rag",
  },
  {
    n: "04",
    badge: "Model Context Protocol & Saga Engine",
    title: "GitHub MCP Toolkit",
    tagline: "Enterprise Model Context Protocol (MCP) Server with Two-Phase Auth & Saga Rollbacks",
    body: "Production-grade Model Context Protocol (MCP) server exposing 12+ tools for autonomous LLM GitHub repository management. Features a two-phase preview-token confirmation flow for bulk actions, a file-backed Saga transaction journal for atomic rollbacks, a pure-Python TF-IDF vector engine, and a declarative ABAC policy engine.",
    metrics: [
      { val: "62% → 98%", label: "Tool Selection Accuracy", subText: "Evaluated across 50 benchmark queries (+36% gain)", badge: "SELECTION ACCURACY" },
      { val: "0%", label: "Blind Bulk Mutations", subText: "Eliminated 100% of unverified writes (-14% baseline)", badge: "SAFETY GUARDRAIL" },
      { val: "86% → 100%", label: "Local LLM Usable Output", subText: "Defensive JSON parser recovery (llama3.2:1b)", badge: "TRIAGE RECOVERY" },
      { val: "12 Tools", label: "Executable MCP Schema", subText: "Saga Pattern append-only compensation journal", badge: "ARCHITECTURE" },
    ],
    challenges: [
      "Tool selection accuracy was capped at 62% due to overlapping trigger bounds between `get_open_issues` and `search_issues`.",
      "Autonomous LLMs executed unintended bulk write mutations in 14% of test cases when given standard boolean `confirmed=True` prompts.",
      "Local 1B model (`llama3.2:1b`) had a 14% JSON schema violation failure rate on raw first-pass triage output.",
      "Class-level CircuitBreaker singleton created cross-test state pollution in multi-instance client deployments.",
    ],
    solutions: [
      "Sharpened docstring trigger bounds and error handling, boosting MCP Tool Selection Accuracy from 62% to 98% (49/50 passed in eval harness).",
      "Engineered Preview-Token Two-Phase protocol with SHA256 tokens (`SHA256(repo + sorted_issues + label)[:16]`, 5-min TTL), eliminating 100% of blind bulk mutations.",
      "Implemented defensive regex JSON parsing with rule-based fallback, recovering 100% of local LLM triage outputs (from 86% baseline).",
      "Engineered an append-only Saga transaction journal (`transactions.json`) with inverse compensation maps for atomic `undo_last_action` rollbacks.",
      "Refactored CircuitBreaker to per-instance lifecycles and enforced Pydantic schema contract validations.",
    ],
    interviewDeepDive: [
      "Quantifying tool selection accuracy gains (62% ➔ 98%) through docstring optimization and benchmark harness engineering.",
      "Designing cryptographic preview tokens to eliminate LLM non-determinism in destructive bulk write actions.",
      "Applying the Saga pattern for zero-database transaction compensation in Model Context Protocol (MCP) servers.",
      "Building a lightweight pure-Python TF-IDF vector engine (`vector_engine.py`) avoiding a 300MB+ C-extension ML footprint.",
    ],
    highlights: [
      "Two-phase preview-token protocol eliminating 100% of blind bulk mutations (0% failure rate)",
      "Tool selection accuracy boosted from 62% to 98% across 50 evaluation harness benchmark queries",
      "Saga pattern append-only transaction journal enabling automated action undo (`undo_last_action`)",
      "Pure-Python TF-IDF cosine similarity vector engine for duplicate issue detection (zero ML dependencies)",
    ],
    tags: [
      "Python",
      "MCP Protocol",
      "FastAPI",
      "Pydantic",
      "TF-IDF Engine",
      "ABAC Policy",
      "Saga Pattern",
    ],
    githubUrl: "https://github.com/kartik-012/github-mcp-toolkit",
    demoUrl: "https://github.com/kartik-012/github-mcp-toolkit",
  },
  {
    n: "05",
    badge: "Enterprise LLM Evaluation",
    title: "RagaAI Catalyst",
    tagline: "Full-Stack Enterprise LLM Evaluation & Benchmarking Platform",
    body: "Architected a full-stack platform scoring LLM outputs across faithfulness, relevance, toxicity, and correctness. Integrated five LLM providers (GPT-4, Claude 3.5, Gemini, Llama 3, Mistral) behind a unified REST API with WebSocket streaming for real-time benchmark telemetry and automated regression testing.",
    metrics: [
      { val: "99.4%", label: "Scoring Accuracy", subText: "Across 4 evaluation dimensions", badge: "ACCURACY" },
      { val: "5 LLMs", label: "Orchestrated Providers", subText: "GPT-4, Claude, Gemini, Llama, Mistral", badge: "INTEGRATION" },
      { val: "< 45ms", label: "WebSocket Telemetry", subText: "Real-time benchmark streaming", badge: "LATENCY" },
      { val: "100%", label: "Toxicity Audit Rate", subText: "Automated regression testing", badge: "GUARDRAIL" },
    ],
    challenges: [
      "High latency and API rate-limiting when scoring high-throughput LLM responses concurrently across 5 external providers.",
      "Managing non-deterministic scoring outputs across heterogeneous model architectures.",
    ],
    solutions: [
      "Constructed an asynchronous worker queue in FastAPI with WebSocket streaming (<45ms telemetry latency) for real-time scoring telemetry.",
      "Implemented circuit breakers and exponential backoff retry handlers for external provider APIs.",
    ],
    interviewDeepDive: [
      "Architecting asynchronous worker queues for multi-provider LLM benchmarking.",
      "Real-time evaluation streaming using WebSockets for live regression dashboards.",
    ],
    highlights: [
      "Unified REST API orchestrating 5 leading LLM providers (99.4% scoring accuracy)",
      "WebSocket streaming with real-time multi-metric evaluation (<45ms latency)",
      "Automated regression auditing and toxicity mitigation guardrails",
    ],
    tags: ["Python", "FastAPI", "React.js", "MongoDB", "LLMs", "WebSockets"],
    githubUrl: "https://github.com/kartik-012/ragaai-catalyst",
    demoUrl: "https://github.com/kartik-012/ragaai-catalyst",
  },
  {
    n: "06",
    badge: "Multi-Agent Orchestration",
    title: "AI Debate Arena",
    tagline: "Autonomous Multi-Model Debate & Courtroom Visualizer",
    body: "An AI-powered multi-agent debate platform with real-time argument generation and interactive courtroom visualization. Integrated language model APIs (Gemini, GPT-4, Claude) for intelligent persona synthesis and counter-argumentation. Designed a responsive courtroom frontend in React and TailwindCSS with FastAPI backend and live WebSocket streaming.",
    metrics: [
      { val: "3 Agents", label: "Debate Personas", subText: "Gemini, GPT-4o & Claude 3.5 Sonnet", badge: "MULTI-MODEL" },
      { val: "< 30ms", label: "Sentiment Overlay", subText: "Continuous stance & tone scoring", badge: "REALTIME" },
      { val: "100%", label: "State Synchronization", subText: "Live WebSocket courtroom sync", badge: "WEBSOCKET" },
      { val: "3-Tier", label: "Judge Scoring Rubric", subText: "Automated argument evaluation", badge: "AUDITING" },
    ],
    challenges: [
      "Agent synchronization and avoiding context degradation during multi-turn competitive debates between opposing LLM personas.",
      "Ensuring real-time sentiment scoring without introducing latency to argument generation streams.",
    ],
    solutions: [
      "Built a dynamic turn-taking state machine with persona prompt conditioning and memory buffers.",
      "Added continuous sentiment and stance scoring overlays via WebSockets (<30ms overlay latency).",
    ],
    interviewDeepDive: [
      "Multi-agent state orchestration algorithms for turn-taking personas.",
      "Real-time prompt injection resistance in competitive multi-agent arenas.",
    ],
    highlights: [
      "Autonomous multi-agent turn-taking and persona synthesis",
      "Real-time WebSocket streaming with sentiment analysis overlays (<30ms overlay latency)",
      "Automated judge scoring and 3-tier rubric evaluation system",
    ],
    tags: ["React.js", "FastAPI", "MongoDB", "Multi-Agent", "Gemini API", "TailwindCSS"],
    githubUrl: "https://github.com/kartikraikar2005/debate-arena",
    demoUrl: "https://github.com/kartikraikar2005/debate-arena",
  },
  {
    n: "07",
    badge: "Deep Learning Internals",
    title: "NumPyGPT From Scratch",
    tagline: "Zero-Framework GPT Transformer Built from Mathematical First Principles",
    body: "A complete GPT-style Transformer model implemented completely from scratch without external ML frameworks (no PyTorch, no TensorFlow). Manually engineered Matrix Multiplication, 8-Head Multi-Head Attention, Layer Normalization, Softmax, FeedForward layers, and Backpropagation. Includes an interactive visualizer for live activation matrices and attention heatmaps.",
    metrics: [
      { val: "0%", label: "ML Frameworks", subText: "0 PyTorch, 0 TensorFlow", badge: "FIRST PRINCIPLES" },
      { val: "8 Heads", label: "Multi-Head Attention", subText: "Manual Causal Masking", badge: "ATTENTION" },
      { val: "384-dim", label: "Vector Embedding", subText: "Analytical backpropagation gradients", badge: "GRADIENTS" },
      { val: "100%", label: "Pure Matrix Math", subText: "Manual Softmax & LayerNorm", badge: "IMPLEMENTATION" },
    ],
    challenges: [
      "Numerical instability (exploding/vanishing gradients) during manual backpropagation without framework autograd.",
      "High computational complexity of manual matrix operations in pure code.",
    ],
    solutions: [
      "Derived manual analytical gradients for scaled dot-product attention and layer norm.",
      "Engineered optimized matrix multiplication routines and custom causal masking vectors.",
    ],
    interviewDeepDive: [
      "Mathematical derivation of backpropagation through 8-head multi-head attention.",
      "Manual implementation of layer normalization and causal masking without ML frameworks.",
    ],
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
  const [expandedTabs, setExpandedTabs] = useState<Record<string, "highlights" | "challenges" | "solutions" | "interview">>(
    {
      "01": "highlights",
      "02": "highlights",
      "03": "highlights",
      "04": "highlights",
      "05": "highlights",
      "06": "highlights",
      "07": "highlights",
    }
  );

  const setTab = (n: string, tab: "highlights" | "challenges" | "solutions" | "interview") => {
    setExpandedTabs((prev) => ({ ...prev, [n]: tab }));
  };

  return (
    <section id="projects" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <span
          className="reveal inline-block rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground"
          data-reveal
        >
          Featured AI Systems (7 Quantitative Benchmarks)
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
          A selection of production-grade AI systems, LLM evaluation pipelines, RAG benchmarking harnesses,
          MCP servers, and zero-framework transformers architected by Kartik Raikar. Click tabs on any project to explore metrics, challenges, solutions, and interview deep dives.
        </p>

        <div className="mt-16 space-y-12">
          {PROJECTS.map((p, i) => {
            const activeTab = expandedTabs[p.n] || "highlights";

            return (
              <article
                key={p.n}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 80}ms` }}
                className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_0_70px_-25px_color-mix(in_oklab,var(--primary)_75%,transparent)] md:p-10"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative">
                  {/* Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-4">
                    <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                      <span className="animate-pulse-ring inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      {p.badge}
                    </p>
                    <span className="font-mono text-xs font-bold text-muted-foreground/60">
                      // SYSTEM #{p.n} OF 07
                    </span>
                  </div>

                  {/* Title & Tagline */}
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

                  {/* Body Overview */}
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground/90">
                    {p.body}
                  </p>

                  {/* Quantitative Benchmark Stats Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {p.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="group/metric relative overflow-hidden rounded-2xl border border-primary/25 bg-secondary/30 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-secondary/50"
                      >
                        <div className="flex items-center justify-between">
                          {m.badge && (
                            <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[8px] font-bold uppercase text-primary">
                              {m.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 font-display text-xl font-black text-foreground sm:text-2xl">
                          {m.val}
                        </p>
                        <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {m.label}
                        </p>
                        <p className="mt-1 text-[9px] text-muted-foreground/75 leading-tight">
                          {m.subText}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Details Navigation Tabs */}
                  <div className="mt-7">
                    <div className="flex flex-wrap gap-2 border-b border-border/40 pb-2">
                      <button
                        onClick={() => setTab(p.n, "highlights")}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                          activeTab === "highlights"
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        ✦ Technical Highlights
                      </button>
                      <button
                        onClick={() => setTab(p.n, "challenges")}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                          activeTab === "challenges"
                            ? "bg-amber-500 text-black shadow-sm"
                            : "bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        ⚡ Challenges Faced ({p.challenges.length})
                      </button>
                      <button
                        onClick={() => setTab(p.n, "solutions")}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                          activeTab === "solutions"
                            ? "bg-emerald-600 text-white shadow-sm"
                            : "bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        🛠️ Issues &amp; Solutions ({p.solutions.length})
                      </button>
                      <button
                        onClick={() => setTab(p.n, "interview")}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                          activeTab === "interview"
                            ? "bg-violet-600 text-white shadow-sm"
                            : "bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        🎴 Senior Interview Cards
                      </button>
                    </div>

                    {/* Tab Content Box */}
                    <div className="mt-3 min-h-[120px] rounded-2xl border border-border/40 bg-secondary/30 p-4.5 transition-all duration-300">
                      {activeTab === "highlights" && (
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/75">
                            Key Quantitative Highlights:
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
                      )}

                      {activeTab === "challenges" && (
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                            Engineering Bottlenecks &amp; Baseline Metrics:
                          </p>
                          <ul className="space-y-2.5 text-xs text-muted-foreground">
                            {p.challenges.map((c, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-amber-500 font-bold shrink-0">⚠️</span>
                                <span className="leading-relaxed">{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {activeTab === "solutions" && (
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                            Quantified Engineering Solutions &amp; Measured Impact:
                          </p>
                          <ul className="space-y-2.5 text-xs text-muted-foreground">
                            {p.solutions.map((s, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-emerald-500 font-bold shrink-0">✓</span>
                                <span className="leading-relaxed">{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {activeTab === "interview" && (
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-violet-400">
                            Senior Staff Architect Interview Talking Cards:
                          </p>
                          <ul className="space-y-2.5 text-xs text-muted-foreground">
                            {p.interviewDeepDive.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-violet-400 font-bold shrink-0">🎴</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}


