import {motion} from "framer-motion";
import {useRef, useState} from "react";
import * as Tone from "tone";
import KeyHandler from "./KeyHandler.tsx";
import {loadMap} from "./hitMapper.tsx";
import {Hit} from "../../lib/types.ts";

const Index = () => {
    const audioRef = useRef<Tone.Player | null>(null); // Create a ref for audio
    const [hitMap, setHitMap] = useState<Hit[]>([]);
    const [visibleHits, setVisibleHits] = useState<number[]>([]);
    const [lastHit, setLastHit] = useState("none");
    KeyHandler(hitMap, setLastHit, setVisibleHits, visibleHits);

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
                }, hit.time - 1);
            });

            transport.start();
        });
    };

    return (
        <div>
            <button onClick={() => startSong()}>start</button>
            <div style={{height: "100px", width: "3px",borderStyle: "solid", position: "absolute", marginLeft: "100px", zIndex: 1, backgroundColor: "blue"}}></div>
            <div style={{display: "flex", flexDirection: "row"}}>
                {
                    visibleHits.map((hit) =>
                        <motion.div
                            key={hit}
                            className="falling-key"
                            initial={{ x: "100vw"}} // Start position
                            animate={{ x: 63,
                                transitionEnd: {
                                    x: -100,
                                }}}
                            transition={{ duration: 1 }}
                            onAnimationComplete={() => setVisibleHits((prevHitMap) => prevHitMap.filter((item) => item !== hit))}
                        >
                            <div style={{fontSize: 30, border: "1px solid black", borderRadius: "100px", width: "80px", height: "80px", position: "absolute", backgroundColor: "red"}}>

                            </div>
                        </motion.div>)
                }
            </div>
            <div>{lastHit}</div>
        </div>
    );
};

export default Index;