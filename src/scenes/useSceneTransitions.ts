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

      scenes.forEach((scene, sceneIndex) => {
        const heading = scene.querySelector<HTMLElement>('.scene-heading')
        const index = scene.querySelector<HTMLElement>('.section-index')

        if (scene.classList.contains('about-scene')) {
          const curtain = scene.querySelector<HTMLElement>('.curtain-panel')
          const story = scene.querySelector<HTMLElement>('.story-card')
          const interests = scene.querySelector<HTMLElement>('.interest-strip')

          if (curtain) {
            const wipe = gsap.timeline({
              scrollTrigger: {
                trigger: scene,
                start: 'top 70%',
                end: 'center 35%',
                scrub: 0.9,
                invalidateOnRefresh: true,
              },
            })
            wipe.fromTo(curtain, { xPercent: 100, scaleX: 1 }, { xPercent: 0, duration: 0.55, ease: 'none' })
              .to(curtain, { scaleX: 0, transformOrigin: '0% 50%', duration: 0.45, ease: 'none' })
          }

          const targets = [heading, story, interests].filter((target): target is HTMLElement => Boolean(target))
          if (targets.length) {
            gsap.fromTo(targets, { y: 58, opacity: 0, rotateX: 5 }, {
              y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.16, ease: 'power3.out',
              scrollTrigger: { trigger: scene, start: 'top 62%', once: true },
            })
          }
        } else if (scene.classList.contains('intro-scene')) {
          const copy = scene.querySelector<HTMLElement>('.intro-copy')
          const signature = scene.querySelector<HTMLElement>('.intro-signature')
          const targets = [heading, copy, signature].filter((target): target is HTMLElement => Boolean(target))
          if (targets.length) {
            gsap.fromTo(targets, { y: 60, opacity: 0, rotateX: 4 }, {
              y: 0, opacity: 1, rotateX: 0, duration: 1.1, stagger: 0.14, ease: 'power3.out',
              scrollTrigger: { trigger: scene, start: 'top 65%', once: true },
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
            gsap.fromTo(targets, { y: 48, opacity: 0, rotateX: 3 }, {
              y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.11, ease: 'power3.out',
              scrollTrigger: { trigger: scene, start: 'top 68%', once: true },
            })
          }
        }

        if (index) {
          gsap.fromTo(index, { x: -24, opacity: 0, letterSpacing: '0.35em' }, {
            x: 0, opacity: 1, letterSpacing: '0.12em', duration: 0.85, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 78%', once: true },
          })
        }

        if (scene.classList.contains('projects-scene') || scene.classList.contains('contact-scene')) {
          gsap.fromTo(scene, { y: 130, scale: 0.94, rotationX: -5, transformOrigin: '50% 0%' }, {
            y: 0, scale: 1, rotationX: 0, ease: 'power2.out',
            scrollTrigger: {
              trigger: scene, start: 'top bottom', end: 'top top', scrub: 0.85,
              invalidateOnRefresh: true,
            },
          })
        }

        if (scene.classList.contains('toolkit-scene')) {
          gsap.fromTo(scene, { y: 65, scale: 0.975 }, {
            y: 0, scale: 1, ease: 'none',
            scrollTrigger: { trigger: scene, start: 'top bottom', end: 'top top', scrub: 0.8 },
          })
        }

        scene.style.setProperty('--scene-depth', String(sceneIndex + 1))
      })

      ScrollTrigger.refresh()
    }, element)

    return () => context.revert()
  }, [root, reducedMotion])
}
