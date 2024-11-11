import { useEffect } from 'react';
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
                    const hit = visibleHits.find(hit => Math.abs(now - hit) < 0.2);
                    console.log(visibleHits);
                    if(hit) {
                        scheduleSound(now, hitMap[0].sound);
                        if (now - hit < 0.05) {
                            setLastHit("perfect")
                        }
                        else if (now - hit < 0.1)
                            setLastHit("good")
                        
                        setVisibleHits((prevHitMap) => prevHitMap.filter((item) => item !== hit));
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
    }, [visibleHits]);
};

export default KeyHandler;
