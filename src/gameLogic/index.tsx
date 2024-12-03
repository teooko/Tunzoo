import {useEffect, useRef, useState} from "react";
import * as Tone from "tone";
import KeyHandler from "./KeyHandler.tsx";
import LoadMap from "./LoadMap.tsx";
import {startSong} from "./startSong.ts";
import {useScoringStore} from "./Stores/scoringStore.tsx";
import GameInterface from "./GameInterface.tsx";

const Index = () => {
    const audioRef = useRef<Tone.Player | null>(null);
    const {score, combo} = useScoringStore(state => state);
    
    KeyHandler();
    LoadMap(audioRef);
   
    return (
        <div>
            <button onClick={() => startSong(audioRef)} style={{zIndex: -1}}>start</button>
            <GameInterface />
            <div style={{zIndex: -1}}>Score: {score}</div>
            <div style={{zIndex: -1}}>Combo: {combo}</div>
        </div>
    );
};

export default Index;