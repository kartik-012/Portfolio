import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  isStreaming?: boolean;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  atlasos:
    "AtlasOS is an autonomous web-based AI operating system and intelligent workspace featuring windowed multitasking, terminal execution, file system sandbox, and autonomous co-pilot agents built with React 19 and FastAPI.",
  atlas:
    'Atlas AI Resume ("Talk with my Resume.") is a production-quality full-stack AI Resume Portal built with React 19, Express/Node, and Gemini 3.5 Flash. It features an interactive PDF viewer with real-time keyword highlights, Dual-Engine RAG (Gemini Embedding 2 Preview with cosine similarity + keyword fallback), Server-Sent Events (SSE) word-by-word streaming, Recruiter Telemetry Console with SVG area charts, and a RAG Index Studio for live document embedding.',
  apexrag:
    "ApexRAG is a production-grade RAG evaluation harness benchmarking 5 retrieval strategies (Simple BM25, Semantic Vector, Hybrid RRF, Cross-Encoder Rerank, and Learned ML Router) across 100 human-verified Q&A pairs on React documentation — operating at $0 marginal cost with ChromaDB, Ollama, and scikit-learn.",
  mcp:
    "GitHub MCP Toolkit is an enterprise Model Context Protocol (MCP) server with 12+ executable tools, featuring a Preview-Token Two-Phase protocol to eliminate blind LLM mutations, a file-backed Saga transaction journal for atomic rollbacks, a pure-Python TF-IDF vector engine, and an ABAC policy engine.",
  catalyst:
    "RagaAI Catalyst is an enterprise platform scoring LLM outputs across faithfulness, relevance, toxicity, and correctness with 5 model providers (GPT-4, Claude 3.5, Gemini, Llama 3, Mistral) via WebSocket streaming.",
  debate:
    "AI Debate Arena is a multi-agent courtroom platform with real-time argument generation, persona synthesis, and live WebSocket streaming between Gemini, GPT-4, and Claude.",
  numpygpt:
    "NumPyGPT is a full GPT-style transformer built completely from scratch using pure TypeScript/matrix math without ML frameworks — featuring 8-head multi-head attention, layer norm, and interactive attention weight visualization.",
  skills:
    "Technical profile: Python, FastAPI, React 19, Express.js, TypeScript, Neo4j, MongoDB, VectorDBs, Docker, and PyTorch. Maintaining an 8.5 CGPA in B.E. AI & ML at VTU.",
  contact:
    "You can reach Kartik at kartikraikar2005@gmail.com, on LinkedIn (linkedin.com/in/kartik-raikar-kr), or view his code on GitHub (github.com/kartik-012).",
};

const SUGGESTIONS = [
  { label: "⚡ ApexRAG", key: "apexrag" },
  { label: "🛠️ GitHub MCP", key: "mcp" },
  { label: "💻 AtlasOS", key: "atlasos" },
  { label: "🚀 Atlas AI Resume", key: "atlas" },
  { label: "⚡ RagaAI Catalyst", key: "catalyst" },
  { label: "🏛️ AI Debate Arena", key: "debate" },
  { label: "🧠 NumPyGPT", key: "numpygpt" },
];

