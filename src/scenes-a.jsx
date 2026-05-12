import { useState, useEffect, useRef } from 'react'
import { LineSeq, Rain } from './shared'
import { scene0, scene1, scene2, scene3, scene4, scene5 } from './content'

export function Scene0({ active, onAdvance }) {
  const [stage, setStage] = useState(0)
  useEffect(() => {
    if (!active) return
    const t = [
      setTimeout(() => setStage(1), 1200),
      setTimeout(() => setStage(2), 3400),
      setTimeout(() => setStage(3), 5600),
      setTimeout(() => setStage(4), 7600),
      setTimeout(() => onAdvance(), 9200),
    ]
    return () => t.forEach(clearTimeout)
  }, [active])

  return (
    <div className="scene on" style={{ background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
        <Rain density={30} opacity={0.25} />
      </div>
      <div style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '0.2em', color: '#5a564c' }}>
        <div style={{ opacity: stage >= 1 ? 1 : 0, transition: 'opacity 1.4s' }}>
          {scene0.loading}
        </div>
        <div style={{ marginTop: 36, opacity: stage >= 2 ? 1 : 0, transition: 'opacity 1.4s', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, letterSpacing: 'normal', color: '#7a7367' }}>
          {scene0.soon}
        </div>
        <div style={{ marginTop: 18, opacity: stage >= 3 ? 1 : 0, transition: 'opacity 1.4s', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, letterSpacing: 'normal', color: '#5a564c' }}>
          {scene0.embarrassing}
        </div>
        <div style={{ marginTop: 48, opacity: stage >= 4 ? 0 : (stage >= 1 ? 1 : 0), transition: 'opacity 1.6s', fontSize: 9, color: '#3a3631' }}>
          {scene0.tagline}
        </div>
      </div>
    </div>
  )
}

export function Scene1({ active, onAdvance }) {
  const [textGo, setTextGo] = useState(false)
  const [btn, setBtn] = useState(false)
  const [zoom, setZoom] = useState(false)
  useEffect(() => {
    if (!active) return
    const t = [
      setTimeout(() => setZoom(true), 400),
      setTimeout(() => setTextGo(true), 2200),
      setTimeout(() => setBtn(true), 8500),
    ]
    return () => t.forEach(clearTimeout)
  }, [active])

  return (
    <div className={`scene ${active ? 'on' : ''}`}>
      <div className="sky"></div>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
          transform: zoom ? 'scale(1.08)' : 'scale(1.0)', transition: 'transform 14s ease-out' }}>
        <rect x="0" y="640" width="1600" height="260" fill="#06080c" />
        <ellipse cx="800" cy="780" rx="900" ry="60" fill="url(#wet)" opacity="0.5" />
        <defs>
          <radialGradient id="wet" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a2230" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06080c" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd28a" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#f4b769" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f4b769" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffce8a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <line x1="180" y1="640" x2="180" y2="320" stroke="#0d1218" strokeWidth="3" />
        <line x1="180" y1="320" x2="240" y2="320" stroke="#0d1218" strokeWidth="3" />
        <circle cx="240" cy="328" r="80" fill="url(#lampGlow)" />
        <circle cx="240" cy="328" r="4" fill="#ffd28a" className="pulse-warm" />
        <path d="M 1300 640 Q 1320 540 1350 580 Q 1380 500 1410 600 Q 1440 540 1460 640 Z" fill="#080a10" />
        <path d="M 60 640 Q 80 560 110 590 Q 130 520 160 600 Q 190 560 210 640 Z" fill="#080a10" />
        <g style={{ transform: zoom ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)', transformOrigin: '800px 600px', transition: 'transform 14s ease-out' }}>
          <polygon points="700,500 900,500 900,640 700,640" fill="#0c1118" stroke="#1a2230" strokeWidth="1.5" />
          <polygon points="680,500 920,500 800,420" fill="#0a0d13" stroke="#1a2230" strokeWidth="1.5" />
          <rect x="850" y="430" width="14" height="36" fill="#0a0d13" />
          <circle cx="780" cy="570" r="60" fill="url(#windowGlow)" />
          <rect x="765" y="555" width="30" height="30" fill="#ffce8a" opacity="0.85" />
          <line x1="780" y1="555" x2="780" y2="585" stroke="#1a1208" strokeWidth="1" />
          <line x1="765" y1="570" x2="795" y2="570" stroke="#1a1208" strokeWidth="1" />
          <rect x="830" y="590" width="18" height="50" fill="#1a1208" />
          <ellipse cx="780" cy="640" rx="80" ry="6" fill="#f4b769" opacity="0.18" />
        </g>
        <g opacity="0.9">
          {[...Array(20)].map((_, i) => (
            <rect key={i} x={i * 80 + 20} y="660" width="3" height="18" fill="#0a0d13" />
          ))}
        </g>
      </svg>
      <Rain density={70} opacity={0.5} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: '16%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <LineSeq lines={scene1.lines} start={textGo} />
        <div style={{ marginTop: 28, opacity: btn ? 1 : 0, transition: 'opacity 1.2s' }}>
          <button className="cta" onClick={onAdvance}>{scene1.enterBtn}</button>
        </div>
      </div>
    </div>
  )
}

