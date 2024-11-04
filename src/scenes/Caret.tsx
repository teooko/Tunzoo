import React from 'react';
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

const Caret: React.FC<{
    texturePath: string,
    position: [number, number, number]
    size: [number, number]
}> = ({texturePath, position, size}) => {
    const texture = useLoader(TextureLoader, texturePath); // Use the PNG version of your SVG

    return (
        <mesh position={position}>
            <planeGeometry args={size} />
            <meshStandardMaterial map={texture} transparent={true} />
        </mesh>
    );
};

export default Caret;