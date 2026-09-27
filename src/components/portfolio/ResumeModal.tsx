import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Kartik Raikar Resume Preview"
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6"
    >
      {/* Dark Glassmorphic Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-[0_25px_80px_-20px_color-mix(in_oklab,var(--primary)_45%,transparent)] backdrop-blur-2xl animate-in zoom-in-95 duration-300">
        {/* Header Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-secondary/60 px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-lg">
              📄
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-sm sm:text-base font-bold text-foreground">
                  Kartik Raikar — Official Resume
                </h3>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                  Verified
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                AI Engineer • Generative AI &amp; LLM Systems
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="/Kartik_Raikar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <span>Open in Tab</span>
              <span className="text-xs">↗</span>
            </a>

            <a
              href="/Kartik_Raikar_Resume.pdf"
              download="Kartik_Raikar_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105 glow-red"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
              </svg>
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-card text-muted-foreground transition-colors hover:border-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              ✕
            </button>
          </div>
        </div>

        {/* In-Browser PDF Frame */}
        <div className="relative flex-1 bg-black/40">
          <iframe
            src="/Kartik_Raikar_Resume.pdf#view=FitH"
            title="Kartik Raikar Resume Preview"
            className="h-full w-full border-0"
          />

          {/* Fallback for browsers that don't render inline PDF */}
          <noscript>
            <div className="p-8 text-center text-muted-foreground">
              <p>Your browser doesn&apos;t support inline PDF previews.</p>
              <a
                href="/Kartik_Raikar_Resume.pdf"
                className="mt-4 inline-block font-bold text-primary underline"
              >
                Click here to download the PDF directly
              </a>
            </div>
          </noscript>
        </div>
      </div>
    </div>
  );
}
