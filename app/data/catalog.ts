export type Level = "Beginner" | "Intermediate" | "Advanced";
export type Category = "Prompt Engineering" | "MCP Tools" | "Agents & Orchestration" | "AI Concepts";

export interface Module {
  id: string;
  title: string;
  description: string;
  category: Category;
  level: Level;
  duration: string;
  lessons: number;
  tags: string[];
  featured?: boolean;
}

export const modules: Module[] = [
  {
    id: "prompt-foundations",
    title: "Prompt Engineering Foundations",
    description: "Master the core principles of writing effective prompts. Learn how LLMs process instructions, what makes a prompt clear vs. ambiguous, and how to structure requests for consistent results.",
    category: "Prompt Engineering",
    level: "Beginner",
    duration: "2h 30min",
    lessons: 8,
    tags: ["prompts", "llm", "basics"],
    featured: true,
  },
  {
    id: "advanced-prompting",
    title: "Advanced Prompting Techniques",
    description: "Go beyond basics with chain-of-thought, few-shot learning, role prompting, and structured output formatting. Build reusable prompt templates for complex tasks.",
    category: "Prompt Engineering",
    level: "Intermediate",
    duration: "3h 15min",
    lessons: 11,
    tags: ["chain-of-thought", "few-shot", "templates"],
  },
  {
    id: "mcp-intro",
    title: "Introduction to MCP",
    description: "Understand the Model Context Protocol — what it is, why it matters, and how it enables AI models to interact with external tools and services in a standardized way.",
    category: "MCP Tools",
    level: "Beginner",
    duration: "1h 45min",
    lessons: 6,
    tags: ["mcp", "protocol", "tools"],
    featured: true,
  },
  {
    id: "mcp-servers",
    title: "Building with MCP Servers",
    description: "Connect to real-world MCP servers: file systems, databases, APIs, and more. Learn how to configure, authenticate, and orchestrate multiple MCP tools in your AI workflows.",
    category: "MCP Tools",
    level: "Intermediate",
    duration: "4h",
    lessons: 14,
    tags: ["mcp", "servers", "integration"],
  },
  {
    id: "mcp-custom",
    title: "Creating Custom MCP Servers",
    description: "Build your own MCP server from scratch. Expose your APIs and data sources to AI models using the MCP standard, enabling powerful agentic integrations.",
    category: "MCP Tools",
    level: "Advanced",
    duration: "5h",
    lessons: 16,
    tags: ["mcp", "custom", "typescript"],
  },
  {
    id: "ai-agents-intro",
    title: "AI Agents Fundamentals",
    description: "Learn what AI agents are, how they reason and plan, and the difference between single-step and multi-step agentic workflows. Build your first autonomous agent.",
    category: "Agents & Orchestration",
    level: "Beginner",
    duration: "2h",
    lessons: 7,
    tags: ["agents", "reasoning", "planning"],
  },
  {
    id: "agent-orchestration",
    title: "Multi-Agent Orchestration",
    description: "Design systems where multiple AI agents collaborate to solve complex tasks. Explore patterns like supervisor-worker, parallel execution, and handoff strategies.",
    category: "Agents & Orchestration",
    level: "Advanced",
    duration: "6h",
    lessons: 18,
    tags: ["multi-agent", "orchestration", "patterns"],
    featured: true,
  },
  {
    id: "context-windows",
    title: "Understanding Context & Memory",
    description: "Deep dive into how LLMs handle context windows, token limits, and memory. Learn strategies to manage long conversations, retrieval-augmented generation, and state persistence.",
    category: "AI Concepts",
    level: "Intermediate",
    duration: "2h 45min",
    lessons: 9,
    tags: ["context", "memory", "rag"],
  },
  {
    id: "llm-evaluation",
    title: "Evaluating LLM Outputs",
    description: "Build robust evaluation frameworks to measure quality, accuracy, and reliability of AI outputs. Learn scoring methods, human feedback loops, and automated testing.",
    category: "AI Concepts",
    level: "Intermediate",
    duration: "3h",
    lessons: 10,
    tags: ["eval", "quality", "testing"],
  },
  {
    id: "ai-for-hackathons",
    title: "AI Strategies for Hackathons",
    description: "Practical playbook for using AI effectively in 24-48h hackathons. Scope projects smartly, pick the right models and tools, and ship working demos under time pressure.",
    category: "AI Concepts",
    level: "Beginner",
    duration: "1h 30min",
    lessons: 5,
    tags: ["hackathon", "strategy", "practical"],
    featured: true,
  },
];

export const categories: Category[] = [
  "Prompt Engineering",
  "MCP Tools",
  "Agents & Orchestration",
  "AI Concepts",
];

export const levelColors: Record<Level, string> = {
  Beginner: "#22c55e",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};
