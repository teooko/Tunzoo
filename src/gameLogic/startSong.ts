﻿import {useHitsStore} from "./hitsStore.tsx";
import * as Tone from "tone";

export const startSong = (audioRef) => {
    const {hitMap} = useHitsStore.getState();
    const {addVisibleHit} = useHitsStore.getState();
    
    Tone.loaded().then(() => {
        const transport = Tone.getTransport();
        audioRef.current?.start();
        hitMap.forEach((hit) => {
            transport.scheduleOnce(() => {
                addVisibleHit(hit);
            }, hit.time - 0.9);
        });

        transport.start();
    });
};