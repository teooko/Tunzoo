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
    
    KeyHandler(setShadow);
    LoadMap(audioRef);
    
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
                        transition={{ duration: 0.5 }}/>
            
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