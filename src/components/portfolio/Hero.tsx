import { useState, useEffect } from "react";
import { NeuralCanvas } from "./NeuralCanvas";
import { ProjectCardStack } from "./ProjectCardStack";
import { TelemetryHUD } from "./TelemetryHUD";

const ROTATING_PHRASES = [
  "AIOps Root Cause Correlator",
  "VersionRAG Documentation Intel",
  "GitHub MCP Protocol Server",
  "ApexRAG Benchmarking Engine",
  "Atlas AI Resume Portal",
  "AtlasOS AI Workspace",
  "AI Debate Arena Platform",
  "RagaAI Catalyst Platform",
  "NumPyGPT from Scratch",
  "Interactive Calculator",
];

interface HeroProps {
  onOpenResume?: () => void;
}

export function Hero({ onOpenResume }: HeroProps = {}) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPhraseIdx((prev) => (prev + 1) % ROTATING_PHRASES.length);
        setFade(true);
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[oklch(0.05_0.005_20)] pt-28 pb-16 md:pt-36"
    >
      {/* Dynamic Interactive Neural Network Canvas */}
      <NeuralCanvas />

      {/* Cybernetic Ambient Glow Layers */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,color-mix(in_oklab,var(--primary)_35%,transparent),transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-violet-600/15 blur-[130px]" />

      {/* Subtle Matrix Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, oklch(0.98 0 0) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.98 0 0) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl flex-col justify-between px-5 md:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Column: Big Bold Typography & Dynamic Animated Bio */}
          <div className="max-w-2xl">
            {/* Status & Identity pill with photo preview & shimmer animation */}
            <div
              className="reveal group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-primary/40 bg-card/85 p-1.5 pr-4.5 backdrop-blur-xl shadow-[0_0_30px_-5px_color-mix(in_oklab,var(--primary)_35%,transparent)] transition-all duration-300 hover:border-primary/70 hover:shadow-[0_0_40px_-5px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
              data-reveal
            >
              {/* Animated shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_3.5s_infinite] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-primary shadow-md ring-2 ring-primary/30">
                <img
                  src="/kartik.jpg"
                  alt="Kartik Raikar"
                  className="h-full w-full object-cover object-[center_48%] scale-110"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-primary-foreground">
                  Kartik Raikar • AI Engineer &amp; Architect
                </span>
              </div>
            </div>

            <h1
              className="reveal mt-6 font-display text-5xl font-black leading-[0.92] tracking-tight text-foreground sm:text-7xl lg:text-[5.4rem]"
              data-reveal
              style={{ ["--reveal-delay" as string]: "90ms" }}
            >
              Kartik Raikar
            </h1>

            {/* Dynamic Morphing Sub-headline */}
            <div
              className="reveal mt-4 min-h-[4rem] font-display text-2xl font-bold tracking-tight text-muted-foreground sm:text-3xl lg:text-[2.2rem]"
              data-reveal
              style={{ ["--reveal-delay" as string]: "160ms" }}
            >
              <span>Architecting </span>
              <span
                className={`inline-block text-gradient-red transition-all duration-300 ${
                  fade ? "translate-y-0 opacity-100 blur-none" : "translate-y-2 opacity-0 blur-xs"
                }`}
              >
                {ROTATING_PHRASES[phraseIdx]}
              </span>
              <span className="inline-block w-1.5 h-6 ml-1.5 bg-primary animate-pulse align-middle" />
            </div>

            <p
              className="reveal mt-5 max-w-xl text-base leading-relaxed text-muted-foreground/90 sm:text-lg"
              data-reveal
              style={{ ["--reveal-delay" as string]: "240ms" }}
            >
              Engineering autonomous AIOps incident engines, enterprise RAG architectures,
              MCP protocol servers, multi-agent debate arenas, and custom transformers from first principles.
              Specializing in Python, FastAPI, and React.js.
            </p>

            <div
              className="reveal mt-8 flex flex-wrap items-center gap-4"
              data-reveal
              style={{ ["--reveal-delay" as string]: "320ms" }}
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_0_35px_-8px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_55px_-5px_color-mix(in_oklab,var(--primary)_90%,transparent)] active:scale-95"
              >
                {/* Light reflection beam */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span>Explore Featured Systems</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-emerald-500/50 bg-emerald-500/10 px-6 py-3.5 text-sm font-semibold text-emerald-400 backdrop-blur-md transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.5)] active:scale-95 cursor-pointer"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="rounded-full border border-border/80 bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card hover:text-primary active:scale-95"
              >
                Get in Touch
              </a>

              <a
                href="https://github.com/kartik-012"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <span>GitHub</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            </div>

            {/* Recruiter Trust Proof Badges */}
            <div
              className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-border/40 pt-5 text-xs font-mono text-muted-foreground"
              data-reveal
              style={{ ["--reveal-delay" as string]: "360ms" }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span>Top-1 RCA: <strong className="text-foreground font-semibold">100% Precision</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_color-mix(in_oklab,var(--primary)_80%,transparent)]" />
                <span>RAG &amp; Sockets: <strong className="text-foreground font-semibold">&lt;0.8s Latency</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                <span>Certifications: <strong className="text-foreground font-semibold">24 Verified Credentials</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
                <span>Academics: <strong className="text-foreground font-semibold">8.5 CGPA (AIML VP)</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Floating Project Card Stack */}
          <div
            className="reveal-scale relative hidden lg:block"
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
          >
            <ProjectCardStack />
          </div>
        </div>

        {/* Live Cyber Telemetry HUD Bar with Interactive Hover Spotlight */}
        <TelemetryHUD />
      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 text-center">
        <a
          href="#about"
          className="group inline-flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
          <div className="flex h-7 w-4 justify-center rounded-full border border-border/80 p-0.5">
            <span className="h-1 w-1 rounded-full bg-primary animate-scroll-dot" />
          </div>
        </a>
      </div>
    </section>
  );
}
