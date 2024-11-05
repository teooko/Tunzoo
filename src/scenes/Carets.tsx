import Caret from "./Caret.tsx";

const Carets = ({setPlayerIndex}) => {
    const handlePressLeft = () => {
        setPlayerIndex((state: number) => state - 1 < 0 ? 7 : state - 1);
    }
    const handlePressRight = () => {
        setPlayerIndex((state: number) => state + 1 > 7 ? 0 : state + 1)
    }
    return (
        <>
            <Caret texturePath={'public/assets/caretLeft.png'} position={[-2.6, -0.5, 3]} size={[0.1, 0.2]} onClick={handlePressLeft}/>
            <Caret texturePath={'public/assets/caretRight.png'} position={[-0.6, -0.5, 3]} size={[0.1, 0.2]} onClick={handlePressRight}/>
        </>
    );
};

export default Carets;