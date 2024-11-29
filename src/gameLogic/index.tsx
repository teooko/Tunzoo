import {useEffect, useRef, useState} from "react";
import * as Tone from "tone";
import KeyHandler from "./KeyHandler.tsx";
import LoadMap from "./LoadMap.tsx";
import IncomingHits from "./IncomingHits.tsx";
import {startSong} from "./startSong.ts";
import {useScoringStore} from "./Stores/scoringStore.tsx";
import { motion } from "framer-motion";
import {useAnimationStore} from "./Stores/animationStore.tsx";
import {HitQuality} from "../../lib/types.ts";
import HitQualityAnimation from "./HitQualityAnimation.tsx";
import HitReference from "./HitReference.tsx";

const Index = () => {
    const audioRef = useRef<Tone.Player | null>(null);
    const {shadow, jump, disableShadow, disableJump, toggleJumpRight } = useAnimationStore((state) => state);

    const {hitQuality, score, combo} = useScoringStore(state => state);
    
    useEffect(() => {
        if(shadow)
            setTimeout(() => disableShadow(), 100);
    }, [shadow])
    
    useEffect(() => {
        if(jump)
            setTimeout(() => {
                toggleJumpRight();
                disableJump();
            }, 500);
    }, [jump])
    
    KeyHandler();
    LoadMap(audioRef);
   
    return (
        <div>
            <button onClick={() => startSong(audioRef)} style={{zIndex: -1}}>start</button>
            <HitReference />
            
            <div style={{display: "flex", flexDirection: "row"}}>
              <IncomingHits />
            </div>
            <div style={{zIndex: -1}}>Score: {score}</div>
            <div style={{zIndex: -1}}>Combo: {combo}</div>
        </div>
    );
};

export default Index;