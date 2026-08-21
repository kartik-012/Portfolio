import { useState, useMemo, MouseEvent } from "react";

type Certification = {
  id: string;
  title: string;
  issuer: string;
  issuerKey:
    | "oracle"
    | "aws"
    | "microsoft"
    | "ibm"
    | "cisco"
    | "deloitte"
    | "tata"
    | "tcs"
    | "greatstack"
    | "forage"
    | "skyscanner"
    | "walnut"
    | "ieee";
  date: string;
  category: "ai" | "cloud" | "security" | "data" | "dev";
  credentialId?: string;
  certificateUrl?: string;
  skills: string[];
  description: string;
  brandColor: string;
  accentGlow: string;
};

const CERTIFICATIONS: Certification[] = [
  // 1. Oracle AI Foundations
  {
    id: "oracle-ai-foundations-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issuerKey: "oracle",
    date: "Sep 2025",
    category: "ai",
    skills: ["Generative AI", "Machine Learning", "OCI AI Services", "LLMs"],
    description:
      "Comprehensive certification verifying mastery of OCI Artificial Intelligence architectures, generative models, and machine learning foundation concepts.",
    brandColor: "#C74634",
    accentGlow: "rgba(199, 70, 52, 0.35)",
  },
  // 2. Oracle GenAI Professional
  {
    id: "oracle-genai-professional-2025",
    title: "Oracle Cloud Infrastructure 2025 Generative AI Certified Professional",
    issuer: "Oracle",
    issuerKey: "oracle",
    date: "Sep 2025",
    category: "ai",
    skills: ["Fine-Tuning", "RAG Pipelines", "Vector Databases", "OCI GenAI Service"],
    description:
      "Advanced professional certification in architecting, fine-tuning, and deploying enterprise Large Language Models and Retrieval-Augmented Generation systems on OCI.",
    brandColor: "#C74634",
    accentGlow: "rgba(199, 70, 52, 0.35)",
  },
  // 3. Oracle Cloud Foundations
  {
    id: "oracle-cloud-foundations-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    issuerKey: "oracle",
    date: "Sep 2025",
    category: "cloud",
    skills: ["Cloud Architecture", "OCI Compute", "Virtual Cloud Networks", "Identity & Access"],
    description:
      "Core cloud computing certification validating deep understanding of enterprise OCI architecture, high availability, security, and cloud scalability.",
    brandColor: "#C74634",
    accentGlow: "rgba(199, 70, 52, 0.35)",
  },
  // 4. AWS Machine Learning & AI
  {
    id: "aws-ml-ai-fundamentals",
    title: "AWS Training & Certification – Fundamentals of Machine Learning & AI",
    issuer: "Amazon Web Services (AWS)",
    issuerKey: "aws",
    date: "Jun 2026",
    category: "ai",
    skills: ["Machine Learning", "Amazon SageMaker", "Bedrock", "Computer Vision", "NLP"],
    description:
      "Completed AWS Skill Builder specialized curriculum on core AI algorithms, neural network design, model training, and generative AI deployments on AWS.",
    brandColor: "#FF9900",
    accentGlow: "rgba(255, 153, 0, 0.35)",
  },
  // 5. Microsoft Azure Cloud
  {
    id: "azure-cloud-concepts",
    title: "Introduction to Microsoft Azure: Describe Cloud Concepts",
    issuer: "Microsoft",
    issuerKey: "microsoft",
    date: "Aug 2025",
    category: "cloud",
    skills: ["Azure Architecture", "Serverless", "Cloud Security", "Hybrid Cloud"],
    description:
      "Microsoft verified credential for cloud computing fundamentals, compute virtualization, storage topologies, and Azure governance frameworks.",
    brandColor: "#0078D4",
    accentGlow: "rgba(0, 120, 212, 0.35)",
  },
  // 6. Tata GenAI Data Analytics
  {
    id: "tata-genai-analytics",
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage (Tata)",
    issuerKey: "tata",
    date: "Jun 2026",
    credentialId: "F75ka7LhKE2sJGxyF",
    category: "data",
    skills: ["Generative AI", "Data Analytics", "Prompt Engineering", "Data Modeling"],
    description:
      "Hands-on job simulation leveraging cutting-edge Generative AI to automate exploratory data analysis, generate executive insights, and structure analytics workflows.",
    brandColor: "#005691",
    accentGlow: "rgba(0, 86, 145, 0.35)",
  },
  // 7. Deloitte Data Analytics
  {
    id: "deloitte-analytics",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    issuerKey: "deloitte",
    date: "Jul 2026",
    credentialId: "68dcdda956c19017e850b83f",
    category: "data",
    skills: ["Data Analytics", "Forensic Technology", "Advanced Excel", "Data Cleaning"],
    description:
      "Completed practical forensic data analysis simulation with Deloitte, conducting end-to-end data pipeline cleaning, statistical modeling, and insight dashboards.",
    brandColor: "#86BC25",
    accentGlow: "rgba(134, 188, 37, 0.35)",
  },
  // 8. Tata Data Visualization
  {
    id: "tata-data-visualisation",
    title: "Tata - Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Forage (Tata)",
    issuerKey: "tata",
    date: "Jun 2026",
    credentialId: "fRnWE6dTKBsSJyrg5",
    category: "data",
    skills: [
      "Data Visualization",
      "Executive Dashboards",
      "Data Cleaning",
      "Business Intelligence",
    ],
    description:
      "Executed practical enterprise data simulation building responsive C-suite visual dashboards, data validation pipelines, and strategic decision metrics.",
    brandColor: "#005691",
    accentGlow: "rgba(0, 86, 145, 0.35)",
  },
  // 9. Cisco Cybersecurity
  {
    id: "cisco-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issuerKey: "cisco",
    date: "Jun 2026",
    category: "security",
    skills: ["Cybersecurity", "Information Security", "Network Defense", "Threat Intelligence"],
    description:
      "Foundational credential in enterprise security architectures, attack vectors, cryptographic protocols, defense-in-depth, and data privacy safeguards.",
    brandColor: "#049FD9",
    accentGlow: "rgba(4, 159, 217, 0.35)",
  },
  // 10. Tata Cybersecurity Analyst
  {
    id: "tata-cybersecurity",
    title: "Tata - Cybersecurity Analyst Job Simulation",
    issuer: "Forage (Tata)",
    issuerKey: "tata",
    date: "Jun 2026",
    credentialId: "oL6ptn27GNbizp9Ch",
    category: "security",
    skills: ["IAM Assessments", "Cybersecurity Strategy", "Solution Design", "Access Control"],
    description:
      "Simulated enterprise security operations focusing on Identity and Access Management (IAM), vulnerability assessments, and mitigation solution design.",
    brandColor: "#005691",
    accentGlow: "rgba(0, 86, 145, 0.35)",
  },
  // 11. IBM Process Mining
  {
    id: "ibm-process-mining",
    title: "IBM Process Mining Project Journey",
    issuer: "IBM Training",
    issuerKey: "ibm",
    date: "Sep 2025",
    category: "data",
    skills: [
      "Process Mining",
      "Workflow Optimization",
      "Enterprise Automation",
      "Process Discovery",
    ],
    description:
      "Awarded by IBM Training for demonstrating hands-on proficiency in process mining, algorithmic bottleneck detection, and workflow transformation pipelines.",
    brandColor: "#0530AD",
    accentGlow: "rgba(5, 48, 173, 0.35)",
  },
  // 12. TCS iON Career Edge
  {
    id: "tcs-career-edge",
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS iON",
    issuerKey: "tcs",
    date: "Jun 2026",
    credentialId: "240640-28976732-1016",
    category: "dev",
    skills: ["Business Communication", "Presentation", "IT Methodologies", "Leadership"],
    description:
      "Comprehensive professional capability program covering industry-standard Agile workflows, corporate communications, and collaborative development frameworks.",
    brandColor: "#E20074",
    accentGlow: "rgba(226, 0, 116, 0.35)",
  },
  // 13. GreatStack Full Stack
  {
    id: "greatstack-fullstack",
    title: "Full Stack Food Delivery Project & Architecture",
    issuer: "GreatStack",
    issuerKey: "greatstack",
    date: "Aug 2025",
    credentialId: "fdeleWZYPOIdyzddhImJG0huQBb7yj22",
    category: "dev",
    skills: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
    description:
      "Engineered an end-to-end full stack web application featuring responsive customer UI, authentication, database schemas, admin dashboard, and payment gateway.",
    brandColor: "#6366F1",
    accentGlow: "rgba(99, 102, 241, 0.35)",
  },
  // 14. Skyscanner Front-End Software Engineering
  {
    id: "forage-skyscanner-frontend",
    title: "Skyscanner – Front-End Software Engineering Job Simulation",
    issuer: "Forage (Skyscanner)",
    issuerKey: "skyscanner",
    date: "Aug 2026",
    certificateUrl: "/cert-skyscanner.pdf",
    category: "dev",
    skills: ["React", "Front-End Development", "UI Components", "Agile", "Software Engineering"],
    description:
      "Completed Skyscanner's official front-end engineering job simulation on Forage, building real-world UI components and applying industry-standard React development practices.",
    brandColor: "#0770E3",
    accentGlow: "rgba(7, 112, 227, 0.35)",
  },
  // 15. Forage Walnut Job Simulation
  {
    id: "forage-walnut",
    title: "Walnut – Sales Technology Job Simulation",
    issuer: "Forage (Walnut)",
    issuerKey: "walnut",
    date: "Aug 2026",
    certificateUrl: "/cert-forage-walnut.pdf",
    category: "dev",
    skills: ["Sales Technology", "Product Demos", "SaaS", "CRM", "Technical Sales"],
    description:
      "Completed Walnut's official job simulation on Forage, gaining hands-on experience in building interactive product demos and mastering modern B2B sales technology workflows.",
    brandColor: "#7C3AED",
    accentGlow: "rgba(124, 58, 237, 0.35)",
  },
  // 16. Forage Completion Certificate 1 (cusznb4p9eip)
  {
    id: "forage-completion-cusznb",
    title: "Forage – Job Simulation Certificate of Completion",
    issuer: "Forage",
    issuerKey: "forage",
    date: "Jun 2026",
    credentialId: "cusznb4p9eip",
    certificateUrl: "/cert-forage-1.pdf",
    category: "dev",
    skills: ["Job Simulation", "Professional Skills", "Industry Experience", "Problem Solving"],
    description:
      "Awarded Forage Certificate of Completion for successfully completing a virtual job simulation program, demonstrating industry-relevant skills and professional competencies.",
    brandColor: "#059669",
    accentGlow: "rgba(5, 150, 105, 0.35)",
  },
  // 17. Forage Completion Certificate 2 (kq5p62yovk34)
  {
    id: "forage-completion-kq5p62",
    title: "Forage – Job Simulation Certificate of Completion",
    issuer: "Forage",
    issuerKey: "forage",
    date: "Jun 2026",
    credentialId: "kq5p62yovk34",
    certificateUrl: "/cert-forage-2.pdf",
    category: "dev",
    skills: ["Job Simulation", "Analytical Thinking", "Teamwork", "Communication"],
    description:
      "Successfully completed a Forage virtual job simulation, acquiring practical workplace experience and demonstrating competency in real-world professional scenarios.",
    brandColor: "#D97706",
    accentGlow: "rgba(217, 119, 6, 0.35)",
  },
  // 18. Forage Completion Certificate 3 (6a2fdb5d)
  {
    id: "forage-completion-6a2f",
    title: "Forage – Job Simulation Certificate of Completion",
    issuer: "Forage",
    issuerKey: "forage",
    date: "Jun 2026",
    credentialId: "6a2fdb5de1f2203d71388d54",
    certificateUrl: "/cert-forage-6a2f.pdf",
    category: "dev",
    skills: ["Job Simulation", "Critical Thinking", "Professional Development", "Industry Skills"],
    description:
      "Earned Forage Certificate of Completion by finishing a comprehensive virtual job simulation, building practical skills aligned with real employer expectations.",
    brandColor: "#DC2626",
    accentGlow: "rgba(220, 38, 38, 0.35)",
  },
  // 19. IEEE Introduction to IoT
  {
    id: "ieee-introduction-to-iot",
    title: "Introduction to IoT – IEEE Blended Learning Program",
    issuer: "IEEE",
    issuerKey: "ieee",
    date: "Aug 2026",
    credentialId: "411409732KK",
    certificateUrl: "/cert-ieee-iot.pdf",
    category: "cloud",
    skills: ["Internet of Things (IoT)", "Embedded Systems", "Sensor Networks", "Smart Devices", "IEEE Certified"],
    description:
      "Certificate of Completion awarded by IEEE Blended Learning Program for mastering Introduction to IoT principles, connected sensor network architectures, and smart device communication frameworks.",
    brandColor: "#006699",
    accentGlow: "rgba(0, 102, 153, 0.35)",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Credentials" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "cloud", label: "Cloud & Infrastructure" },
  { id: "data", label: "Data Analytics & Mining" },
  { id: "security", label: "Cybersecurity & IAM" },
  { id: "dev", label: "Full-Stack & Enterprise" },
];

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCredential = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const filteredCerts = useMemo(() => {
    return CERTIFICATIONS.filter((cert) => {
      const matchesCategory = activeCategory === "all" || cert.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-background py-28 md:py-36 border-t border-border/40"
    >
      {/* Ambient Lighting Gradients */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[30rem] w-[55rem] rounded-full bg-primary/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-md"
            data-reveal
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Verified Industry Qualifications
            </span>
          </div>

          <h2
            className="reveal mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground"
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            Certifications &amp;{" "}
            <span className="bg-gradient-to-r from-primary via-rose-400 to-amber-300 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>

          <p
            className="reveal mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground"
            data-reveal
            style={{ ["--reveal-delay" as string]: "140ms" }}
          >
            A verified record of specialized mastery spanning Oracle Generative AI, AWS Machine
            Learning, Azure Cloud architecture, and enterprise data analytics simulations.
          </p>
        </div>

        {/* Category Filter Pills & Search */}
        <div
          className="reveal mt-12 flex flex-col md:flex-row items-center justify-between gap-4"
          data-reveal
          style={{ ["--reveal-delay" as string]: "180ms" }}
        >
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "border border-border/60 bg-card/40 text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border/70 bg-card/60 px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-md transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div
          className="reveal mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          data-reveal
          style={{ ["--reveal-delay" as string]: "220ms" }}
        >
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onMouseMove={handleMouseMove}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl"
              style={{
                ["--brand-color" as string]: cert.brandColor,
                ["--accent-glow" as string]: cert.accentGlow,
              }}
            >
              {/* Dynamic Cursor Spotlight Effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(350px circle at var(--mouse-x, 100px) var(--mouse-y, 100px), var(--accent-glow), transparent 80%)`,
                }}
              />

              <div className="relative z-10 space-y-4">
                {/* Issuer Header Bar */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <IssuerIcon issuerKey={cert.issuerKey} />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{cert.issuer}</h4>
                      <p className="text-[10px] text-muted-foreground font-mono">
                        Issued {cert.date}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                    <span>✓</span> Verified
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-display text-base font-bold leading-snug text-foreground group-hover:text-primary transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/50 bg-background/50 px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Credential ID / Action */}
              <div className="relative z-10 mt-5 pt-4 border-t border-border/40 flex flex-col gap-2">
                <div className="flex items-center justify-between w-full">
                  {cert.credentialId ? (
                    <>
                      <span
                        className="text-[10px] font-mono text-muted-foreground truncate max-w-[140px]"
                        title={cert.credentialId}
                      >
                        ID: {cert.credentialId}
                      </span>
                      <button
                        onClick={() => copyCredential(cert.credentialId!, cert.id)}
                        className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-background/60 px-2.5 py-1 text-[10px] font-semibold text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        {copiedId === cert.id ? "✓ Copied" : "Copy ID 📋"}
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="text-[10px] font-semibold text-muted-foreground">
                        Official Training Credential
                      </span>
                      <span className="text-xs text-primary font-bold">● Active</span>
                    </>
                  )}
                </div>
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg border border-border/60 bg-background/60 px-3 py-1.5 text-[10px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/10 hover:border-primary/60 hover:text-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="text-sm text-muted-foreground">
              No certifications found matching your filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Brand SVG Vector Icons Helper Component
function IssuerIcon({ issuerKey }: { issuerKey: string }) {
  switch (issuerKey) {
    case "oracle":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C74634] text-white shadow-md">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M16.5 4H7.5C3.36 4 0 7.36 0 11.5s3.36 7.5 7.5 7.5h9c4.14 0 7.5-3.36 7.5-7.5S20.64 4 16.5 4zm-.18 11.52H7.68c-2.21 0-4-1.79-4-4s1.79-4 4-4h8.64c2.21 0 4 1.79 4 4s-1.79 4-4 4z" />
          </svg>
        </div>
      );
    case "aws":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#232F3E] text-[#FF9900] shadow-md border border-white/10">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M18.74 15.68c-2.45 1.81-6.02 2.77-9.08 2.77-4.3 0-8.17-1.6-11.1-4.27-.23-.21-.02-.5.26-.34 3.16 1.83 7.03 2.93 11.03 2.93 2.72 0 5.86-.71 8.35-2.18.37-.22.68.17.54.49v-.4zM19.78 14.5c-.31-.4-.68-.83-.78-1.39-.06-.35.12-.52.41-.33.74.49 2.01 1.34 2.37 1.89.17.26.06.52-.27.52-.39-.01-1.3-.32-1.73-.69z" />
            <path d="M12.93 3.82c-.89 0-1.8.1-2.61.31-.38.1-.5.35-.45.65.12.72.31 1.63.45 2.34.03.17.18.29.35.25.64-.13 1.37-.21 2.07-.21 1.63 0 2.66.57 2.66 2.01v.43c-1.07.08-2.5.23-3.87.61-2.28.63-3.5 2.07-3.5 3.91 0 2.27 1.73 3.65 3.91 3.65 1.57 0 2.87-.67 3.64-1.87v1.5c0 .24.16.4.4.4h2.5c.24 0 .4-.16.4-.4V9.66c0-3.69-2.24-5.84-5.9-5.84zm.64 8.71c0 .99-.81 1.86-2.07 1.86-.96 0-1.63-.52-1.63-1.46 0-1.22.99-1.69 2.51-1.86.64-.07.96-.11 1.19-.17v1.63z" />
          </svg>
        </div>
      );
    case "microsoft":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-md border border-border">
          <svg viewBox="0 0 24 24" className="h-6 w-6">
            <path fill="#F25022" d="M1 1h10v10H1z" />
            <path fill="#7FBA00" d="M13 1h10v10H13z" />
            <path fill="#00A4EF" d="M1 13h10v10H1z" />
            <path fill="#FFB900" d="M13 13h10v10H13z" />
          </svg>
        </div>
      );
    case "ibm":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0530AD] text-white shadow-md font-black text-xs tracking-tighter">
          IBM
        </div>
      );
    case "cisco":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#049FD9] text-white shadow-md">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path
              d="M4 14v4M8 11v7M12 8v10M16 11v7M20 14v4"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    case "deloitte":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-white font-black text-sm shadow-md border border-white/15">
          <span>
            D<span className="text-[#86BC25]">.</span>
          </span>
        </div>
      );
    case "tata":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#005691] text-white shadow-md font-bold text-xs">
          TATA
        </div>
      );
    case "tcs":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-border text-[#E20074] shadow-md font-black text-[10px]">
          tcs<span className="text-black">iON</span>
        </div>
      );
    case "forage":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1B4332] text-white shadow-md">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
          </svg>
        </div>
      );
    case "skyscanner":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0770E3] text-white shadow-md">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
      );
    case "walnut":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7C3AED] text-white shadow-md font-black text-[10px] tracking-tight">
          WLT
        </div>
      );
    case "ieee":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#006699] text-white shadow-md font-black text-[11px] tracking-wider border border-white/20">
          IEEE
        </div>
      );
    case "iiitdharwad":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0284C7] text-white font-black text-[10px] tracking-tight shadow-md border border-white/20">
          IIITD
        </div>
      );
    case "nitte":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D97706] text-white font-black text-[10px] tracking-tight shadow-md border border-white/20">
          NITTE
        </div>
      );
    case "jce":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6] text-white font-black text-[10px] tracking-tight shadow-md border border-white/20">
          VP
        </div>
      );
    default:
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary shadow-md font-bold text-sm">
          ⚡
        </div>
      );
  }
}
