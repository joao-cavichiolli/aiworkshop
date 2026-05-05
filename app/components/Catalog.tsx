"use client";
import { useState } from "react";
import { modules, categories, levelColors, type Category, type Level } from "../data/catalog";
import { Clock, BookOpen, ChevronRight } from "lucide-react";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [activeLevel, setActiveLevel] = useState<Level | "All">("All");

  const filtered = modules.filter(m => {
    const catOk = activeCategory === "All" || m.category === activeCategory;
    const lvlOk = activeLevel === "All" || m.level === activeLevel;
    return catOk && lvlOk;
  });

  return (
    <section id="catalog" style={{ padding: "80px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: "var(--green)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--green)", letterSpacing: "0.1em" }}>
              TRAINING CATALOG
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            All Modules
          </h2>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", alignSelf: "center", letterSpacing: "0.08em", marginRight: 4 }}>
            CATEGORY
          </span>
          {(["All", ...categories] as const).map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat as Category | "All")}
              style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em",
                padding: "5px 12px", borderRadius: 3, border: "1px solid",
                borderColor: activeCategory === cat ? "var(--green)" : "var(--border)",
                background: activeCategory === cat ? "rgba(34,197,94,0.1)" : "transparent",
                color: activeCategory === cat ? "var(--green)" : "var(--text-secondary)",
                cursor: "pointer", transition: "all 0.15s",
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", alignSelf: "center", letterSpacing: "0.08em", marginRight: 4 }}>
            LEVEL
          </span>
          {(["All", "Beginner", "Intermediate", "Advanced"] as const).map(lvl => (
            <button key={lvl} onClick={() => setActiveLevel(lvl as Level | "All")}
              style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em",
                padding: "5px 12px", borderRadius: 3, border: "1px solid",
                borderColor: activeLevel === lvl ? (lvl === "All" ? "var(--green)" : levelColors[lvl as Level]) : "var(--border)",
                background: activeLevel === lvl ? `rgba(${lvl === "Beginner" ? "34,197,94" : lvl === "Intermediate" ? "245,158,11" : lvl === "Advanced" ? "239,68,68" : "34,197,94"},0.1)` : "transparent",
                color: activeLevel === lvl ? (lvl === "All" ? "var(--green)" : levelColors[lvl as Level]) : "var(--text-secondary)",
                cursor: "pointer", transition: "all 0.15s",
              }}
            >
              {lvl.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Count */}
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", marginBottom: 24, letterSpacing: "0.06em" }}>
          {filtered.length} MODULE{filtered.length !== 1 ? "S" : ""}
        </p>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 16,
        }}>
          {filtered.map((mod, i) => (
            <div key={mod.id} className={`card-link fade-up fade-up-${Math.min(i + 1, 6)}`}>
              <div style={{ padding: "24px" }}>
                {/* Top row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em", color: "var(--text-muted)" }}>
                    {mod.category.toUpperCase()}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.06em",
                    padding: "2px 8px", borderRadius: 2,
                    border: `1px solid ${levelColors[mod.level]}40`,
                    color: levelColors[mod.level],
                  }}>
                    {mod.level.toUpperCase()}
                  </span>
                </div>

                {/* Featured indicator */}
                {mod.featured && (
                  <div style={{ marginBottom: 10 }}>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em",
                      color: "var(--green)", borderBottom: "1px solid rgba(34,197,94,0.3)", paddingBottom: 1,
                    }}>
                      ★ FEATURED
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 600, lineHeight: 1.3, marginBottom: 10, color: "#f0f0f0" }}>
                  {mod.title}
                </h3>

                {/* Description */}
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 20 }}>
                  {mod.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {mod.tags.map(tag => (
                    <span key={tag} className="tag" style={{ fontSize: 9 }}>{tag}</span>
                  ))}
                </div>

                {/* Footer */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  borderTop: "1px solid var(--border)", paddingTop: 16,
                }}>
                  <div style={{ display: "flex", gap: 16 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)" }}>
                      <Clock size={11} color="var(--text-muted)" />
                      {mod.duration}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)" }}>
                      <BookOpen size={11} color="var(--text-muted)" />
                      {mod.lessons} lessons
                    </span>
                  </div>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--green)" }}>
                    START <ChevronRight size={11} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>
            No modules match the selected filters.
          </div>
        )}
      </div>
    </section>
  );
}
