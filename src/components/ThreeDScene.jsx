
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Stars,
  Sparkles,
  MeshDistortMaterial,
  Environment,
} from "@react-three/drei";

function FloatingCore() {
  const group = useRef();
  const outerRing = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.22;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.15;
    }

    if (outerRing.current) {
      outerRing.current.rotation.x += delta * 0.12;
      outerRing.current.rotation.y -= delta * 0.18;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.55}>
      <group ref={group}>
        {/* Glowing outer wireframe core */}
        <mesh>
          <icosahedronGeometry args={[1.25, 2]} />
          <meshBasicMaterial
            color="#a78bfa"
            wireframe
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Distorted luminous inner core */}
        <mesh scale={0.76}>
          <icosahedronGeometry args={[1.1, 4]} />
          <MeshDistortMaterial
            color="#6d28d9"
            emissive="#5b21b6"
            emissiveIntensity={1.5}
            roughness={0.18}
            metalness={0.75}
            distort={0.22}
            speed={2}
          />
        </mesh>

        {/* Central light */}
        <mesh scale={0.24}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#ede9fe" />
        </mesh>
      </group>

      {/* Rotating orbital ring */}
      <mesh ref={outerRing} rotation={[1.1, 0.3, 0.25]}>
        <torusGeometry args={[1.8, 0.012, 12, 160]} />
        <meshBasicMaterial color="#c4b5fd" transparent opacity={0.85} />
      </mesh>

      <mesh rotation={[0.4, 0.8, 1.1]}>
        <torusGeometry args={[2.05, 0.008, 8, 160]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#03040a"]} />

      <ambientLight intensity={0.8} />
      <pointLight
        position={[3, 3, 4]}
        intensity={22}
        color="#a78bfa"
      />
      <pointLight
        position={[-3, -2, 2]}
        intensity={12}
        color="#22d3ee"
      />

      <Stars
        radius={35}
        depth={25}
        count={900}
        factor={2.5}
        saturation={0.5}
        fade
        speed={0.45}
      />

      <Sparkles
        count={90}
        scale={6}
        size={2.2}
        speed={0.3}
        color="#c4b5fd"
        opacity={0.8}
      />

      <FloatingCore />
      <Environment preset="night" />
    </>
  );
}

export default function ThreeDScene() {
  return (
    <div className="three-d-scene">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
