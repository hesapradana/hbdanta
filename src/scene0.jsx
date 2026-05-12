import { useState, useEffect } from "react";
import { Rain } from "./shared";
import { scene0 } from "./content";

export function Scene0({ active, onAdvance }) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t = [
      setTimeout(() => setStage(1), 1200),
      setTimeout(() => setStage(2), 3400),
      setTimeout(() => setStage(3), 5600),
      setTimeout(() => setStage(4), 7600),
      setTimeout(() => onAdvance(), 9200),
    ];
    return () => t.forEach(clearTimeout);
  }, [active]);

  return (
    <div
      className="scene on"
      style={{
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
        <Rain density={30} opacity={0.25} />
      </div>
      <div
        style={{
          textAlign: "center",
          fontFamily: "var(--mono)",
          fontSize: 13,
          letterSpacing: "0.2em",
          color: "#5a564c",
        }}
      >
        <div
          style={{ opacity: stage >= 1 ? 1 : 0, transition: "opacity 1.4s" }}
        >
          {scene0.loading}
        </div>
        <div
          style={{
            marginTop: 36,
            opacity: stage >= 2 ? 1 : 0,
            transition: "opacity 1.4s",
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: 18,
            letterSpacing: "normal",
            color: "#7a7367",
          }}
        >
          {scene0.soon}
        </div>
        <div
          style={{
            marginTop: 18,
            opacity: stage >= 3 ? 1 : 0,
            transition: "opacity 1.4s",
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: 18,
            letterSpacing: "normal",
            color: "#5a564c",
          }}
        >
          {scene0.embarrassing}
        </div>
        <div
          style={{
            marginTop: 48,
            opacity: stage >= 4 ? 0 : stage >= 1 ? 1 : 0,
            transition: "opacity 1.6s",
            fontSize: 9,
            color: "#3a3631",
          }}
        >
          {scene0.tagline}
        </div>
      </div>
    </div>
  );
}
