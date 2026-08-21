import { useState, MouseEvent } from "react";

interface AchievementItem {
  id: string;
  category: "leadership" | "hackathon";
  badge: string;
  badgeColor: string;
  icon: string;
  title: string;
  organization: string;
  locationDate: string;
  teamOrRole?: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string; icon: string }[];
  accentGlow: string;
  borderHover: string;
  glowColor: string;
  certificateImage?: string;
}

const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "vp-aiml-jce",
    category: "leadership",
    badge: "EXECUTIVE ROLE",
    badgeColor: "text-violet-300 bg-violet-500/15 border-violet-500/30",
    icon: "👑",
    title: "Vice President — Dept. of AI & ML",
    organization: "Jain College of Engineering, Belagavi",
    locationDate: "Belagavi  •  2025 – Present",
    teamOrRole: "Department Executive Council",
    description:
      "Elected as Vice President of the AI & Machine Learning Department. Spearheading departmental technical initiatives, leading student hackathons, organizing national workshops, and coordinating academic & technical programs for the entire department.",
    highlights: [
      "Led departmental initiatives & coordinated technical programs for all AIML students",
      "Organized coding bootcamps, workshops & inter-departmental innovation hackathons",
      "Primary student liaison with faculty, alumni networks & industry mentors",
    ],
    metrics: [
      { label: "Role", value: "VP", icon: "👑" },
      { label: "Department", value: "AI & ML", icon: "🧠" },
      { label: "Scope", value: "Academic", icon: "🎓" },
    ],
    accentGlow: "rgba(139, 92, 246, 0.2)",
    borderHover: "hover:border-violet-500/60",
    glowColor: "#8b5cf6",
  },
  {
    id: "iiit-dharwad-hack2future",
    category: "hackathon",
    badge: "NATIONAL HACKATHON",
    badgeColor: "text-sky-300 bg-sky-500/15 border-sky-500/30",
    icon: "🚀",
    title: "Hack2Future 2.0 — IIIT Dharwad",
    organization: "Indian Institute of Information Technology, Dharwad",
    locationDate: "IIIT Dharwad  •  04–05 April 2026",
    teamOrRole: "Team VELORA",
    certificateImage: "/certificates/iiit-dharwad-hack2future.jpg",
    description:
      "Certificate of Participation — National-Level Hackathon organized by IIIT Dharwad, IIC, IDRP, Infosys Research Park & Devfolio. Competed as part of Team VELORA, building AI/ML prototypes under intense time constraints.",
    highlights: [
      "Competed as Team VELORA in an intensive national-level hackathon sprint",
      "Designed & deployed rapid AI/ML prototypes under rigorous time constraints",
      "Organized by IIIT Dharwad, IIC, IDRP, Devfolio & Infosys Research Park",
    ],
    metrics: [
      { label: "Team", value: "VELORA", icon: "⚡" },
      { label: "Format", value: "National", icon: "🏆" },
      { label: "Host", value: "IIITD", icon: "🏛️" },
    ],
    accentGlow: "rgba(2, 132, 199, 0.2)",
    borderHover: "hover:border-sky-500/60",
    glowColor: "#0284c7",
  },
  {
    id: "nitte-code-for-innovex",
    category: "hackathon",
    badge: "24-HR HACKATHON",
    badgeColor: "text-amber-300 bg-amber-500/15 border-amber-500/30",
    icon: "⚡",
    title: "Code for INNOVEX — NITTE University",
    organization: "NMAM Institute of Technology, Mangalore",
    locationDate: "NITTE Deralakatte  •  21–22 Nov 2025",
    teamOrRole: "National Competitor",
    certificateImage: "/certificates/nitte-code-for-innovex.jpg",
    description:
      "Certificate of Appreciation — 24-Hour National-Level Hackathon organized by the NSS IT Wing at NMAM Institute of Technology (NITTE University). Architected and presented full-stack solutions to university & industry judges.",
    highlights: [
      "Continuous 24-hour national-level software engineering hackathon",
      "Architected, built & presented full-stack solutions to industry judges",
      "Awarded Certificate of Appreciation by NSS IT Wing & NMAMIT Leadership",
    ],
    metrics: [
      { label: "Duration", value: "24 Hrs", icon: "⏱️" },
      { label: "Level", value: "National", icon: "🏆" },
      { label: "Award", value: "Cert.", icon: "📜" },
    ],
    accentGlow: "rgba(217, 119, 6, 0.2)",
    borderHover: "hover:border-amber-500/60",
    glowColor: "#d97706",
  },
];

const FILTERS = [
  { id: "all", label: "All Honors", emoji: "🏅" },
  { id: "leadership", label: "Executive Leadership", emoji: "👑" },
  { id: "hackathon", label: "National Hackathons", emoji: "🚀" },
] as const;

type FilterId = "all" | "leadership" | "hackathon";

