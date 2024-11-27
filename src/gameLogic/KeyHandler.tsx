import { useEffect } from 'react';
import {calculateHit} from "./calculateHit.ts";
import {useHitsStore} from "./Stores/hitsStore.tsx";

const KeyHandler = (setShadow, setJump) => {
    let cancel = false;
    
    const {visibleHits} = useHitsStore.getState();
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'k') {
            if(!cancel) {
                setJump(true)
                calculateHit();
                setShadow(true);
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
