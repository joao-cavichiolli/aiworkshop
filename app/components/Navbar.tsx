"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(8,8,8,0.85)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 32, height: 32, border: "1px solid rgba(34,197,94,0.5)",
            borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <polygon points="9,1 16,5 16,13 9,17 2,13 2,5" stroke="#22c55e" strokeWidth="1.2" fill="none"/>
              <circle cx="9" cy="9" r="2" fill="#22c55e"/>
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, color: "#f0f0f0" }}>
            AI<span style={{ color: "var(--green)" }}>Workshop</span>
          </span>
        </a>

        {/* Links desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
          {["Catalog", "About", "TAIKAI"].map((item) => (
            <a key={item} href={item === "TAIKAI" ? "https://taikai.network" : `#${item.toLowerCase()}`}
              target={item === "TAIKAI" ? "_blank" : undefined}
              rel={item === "TAIKAI" ? "noopener noreferrer" : undefined}
              style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0f0f0")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {item}
            </a>
          ))}
          <a href="https://taikai.network/layerx/hackathons/hacklayer4-1-mcp-edition" target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--green)",
              border: "1px solid var(--green-border)", borderRadius: 4, padding: "6px 14px",
              textDecoration: "none", letterSpacing: "0.05em", transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(34,197,94,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            Hacklayer 4_1 ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
