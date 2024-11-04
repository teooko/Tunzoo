import React from 'react';
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

const Caret: React.FC<{
    texturePath: string,
    position: [number, number, number]
    size: [number, number]
    onClick: Function
}> = ({texturePath, position, size, onClick}) => {
    const texture = useLoader(TextureLoader, texturePath); // Use the PNG version of your SVG

    return (
        <mesh position={position} onClick={() => onClick()}>
            <planeGeometry args={size} />
            <meshStandardMaterial map={texture} transparent={true} />
        </mesh>
    );
};

export default Caret;