import {motion} from "framer-motion";
import {useRef, useState} from "react";
import * as Tone from "tone";
import KeyHandler from "./KeyHandler.tsx";
import {loadMap} from "./hitMapper.tsx";
import {Hit} from "../../lib/types.ts";

const Index = () => {
    const audioRef = useRef<Tone.Player | null>(null);
    const [hitMap, setHitMap] = useState<Hit[]>([]);
    const [visibleHits, setVisibleHits] = useState<number[]>([]);
    const [lastHit, setLastHit] = useState("none");
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    KeyHandler(hitMap, setLastHit, setVisibleHits, visibleHits, setScore, setCombo, combo);

    const startSong = () => {
        const volume = new Tone.Volume(-100);
        const audio = new Tone.Player("public/assets/peak.mp3").chain(volume, Tone.getDestination()).toDestination();
        audioRef.current = audio;

        const hitSound = new Tone.Player("public/assets/snare.mp3").toDestination();
        const newHitMap = loadMap(hitSound);

        setHitMap(newHitMap);

        Tone.loaded().then(() => {

            const transport = Tone.getTransport();
            audioRef.current?.start();

            newHitMap.forEach((hit) => {
                transport.scheduleOnce(() => {
                    setVisibleHits(prevKeys => [...prevKeys, hit.time]);
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
                {
                    visibleHits.map((hit) =>
                        <motion.div
                            key={hit}
                            className="falling-key"
                            initial={{ x: 1100}} 
                            animate={{ x: 100}}
                            transition={{ duration: 1.1}}
                            onAnimationComplete={() => {
                                setLastHit("miss");
                                setVisibleHits((prevHitMap) => prevHitMap.filter((item) => item !== hit));
                            }}
                        >
                            
                            <div style={{fontSize: 30, border: "1px solid black", borderRadius: "100px", width: "80px", height: "80px", position: "absolute", backgroundColor: "red"}} />

                        </motion.div>)
                }
            </div>
            <div>{lastHit}</div>
            <div>Score: {score}</div>
            <div>Combo: {combo}</div>
        </div>
    );
};

export default Index;