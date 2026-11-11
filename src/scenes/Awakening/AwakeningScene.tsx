import { useRef } from 'react'
import { AvatarStage } from '../../three/AvatarStage'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIntroAnimation } from './useIntroAnimation'

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

      <div className="wing-composition" aria-label="Michael Angelou C. Quinit, Full Stack Engineering">
        <svg className="wing-drawing" viewBox="0 0 1200 620" preserveAspectRatio="none" aria-hidden="true">
          <path className="wing-frame" d="M82 112 Q270 104 420 126 Q600 139 780 126 Q960 111 1118 94 L1104 520 Q910 510 748 516 Q590 522 420 512 Q230 502 66 510 Q102 414 115 322 Q128 215 82 112Z" />
          <path className="wing-line wing-line-left" d="M110 174 Q154 150 192 174 L310 178 Q360 178 370 215 L376 278 M128 315 L315 315 Q344 315 352 342 L364 420" />
          <path className="wing-line wing-line-right" d="M1090 174 L944 180 Q910 180 888 198 L824 260 M1004 322 L858 322 Q820 322 810 350 L794 420" />
          <path className="wing-line wing-line-center" d="M600 236 L600 468 M600 350 Q542 370 500 420 M600 350 Q658 370 700 420" />
          <path className="wing-line wing-line-crown" d="M566 202 Q600 176 634 202 L650 242 Q600 258 550 242Z" />
        </svg>
        <div className="wing-identity wing-identity-left" data-wing-left>
          <span className="wing-overline">THE MIND BEHIND THE BUILD</span>
          <p className="wing-name">MICHAEL ANGELOU</p>
          <span className="wing-middle">C. QUINIT</span>
          <span className="wing-coordinate">08°13' N — 124°14' E</span>
        </div>
        <div className="wing-identity wing-identity-right" data-wing-right>
          <span className="wing-overline">CRAFT / CODE / CREATION</span>
          <p className="wing-role">FULL STACK<br /><em>ENGINEERING</em></p>
          <span className="wing-middle">IDEAS INTO INTERFACES</span>
          <span className="wing-coordinate">DESIGNING THE DIGITAL</span>
        </div>
      </div>

      <div className="hero-copy hero-copy-top"><span className="eyebrow">CURIOUS BY NATURE</span></div>
      <div className="avatar-wrap" data-avatar><AvatarStage reducedMotion={reducedMotion} /></div>
      <div className="hero-title" data-hero-title>
        <p className="hero-kicker">HELLO, I'M</p>
        <h1>MAYK<span>.</span></h1>
        <p className="hero-subtitle">Design meets engineering.</p>
      </div>
      <div className="hero-bottom">
        <span>PORTFOLIO — 2026</span>
        <a href="#introduction" className="scroll-cue"><span /> SCROLL TO DISCOVER</a>
        <span>01 / 07</span>
      </div>
    </section>
  )
}
