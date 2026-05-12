import { useState, useEffect, useMemo } from 'react'

export function LineSeq({ lines, start = true, baseDelay = 0, pace = 1, onDone }) {
  const [visible, setVisible] = useState(0)
  useEffect(() => {
    if (!start) { setVisible(0); return }
    let t = baseDelay
    const timers = []
    lines.forEach((ln, i) => {
      t += (ln.delay ?? 800) * pace
      timers.push(setTimeout(() => setVisible(v => Math.max(v, i + 1)), t))
    })
    if (onDone) timers.push(setTimeout(onDone, t + 600))
    return () => timers.forEach(clearTimeout)
  }, [start, pace, baseDelay])
  return (
    <div className="text-block center-stack">
      {lines.map((ln, i) => (
        <div key={i}
          className={`line ${visible > i ? 'in' : ''} ${ln.className || 'serif italic'}`}
          style={{ fontSize: ln.size || 22, color: ln.color || 'var(--ink)', letterSpacing: ln.tracking || 'normal' }}>
          {ln.text}
        </div>
      ))}
    </div>
  )
}

export function Rain({ density = 60, opacity = 0.35 }) {
  const drops = useMemo(() => {
    const arr = []
    for (let i = 0; i < density; i++) {
      arr.push({
        x: Math.random() * 100,
        delay: Math.random() * 2,
        dur: 0.6 + Math.random() * 0.9,
        len: 12 + Math.random() * 28,
        opacity: 0.2 + Math.random() * 0.6,
      })
    }
    return arr
  }, [density])
  return (
    <div className="rain" style={{ opacity }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        {drops.map((d, i) => (
          <line key={i} x1={d.x} y1={-10} x2={d.x - 0.6} y2={-10 + d.len / 6}
            stroke="var(--rain)" strokeWidth="0.12" opacity={d.opacity}>
            <animate attributeName="y1" from="-10" to="110" dur={`${d.dur}s`} begin={`${d.delay}s`} repeatCount="indefinite" />
            <animate attributeName="y2" from={`${-10 + d.len / 6}`} to={`${110 + d.len / 6}`} dur={`${d.dur}s`} begin={`${d.delay}s`} repeatCount="indefinite" />
          </line>
        ))}
      </svg>
    </div>
  )
}

export const audio = {
  ctx: null, gain: null, rainNode: null, padGain: null,
  started: false,
  start() {
    if (this.started) return
    try {
      const AC = window.AudioContext || window.webkitAudioContext
      const ctx = new AC()
      this.ctx = ctx
      const master = ctx.createGain()
      master.gain.value = 0.0
      master.connect(ctx.destination)
      this.gain = master

      const bufferSize = 2 * ctx.sampleRate
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const out = noiseBuffer.getChannelData(0)
      let b0 = 0, b1 = 0, b2 = 0
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1
        b0 = 0.99765 * b0 + white * 0.0990460
        b1 = 0.96300 * b1 + white * 0.2965164
        b2 = 0.57000 * b2 + white * 1.0526913
        out[i] = (b0 + b1 + b2 + white * 0.1848) * 0.18
      }
      const noise = ctx.createBufferSource()
      noise.buffer = noiseBuffer
      noise.loop = true
      const bp = ctx.createBiquadFilter()
      bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 0.4
      const hp = ctx.createBiquadFilter()
      hp.type = 'highpass'; hp.frequency.value = 300
      noise.connect(bp); bp.connect(hp); hp.connect(master)
      noise.start()

      const padGain = ctx.createGain()
      padGain.gain.value = 0.0
      padGain.connect(master)
      const o1 = ctx.createOscillator()
      o1.type = 'sine'; o1.frequency.value = 110
      const o2 = ctx.createOscillator()
      o2.type = 'sine'; o2.frequency.value = 164.81
      const o3 = ctx.createOscillator()
      o3.type = 'sine'; o3.frequency.value = 220
      ;[o1, o2, o3].forEach(o => { o.connect(padGain); o.start() })
      this.padGain = padGain

      master.gain.cancelScheduledValues(ctx.currentTime)
      master.gain.linearRampToValueAtTime(0.45, ctx.currentTime + 2.5)
      padGain.gain.linearRampToValueAtTime(0.025, ctx.currentTime + 4)
      this.started = true
    } catch (e) {
      console.warn('audio init failed', e)
    }
  },
  setOn(on) {
    if (!this.ctx) { if (on) this.start(); else return }
    const t = this.ctx.currentTime
    this.gain.gain.cancelScheduledValues(t)
    this.gain.gain.linearRampToValueAtTime(on ? 0.45 : 0.0, t + 1.2)
  },
  setMood(mood) {
    if (!this.padGain) return
    const t = this.ctx.currentTime
    const m = { soft: 0.02, intimate: 0.04, tense: 0.012, calm: 0.05 }
    this.padGain.gain.cancelScheduledValues(t)
    this.padGain.gain.linearRampToValueAtTime(m[mood] ?? 0.025, t + 2)
  },
}

export function Progress({ idx, total, label }) {
  return (
    <div className="progress">
      <span>{String(idx).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      <span style={{ marginLeft: 12, color: 'var(--ink-faint)' }}>· {label}</span>
    </div>
  )
}

export function AudioToggle({ on, onChange }) {
  return (
    <button className={`audio-toggle ${on ? 'on' : ''}`} onClick={() => onChange(!on)}>
      <span className="dot"></span>
      <span>ambience {on ? 'on' : 'off'}</span>
    </button>
  )
}
