"use client";

import { Suspense, useMemo, Component, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import AboutDesk2D from "@/component/AboutDesk2D";

class ModelErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <AboutDesk2D />;
    return this.props.children;
  }
}

const MODEL_PATH = "/assets/about-desk.glb";

function DeskModel() {
  const { scene } = useGLTF(MODEL_PATH);

  const model = useMemo(() => {
    const cloned = scene.clone(true);

    cloned.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return cloned;
  }, [scene]);

  return (
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.35}>
      <primitive object={model} scale={1.55} position={[0, -1.4, 0]} rotation={[0, Math.PI * 0.15, 0]} />
    </Float>
  );
}

export default function AboutDeskModel() {
  return (
    <ModelErrorBoundary>
    <div className="h-136 w-full">
      <Canvas camera={{ position: [0, 1.4, 5.2], fov: 44 }} shadows dpr={[1, 2]}>
        <color attach="background" args={["#070b14"]} />
        <fog attach="fog" args={["#070b14", 8, 18]} />

        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 3]} intensity={2.6} color="#8be9fd" castShadow />
        <pointLight position={[-3, 2, -2]} intensity={34} color="#d946ef" />

        <Suspense fallback={null}>
          <DeskModel />
        </Suspense>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.15, 0]} receiveShadow>
          <circleGeometry args={[6, 64]} />
          <meshStandardMaterial color="#0b1220" roughness={0.85} metalness={0.1} />
        </mesh>

        <OrbitControls
          enablePan={false}
          minDistance={3.4}
          maxDistance={7}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 1.95}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
    </ModelErrorBoundary>
  );
}

useGLTF.preload(MODEL_PATH);
