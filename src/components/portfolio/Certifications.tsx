import { useState, useMemo, MouseEvent, useEffect } from "react";
import { toast } from "sonner";

export type Certification = {
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
    | "ieee"
    | "sparkiit"
    | "cognifyz"
    | "guvi"
    | "linkedin";
  date: string;
  category: "ai" | "cloud" | "security" | "data" | "dev";
  credentialId?: string;
  certificateUrl?: string;
  certificateImage?: string;
  skills: string[];
  description: string;
  brandColor: string;
  accentGlow: string;
};

export const CERTIFICATIONS: Certification[] = [
  // 1. Apache Kafka Essential Training (User requested)
  {
    id: "linkedin-apache-kafka",
    title: "Apache Kafka Essential Training: Building Scalable Applications",
    issuer: "LinkedIn Learning",
    issuerKey: "linkedin",
    date: "Oct 2026",
    credentialId: "9c67cf8f6f1e396dd87f34cf23b63f6a0b06c2258807ae55b7590c00e131718e",
    certificateImage: "/certificates/linkedin-apache-kafka.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "dev",
    skills: ["Apache Kafka", "Scalable Web Applications", "Event Streaming", "Distributed Systems"],
    description:
      "Mastery of Apache Kafka distributed architecture, high-throughput event streaming, message partitioning, consumer groups, and building fault-tolerant scalable backends.",
    brandColor: "#0A66C2",
    accentGlow: "rgba(10, 102, 194, 0.35)",
  },

  // 2. Oracle OCI AI Foundations (Jul 2026)
  {
    id: "oracle-ai-foundations-2026",
    title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
    issuer: "Oracle",
    issuerKey: "oracle",
    date: "Jul 2026",
    credentialId: "102502437OCI26AICFA",
    certificateImage: "/certificates/oracle-ai-foundations-2026.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "ai",
    skills: ["OCI", "Artificial Intelligence (AI)", "Machine Learning", "Generative AI", "LLMs"],
    description:
      "Demonstrates foundational knowledge of artificial intelligence, machine learning, Generative AI, Large Language Models (LLMs), and Oracle Cloud Infrastructure AI services.",
    brandColor: "#C74634",
    accentGlow: "rgba(199, 70, 52, 0.35)",
  },

  // 3. Oracle Agentic AI Certified Foundations Associate
  {
    id: "oracle-agentic-ai",
    title: "Oracle Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    issuerKey: "oracle",
    date: "Jul 2026",
    credentialId: "102502437AAI26OFA",
    certificateImage: "/certificates/oracle-agentic-ai.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "ai",
    skills: ["Agentic AI Development", "AI Orchestration", "Autonomous Agents", "Tool Calling", "Reasoning"],
    description:
      "Demonstrates foundational knowledge of Agentic AI, including autonomous AI agents, agent architectures, task execution pipelines, tool use, reasoning, and orchestration.",
    brandColor: "#C74634",
    accentGlow: "rgba(199, 70, 52, 0.35)",
  },

  // 4. Oracle AI Vector Search Certified Professional
  {
    id: "oracle-ai-vector-search",
    title: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
    issuerKey: "oracle",
    date: "Oct 2025",
    credentialId: "102502437DB23AIOCP",
    certificateImage: "/certificates/oracle-ai-vector-search.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "ai",
    skills: ["Vector Search Fundamentals", "Vector Databases", "Embeddings", "Similarity Search", "RAG"],
    description:
      "Demonstrates professional-level knowledge of AI Vector Search, vector indexes, similarity distance metrics, semantic search, and enterprise RAG architecture.",
    brandColor: "#C74634",
    accentGlow: "rgba(199, 70, 52, 0.35)",
  },

  // 5. Oracle GenAI Certified Professional (Sep 2025)
  {
    id: "oracle-genai-professional-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    issuerKey: "oracle",
    date: "Sep 2025",
    credentialId: "102502437OCI25GAIOCP",
    certificateImage: "/certificates/oracle-genai-professional.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "ai",
    skills: ["Generative AI", "Large Language Models (LLM)", "Fine-Tuning", "RAG Pipelines", "OCI GenAI"],
    description:
      "Demonstrates professional-level knowledge of Generative AI concepts, LLM fine-tuning, retrieval architectures, and deploying production model pipelines on OCI.",
    brandColor: "#C74634",
    accentGlow: "rgba(199, 70, 52, 0.35)",
  },

  // 6. Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Sep 2025)
  {
    id: "oracle-ai-foundations-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issuerKey: "oracle",
    date: "Sep 2025",
    credentialId: "102502437OCI25AICFA",
    certificateImage: "/certificates/oracle-ai-foundations-2025.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "ai",
    skills: ["Generative AI", "Machine Learning", "OCI AI Services", "LLMs"],
    description:
      "Comprehensive certification verifying mastery of OCI Artificial Intelligence architectures, generative models, and machine learning foundation concepts.",
    brandColor: "#C74634",
    accentGlow: "rgba(199, 70, 52, 0.35)",
  },

  // 7. SPARK IIT: AI Active Member & Participant
  {
    id: "sparkiit-ai-member",
    title: "Artificial Intelligence — Active Member & Participant",
    issuer: "SPARK IIT",
    issuerKey: "sparkiit",
    date: "Sep 2026",
    certificateImage: "/certificates/sparkiit-member.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "ai",
    skills: ["Artificial Intelligence (AI)", "Machine Learning", "Applied Research", "Collaboration"],
    description:
      "Certificate recognizing active membership and contributions in Artificial Intelligence initiatives, workshops, and project collaborations at SPARK IIT during 2026.",
    brandColor: "#38BDF8",
    accentGlow: "rgba(56, 189, 248, 0.35)",
  },

  // 8. SPARK IIT: AI Training (90 Days)
  {
    id: "sparkiit-ai-training",
    title: "Artificial Intelligence Training (90-Day Intensive)",
    issuer: "SPARK IIT",
    issuerKey: "sparkiit",
    date: "Sep 2026",
    certificateImage: "/certificates/sparkiit-training.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "ai",
    skills: ["Artificial Intelligence (AI)", "Machine Learning", "Deep Learning", "Model Training"],
    description:
      "Certificate documenting successful completion of a rigorous 90-day Artificial Intelligence training program at SPARK IIT, completed from July to September 2026.",
    brandColor: "#0284C7",
    accentGlow: "rgba(2, 132, 199, 0.35)",
  },

  // 9. Cognifyz IT Solutions: Machine Learning Intern
  {
    id: "cognifyz-ml-intern",
    title: "Machine Learning Internship Completion Certificate",
    issuer: "Cognifyz IT Solutions",
    issuerKey: "cognifyz",
    date: "Sep 2026",
    credentialId: "CTI/A1/C405549",
    certificateImage: "/certificates/cognifyz-ml-intern.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "ai",
    skills: ["Machine Learning", "Machine Learning Algorithms", "Data Science", "Python"],
    description:
      "Internship Completion Certificate for successfully completing a Machine Learning Internship at Cognifyz IT Solutions Pvt. Ltd., developing and validating production ML algorithms.",
    brandColor: "#0284C7",
    accentGlow: "rgba(2, 132, 199, 0.35)",
  },

  // 10. HCL GUVI: Claude AI in 90 Minutes
  {
    id: "hcl-guvi-claude-ai",
    title: "Claude AI in 90 Minutes: Build Your AI Work Assistant",
    issuer: "HCL GUVI",
    issuerKey: "guvi",
    date: "Aug 2026",
    credentialId: "9Qr27j357Ph81o7Yt6",
    certificateImage: "/certificates/claude-ai-guvi.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "ai",
    skills: ["Generative AI", "Artificial Intelligence (AI)", "Anthropic Claude", "AI Work Assistants"],
    description:
      "Certificate of Completion awarded by GUVI for successfully completing the Claude AI in 90 Minutes course, demonstrating practical prompt architecture and workflow automation.",
    brandColor: "#00A86B",
    accentGlow: "rgba(0, 168, 107, 0.35)",
  },

  // 11. Deloitte Data Analytics
  {
    id: "deloitte-analytics",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    issuerKey: "deloitte",
    date: "Jul 2026",
    credentialId: "68dcdda956c19017e850b83f",
    certificateImage: "/certificates/deloitte-analytics.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "data",
    skills: ["Data Analytics", "Forensic Technology", "Advanced Excel", "Data Cleaning"],
    description:
      "Successfully completed Deloitte's Data Analytics Job Simulation on Forage, gaining hands-on experience in data analysis, forensic technology, and executive insight reporting.",
    brandColor: "#86BC25",
    accentGlow: "rgba(134, 188, 37, 0.35)",
  },

  // 12. TCS iON Career Edge
  {
    id: "tcs-career-edge",
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS iON",
    issuerKey: "tcs",
    date: "Jun 2026",
    credentialId: "240640-28976732-1016",
    certificateImage: "/certificates/tcs-ion.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "dev",
    skills: ["Communication", "Presentation Skills", "Agile Methodologies", "Leadership"],
    description:
      "Comprehensive certification covering business communication, presentation, IT methodologies, collaborative workflows, and corporate development frameworks.",
    brandColor: "#E20074",
    accentGlow: "rgba(226, 0, 116, 0.35)",
  },

  // 13. AWS Machine Learning & AI Fundamentals
  {
    id: "aws-ml-ai-fundamentals",
    title: "AWS Training & Certification – Fundamentals of Machine Learning & AI",
    issuer: "Amazon Web Services (AWS)",
    issuerKey: "aws",
    date: "Jun 2026",
    certificateImage: "/certificates/aws-ml-ai.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "ai",
    skills: ["Machine Learning", "Artificial Intelligence (AI)", "Amazon Bedrock", "SageMaker"],
    description:
      "Completed AWS Skill Builder specialized curriculum on core AI algorithms, neural network design, model training, and generative AI deployments on AWS.",
    brandColor: "#FF9900",
    accentGlow: "rgba(255, 153, 0, 0.35)",
  },

  // 14. Cisco Cybersecurity
  {
    id: "cisco-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issuerKey: "cisco",
    date: "Jun 2026",
    certificateImage: "/certificates/cisco-cybersecurity.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "security",
    skills: ["Cybersecurity", "Information Security", "Network Defense", "Threat Intelligence"],
    description:
      "Gained foundational knowledge of cybersecurity, online threats, digital security, network defense, cryptographic safeguards, and information protection through Cisco.",
    brandColor: "#049FD9",
    accentGlow: "rgba(4, 159, 217, 0.35)",
  },

  // 15. Tata Data Visualisation
  {
    id: "tata-data-visualisation",
    title: "Tata - Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Forage (Tata)",
    issuerKey: "tata",
    date: "Jun 2026",
    credentialId: "fRnWE6dTKBsSJyrg5",
    certificateImage: "/certificates/tata-data-visualisation.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "data",
    skills: ["Data Analytics", "Data Visualization", "Executive Dashboards", "Data Cleaning"],
    description:
      "Completed a practical data analytics simulation focused on data cleaning, dashboard development, data visualization, business insights generation, and executive metrics.",
    brandColor: "#005691",
    accentGlow: "rgba(0, 86, 145, 0.35)",
  },

  // 16. Tata Cybersecurity Analyst
  {
    id: "tata-cybersecurity",
    title: "Tata - Cybersecurity Analyst Job Simulation",
    issuer: "Forage (Tata)",
    issuerKey: "tata",
    date: "Jun 2026",
    credentialId: "oL6ptn27GNbizp9Ch",
    certificateImage: "/certificates/tata-cybersecurity.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "security",
    skills: ["Identity and Access Management (IAM)", "Cybersecurity", "IAM Assessments", "Solution Design"],
    description:
      "Completed a cybersecurity simulation focused on Identity and Access Management (IAM), cybersecurity best practices, IAM assessments, and security solution design.",
    brandColor: "#005691",
    accentGlow: "rgba(0, 86, 145, 0.35)",
  },

  // 17. Tata GenAI Powered Data Analytics
  {
    id: "tata-genai-analytics",
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage (Tata)",
    issuerKey: "tata",
    date: "Jun 2026",
    credentialId: "F75ka7LhKE2sJGxyF",
    certificateImage: "/certificates/tata-genai-analytics.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "data",
    skills: ["Artificial Intelligence (AI)", "Data Visualization", "Generative AI", "Prompt Engineering"],
    description:
      "Completed Tata's GenAI Powered Data Analytics Job Simulation on Forage, developing hands-on experience in leveraging Generative AI for exploratory data analytics.",
    brandColor: "#005691",
    accentGlow: "rgba(0, 86, 145, 0.35)",
  },

  // 18. IBM Process Mining
  {
    id: "ibm-process-mining",
    title: "IBM Process Mining Project Journey",
    issuer: "IBM Training",
    issuerKey: "ibm",
    date: "Sep 2025",
    certificateImage: "/certificates/ibm-process-mining.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "data",
    skills: ["Process Mining", "Workflow Optimization", "Enterprise Automation", "Process Discovery"],
    description:
      "Certificate of Completion awarded by IBM Training on September 1, 2025, for hands-on proficiency in process mining, algorithmic bottleneck detection, and workflow transformation.",
    brandColor: "#0530AD",
    accentGlow: "rgba(5, 48, 173, 0.35)",
  },

  // 19. GreatStack Full Stack Food Delivery
  {
    id: "greatstack-fullstack",
    title: "Full Stack Food Delivery Project & Architecture",
    issuer: "GreatStack",
    issuerKey: "greatstack",
    date: "Aug 2025",
    credentialId: "fdeleWZyPOIDyzddhlmJG0huQbB7yj22",
    certificateImage: "/certificates/greatstack-fullstack.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "dev",
    skills: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
    description:
      "Engineered an end-to-end full stack web application featuring responsive customer UI, authentication, database schemas, admin dashboard, and payment gateway.",
    brandColor: "#6366F1",
    accentGlow: "rgba(99, 102, 241, 0.35)",
  },

  // 20. Microsoft Azure Cloud Concepts
  {
    id: "azure-cloud-concepts",
    title: "Introduction to Microsoft Azure: Describe Cloud Concepts",
    issuer: "Microsoft",
    issuerKey: "microsoft",
    date: "Aug 2025",
    certificateImage: "/certificates/azure-cloud-concepts.png",
    certificateUrl:
      "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications",
    category: "cloud",
    skills: ["Azure Architecture", "Serverless", "Cloud Security", "Hybrid Cloud"],
    description:
      "Microsoft verified credential for cloud computing fundamentals, compute virtualization, storage topologies, and Azure governance frameworks.",
    brandColor: "#0078D4",
    accentGlow: "rgba(0, 120, 212, 0.35)",
  },

  // 21. Skyscanner Front-End Engineering
  {
    id: "forage-skyscanner-frontend",
    title: "Skyscanner – Front-End Software Engineering Job Simulation",
    issuer: "Forage (Skyscanner)",
    issuerKey: "skyscanner",
    date: "Aug 2026",
    certificateUrl: "/cert-skyscanner.pdf",
    certificateImage: "/certificates/skyscanner-frontend.png",
    category: "dev",
    skills: ["React", "Front-End Development", "UI Components", "Agile", "Software Engineering"],
    description:
      "Completed Skyscanner's official front-end engineering job simulation on Forage, building real-world UI components and applying industry-standard React development practices.",
    brandColor: "#0770E3",
    accentGlow: "rgba(7, 112, 227, 0.35)",
  },

  // 22. Walnut Sales Technology
  {
    id: "forage-walnut",
    title: "Walnut – Sales Technology Job Simulation",
    issuer: "Forage (Walnut)",
    issuerKey: "walnut",
    date: "Jul 2026",
    certificateUrl: "/cert-forage-walnut.pdf",
    certificateImage: "/certificates/walnut-sales-tech.png",
    category: "dev",
    skills: ["Sales Technology", "SaaS Architecture", "Product Demo Workflows"],
    description:
      "Completed Walnut's sales technology job simulation on Forage, optimizing interactive SaaS product tours, analytics conversion funnels, and enterprise workflows.",
    brandColor: "#7C3AED",
    accentGlow: "rgba(124, 58, 237, 0.35)",
  },

  // 23. IEEE Introduction to IoT
  {
    id: "ieee-introduction-to-iot",
    title: "Introduction to IoT – IEEE Blended Learning Program",
    issuer: "IEEE",
    issuerKey: "ieee",
    date: "Aug 2026",
    credentialId: "411409732KK",
    certificateUrl: "/cert-ieee-iot.pdf",
    certificateImage: "/certificates/ieee-iot-certificate.png",
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
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  const copyCredential = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success("Credential ID copied!", {
      description: text,
      duration: 3000,
    });
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
              Verified Technical Credentials ({CERTIFICATIONS.length})
            </span>
          </div>

          <h2
            className="reveal mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground"
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
            A verified record of {CERTIFICATIONS.length} specialized certifications spanning Oracle Generative AI &amp; Agentic AI, Apache Kafka, AWS Machine Learning, Cisco Cybersecurity, and enterprise data analytics simulations.
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
          className="reveal mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
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

                {/* Certificate Document Thumbnail Preview */}
                {cert.certificateImage && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative mt-2 h-40 w-full cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-black/40 group/img transition-all hover:border-primary/60"
                  >
                    <img
                      src={cert.certificateImage}
                      alt={cert.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover/img:opacity-100">
                      <span className="flex items-center gap-1.5 rounded-full bg-primary/95 px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg glow-red">
                        <span>🔍</span> View Certificate
                      </span>
                    </div>
                  </div>
                )}

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
                        Official Verified Credential
                      </span>
                      <span className="text-xs text-primary font-bold">● Active</span>
                    </>
                  )}
                </div>

                {/* Actions: View Certificate & External Verification */}
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center justify-center gap-1 rounded-xl bg-primary/15 border border-primary/40 px-3 py-1.5 text-[11px] font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <span>🖼️</span> Preview
                  </button>

                  <a
                    href={cert.certificateUrl || "https://www.linkedin.com/in/kartik-raikar-kr/overlay/168172779/skill-associations-details/?associationType=certifications"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-xl border border-border/70 bg-card/60 px-3 py-1.5 text-[11px] font-semibold text-foreground transition-all duration-200 hover:border-primary/60 hover:text-primary"
                  >
                    <span>Verify</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
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

      {/* Certificate Lightbox / Fullscreen Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6"
        >
          {/* Backdrop */}
          <div
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          />

          {/* Modal Container */}
          <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-[0_25px_90px_-20px_color-mix(in_oklab,var(--primary)_50%,transparent)] backdrop-blur-2xl animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-secondary/60 px-6 py-4">
              <div className="flex items-center gap-3">
                <IssuerIcon issuerKey={selectedCert.issuerKey} />
                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-foreground">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {selectedCert.issuer} • Issued {selectedCert.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {selectedCert.certificateUrl && (
                  <a
                    href={selectedCert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <span>Verify Credential</span>
                    <span className="text-xs">↗</span>
                  </a>
                )}

                <button
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate modal"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-card text-muted-foreground transition-colors hover:border-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Certificate Image Frame */}
            <div className="flex flex-1 items-center justify-center overflow-y-auto bg-black/60 p-4 sm:p-8">
              <div className="relative max-h-[60vh] max-w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={selectedCert.certificateImage}
                  alt={selectedCert.title}
                  className="h-auto max-h-[60vh] w-auto max-w-full object-contain"
                />
              </div>
            </div>

            {/* Footer with details and Copy ID */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 bg-secondary/50 px-6 py-3.5 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                {selectedCert.credentialId && (
                  <span className="font-mono text-muted-foreground">
                    Credential ID:{" "}
                    <strong className="text-foreground">{selectedCert.credentialId}</strong>
                  </span>
                )}
                {selectedCert.credentialId && (
                  <button
                    onClick={() => copyCredential(selectedCert.credentialId!, selectedCert.id)}
                    className="rounded-lg border border-border/80 bg-card px-2.5 py-1 font-semibold text-foreground hover:bg-primary hover:text-primary-foreground"
                  >
                    {copiedId === selectedCert.id ? "✓ Copied" : "Copy ID 📋"}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {selectedCert.certificateImage && (
                  <a
                    href={selectedCert.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Open Full Image ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
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
    case "sparkiit":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] text-[#38BDF8] shadow-md font-black text-[9px] tracking-tight border border-sky-500/30">
          SPARK
        </div>
      );
    case "cognifyz":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0EA5E9] shadow-md font-bold text-[8px] border border-border">
          Cognifyz
        </div>
      );
    case "guvi":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A86B] text-white shadow-md font-black text-[10px] tracking-tight">
          GUVI
        </div>
      );
    case "linkedin":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-md font-black text-sm">
          in
        </div>
      );
    case "greatstack":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111827] text-[#6366F1] shadow-md font-black text-xs border border-indigo-500/30">
          GS
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
