import { useEffect } from 'react';
import {Hit} from "../../lib/types.ts";
import {calculateHit} from "./calculateHit.ts";

const KeyHandler = (hitMap: Hit[], setHitQuality, setVisibleHits, visibleHits, setScore, setCombo, combo) => {
    let cancel = false;
    
    // Create a type/object for player details
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'k') {
            if(!cancel) {
                calculateHit(hitMap, setHitQuality, setVisibleHits, visibleHits, setScore, setCombo, combo);
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
