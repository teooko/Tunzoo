import {Canvas, useLoader, useThree} from "@react-three/fiber";
import {OrbitControls, Box, Sphere, CubicBezierLine, Ring, Dodecahedron, Circle} from "@react-three/drei";
import './App.css';
import { useEffect, useRef } from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {TextureLoader} from "three";
import {motion} from "framer-motion";

function App() {
    const GltfModel = ({ glbUrl }) => {
        const modelRef = useRef();

        useEffect(() => {
            const loader = new GLTFLoader();

            loader.load(
                glbUrl,
                (gltf) => {
                    modelRef.current.add(gltf.scene); // Add the loaded model to the scene
                },
                undefined, // onProgress callback
                (error) => {
                    console.error("An error happened:", error); // Handle errors
                }
            );

            return () => {
                // Clean up on unmount
                if (modelRef.current) {
                    modelRef.current.clear();
                }
            };
        }, [glbUrl]);

        return <group ref={modelRef} position={[-1.6, -1, 3]} rotation={[0, Math.PI * 0.3, 0]}/>;
    };

    const Plane = () => {
        const texture = useLoader(TextureLoader, 'public/assets/texture.png'); // Use the PNG version of your SVG
        
        return (
            <mesh position={[0, 0, -5]}>
                <planeGeometry args={[30, 15]} /> {/* Width and Height of the Plane */}
                <meshStandardMaterial map={texture} color="#00D9FF" transparent={true} opacity={0.3}/>
            </mesh>
        );
    };
    const Fern = () => {
        const texture = useLoader(TextureLoader, 'public/assets/shapes.png'); // Use the PNG version of your SVG

        return (
            <mesh position={[-4, -0.5, 0]}>
                <planeGeometry args={[6, 12]} /> {/* Width and Height of the Plane */}
                <meshStandardMaterial map={texture} transparent={true} opacity={0.5}/>
            </mesh>
        );
    };
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
                style={{ height: "100vh", width: "100vw", position: 'relative' }} // Set position relative
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

                    <GltfModel glbUrl="public/assets/GLTF/Inkfish_LOD1.glb" />
                    <Plane />
                    <Fern />
                </Canvas>
            </motion.div>
        </>
    );
}

export default App;
