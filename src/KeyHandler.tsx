import { useEffect } from 'react';
import * as Tone from "tone";

interface Hit {
    time: number; // Time in seconds
    sound: Tone.Player; // The sound associated with the hit
}
function scheduleSound(time: number, sound: Tone.Player) {
    sound.start(time);
}
const KeyHandler = (hitMap: Hit[]) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        console.log(`Key pressed: ${event.key}`);
        if (event.key === 'k') {
            // Check if the timing is correct
            const now = Tone.now(); // Get current time in Tone.js
            const hit = hitMap.find(hit => Math.abs(now - hit.time) < 0.2);
            const transport = Tone.getTransport();
            if (hit) { // 100ms window
                scheduleSound(now, hit.sound); // Play hit feedback
                if(now - hit.time < 0.1)
                    console.log("perfect")
                else if(now - hit.time < 0.2)
                    console.log("good")
            }
        }
        
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [hitMap]);
};

export default KeyHandler;
