import { OrbitControls, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { ContactBot } from './ContactBot.jsx'

const BotModel = () => {
    // Detect screen size breakpoints
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        // Defining Camera Position and Field of View for Bot Scene
        <Canvas camera={{ position: [0, 2, 5], fov: 45 }} style={{ width: '100%', height: '100%' }}>

            {/* Lighting Setup */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} />

            {/* Orbit Controls with Restrictions */}
            <OrbitControls
                enablePan={false}
                // Disable zoom on tablets and smaller
                enableZoom={!isTablet}
                minDistance={4}
                maxDistance={20}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
            />

            {/* Group to manage scale and position responsively */}
            <group
                scale={isMobile ? 1 : 1.4}           
                position={[0, isMobile ? -1 : -1.4, 0]}
            >
                <ContactBot />
            </group>

            {/* Optional: Lighting Environment */}
            <Environment preset="sunset" />
        </Canvas>
    )
}

export default BotModel