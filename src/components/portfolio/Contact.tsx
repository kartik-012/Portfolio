import { useState, MouseEvent } from "react";

export function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  // Card Mouse Glow Handler
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-24 md:py-32">
      {/* Background Ambient Atmosphere */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-background/25 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        {/* Header Badge */}
        <span
          className="reveal inline-block rounded-full border border-primary-foreground/35 bg-primary-foreground/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-primary-foreground backdrop-blur-md"
          data-reveal
        >
          Contact &amp; Connect
        </span>

        {/* Section Heading */}
        <h2
          className="reveal mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-primary-foreground sm:text-7xl"
          data-reveal
          style={{ ["--reveal-delay" as string]: "80ms" }}
        >
          Let&apos;s build
          <br />
          something great
        </h2>

        {/* Description */}
        <p
          className="reveal mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-primary-foreground/90 font-medium"
          data-reveal
          style={{ ["--reveal-delay" as string]: "150ms" }}
        >
          Have an AI engineering role, collaborative project, or an idea in mind? Reach out directly
          via Gmail, phone, or connect across professional networks.
        </p>

        {/* 2x2 Professional Glassmorphic Contact Grid */}
        <div
          className="reveal mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-3xl mx-auto text-left"
          data-reveal
          style={{ ["--reveal-delay" as string]: "220ms" }}
        >
          {/* CARD 1: GMAIL & DIRECT EMAIL */}
          <div
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-3xl border border-white/30 bg-black/25 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-black/35 hover:border-white/50 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
          >
            {/* Luminous Spotlight Glow */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(350px circle at var(--mouse-x, 100px) var(--mouse-y, 100px), rgba(255, 255, 255, 0.15), transparent 80%)`,
              }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-5">
              <div className="flex items-center gap-3.5">
                {/* Official Gmail Vector Logo */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/95 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 48 48" className="h-6 w-6">
                    <path
                      fill="#EA4335"
                      d="M24 24.5L6 11.2V37c0 1.7 1.3 3 3 3h30c1.7 0 3-1.3 3-3V11.2L24 24.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M42 11.2V8c0-1.7-1.3-3-3-3H9C7.3 5 6 6.3 6 8v3.2l18 13.3 18-13.3z"
                    />
                    <path fill="#34A853" d="M6 11.2L24 24.5 6 37.8V11.2z" />
                    <path fill="#FBBC05" d="M42 11.2L24 24.5 42 37.8V11.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/75">
                    Email Address
                  </p>
                  <p className="font-display text-sm sm:text-base font-bold text-primary-foreground">
                    kartikraikar2005@gmail.com
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kartikraikar2005@gmail.com&su=AI%20Engineering%20Opportunity%20-%20Kartik%20Raikar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-neutral-950 shadow-md transition-all duration-200 hover:bg-neutral-100 hover:scale-[1.02] active:scale-95"
                >
                  <span>Open in Gmail</span>
                  <span>↗</span>
                </a>

                <button
                  onClick={() => copyToClipboard("kartikraikar2005@gmail.com", "email")}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-white/20 hover:scale-[1.02] active:scale-95"
                  title="Copy Email Address"
                >
                  {copiedType === "email" ? "✓ Copied" : "Copy Address"}
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2: PHONE & WHATSAPP */}
          <div
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-3xl border border-white/30 bg-black/25 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-black/35 hover:border-emerald-300/60 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
          >
            {/* Luminous Spotlight Glow */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(350px circle at var(--mouse-x, 100px) var(--mouse-y, 100px), rgba(52, 211, 153, 0.2), transparent 80%)`,
              }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-5">
              <div className="flex items-center gap-3.5">
                {/* Official WhatsApp/Call Vector Logo */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-emerald-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/75">
                    Phone / WhatsApp
                  </p>
                  <p className="font-display text-sm sm:text-base font-bold text-primary-foreground">
                    +91 8660910358
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href="https://wa.me/918660910358?text=Hi%20Kartik,%20I%20saw%20your%20AI%20portfolio%20and%20would%20love%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-3.5 py-2 text-xs font-bold text-white shadow-md transition-all duration-200 hover:bg-emerald-600 hover:scale-[1.02] active:scale-95"
                >
                  <span>WhatsApp</span>
                  <span>💬</span>
                </a>

                <a
                  href="tel:+918660910358"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-white/20"
                  title="Direct Phone Call"
                >
                  Call 📞
                </a>

                <button
                  onClick={() => copyToClipboard("+918660910358", "phone")}
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-white/20"
                  title="Copy Phone Number"
                >
                  {copiedType === "phone" ? "✓" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3: GITHUB PROFILE */}
          <a
            href="https://github.com/kartik-012"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-3xl border border-white/30 bg-black/25 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-black/35 hover:border-white/50 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
          >
            {/* Luminous Spotlight Glow */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(350px circle at var(--mouse-x, 100px) var(--mouse-y, 100px), rgba(255, 255, 255, 0.15), transparent 80%)`,
              }}
            />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-neutral-900 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/75">
                    GitHub Codebase
                  </p>
                  <p className="font-display text-sm sm:text-base font-bold text-primary-foreground">
                    @kartik-012
                  </p>
                </div>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </div>
            </div>
          </a>

          {/* CARD 4: LINKEDIN NETWORK */}
          <a
            href="https://linkedin.com/in/kartik-raikar-kr"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-3xl border border-white/30 bg-black/25 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-black/35 hover:border-[#0077B5]/60 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
          >
            {/* Luminous Spotlight Glow */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(350px circle at var(--mouse-x, 100px) var(--mouse-y, 100px), rgba(0, 119, 181, 0.25), transparent 80%)`,
              }}
            />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-[#0077B5] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/75">
                    LinkedIn Network
                  </p>
                  <p className="font-display text-sm sm:text-base font-bold text-primary-foreground">
                    @kartik-raikar-kr
                  </p>
                </div>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </div>
            </div>
          </a>
        </div>

        {/* Back to Top & Copyright */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/75">
            © {new Date().getFullYear()} Kartik Raikar — AI Engineer &amp; Systems Architect
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-xs font-bold text-primary-foreground backdrop-blur-md transition-all duration-300 hover:bg-primary-foreground/20 hover:scale-105"
          >
            <span>↑ Back to Top</span>
          </a>
        </div>
      </div>
    </section>
  );
}
