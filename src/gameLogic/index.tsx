import {useEffect, useRef, useState} from "react";
import * as Tone from "tone";
import KeyHandler from "./KeyHandler.tsx";
import LoadMap from "./LoadMap.tsx";
import IncomingHits from "./IncomingHits.tsx";
import {startSong} from "./startSong.ts";
import {useScoringStore} from "./Stores/scoringStore.tsx";
import { motion } from "framer-motion";


const Index = () => {
    const audioRef = useRef<Tone.Player | null>(null);
    const [shadow, setShadow] = useState(true);
    const {hitQuality, score, combo} = useScoringStore(state => state);
    const [jump, setJump] = useState(false);
    
    useEffect(() => {
        if(shadow)
            setTimeout(() => setShadow(false), 100);
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
            setTimeout(() => setJump(false), 500);
    }, [jump])
    
    KeyHandler(setShadow, setJump);
    LoadMap(audioRef);
    const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <div>
            <button onClick={() => startSong(audioRef)}>start</button>
            <motion.div style={{fontSize: 30,
                borderRadius: "100px", 
                marginLeft: "160px", 
                width: "80px", 
                height: "80px", 
                position: "absolute", 
                backgroundColor: "white"}} animate={{ boxShadow: addShadow(hitQuality)}}
                        transition={{ duration: 0.5 }}>
                {jump && <motion.div style={{position: "absolute", zIndex: -1, textShadow: "0 0 15px #7849E0", color: "white"}}
                             animate={{left: 100, top: 100, opacity: [100, 100, 100, 0]}}
                             transition={{duration: 0.5, type: "keyframes"}}>{hitQuality}</motion.div>
                }
            </motion.div>
            
            <div style={{display: "flex", flexDirection: "row"}}>
              <IncomingHits />
            </div>
            <div>Score: {score}</div>
            <div>Combo: {combo}</div>
        </div>
    );
};

export default Index;