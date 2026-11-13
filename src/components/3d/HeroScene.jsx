import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { WebGLFallback } from './WebGLFallback';

// Error Boundary for WebGL
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('WebGL Canvas failed or is unsupported:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <WebGLFallback />;
    }
    return this.props.children;
  }
}

// Static 3D study
function CyberCore() {
  return (
    <group>
      <mesh scale={1.2}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#101812"
          emissive="#477c5c"
          emissiveIntensity={0.28}
          roughness={0.32}
          metalness={0.72}
        />
      </mesh>

      <mesh scale={1.85}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#9ab6a0"
          emissive="#315e42"
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      <points scale={1.4}>
        <sphereGeometry args={[1, 16, 16]} />
        <pointsMaterial size={0.035} color="#b4d2bc" transparent opacity={0.7} />
      </points>

      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.3, 0.02, 16, 100]} />
        <meshStandardMaterial color="#8fb49a" emissive="#477c5c" emissiveIntensity={0.35} />
      </mesh>

      <mesh rotation={[-Math.PI / 3, Math.PI / 5, 0]}>
        <torusGeometry args={[2.55, 0.018, 16, 100]} />
        <meshStandardMaterial color="#82988a" emissive="#46634d" emissiveIntensity={0.25} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  const [isSupported] = useState(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return Boolean(gl);
    } catch {
      return false;
    }
  });

  if (!isSupported) {
    return <WebGLFallback />;
  }

  return (
    <div className="relative h-full w-full pointer-events-none">
      <CanvasErrorBoundary fallback={<WebGLFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 45 }}
          frameloop="demand"
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          className="w-full h-full"
        >
          {/* Ambient soft illumination */}
          <ambientLight intensity={0.8} />

          {/* Soft green key light */}
          <pointLight position={[4, 3, 3]} intensity={2.1} color="#a2c6aa" />

          {/* Neutral fill light */}
          <pointLight position={[-4, -3, 2]} intensity={1.6} color="#aab4aa" />

          {/* White Rim Light */}
          <directionalLight position={[0, 5, -2]} intensity={1.5} color="#ffffff" />

          {/* 3D Scene Core */}
          <CyberCore />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
export default HeroScene;