export function Scene2({ active, onAdvance }) {
  const [noteOpen, setNoteOpen] = useState(false)
  const [doorOpen, setDoorOpen] = useState(false)
  const [glow, setGlow] = useState(false)
  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => setGlow(true), 800)
    return () => clearTimeout(t)
  }, [active])
  useEffect(() => {
    if (doorOpen) {
      const t = setTimeout(onAdvance, 2400)
      return () => clearTimeout(t)
    }
  }, [doorOpen])

  return (
    <div className={`scene ${active ? 'on' : ''}`} style={{ background: '#080a0e' }}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="porchLamp" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#ffce8a" stopOpacity={glow ? 0.55 : 0.25} />
            <stop offset="60%" stopColor="#f4b769" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#f4b769" stopOpacity="0" />
          </radialGradient>
          <pattern id="wood" patternUnits="userSpaceOnUse" width="20" height="200">
            <rect width="20" height="200" fill="#1a120c" />
            <line x1="0" y1="0" x2="0" y2="200" stroke="#0e0805" strokeWidth="1" />
            <line x1="20" y1="0" x2="20" y2="200" stroke="#0e0805" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1600" height="900" fill="#06080c" />
        <rect x="0" y="720" width="1600" height="180" fill="url(#wood)" />
        <ellipse cx="800" cy="720" rx="700" ry="40" fill="#000" opacity="0.6" />
        <rect x="200" y="100" width="1200" height="620" fill="#0e0c0a" />
        <rect x="200" y="100" width="1200" height="620" fill="url(#wood)" opacity="0.5" />
        <line x1="800" y1="180" x2="800" y2="220" stroke="#1a1208" strokeWidth="2" />
        <polygon points="780,220 820,220 815,250 785,250" fill="#0a0805" />
        <ellipse cx="800" cy="240" rx="6" ry="4" fill="#ffd28a" className="pulse-warm" />
        <circle cx="800" cy="240" r="220" fill="url(#porchLamp)" />
        <rect x="640" y="260" width="320" height="460" fill="#0a0805" />
        <g style={{ transformOrigin: '660px 480px', transform: doorOpen ? 'perspective(800px) rotateY(-55deg)' : 'rotateY(0deg)', transition: 'transform 2s cubic-bezier(0.3, 0.7, 0.2, 1)' }}>
          <rect x="660" y="280" width="280" height="440" fill="#2a1810" stroke="#3a2418" strokeWidth="2" />
          <rect x="680" y="300" width="240" height="180" fill="none" stroke="#3a2418" strokeWidth="1.5" />
          <rect x="700" y="320" width="200" height="140" fill="#1f110a" />
          <rect x="680" y="500" width="240" height="200" fill="none" stroke="#3a2418" strokeWidth="1.5" />
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
            <polygon points="660,280 900,280 940,720 660,720" fill="url(#windowGlowB)" opacity="0.9" />
          </g>
        )}
        <g transform="translate(280, 660)">
          <ellipse cx="0" cy="60" rx="50" ry="8" fill="#000" opacity="0.5" />
          <rect x="-30" y="20" width="60" height="50" fill="#3a2418" />
          <path d="M -20 20 Q -30 -20 -10 -30 Q 0 -50 10 -25 Q 30 -20 20 20 Z" fill="#1a2812" />
          <path d="M -10 10 Q -15 -10 5 -15 Q 15 -25 25 -5 Z" fill="#243818" />
        </g>
        <g transform="translate(1280, 660)">
          <ellipse cx="0" cy="60" rx="40" ry="6" fill="#000" opacity="0.5" />
          <rect x="-22" y="22" width="44" height="44" fill="#3a2418" />
          <path d="M -16 22 Q -20 -14 0 -22 Q 18 -10 18 22 Z" fill="#1a2812" />
        </g>
        <g className="tap" onClick={(e) => { e.stopPropagation(); setNoteOpen(o => !o) }}
          style={{ cursor: 'pointer', opacity: doorOpen ? 0 : 1, transition: 'opacity 0.5s' }}>
          <rect x="746" y="400" width="108" height="68" fill="#f3e9cf" transform="rotate(-3 800 434)"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }} />
          <text x="800" y="430" textAnchor="middle" fontFamily="var(--hand)" fontSize="14" fill="#3a2818" transform="rotate(-3 800 434)">note —</text>
          <text x="800" y="450" textAnchor="middle" fontFamily="var(--hand)" fontSize="16" fill="#3a2818" transform="rotate(-3 800 434)">(klik aku)</text>
        </g>
      </svg>
      <Rain density={40} opacity={0.35} />
      <div className="dialog" style={{ left: 'calc(50% + 80px)', top: '44%', opacity: noteOpen ? 1 : 0, transform: noteOpen ? 'translateY(0)' : 'translateY(8px)', pointerEvents: noteOpen ? 'auto' : 'none' }}>
        <span className="hand" style={{ fontSize: 22, color: 'var(--ink)', fontStyle: 'normal' }}>
          {scene2.noteText}
        </span>
      </div>
      {!doorOpen && (
        <div onClick={() => setDoorOpen(true)}
          style={{ position: 'absolute', left: 'calc(50% - 90px)', top: '32%', width: 180, height: 360, cursor: 'pointer', zIndex: 5 }} />
      )}
      <div style={{ position: 'absolute', bottom: 48, left: 0, right: 0, textAlign: 'center', color: 'var(--ink-faint)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em' }}>
        {doorOpen ? '' : scene2.doorHint}
      </div>
    </div>
  )
}

