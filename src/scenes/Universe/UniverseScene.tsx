import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import type { Group, Mesh } from 'three'
import { ArrowUpRight, Compass, Database, Gamepad2, GraduationCap, Layers3, Sparkles as SparkleIcon, Trophy } from 'lucide-react'
import { SceneHeading } from '../../components/ui/SceneHeading'
import { projects } from '../../data/profile'

const worlds = [
  { id: 'engineering', number: '01', title: 'The Workshop', subtitle: 'Building ideas into products', detail: 'I’m drawn to the whole process of making something useful — shaping an interface, connecting the logic behind it, and turning a rough idea into a working experience.', tags: ['Full-stack direction', 'React', 'JavaScript', 'Node.js'], icon: Layers3, position: [0, 2.35, 0] as [number, number, number], color: '#a7a0c9' },
  { id: 'data', number: '02', title: 'The Network', subtitle: 'Where data finds its shape', detail: 'Database Systems is my major, and data is one of the parts of technology I keep coming back to. I enjoy exploring how information is structured, connected, and made useful.', tags: ['Supabase', 'MySQL', 'MongoDB', 'Neo4j'], icon: Database, position: [2.05, 1.15, -0.35] as [number, number, number], color: '#a6b7ad' },
  { id: 'meowks', number: '03', title: 'Meowks Universe', subtitle: 'The flagship project', detail: 'Meowks Hub is my biggest ongoing product idea: a gamified student productivity space built around focus, progress, and a little personality. It represents the kind of product I want to keep building.', tags: ['Product thinking', 'Student productivity', 'Gamification'], icon: SparkleIcon, href: projects[0].href, linkLabel: 'Explore Meowks Hub', position: [2.05, -1.15, 0.25] as [number, number, number], color: '#d2ae83' },
  { id: 'experiments', number: '04', title: 'The Sandbox', subtitle: 'Projects and experiments', detail: 'Every project is a chance to test an idea, learn a new tool, or understand a problem from another angle. Some are practical systems; others are explorations that help me grow.', tags: ['PACE MSU-IIT', 'Baylo', 'EpiGraph', 'Kusyna'], icon: Compass, href: 'https://github.com/Aenzari', linkLabel: 'Browse my GitHub', position: [0, -2.35, -0.2] as [number, number, number], color: '#9d9ab4' },
  { id: 'sports', number: '05', title: 'The Court', subtitle: 'A life outside the screen', detail: 'Futsal and basketball keep me moving, competitive, and connected with people. They’re a different kind of problem-solving — read the moment, make a decision, work with the team.', tags: ['Futsal', 'Basketball', 'Teamwork'], icon: Trophy, position: [-2.05, -1.15, 0.2] as [number, number, number], color: '#c5a58f' },
  { id: 'play', number: '06', title: 'The Playground', subtitle: 'Play, compete, repeat', detail: 'I grew up around computer shops and online games. Competitive FPS titles and MOBA games are still part of what I enjoy, especially the strategy, teamwork, and constant learning.', tags: ['Competitive FPS', 'MOBA', 'Strategy'], icon: Gamepad2, position: [-2.05, 1.15, -0.3] as [number, number, number], color: '#9eabc7' },
  { id: 'learning', number: '07', title: 'The Next Frontier', subtitle: 'Always a work in progress', detail: 'I’m still learning, especially around information assurance and security. I like following curiosity into unfamiliar territory and building confidence through practice.', tags: ['Information security', 'Networking', 'Curiosity'], icon: GraduationCap, position: [-0.8, 0, 1.35] as [number, number, number], color: '#b1b59b' },
]

function OrbitalWorld({ position, color, active, index }: { position: [number, number, number]; color: string; active: boolean; index: number }) {
  const planet = useRef<Mesh>(null)
  useFrame((state, delta) => {
    if (!planet.current) return
    planet.current.rotation.y += delta * (active ? 0.5 : 0.16)
    const target = active ? 1.28 : 0.82
    planet.current.scale.lerp({ x: target, y: target, z: target } as never, Math.min(1, delta * 4))
  })
  return (
    <Float speed={0.65 + index * 0.08} rotationIntensity={0.12} floatIntensity={0.16}>
      <group position={position}>
        <mesh ref={planet}>
          <icosahedronGeometry args={[0.24, 3]} />
          <meshStandardMaterial color={color} roughness={0.28} metalness={0.35} emissive={color} emissiveIntensity={active ? 0.38 : 0.08} />
        </mesh>
        <mesh rotation={[0.8, 0.2, index * 0.42]}>
          <torusGeometry args={[0.38, 0.008, 8, 72]} />
          <meshBasicMaterial color={color} transparent opacity={active ? 0.9 : 0.35} />
        </mesh>
        {active && <mesh scale={1.8}><sphereGeometry args={[0.24, 24, 24]} /><meshBasicMaterial color={color} transparent opacity={0.1} /></mesh>}
      </group>
    </Float>
  )
}

