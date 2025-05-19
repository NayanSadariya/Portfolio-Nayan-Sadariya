import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleMorphing: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  // Create particles in the shape of letter N
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const t = i / particleCount;
    let x, y, z;

    if (t < 0.33) {
      // Left vertical line
      x = -1;
      y = -1 + (t * 3) * 2;
      z = 0;
    } else if (t < 0.66) {
      // Diagonal line
      const progress = (t - 0.33) * 3;
      x = -1 + progress * 2;
      y = 1 - progress * 2;
      z = 0;
    } else {
      // Right vertical line
      x = 1;
      y = -1 + ((t - 0.66) * 3) * 2;
      z = 0;
    }

    // Add some randomness
    x += (Math.random() - 0.5) * 0.2;
    y += (Math.random() - 0.5) * 0.2;
    z += (Math.random() - 0.5) * 0.2;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    
    colors[i * 3] = 0.29;     // R (74/255)
    colors[i * 3 + 1] = 0.50; // G (128/255)
    colors[i * 3 + 2] = 0.40; // B (101/255)
  }

  useFrame((state) => {
    if (!particlesRef.current) return;

    const time = state.clock.getElapsedTime();
    
    // Animate particles
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];

      positions[i3] = x + Math.sin(time * 0.5 + y) * 0.01;
      positions[i3 + 1] = y + Math.cos(time * 0.5 + x) * 0.01;
      positions[i3 + 2] = z + Math.sin(time * 0.5 + z) * 0.01;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.rotation.y = time * 0.2;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Particle system */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </>
  );
};

export default ParticleMorphing;