export function Scene3({ active, onAdvance }) {
  const [tvOn, setTvOn] = useState(false)
  const [tvLine, setTvLine] = useState(0)
  const [revealedObjects, setRevealedObjects] = useState(false)
  const [openObj, setOpenObj] = useState(null)
  const [doneTv, setDoneTv] = useState(false)

  useEffect(() => {
    if (!active) return
    const t = [
      setTimeout(() => setTvOn(true), 1200),
      setTimeout(() => setTvLine(1), 3200),
      setTimeout(() => setTvLine(2), 5600),
      setTimeout(() => setTvLine(3), 7800),
      setTimeout(() => { setRevealedObjects(true); setDoneTv(true) }, 10200),
    ]
    return () => t.forEach(clearTimeout)
  }, [active])

  return (
    <div className={`scene ${active ? 'on' : ''}`} style={{ background: '#0a0806' }}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="tvGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#88a8c8" stopOpacity={tvOn ? 0.55 : 0} />
            <stop offset="100%" stopColor="#88a8c8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="warmLamp" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#f4b769" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#f4b769" stopOpacity="0" />
          </radialGradient>
          <pattern id="rug" patternUnits="userSpaceOnUse" width="40" height="40">
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
        <line x1="0" y1="640" x2="1600" y2="640" stroke="#3a2a20" strokeWidth="1" />
        <ellipse cx="800" cy="780" rx="500" ry="60" fill="url(#rug)" opacity="0.6" />
        <ellipse cx="800" cy="450" rx="500" ry="280" fill="url(#tvGlow)" />
        <rect x="600" y="540" width="400" height="20" fill="#3a2a1c" />
        <rect x="610" y="560" width="14" height="80" fill="#3a2a1c" />
        <rect x="976" y="560" width="14" height="80" fill="#3a2a1c" />
        <g>
          <rect x="640" y="350" width="320" height="200" rx="14" fill="#1f1812" stroke="#3a2a1c" strokeWidth="2" />
          <rect x="668" y="372" width="264" height="160" rx="22" fill="#0a0d12" />
          {tvOn && (
            <g clipPath="url(#tvclip)">
              <rect x="668" y="372" width="264" height="160" fill="#1a3450" opacity="0.4" />
              {[...Array(40)].map((_, i) => (
                <line key={i} x1="668" y1={372 + i * 4} x2="932" y2={372 + i * 4} stroke="#ffffff" strokeWidth="0.5" opacity={Math.random() * 0.15} />
              ))}
            </g>
          )}
          <circle cx="940" cy="380" r="6" fill="#3a2a1c" />
          <circle cx="940" cy="400" r="6" fill="#3a2a1c" />
          <line x1="650" y1="556" x2="660" y2="580" stroke="#3a2a1c" strokeWidth="3" />
          <line x1="950" y1="556" x2="940" y2="580" stroke="#3a2a1c" strokeWidth="3" />
        </g>
        <g opacity="0.85">
          <rect x="200" y="700" width="380" height="160" rx="10" fill="#1a1208" />
          <rect x="180" y="680" width="60" height="180" rx="14" fill="#1f1612" />
          <rect x="540" y="680" width="60" height="180" rx="14" fill="#1f1612" />
          <rect x="240" y="690" width="120" height="30" rx="6" fill="#2a1f18" />
          <rect x="380" y="690" width="120" height="30" rx="6" fill="#2a1f18" />
        </g>
        <g>
          <line x1="1280" y1="900" x2="1280" y2="640" stroke="#2a1f18" strokeWidth="3" />
          <polygon points="1240,560 1320,560 1305,640 1255,640" fill="#3a2a1c" />
          <circle cx="1280" cy="580" r="100" fill="url(#warmLamp)" opacity="0.6" />
        </g>
        <g>
          <circle cx="200" cy="200" r="40" fill="#0e0a06" stroke="#3a2a1c" strokeWidth="2" />
          <circle cx="200" cy="200" r="2" fill="#f4b769" />
          <line x1="200" y1="200" x2="200" y2="172" stroke="#f4b769" strokeWidth="2" />
          <line x1="200" y1="200" x2="222" y2="208" stroke="#f4b769" strokeWidth="1.5" />
          <text x="200" y="262" textAnchor="middle" fontFamily="var(--mono)" fontSize="10" fill="#5a4a38">00:00</text>
        </g>
      </svg>
      <div style={{ position: 'absolute', left: 'calc(50% - 132px)', top: '44%', width: 264, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 4 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 14, color: '#cfe2f4', textAlign: 'center', lineHeight: 1.6, textShadow: '0 0 8px rgba(160,200,240,0.6)' }}>
          {scene3.tvLines.map((t, i) => (
            <div key={i} style={{ opacity: tvLine > i ? 1 : 0, transition: 'opacity 1.2s' }}>{t}</div>
          ))}
        </div>
      </div>
      {scene3.polaroids.map((p) => (
        <div key={p.id} onClick={() => setOpenObj(openObj === p.id ? null : p.id)}
          style={{ position: 'absolute', left: p.x, top: p.y, transform: `translate(-50%, -50%) rotate(${p.rot}deg) ${openObj === p.id ? 'scale(1.08)' : 'scale(1)'}`, cursor: 'pointer', opacity: revealedObjects ? 1 : 0, transition: 'opacity 1.6s ease, transform 0.4s ease', transitionDelay: revealedObjects ? `${0.2 * parseInt(p.label)}s` : '0s', zIndex: openObj === p.id ? 15 : 8 }}>
          <div style={{ width: 120, height: 144, background: '#f0ead8', padding: '10px 10px 0', boxShadow: '0 6px 24px rgba(0,0,0,0.7), 0 0 0 1px rgba(244,183,105,0.1)', filter: openObj === p.id ? 'brightness(1.1)' : 'brightness(0.9)' }}>
            <div style={{ width: '100%', height: 100, background: 'linear-gradient(135deg, #6a5a48 0%, #3a2a1c 100%)', filter: 'blur(2px) brightness(0.6)' }}></div>
            <div style={{ fontFamily: 'var(--hand)', fontSize: 14, color: '#3a2818', textAlign: 'center', marginTop: 6 }}>{p.label}</div>
          </div>
        </div>
      ))}
      {openObj && (
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: '8%', textAlign: 'center', zIndex: 20, transition: 'opacity 0.4s' }}>
          <div style={{ display: 'inline-block', background: 'rgba(15,18,22,0.92)', border: '1px solid rgba(244,183,105,0.18)', padding: '18px 28px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 19, maxWidth: 480, whiteSpace: 'pre-line', color: 'var(--ink)' }}>
            "{scene3.polaroids.find(p => p.id === openObj).text}"
          </div>
        </div>
      )}
      {doneTv && (
        <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0, textAlign: 'center', zIndex: 30 }}>
          <button className="cta" onClick={onAdvance} style={{ opacity: 0.85 }}>{scene3.continueBtn}</button>
          <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.18em' }}>
            {scene3.polaroidHint}
          </div>
        </div>
      )}
    </div>
  )
}

