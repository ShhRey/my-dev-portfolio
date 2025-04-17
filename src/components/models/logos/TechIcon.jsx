import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
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
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset='city' />

      {/* Setting OrbitControl to Rotate the Models */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
      />

      {/* Setting Float Speed and Rotation values from Constants */}
      <Float speed={5.5} rotationIntensity={1} floatIntensity={1}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={gltf.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon