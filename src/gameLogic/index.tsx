import {motion} from "framer-motion";
import {useRef} from "react";
import * as Tone from "tone";
import KeyHandler from "./KeyHandler.tsx";
import LoadMap from "./LoadMap.tsx";
import {useScoringStore} from "./scoringStore.tsx";
import {useHitsStore} from "./hitsStore.tsx";

const IncomingHits = () => {
    const { removeVisibleHit } = useHitsStore((state) => state);
    const { resetCombo, updateHitQuality } = useScoringStore((state) => state);
    const visibleHits = useHitsStore((state) => state.visibleHits);

    const handleHitEndReached = (hit: number) => {
        resetCombo();
        updateHitQuality("miss");
        removeVisibleHit(hit);
    };

    return (
        <>
            {visibleHits.map((hit) => (
                <motion.div
                    key={hit}
                    className="falling-key"
                    initial={{ x: 1100 }}
                    animate={{ x: 100 }}
                    transition={{ duration: 1.1 }}
                    onAnimationComplete={() => handleHitEndReached(hit)}
                >
                    <div
                        style={{
                            fontSize: 30,
                            border: "1px solid black",
                            borderRadius: "100px",
                            width: "80px",
                            height: "80px",
                            position: "absolute",
                            backgroundColor: "red",
                        }}
                    />
                </motion.div>
            ))}
        </>
    );
};

const Index = () => {
    const audioRef = useRef<Tone.Player | null>(null);

    const {hitQuality, score, combo} = useScoringStore(state => state);
    const addVisibleHit = useHitsStore((state) => state.addVisibleHit)
    KeyHandler();
    LoadMap(audioRef);
    const startSong = () => {
        const {hitMap} = useHitsStore.getState();
        Tone.loaded().then(() => {
            
            const transport = Tone.getTransport();
            audioRef.current?.start();
            hitMap.forEach((hit) => {
                transport.scheduleOnce(() => {
                    addVisibleHit(hit);
                }, hit.time - 0.9);
            });

            transport.start();
        });
    };
    
    
    
    return (
        <div>
            <button onClick={() => startSong()}>start</button>
            <div style={{fontSize: 30, border: "1px solid black", borderRadius: "100px", marginLeft: "160px", width: "80px", height: "80px", position: "absolute", backgroundColor: "pink"}} />
            <div style={{display: "flex", flexDirection: "row"}}>
              <IncomingHits />
            </div>
            <div>{hitQuality}</div>
            <div>Score: {score}</div>
            <div>Combo: {combo}</div>
        </div>
    );
};

export default Index;