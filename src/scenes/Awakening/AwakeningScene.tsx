import {useRef} from 'react'
import {AvatarStage} from '../../three/AvatarStage'
import {useReducedMotion} from '../../hooks/useReducedMotion'
import {useIntroAnimation} from './useIntroAnimation'
export function AwakeningScene(){
const root=useRef<HTMLElement>(null);const reducedMotion=useReducedMotion();useIntroAnimation(root,reducedMotion)
return <section id="awakening" ref={root} className="scene awakening-scene"><div className="awakening-grid" aria-hidden="true"/><div className="orbit orbit-one" aria-hidden="true"/><div className="orbit orbit-two" aria-hidden="true"/>
<div className="fragment fragment-left" data-fragment>CURIOUS BY NATURE</div><div className="fragment fragment-right" data-fragment>BUILT TO EXPLORE</div>
<div className="hero-copy hero-copy-top"><span className="eyebrow">INDEPENDENT MIND / DIGITAL CRAFT</span></div><div className="avatar-wrap" data-avatar><AvatarStage/></div>
<div className="hero-title" data-hero-title><p className="hero-kicker">HELLO, I'M</p><h1>MAYK<span>.</span></h1><p className="hero-subtitle">Building ideas into experiences.</p></div>
<div className="hero-bottom"><span>PORTFOLIO — 2026</span><a href="#introduction" className="scroll-cue"><span/> SCROLL TO DISCOVER</a><span>01 / 07</span></div></section>
}