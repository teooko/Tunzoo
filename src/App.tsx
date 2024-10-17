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

        return <group ref={modelRef} position={[-2, -1, 2]} rotation={[0, Math.PI * 0.3, 0]}/>;
    };

    const Plane = () => {
        const texture = useLoader(TextureLoader, 'public/assets/texture.png'); // Use the PNG version of your SVG
        
        return (
            <mesh position={[0, 0, -10]}>
                <planeGeometry args={[40, 20]} /> {/* Width and Height of the Plane */}
                <meshStandardMaterial map={texture} color="#00D9FF" transparent={true} opacity={0.3}/>
            </mesh>
        );
    };
    const Fern = () => {
        const texture = useLoader(TextureLoader, 'public/assets/fern.png'); // Use the PNG version of your SVG

        return (
            <mesh position={[-3,-1.8, 2]}>
                <planeGeometry args={[2, 1]} /> {/* Width and Height of the Plane */}
                <meshStandardMaterial map={texture} color="#00D9FF" transparent={true} />
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
                    style={{height: "100vh", width: "100vw" }}
                >
                    <div style={{height: "6%", backgroundColor: "black", zIndex: 2}} />
                <Canvas style={{
                    height: "94%"
                }}>
                    {/* Camera Controls */}
                    <OrbitControls />

                    {/* Lighting */}
                    <ambientLight intensity={5} color={'#66CD79'} /> {/* Soft overall light */}
                    <directionalLight position={[0, 10, 5]} intensity={1} /> {/* Strong directional light */}
                    <pointLight position={[5, 5, 5]} intensity={1} decay={2} distance={10} /> {/* Point light for localized illumination */}
                    <spotLight position={[0, 10, 0]} angle={0.3} penumbra={0.5} intensity={1} /> {/* Spot light for focused beam */}
                    
                    <GltfModel glbUrl="public/assets/GLTF/Inkfish_LOD1.glb" />
                    <Plane />
                    <Fern />
                    <Dodecahedron position={[5, 5, -5]}>
                        <meshStandardMaterial color="white" metalness={0.2} /> 
                    </Dodecahedron>
                    <Ring position={[3, 4, -3]}/>
                    
                </Canvas>
                </motion.div>
        </>
    );
}

export default App;
