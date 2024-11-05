import {useState} from 'react';
import CameraController from "./CameraController.tsx";
import Model from "./Model.tsx";
import {Canvas} from "@react-three/fiber";
import useMousePosition from "./useMousePosition.tsx";
import Carets from "./Carets.tsx";
import BackgroundModels from "./BackgroundModels.tsx";

const CanvasMenu = () => {
    const mousePosition = useMousePosition();
    const [playerIndex, setPlayerIndex] = useState(0);
    
    return (
        <Canvas className="relative h-[94%] z-10" >
            <CameraController mousePosition={mousePosition} />
            <ambientLight intensity={5} color={'white'} />
            <Model position={[-1.6, -1, 3]} rotation={[0, Math.PI * 0.3, 0]} modelIndex={playerIndex}/>
            <Carets setPlayerIndex={setPlayerIndex} />
            <BackgroundModels />
        </Canvas>
    );
};

export default CanvasMenu;