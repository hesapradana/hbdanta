import { useState, useEffect } from "react";
import Car from "./car";
import StreetView from "./street";
import { sceneJourney } from "./content";

export function SceneJourney({ active, onAdvance }) {
  const [angle, setAngle] = useState(0);
  const [showAngleBtn, setShowAngleBtn] = useState(false);
  const [showStopBtn, setShowStopBtn] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setShowAngleBtn(true), 1800);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    if (angle !== 1) return;
    setShowStopBtn(false);
    const t = setTimeout(() => setShowStopBtn(true), 1200);
    return () => clearTimeout(t);
  }, [angle]);

  return (
    <div
      className={`scene ${active ? "on" : ""}`}
      style={{
        background: "#1a1a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {angle === 0 ? (
        <>
          <Car />
          <div
            style={{
              position: "absolute",
              bottom: 48,
              left: 0,
              right: 0,
              textAlign: "center",
              opacity: showAngleBtn ? 1 : 0,
              transition: "opacity 1.2s ease",
            }}
          >
            <button className="cta" onClick={() => setAngle(1)}>
              {sceneJourney.angleBtn}
            </button>
          </div>
        </>
      ) : (
        <>
          <StreetView />
          <div
            style={{
              position: "absolute",
              bottom: 48,
              left: 0,
              right: 0,
              textAlign: "center",
              opacity: showStopBtn ? 1 : 0,
              transition: "opacity 1.2s ease",
            }}
          >
            <button className="cta" onClick={onAdvance}>
              {sceneJourney.stopBtn}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
