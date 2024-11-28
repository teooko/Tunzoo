import { useEffect } from 'react';
import {calculateHit} from "./calculateHit.ts";
import {useHitsStore} from "./Stores/hitsStore.tsx";
import {useAnimationStore} from "./Stores/animationStore.tsx";

const KeyHandler = () => {
    let cancel = false;
    
    const {visibleHits} = useHitsStore.getState();
    const {enableShadow} = useAnimationStore.getState();
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'k') {
            if(!cancel) {
                calculateHit();
                enableShadow();
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
