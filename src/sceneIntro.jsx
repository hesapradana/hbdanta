import { useState, useEffect } from "react";
import { sceneJourney } from "./content";

export function SceneIntro({ active, onAdvance }) {
  const [visible, setVisible] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!active) return;
    let t = 800;
    const timers = sceneJourney.lines.map((ln, i) => {
      t += ln.delay;
      return setTimeout(() => setVisible(i + 1), t);
    });
    timers.push(setTimeout(() => setShowBtn(true), t + 600));
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <div
      className={`scene ${active ? "on" : ""}`}
      style={{ background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div
        style={{
          textAlign: "center",
          fontFamily: "var(--mono)",
          fontSize: 13,
          letterSpacing: "0.18em",
          color: "#6a6a6a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}
      >
        {sceneJourney.lines.map((ln, i) => (
          <div
            key={i}
            style={{
              opacity: visible > i ? 1 : 0,
              transform: visible > i ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 1s ease, transform 1s ease",
            }}
          >
            {ln.text}
          </div>
        ))}
        <div style={{ opacity: showBtn ? 1 : 0, transition: "opacity 1.2s ease", marginTop: 24 }}>
          <button className="cta" onClick={onAdvance}>
            {sceneJourney.enterBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
