import { useState, useEffect, useRef, MouseEvent } from "react";

export function TelemetryHUD() {
  const [timeStr, setTimeStr] = useState("");
  const [activeModelIdx, setActiveModelIdx] = useState(0);

  const models = ["GPT-4o", "Claude 3.5", "Gemini 1.5", "Llama 3.3", "Mistral"];

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeStr(new Intl.DateTimeFormat("en-GB", options).format(now) + " IST");
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Model cycling
  useEffect(() => {
    const modelInterval = setInterval(() => {
      setActiveModelIdx((prev) => (prev + 1) % models.length);
    }, 2200);
    return () => clearInterval(modelInterval);
  }, [models.length]);

  return (
    <div
      className="reveal mt-12 grid grid-cols-1 gap-3.5 border-t border-border/50 pt-6 sm:grid-cols-2 lg:grid-cols-4"
      data-reveal
      style={{ ["--reveal-delay" as string]: "380ms" }}
    >
      {/* 1. LOCATION CARD with Live GPS & IST Clock */}
      <HUDCard
        badge="GEO TELEMETRY"
        title="Belagavi, Karnataka"
        sub={timeStr || "Loading..."}
        icon="📍"
        accent="from-rose-500/20 via-primary/10 to-transparent"
        borderGlow="rgba(244, 63, 94, 0.4)"
      >
        <div className="mt-2.5 flex items-center justify-between border-t border-border/40 pt-2 text-[10px] text-muted-foreground font-mono">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-500" />
            </span>
            15.8497° N, 74.4977° E
          </span>
          <span className="text-primary font-bold">IN</span>
        </div>
      </HUDCard>

      {/* 2. STATUS CARD with Live Availability Beacon */}
      <HUDCard
        badge="AVAILABILITY"
        title="Open for AI / ML Roles"
        sub="Full-Time / Remote / Onsite"
        icon="⚡"
        accent="from-emerald-500/20 via-teal-500/10 to-transparent"
        borderGlow="rgba(16, 185, 129, 0.4)"
      >
        <div className="mt-2.5 flex items-center justify-between border-t border-border/40 pt-2 text-[10px] font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ready to Deploy
          </span>
          <span className="text-muted-foreground">0ms latency</span>
        </div>
      </HUDCard>

      {/* 3. EDUCATION & CGPA METER */}
      <HUDCard
        badge="ACADEMICS"
        title="B.E. AI & ML"
        sub="Jain College of Engineering"
        icon="🎓"
        accent="from-violet-500/20 via-purple-500/10 to-transparent"
        borderGlow="rgba(168, 85, 247, 0.4)"
      >
        <div className="mt-2.5 space-y-1 border-t border-border/40 pt-2 text-[10px] font-mono">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Cumulative CGPA</span>
            <span className="font-bold text-violet-400">8.5 / 10.0</span>
          </div>
          {/* Animated CGPA progress bar */}
          <div className="h-1 w-full overflow-hidden rounded-full bg-secondary/80">
            <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-rose-500 w-[85%] transition-all duration-1000" />
          </div>
        </div>
      </HUDCard>

      {/* 4. SYSTEMS & ACTIVE MODEL STREAM */}
      <HUDCard
        badge="CONNECTED LLMs"
        title="5+ Models Unified"
        sub="REST &amp; WebSocket APIs"
        icon="🧠"
        accent="from-amber-500/20 via-rose-500/10 to-transparent"
        borderGlow="rgba(245, 158, 11, 0.4)"
      >
        <div className="mt-2.5 flex items-center justify-between border-t border-border/40 pt-2 text-[10px] font-mono">
          <span className="text-muted-foreground">Active Model:</span>
          <span className="rounded bg-primary/20 px-1.5 py-0.5 font-bold text-primary transition-all duration-300">
            {models[activeModelIdx]}
          </span>
        </div>
      </HUDCard>
    </div>
  );
}

interface HUDCardProps {
  badge: string;
  title: string;
  sub: string;
  icon: string;
  accent: string;
  borderGlow: string;
  children?: React.ReactNode;
}

function HUDCard({ badge, title, sub, icon, accent, borderGlow, children }: HUDCardProps) {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_12px_40px_-15px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      {mousePos && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, ${borderGlow}, transparent 70%)`,
          }}
        />
      )}

      {/* Cybernetic scanning light ray */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${borderGlow} 0%, transparent 40%)`,
        }}
      />

      {/* Ambient Gradient Background */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-30`}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-muted-foreground/80">
            {badge}
          </span>
          <span className="text-xs transition-transform duration-300 group-hover:scale-125">
            {icon}
          </span>
        </div>

        <p className="mt-2 font-display text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {title}
        </p>

        <p className="text-[11px] font-medium text-muted-foreground/90">{sub}</p>

        {children}
      </div>
    </div>
  );
}
