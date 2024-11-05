import {useEffect, useRef} from 'react';
import {Mesh} from "three";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useAnimations} from "@react-three/drei";
import {modelPaths} from "../constants/modelPaths.ts";
import {type ModelProps} from "../../lib/types.ts";

const Model = ({position, rotation, modelIndex }: ModelProps) => {
    const mesh = useRef<Mesh>(null!);
    const models = useLoader(GLTFLoader, modelPaths);
    const modelAnimations = models.map((_, index) => {
        const {actions, mixer} = useAnimations(models[index].animations, models[modelIndex].scene);
        return {actions: actions, mixer: mixer};
    })
    
    useEffect(() => {
        if (modelAnimations[modelIndex].actions.Idle_A) {
            modelAnimations[modelIndex].actions.Idle_A.timeScale = 0.4;
            modelAnimations[modelIndex].actions.Idle_A.play();  
        }
    }, [modelIndex]);
    
    return (
        <mesh ref={mesh} position={position} rotation={rotation}>
            <primitive object={models[modelIndex].scene} />
        </mesh>
    );
}

export default Model;