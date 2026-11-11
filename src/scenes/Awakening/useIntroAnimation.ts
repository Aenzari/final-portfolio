import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useIntroAnimation(root: RefObject<HTMLElement | null>, reducedMotion: boolean) {
  useLayoutEffect(() => {
    const element = root.current
    if (!element || reducedMotion) return

    const context = gsap.context(() => {
      const lines = gsap.utils.toArray<SVGPathElement>('.wing-drawing path')

      lines.forEach((line) => {
        const length = line.getTotalLength()
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: 0 })
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: '+=220%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => window.dispatchEvent(new CustomEvent('portfolio:intro-progress', { detail: self.progress })),
          onLeave: () => window.dispatchEvent(new CustomEvent('portfolio:intro-progress', { detail: 1 })),
          onEnterBack: () => window.dispatchEvent(new CustomEvent('portfolio:intro-progress', { detail: 1 })),
          onLeaveBack: () => window.dispatchEvent(new CustomEvent('portfolio:intro-progress', { detail: 0 })),
        },
      })

      timeline
        .to({}, { duration: 0.9 })
        .to('[data-wing-left]', { x: -90, opacity: 0, duration: 0.85, ease: 'power2.in' }, '>')
        .to('[data-wing-right]', { x: 90, opacity: 0, duration: 0.85, ease: 'power2.in' }, '<')
        .to(lines, { strokeDashoffset: (index) => index < 2 ? 900 : 520, opacity: 0, duration: 0.9, stagger: 0.035, ease: 'power2.in' }, '<')
        .to('[data-avatar]', { scale: 1.12, duration: 1.15, ease: 'power2.inOut' }, '-=0.18')
        .to('[data-avatar]', { scale: 1, duration: 0.9, ease: 'power2.inOut' }, '>')
        .to('[data-hero-title]', { scale: 0.94, duration: 1.05, ease: 'power2.inOut' }, '<')
        .to('.orbit-one', { rotation: 38, scale: 1.3, duration: 1.4, ease: 'none' }, '<')
        .to('.orbit-two', { rotation: -42, scale: 0.82, duration: 1.4, ease: 'none' }, '<')
        .to('.orbit-three', { rotation: 24, scale: 1.18, duration: 1.4, ease: 'none' }, '<')
        .to('.hero-copy-top', { y: -42, opacity: 0, duration: 0.7, ease: 'none' }, '-=0.55')
        .to('.scroll-cue', { y: 22, opacity: 0, duration: 0.7, ease: 'none' }, '<')
        .to('.awakening-halo', { scale: 1.6, opacity: 0.12, duration: 1.4, ease: 'none' }, '<')
    }, element)

    return () => {
      window.dispatchEvent(new CustomEvent('portfolio:intro-progress', { detail: 0 }))
      context.revert()
    }
  }, [root, reducedMotion])
}
