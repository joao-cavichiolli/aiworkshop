"use client";
export default function About() {
  const pillars = [
    {
      icon: "⬡",
      title: "Prompt Engineering",
      desc: "From zero to advanced. Learn to write prompts that consistently produce great results across any LLM.",
    },
    {
      icon: "⬡",
      title: "MCP Ecosystem",
      desc: "Hands-on tutorials for the most relevant MCP servers in the market. Connect AI to real tools.",
    },
    {
      icon: "⬡",
      title: "Agent Patterns",
      desc: "Design autonomous agents and multi-agent systems that can reason, plan, and act independently.",
    },
    {
      icon: "⬡",
      title: "Hackathon Ready",
      desc: "Practical AI strategies specifically for hackathon contexts — ship fast, ship smart.",
    },
  ];

  return (
    <section id="about" style={{ padding: "80px 0 100px", borderTop: "1px solid var(--border)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="about-grid">

          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 32, height: 1, background: "var(--green)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--green)", letterSpacing: "0.1em" }}>
                ABOUT THE PROJECT
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.2 }}>
              Built for TAIKAI.<br />Designed for builders.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 16 }}>
              AIWorkshop is an in-platform learning experience that lives inside TAIKAI. It was born from a simple observation: most hackathon participants have great ideas but struggle to leverage AI effectively.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 32 }}>
              Instead of pointing people to scattered external resources, AIWorkshop brings curated, practical AI training directly into the builder's environment — where they already are.
            </p>
            <a href="https://taikai.network/layerx/hackathons/hacklayer4-1-mcp-edition" target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em",
                border: "1px solid var(--green-border)", color: "var(--green)",
                padding: "10px 20px", borderRadius: 4, textDecoration: "none",
                display: "inline-block", transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(34,197,94,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              SEE PROJECT ON TAIKAI ↗
            </a>
          </div>

          {/* Right: pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {pillars.map((p) => (
              <div key={p.title} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: 8, padding: "20px",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--green-border)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div style={{ color: "var(--green)", fontSize: 20, marginBottom: 10 }}>⬡</div>
                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, marginBottom: 8, color: "#f0f0f0" }}>
                  {p.title}
                </h4>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
