import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Process } from "@/components/portfolio/Process";
import { Projects } from "@/components/portfolio/Projects";
import { LeadershipAchievements } from "@/components/portfolio/LeadershipAchievements";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { ResumeModal } from "@/components/portfolio/ResumeModal";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { useScrollReveal } from "@/components/portfolio/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kartik Raikar — AI Systems & LLM Engineer" },
      {
        name: "description",
        content:
          "AI Engineer building production AIOps incident engines, version-partitioned RAG architectures, MCP servers, and transformers from scratch. View 10 quantitative benchmarks.",
      },
      { property: "og:site_name", content: "Kartik Raikar Portfolio" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Kartik Raikar — AI Systems & LLM Engineer" },
      {
        property: "og:description",
        content:
          "Autonomous AIOps incident engines, version-partitioned RAG architectures, MCP servers, and transformers from scratch. 10 quantitative engineering benchmarks.",
      },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Kartik Raikar — AI Systems & LLM Engineer Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kartik Raikar — AI Systems & LLM Engineer" },
      {
        name: "twitter:description",
        content:
          "Autonomous AIOps incident engines, version-partitioned RAG architectures, MCP servers, and transformers from scratch. 10 quantitative benchmarks.",
      },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kartik Raikar",
          jobTitle: "AI Engineer & LLM Systems Architect",
          email: "kartikraikar2005@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Belagavi",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Jain College of Engineering, Belagavi (VTU)",
          },
          knowsAbout: [
            "Generative AI",
            "Large Language Models",
            "Retrieval-Augmented Generation",
            "Model Context Protocol",
            "AIOps",
            "Deep Learning",
            "Transformers",
            "FastAPI",
            "React 19",
            "Python",
          ],
          sameAs: [
            "https://github.com/kartik-012",
            "https://www.linkedin.com/in/kartik-raikar-kr",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  // Global keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="bg-background relative min-h-screen">
      <Nav
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommand={() => setIsCommandOpen(true)}
      />
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <About />
      <Skills />
      <Process />
      <Projects />
      <LeadershipAchievements />
      <Certifications />
      <Contact />

      {/* Modals and Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </main>
  );
}
