import { useState, useEffect } from 'react'
import { audio, Progress, AudioToggle } from './shared'
import { Scene0, Scene1, Scene2, Scene3, Scene4, Scene5 } from './scenes-a'
import { Scene6, Scene7, Scene8, Scene9, Scene10 } from './scenes-b'

const SCENES = [
  { id: 0, label: 'preload', mood: 'soft' },
  { id: 1, label: 'jalan malam', mood: 'soft' },
  { id: 2, label: 'teras', mood: 'intimate' },
  { id: 3, label: 'ruang tamu', mood: 'intimate' },
  { id: 4, label: 'dapur', mood: 'calm' },
  { id: 5, label: 'lorong', mood: 'tense' },
  { id: 6, label: 'ruang rahasia', mood: 'tense' },
  { id: 7, label: 'kamar', mood: 'intimate' },
  { id: 8, label: 'cermin', mood: 'soft' },
  { id: 9, label: 'tangga', mood: 'calm' },
  { id: 10, label: 'rooftop', mood: 'calm' },
]

export default function App() {
  const [idx, setIdx] = useState(0)
  const [audioOn, setAudioOn] = useState(false)

  const advance = () => setIdx(i => Math.min(i + 1, SCENES.length - 1))
  const reset = () => setIdx(0)

  useEffect(() => {
    audio.setMood(SCENES[idx]?.mood || 'soft')
  }, [idx])

  useEffect(() => {
    audio.setOn(audioOn)
  }, [audioOn])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') advance()
      else if (e.key === 'ArrowLeft') setIdx(i => Math.max(0, i - 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {idx === 0 && <Scene0 active onAdvance={advance} />}
      {idx === 1 && <Scene1 active onAdvance={advance} />}
      {idx === 2 && <Scene2 active onAdvance={advance} />}
      {idx === 3 && <Scene3 active onAdvance={advance} />}
      {idx === 4 && <Scene4 active onAdvance={advance} />}
      {idx === 5 && <Scene5 active onAdvance={advance} />}
      {idx === 6 && <Scene6 active onAdvance={advance} />}
      {idx === 7 && <Scene7 active onAdvance={advance} />}
      {idx === 8 && <Scene8 active onAdvance={advance} />}
      {idx === 9 && <Scene9 active onAdvance={advance} />}
      {idx === 10 && <Scene10 active onReset={reset} />}

      {idx > 0 && <Progress idx={idx} total={SCENES.length - 1} label={SCENES[idx].label} />}
      {idx > 0 && <AudioToggle on={audioOn} onChange={setAudioOn} />}

      {idx > 1 && (
        <button onClick={() => setIdx(i => Math.max(1, i - 1))}
          style={{ position: 'fixed', bottom: 22, left: 24, zIndex: 80, background: 'transparent', border: 'none', color: 'var(--ink-faint)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', cursor: 'pointer' }}>
          ← balik
        </button>
      )}
    </div>
  )
}
