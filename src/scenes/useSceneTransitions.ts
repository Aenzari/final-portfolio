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
        const interestItems = gsap.utils.toArray<HTMLElement>('.interest-item', scene)
        const toolkitIntro = scene.querySelector<HTMLElement>('.toolkit-intro')
        const filters = scene.querySelector<HTMLElement>('.skill-filters')
        const skillCards = gsap.utils.toArray<HTMLElement>('.skill-card', scene)
        const featured = scene.querySelector<HTMLElement>('.featured-project')
        const projectRows = gsap.utils.toArray<HTMLElement>('.project-row', scene)
        const contactMain = scene.querySelector<HTMLElement>('.contact-main')
        const contactAside = scene.querySelector<HTMLElement>('.contact-aside')
        const socialLinks = gsap.utils.toArray<HTMLElement>('.contact-social', scene)
        const universeMap = scene.querySelector<HTMLElement>('.universe-map')
        const universeDetail = scene.querySelector<HTMLElement>('.universe-detail')

        // A short, editorial lift gives each chapter its own entrance without pinning
        // or covering the content that follows it.
        gsap.fromTo(scene,
          { y: 84, scale: 0.985, clipPath: 'inset(8% 0 0 0 round 18px)' },
          { y: 0, scale: 1, clipPath: 'inset(0% 0 0 0 round 0px)', duration: 1.2,
            ease: 'power4.out', clearProps: 'clipPath',
            scrollTrigger: { trigger: scene, start: 'top 94%', once: true } },
        )

        if (scene.classList.contains('about-scene')) {
          const curtain = scene.querySelector<HTMLElement>('.curtain-panel')
          if (curtain) {
            gsap.fromTo(curtain, { xPercent: 100, skewX: -5 }, {
              xPercent: 0, skewX: 0, duration: 1.15, ease: 'power3.inOut',
              scrollTrigger: { trigger: scene, start: 'top 82%', end: 'top 18%', scrub: 0.85 },
            })
            gsap.to(curtain, {
              scaleX: 0, transformOrigin: '0% 50%', ease: 'power2.inOut',
              scrollTrigger: { trigger: scene, start: 'top 18%', end: 'center 25%', scrub: 0.85 },
            })
          }
          gsap.fromTo([heading, aboutLayout].filter(Boolean), {
            y: 64, opacity: 0, filter: 'blur(9px)', rotateX: 3,
          }, {
            y: 0, opacity: 1, filter: 'blur(0px)', rotateX: 0, duration: 1.1,
            stagger: 0.16, ease: 'power4.out',
            scrollTrigger: { trigger: scene, start: 'top 72%', once: true },
          })
          if (interestItems.length) gsap.fromTo(interestItems, { y: 34, opacity: 0, clipPath: 'inset(0 0 100% 0)' }, {
            y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.75,
            stagger: 0.09, ease: 'power3.out',
            scrollTrigger: { trigger: interestItems[0], start: 'top 88%', once: true },
          })
        } else if (scene.classList.contains('intro-scene')) {
          gsap.fromTo([heading, introLayout].filter(Boolean), {
            y: 66, opacity: 0, filter: 'blur(10px)', scale: 0.985,
          }, {
            y: 0, opacity: 1, filter: 'blur(0px)', scale: 1, duration: 1.2,
            stagger: 0.17, ease: 'power4.out',
            scrollTrigger: { trigger: scene, start: 'top 75%', once: true },
          })
        } else if (scene.classList.contains('toolkit-scene')) {
          gsap.fromTo([heading, toolkitIntro, filters].filter(Boolean), {
            y: 44, opacity: 0, filter: 'blur(7px)',
          }, {
            y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9,
            stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 76%', once: true },
          })
          if (skillCards.length) gsap.fromTo(skillCards, {
            y: 42, rotateX: 7, opacity: 0, transformOrigin: '50% 100%',
          }, {
            y: 0, rotateX: 0, opacity: 1, duration: 0.72, stagger: 0.055,
            ease: 'power3.out', clearProps: 'transform',
            scrollTrigger: { trigger: scene, start: 'top 58%', once: true },
          })
        } else if (scene.classList.contains('projects-scene')) {
          gsap.fromTo([heading, featured].filter(Boolean), {
            y: 72, opacity: 0, scale: 0.97, filter: 'blur(8px)',
          }, {
            y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.15,
            stagger: 0.18, ease: 'power4.out',
            scrollTrigger: { trigger: scene, start: 'top 74%', once: true },
          })
          if (projectRows.length) gsap.fromTo(projectRows, {
            x: (i) => i % 2 === 0 ? -38 : 38, opacity: 0, clipPath: 'inset(0 0 0 0)',
          }, {
            x: 0, opacity: 1, duration: 0.72, stagger: 0.075, ease: 'power3.out',
            scrollTrigger: { trigger: projectRows[0], start: 'top 90%', once: true },
          })
        } else if (scene.classList.contains('contact-scene')) {
          gsap.fromTo(contactMain, { x: -46, opacity: 0, filter: 'blur(8px)' }, {
            x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.05, ease: 'power4.out',
            scrollTrigger: { trigger: scene, start: 'top 72%', once: true },
          })
          gsap.fromTo(contactAside, { x: 46, opacity: 0, filter: 'blur(8px)' }, {
            x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.05, delay: 0.12, ease: 'power4.out',
            scrollTrigger: { trigger: scene, start: 'top 72%', once: true },
          })
          if (socialLinks.length) gsap.fromTo(socialLinks, { y: 18, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: contactAside, start: 'top 80%', once: true },
          })
        } else if (scene.classList.contains('universe-scene')) {
          gsap.fromTo([heading, universeMap, universeDetail].filter(Boolean), {
            y: 58, opacity: 0, scale: 0.98, filter: 'blur(8px)',
          }, {
            y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.15,
            stagger: 0.16, ease: 'power4.out',
            scrollTrigger: { trigger: scene, start: 'top 74%', once: true },
          })
        }

        if (index) {
          gsap.fromTo(index, { x: -28, opacity: 0, letterSpacing: '0.38em' }, {
            x: 0, opacity: 1, letterSpacing: '0.12em', duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 84%', once: true },
          })
        }
        scene.style.setProperty('--scene-depth', String(sceneIndex + 1))
      })

      ScrollTrigger.refresh()
    }, element)

    return () => context.revert()
  }, [root, reducedMotion])
}
