import {useState} from 'react';
import CameraController from "./CameraController.tsx";
import Model from "./Model.tsx";
import TexturedPlane from "./TexturedPlane.tsx";
import SpinningModel from "./SpinningModel.tsx";
import {Canvas} from "@react-three/fiber";
import useMousePosition from "./useMousePosition.tsx";
import Carets from "./Carets.tsx";

const CanvasMenu = () => {
    const mousePosition = useMousePosition();
    const [playerIndex, setPlayerIndex] = useState(0);
    
    return (
        <Canvas className="relative h-[94%] z-10" >
            <CameraController mousePosition={mousePosition} />
            <ambientLight intensity={5} color={'white'} />
            <Model position={[-1.6, -1, 3]} rotation={[0, Math.PI * 0.3, 0]} modelIndex={playerIndex}/>
            <TexturedPlane texturePath={'public/assets/texture.png'} position={[0, 0, -5]} size={[30, 15]}/>
            <Carets setPlayerIndex={setPlayerIndex} />
            <SpinningModel position={[0, -3, 0]} rotation={[0, 0, 0]} />
            <SpinningModel position={[-12, 4, -3]} rotation={[3, 0, 0]} />
            <SpinningModel position={[-6, 3, -3]} rotation={[0, 0, 0]} />
        </Canvas>
    );
};

export default CanvasMenu;