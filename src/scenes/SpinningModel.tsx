import React, { useRef } from 'react';
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import {Cylinder} from "@react-three/drei";

const SpinningModel: React.FC<{
    position: [number, number, number];
    rotation: [number, number, number];
}> = ({ position, rotation }) => {
    const mesh = useRef<Mesh>(null!);

    useFrame(() => {
        mesh.current.rotateX(0.01);
    });

    return (
        <mesh ref={mesh} position={position} rotation={rotation}>
            <Cylinder />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
}

export default SpinningModel;
