import {Canvas, useFrame} from "@react-three/fiber";
import {motion} from "framer-motion";
import Model from "./Model.tsx";
import TexturedPlane from "./TexturedPlane.tsx";
import '../App.css';
import React, {useEffect, useState} from "react";
import CameraController from "./CameraController.tsx";
import useMousePosition from "./useMousePosition.tsx";
const Menu = () => {
    const mousePosition = useMousePosition();
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
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 200px 100%)' }}>
                </div>

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
