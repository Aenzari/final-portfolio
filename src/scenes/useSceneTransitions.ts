import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSceneTransitions(root: RefObject<HTMLElement | null>, reducedMotion: boolean) {
  useLayoutEffect(() => {
    const element = root.current
    if (!element || reducedMotion) return

    const context = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>('.content-scene')

      scenes.forEach((scene) => {
        const heading = scene.querySelector<HTMLElement>('.scene-heading')
        const index = scene.querySelector<HTMLElement>('.section-index')

        if (scene.classList.contains('about-scene')) {
          const curtain = scene.querySelector<HTMLElement>('.curtain-panel')
          const story = scene.querySelector<HTMLElement>('.story-card')
          const interests = scene.querySelector<HTMLElement>('.interest-strip')

          if (curtain) {
            gsap.set(curtain, { transformOrigin: '100% 50%', scaleX: 1 })
            gsap.to(curtain, {
              scaleX: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: scene,
                start: 'top 75%',
                end: 'center center',
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            })
          }

          const aboutTargets = [heading, story, interests].filter((target): target is HTMLElement => Boolean(target))
          if (aboutTargets.length) {
            gsap.fromTo(aboutTargets, { y: 34, opacity: 0 }, {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.14,
              ease: 'power3.out',
              scrollTrigger: { trigger: scene, start: 'top 68%', once: true },
            })
          }
        } else if (scene.classList.contains('intro-scene')) {
          const copy = scene.querySelector<HTMLElement>('.intro-copy')
          const meta = scene.querySelector<HTMLElement>('.intro-meta')
          const signature = scene.querySelector<HTMLElement>('.intro-signature')
          const introTargets = [heading, copy, meta, signature].filter((target): target is HTMLElement => Boolean(target))
          if (introTargets.length) {
            gsap.fromTo(introTargets, { y: 42, opacity: 0 }, {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.13,
              ease: 'power3.out',
              scrollTrigger: { trigger: scene, start: 'top 68%', once: true },
            })
          }
        } else {
          const targets = Array.from(scene.children).filter((child): child is HTMLElement =>
            child instanceof HTMLElement &&
            !child.classList.contains('section-index') &&
            !child.classList.contains('scene-watermark') &&
            !child.classList.contains('curtain-panel') &&
            !child.classList.contains('universe-glow')
          )
          if (heading && !targets.includes(heading)) targets.unshift(heading)

          if (targets.length) {
            gsap.fromTo(targets, { y: 38, opacity: 0 }, {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: scene, start: 'top 72%', once: true },
            })
          }
        }

        if (index) {
          gsap.fromTo(index, { x: -14, opacity: 0 }, {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: scene, start: 'top 78%', once: true },
          })
        }

        if (scene.classList.contains('projects-scene') || scene.classList.contains('contact-scene')) {
          gsap.fromTo(scene, { y: 48, scale: 0.985 }, {
            y: 0,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: scene,
              start: 'top bottom',
              end: 'top 35%',
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          })
        }
      })

      ScrollTrigger.refresh()
    }, element)

    return () => context.revert()
  }, [root, reducedMotion])
}
