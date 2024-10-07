import {useEffect, useRef, useState} from "react";
import * as Tone from 'tone';
import KeyHandler, {scheduleHits} from "./KeyHandler.tsx";
import {createHitMap} from "./hitMapper.tsx";
import {getTransport} from "tone";

interface Hit {
    time: number; // Time in seconds
    sound: Tone.Player; // The sound associated with the hit
}

function App() {
    const audioRef = useRef<Tone.Player | null>(null); // Create a ref for audio
    const [hitMap, setHitMap] = useState<Hit[]>([]);
    
    useEffect(() => {
        const audio = new Tone.Player("public\\assets\\peak.mp3").toDestination();
        audioRef.current = audio;
        const hitSound = new Tone.Player("public\\assets\\snare.mp3").toDestination();
        const newHitMap = createHitMap(75, hitSound, 110);
        setHitMap(newHitMap);
        audio.autostart = false;
    }, []);

    KeyHandler(hitMap);
    const startSong = () => {
        Tone.start().then(() => {
            const transport = getTransport();
            audioRef.current?.start(); // Start the song
            transport.start(); // Start the transport
            //scheduleHits(hitMap); // Schedule the hits
        });
    };
    
  return (
    <>
      <div>
          <button onClick={() => startSong()}>start</button>
      </div>
    </>
  )
}

export default App
