import React, {useRef} from 'react';
import {Mesh} from "three";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const Model : React.FC<{
    fileUrl: string;
    position: [number, number, number];
    rotation: [number, number, number];
}> = ({ fileUrl, position, rotation }) => {
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    return (
        <mesh ref={mesh} position={position} rotation={rotation}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export default Model;