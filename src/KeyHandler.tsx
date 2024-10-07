import { useEffect } from 'react';
import * as Tone from "tone";

interface Hit {
    time: number; // Time in seconds
    sound: Tone.Player; // The sound associated with the hit
}
function scheduleSound(time: number, sound: Tone.Player) {
    sound.start(time);
}
export function scheduleHits(hitMap: Hit[]) {
    hitMap.forEach(({ time, sound }) => {
        const transport = Tone.getTransport();
        transport.schedule((time) => {
            scheduleSound(time, sound); // Assuming you have the scheduleNote function
        }, time); // Use the time from hitMap
    });
}
const KeyHandler = (hitMap: Hit[]) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        console.log(`Key pressed: ${event.key}`);
        if (event.key === 'k') {
            // Check if the timing is correct
            const now = Tone.now(); // Get current time in Tone.js
            const hit = hitMap.find(hit => Math.abs(now - hit.time) < 0.2);
            console.log(Tone.now(), hit, hitMap);
            if (hit) { // 100ms window
                scheduleSound(hit.time, hit.sound); // Play hit feedback
                // Update score based on timing (e.g., perfect, good, miss)
            }
        }
    };

    useEffect(() => {
        // Attach the keydown event listener
        window.addEventListener('keydown', handleKeyDown);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [hitMap]);
};

export default KeyHandler;
