import React from 'react';
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

const TexturedPlane: React.FC<{
    texturePath: string,
    position: [number, number, number]
    size: [number, number]
}> = ({texturePath, position, size}) => {
    const texture = useLoader(TextureLoader, texturePath); // Use the PNG version of your SVG

    return (
        <mesh position={position}>
            <planeGeometry args={size} />
            <meshStandardMaterial map={texture} color="#00D9FF" transparent={true} opacity={0.3}/>
        </mesh>
    );
};

export default TexturedPlane;