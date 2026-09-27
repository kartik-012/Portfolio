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
import { AiChatAssistant } from "@/components/portfolio/AiChatAssistant";
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
      { property: "og:title", content: "Kartik Raikar — AI Systems & LLM Engineer" },
      {
        property: "og:description",
        content:
          "AI Engineer crafting scalable machine learning pipelines, RAG auditing tools, and full-stack web applications with Python and React.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
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

      {/* Floating Interactive Assistants & Modals */}
      <AiChatAssistant />
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
