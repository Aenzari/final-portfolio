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
        const introLayout = scene.querySelector<HTMLElement>('.intro-layout')
        const aboutLayout = scene.querySelector<HTMLElement>('.about-layout')
        const interestStrip = scene.querySelector<HTMLElement>('.interest-strip')
        const toolkitIntro = scene.querySelector<HTMLElement>('.toolkit-intro')
        const filters = scene.querySelector<HTMLElement>('.skill-filters')
        const skillCards = gsap.utils.toArray<HTMLElement>('.skill-card', scene)
        const featured = scene.querySelector<HTMLElement>('.featured-project')
        const projectRows = gsap.utils.toArray<HTMLElement>('.project-row', scene)
        const contactLayout = scene.querySelector<HTMLElement>('.contact-layout')
        const universeExplorer = scene.querySelector<HTMLElement>('.universe-explorer')
        const universeOutro = scene.querySelector<HTMLElement>('.universe-outro')

        // The section itself lifts into view, then its contents arrive in readable groups.
        gsap.fromTo(scene,
          { y: 72, clipPath: 'inset(9% 0 0 0)' },
          { y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1.05, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 92%', once: true } },
        )

        if (scene.classList.contains('about-scene')) {
          const curtain = scene.querySelector<HTMLElement>('.curtain-panel')
          const targets = [heading, aboutLayout, interestStrip].filter((target): target is HTMLElement => Boolean(target))
          if (curtain) {
            gsap.fromTo(curtain, { xPercent: 100 }, {
              xPercent: 0, duration: 1, ease: 'power2.inOut',
              scrollTrigger: { trigger: scene, start: 'top 78%', end: 'top 24%', scrub: 0.8 },
            })
            gsap.to(curtain, {
              scaleX: 0, transformOrigin: '0% 50%', ease: 'none',
              scrollTrigger: { trigger: scene, start: 'top 24%', end: 'center 30%', scrub: 0.8 },
            })
          }
          gsap.fromTo(targets, { y: 54, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 68%', once: true },
          })
        } else if (scene.classList.contains('intro-scene')) {
          const targets = [heading, introLayout].filter((target): target is HTMLElement => Boolean(target))
          gsap.fromTo(targets, { y: 58, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1.05, stagger: 0.14, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 72%', once: true },
          })
        } else if (scene.classList.contains('toolkit-scene')) {
          const targets = [heading, toolkitIntro, filters].filter((target): target is HTMLElement => Boolean(target))
          gsap.fromTo(targets, { y: 42, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 72%', once: true },
          })
          if (skillCards.length) gsap.fromTo(skillCards, { y: 34, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.65, stagger: 0.055, ease: 'power2.out',
            scrollTrigger: { trigger: scene, start: 'top 58%', once: true },
          })
        } else if (scene.classList.contains('projects-scene')) {
          const targets = [heading, featured].filter((target): target is HTMLElement => Boolean(target))
          gsap.fromTo(targets, { y: 66, opacity: 0, scale: 0.985 }, {
            y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.16, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 70%', once: true },
          })
          if (projectRows.length) gsap.fromTo(projectRows, { y: 28, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.65, stagger: 0.07, ease: 'power2.out',
            scrollTrigger: { trigger: projectRows[0], start: 'top 88%', once: true },
          })
        } else if (scene.classList.contains('contact-scene')) {
          gsap.fromTo([heading, contactLayout].filter(Boolean), { y: 62, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1, stagger: 0.16, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 70%', once: true },
          })
        } else if (scene.classList.contains('universe-scene')) {
          gsap.fromTo([heading, universeExplorer, universeOutro].filter(Boolean), { y: 54, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1, stagger: 0.16, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 72%', once: true },
          })
        }

        if (index) {
          gsap.fromTo(index, { x: -24, opacity: 0, letterSpacing: '0.35em' }, {
            x: 0, opacity: 1, letterSpacing: '0.12em', duration: 0.85, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 82%', once: true },
          })
        }
        scene.style.setProperty('--scene-depth', String(sceneIndex + 1))
      })

      ScrollTrigger.refresh()
    }, element)

    return () => context.revert()
  }, [root, reducedMotion])
}
