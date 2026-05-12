import { useState, useEffect } from "react";
import { audio, Progress } from "./shared";
import { Scene0 } from "./scene0";
import { SceneIntro } from "./sceneIntro";
import { SceneJourney } from "./sceneJourney";
import { Scene1 } from "./scene1";
import { Scene2 } from "./scene2";
import { Scene3 } from "./scene3";
import { Scene4 } from "./scene4";
import { Scene5 } from "./scene5";
import { Scene6 } from "./scene6";
import { Scene10 } from "./scene10";

const SCENES = [
  { id: 0, label: "preload",    mood: "soft"     },
  { id: 1, label: "intro",      mood: "soft"     },
  { id: 2, label: "perjalanan", mood: "soft"     },
  { id: 3, label: "jalan malam", mood: "soft"    },
  { id: 4, label: "teras",      mood: "intimate" },
  { id: 5, label: "ruang tamu", mood: "intimate" },
  { id: 6, label: "dapur",      mood: "calm"     },
  { id: 7, label: "lorong",     mood: "tense"    },
  { id: 8, label: "ruang rahasia", mood: "tense" },
  { id: 9, label: "rooftop",    mood: "calm"     },
];

export default function App() {
  const [idx, setIdx] = useState(() => {
    const saved = parseInt(localStorage.getItem("hbd-scene"), 10);
    return Number.isFinite(saved) && saved >= 0 && saved < SCENES.length ? saved : 0;
  });
  const [overlay, setOverlay] = useState(0);

  useEffect(() => {
    localStorage.setItem("hbd-scene", idx);
  }, [idx]);

  const navigateTo = (newIdx) => {
    setOverlay(1);
    setTimeout(() => {
      setIdx(newIdx);
      requestAnimationFrame(() => requestAnimationFrame(() => setOverlay(0)));
    }, 600);
  };

  const advance = () => navigateTo(Math.min(idx + 1, SCENES.length - 1));
  const reset = () => { localStorage.removeItem("hbd-scene"); navigateTo(0); };

  useEffect(() => {
    if (idx >= 2) {
      audio.setOn(true);
      audio.setMood(SCENES[idx]?.mood || "soft");
    }
  }, [idx]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") advance();
      else if (e.key === "ArrowLeft") setIdx((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {idx === 0 && <Scene0 active onAdvance={advance} />}
      {idx === 1 && <SceneIntro active onAdvance={advance} />}
      {idx === 2 && <SceneJourney active onAdvance={advance} />}
      {idx === 3 && <Scene1 active onAdvance={advance} />}
      {idx === 4 && <Scene2 active onAdvance={advance} />}
      {idx === 5 && <Scene3 active onAdvance={advance} />}
      {idx === 6 && <Scene4 active onAdvance={advance} />}
      {idx === 7 && <Scene5 active onAdvance={advance} />}
      {idx === 8 && <Scene6 active onAdvance={advance} />}
      {idx === 9 && <Scene10 active onReset={reset} />}

      {idx > 0 && (
        <Progress
          idx={idx}
          total={SCENES.length - 1}
          label={SCENES[idx].label}
        />
      )}


      {idx >= 2 && (
        <button
          className="back-btn"
          onClick={() => navigateTo(Math.max(1, idx - 1))}
        >
          ← balik
        </button>
      )}

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          opacity: overlay,
          transition: overlay === 1 ? "opacity 0.6s ease" : "opacity 0.8s ease",
          pointerEvents: "none",
          zIndex: 200,
        }}
      />
    </div>
  );
}
