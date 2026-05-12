import { useState, useEffect } from "react";
import { LineSeq, Rain } from "./shared";
import { scene1 } from "./content";
import SpookyHouse from "./house";

export function Scene1({ active, onAdvance }) {
  const [textGo, setTextGo] = useState(false);
  const [btn, setBtn] = useState(false);
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = [
      setTimeout(() => setZoom(true), 400),
      setTimeout(() => setTextGo(true), 2200),
      setTimeout(() => setBtn(true), 2800),
    ];
    return () => t.forEach(clearTimeout);
  }, [active]);

  return (
    <div className={`scene ${active ? "on" : ""}`}>
      <div className="sky"></div>
      <div
        style={{
          marginBottom: "14%",
          transform: zoom ? "scale(1.08)" : "scale(1)",
          transition: "transform 14s ease-out",
        }}
      >
        <SpookyHouse />
      </div>
      <Rain density={45} opacity={0.35} />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "16%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
        }}
      >
        <LineSeq lines={scene1.lines} start={textGo} />
        <div
          style={{
            marginTop: 28,
            opacity: btn ? 1 : 0,
            transition: "opacity 1.2s",
          }}
        >
          <button className="cta" onClick={onAdvance}>
            {scene1.enterBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