export function LeadershipAchievements() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [selectedCert, setSelectedCert] = useState<AchievementItem | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const filteredItems = ACHIEVEMENTS.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const count = (cat: FilterId) =>
    cat === "all" ? ACHIEVEMENTS.length : ACHIEVEMENTS.filter((a) => a.category === cat).length;

  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-background py-24 md:py-32 border-t border-border/40"
    >
      {/* Ambient Background Orbs */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/8 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[32rem] w-[32rem] translate-x-1/2 rounded-full bg-sky-600/8 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* ── Section Header ── */}
        <div className="mb-12">
          <div
            className="reveal inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md"
            data-reveal
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
              Honors & Executive Roles
            </span>
          </div>

          <h2
            className="reveal mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground"
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            Leadership &{" "}
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 bg-clip-text text-transparent">
              National Achievements
            </span>
          </h2>

          <p
            className="reveal mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground"
            data-reveal
            style={{ ["--reveal-delay" as string]: "140ms" }}
          >
            Department executive leadership as AIML Vice President and national hackathon
            competitor across leading technical institutes of India.
          </p>
        </div>



        {/* ── Filter Pills ── */}
        <div
          className="reveal mb-10 flex items-center gap-2.5"
          data-reveal
          style={{ ["--reveal-delay" as string]: "200ms" }}
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300 ${
                activeFilter === f.id
                  ? f.id === "all"
                    ? "border-primary/60 bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                    : f.id === "leadership"
                    ? "border-violet-500/60 bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-105"
                    : "border-sky-500/60 bg-sky-600 text-white shadow-lg shadow-sky-600/30 scale-105"
                  : "border-border/60 bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground hover:border-border"
              }`}
            >
              <span>{f.emoji}</span>
              <span>{f.label}</span>
              <span
                className={`ml-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-black ${
                  activeFilter === f.id
                    ? "bg-white/20 text-white"
                    : "bg-border/40 text-muted-foreground"
                }`}
              >
                {count(f.id)}
              </span>
            </button>
          ))}
        </div>

        {/* ── Achievement Cards Grid ── */}
        <div
          className={`grid gap-6 ${
            filteredItems.length === 1
              ? "max-w-lg"
              : filteredItems.length === 2
              ? "sm:grid-cols-2 max-w-3xl"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onMouseMove={handleMouseMove}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${idx * 80}ms` }}
              className={`reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.borderHover}`}
            >
              {/* Cursor Spotlight */}
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(380px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${item.accentGlow}, transparent 70%)`,
                }}
              />

              {/* Top Color Bar */}
              <div
                className="h-1 w-full rounded-t-3xl"
                style={{
                  background: `linear-gradient(90deg, ${item.glowColor}80, ${item.glowColor}20)`,
                }}
              />

              <div className="relative z-10 flex flex-col flex-1 p-6">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  {/* Icon Circle */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl shadow-lg"
                    style={{ background: `${item.glowColor}20`, border: `1px solid ${item.glowColor}40` }}
                  >
                    {item.icon}
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`rounded-full border px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/70">
                      {item.locationDate.split("•")[1]?.trim() ?? item.locationDate}
                    </span>
                  </div>
                </div>

                {/* Title & Org */}
                <h3 className="font-display text-xl font-extrabold leading-tight tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider leading-snug">
                  {item.organization}
                </p>

                {/* Team / Role Tag */}
                {item.teamOrRole && (
                  <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary w-fit">
                    <span>✦</span>
                    {item.teamOrRole}
                  </div>
                )}

                {/* Description */}
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground/85">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 rounded-2xl border border-border/40 bg-background/30 p-3.5 space-y-2">
                  <p className="text-[9px] font-black uppercase tracking-wider text-foreground/60 mb-1">
                    Key Highlights
                  </p>
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-0.5 shrink-0 font-black text-primary">✓</span>
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Metrics Row */}
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {item.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col items-center rounded-xl border border-border/40 bg-background/40 py-2.5 px-1 text-center"
                    >
                      <span className="text-base">{m.icon}</span>
                      <p className="mt-1 font-display text-[11px] font-black text-foreground leading-none truncate w-full text-center">
                        {m.value}
                      </p>
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  {item.certificateImage ? (
                    <button
                      onClick={() => setSelectedCert(item)}
                      className="w-full flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-2.5 px-3 text-xs font-bold text-emerald-400 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                      <span>✓</span>
                      <span>View Verified Certificate</span>
                      <span>📄</span>
                    </button>
                  ) : (
                    <div className="w-full flex items-center justify-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/10 py-2.5 px-3 text-xs font-bold text-violet-400">
                      <span>👑</span>
                      <span>Active Executive Role</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Empty state ── */}
        {filteredItems.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="text-sm text-muted-foreground">No achievements match this filter.</p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-3 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground"
            >
              Show All
            </button>
          </div>
        )}
      </div>

      {/* ── Certificate Lightbox Modal ── */}
      {selectedCert && selectedCert.certificateImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-2xl"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.1_0.005_0)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  <span>✓</span> Official Certificate
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-white leading-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-[11px] text-white/50">{selectedCert.organization}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Certificate Image */}
            <div className="overflow-auto max-h-[70vh] flex items-center justify-center bg-black/40 p-4">
              <img
                src={selectedCert.certificateImage}
                alt={`${selectedCert.title} Certificate`}
                className="max-h-[65vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
              <span className="font-mono text-[11px] text-white/40">
                Awarded to Kartik Raikar
                {selectedCert.teamOrRole ? ` · ${selectedCert.teamOrRole}` : ""}
                {" · "}
                {selectedCert.locationDate}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.certificateImage}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold text-white hover:bg-white/20 transition-colors"
                >
                  ↗ Open Full Size
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold text-white hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
