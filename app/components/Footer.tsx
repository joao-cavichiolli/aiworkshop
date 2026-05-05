"use client";
export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)", padding: "32px 24px",
      position: "relative", zIndex: 1,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 24, height: 24, border: "1px solid rgba(34,197,94,0.4)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
              <polygon points="9,1 16,5 16,13 9,17 2,13 2,5" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
              <circle cx="9" cy="9" r="2" fill="#22c55e"/>
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>
            AIWorkshop · Hacklayer 4_1 MCP Edition
          </span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "TAIKAI", href: "https://taikai.network" },
            { label: "GitHub", href: "https://github.com/joao-cavichiolli/aiworkshop" },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--purple)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
