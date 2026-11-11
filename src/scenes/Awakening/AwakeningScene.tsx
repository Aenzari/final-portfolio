import { useRef } from 'react'
import { AvatarStage } from '../../three/AvatarStage'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIntroAnimation } from './useIntroAnimation'

const fragments = [
  { text: 'CURIOUS', className: 'fragment fragment-a', x: -42, y: -38, rotation: -18 },
  { text: 'BY NATURE', className: 'fragment fragment-b', x: -28, y: 22, rotation: 12 },
  { text: 'DESIGN', className: 'fragment fragment-c', x: 38, y: -42, rotation: 16 },
  { text: 'MEETS', className: 'fragment fragment-d', x: 52, y: 10, rotation: -12 },
  { text: 'ENGINEERING', className: 'fragment fragment-e', x: 22, y: 48, rotation: 8 },
]

export function AwakeningScene() {
  const root = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  useIntroAnimation(root, reducedMotion)

  return (
    <section id="awakening" ref={root} className="scene awakening-scene">
      <div className="awakening-grid" aria-hidden="true" />
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      <div className="fragment-field" aria-label="Curious by nature, design meets engineering">
        {fragments.map((fragment) => (
          <span
            key={fragment.text}
            className={fragment.className}
            data-fragment
            style={{ '--scatter-x': `${fragment.x}px`, '--scatter-y': `${fragment.y}px`, '--scatter-rotation': `${fragment.rotation}deg` } as React.CSSProperties}
          >
            {fragment.text}
          </span>
        ))}
      </div>
      <div className="hero-copy hero-copy-top"><span className="eyebrow">INDEPENDENT MIND / DIGITAL CRAFT</span></div>
      <div className="avatar-wrap" data-avatar><AvatarStage /></div>
      <div className="hero-title" data-hero-title>
        <p className="hero-kicker">HELLO, I'M</p>
        <h1>MAYK<span>.</span></h1>
        <p className="hero-subtitle">Building ideas into experiences.</p>
      </div>
      <div className="hero-bottom">
        <span>PORTFOLIO — 2026</span>
        <a href="#introduction" className="scroll-cue"><span /> SCROLL TO DISCOVER</a>
        <span>01 / 07</span>
      </div>
    </section>
  )
}