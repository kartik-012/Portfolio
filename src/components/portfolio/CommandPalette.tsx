import { useState, useEffect, useRef, useMemo } from "react";
import { toast } from "sonner";

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Actions" | "Projects" | "Navigation";
  icon: string;
  action: () => void;
  keywords?: string[];
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenResume }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const navigateTo = (hash: string) => {
    onClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = hash;
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    onClose();
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`, {
      description: text,
      duration: 3000,
    });
  };

  const items: CommandItem[] = useMemo(
    () => [
      // Quick Actions
      {
        id: "view-resume",
        title: "View Official Resume",
        subtitle: "In-browser PDF preview with instant download",
        category: "Actions",
        icon: "📄",
        keywords: ["cv", "resume", "pdf", "experience", "education"],
        action: () => {
          onClose();
          onOpenResume();
        },
      },
      {
        id: "copy-email",
        title: "Copy Email Address",
        subtitle: "kartikraikar2005@gmail.com",
        category: "Actions",
        icon: "✉️",
        keywords: ["email", "contact", "gmail", "message"],
        action: () => copyToClipboard("kartikraikar2005@gmail.com", "Email"),
      },
      {
        id: "copy-phone",
        title: "Copy Phone Number",
        subtitle: "+91 8660910358",
        category: "Actions",
        icon: "📞",
        keywords: ["phone", "call", "mobile", "whatsapp"],
        action: () => copyToClipboard("+91 8660910358", "Phone number"),
      },
      {
        id: "open-github",
        title: "Open GitHub Profile",
        subtitle: "github.com/kartik-012",
        category: "Actions",
        icon: "🐙",
        keywords: ["github", "git", "code", "repos", "repositories"],
        action: () => {
          onClose();
          window.open("https://github.com/kartik-012", "_blank");
        },
      },
      {
        id: "open-linkedin",
        title: "Open LinkedIn Profile",
        subtitle: "linkedin.com/in/kartik-raikar-kr",
        category: "Actions",
        icon: "💼",
        keywords: ["linkedin", "social", "network", "profile"],
        action: () => {
          onClose();
          window.open("https://www.linkedin.com/in/kartik-raikar-kr", "_blank");
        },
      },

      // Featured Projects
      {
        id: "proj-aiops",
        title: "01 • AIOps Root Cause Correlator",
        subtitle: "0.78s resolution • EWMA DAG anomaly detection",
        category: "Projects",
        icon: "⚡",
        keywords: ["aiops", "incident", "rca", "networkx", "threejs", "postgres"],
        action: () => navigateTo("#projects"),
      },
      {
        id: "proj-versionrag",
        title: "02 • VersionRAG Documentation Intel",
        subtitle: "0% contamination • AST diff engine • pgvector",
        category: "Projects",
        icon: "📚",
        keywords: ["versionrag", "rag", "ast", "diff", "vector", "postgres"],
        action: () => navigateTo("#projects"),
      },
      {
        id: "proj-mcp",
        title: "03 • GitHub MCP Toolkit",
        subtitle: "Two-Phase preview tokens • Saga rollbacks",
        category: "Projects",
        icon: "🛠️",
        keywords: ["mcp", "model context protocol", "server", "saga", "github"],
        action: () => navigateTo("#projects"),
      },
      {
        id: "proj-apexrag",
        title: "04 • ApexRAG Evaluation Benchmark",
        subtitle: "5 retrieval strategies • Cross-Encoder • $0 infra",
        category: "Projects",
        icon: "🎯",
        keywords: ["apexrag", "benchmark", "evaluation", "rrf", "chromadb", "ollama"],
        action: () => navigateTo("#projects"),
      },
      {
        id: "proj-atlas-resume",
        title: "05 • Atlas AI Resume Portal",
        subtitle: "Gemini 3.5 Flash • Dual-Engine RAG • SSE streaming",
        category: "Projects",
        icon: "🚀",
        keywords: ["atlas", "resume", "portal", "gemini", "sse", "streaming"],
        action: () => navigateTo("#projects"),
      },
      {
        id: "proj-atlasos",
        title: "06 • AtlasOS Web AI Operating System",
        subtitle: "Windowed multitasking • Virtual terminal • Agent co-pilots",
        category: "Projects",
        icon: "💻",
        keywords: ["atlasos", "os", "desktop", "terminal", "workspace"],
        action: () => navigateTo("#projects"),
      },
      {
        id: "proj-debate",
        title: "07 • AI Debate Arena",
        subtitle: "Autonomous multi-agent courtroom with real-time judging",
        category: "Projects",
        icon: "🏛️",
        keywords: ["debate", "arena", "multi-agent", "courtroom", "gemini", "gpt4"],
        action: () => navigateTo("#projects"),
      },
      {
        id: "proj-ragaai",
        title: "08 • RagaAI Catalyst Platform",
        subtitle: "Enterprise LLM evaluation across 5 model providers",
        category: "Projects",
        icon: "📊",
        keywords: ["ragaai", "catalyst", "evaluation", "faithfulness", "toxicity"],
        action: () => navigateTo("#projects"),
      },
      {
        id: "proj-numpygpt",
        title: "09 • NumPyGPT From Scratch",
        subtitle: "Zero ML frameworks • Pure matrix math & backpropagation",
        category: "Projects",
        icon: "🧠",
        keywords: ["numpygpt", "transformer", "attention", "first principles"],
        action: () => navigateTo("#projects"),
      },
      {
        id: "proj-calculator",
        title: "10 • Interactive Calculator",
        subtitle: "Clean glassmorphic UI with full keyboard shortcuts",
        category: "Projects",
        icon: "🔢",
        keywords: ["calculator", "frontend", "math", "keyboard"],
        action: () => navigateTo("#projects"),
      },

      // Section Navigation
      {
        id: "nav-home",
        title: "Home / Hero Section",
        subtitle: "Top overview & live cyber telemetry HUD",
        category: "Navigation",
        icon: "🏠",
        keywords: ["home", "top", "hero"],
        action: () => navigateTo("#home"),
      },
      {
        id: "nav-about",
        title: "Engineering Profile & Bio",
        subtitle: "VTU AIML leadership & core technical competencies",
        category: "Navigation",
        icon: "👤",
        keywords: ["about", "bio", "experience", "vtu", "leadership"],
        action: () => navigateTo("#about"),
      },
      {
        id: "nav-skills",
        title: "Technical Skillset",
        subtitle: "Categorized production competencies & tool tiers",
        category: "Navigation",
        icon: "⚡",
        keywords: ["skills", "python", "fastapi", "react", "docker", "postgres"],
        action: () => navigateTo("#skills"),
      },
      {
        id: "nav-projects",
        title: "All Featured Projects",
        subtitle: "10 quantitative engineering benchmarks & interview talking points",
        category: "Navigation",
        icon: "🚀",
        keywords: ["projects", "work", "systems", "code"],
        action: () => navigateTo("#projects"),
      },
      {
        id: "nav-leadership",
        title: "Leadership & Achievements",
        subtitle: "VP role & national hackathons (IIIT Dharwad, NITTE)",
        category: "Navigation",
        icon: "🏆",
        keywords: ["leadership", "hackathons", "velora", "iiit", "nitte"],
        action: () => navigateTo("#leadership"),
      },
      {
        id: "nav-certifications",
        title: "Verified Certifications (23 Technical Credentials)",
        subtitle: "Oracle GenAI & Agentic AI, Apache Kafka, AWS ML, Cisco, SPARK IIT",
        category: "Navigation",
        icon: "📜",
        keywords: ["certifications", "oracle", "kafka", "apache kafka", "aws", "tata", "credentials", "sparkiit", "cisco"],
        action: () => navigateTo("#certifications"),
      },
      {
        id: "nav-contact",
        title: "Contact & Connect",
        subtitle: "Direct email, phone, and professional networks",
        category: "Navigation",
        icon: "📫",
        keywords: ["contact", "hire", "email", "phone"],
        action: () => navigateTo("#contact"),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onClose, onOpenResume]
  );

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
        (item.keywords && item.keywords.some((k) => k.toLowerCase().includes(q)))
    );
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation inside palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(
        (prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length)
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-[110] flex items-start justify-center p-3 pt-[12vh] sm:p-6 sm:pt-[15vh]"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-200 animate-in fade-in"
      />

      {/* Palette Modal */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-primary/30 bg-card/95 shadow-[0_25px_90px_-20px_color-mix(in_oklab,var(--primary)_50%,transparent)] backdrop-blur-2xl animate-in zoom-in-95 duration-200">
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 border-b border-border/60 px-5 py-4">
          <span className="text-xl text-primary font-bold">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command, project, or section... (e.g. 'resume', 'rag', 'email')"
            className="w-full bg-transparent font-display text-sm sm:text-base font-semibold text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
          />
          <kbd className="hidden rounded-lg border border-border/80 bg-secondary/80 px-2 py-0.5 text-[10px] font-mono font-bold text-muted-foreground sm:inline-block">
            ESC to close
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[55vh] overflow-y-auto p-2.5 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-muted-foreground">
              <p className="text-2xl mb-2">🔎</p>
              No matching commands or projects found for &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-all ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-md glow-red"
                      : "text-foreground hover:bg-secondary/60"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <p className="font-display text-xs sm:text-sm font-bold truncate">
                        {item.title}
                      </p>
                      {item.subtitle && (
                        <p
                          className={`text-[11px] truncate ${
                            isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}
                        >
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "border border-border/60 bg-secondary/80 text-muted-foreground"
                    }`}
                  >
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-border/40 bg-secondary/40 px-5 py-2.5 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
          <span className="font-mono text-[10px]">Kartik Raikar • Command Palette</span>
        </div>
      </div>
    </div>
  );
}
