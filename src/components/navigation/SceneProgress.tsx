import { useEffect, useState } from 'react'
import { scenes } from '../../data/scenes'
export function SceneProgress() {
  const [active, setActive] = useState('awakening')
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    scenes.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (!element) return
      const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActive(id) }, { threshold: 0.35 })
      observer.observe(element); observers.push(observer)
    })
    return () => observers.forEach((observer) => observer.disconnect())
  }, [])
  return <aside className="scene-progress" aria-label="Current portfolio scene"><span className="progress-current">{scenes.find((s) => s.id === active)?.number}</span><span className="progress-line"/><span className="progress-total">07</span></aside>
}