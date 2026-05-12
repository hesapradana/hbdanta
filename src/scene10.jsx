import { useState, useEffect } from "react";
import { audio } from "./shared";
import { scene10 } from "./content";

export function Scene10({ active, onReset }) {
  const [line, setLine] = useState(0);
  const [showBig, setShowBig] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [fading, setFading] = useState(false);
  const [final, setFinal] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = [
      setTimeout(() => setLine(1), 2200),
      setTimeout(() => setLine(2), 5600),
      setTimeout(() => setLine(3), 8800),
      setTimeout(() => setLine(4), 12400),
      setTimeout(() => setLine(5), 15600),
      setTimeout(() => setShowBig(true), 18400),
      setTimeout(() => setShowBtn(true), 21000),
    ];
    return () => t.forEach(clearTimeout);
  }, [active]);

  const handlePulang = () => {
    setFading(true);
    audio._fadeTo(0, 1800, () => { if (audio.el) audio.el.pause(); });
    setTimeout(() => onReset(), 1800);
  };

  return (
    <div
      className={`scene ${active ? "on" : ""}`}
      style={{ background: "#06080c" }}
    >
      <div
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 1.6s ease",
          position: "absolute",
          inset: 0,
        }}
      >
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <defs>
            <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a0e1a" />
              <stop offset="60%" stopColor="#141828" />
              <stop offset="100%" stopColor="#1a2238" />
            </linearGradient>
            <linearGradient id="cityHaze" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f4b769" stopOpacity="0" />
              <stop offset="100%" stopColor="#f4b769" stopOpacity="0.18" />
            </linearGradient>
            <radialGradient id="warmEmbrace" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffce8a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1600" height="900" fill="url(#nightSky)" />
          {[...Array(40)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1600}
              cy={Math.random() * 400}
              r={Math.random() * 0.8 + 0.3}
              fill="#e8e0d0"
              opacity={0.4 + Math.random() * 0.6}
            />
          ))}
          <g>
            {[...Array(28)].map((_, i) => {
              const x = i * 60 + Math.random() * 20,
                h = 60 + Math.random() * 180,
                y = 540 - h;
              return (
                <g key={i}>
                  <rect x={x} y={y} width="50" height={h} fill="#080a14" />
                  {[...Array(Math.floor(h / 20))].map((_, j) =>
                    Math.random() > 0.5 ? (
                      <rect
                        key={j}
                        x={x + 4 + (j % 3) * 14}
                        y={y + 10 + j * 18}
                        width="6"
                        height="6"
                        fill={Math.random() > 0.7 ? "#ffd28a" : "#cfe0f0"}
                        opacity={0.7 + Math.random() * 0.3}
                      />
                    ) : null,
                  )}
                </g>
              );
            })}
          </g>
          <rect x="0" y="400" width="1600" height="200" fill="url(#cityHaze)" />
          <rect x="0" y="600" width="1600" height="300" fill="#0a0a0e" />
          <rect x="0" y="600" width="1600" height="20" fill="#1a1812" />
          <ellipse
            cx="800"
            cy="700"
            rx="180"
            ry="6"
            fill="#000"
            opacity="0.5"
          />
          <circle cx="760" cy="680" r="30" fill="url(#warmEmbrace)" />
          {[...Array(14)].map((_, i) => (
            <g key={i}>
              <line
                x1={i * 120}
                y1="100"
                x2={i * 120 + 60}
                y2="120"
                stroke="#2a2218"
                strokeWidth="0.8"
              />
              <line
                x1={i * 120 + 60}
                y1="120"
                x2={(i + 1) * 120}
                y2="100"
                stroke="#2a2218"
                strokeWidth="0.8"
              />
              <circle
                cx={i * 120 + 60}
                cy="120"
                r="3"
                fill="#ffd28a"
                opacity="0.9"
                className="pulse-warm"
              />
            </g>
          ))}
        </svg>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "18%",
            textAlign: "center",
          }}
        >
          {scene10.lines.map((ln, i) => (
            <div
              key={i}
              style={{
                opacity: line > i ? 1 : 0,
                transform: line > i ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 1.6s ease, transform 1.6s ease",
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: ln.size,
                color: ln.warm
                  ? "var(--warm-soft)"
                  : ln.faint
                    ? "var(--ink-faint)"
                    : "var(--ink)",
                marginBottom: 24,
                lineHeight: 1.3,
                whiteSpace: "pre-line",
                textShadow: ln.warm
                  ? "0 0 24px rgba(244,183,105,0.35)"
                  : "none",
              }}
            >
              {ln.t}
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "22%",
            textAlign: "center",
            opacity: showBig ? 1 : 0,
            transform: showBig ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
            transition: "opacity 1.8s ease, transform 1.8s ease",
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: 42,
            color: "var(--warm)",
            textShadow: "0 0 40px rgba(244,183,105,0.6)",
            lineHeight: 1.2,
            padding: "0 32px",
            pointerEvents: "none",
          }}
        >
          {scene10.bigLine}
        </div>

        {showBtn && !fading && (
          <div
            style={{
              position: "absolute",
              bottom: 50,
              left: 0,
              right: 0,
              textAlign: "center",
            }}
          >
            <button className="cta" onClick={handlePulang}>
              {scene10.pulangBtn}
            </button>
          </div>
        )}
      </div>
      {final && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "finalIn 2s ease both",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <style>{`@keyframes finalIn { from { opacity: 0;} to { opacity: 1;}}`}</style>
          <button
            onClick={onReset}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--ink-faint)",
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              cursor: "pointer",
              textTransform: "lowercase",
            }}
          >
            {scene10.replayBtn}
          </button>
        </div>
      )}
    </div>
  );
}
