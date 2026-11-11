import { useState } from 'react'
import { skills } from '../../data/profile'
import { SceneHeading } from '../../components/ui/SceneHeading'

const groups = ['All', ...Array.from(new Set(skills.map((skill) => skill.group)))]

export function ToolkitScene() {
  const [active, setActive] = useState('All')
  const visible = skills.map((skill, index) => ({ ...skill, index }))
    .filter((skill) => active === 'All' || skill.group === active)

  return (
    <section id="toolkit" className="scene content-scene toolkit-scene">
      <div className="section-index">04 — THE TOOLKIT</div>
      <SceneHeading number="04" eyebrow="TOOLS I WORK WITH" title="A toolkit in motion." description="Technologies I use, explore, and continue to sharpen through real projects." />
      <div className="toolkit-intro">
        <p>Not a list of buzzwords — a snapshot of the tools I reach for, the systems I've explored, and the areas I'm actively growing in.</p>
        <span>{String(visible.length).padStart(2, '0')} / {String(skills.length).padStart(2, '0')} SKILLS SHOWN</span>
      </div>
      <div className="skill-filters" aria-label="Filter technologies">
        {groups.map((group) => (
          <button key={group} type="button" className={active === group ? 'filter-chip active' : 'filter-chip'}
            aria-pressed={active === group} onClick={() => setActive(group)}>{group}</button>
        ))}
      </div>
      <div className="skills-grid" aria-live="polite">
        {visible.map((skill) => (
          <article className={skill.name === 'Supabase' ? 'skill-card skill-card-featured' : 'skill-card'} key={skill.name}>
            <span className="skill-number">{String(skill.index + 1).padStart(2, '0')}</span>
            <div className="skill-card-main"><h3>{skill.name}</h3><p>{skill.group}</p></div>
            <span className="skill-level">{skill.level}</span>
          </article>
        ))}
      </div>
      <p className="fine-print">Skill labels are an honest snapshot of my current experience, not formal certifications or measured proficiency scores.</p>
    </section>
  )
}