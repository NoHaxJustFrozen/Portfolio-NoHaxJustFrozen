import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleSwarm(props) {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f2fe"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: 'radial-gradient(circle at center, #1a202c 0%, #050507 100%)' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleSwarm />
      </Canvas>
    </div>
  );
}
