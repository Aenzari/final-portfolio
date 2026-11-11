import { useState } from 'react'
import { ArrowUpRight, Compass, Database, Gamepad2, GraduationCap, Layers3, Sparkles, Trophy } from 'lucide-react'
import { SceneHeading } from '../../components/ui/SceneHeading'
import { projects } from '../../data/profile'

const worlds = [
  { id: 'engineering', number: '01', title: 'The Workshop', subtitle: 'Building ideas into products', detail: 'I’m drawn to the whole process of making something useful — shaping an interface, connecting the logic behind it, and turning a rough idea into a working experience.', tags: ['Full-stack direction', 'React', 'JavaScript', 'Node.js'], icon: Layers3 },
  { id: 'data', number: '02', title: 'The Network', subtitle: 'Where data finds its shape', detail: 'Database Systems is my major, and data is one of the parts of technology I keep coming back to. I enjoy exploring how information is structured, connected, and made useful.', tags: ['Supabase', 'MySQL', 'MongoDB', 'Neo4j'], icon: Database },
  { id: 'meowks', number: '03', title: 'Meowks Universe', subtitle: 'The flagship project', detail: 'Meowks Hub is my biggest ongoing product idea: a gamified student productivity space built around focus, progress, and a little personality. It represents the kind of product I want to keep building.', tags: ['Product thinking', 'Student productivity', 'Gamification'], icon: Sparkles, href: projects[0].href, linkLabel: 'Explore Meowks Hub' },
  { id: 'experiments', number: '04', title: 'The Sandbox', subtitle: 'Projects and experiments', detail: 'Every project is a chance to test an idea, learn a new tool, or understand a problem from another angle. Some are practical systems; others are explorations that help me grow.', tags: ['PACE MSU-IIT', 'Baylo', 'EpiGraph', 'Kusyna'], icon: Compass, href: 'https://github.com/Aenzari', linkLabel: 'Browse my GitHub' },
  { id: 'sports', number: '05', title: 'The Court', subtitle: 'A life outside the screen', detail: 'Futsal and basketball keep me moving, competitive, and connected with people. They’re a different kind of problem-solving — read the moment, make a decision, work with the team.', tags: ['Futsal', 'Basketball', 'Teamwork'], icon: Trophy },
  { id: 'play', number: '06', title: 'The Playground', subtitle: 'Play, compete, repeat', detail: 'I grew up around computer shops and online games. Competitive FPS titles and MOBA games are still part of what I enjoy, especially the strategy, teamwork, and constant learning.', tags: ['Competitive FPS', 'MOBA', 'Strategy'], icon: Gamepad2 },
  { id: 'learning', number: '07', title: 'The Next Frontier', subtitle: 'Always a work in progress', detail: 'I’m still learning, especially around information assurance and security. I like following curiosity into unfamiliar territory and building confidence through practice.', tags: ['Information security', 'Networking', 'Curiosity'], icon: GraduationCap },
]

export function UniverseScene() {
  const [activeId, setActiveId] = useState('engineering')
  const active = worlds.find((world) => world.id === activeId) ?? worlds[0]

  return (
    <section id="universe" className="scene content-scene universe-scene">
      <div className="universe-glow" aria-hidden="true" />
      <div className="section-index">07 — THE UNIVERSE</div>
      <SceneHeading number="07" eyebrow="BEYOND THE BUILD" title="A little world of my own." description="The interests, ideas, and experiences that make the work feel personal." />

      <div className="universe-explorer">
        <div className="universe-map" aria-label="Explore the different parts of my universe">
          <div className="universe-orbit orbit-one" aria-hidden="true" />
          <div className="universe-orbit orbit-two" aria-hidden="true" />
          <div className="universe-orbit orbit-three" aria-hidden="true" />
          <div className="universe-core"><span>M</span><small>MAYK’S<br />UNIVERSE</small></div>
          {worlds.map((world, index) => {
            const Icon = world.icon
            return (
              <button
                className={`universe-node node-${index + 1}${activeId === world.id ? ' is-active' : ''}`}
                key={world.id}
                type="button"
                aria-pressed={activeId === world.id}
                aria-label={`Explore ${world.title}`}
                onClick={() => setActiveId(world.id)}
              >
                <span className="universe-node-icon"><Icon size={17} strokeWidth={1.7} /></span>
                <span className="universe-node-label">{world.title}</span>
                <span className="universe-node-number">{world.number}</span>
              </button>
            )
          })}
          <span className="universe-map-caption">SELECT A POINT TO EXPLORE</span>
        </div>

        <article className="universe-detail" aria-live="polite" aria-atomic="true">
          <div className="universe-detail-top"><span className="eyebrow">FIELD NOTE / {active.number}</span><span className="universe-detail-mark">✳</span></div>
          <p className="universe-detail-subtitle">{active.subtitle}</p>
          <h3>{active.title}</h3>
          <p className="universe-detail-copy">{active.detail}</p>
          <div className="universe-tags">{active.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {active.href && <a className="universe-detail-link" href={active.href} target="_blank" rel="noreferrer">{active.linkLabel}<ArrowUpRight size={15} /></a>}
          <div className="universe-detail-footer"><span>INTEREST / {active.number}</span><span>ILIGAN CITY, PH</span></div>
        </article>
      </div>

      <p className="universe-outro">Still exploring. Still building. Still becoming.</p>
    </section>
  )
}
