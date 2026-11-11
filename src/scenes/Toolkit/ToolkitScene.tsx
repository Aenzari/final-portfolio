import {useState} from 'react'
import {skills} from '../../data/profile'
import {SceneHeading} from '../../components/ui/SceneHeading'
const groups=['All',...Array.from(new Set(skills.map(s=>s.group)))]
export function ToolkitScene(){const [active,setActive]=useState('All');const visible=active==='All'?skills:skills.filter(s=>s.group===active)
return <section id="toolkit" className="scene content-scene toolkit-scene"><div className="section-index">04 — THE TOOLKIT</div><SceneHeading number="04" eyebrow="TOOLS I WORK WITH" title="A toolkit in motion." description="Technologies I use, explore, and continue to sharpen through real projects."/>
<div className="skill-filters" aria-label="Filter technologies">{groups.map(g=><button key={g} className={active===g?'filter-chip active':'filter-chip'} onClick={()=>setActive(g)}>{g}</button>)}</div>
<div className="skills-grid">{visible.map((s,i)=><article className="skill-card" key={s.name}><span className="skill-number">{String(i+1).padStart(2,'0')}</span><h3>{s.name}</h3><p>{s.group}</p><span className="skill-level">{s.level}</span></article>)}</div><p className="fine-print">Skill labels are an initial self-assessment and will be refined against project evidence.</p></section>}