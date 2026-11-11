import {useLayoutEffect,type RefObject} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export function useIntroAnimation(root:RefObject<HTMLElement|null>,reducedMotion:boolean){
useLayoutEffect(()=>{const element=root.current;if(!element||reducedMotion)return
const context=gsap.context(()=>{const timeline=gsap.timeline({scrollTrigger:{trigger:element,start:'top top',end:'+=105%',scrub:.8,pin:true,anticipatePin:1,invalidateOnRefresh:true}})
timeline.to('[data-fragment]',{x:0,y:0,rotation:0,opacity:.35,stagger:.04,ease:'power2.inOut'},0).to('[data-avatar]',{y:-65,scale:.82,ease:'power2.inOut'},0).to('[data-hero-title]',{y:-20,scale:.92,ease:'power2.inOut'},0).to('.orbit',{rotation:24,scale:1.08,ease:'none'},0)},element)
return()=>context.revert()},[root,reducedMotion])
}