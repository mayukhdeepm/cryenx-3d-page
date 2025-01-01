"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Pistol from "./Pistol";

const PistolScene: React.FC = () => {
  return (
    <Canvas
      camera={{ fov: 10, position: [2, 0, 0] }}
      style={{ 
        background: "none",
        height: "500px" // Add explicit height here
      }}
    >
      <Environment preset="warehouse" />
      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      <Pistol />
    </Canvas>
  );
};

export default PistolScene;