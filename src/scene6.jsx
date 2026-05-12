import { useState, useEffect } from "react";
import { Rain, audio, rain } from "./shared";
import { scene6 } from "./content";

export function Scene6({ active, onAdvance }) {
  const [entered, setEntered] = useState(false);
  const [fading, setFading] = useState(false);
  const [recorderOn, setRecorderOn] = useState(false);
  const [line, setLine] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      if (audio.el) {
        audio._fadeTo(0, 1000, () => { if (audio.el) audio.el.pause(); });
      }
      rain._fadeTo(0.3, 1500);
      setRecorderOn(false);
      setLine(0);
      setDone(false);
    }
  }, [active]);

  useEffect(() => {
    if (!recorderOn) return;
    const t = [
      setTimeout(() => setLine(1), 1600),
      setTimeout(() => setDone(true), 3200),
    ];
    return () => t.forEach(clearTimeout);
  }, [recorderOn]);

  return (
    <div
      className={`scene ${active ? "on" : ""}`}
      style={{
        background: entered
          ? (recorderOn ? "#100d08" : "#050608")
          : "#0a0a0e",
        transition: "background 2.5s ease",
      }}
    >
      {!entered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
            <rect width="1600" height="900" fill="#0a0a0e" />
            <rect
              x="700"
              y="500"
              width="200"
              height="320"
              fill="#1a1208"
              stroke="#3a2a1c"
              strokeWidth="2"
            />
            <rect x="720" y="520" width="160" height="280" fill="#0e0805" />
            <circle cx="870" cy="660" r="5" fill="#c89860" />
            <g transform="translate(800, 440) rotate(-4)">
              <rect x="-70" y="-40" width="140" height="80" fill="#f3e9cf" />
              <text
                x="0"
                y="-8"
                textAnchor="middle"
                fontFamily="var(--hand)"
                fontSize="18"
                fill="#3a1812"
              >
                {scene6.doorSign[0]}
              </text>
              <text
                x="0"
                y="18"
                textAnchor="middle"
                fontFamily="var(--hand)"
                fontSize="18"
                fill="#3a1812"
              >
                {scene6.doorSign[1]}
              </text>
            </g>
          </svg>
          <div
            style={{ position: "absolute", bottom: "12%", textAlign: "center" }}
          >
            <button className="cta" onClick={() => {
              setFading(true);
              setTimeout(() => { setEntered(true); setFading(false); }, 700);
            }}>
              {scene6.openBtn}
            </button>
          </div>
        </div>
      )}
      {entered && (
        <div style={{ position: "absolute", inset: 0 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(40% 30% at 50% 60%, rgba(244,183,105,0.18), transparent 70%)",
            }}
          ></div>
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
              <radialGradient id="deskGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ffce8a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="400" y="640" width="800" height="20" fill="#1a120c" />
            <line
              x1="520"
              y1="640"
              x2="520"
              y2="520"
              stroke="#2a1f18"
              strokeWidth="3"
            />
            <line
              x1="520"
              y1="520"
              x2="600"
              y2="460"
              stroke="#2a1f18"
              strokeWidth="3"
            />
            <polygon points="595,440 660,440 650,500 605,500" fill="#3a2a1c" />
            <circle cx="628" cy="490" r="80" fill="url(#deskGlow)" />
            <g
              className="tap"
              onClick={() => {
              if (!recorderOn) {
                setRecorderOn(true);
                rain._fadeTo(0, 1500);
                if (!audio.started) audio.start();
                if (audio.el) {
                  audio.el.currentTime = 30;
                  audio.el.play().catch(() => {});
                  audio._fadeTo(0.25, 1500);
                }
              }
            }}
              style={{ cursor: recorderOn ? "default" : "pointer" }}
            >
              <rect
                x="780"
                y="580"
                width="200"
                height="60"
                rx="4"
                fill="#2a2218"
                stroke="#3a2a1c"
                strokeWidth="1"
              />
              <rect x="800" y="595" width="50" height="30" fill="#0a0805" />
              <rect x="860" y="595" width="50" height="30" fill="#0a0805" />
              <circle cx="825" cy="610" r="10" fill="#1a1208" />
              <circle cx="825" cy="610" r="2" fill="#c89860" />
              <circle cx="885" cy="610" r="10" fill="#1a1208" />
              <circle cx="885" cy="610" r="2" fill="#c89860" />
              <rect
                x="920"
                y="600"
                width="14"
                height="20"
                fill={recorderOn ? "#e85a3a" : "#3a2a1c"}
              />
              <rect x="940" y="600" width="14" height="20" fill="#3a2a1c" />
              <text
                x="880"
                y="660"
                textAnchor="middle"
                fontFamily="var(--mono)"
                fontSize="10"
                fill={recorderOn ? "#e85a3a" : "var(--ink-faint)"}
                letterSpacing="0.18em"
              >
                {recorderOn ? scene6.recLabel[1] : scene6.recLabel[0]}
              </text>
            </g>
          </svg>

          <div style={{
            opacity: recorderOn ? 0 : 1,
            transition: "opacity 2.5s ease",
            pointerEvents: "none",
          }}>
            <Rain density={35} opacity={0.35} />
          </div>

          {!recorderOn && (
            <div
              style={{
                position: "absolute",
                left: "55%",
                top: "78%",
                transform: "translateX(-50%)",
                textAlign: "center",
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--warm)",
                letterSpacing: "0.2em",
                opacity: 0.8,
                animation: "pulse 1.8s ease-in-out infinite",
                pointerEvents: "none",
              }}
            >
              ↑ klik recorder
              <style>{`@keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:1} }`}</style>
            </div>
          )}

          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "20%",
              textAlign: "center",
            }}
          >
            <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(8px);} to { opacity: 1; transform: translateY(0);}}`}</style>
            {scene6.recorder.map((t, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: i === 0 ? 28 : 20,
                  color: i === 0 ? "var(--warm)" : "var(--ink)",
                  marginBottom: 18,
                  opacity: line > i ? 1 : 0,
                  transform: line > i ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 1.2s ease, transform 1.2s ease",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          {done && (
            <div
              style={{
                position: "absolute",
                bottom: 40,
                left: 0,
                right: 0,
                textAlign: "center",
              }}
            >
              <button className="cta" onClick={onAdvance}>
                {scene6.continueBtn}
              </button>
            </div>
          )}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#000",
          opacity: fading ? 1 : 0,
          transition: fading ? "opacity 0.7s ease" : "opacity 0.8s ease",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />
    </div>
  );
}
