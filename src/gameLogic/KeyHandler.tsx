import { useEffect } from 'react';
import {Hit} from "../../lib/types.ts";
import {calculateHit} from "./calculateHit.ts";

const KeyHandler = (hitMap: Hit[], setVisibleHits, visibleHits) => {
    let cancel = false;
    
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'k') {
            if(!cancel) {
                calculateHit(hitMap, setVisibleHits, visibleHits);
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
