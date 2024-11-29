import * as Tone from "tone";
import {useHitsStore} from "./Stores/hitsStore.tsx";
import {TIMING_TWEAKS} from "../../lib/constants.ts";

export const startSong = (audioRef) => {
    const {hitMap} = useHitsStore.getState();
    const {addVisibleHit} = useHitsStore.getState();
    
    Tone.loaded().then(() => {
        const transport = Tone.getTransport();
        audioRef.current?.start();
        hitMap.forEach((hit) => {
            transport.scheduleOnce(() => {
                addVisibleHit(hit);
            }, hit.time - TIMING_TWEAKS.HITMAP_OFFSET);
        });

        transport.start();
    });
};