export function AiChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "assistant",
      text: "Hi! I'm Kartik's AI Portfolio Assistant. Ask me about ApexRAG, GitHub MCP, AtlasOS, Atlas AI Resume, RagaAI Catalyst, AI Debate Arena, or NumPyGPT.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const streamAnswer = (fullText: string) => {
    setIsTyping(true);
    const msgId = "msg-" + Date.now();

    setMessages((prev) => [
      ...prev,
      { id: msgId, sender: "assistant", text: "", isStreaming: true },
    ]);

    let i = 0;
    const interval = setInterval(() => {
      i += 3;
      const currentChunk = fullText.slice(0, i);

      setMessages((prev) =>
        prev.map((m) =>
          m.id === msgId ? { ...m, text: currentChunk, isStreaming: i < fullText.length } : m,
        ),
      );

      if (i >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 18);
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMsgId = "user-" + Date.now();
    setMessages((prev) => [...prev, { id: userMsgId, sender: "user", text: query }]);
    setInput("");

    // Determine best response
    const qLower = query.toLowerCase();
    let responseText =
      "Kartik is an AI Engineer specialized in LLM Evaluation, RAG pipelines, MCP servers, and Transformers. Check out his projects below or connect at kartikraikar2005@gmail.com!";

    if (qLower.includes("apex") || qLower.includes("benchmark") || qLower.includes("rrf") || qLower.includes("retrieval")) {
      responseText = KNOWLEDGE_BASE.apexrag;
    } else if (qLower.includes("mcp") || qLower.includes("toolkit") || qLower.includes("saga") || qLower.includes("preview")) {
      responseText = KNOWLEDGE_BASE.mcp;
    } else if (qLower.includes("atlasos") || qLower.includes("desktop") || qLower.includes("workspace") || qLower.includes("os")) {
      responseText = KNOWLEDGE_BASE.atlasos;
    } else if (
      qLower.includes("resume") ||
      qLower.includes("atlas") ||
      qLower.includes("terminal") ||
      qLower.includes("pdf")
    ) {
      responseText = KNOWLEDGE_BASE.atlas;
    } else if (
      qLower.includes("catalyst") ||
      qLower.includes("raga") ||
      qLower.includes("evaluation")
    ) {
      responseText = KNOWLEDGE_BASE.catalyst;
    } else if (qLower.includes("debate") || qLower.includes("courtroom") || qLower.includes("arena")) {
      responseText = KNOWLEDGE_BASE.debate;
    } else if (
      qLower.includes("numpy") ||
      qLower.includes("scratch") ||
      qLower.includes("transformer")
    ) {
      responseText = KNOWLEDGE_BASE.numpygpt;
    } else if (
      qLower.includes("skill") ||
      qLower.includes("edu") ||
      qLower.includes("cgpa") ||
      qLower.includes("stack")
    ) {
      responseText = KNOWLEDGE_BASE.skills;
    } else if (qLower.includes("contact") || qLower.includes("email") || qLower.includes("hire")) {
      responseText = KNOWLEDGE_BASE.contact;
    }

    setTimeout(() => {
      streamAnswer(responseText);
    }, 200);
  };

  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border/80 bg-card/85 p-5 shadow-[0_24px_70px_-20px_color-mix(in_oklab,var(--primary)_45%,transparent)] backdrop-blur-xl">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border/60 pb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </div>
          <div>
            <p className="font-display text-xs font-bold text-foreground">Kartik AI Agent</p>
            <p className="text-[10px] text-muted-foreground">Streaming LLM Assistant</p>
          </div>
        </div>

        <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
          v2.4 Online
        </span>
      </div>

      {/* Message Chat Feed */}
      <div
        ref={scrollRef}
        className="mt-3.5 flex h-[220px] flex-col gap-3 overflow-y-auto pr-1 text-xs scrollbar-thin"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                m.sender === "user"
                  ? "bg-primary text-primary-foreground font-medium rounded-br-xs"
                  : "border border-border/60 bg-background/80 text-foreground/90 rounded-bl-xs shadow-sm"
              }`}
            >
              {m.text}
              {m.isStreaming && (
                <span className="inline-block h-3.5 w-1.5 ml-1 animate-pulse bg-primary align-middle" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="mt-3 border-t border-border/50 pt-3">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">
          Quick Prompts:
        </p>
        <div className="flex flex-wrap gap-1.5">
          {SUGGESTIONS.map((s) => (
            <button
              key={s.key}
              onClick={() => handleSend(KNOWLEDGE_BASE[s.key])}
              disabled={isTyping}
              className="rounded-full border border-border/70 bg-secondary/50 px-2.5 py-1 text-[11px] font-medium text-foreground/80 transition-all hover:border-primary/60 hover:bg-primary/15 hover:text-foreground disabled:opacity-50"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="mt-3 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about Kartik..."
          disabled={isTyping}
          className="flex-1 rounded-full border border-border/80 bg-background/90 px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 disabled:opacity-40"
          aria-label="Send query"
        >
          ➔
        </button>
      </form>
    </div>
  );
}
