import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating spheres
function FloatingSphere({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });
  
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </Sphere>
    </Float>
  );
}

// Main 3D Text
function Hero3DText() {
  return (
    <group>
      <Text
        position={[0, 1, 0]}
        fontSize={1.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/bold.woff"
      >
        GYM GHANA
      </Text>
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.8}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        font="/fonts/regular.woff"
      >
        CONNECT
      </Text>
    </group>
  );
}

export const Hero3D = () => {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Hero3DText />
        
        {/* Floating decoration spheres */}
        <FloatingSphere position={[-3, 2, -2]} color="#22c55e" />
        <FloatingSphere position={[3, -1, -1]} color="#3b82f6" />
        <FloatingSphere position={[-2, -2, 1]} color="#f59e0b" />
        <FloatingSphere position={[2, 2, -3]} color="#ef4444" />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};