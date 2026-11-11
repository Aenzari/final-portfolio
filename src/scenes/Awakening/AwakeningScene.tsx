import { useRef, type CSSProperties } from 'react'
import { AvatarStage } from '../../three/AvatarStage'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIntroAnimation } from './useIntroAnimation'

const fragments = [
  { text: 'C', x: -260, y: -170, r: -34, cls: 'wing-fragment wing-left wing-outer' },
  { text: 'U', x: -180, y: -230, r: 22, cls: 'wing-fragment wing-left wing-upper' },
  { text: 'R', x: -340, y: -40, r: -18, cls: 'wing-fragment wing-left wing-mid' },
  { text: 'I', x: -250, y: 90, r: 31, cls: 'wing-fragment wing-left wing-lower' },
  { text: 'O', x: -150, y: 180, r: -22, cls: 'wing-fragment wing-left wing-tip' },
  { text: 'U', x: 260, y: -170, r: 34, cls: 'wing-fragment wing-right wing-outer' },
  { text: 'S', x: 180, y: -230, r: -22, cls: 'wing-fragment wing-right wing-upper' },
  { text: 'B', x: 340, y: -40, r: 18, cls: 'wing-fragment wing-right wing-mid' },
  { text: 'Y', x: 250, y: 90, r: -31, cls: 'wing-fragment wing-right wing-lower' },
  { text: 'N', x: 150, y: 180, r: 22, cls: 'wing-fragment wing-right wing-tip' },
  { text: 'BY NATURE', x: -220, y: -12, r: -12, cls: 'fragment-word fragment-left-word' },
  { text: 'DESIGN', x: 205, y: -8, r: 12, cls: 'fragment-word fragment-right-word' },
  { text: 'MEETS', x: -170, y: 145, r: 8, cls: 'fragment-word fragment-lower-left' },
  { text: 'ENGINEERING', x: 170, y: 145, r: -8, cls: 'fragment-word fragment-lower-right' },
  { text: 'CURIOUS', x: 0, y: -265, r: 0, cls: 'fragment-word fragment-crown' },
]

export function AwakeningScene() {
  const root = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  useIntroAnimation(root, reducedMotion)

  return (
    <section id="awakening" ref={root} className="scene awakening-scene">
      <div className="awakening-grid" aria-hidden="true" />
      <div className="awakening-halo halo-one" aria-hidden="true" />
      <div className="awakening-halo halo-two" aria-hidden="true" />
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      <div className="orbit orbit-three" aria-hidden="true" />
      <div className="fragment-field" aria-label="Curious by nature, design meets engineering">
        {fragments.map((fragment) => (
          <span
            key={fragment.text + fragment.cls}
            className={fragment.cls}
            data-fragment
            style={{ '--scatter-x': `${fragment.x}px`, '--scatter-y': `${fragment.y}px`, '--scatter-rotation': `${fragment.r}deg` } as CSSProperties}
          >
            {fragment.text}
          </span>
        ))}
      </div>
      <div className="hero-copy hero-copy-top"><span className="eyebrow">INDEPENDENT MIND / DIGITAL CRAFT</span></div>
      <div className="avatar-wrap" data-avatar><AvatarStage reducedMotion={reducedMotion} /></div>
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
