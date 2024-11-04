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
    const modelsAnimations = models.map((model, index) => {
        const {actions, mixer} = useAnimations(models[index].animations, models[modelIndex].scene);
        return {actions: actions, mixer: mixer};
    })
    
    useEffect(() => {
        if (modelsAnimations[modelIndex].actions.Idle_A) {
            modelsAnimations[modelIndex].actions.Idle_A.timeScale = 0.2;
            modelsAnimations[modelIndex].actions.Idle_A.play();  
        }
    }, [modelIndex]);
    
    return (
        <mesh ref={mesh} position={position} rotation={rotation}>
            <primitive object={models[modelIndex].scene} />
        </mesh>
    );
}

export default Model;