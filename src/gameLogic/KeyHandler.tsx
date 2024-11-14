import { useEffect } from 'react';
import * as Tone from "tone";
import {Hit} from "../../lib/types.ts";
function scheduleSound(time: number, sound: Tone.Player) {
    sound.start(time);
}
const KeyHandler = (hitMap: Hit[], setLastHit, setVisibleHits, visibleHits, setScore, setCombo, combo) => {
    let cancel = false;
    
    // Create a type/object for player details
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'k') {
            if(!cancel) {
                
                // Extract in a function
                const now = Tone.now();
                const hit = visibleHits.find(hit => Math.abs(now - hit - 0.15) < 0.1);
                
                if(hit) {
                    scheduleSound(now, hitMap[0].sound);

                    let baseScore;
                    if (Math.abs(now - hit - 0.15) < 0.05) {
                        setLastHit("perfect");
                        baseScore = 300;
                    } else if (Math.abs(now - hit - 0.15) < 0.1) {
                        setLastHit("good");
                        baseScore = 100;
                    }

                    const multiplier = 1 + combo * 0.01;
                    const totalScore = Math.floor(baseScore * multiplier);

                    setScore(score => score + totalScore);

                    setVisibleHits((prevHitMap) => prevHitMap.filter((item) => item !== hit));
                    setCombo(combo => combo + 1);
                } else {
                    setLastHit("miss");
                    setCombo(0);  // Reset combo on miss
                }

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
