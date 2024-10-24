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
                <div  className="absolute top-0 right-0 w-1/2 h-full bg-black z-20"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)' }}/>

                <Canvas className="relative h-[94%] z-10">
                    {/* Camera Controls */}
                    <OrbitControls />

                    {/* Lighting */}
                    <ambientLight intensity={5} color={'white'} /> {/* Soft overall light */}
                    <Model fileUrl={"public/assets/GLTF/Animations/Inkfish_Animations.glb"} position={[-1.6, -1, 3]} rotation={[0, Math.PI * 0.3, 0]}/>
                    <TexturedPlane texturePath={'public/assets/texture.png'} position={[0, 0, -5]} size={[30, 15]}/>
                </Canvas>
            </motion.div>
        </>
    );
}

export default Menu;
