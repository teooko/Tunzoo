import {useRef} from "react";
import * as Tone from "tone";
import KeyHandler from "./KeyHandler.tsx";
import LoadMap from "./LoadMap.tsx";
import IncomingHits from "./IncomingHits.tsx";
import {startSong} from "./startSong.ts";
import {useScoringStore} from "./Stores/scoringStore.tsx";

const Index = () => {
    const audioRef = useRef<Tone.Player | null>(null);
    const {hitQuality, score, combo} = useScoringStore(state => state);
    
    KeyHandler();
    LoadMap(audioRef);
    
    return (
        <div>
            <button onClick={() => startSong(audioRef)}>start</button>
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