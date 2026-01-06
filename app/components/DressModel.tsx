'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Group } from 'three';

const MODEL_URL = '/models/hero-dress.glb';

// Preload the model
useGLTF.preload(MODEL_URL);

function Dress() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  // Full rotation in 5 minutes (300 seconds): 2π / 300 ≈ 0.0209 rad/s
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.0209;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={2.5} position={[0, -0.3, 0]} />
    </group>
  );
}

export default function DressModel() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />

        <Suspense fallback={null}>
          <Dress />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
