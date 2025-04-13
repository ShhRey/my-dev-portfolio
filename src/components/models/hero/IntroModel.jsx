import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';

const IntroModel = () => {
  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    // Defining Position and Field of View for Model
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* Supply Proper Lights to view Object */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={4} />
      {/* Limit Controling Movements for your created 3D Oject */}
      <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={5}
        maxDistance={20}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI /2}
      />

      {/* Adding a 3D Object */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="teal" />
      </mesh>
    </Canvas>
  )
}

export default IntroModel