import { Environment, Float, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React from 'react'

const TechIcon = ({ model }) => {
  // Loading the 3D Model using GLTF Hook
  const gltf = useGLTF(model.modelPath);
  useGLTF.preload(model.modelPath);

  return (
    // You need to load a 3D Model into a Canvas
    <Canvas>
      {/* Add Lighting to view Model */}
      <ambientLight intensity={0.3} />
      <Environment preset='city' />

      <Float speed={5.5} rotationIntensity={1} floatIntensity={1}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={gltf.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon