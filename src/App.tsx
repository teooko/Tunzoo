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
        const audio = new Tone.Player("public\\assets\\peak.mp3").toDestination();
        audioRef.current = audio;
        const hitSound = new Tone.Player("public\\assets\\snare.mp3").toDestination();
        const newHitMap = loadMap(hitSound);
        setHitMap(newHitMap);
        Tone.loaded().then(() => {
            const transport = getTransport();
            audioRef.current?.start(); 
            transport.start();
            const now = Tone.now();
            hitMap.forEach(hit => {
                const timeToFall = (hit.time - now) * 1000; // Convert to milliseconds
                setVisibleHits(prevKeys => [...prevKeys, hit.time]);
                
                if (timeToFall > 0) {
                    setTimeout(() => {
                        setVisibleHits(prevKeys => [...prevKeys, hit.time]);
                        setVisibleHits(currentKeys => currentKeys.slice(1));
                    }, timeToFall);
                    
                    
                }
            });
        });
    };
    
  return (
    <>
      <div>
          <button onClick={() => startSong()}>start</button>
          <div style={{marginLeft: "auto", marginRight: "auto", height: "100px", width: "3px",borderStyle: "solid", position: "absolute"}}></div>
          <div>
              {
                  visibleHits.map((hit, index) =>
                      <motion.div
                          key={index}
                          className="falling-key"
                          initial={{ x: 1000 }} // Start position
                          animate={{ x: 0 }} // End position
                          transition={{ duration: 1 }}
                      >
                          k
                      </motion.div>)
              }
          </div>
      </div>
    </>
  )
}

export default App
