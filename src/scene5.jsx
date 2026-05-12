import { useState, useEffect } from "react";
import { scene5 } from "./content";

const LAMPS = [
  { lx: 145, ly: 500, rx: 1455, ry: 500, r: 320 },
  { lx: 268, ly: 430, rx: 1332, ry: 430, r: 240 },
  { lx: 366, ly: 370, rx: 1234, ry: 370, r: 180 },
  { lx: 440, ly: 320, rx: 1160, ry: 320, r: 130 },
  { lx: 800, ly: 300, rx: null, ry: null, r: 100 },
];

export function Scene5({ active, onAdvance }) {
  const [step, setStep] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (!active) return;
    setStep(0);
    setTextVisible(false);
    const t = setTimeout(() => setTextVisible(true), 600);
    return () => clearTimeout(t);
  }, [active]);

  const handleStep = () => {
    const next = step + 1;
    if (next >= scene5.lines.length) {
      onAdvance();
      return;
    }
    setTextVisible(false);
    setTimeout(() => {
      setStep(next);
      setTextVisible(true);
    }, 500);
  };

  const ln = scene5.lines[step];
  const lamp = LAMPS[step];

  return (
    <div
      className={`scene ${active ? "on" : ""}`}
      style={{ background: "#000" }}
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          {LAMPS.map((l, i) => (
            <radialGradient key={`gl${i}`} id={`gl${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffe8a0" stopOpacity={i === step ? "0.22" : "0"} />
              <stop offset="100%" stopColor="#ffe8a0" stopOpacity="0" />
            </radialGradient>
          ))}
          {LAMPS.filter(l => l.rx).map((l, i) => (
            <radialGradient key={`gr${i}`} id={`gr${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffe8a0" stopOpacity={i === step ? "0.22" : "0"} />
              <stop offset="100%" stopColor="#ffe8a0" stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* full dark */}
        <rect width="1600" height="900" fill="#060608" />

        {/* hallway structure — barely visible */}
        <polygon points="0,0 0,900 380,720 380,180" fill="#0a0b0e" />
        <polygon points="1600,0 1600,900 1220,720 1220,180" fill="#0a0b0e" />
        <polygon points="0,0 1600,0 1220,180 380,180" fill="#08090c" />
        <polygon points="0,900 1600,900 1220,720 380,720" fill="#040506" />

        {/* door at the end — faint outline */}
        <rect x="760" y="320" width="80" height="180"
          fill="#000" stroke="#1a1410" strokeWidth="1" opacity="0.6" />

        {/* lamp glow pools */}
        {LAMPS.map((l, i) => (
          <g key={i}>
            <ellipse
              cx={l.lx} cy={l.ly}
              rx={l.r * 1.8} ry={l.r * 0.9}
              fill={`url(#gl${i})`}
              style={{ transition: "opacity 0.6s ease" }}
              opacity={i === step ? 1 : 0}
            />
            {l.rx && (
              <ellipse
                cx={l.rx} cy={l.ry}
                rx={l.r * 1.8} ry={l.r * 0.9}
                fill={`url(#gr${i})`}
                style={{ transition: "opacity 0.6s ease" }}
                opacity={i === step ? 1 : 0}
              />
            )}
          </g>
        ))}

        {/* lamp fixtures */}
        {LAMPS.map((l, i) => {
          const lit = i === step;
          const scale = 1 - i * 0.15;
          return (
            <g key={i}>
              {/* left fixture */}
              <rect
                x={l.lx - 12 * scale} y={l.ly - 80 * scale}
                width={24 * scale} height={3 * scale}
                fill={lit ? "#ffd28a" : "#222"}
                style={{ transition: "fill 0.5s" }}
              />
              {/* right fixture */}
              {l.rx && (
                <rect
                  x={l.rx - 12 * scale} y={l.ry - 80 * scale}
                  width={24 * scale} height={3 * scale}
                  fill={lit ? "#ffd28a" : "#222"}
                  style={{ transition: "fill 0.5s" }}
                />
              )}
            </g>
          );
        })}
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        <div
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: ln.size || 26,
            color: ln.warm ? "var(--warm)" : ln.dim ? "var(--ink-dim)" : "var(--ink)",
            textShadow: ln.warm ? "0 0 24px rgba(244,183,105,0.4)" : "none",
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            textAlign: "center",
            padding: "0 40px",
            pointerEvents: "none",
          }}
        >
          {ln.text}
        </div>

        <div
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <button className="cta" onClick={handleStep}>
            {ln.btn}
          </button>
        </div>
      </div>
    </div>
  );
}
