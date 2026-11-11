import { useEffect, useRef } from 'react'
import { ScrollProvider } from './providers/ScrollProvider'
import { SiteNavigation } from '../components/navigation/SiteNavigation'
import { SceneProgress } from '../components/navigation/SceneProgress'
import { AwakeningScene } from '../scenes/Awakening/AwakeningScene'
import { IntroductionScene } from '../scenes/Introduction/IntroductionScene'
import { AboutScene } from '../scenes/About/AboutScene'
import { ToolkitScene } from '../scenes/Toolkit/ToolkitScene'
import { ProjectsScene } from '../scenes/Projects/ProjectsScene'
import { ContactScene } from '../scenes/Contact/ContactScene'
import { UniverseScene } from '../scenes/Universe/UniverseScene'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useSceneTransitions } from '../scenes/useSceneTransitions'

export default function App() {
  const reducedMotion = useReducedMotion()
  const mainRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    document.documentElement.dataset.motion = reducedMotion ? 'reduced' : 'full'
  }, [reducedMotion])

  useSceneTransitions(mainRef, reducedMotion)

  return (
    <ScrollProvider>
      <SiteNavigation />
      <SceneProgress />
      <main id="main-content" ref={mainRef}>
        <AwakeningScene />
        <IntroductionScene />
        <AboutScene />
        <ToolkitScene />
        <ProjectsScene />
        <ContactScene />
        <UniverseScene />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} MAYK</span>
        <span>FROM FRAGMENTS TO FORM.</span>
        <a href="#awakening">BACK TO TOP ↑</a>
      </footer>
    </ScrollProvider>
  )
}
