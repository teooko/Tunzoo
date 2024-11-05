import TexturedPlane from "./TexturedPlane.tsx";
import SpinningModel from "./SpinningModel.tsx";

const BackgroundModels = () => {
    return (
        <>
            <TexturedPlane texturePath={'public/assets/texture.png'} position={[0, 0, -5]} size={[30, 15]}/>
            <SpinningModel position={[0, -3, 0]} rotation={[0, 0, 0]} />
            <SpinningModel position={[-12, 4, -3]} rotation={[3, 0, 0]} />
            <SpinningModel position={[-6, 3, -3]} rotation={[0, 0, 0]} />   
        </>
    );
};

export default BackgroundModels;