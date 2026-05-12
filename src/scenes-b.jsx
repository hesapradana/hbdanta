import { useState, useEffect } from 'react'
import { scene6, scene7, scene8, scene9, scene10 } from './content'

export function Scene6({ active, onAdvance }) {
  const [entered, setEntered] = useState(false)
  const [recorderOn, setRecorderOn] = useState(false)
  const [line, setLine] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!recorderOn) return
    const t = [
      setTimeout(() => setLine(1), 1400),
      setTimeout(() => setLine(2), 3800),
      setTimeout(() => setLine(3), 6400),
      setTimeout(() => setLine(4), 9000),
      setTimeout(() => setLine(5), 11200),
      setTimeout(() => setDone(true), 13200),
    ]
    return () => t.forEach(clearTimeout)
  }, [recorderOn])

  return (
    <div className={`scene ${active ? 'on' : ''}`} style={{ background: entered ? '#050608' : '#0a0a0e' }}>
      {!entered && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <rect width="1600" height="900" fill="#0a0a0e" />
            <rect x="700" y="500" width="200" height="320" fill="#1a1208" stroke="#3a2a1c" strokeWidth="2" />
            <rect x="720" y="520" width="160" height="280" fill="#0e0805" />
            <circle cx="870" cy="660" r="5" fill="#c89860" />
            <g transform="translate(800, 440) rotate(-4)">
              <rect x="-70" y="-40" width="140" height="80" fill="#f3e9cf" />
              <text x="0" y="-8" textAnchor="middle" fontFamily="var(--hand)" fontSize="18" fill="#3a1812">{scene6.doorSign[0]}</text>
              <text x="0" y="18" textAnchor="middle" fontFamily="var(--hand)" fontSize="18" fill="#3a1812">{scene6.doorSign[1]}</text>
            </g>
          </svg>
          <div style={{ position: 'absolute', bottom: '12%', textAlign: 'center' }}>
            <button className="cta" onClick={() => setEntered(true)}>{scene6.openBtn}</button>
            <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.18em' }}>
              {scene6.openHint}
            </div>
          </div>
        </div>
      )}
      {entered && (
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(40% 30% at 50% 60%, rgba(244,183,105,0.18), transparent 70%)' }}></div>
          <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="deskGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ffce8a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="400" y="640" width="800" height="20" fill="#1a120c" />
            <line x1="520" y1="640" x2="520" y2="520" stroke="#2a1f18" strokeWidth="3" />
            <line x1="520" y1="520" x2="600" y2="460" stroke="#2a1f18" strokeWidth="3" />
            <polygon points="595,440 660,440 650,500 605,500" fill="#3a2a1c" />
            <circle cx="628" cy="490" r="80" fill="url(#deskGlow)" />
            <g className="tap" onClick={() => setRecorderOn(true)} style={{ cursor: 'pointer' }}>
              <rect x="780" y="580" width="200" height="60" rx="4" fill="#2a2218" stroke="#3a2a1c" strokeWidth="1" />
              <rect x="800" y="595" width="50" height="30" fill="#0a0805" />
              <rect x="860" y="595" width="50" height="30" fill="#0a0805" />
              <circle cx="825" cy="610" r="10" fill="#1a1208" />
              <circle cx="825" cy="610" r="2" fill="#c89860" />
              <circle cx="885" cy="610" r="10" fill="#1a1208" />
              <circle cx="885" cy="610" r="2" fill="#c89860" />
              <rect x="920" y="600" width="14" height="20" fill={recorderOn ? '#e85a3a' : '#3a2a1c'} />
              <rect x="940" y="600" width="14" height="20" fill="#3a2a1c" />
              <text x="880" y="660" textAnchor="middle" fontFamily="var(--mono)" fontSize="10" fill={recorderOn ? '#e85a3a' : 'var(--ink-faint)'} letterSpacing="0.18em">
                {recorderOn ? scene6.recLabel[1] : scene6.recLabel[0]}
              </text>
            </g>
          </svg>
          <div style={{ position: 'absolute', left: 0, right: 0, top: '20%', textAlign: 'center' }}>
            <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(8px);} to { opacity: 1; transform: translateY(0);}}`}</style>
            {scene6.recorder.slice(0, line).map((t, i) => (
              <div key={i} style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: i === 3 ? 14 : 22, color: i === 4 ? 'var(--ink-faint)' : 'var(--ink)', marginBottom: 16, animation: 'fadeUp 1.1s ease both' }}>
                {t}
              </div>
            ))}
          </div>
          {done && (
            <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, textAlign: 'center' }}>
              <button className="cta" onClick={onAdvance}>{scene6.continueBtn}</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function Scene7({ active, onAdvance }) {
  const [textLine, setTextLine] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerItem, setDrawerItem] = useState(0)

  useEffect(() => {
    if (!active) return
    const t = [
      setTimeout(() => setTextLine(1), 1600),
      setTimeout(() => setTextLine(2), 4200),
      setTimeout(() => setTextLine(3), 6800),
      setTimeout(() => setTextLine(4), 10000),
      setTimeout(() => setTextLine(5), 12400),
    ]
    return () => t.forEach(clearTimeout)
  }, [active])

  return (
    <div className={`scene ${active ? 'on' : ''}`} style={{ background: '#0a0a0e' }}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="bedLamp" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffce8a" stopOpacity="0" />
          </radialGradient>
          <clipPath id="winClip">
            <rect x="100" y="160" width="320" height="320" />
          </clipPath>
        </defs>
        <rect width="1600" height="900" fill="#0e0c10" />
        <rect x="100" y="160" width="320" height="320" fill="#0a0d14" stroke="#3a2a1c" strokeWidth="4" />
        <line x1="260" y1="160" x2="260" y2="480" stroke="#3a2a1c" strokeWidth="2" />
        <line x1="100" y1="320" x2="420" y2="320" stroke="#3a2a1c" strokeWidth="2" />
        <g clipPath="url(#winClip)">
          {[...Array(40)].map((_, i) => (
            <line key={i} x1={100 + Math.random() * 320} y1="160" x2={100 + Math.random() * 320} y2="480" stroke="#7a90a8" strokeWidth="0.6" opacity={0.2 + Math.random() * 0.3} />
          ))}
        </g>
        <rect width="1600" height="900" fill="url(#bedLamp)" opacity="0.4" />
        <rect x="0" y="720" width="1600" height="180" fill="#0a0805" />
        <g>
          <rect x="700" y="600" width="700" height="160" fill="#2a1f18" />
          <rect x="700" y="570" width="700" height="40" rx="6" fill="#3a2a1c" />
          <rect x="720" y="540" width="120" height="60" rx="10" fill="#cfbfa0" />
          <rect x="860" y="540" width="120" height="60" rx="10" fill="#a89880" />
          <path d="M 700 620 Q 1050 600 1400 620 L 1400 760 L 700 760 Z" fill="#3a2818" />
          <path d="M 700 620 Q 1050 605 1400 620" stroke="#5a4030" strokeWidth="1" fill="none" />
        </g>
        <g>
          <rect x="540" y="620" width="120" height="140" fill="#2a1f18" />
          <rect x="540" y="620" width="120" height="14" fill="#3a2a1c" />
          <g className="tap" onClick={() => setDrawerOpen(o => !o)} style={{ cursor: 'pointer' }}>
            <rect x="552" y="650" width="96" height="30" fill={drawerOpen ? '#0a0805' : '#1f1612'} stroke="#3a2a1c" strokeWidth="1" transform={drawerOpen ? 'translate(0, 8)' : ''} />
            <circle cx="600" cy="665" r="3" fill="#c89860" transform={drawerOpen ? 'translate(0, 8)' : ''} />
            <rect x="552" y="690" width="96" height="30" fill="#1f1612" stroke="#3a2a1c" strokeWidth="1" />
            <circle cx="600" cy="705" r="3" fill="#c89860" />
          </g>
          <rect x="588" y="540" width="24" height="80" fill="#3a2a1c" />
          <polygon points="572,520 628,520 620,560 580,560" fill="#3a2a1c" />
          <ellipse cx="600" cy="550" rx="20" ry="14" fill="#ffce8a" opacity="0.8" className="pulse-warm" />
          <circle cx="600" cy="540" r="160" fill="url(#bedLamp)" />
        </g>
      </svg>
      <div style={{ position: 'absolute', right: '8%', top: '16%', width: 420, textAlign: 'right' }}>
        {scene7.bedLines.map((t, i) => (
          <div key={i} style={{ opacity: textLine > i ? 1 : 0, transform: textLine > i ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity 1.4s ease, transform 1.4s ease', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: i === 4 ? 32 : 24, color: i === 4 ? 'var(--warm-soft)' : 'var(--ink)', marginBottom: 22, lineHeight: 1.3 }}>
            {t}
          </div>
        ))}
      </div>
      {drawerOpen && (
        <div style={{ position: 'absolute', left: 'calc(50% - 280px)', bottom: '14%', background: 'rgba(15,18,22,0.94)', border: '1px solid rgba(244,183,105,0.2)', padding: '24px 28px', maxWidth: 460, zIndex: 30, animation: 'drawerIn 0.6s ease both' }}>
          <style>{`@keyframes drawerIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);}}`}</style>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em', marginBottom: 16 }}>
            {scene7.drawerLabel}
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
            {scene7.drawerItems.map((_, i) => (
              <button key={i} onClick={() => setDrawerItem(i)} style={{ background: 'transparent', border: `1px solid ${drawerItem === i ? 'var(--warm)' : 'rgba(244,183,105,0.18)'}`, color: drawerItem === i ? 'var(--warm)' : 'var(--ink-dim)', padding: '6px 12px', fontFamily: 'var(--mono)', fontSize: 11, cursor: 'pointer', letterSpacing: '0.16em' }}>
                0{i + 1}
              </button>
            ))}
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5 }}>
            "{scene7.drawerItems[drawerItem]}"
          </div>
        </div>
      )}
      <div style={{ position: 'absolute', bottom: 36, left: 0, right: 0, textAlign: 'center', zIndex: 40 }}>
        {textLine >= 5 && (
          <div>
            {!drawerOpen && (
              <div style={{ marginBottom: 10, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em' }}>
                {scene7.drawerHint}
              </div>
            )}
            <button className="cta" onClick={onAdvance}>{scene7.continueBtn}</button>
          </div>
        )}
      </div>
    </div>
  )
}

export function Scene8({ active, onAdvance }) {
  const [clicked, setClicked] = useState(false)
  const [line, setLine] = useState(0)
  const [silent, setSilent] = useState(false)

  useEffect(() => {
    if (!clicked) return
    const t = [
      setTimeout(() => setLine(1), 1200),
      setTimeout(() => setLine(2), 3400),
      setTimeout(() => setLine(3), 5800),
      setTimeout(() => setLine(4), 8400),
      setTimeout(() => setLine(5), 10800),
      setTimeout(() => setSilent(true), 12200),
    ]
    return () => t.forEach(clearTimeout)
  }, [clicked])

  return (
    <div className={`scene ${active ? 'on' : ''}`} style={{ background: '#06070a' }}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="mirrorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1f28" />
            <stop offset="50%" stopColor="#0e1218" />
            <stop offset="100%" stopColor="#1a1f28" />
          </linearGradient>
          <radialGradient id="mirrorRefl" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#2a3240" stopOpacity={clicked ? 0.5 : 0.8} />
            <stop offset="100%" stopColor="#0a0d14" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1600" height="900" fill="#0a0a0e" />
        <rect x="0" y="760" width="1600" height="140" fill="#1a1812" />
        <rect x="0" y="750" width="1600" height="14" fill="#2a2218" />
        <g className="tap" onClick={() => setClicked(true)} style={{ cursor: 'pointer' }}>
          <rect x="540" y="120" width="520" height="640" fill="#0a0805" stroke="#3a2a1c" strokeWidth="6" rx="2" />
          <rect x="560" y="140" width="480" height="600" fill="url(#mirrorGrad)" />
          <rect x="560" y="140" width="480" height="600" fill="url(#mirrorRefl)" />
          {!clicked && (
            <text x="800" y="450" textAnchor="middle" fontFamily="var(--serif)" fontSize="14" fontStyle="italic" fill="#4a463e" opacity="0.8">
              {scene8.clickHint}
            </text>
          )}
        </g>
        <circle cx="320" cy="740" r="6" fill="#3a2a1c" />
        <rect x="380" y="720" width="20" height="30" fill="#2a2218" />
        <rect x="1240" y="710" width="14" height="40" fill="#1f1612" />
        <rect x="1280" y="720" width="24" height="30" fill="#2a2218" />
      </svg>
      <div style={{ position: 'absolute', left: 'calc(50% - 240px)', top: 'calc(20% + 8px)', width: 480, height: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', textAlign: 'center', gap: 18 }}>
        {scene8.lines.map((t, i) => (
          <div key={i} style={{ opacity: line > i ? 1 : 0, transform: line > i ? 'translateY(0)' : 'translateY(6px)', transition: 'opacity 1.4s ease, transform 1.4s ease', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: i === 4 ? 26 : 22, color: i === 3 ? 'var(--ink-faint)' : 'var(--ink)', letterSpacing: '0.01em', textShadow: '0 0 18px rgba(160,180,220,0.2)' }}>
            {t}
          </div>
        ))}
      </div>
      {silent && (
        <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, textAlign: 'center' }}>
          <div style={{ marginBottom: 14, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.22em' }}>
            {scene8.silentNote}
          </div>
          <button className="cta" onClick={onAdvance}>{scene8.continueBtn}</button>
        </div>
      )}
    </div>
  )
}

export function Scene9({ active, onAdvance }) {
  const [line, setLine] = useState(0)
  useEffect(() => {
    if (!active) return
    const t = [setTimeout(() => setLine(1), 1800), setTimeout(() => setLine(2), 5200)]
    return () => t.forEach(clearTimeout)
  }, [active])

  return (
    <div className={`scene ${active ? 'on' : ''}`} style={{ background: '#06080c' }}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="cityGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a2238" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0e1220" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06080c" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="hallLightS" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffce8a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffce8a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1600" height="900" fill="#06080c" />
        <rect x="640" y="100" width="320" height="380" fill="url(#cityGlow)" />
        {[...Array(30)].map((_, i) => {
          const cx = 660 + Math.random() * 280, cy = 380 + Math.random() * 60
          const color = ['#ffd28a', '#88a8c8', '#ffce8a', '#cfcfd8'][Math.floor(Math.random() * 4)]
          return <circle key={i} cx={cx} cy={cy} r={Math.random() * 1.2 + 0.5} fill={color} opacity={0.6 + Math.random() * 0.4} className="pulse-warm" />
        })}
        {[...Array(8)].map((_, i) => {
          const w = 600 - i * 60, x = 800 - w / 2, y = 800 - i * 50
          return (
            <g key={i}>
              <rect x={x} y={y} width={w} height="50" fill="#0a0c10" stroke="#1a2028" strokeWidth="0.5" />
              <line x1={x} y1={y} x2={x + w} y2={y} stroke="#2a3240" strokeWidth="1" opacity={0.4 + i * 0.06} />
            </g>
          )
        })}
        {[...Array(8)].map((_, i) => {
          const x1 = 800 - (600 - i * 60) / 2, x2 = 800 + (600 - i * 60) / 2, y = 800 - i * 50
          return (
            <g key={i}>
              <line x1={x1} y1={y} x2={x1} y2={y - 60} stroke="#1f1612" strokeWidth="2" />
              <line x1={x2} y1={y} x2={x2} y2={y - 60} stroke="#1f1612" strokeWidth="2" />
            </g>
          )
        })}
        <circle cx="280" cy="500" r="60" fill="url(#hallLightS)" />
        <rect x="270" y="490" width="20" height="20" fill="#ffd28a" opacity="0.7" />
      </svg>
      <div style={{ position: 'absolute', left: 0, right: 0, top: '30%', textAlign: 'center' }}>
        <div style={{ opacity: line > 0 ? 1 : 0, transform: line > 0 ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity 1.4s ease, transform 1.4s ease', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, marginBottom: 18 }}>
          {scene9.line1}
        </div>
        <div style={{ opacity: line > 1 ? 1 : 0, transform: line > 1 ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity 1.6s ease, transform 1.6s ease', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 30, color: 'var(--warm-soft)', textShadow: '0 0 20px rgba(244,183,105,0.3)' }}>
          {scene9.line2}
        </div>
      </div>
      {line > 1 && (
        <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, textAlign: 'center' }}>
          <button className="cta" onClick={onAdvance}>{scene9.continueBtn}</button>
        </div>
      )}
    </div>
  )
}

export function Scene10({ active, onReset }) {
  const [line, setLine] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [fading, setFading] = useState(false)
  const [final, setFinal] = useState(false)

  useEffect(() => {
    if (!active) return
    const t = [
      setTimeout(() => setLine(1), 2200),
      setTimeout(() => setLine(2), 5600),
      setTimeout(() => setLine(3), 8800),
      setTimeout(() => setLine(4), 12400),
      setTimeout(() => setLine(5), 15600),
      setTimeout(() => setShowBtn(true), 18000),
    ]
    return () => t.forEach(clearTimeout)
  }, [active])

  const handlePulang = () => {
    setFading(true)
    setTimeout(() => setFinal(true), 1800)
  }

  return (
    <div className={`scene ${active ? 'on' : ''}`} style={{ background: '#06080c' }}>
      <div style={{ opacity: fading ? 0 : 1, transition: 'opacity 1.6s ease', position: 'absolute', inset: 0 }}>
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
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
            <circle key={i} cx={Math.random() * 1600} cy={Math.random() * 400} r={Math.random() * 0.8 + 0.3} fill="#e8e0d0" opacity={0.4 + Math.random() * 0.6} />
          ))}
          <g>
            {[...Array(28)].map((_, i) => {
              const x = i * 60 + Math.random() * 20, h = 60 + Math.random() * 180, y = 540 - h
              return (
                <g key={i}>
                  <rect x={x} y={y} width="50" height={h} fill="#080a14" />
                  {[...Array(Math.floor(h / 20))].map((_, j) => (
                    Math.random() > 0.5 ? <rect key={j} x={x + 4 + (j % 3) * 14} y={y + 10 + j * 18} width="6" height="6" fill={Math.random() > 0.7 ? '#ffd28a' : '#cfe0f0'} opacity={0.7 + Math.random() * 0.3} /> : null
                  ))}
                </g>
              )
            })}
          </g>
          <rect x="0" y="400" width="1600" height="200" fill="url(#cityHaze)" />
          <rect x="0" y="600" width="1600" height="300" fill="#0a0a0e" />
          <rect x="0" y="600" width="1600" height="20" fill="#1a1812" />
          <ellipse cx="800" cy="700" rx="180" ry="6" fill="#000" opacity="0.5" />
          <circle cx="760" cy="680" r="30" fill="url(#warmEmbrace)" />
          {[...Array(14)].map((_, i) => (
            <g key={i}>
              <line x1={i * 120} y1="100" x2={i * 120 + 60} y2="120" stroke="#2a2218" strokeWidth="0.8" />
              <line x1={i * 120 + 60} y1="120" x2={(i + 1) * 120} y2="100" stroke="#2a2218" strokeWidth="0.8" />
              <circle cx={i * 120 + 60} cy="120" r="3" fill="#ffd28a" opacity="0.9" className="pulse-warm" />
            </g>
          ))}
        </svg>
        <div style={{ position: 'absolute', left: 0, right: 0, top: '18%', textAlign: 'center' }}>
          {scene10.lines.map((ln, i) => (
            <div key={i} style={{ opacity: line > i ? 1 : 0, transform: line > i ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity 1.6s ease, transform 1.6s ease', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: ln.size, color: ln.warm ? 'var(--warm-soft)' : (ln.faint ? 'var(--ink-faint)' : 'var(--ink)'), marginBottom: 24, lineHeight: 1.3, whiteSpace: 'pre-line', textShadow: ln.warm ? '0 0 24px rgba(244,183,105,0.35)' : 'none' }}>
              {ln.t}
            </div>
          ))}
        </div>
        {showBtn && !fading && (
          <div style={{ position: 'absolute', bottom: 50, left: 0, right: 0, textAlign: 'center' }}>
            <button className="cta" onClick={handlePulang}>{scene10.pulangBtn}</button>
          </div>
        )}
      </div>
      {final && (
        <div style={{ position: 'absolute', inset: 0, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'finalIn 2s ease both', flexDirection: 'column', gap: 28 }}>
          <style>{`@keyframes finalIn { from { opacity: 0;} to { opacity: 1;}}`}</style>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink-dim)' }}>
            {scene10.closingLine}
          </div>
          <button onClick={onReset} style={{ background: 'transparent', border: 'none', color: 'var(--ink-faint)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', cursor: 'pointer', textTransform: 'lowercase' }}>
            {scene10.replayBtn}
          </button>
        </div>
      )}
    </div>
  )
}
