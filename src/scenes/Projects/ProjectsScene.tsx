import { ArrowUpRight, Github, Sparkles } from 'lucide-react'
import { projects } from '../../data/profile'
import { SceneHeading } from '../../components/ui/SceneHeading'

export function ProjectsScene() {
  const [featured, ...others] = projects

  return (
    <section id="projects" className="scene content-scene projects-scene">
      <div className="section-index">05 — THE WORKSHOP</div>
      <SceneHeading
        number="05"
        eyebrow="SELECTED WORK"
        title="Ideas, made tangible."
        description="A growing collection of products, experiments, and systems. Each one is a chance to learn by building."
      />

      <a className="featured-project" href={featured.href} target="_blank" rel="noreferrer"
        aria-label={`Explore the ${featured.name} GitHub repository`}>
        <div className="featured-art" aria-hidden="true">
          <span className="featured-orbit orbit-a" />
          <span className="featured-orbit orbit-b" />
          <span className="featured-orbit orbit-c" />
          <span className="featured-star"><Sparkles size={20} /></span>
          <span className="featured-word">MEOWKS</span>
          <span className="featured-caption">FLAGSHIP PROJECT / 001</span>
          <span className="featured-art-note">LEARN · ORGANIZE · GROW</span>
        </div>
        <div className="featured-info">
          <div>
            <p className="eyebrow">01 / FEATURED PROJECT</p>
            <h3>{featured.name}</h3>
            <span className="featured-category">{featured.category}</span>
          </div>
          <p>{featured.description}</p>
          <span className="project-link">EXPLORE ON GITHUB <ArrowUpRight size={17} /></span>
        </div>
      </a>

      <div className="project-list-heading">
        <span className="eyebrow">MORE FROM THE WORKSHOP</span>
        <span className="project-total">{String(projects.length).padStart(2, '0')} PROJECTS</span>
      </div>
      <div className="project-list">
        {others.map((project, index) => (
          <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.name}
            aria-label={`Open ${project.name} repository on GitHub`}>
            <span className="project-index">{String(index + 2).padStart(2, '0')}</span>
            <span className="project-row-main">
              <span className="project-name">{project.name}</span>
              <span className="project-row-description">{project.description}</span>
            </span>
            <span className="project-category">{project.category}</span>
            <ArrowUpRight size={17} />
          </a>
        ))}
      </div>
      <p className="fine-print">Explore the repositories for implementation details, technologies, and the latest project progress.</p>
    </section>
  )
}
