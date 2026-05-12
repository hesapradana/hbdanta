import { useState, useEffect } from "react";
import { Rain } from "./shared";


export function Scene2({ active, onAdvance }) {
  const [doorOpen, setDoorOpen] = useState(false);
  const [glow, setGlow] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setGlow(true), 800);
    return () => clearTimeout(t);
  }, [active]);
  useEffect(() => {
    if (doorOpen) {
      const t = setTimeout(onAdvance, 2400);
      return () => clearTimeout(t);
    }
  }, [doorOpen]);

  return (
    <div
      className={`scene ${active ? "on" : ""}`}
      style={{ background: "#080a0e" }}
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
          <radialGradient id="porchLamp" cx="50%" cy="0%" r="80%">
            <stop
              offset="0%"
              stopColor="#ffce8a"
              stopOpacity={glow ? 0.55 : 0.25}
            />
            <stop offset="60%" stopColor="#f4b769" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#f4b769" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="wood"
            patternUnits="userSpaceOnUse"
            width="20"
            height="200"
          >
            <rect width="20" height="200" fill="#1a120c" />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="200"
              stroke="#0e0805"
              strokeWidth="1"
            />
            <line
              x1="20"
              y1="0"
              x2="20"
              y2="200"
              stroke="#0e0805"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="1600" height="900" fill="#06080c" />
        <rect x="0" y="720" width="1600" height="180" fill="url(#wood)" />
        <ellipse cx="800" cy="720" rx="700" ry="40" fill="#000" opacity="0.6" />
        <rect x="200" y="100" width="1200" height="620" fill="#0e0c0a" />
        <rect
          x="200"
          y="100"
          width="1200"
          height="620"
          fill="url(#wood)"
          opacity="0.5"
        />
        <line
          x1="800"
          y1="180"
          x2="800"
          y2="220"
          stroke="#1a1208"
          strokeWidth="2"
        />
        <polygon points="780,220 820,220 815,250 785,250" fill="#0a0805" />
        <ellipse
          cx="800"
          cy="240"
          rx="6"
          ry="4"
          fill="#ffd28a"
          className="pulse-warm"
        />
        <circle cx="800" cy="240" r="220" fill="url(#porchLamp)" />
        <rect x="640" y="260" width="320" height="460" fill="#0a0805" />
        <g
          style={{
            transformOrigin: "660px 480px",
            transform: doorOpen
              ? "perspective(800px) rotateY(-55deg)"
              : "rotateY(0deg)",
            transition: "transform 2s cubic-bezier(0.3, 0.7, 0.2, 1)",
          }}
        >
          <rect
            x="660"
            y="280"
            width="280"
            height="440"
            fill="#2a1810"
            stroke="#3a2418"
            strokeWidth="2"
          />
          <rect
            x="680"
            y="300"
            width="240"
            height="180"
            fill="none"
            stroke="#3a2418"
            strokeWidth="1.5"
          />
          <rect x="700" y="320" width="200" height="140" fill="#1f110a" />
          <rect
            x="680"
            y="500"
            width="240"
            height="200"
            fill="none"
            stroke="#3a2418"
            strokeWidth="1.5"
          />
          <rect x="700" y="520" width="200" height="160" fill="#1f110a" />
          <circle cx="700" cy="510" r="6" fill="#c89860" />
          <circle cx="700" cy="510" r="3" fill="#f4b769" />
        </g>
        {doorOpen && (
          <g>
            <defs>
              <radialGradient id="windowGlowB" cx="0%" cy="50%" r="100%">
                <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffce8a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <polygon
              points="660,280 900,280 940,720 660,720"
              fill="url(#windowGlowB)"
              opacity="0.9"
            />
          </g>
        )}
        <g transform="translate(280, 660)">
          <ellipse cx="0" cy="60" rx="50" ry="8" fill="#000" opacity="0.5" />
          <rect x="-30" y="20" width="60" height="50" fill="#3a2418" />
          <path
            d="M -20 20 Q -30 -20 -10 -30 Q 0 -50 10 -25 Q 30 -20 20 20 Z"
            fill="#1a2812"
          />
          <path d="M -10 10 Q -15 -10 5 -15 Q 15 -25 25 -5 Z" fill="#243818" />
        </g>
        <g transform="translate(1280, 660)">
          <ellipse cx="0" cy="60" rx="40" ry="6" fill="#000" opacity="0.5" />
          <rect x="-22" y="22" width="44" height="44" fill="#3a2418" />
          <path d="M -16 22 Q -20 -14 0 -22 Q 18 -10 18 22 Z" fill="#1a2812" />
        </g>
        <g
          className="tap"
          style={{
            opacity: doorOpen ? 0 : 1,
            transition: "opacity 0.5s",
          }}
        >
          <rect
            x="746"
            y="400"
            width="108"
            height="68"
            fill="#f3e9cf"
            transform="rotate(-3 800 434)"
            style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
          />
          <text
            x="800"
            y="430"
            textAnchor="middle"
            fontFamily="var(--hand)"
            fontSize="14"
            fill="#3a2818"
            transform="rotate(-3 800 434)"
          >
            note —
          </text>
          <text
            x="800"
            y="450"
            textAnchor="middle"
            fontFamily="var(--hand)"
            fontSize="16"
            fill="#3a2818"
            transform="rotate(-3 800 434)"
          >
            (klik aku)
          </text>
        </g>
      </svg>
      <Rain density={40} opacity={0.35} />
      {!doorOpen && (
        <div
          onClick={() => setDoorOpen(true)}
          style={{
            position: "absolute",
            left: "calc(50% - 90px)",
            top: "32%",
            width: 180,
            height: 360,
            cursor: "pointer",
            zIndex: 5,
          }}
        />
      )}
    </div>
  );
}
