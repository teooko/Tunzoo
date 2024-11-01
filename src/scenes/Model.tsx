import React, {useEffect, useRef} from 'react';
import {Mesh} from "three";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useAnimations} from "@react-three/drei";

const Model : React.FC<{
    fileUrl: string;
    position: [number, number, number];
    rotation: [number, number, number];
}> = ({ fileUrl, position, rotation }) => {
    const mesh = useRef<Mesh>(null!);
    const model = useLoader(GLTFLoader, fileUrl);
    const {actions, mixer} = useAnimations(model.animations, model.scene);
    
    useEffect(() => {
        if (actions.Idle_A) {
            actions.Idle_A.timeScale = 0.2;
            actions.Idle_A.play();  
        }
    }, [mixer]);
    
    return (
        <mesh ref={mesh} position={position} rotation={rotation}>
            <primitive object={model.scene} />
        </mesh>
    );
}

export default Model;