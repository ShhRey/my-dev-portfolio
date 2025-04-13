import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import { SpaceBoi } from './SpaceBoi.jsx'

const IntroModel = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    // Defining Position and Field of View for Model
    <Canvas camera={{ position: [10, 10, 15], fov: 45 }}>
      
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
      <group 
        scale={isMobile ? 0.7 : 1}
        position={[0, -90, 0]}
      >

      </group>
      <SpaceBoi />
    </Canvas>
  )
}

export default IntroModel