import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import './App.css';
import { useEffect, useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

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

        return <group ref={modelRef} />;
    };

    const Plane = () => {
        return (
            <mesh>
                <planeGeometry args={[5, 5]} /> {/* Width and Height of the Plane */}
                <meshStandardMaterial color="lightblue">
                    hi
                </meshStandardMaterial>
            </mesh>
        );
    };

    return (
        <>
            <div style={{position: "absolute", height: "80px", backgroundColor: "black", zIndex: 2}}>

            </div>
            <div style={{height: "100vh", width: "100vw", backgroundColor: "pink" }}>
                
                <Canvas>
                    {/* Camera Controls */}
                    <OrbitControls />

                    {/* Lighting */}
                    <ambientLight intensity={5} /> {/* Soft overall light */}
                    <directionalLight position={[0, 10, 5]} intensity={1} /> {/* Strong directional light */}
                    <pointLight position={[5, 5, 5]} intensity={1} decay={2} distance={10} /> {/* Point light for localized illumination */}
                    <spotLight position={[0, 10, 0]} angle={0.3} penumbra={0.5} intensity={1} /> {/* Spot light for focused beam */}
                    
                    <GltfModel glbUrl="public/assets/GLTF/Inkfish_LOD1.glb" />
                    <Plane />
                </Canvas>
            </div>
        </>
    );
}

export default App;
