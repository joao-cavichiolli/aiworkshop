"use client";
import { modules } from "../data/catalog";

export default function Hero() {
  const featured = modules.filter(m => m.featured);

  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Badge */}
        <div className="fade-up fade-up-1" style={{ marginBottom: 24 }}>
          <span className="tag">Hacklayer 4_1 · MCP Edition</span>
        </div>

        {/* Headline */}
        <h1 className="fade-up fade-up-2" style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(36px, 6vw, 72px)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: 24,
          maxWidth: 800,
        }}>
          Train your AI skills.<br />
          <span style={{ color: "var(--green)" }}>Build better</span> projects.
        </h1>

        {/* Subtitle */}
        <p className="fade-up fade-up-3" style={{
          fontFamily: "var(--font-sans)",
          fontSize: 18,
          color: "var(--text-secondary)",
          maxWidth: 540,
          marginBottom: 40,
          lineHeight: 1.7,
        }}>
          Prompt engineering, MCP tools, and AI agent patterns — all in one place,
          built for TAIKAI builders and developers.
        </p>

        {/* CTA */}
        <div className="fade-up fade-up-4" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 80 }}>
          <a href="#catalog" style={{
            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em",
            background: "var(--green)", color: "#080808", fontWeight: 700,
            padding: "12px 28px", borderRadius: 4, textDecoration: "none",
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            EXPLORE CATALOG
          </a>
          <a href="https://taikai.network" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em",
            border: "1px solid rgba(255,255,255,0.12)", color: "var(--text-secondary)",
            padding: "12px 28px", borderRadius: 4, textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#f0f0f0"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
          >
            VIEW ON TAIKAI ↗
          </a>
        </div>

        {/* Stats */}
        <div className="fade-up fade-up-5" style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 1, maxWidth: 480,
          border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden",
        }}>
          {[
            { value: modules.length.toString(), label: "Modules" },
            { value: modules.reduce((a, m) => a + m.lessons, 0).toString(), label: "Lessons" },
            { value: "4", label: "Categories" },
            { value: "Free", label: "Access" },
          ].map((stat) => (
            <div key={stat.label} style={{
              padding: "20px 16px", background: "var(--bg-card)", textAlign: "center",
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, color: "var(--green)" }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
