import { useState, useEffect } from "react";
import { scene4 } from "./content";

export function Scene4({ active, onAdvance }) {
  const [revealed, setRevealed] = useState(false);
  const [opened, setOpened] = useState({});
  const [showSpecial, setShowSpecial] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setRevealed(true), 600);
    return () => clearTimeout(t);
  }, [active]);

  const openedCount = Object.values(opened).filter(Boolean).length;
  useEffect(() => {
    if (openedCount >= 4 && !showSpecial) {
      const t = setTimeout(() => setShowSpecial(true), 1200);
      return () => clearTimeout(t);
    }
  }, [openedCount, showSpecial]);

  return (
    <div
      className={`scene ${active ? "on" : ""}`}
      style={{ background: "#0e0c08" }}
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
          <linearGradient id="fridgeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d8d0c0" />
            <stop offset="100%" stopColor="#a89880" />
          </linearGradient>
          <radialGradient id="kitchenLamp" cx="50%" cy="0%" r="60%">
            <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffce8a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1600" height="900" fill="#1a1812" />
        <rect width="1600" height="900" fill="url(#kitchenLamp)" />
        <rect x="0" y="720" width="1600" height="180" fill="#2a2218" />
        <rect x="0" y="710" width="1600" height="14" fill="#3a3020" />
        <rect x="0" y="120" width="200" height="240" fill="#2a2218" />
        <rect x="1400" y="120" width="200" height="240" fill="#2a2218" />
        <line
          x1="100"
          y1="120"
          x2="100"
          y2="360"
          stroke="#1a1208"
          strokeWidth="1"
        />
        <line
          x1="1500"
          y1="120"
          x2="1500"
          y2="360"
          stroke="#1a1208"
          strokeWidth="1"
        />
        <rect x="240" y="160" width="300" height="220" fill="#0a0e16" />
        <rect
          x="240"
          y="160"
          width="300"
          height="220"
          fill="none"
          stroke="#3a2a1c"
          strokeWidth="6"
        />
        <line
          x1="390"
          y1="160"
          x2="390"
          y2="380"
          stroke="#3a2a1c"
          strokeWidth="3"
        />
        <line
          x1="240"
          y1="270"
          x2="540"
          y2="270"
          stroke="#3a2a1c"
          strokeWidth="3"
        />
        <g transform="translate(600, 690)">
          <ellipse cx="0" cy="10" rx="30" ry="6" fill="#000" opacity="0.5" />
          <rect x="-20" y="-30" width="40" height="40" rx="3" fill="#c89860" />
          <path
            d="M 20 -22 Q 32 -22 32 -10 Q 32 2 20 2"
            fill="none"
            stroke="#c89860"
            strokeWidth="4"
          />
          <ellipse cx="0" cy="-28" rx="18" ry="4" fill="#3a2818" />
          <path
            d="M -6 -34 Q -2 -44 2 -50 Q -2 -56 2 -64"
            stroke="#c0b8a8"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M 4 -34 Q 8 -44 4 -52 Q 8 -58 4 -66"
            stroke="#c0b8a8"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </g>
        <rect
          x="900"
          y="200"
          width="380"
          height="520"
          fill="url(#fridgeGrad)"
        />
        <rect
          x="900"
          y="200"
          width="380"
          height="220"
          fill="none"
          stroke="#7a6a52"
          strokeWidth="1"
        />
        <line
          x1="900"
          y1="420"
          x2="1280"
          y2="420"
          stroke="#7a6a52"
          strokeWidth="2"
        />
        <rect x="908" y="240" width="6" height="140" fill="#3a2a1c" />
        <rect x="908" y="460" width="6" height="200" fill="#3a2a1c" />
      </svg>
      {scene4.notes.map((n, i) => (
        <div
          key={n.id}
          onClick={() => setOpened((o) => ({ ...o, [n.id]: true }))}
          style={{
            position: "absolute",
            left: n.x,
            top: n.y,
            transform: `translate(-50%, -50%) rotate(${n.rot}deg)`,
            cursor: "pointer",
            opacity: revealed ? 1 : 0,
            transition: `opacity 1.4s ease ${i * 0.15}s, filter 0.4s`,
            filter: opened[n.id]
              ? "brightness(1) saturate(1)"
              : "brightness(0.7) saturate(0.6)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: n.w,
              padding: "14px 14px 18px",
              background: n.color,
              boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
              fontFamily: "var(--hand)",
              fontSize: 18,
              color: "#1f1612",
              lineHeight: 1.25,
              whiteSpace: "pre-line",
              textAlign: "center",
              minHeight: 90,
              position: "relative",
            }}
          >
            {opened[n.id] ? (
              n.text
            ) : (
              <span style={{ opacity: 0.3, fontSize: 14 }}>—— note ——</span>
            )}
            <div
              style={{
                position: "absolute",
                top: -6,
                left: "50%",
                transform: "translateX(-50%)",
                width: 30,
                height: 12,
                background: "rgba(0,0,0,0.15)",
                borderRadius: 2,
              }}
            ></div>
          </div>
        </div>
      ))}
      {showSpecial && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "62%",
            transform: "translate(-50%, -50%)",
            zIndex: 30,
            animation: "specialFloat 1.2s ease forwards",
          }}
        >
          <style>{`@keyframes specialFloat { from { opacity: 0; transform: translate(-50%, -40%) rotate(-4deg) scale(0.9);} to { opacity: 1; transform: translate(-50%, -50%) rotate(0) scale(1);}}`}</style>
          <div
            style={{
              padding: "22px 28px",
              background: "#ffd28a",
              boxShadow:
                "0 14px 50px rgba(244,183,105,0.4), 0 0 0 1px rgba(244,183,105,0.3)",
              fontFamily: "var(--hand)",
              fontSize: 24,
              color: "#1f1612",
              lineHeight: 1.3,
              whiteSpace: "pre-line",
              textAlign: "center",
              transform: "rotate(-2deg)",
            }}
          >
            {scene4.specialNote}
          </div>
        </div>
      )}
      {/* hint selalu tampil di atas, selama belum semua dibuka */}
      {!showSpecial && (
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 40,
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--ink)",
              letterSpacing: "0.18em",
              background: "rgba(10,10,14,0.75)",
              border: "1px solid rgba(244,183,105,0.3)",
              borderRadius: 6,
              padding: "10px 18px",
              backdropFilter: "blur(4px)",
            }}
          >
            {scene4.openHint(openedCount)}
          </div>
        </div>
      )}

      {/* tombol lorong selalu ada di bawah */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 40,
        }}
      >
        <button className="cta" onClick={onAdvance}>
          {scene4.continueBtn}
        </button>
      </div>
    </div>
  );
}
