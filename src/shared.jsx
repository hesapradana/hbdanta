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
  el: null,
  started: false,
  on: false,
  _raf: null,

  start() {
    if (this.started) return
    this.el = new window.Audio('/assets/sertamulia.mp3')
    this.el.loop = true
    this.el.volume = 0
    this.started = true
    if (this.on) {
      this.el.play().catch(() => {})
      this._fadeTo(0.7, 2500)
    }
  },

  setOn(on) {
    this.on = on
    if (!this.started) { if (on) this.start(); return }
    if (on) {
      this.el.play().catch(() => {})
      this._fadeTo(0.7, 1200)
    } else {
      this._fadeTo(0, 1200, () => this.el.pause())
    }
  },

  setMood(mood) {
    if (!this.el) return
    const vol = { soft: 0.7, intimate: 0.7, tense: 0.7, calm: 0.25 }
    this._fadeTo(vol[mood] ?? 0.7, 2000)
  },

  _fadeTo(target, duration, cb) {
    if (!this.el) return
    if (this._raf) cancelAnimationFrame(this._raf)
    const start = this.el.volume
    const diff = target - start
    const t0 = performance.now()
    const step = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      this.el.volume = Math.max(0, Math.min(1, start + diff * p))
      if (p < 1) { this._raf = requestAnimationFrame(step) }
      else { this._raf = null; if (cb) cb() }
    }
    this._raf = requestAnimationFrame(step)
  },
}

export const rain = {
  el: null,
  started: false,
  _raf: null,
  _tryPlay: null,

  start() {
    if (this.started) return;
    this.el = new window.Audio('/assets/hujan.mp3');
    this.el.loop = true;
    this.el.volume = 0;
    this.started = true;

    this._tryPlay = () => {
      this.el.play().then(() => {
        if (this._tryPlay) this._fadeTo(0.6, 2000);
        this._clearTryPlay();
      }).catch(() => {});
    };

    this._tryPlay();
    document.addEventListener('click', this._tryPlay);
    document.addEventListener('keydown', this._tryPlay);
    document.addEventListener('touchstart', this._tryPlay);
  },

  _clearTryPlay() {
    if (!this._tryPlay) return;
    document.removeEventListener('click', this._tryPlay);
    document.removeEventListener('keydown', this._tryPlay);
    document.removeEventListener('touchstart', this._tryPlay);
    this._tryPlay = null;
  },

  _fadeTo(target, ms, cb) {
    if (!this.el) return;
    if (target === 0) this._clearTryPlay();
    if (this._raf) cancelAnimationFrame(this._raf);
    const start = this.el.volume, diff = target - start, t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / ms, 1);
      this.el.volume = Math.max(0, Math.min(1, start + diff * p));
      if (p < 1) { this._raf = requestAnimationFrame(step); }
      else { this._raf = null; if (cb) cb(); }
    };
    this._raf = requestAnimationFrame(step);
  },
};

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
      <span>suasana {on ? 'on' : 'off'}</span>
    </button>
  )
}
