import { Canvas } from '@react-three/fiber'
import { Float, Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
function PlaceholderAvatar() {
  return <group position={[0, -0.15, 0]}>
    <mesh position={[0, 0.55, 0]} castShadow><capsuleGeometry args={[0.48, 0.85, 8, 16]}/><meshStandardMaterial color="#d8d0c4" roughness={0.72}/></mesh>
    <mesh position={[0, 1.42, 0]} castShadow><sphereGeometry args={[0.42, 32, 32]}/><meshStandardMaterial color="#b98265" roughness={0.8}/></mesh>
    <mesh position={[0, 1.76, -0.025]} castShadow><sphereGeometry args={[0.43, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.48]}/><meshStandardMaterial color="#211d1c" roughness={0.95}/></mesh>
  </group>
}
export function AvatarStage() {
  return <div className="avatar-canvas"><Canvas camera={{ position: [0, 1.4, 4.8], fov: 34 }} shadows dpr={[1, 1.7]}><ambientLight intensity={1.4}/><directionalLight position={[3, 5, 4]} intensity={2.2} castShadow/><Suspense fallback={null}><Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.18}><PlaceholderAvatar/></Float><Environment preset="studio"/><ContactShadows position={[0, -0.25, 0]} opacity={0.25} blur={2.5} scale={4}/></Suspense></Canvas><span className="avatar-label">3D STUDY / AVATAR 001</span></div>
}