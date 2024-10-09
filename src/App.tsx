import {useEffect, useRef, useState} from "react";
import * as Tone from 'tone';
import KeyHandler from "./KeyHandler.tsx";
import {loadMap} from "./hitMapper.tsx";
import {getTransport} from "tone";
import {motion} from "framer-motion";

interface Hit {
    time: number; // Time in seconds
    sound: Tone.Player; // The sound associated with the hit
}

function App() {
    const audioRef = useRef<Tone.Player | null>(null); // Create a ref for audio
    const [hitMap, setHitMap] = useState<Hit[]>([]);
    const [visibleHits, setVisibleHits] = useState<number[]>([]);

    KeyHandler(hitMap);
    const startSong = () => {
        const audio = new Tone.Player("public/assets/peak.mp3").toDestination(); 
        audioRef.current = audio;

        const hitSound = new Tone.Player("public/assets/snare.mp3").toDestination();
        const newHitMap = loadMap(hitSound); 

        setHitMap(newHitMap);

        Tone.loaded().then(() => {
            const transport = Tone.getTransport(); 
            //audioRef.current?.start(); 

            newHitMap.forEach((hit) => {
                transport.scheduleOnce(() => {
                    setVisibleHits(prevKeys => [...prevKeys, hit.time]);
                    setTimeout(() => {
                        //setVisibleHits(currentKeys => currentKeys.slice(1));
                    }, 1000);
                }, hit.time - 1);
            });
            transport.start();
        });
    };


    return (
    <>
      <div>
          <button onClick={() => startSong()}>start</button>
          <div style={{marginLeft: "auto", marginRight: "auto", height: "100px", width: "3px",borderStyle: "solid", position: "absolute"}}></div>
          <div style={{display: "flex", flexDirection: "row"}}>
              {
                  visibleHits.map((hit, index) =>
                      <motion.div
                          key={index}
                          className="falling-key"
                          initial={{ x: 1000 }} // Start position
                          animate={{ x: 0 }} // End position
                          transition={{ duration: 1 }}
                      >
                          <div style={{fontSize: 30, border: "1px solid black", borderRadius: "100px", padding: "10px", width: "30px", position: "absolute"}}>
                              k
                          </div>
                      </motion.div>)
              }
          </div>
      </div>
    </>
  )
}

export default App
