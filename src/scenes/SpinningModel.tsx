import React, { useRef } from 'react';
import {Mesh, MeshStandardMaterial, TextureLoader} from "three";
import {useFrame, useLoader} from "@react-three/fiber";
import {Cylinder} from "@react-three/drei";
import {useThree} from "@react-three/fiber";
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
            <Cylinder>
                <meshStandardMaterial
                    transparent={true}
                    roughness={0.1}
                    metalness={0.3}
                />
            </Cylinder>
        </mesh>
    );
}

export default SpinningModel;
