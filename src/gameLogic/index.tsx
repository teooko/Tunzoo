import {motion} from "framer-motion";
import {useRef, useState} from "react";
import * as Tone from "tone";
import KeyHandler from "./KeyHandler.tsx";
import {Hit} from "../../lib/types.ts";
import LoadMap from "./LoadMap.tsx";
import {useScoringStore} from "./scoringStore.tsx";

const Index = () => {
    const [hitMap, setHitMap] = useState<Hit[]>([]);
    const audioRef = useRef<Tone.Player | null>(null);
    const [visibleHits, setVisibleHits] = useState<number[]>([]);

    const {hitQuality, score, combo, resetCombo, updateHitQuality} = useScoringStore.getState();
    
    KeyHandler(hitMap, setVisibleHits, visibleHits);
    LoadMap(hitMap, setHitMap, audioRef);
    
    // Extract this function
    const startSong = () => {
        
        Tone.loaded().then(() => {

            const transport = Tone.getTransport();
            audioRef.current?.start();

            hitMap.forEach((hit) => {
                transport.scheduleOnce(() => {
                    setVisibleHits(prevKeys => [...prevKeys, hit.time]);
                }, hit.time - 0.9);
            });

            transport.start();
        });
    };
    
    const handleHitEndReached = (hit: number) => {
        resetCombo();
        updateHitQuality("miss");
        setVisibleHits((prevHitMap) => prevHitMap.filter((item) => item !== hit));
    }
    
    return (
        <div>
            <button onClick={() => startSong()}>start</button>
            <div style={{fontSize: 30, border: "1px solid black", borderRadius: "100px", marginLeft: "160px", width: "80px", height: "80px", position: "absolute", backgroundColor: "pink"}} />
            <div style={{display: "flex", flexDirection: "row"}}>
                {
                    visibleHits.map((hit) =>
                        <motion.div
                            key={hit}
                            className="falling-key"
                            initial={{ x: 1100}} 
                            animate={{ x: 100}}
                            transition={{ duration: 1.1}}
                            onAnimationComplete={() => handleHitEndReached(hit)}
                        >
                            <div style={{fontSize: 30, border: "1px solid black", borderRadius: "100px", width: "80px", height: "80px", position: "absolute", backgroundColor: "red"}} />

                        </motion.div>)
                }
            </div>
            <div>{hitQuality}</div>
            <div>Score: {score}</div>
            <div>Combo: {combo}</div>
        </div>
    );
};

export default Index;