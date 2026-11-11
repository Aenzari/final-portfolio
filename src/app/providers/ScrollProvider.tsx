import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const ScrollContext = createContext<{ lenis: Lenis | null }>({ lenis: null })
export const useScrollEngine = () => useContext(ScrollContext)
export function ScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const instance = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.85, touchMultiplier: 1.2 })
    instance.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => instance.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    setLenis(instance)
    return () => { gsap.ticker.remove(tick); instance.destroy(); setLenis(null); ScrollTrigger.getAll().forEach((trigger) => trigger.kill()) }
  }, [])
  const value = useMemo(() => ({ lenis }), [lenis])
  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}