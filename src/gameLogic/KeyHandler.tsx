﻿import { useEffect } from 'react';
import * as Tone from "tone";
import {Hit} from "../../lib/types.ts";
function scheduleSound(time: number, sound: Tone.Player) {
    sound.start(time);
}
const KeyHandler = (hitMap: Hit[], setLastHit, setVisibleHits, visibleHits) => {
    let cancel = false;
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'k') {
            if(!cancel) {
                    const now = Tone.now();
                    const hit = hitMap.find(hit => Math.abs(now - hit.time - 0.1) < 0.2);
                    
                    if(hit) {
                        scheduleSound(now, hit.sound);
                        if (now - hit.time - 0.1 < 0.06)
                            setLastHit("perfect")
                        else if (now - hit.time - 0.1 < 0.15)
                            setLastHit("good")
                        
                        setVisibleHits((prevHitMap) => {
                            return prevHitMap.filter((item) => item !== hit.time)
                        });
                        console.log(visibleHits);
                    }
                    else
                    setLastHit("miss")
                cancel = true;
            }
        }
    };
    
    const handleKeyUp = () => {
        cancel = false;
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [hitMap]);
};

export default KeyHandler;