function UniverseModel({ activeId }: { activeId: string }) {
  const system = useRef<Group>(null)
  useFrame((_, delta) => {
    if (system.current) system.current.rotation.y += delta * 0.035
  })
  return (
    <group ref={system}>
      <mesh>
        <sphereGeometry args={[0.53, 48, 48]} />
        <meshStandardMaterial color="#393644" metalness={0.7} roughness={0.22} emissive="#77718f" emissiveIntensity={0.55} />
      </mesh>
      <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
        <torusGeometry args={[0.76, 0.012, 8, 120]} />
        <meshBasicMaterial color="#8f89b0" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[1.1, 0.6, 0.3]}>
        <torusGeometry args={[1.05, 0.006, 6, 120]} />
        <meshBasicMaterial color="#b9ad9b" transparent opacity={0.42} />
      </mesh>
      {worlds.map((world, index) => <OrbitalWorld key={world.id} position={world.position} color={world.color} active={activeId === world.id} index={index} />)}
      <Sparkles count={75} scale={7.5} size={1.6} speed={0.18} color="#827b9f" />
    </group>
  )
}

export function UniverseScene() {
  const [activeId, setActiveId] = useState('engineering')
  const active = useMemo(() => worlds.find((world) => world.id === activeId) ?? worlds[0], [activeId])

  return (
    <section id="universe" className="scene content-scene universe-scene">
      <div className="universe-glow" aria-hidden="true" />
      <div className="section-index">07 — THE UNIVERSE</div>
      <SceneHeading number="07" eyebrow="BEYOND THE BUILD" title="A little world of my own." description="The interests, ideas, and experiences that make the work feel personal." />

      <div className="universe-explorer">
        <div className="universe-map" aria-label="Interactive three-dimensional map of my interests and projects">
          <div className="universe-canvas" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 8.4], fov: 34 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
              <ambientLight intensity={1.1} />
              <pointLight position={[3, 4, 5]} intensity={28} color="#fff4df" />
              <pointLight position={[-4, -2, -3]} intensity={14} color="#9d96c3" />
              <UniverseModel activeId={activeId} />
            </Canvas>
          </div>
          <div className="universe-map-vignette" aria-hidden="true" />
          <div className="universe-core"><span>M</span><small>MAYK’S<br />UNIVERSE</small></div>
          {worlds.map((world, index) => {
            const Icon = world.icon
            return (
              <button
                className={`universe-node node-${index + 1}${activeId === world.id ? ' is-active' : ''}`}
                key={world.id}
                type="button"
                aria-pressed={activeId === world.id}
                aria-label={`Explore ${world.title}`}
                onClick={() => setActiveId(world.id)}
              >
                <span className="universe-node-icon"><Icon size={17} strokeWidth={1.7} /></span>
                <span className="universe-node-label">{world.title}</span>
                <span className="universe-node-number">{world.number}</span>
              </button>
            )
          })}
          <span className="universe-map-caption">SELECT A WORLD TO EXPLORE</span>
        </div>

        <article className="universe-detail" key={active.id} aria-live="polite" aria-atomic="true">
          <div className="universe-detail-top"><span className="eyebrow">FIELD NOTE / {active.number}</span><span className="universe-detail-mark">✳</span></div>
          <p className="universe-detail-subtitle">{active.subtitle}</p>
          <h3>{active.title}</h3>
          <p className="universe-detail-copy">{active.detail}</p>
          <div className="universe-tags">{active.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {active.href && <a className="universe-detail-link" href={active.href} target="_blank" rel="noreferrer">{active.linkLabel}<ArrowUpRight size={15} /></a>}
          <div className="universe-detail-footer"><span>INTEREST / {active.number}</span><span>ILIGAN CITY, PH</span></div>
        </article>
      </div>

      <p className="universe-outro">Still exploring. Still building. Still becoming.</p>
    </section>
  )
}
