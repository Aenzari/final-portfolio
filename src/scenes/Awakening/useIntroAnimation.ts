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
      gsap.set(fragments, { opacity: 0.35 })
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: '+=125%',
          scrub: 0.85,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      timeline
        .to(fragments, { x: 0, y: 0, rotation: 0, opacity: 1, stagger: 0.035, ease: 'power3.inOut' }, 0)
        .to('[data-avatar]', { y: -78, scale: 0.82, ease: 'power2.inOut' }, 0)
        .to('[data-hero-title]', { y: -42, scale: 0.9, ease: 'power2.inOut' }, 0)
        .to('.orbit-one', { rotation: 24, scale: 1.12, ease: 'none' }, 0)
        .to('.orbit-two', { rotation: -18, scale: 0.92, ease: 'none' }, 0)
        .to('.hero-copy-top', { y: -24, opacity: 0.25, ease: 'none' }, 0)
        .to('.scroll-cue', { y: 16, opacity: 0, ease: 'none' }, 0.15)
    }, element)

    return () => context.revert()
  }, [root, reducedMotion])
}