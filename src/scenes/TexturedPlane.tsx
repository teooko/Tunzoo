import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {type TexturedPlaneProps} from "../../lib/types.ts";

const TexturedPlane = ({texturePath, position, size}: TexturedPlaneProps) => {
    const texture = useLoader(TextureLoader, texturePath);

    return (
        <mesh position={position}>
            <planeGeometry args={size} />
            <meshStandardMaterial map={texture} color="#00D9FF" transparent={true} opacity={0.3}/>
        </mesh>
    );
};

export default TexturedPlane;