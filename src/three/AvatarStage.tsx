import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContactShadows, Environment, Float } from '@react-three/drei'
import type { Group } from 'three'

function MaykModel() {
  const character = useRef<Group>(null)
  const { pointer } = useThree()

  useFrame((_, delta) => {
    if (!character.current) return
    character.current.rotation.y += (pointer.x * 0.2 - character.current.rotation.y) * Math.min(1, delta * 2.2)
    character.current.rotation.x += (-pointer.y * 0.045 - character.current.rotation.x) * Math.min(1, delta * 2)
  })

  return (
    <group ref={character} position={[0, -1.45, 0]} scale={1.08}>
      {/* Trousers and shoes */}
      <mesh position={[-0.19, 0.49, 0]} castShadow><capsuleGeometry args={[0.145, 0.68, 6, 12]} /><meshStandardMaterial color="#34333b" roughness={0.9} /></mesh>
      <mesh position={[0.19, 0.49, 0]} castShadow><capsuleGeometry args={[0.145, 0.68, 6, 12]} /><meshStandardMaterial color="#34333b" roughness={0.9} /></mesh>
      <mesh position={[-0.2, 0.08, 0.12]} castShadow><capsuleGeometry args={[0.14, 0.1, 5, 12]} /><meshStandardMaterial color="#b8b2a8" roughness={0.85} /></mesh>
      <mesh position={[0.2, 0.08, 0.12]} castShadow><capsuleGeometry args={[0.14, 0.1, 5, 12]} /><meshStandardMaterial color="#b8b2a8" roughness={0.85} /></mesh>
      {/* Relaxed semi-formal shirt */}
      <mesh position={[0, 1.37, 0]} castShadow><capsuleGeometry args={[0.43, 0.78, 8, 18]} /><meshStandardMaterial color="#f0eee8" roughness={0.82} /></mesh>
      <mesh position={[0, 1.87, 0.015]}><boxGeometry args={[0.13, 0.38, 0.055]} /><meshStandardMaterial color="#d8d3ca" roughness={0.9} /></mesh>
      <mesh position={[0, 1.69, 0.34]}><boxGeometry args={[0.018, 0.48, 0.018]} /><meshStandardMaterial color="#d4cec4" /></mesh>
      {/* Neck and head */}
      <mesh position={[0, 2.03, 0]}><cylinderGeometry args={[0.14, 0.16, 0.3, 20]} /><meshStandardMaterial color="#a96f55" roughness={0.9} /></mesh>
      <mesh position={[0, 2.48, 0]} scale={[0.43, 0.52, 0.39]} castShadow><sphereGeometry args={[1, 32, 32]} /><meshStandardMaterial color="#b77f64" roughness={0.82} /></mesh>
      <mesh position={[-0.425, 2.45, 0]} scale={[0.09, 0.14, 0.08]}><sphereGeometry args={[1, 16, 16]} /><meshStandardMaterial color="#b77f64" /></mesh>
      <mesh position={[0.425, 2.45, 0]} scale={[0.09, 0.14, 0.08]}><sphereGeometry args={[1, 16, 16]} /><meshStandardMaterial color="#b77f64" /></mesh>
      {/* Eyes, brows, nose and a subtle smile */}
      {[-0.16, 0.16].map((x) => <group key={x}>
        <mesh position={[x, 2.51, 0.353]}><sphereGeometry args={[0.033, 16, 12]} /><meshStandardMaterial color="#292323" /></mesh>
        <mesh position={[x, 2.61, 0.35]} rotation={[0, 0, x < 0 ? 0.1 : -0.1]}><boxGeometry args={[0.105, 0.025, 0.025]} /><meshStandardMaterial color="#332522" /></mesh>
      </group>)}
      <mesh position={[0, 2.39, 0.39]} scale={[0.055, 0.075, 0.05]}><sphereGeometry args={[1, 16, 12]} /><meshStandardMaterial color="#a96f55" /></mesh>
      <mesh position={[0, 2.29, 0.367]} rotation={[0, 0, Math.PI]}><torusGeometry args={[0.075, 0.009, 6, 20, Math.PI]} /><meshStandardMaterial color="#75483d" /></mesh>
      {/* Textured fringe and tapered silhouette */}
      <mesh position={[0, 2.82, -0.025]} scale={[0.46, 0.29, 0.43]}><sphereGeometry args={[1, 28, 20]} /><meshStandardMaterial color="#211d1d" roughness={1} /></mesh>
      {[-0.29, -0.16, -0.03, 0.1, 0.23, 0.34].map((x, i) => <mesh key={x} position={[x, 2.68 - (i % 2) * 0.035, 0.27]} rotation={[0, 0, (i - 2.5) * 0.11]}><capsuleGeometry args={[0.055, 0.18, 4, 8]} /><meshStandardMaterial color={i % 2 ? "#292323" : "#1d1a1a"} roughness={1} /></mesh>)}
      {/* Sleeves, forearms and hands */}
      <mesh position={[-0.48, 1.52, 0]} rotation={[0, 0, -0.25]}><capsuleGeometry args={[0.18, 0.34, 6, 12]} /><meshStandardMaterial color="#eeece5" roughness={0.9} /></mesh>
      <mesh position={[0.48, 1.52, 0]} rotation={[0, 0, 0.25]}><capsuleGeometry args={[0.18, 0.34, 6, 12]} /><meshStandardMaterial color="#eeece5" roughness={0.9} /></mesh>
      <mesh position={[-0.57, 1.12, 0.04]} rotation={[0, 0, -0.16]}><capsuleGeometry args={[0.105, 0.55, 6, 12]} /><meshStandardMaterial color="#b77f64" roughness={0.9} /></mesh>
      <mesh position={[0.57, 1.12, 0.04]} rotation={[0, 0, 0.16]}><capsuleGeometry args={[0.105, 0.55, 6, 12]} /><meshStandardMaterial color="#b77f64" roughness={0.9} /></mesh>
      <mesh position={[-0.59, 0.81, 0.06]}><sphereGeometry args={[0.115, 16, 12]} /><meshStandardMaterial color="#b77f64" /></mesh>
      <mesh position={[0.59, 0.81, 0.06]}><sphereGeometry args={[0.115, 16, 12]} /><meshStandardMaterial color="#b77f64" /></mesh>
      {/* Signature gray-white bracelet */}
      <mesh position={[-0.59, 0.91, 0.06]} rotation={[0, 0, Math.PI / 2]}><torusGeometry args={[0.105, 0.018, 8, 24]} /><meshStandardMaterial color="#d8d5cc" metalness={0.15} roughness={0.5} /></mesh>
    </group>
  )
}

export function AvatarStage() {
  return (
    <div className="avatar-canvas">
      <Canvas camera={{ position: [0, 1.55, 6.4], fov: 30 }} shadows dpr={[1, 1.5]}>
        <color attach="background" args={['#e9e4d9']} />
        <ambientLight intensity={1.25} />
        <directionalLight position={[3, 6, 5]} intensity={2.1} castShadow />
        <directionalLight position={[-4, 2, -3]} intensity={0.65} color="#aaa6ce" />
        <Float speed={1.05} rotationIntensity={0.035} floatIntensity={0.075}>
          <MaykModel />
        </Float>
        <Environment preset="studio" />
        <ContactShadows position={[0, -0.03, 0]} opacity={0.22} blur={2.8} scale={4.5} />
      </Canvas>
      <span className="avatar-label">MAYK / CHARACTER STUDY 001</span>
    </div>
  )
}