import { profile } from '../../data/profile'
import { SceneHeading } from '../../components/ui/SceneHeading'

export function IntroductionScene() {
  return (
    <section id="introduction" className="scene content-scene intro-scene">
      <div className="section-index">02 — THE OVERVIEW</div>
      <div className="intro-layout">
        <div className="intro-lead">
          <SceneHeading number="02" eyebrow="A LITTLE ABOUT ME" title="Ideas deserve to become real." description="A student, builder, and curious mind finding the shape of what comes next." />
          <p className="intro-signature">Curiosity is the starting point. Building is how I make sense of it.</p>
        </div>
        <div className="intro-copy">
          <p className="intro-label">A NOTE FROM MAYK</p>
          <p className="large-copy">{profile.introduction}</p>
          <div className="intro-meta">
            <span>BASED IN</span><strong>{profile.location}</strong>
            <span>STUDYING</span><strong>DATABASE SYSTEMS</strong>
            <span>BUILDING TOWARD</span><strong>FULL-STACK ENGINEERING</strong>
          </div>
        </div>
      </div>
      <div className="intro-footnote"><span>SCROLL TO GET TO KNOW THE PERSON BEHIND THE WORK</span><span>02 / 07</span></div>
      <div className="scene-watermark" aria-hidden="true">02</div>
    </section>
  )
}