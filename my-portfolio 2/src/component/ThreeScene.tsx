"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CoreMesh() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.35;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.45} floatIntensity={1.2}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.1, 0.33, 200, 24]} />
        <meshStandardMaterial
          color="#e5e7eb"
          emissive="#38bdf8"
          emissiveIntensity={0.65}
          metalness={0.8}
          roughness={0.15}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={["#05050a"]} />
        <fog attach="fog" args={["#05050a", 6, 14]} />

        <ambientLight intensity={0.2} />
        <pointLight intensity={20} position={[2, 2, 3]} color="#67e8f9" />
        <pointLight intensity={16} position={[-2, -2, -3]} color="#e879f9" />

        <CoreMesh />
        <Stars radius={100} depth={40} count={2600} factor={3.5} saturation={0} fade speed={0.7} />
        <Sparkles count={120} scale={12} size={2} speed={0.35} color="#ffffff" />
      </Canvas>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05050a_75%)]" />
    </div>
  );
}
