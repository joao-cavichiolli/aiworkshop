"use client";
import { useState } from "react";

function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* hexagon */}
      <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" stroke="#7B5CF6" strokeWidth="1.2" fill="none"/>
      {/* spokes */}
      <line x1="20" y1="20" x2="20" y2="4"  stroke="#7B5CF6" strokeWidth="1"/>
      <line x1="20" y1="20" x2="34" y2="12" stroke="#7B5CF6" strokeWidth="1"/>
      <line x1="20" y1="20" x2="34" y2="28" stroke="#7B5CF6" strokeWidth="1"/>
      <line x1="20" y1="20" x2="20" y2="36" stroke="#7B5CF6" strokeWidth="1"/>
      <line x1="20" y1="20" x2="6"  y2="28" stroke="#7B5CF6" strokeWidth="1"/>
      <line x1="20" y1="20" x2="6"  y2="12" stroke="#7B5CF6" strokeWidth="1"/>
      {/* outer nodes */}
      <circle cx="20" cy="4"  r="2.2" fill="#7B5CF6"/>
      <circle cx="34" cy="12" r="2.2" fill="#7B5CF6"/>
      <circle cx="34" cy="28" r="2.2" fill="#7B5CF6"/>
      <circle cx="20" cy="36" r="2.2" fill="#7B5CF6"/>
      <circle cx="6"  cy="28" r="2.2" fill="#7B5CF6"/>
      <circle cx="6"  cy="12" r="2.2" fill="#7B5CF6"/>
      {/* center node */}
      <circle cx="20" cy="20" r="3" fill="#7B5CF6"/>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: "1px solid rgba(0,0,0,0.08)",
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <LogoIcon size={32} />
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, color: "var(--text-primary)" }}>
            AI<span style={{ color: "var(--purple)" }}>Workshop</span>
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
          {["Catalog", "About", "TAIKAI"].map((item) => (
            <a key={item} href={item === "TAIKAI" ? "https://taikai.network" : `#${item.toLowerCase()}`}
              target={item === "TAIKAI" ? "_blank" : undefined}
              rel={item === "TAIKAI" ? "noopener noreferrer" : undefined}
              style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {item}
            </a>
          ))}
          <a href="https://taikai.network/layerx/hackathons/hacklayer4-1-mcp-edition" target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "#ffffff",
              background: "var(--purple-dark)", borderRadius: 6, padding: "8px 16px",
              textDecoration: "none", letterSpacing: "0.05em", transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Hacklayer 4_1 ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
