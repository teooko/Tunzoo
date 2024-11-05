import {useState} from 'react';
import CameraController from "./CameraController.tsx";
import {Polyhedron} from "@react-three/drei";
import Model from "./Model.tsx";
import TexturedPlane from "./TexturedPlane.tsx";
import Caret from "./Caret.tsx";
import SpinningModel from "./SpinningModel.tsx";
import {Canvas} from "@react-three/fiber";
import useMousePosition from "./useMousePosition.tsx";

const CanvasMenu = () => {
    const mousePosition = useMousePosition();
    const [playerIndex, setPlayerIndex] = useState(0);
    
    return (
        <Canvas className="relative h-[94%] z-10" >
            <CameraController mousePosition={mousePosition} />
            <Polyhedron />
            <ambientLight intensity={5} color={'white'} /> {/* Soft overall light */}
            <Model position={[-1.6, -1, 3]} rotation={[0, Math.PI * 0.3, 0]} modelIndex={playerIndex}/>
            <TexturedPlane texturePath={'public/assets/texture.png'} position={[0, 0, -5]} size={[30, 15]}/>
            <Caret texturePath={'public/assets/caretLeft.png'} position={[-2.6, -0.5, 3]} size={[0.1, 0.2]} onClick={() => setPlayerIndex(state => state - 1 < 0 ? 7 : state - 1)}/>
            <Caret texturePath={'public/assets/caretRight.png'} position={[-0.6, -0.5, 3]} size={[0.1, 0.2]} onClick={() => setPlayerIndex(state => state + 1 > 7 ? 0 : state + 1)}/>
            <SpinningModel position={[0, -3, 0]} rotation={[0, 0, 0]} />
            <SpinningModel position={[-12, 4, -3]} rotation={[3, 0, 0]} />
            <SpinningModel position={[-6, 3, -3]} rotation={[0, 0, 0]} />
        </Canvas>
    );
};

export default CanvasMenu;