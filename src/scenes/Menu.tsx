import {Canvas} from "@react-three/fiber";
import {
    OrbitControls,
} from "@react-three/drei";
import {motion} from "framer-motion";
import Model from "./Model.tsx";
import TexturedPlane from "./TexturedPlane.tsx";
import '../App.css';
const Menu = () => {
    return (
        <>
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
                {/* Black div that overlays the canvas */}
                <div style={{
                    width: "50%",
                    height: "100%",
                    backgroundColor: "black",
                    position: "absolute", // Position absolute to overlay
                    top: 0, // Align to the top
                    right: 0, // Stretch to the right
                    zIndex: 2,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)'
                }} />

                <Canvas style={{
                    height: "94%",
                    position: 'relative', // Set position to relative
                    zIndex: 1 // Canvas behind the black div
                }}>
                    {/* Camera Controls */}
                    <OrbitControls />

                    {/* Lighting */}
                    <ambientLight intensity={5} color={'white'} /> {/* Soft overall light */}
                    <Model fileUrl={"public/assets/GLTF/Inkfish_LOD1.glb"} position={[-1.6, -1, 3]} rotation={[0, Math.PI * 0.3, 0]}/>
                    <TexturedPlane texturePath={'public/assets/texture.png'} position={[0, 0, -5]} size={[30, 15]}/>
                </Canvas>
            </motion.div>
        </>
    );
}

export default Menu;
