import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useIntroAnimation(root: RefObject<HTMLElement | null>, reducedMotion: boolean) {
  useLayoutEffect(() => {
    const element = root.current
    if (!element || reducedMotion) return

    const context = gsap.context(() => {
      const fragments = gsap.utils.toArray<HTMLElement>('[data-fragment]')
      gsap.set(fragments, {
        x: (_index, target) => Number.parseFloat(target.style.getPropertyValue('--scatter-x')) || 0,
        y: (_index, target) => Number.parseFloat(target.style.getPropertyValue('--scatter-y')) || 0,
        rotation: (_index, target) => Number.parseFloat(target.style.getPropertyValue('--scatter-rotation')) || 0,
        opacity: 0.12,
        scale: 0.72,
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
        // Hold the complete wing composition first; then fold both wings toward the character.
        .to('[data-wing-left]', { x: 110, scaleX: 0.12, opacity: 0, transformOrigin: '100% 50%', ease: 'power3.in' }, 0.02)
        .to('[data-wing-right]', { x: -110, scaleX: 0.12, opacity: 0, transformOrigin: '0% 50%', ease: 'power3.in' }, 0.02)
        .to('.wing-spine', { scaleY: 0, opacity: 0, ease: 'power2.in' }, 0.02)
        .to(fragments, {
          x: 0, y: 0, rotation: 0, opacity: 1, scale: 1,
          stagger: { each: 0.018, from: 'center' }, ease: 'power3.inOut',
        }, 0.18)
        .to('[data-avatar]', { y: -92, scale: 0.72, ease: 'power2.inOut' }, 0.28)
        .to('[data-hero-title]', { y: -65, scale: 0.78, ease: 'power2.inOut' }, 0.34)
        .to('.orbit-one', { rotation: 38, scale: 1.3, ease: 'none' }, 0.16)
        .to('.orbit-two', { rotation: -42, scale: 0.82, ease: 'none' }, 0.16)
        .to('.orbit-three', { rotation: 24, scale: 1.18, ease: 'none' }, 0.16)
        .to('.hero-copy-top', { y: -42, opacity: 0, ease: 'none' }, 0.34)
        .to('.scroll-cue', { y: 22, opacity: 0, ease: 'none' }, 0.34)
        .to('.awakening-halo', { scale: 1.6, opacity: 0.12, ease: 'none' }, 0.16)
    }, element)

    return () => {
      window.dispatchEvent(new CustomEvent('portfolio:intro-progress', { detail: 0 }))
      context.revert()
    }
  }, [root, reducedMotion])
}
