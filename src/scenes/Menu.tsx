import {Canvas, useFrame} from "@react-three/fiber";
import {
    OrbitControls,
} from "@react-three/drei";
import {motion} from "framer-motion";
import Model from "./Model.tsx";
import TexturedPlane from "./TexturedPlane.tsx";
import '../App.css';
import {useEffect, useState} from "react";
const Menu = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const CameraController = ({ mousePosition }) => {
        useFrame(({ camera }) => {
            // Smoothly interpolate camera position toward the target
            camera.position.x += (0.2 * mousePosition.x - camera.position.x) * 0.10;
            camera.position.y += (0.2 * mousePosition.y - camera.position.y) * 0.10;
            camera.position.z = 5; // Keep z position fixed
            camera.lookAt(0, 0, 0); // Ensure the camera keeps looking at the center
        });

        return null;
    };
    
    return (
        <div>
            <motion.div
                initial={{ backgroundColor: '#66CD79' }}
                animate={{ backgroundColor: '#03CEA4' }}
                transition={{
                    duration: 3,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'mirror',
                }}
                className="h-screen w-screen relative"
            >
                
                <div  className="absolute top-0 right-0 w-1/2 h-full bg-black z-20"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)' }}/>

                <Canvas className="relative h-[94%] z-10" >
                    <CameraController mousePosition={mousePosition} />
                    <ambientLight intensity={5} color={'white'} /> {/* Soft overall light */}
                    <Model fileUrl={"public/assets/GLTF/Animations/Inkfish_Animations.glb"} position={[-1.6, -1, 3]} rotation={[0, Math.PI * 0.3, 0]}/>
                    <TexturedPlane texturePath={'public/assets/texture.png'} position={[0, 0, -5]} size={[30, 15]}/>
                </Canvas>
            </motion.div>
        </div>
    );
}

export default Menu;