export function Scene4({ active, onAdvance }) {
  const [revealed, setRevealed] = useState(false)
  const [opened, setOpened] = useState({})
  const [showSpecial, setShowSpecial] = useState(false)

  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => setRevealed(true), 600)
    return () => clearTimeout(t)
  }, [active])

  const openedCount = Object.values(opened).filter(Boolean).length
  useEffect(() => {
    if (openedCount >= 4 && !showSpecial) {
      const t = setTimeout(() => setShowSpecial(true), 1200)
      return () => clearTimeout(t)
    }
  }, [openedCount, showSpecial])

  return (
    <div className={`scene ${active ? 'on' : ''}`} style={{ background: '#0e0c08' }}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
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
        <line x1="100" y1="120" x2="100" y2="360" stroke="#1a1208" strokeWidth="1" />
        <line x1="1500" y1="120" x2="1500" y2="360" stroke="#1a1208" strokeWidth="1" />
        <rect x="240" y="160" width="300" height="220" fill="#0a0e16" />
        <rect x="240" y="160" width="300" height="220" fill="none" stroke="#3a2a1c" strokeWidth="6" />
        <line x1="390" y1="160" x2="390" y2="380" stroke="#3a2a1c" strokeWidth="3" />
        <line x1="240" y1="270" x2="540" y2="270" stroke="#3a2a1c" strokeWidth="3" />
        <g transform="translate(600, 690)">
          <ellipse cx="0" cy="10" rx="30" ry="6" fill="#000" opacity="0.5" />
          <rect x="-20" y="-30" width="40" height="40" rx="3" fill="#c89860" />
          <path d="M 20 -22 Q 32 -22 32 -10 Q 32 2 20 2" fill="none" stroke="#c89860" strokeWidth="4" />
          <ellipse cx="0" cy="-28" rx="18" ry="4" fill="#3a2818" />
          <path d="M -6 -34 Q -2 -44 2 -50 Q -2 -56 2 -64" stroke="#c0b8a8" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 4 -34 Q 8 -44 4 -52 Q 8 -58 4 -66" stroke="#c0b8a8" strokeWidth="1" fill="none" opacity="0.4" />
        </g>
        <rect x="900" y="200" width="380" height="520" fill="url(#fridgeGrad)" />
        <rect x="900" y="200" width="380" height="220" fill="none" stroke="#7a6a52" strokeWidth="1" />
        <line x1="900" y1="420" x2="1280" y2="420" stroke="#7a6a52" strokeWidth="2" />
        <rect x="908" y="240" width="6" height="140" fill="#3a2a1c" />
        <rect x="908" y="460" width="6" height="200" fill="#3a2a1c" />
      </svg>
      {scene4.notes.map((n, i) => (
        <div key={n.id} onClick={() => setOpened(o => ({ ...o, [n.id]: true }))}
          style={{ position: 'absolute', left: n.x, top: n.y, transform: `translate(-50%, -50%) rotate(${n.rot}deg)`, cursor: 'pointer', opacity: revealed ? 1 : 0, transition: `opacity 1.4s ease ${i * 0.15}s, filter 0.4s`, filter: opened[n.id] ? 'brightness(1) saturate(1)' : 'brightness(0.7) saturate(0.6)', zIndex: 10 }}>
          <div style={{ width: n.w, padding: '14px 14px 18px', background: n.color, boxShadow: '0 6px 18px rgba(0,0,0,0.5)', fontFamily: 'var(--hand)', fontSize: 18, color: '#1f1612', lineHeight: 1.25, whiteSpace: 'pre-line', textAlign: 'center', minHeight: 90, position: 'relative' }}>
            {opened[n.id] ? n.text : <span style={{ opacity: 0.3, fontSize: 14 }}>—— note ——</span>}
            <div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', width: 30, height: 12, background: 'rgba(0,0,0,0.15)', borderRadius: 2 }}></div>
          </div>
        </div>
      ))}
      {showSpecial && (
        <div style={{ position: 'absolute', left: '50%', top: '62%', transform: 'translate(-50%, -50%)', zIndex: 30, animation: 'specialFloat 1.2s ease forwards' }}>
          <style>{`@keyframes specialFloat { from { opacity: 0; transform: translate(-50%, -40%) rotate(-4deg) scale(0.9);} to { opacity: 1; transform: translate(-50%, -50%) rotate(0) scale(1);}}`}</style>
          <div style={{ padding: '22px 28px', background: '#ffd28a', boxShadow: '0 14px 50px rgba(244,183,105,0.4), 0 0 0 1px rgba(244,183,105,0.3)', fontFamily: 'var(--hand)', fontSize: 24, color: '#1f1612', lineHeight: 1.3, whiteSpace: 'pre-line', textAlign: 'center', transform: 'rotate(-2deg)' }}>
            {scene4.specialNote}
          </div>
        </div>
      )}
      <div style={{ position: 'absolute', bottom: 36, left: 0, right: 0, textAlign: 'center', zIndex: 40 }}>
        {showSpecial ? (
          <button className="cta" onClick={onAdvance}>{scene4.continueBtn}</button>
        ) : (
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em' }}>
            {scene4.openHint(openedCount)}
          </div>
        )}
      </div>
    </div>
  )
}

