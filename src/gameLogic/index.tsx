import {useEffect, useRef, useState} from "react";
import * as Tone from "tone";
import KeyHandler from "./KeyHandler.tsx";
import LoadMap from "./LoadMap.tsx";
import IncomingHits from "./IncomingHits.tsx";
import {startSong} from "./startSong.ts";
import {useScoringStore} from "./Stores/scoringStore.tsx";
import { motion } from "framer-motion";
import {useAnimationStore} from "./Stores/animationStore.tsx";

const Index = () => {
    const audioRef = useRef<Tone.Player | null>(null);
    const {shadow, jump, jumpRight, disableShadow, disableJump, toggleJumpRight } = useAnimationStore((state) => state);

    const {hitQuality, score, combo} = useScoringStore(state => state);
    
    useEffect(() => {
        if(shadow)
            setTimeout(() => disableShadow, 100);
    }, [shadow])
    const addShadow = (hitQuality) => {
        if(shadow && hitQuality === "perfect") 
            return "0px 0px 50px 10px #50DD49";
        else if(shadow && hitQuality === "good")
            return "0px 0px 50px 10px #DBCA11";
        return "0px 0px 5px #6D38E0";
    }
    useEffect(() => {
        if(jump)
            setTimeout(() => {
                toggleJumpRight();
                disableJump()
            }, 500);
    }, [jump])
    
    KeyHandler();
    LoadMap(audioRef);
   
    return (
        <div>
            <button onClick={() => startSong(audioRef)} style={{zIndex: -1}}>start</button>
            <motion.div style={{fontSize: 30,
                borderRadius: "100px", 
                marginLeft: "160px", 
                width: "80px", 
                height: "80px", 
                position: "absolute", 
                backgroundColor: "white"}} animate={{ boxShadow: addShadow(hitQuality)}}
                        transition={{ duration: 0.5 }}>
                {jump && <motion.div style={{top: 20, left: 10, position: "absolute", zIndex: -1, textShadow: "0 0 15px #7849E0", color: "white", fontFamily: 'Nunito', fontWeight: "bold", fontSize: 40}}
                             animate={{left: jumpRight ? 80 : -80, top: 80, opacity: [100, 100, 100, 0]}}
                             transition={{duration: 0.5, type: "keyframes"}}>{hitQuality}</motion.div>
                }
            </motion.div>
            
            <div style={{display: "flex", flexDirection: "row"}}>
              <IncomingHits />
            </div>
            <div style={{zIndex: -1}}>Score: {score}</div>
            <div style={{zIndex: -1}}>Combo: {combo}</div>
        </div>
    );
};

export default Index;