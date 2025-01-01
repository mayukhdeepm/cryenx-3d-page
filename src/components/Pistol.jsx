import React from 'react'
import { useGLTF, Center } from '@react-three/drei'
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export function Pistol(props) {
  const { nodes, materials } = useGLTF('/pistol/pistol.glb')
  const mesh = useRef();
  const { viewport } = useThree()
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0015;
    }
  });

  const screenWidth = window.innerWidth;
  let scaleFactor;

  if (screenWidth < 1199) {
    scaleFactor = 6;
  } else {
    scaleFactor = 3;
  }
  const scale = viewport.width / scaleFactor;

  return (
    <group ref={mesh} {...props} position={[0, 0, 0]} rotation={[0, Math.PI / -3, 0]} scale={scale} dispose={null}>
      <Center>
        <mesh geometry={nodes.Circle001.geometry} material={materials.Bronze} />
        <mesh geometry={nodes.Circle001_1.geometry} material={materials.Blacksteel} />
        <mesh geometry={nodes.Circle001_2.geometry} material={materials.RedMetal} />
        <mesh geometry={nodes.Circle001_3.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Circle001_4.geometry} material={materials.Glass1} />
        <mesh geometry={nodes.Circle001_5.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Circle001_6.geometry} material={materials.Leather} />
        <mesh geometry={nodes.Circle001_7.geometry} material={materials.GreenMetal} />
        <mesh geometry={nodes.Circle001_8.geometry} material={materials.ClockFace} />
      </Center>
    </group>
  )
}

useGLTF.preload('/pistol.glb')

export default Pistol;