export function Scene5({ active, onAdvance }) {
  const wrapRef = useRef(null)
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    if (!active || !wrapRef.current) return
    const el = wrapRef.current
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight
      setScrollPct(max > 0 ? el.scrollTop / max : 0)
    }
    el.addEventListener('scroll', onScroll)
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [active])

  const flickerKey = Math.floor(scrollPct * 12)

  return (
    <div className={`scene scrollable ${active ? 'on' : ''}`} ref={wrapRef} style={{ background: '#0a0a0e' }}>
      <div style={{ height: '320vh', width: '100%', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%' }}>
          <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="hallLight" cx="50%" cy="50%" r="40%">
                <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#ffce8a" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="hallDepth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a0c12" />
                <stop offset="100%" stopColor="#06080c" />
              </linearGradient>
            </defs>
            <rect width="1600" height="900" fill="url(#hallDepth)" />
            <polygon points="0,0 0,900 380,720 380,180" fill="#11141a" />
            <polygon points="1600,0 1600,900 1220,720 1220,180" fill="#11141a" />
            <polygon points="0,0 1600,0 1220,180 380,180" fill="#0e1015" />
            <polygon points="0,900 1600,900 1220,720 380,720" fill="#06080c" />
            {[0.0, 0.15, 0.3, 0.5].map((d, i) => {
              const scale = 1 - d * 0.7, w = 90 * scale, h = 240 * scale
              return <g key={`l${i}`}><rect x={100 + d * 280} y={380 - d * 200} width={w} height={h} fill="#06080c" stroke="#2a2218" strokeWidth="1" /></g>
            })}
            {[0.0, 0.15, 0.3, 0.5].map((d, i) => {
              const scale = 1 - d * 0.7, w = 90 * scale, h = 240 * scale
              return <g key={`r${i}`}><rect x={1410 - d * 280} y={380 - d * 200} width={w} height={h} fill="#06080c" stroke="#2a2218" strokeWidth="1" /></g>
            })}
            {[0, 1, 2, 3].map((i) => {
              const cy = 60 + i * 40, r = 200 - i * 40, flick = (flickerKey + i) % 3 === 0
              return (
                <g key={i}>
                  <circle cx={800} cy={cy} r={r} fill="url(#hallLight)" opacity={flick ? 0.4 : 1} />
                  <rect x={800 - 12} y={cy - 4} width="24" height="3" fill="#ffd28a" opacity={flick ? 0.3 : 0.9} />
                </g>
              )
            })}
            <rect x="760" y="320" width="80" height="180" fill="#0a0d12" stroke="#2a2218" strokeWidth="1" />
            <rect x="780" y="380" width="40" height="100" fill="#1a1208" opacity="0.6" />
          </svg>
          <Rain density={20} opacity={0.15} />
          <div style={{ position: 'absolute', left: 20, bottom: 22, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em' }}>
            <span style={{ opacity: 0.3 + Math.sin(scrollPct * 14) * 0.4 + 0.3 }}>{scene5.footstep[0]}</span>
            <span style={{ marginLeft: 12, opacity: 0.3 + Math.cos(scrollPct * 14) * 0.4 + 0.3 }}>{scene5.footstep[1]}</span>
          </div>
          <div style={{ position: 'absolute', right: 30, top: '50%', transform: 'translateY(-50%)', width: 1, height: 240, background: 'rgba(244,183,105,0.1)' }}>
            <div style={{ width: 1, height: `${scrollPct * 100}%`, background: 'var(--warm)', boxShadow: '0 0 6px var(--warm)' }}></div>
          </div>
          {scene5.lines.map((ln, i) => {
            const start = ln.y - 0.05, end = ln.y + 0.12
            let op = 0
            if (scrollPct >= start && scrollPct <= end) op = 1
            else if (scrollPct > end && scrollPct < end + 0.12) op = 1 - (scrollPct - end) / 0.12
            return (
              <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: '50%', textAlign: 'center', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: ln.warm ? 32 : 26, color: ln.warm ? 'var(--warm)' : (ln.dim ? 'var(--ink-dim)' : 'var(--ink)'), opacity: op, transform: `translateY(${(0.5 - ln.y) * 60 - 12}px)`, transition: 'opacity 0.6s ease', pointerEvents: 'none', textShadow: ln.warm ? '0 0 24px rgba(244,183,105,0.4)' : 'none' }}>
                {ln.text}
              </div>
            )
          })}
          {scrollPct < 0.05 && (
            <div style={{ position: 'absolute', bottom: 60, left: 0, right: 0, textAlign: 'center', color: 'var(--ink-faint)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em' }}>
              {scene5.scrollHint}
            </div>
          )}
          {scrollPct > 0.94 && (
            <div style={{ position: 'absolute', bottom: 80, left: 0, right: 0, textAlign: 'center', zIndex: 30 }}>
              <button className="cta" onClick={onAdvance}>{scene5.continueBtn}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
