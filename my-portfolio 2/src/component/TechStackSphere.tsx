"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const TECH_IMAGES = [
  { src: "/assets/react-logo.svg",       alt: "React" },
  { src: "/assets/nextjs-logo.svg",      alt: "Next.js" },
  { src: "/assets/typescript-logo.svg",  alt: "TypeScript" },
  { src: "/assets/javascript-logo.svg",  alt: "JavaScript" },
  { src: "/assets/nodejs-logo.svg",      alt: "Node.js" },
  { src: "/assets/express-logo.svg",     alt: "Express.js" },
  { src: "/assets/mongodb-logo.svg",     alt: "MongoDB" },
  { src: "/assets/postgresql-logo.svg",  alt: "PostgreSQL" },
  { src: "/assets/tailwind-logo.svg",    alt: "Tailwind CSS" },
  { src: "/assets/css-logo.svg",         alt: "CSS3" },
  { src: "/assets/html-logo.svg",        alt: "HTML5" },
  { src: "/assets/python-logo.svg",      alt: "Python" },
  { src: "/assets/git-logo.svg",         alt: "Git" },
  { src: "/assets/docker-logo.svg",      alt: "Docker" },
  { src: "/assets/threejs-logo.svg",     alt: "Three.js" },
  { src: "/assets/redux-logo.svg",       alt: "Redux" },
];

const SPHERE_NODE_COUNT = TECH_IMAGES.length;

function sphericalPoints(count: number, radius: number) {
  const points: [number, number, number][] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;

    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push([x * radius, y * radius, z * radius]);
  }

  return points;
}

function SphereNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const points = useMemo(() => sphericalPoints(SPHERE_NODE_COUNT, 2.5), []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.22;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.55, 40, 40]} />
        <meshStandardMaterial color="#0b1220" emissive="#00d4ff" emissiveIntensity={0.2} wireframe />
      </mesh>

      {points.map((position, index) => {
        const techImage = TECH_IMAGES[index % TECH_IMAGES.length];

        return (
        <group key={`tech-image-${index}`} position={position}>
          <mesh>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.45} />
          </mesh>
          <Html center distanceFactor={10}>
            <div className="flex flex-col items-center gap-0.5 pointer-events-none select-none">
              <img
                src={techImage.src}
                alt={techImage.alt}
                className="h-11 w-11 object-contain"
                style={{ filter: "drop-shadow(0 0 7px rgba(0,220,255,0.75)) drop-shadow(0 0 14px rgba(0,220,255,0.35))" }}
                draggable={false}
              />
              <span
                className="text-[8px] font-semibold tracking-wide"
                style={{ color: "rgba(180,240,255,0.9)", textShadow: "0 0 6px rgba(0,220,255,0.8)" }}
              >
                {techImage.alt}
              </span>
            </div>
          </Html>
        </group>
      );})}
    </group>
  );
}

export default function TechStackSphere() {
  return (
    <div className="h-120 w-full overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#05070f]">
      <Canvas camera={{ position: [0, 0, 7], fov: 52 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 4]} intensity={18} color="#00ffff" />
        <pointLight position={[-3, -3, -3]} intensity={12} color="#ff00ff" />

        <SphereNodes />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.65}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 1.65}
        />
      </Canvas>
    </div>
  );
}
