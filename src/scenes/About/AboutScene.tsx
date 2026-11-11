import { SceneHeading } from '../../components/ui/SceneHeading'
import { profile } from '../../data/profile'

const interests = [
  { label: 'FUTSAL', note: 'Quick decisions, shared rhythm' },
  { label: 'BASKETBALL', note: 'Teamwork beyond the screen' },
  { label: 'COMPETITIVE GAMES', note: 'Strategy, focus, and improvement' },
]

export function AboutScene() {
  return (
    <section id="about" className="scene content-scene about-scene">
      <div className="curtain-panel" aria-hidden="true" />
      <div className="section-index">03 — THE PERSON</div>
      <div className="about-layout">
        <div className="about-lead">
          <SceneHeading number="03" eyebrow="BEHIND THE INTERFACE" title="A curious mind, still becoming." description="The person behind the pixels, projects, and persistent experiments." />
          <div className="about-origin">
            <span className="eyebrow">WHERE IT STARTED</span>
            <p>From computer-shop afternoons and competitive games to writing my first lines of code.</p>
          </div>
        </div>
        <div className="story-card">
          <p className="eyebrow">THE SHORT VERSION</p>
          <p>I grew up around computers and competitive games. A small introduction to web development in high school turned that curiosity into a direction.</p>
          <p>Today, I'm a fourth-year IT student majoring in Database Systems at Mindanao State University–Iligan Institute of Technology.</p>
          <p>{profile.education}</p>
          <div className="story-note">“I enjoy the moment an idea stops being just an idea.”</div>
        </div>
      </div>
      <div className="interest-strip" aria-label="Interests outside development">
        <span className="eyebrow">WHEN I'M NOT BUILDING</span>
        <div className="interest-list">
          {interests.map((interest, i) => (
            <div className="interest-item" key={interest.label}>
              <span>0{i + 1}</span><strong>{interest.label}</strong><small>{interest.note}</small>
            </div>
          ))}
        </div>
      </div>
      <span className="scene-side-note">PERSONAL HISTORY / 001</span>
    </section>
  )
}