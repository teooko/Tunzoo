import HitReference from "./HitReference.tsx";
import IncomingHits from "./IncomingHits.tsx";

const GameInterface = () => {
    return (
        <>
            <HitReference />
            <div style={{display: "flex", flexDirection: "row"}}>
                <IncomingHits />
            </div> 
        </>
    );
};

export default GameInterface;