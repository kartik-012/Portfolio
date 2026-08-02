import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Process } from "@/components/portfolio/Process";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { useScrollReveal } from "@/components/portfolio/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kartik Raikar — AI Systems & LLM Engineer" },
      {
        name: "description",
        content:
          "AI Engineer building full-stack AI systems, LLM evaluation pipelines, and transformers. See featured projects and skills.",
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

  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Process />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
