import React, {useEffect, useRef} from 'react';
import {Mesh} from "three";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useAnimations} from "@react-three/drei";

const Model : React.FC<{
    position: [number, number, number];
    rotation: [number, number, number];
    modelIndex: number;
}> = ({position, rotation, modelIndex }) => {
    const modelPaths = ["public/assets/GLTF/Animations/Colobus_Animations.glb",
        "public/assets/GLTF/Animations/Gecko_Animations.glb",
        "public/assets/GLTF/Animations/Herring_Animations.glb",
        "public/assets/GLTF/Animations/Inkfish_Animations.glb",
        "public/assets/GLTF/Animations/Muskrat_Animations.glb",
        "public/assets/GLTF/Animations/Pudu_Animations.glb",
        "public/assets/GLTF/Animations/Sparrow_Animations.glb",
        "public/assets/GLTF/Animations/Taipan_Animations.glb"];
    
    const mesh = useRef<Mesh>(null!);
    const models = modelPaths.map((fileUrl: string) => useLoader(GLTFLoader, fileUrl));
    
    const {actions, mixer} = useAnimations(models[modelIndex].animations, models[modelIndex].scene);
    
    useEffect(() => {
        if (actions.Idle_A) {
            actions.Idle_A.timeScale = 0.2;
            actions.Idle_A.play();  
        }
    }, [mixer]);
    
    return (
        <mesh ref={mesh} position={position} rotation={rotation}>
            <primitive object={models[modelIndex].scene} />
        </mesh>
    );
}

export default Model;