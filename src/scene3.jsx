import { useState, useEffect } from "react";
import { scene3 } from "./content";

export function Scene3({ active, onAdvance }) {
  const [tvOn, setTvOn] = useState(false);
  const [tvLine, setTvLine] = useState(0);
  const [revealedObjects, setRevealedObjects] = useState(false);
  const [openObj, setOpenObj] = useState(null);
  const [doneTv, setDoneTv] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = [
      setTimeout(() => setTvOn(true), 1200),
      setTimeout(() => setTvLine(1), 3200),
      setTimeout(() => setTvLine(2), 5600),
      setTimeout(() => setTvLine(3), 7800),
      setTimeout(() => {
        setRevealedObjects(true);
        setDoneTv(true);
      }, 10200),
    ];
    return () => t.forEach(clearTimeout);
  }, [active]);

  return (
    <div
      className={`scene ${active ? "on" : ""}`}
      style={{ background: "#0a0806" }}
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
          <radialGradient id="tvGlow" cx="50%" cy="50%" r="60%">
            <stop
              offset="0%"
              stopColor="#88a8c8"
              stopOpacity={tvOn ? 0.55 : 0}
            />
            <stop offset="100%" stopColor="#88a8c8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="warmLamp" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#f4b769" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#f4b769" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="rug"
            patternUnits="userSpaceOnUse"
            width="40"
            height="40"
          >
            <rect width="40" height="40" fill="#2a1f18" />
            <path d="M 0 20 L 20 0 L 40 20 L 20 40 Z" fill="#1f1612" />
          </pattern>
          <clipPath id="tvclip">
            <rect x="668" y="372" width="264" height="160" rx="22" />
          </clipPath>
        </defs>
        <rect width="1600" height="900" fill="#1a120e" />
        <rect width="1600" height="900" fill="url(#warmLamp)" />
        <polygon points="0,640 1600,640 1600,900 0,900" fill="#0a0805" />
        <line
          x1="0"
          y1="640"
          x2="1600"
          y2="640"
          stroke="#3a2a20"
          strokeWidth="1"
        />
        <ellipse
          cx="800"
          cy="780"
          rx="500"
          ry="60"
          fill="url(#rug)"
          opacity="0.6"
        />
        <ellipse cx="800" cy="450" rx="500" ry="280" fill="url(#tvGlow)" />
        <rect x="600" y="540" width="400" height="20" fill="#3a2a1c" />
        <rect x="610" y="560" width="14" height="80" fill="#3a2a1c" />
        <rect x="976" y="560" width="14" height="80" fill="#3a2a1c" />
        <g>
          <rect
            x="640"
            y="350"
            width="320"
            height="200"
            rx="14"
            fill="#1f1812"
            stroke="#3a2a1c"
            strokeWidth="2"
          />
          <rect
            x="668"
            y="372"
            width="264"
            height="160"
            rx="22"
            fill="#0a0d12"
          />
          {tvOn && (
            <g clipPath="url(#tvclip)">
              <rect
                x="668"
                y="372"
                width="264"
                height="160"
                fill="#1a3450"
                opacity="0.4"
              />
              {[...Array(40)].map((_, i) => (
                <line
                  key={i}
                  x1="668"
                  y1={372 + i * 4}
                  x2="932"
                  y2={372 + i * 4}
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  opacity={Math.random() * 0.15}
                />
              ))}
            </g>
          )}
          <circle cx="940" cy="380" r="6" fill="#3a2a1c" />
          <circle cx="940" cy="400" r="6" fill="#3a2a1c" />
          <line
            x1="650"
            y1="556"
            x2="660"
            y2="580"
            stroke="#3a2a1c"
            strokeWidth="3"
          />
          <line
            x1="950"
            y1="556"
            x2="940"
            y2="580"
            stroke="#3a2a1c"
            strokeWidth="3"
          />
        </g>
        <g opacity="0.85">
          <rect
            x="200"
            y="700"
            width="380"
            height="160"
            rx="10"
            fill="#1a1208"
          />
          <rect
            x="180"
            y="680"
            width="60"
            height="180"
            rx="14"
            fill="#1f1612"
          />
          <rect
            x="540"
            y="680"
            width="60"
            height="180"
            rx="14"
            fill="#1f1612"
          />
          <rect x="240" y="690" width="120" height="30" rx="6" fill="#2a1f18" />
          <rect x="380" y="690" width="120" height="30" rx="6" fill="#2a1f18" />
        </g>
        <g>
          <line
            x1="1280"
            y1="900"
            x2="1280"
            y2="640"
            stroke="#2a1f18"
            strokeWidth="3"
          />
          <polygon
            points="1240,560 1320,560 1305,640 1255,640"
            fill="#3a2a1c"
          />
          <circle
            cx="1280"
            cy="580"
            r="100"
            fill="url(#warmLamp)"
            opacity="0.6"
          />
        </g>
        <g>
          <circle
            cx="200"
            cy="200"
            r="40"
            fill="#0e0a06"
            stroke="#3a2a1c"
            strokeWidth="2"
          />
          <circle cx="200" cy="200" r="2" fill="#f4b769" />
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="172"
            stroke="#f4b769"
            strokeWidth="2"
          />
          <line
            x1="200"
            y1="200"
            x2="222"
            y2="208"
            stroke="#f4b769"
            strokeWidth="1.5"
          />
          <text
            x="200"
            y="262"
            textAnchor="middle"
            fontFamily="var(--mono)"
            fontSize="10"
            fill="#5a4a38"
          >
            00:00
          </text>
        </g>
      </svg>
      <div
        style={{
          position: "absolute",
          left: "calc(50% - 132px)",
          top: "44%",
          width: 264,
          height: 160,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 4,
        }}
      >
          {openObj ? (
            <div
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: 15,
                color: "#e8d4b0",
                textAlign: "center",
                padding: "0 12px",
              }}
            >
              "{scene3.polaroids.find((p) => p.id === openObj)?.text}"
            </div>
          ) : (
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 14,
                color: "#cfe2f4",
                textAlign: "center",
                lineHeight: 1.6,
                textShadow: "0 0 8px rgba(160,200,240,0.6)",
                whiteSpace: "pre-line",
                padding: "0 12px",
              }}
            >
              {scene3.tvLines.map((t, i) => (
                <div
                  key={i}
                  style={{
                    opacity: tvLine > i ? 1 : 0,
                    transition: "opacity 1.2s",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          )}
      </div>
      {scene3.polaroids.map((p) => (
        <div
          key={p.id}
          onClick={() => setOpenObj(openObj === p.id ? null : p.id)}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            transform: `translate(-50%, -50%) rotate(${p.rot}deg) ${openObj === p.id ? "scale(1.08)" : "scale(1)"}`,
            cursor: "pointer",
            opacity: revealedObjects ? 1 : 0,
            transition: "opacity 1.6s ease, transform 0.4s ease",
            transitionDelay: revealedObjects
              ? `${0.2 * parseInt(p.label)}s`
              : "0s",
            zIndex: openObj === p.id ? 15 : 8,
          }}
        >
          <div
            style={{
              width: 120,
              height: 144,
              background: "#f0ead8",
              padding: "10px 10px 0",
              boxShadow:
                "0 6px 24px rgba(0,0,0,0.7), 0 0 0 1px rgba(244,183,105,0.1)",
              filter: openObj === p.id ? "brightness(1.1)" : "brightness(0.9)",
            }}
          >
            <img
              src={p.img}
              alt={p.label}
              style={{
                width: "100%",
                height: 100,
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                fontFamily: "var(--hand)",
                fontSize: 12,
                color: "#3a2818",
                textAlign: "center",
                marginTop: 6,
                padding: "0 4px",
                lineHeight: 1.3,
              }}
            >
              {p.label}
            </div>
          </div>
        </div>
      ))}
      {revealedObjects && (
        <div
          style={{
            position: "absolute",
            left: "22%",
            top: "8%",
            zIndex: 25,
            opacity: 0.9,
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--ink)",
              letterSpacing: "0.18em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              background: "rgba(15, 18, 22, 0.7)",
              border: "1px solid rgba(244, 183, 105, 0.2)",
              padding: "12px 16px",
              borderRadius: "6px",
              backdropFilter: "blur(4px)",
              whiteSpace: "nowrap",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 36 36"
              style={{ flexShrink: 0, animation: "bounce 1.8s infinite" }}
            >
              <circle cx="18" cy="10" r="6" fill="#f4b769" />
              <circle cx="15" cy="9" r="1.2" fill="#1a1a1a" />
              <circle cx="21" cy="9" r="1.2" fill="#1a1a1a" />
              <path
                d="M 15 11 Q 18 12.5 21 11"
                stroke="#1a1a1a"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
              <rect x="14" y="16" width="8" height="10" rx="1" fill="#f4b769" />
              <line
                x1="14"
                y1="18"
                x2="5"
                y2="12"
                stroke="#f4b769"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="22"
                y1="18"
                x2="28"
                y2="20"
                stroke="#f4b769"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="16"
                y1="26"
                x2="15"
                y2="32"
                stroke="#f4b769"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <line
                x1="20"
                y1="26"
                x2="21"
                y2="32"
                stroke="#f4b769"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="3" cy="10" r="1.5" fill="#f4b769" />
            </svg>
            <span>{scene3.polaroidHint}</span>
          </div>
        </div>
      )}
      {doneTv && (
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 30,
          }}
        >
          <button className="cta" onClick={onAdvance} style={{ opacity: 0.85 }}>
            {scene3.continueBtn}
          </button>
        </div>
      )}
    </div>
  );
}
