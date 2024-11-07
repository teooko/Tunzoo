import * as Tone from 'tone';
import hitMap from "./TestData/hitMap.tsx";
import {Hit} from "../../lib/types.ts";
export const createHitMap = (bpm: number, sound: Tone.Player, songTime: number) => {
    const numberOfHits = Math.floor((songTime / 60) * bpm);
    const hitMap: Hit[] = [];

    const timeBetweenHits = 60 / bpm;

    for (let i = 0; i < numberOfHits; i++) {
        const time = i * timeBetweenHits;
        hitMap.push({ time, sound: sound });
    }
    return hitMap;
};

export const loadMap = (hitSound: Tone.Player) => {
    const newHitMap: Hit[] = hitMap.map((hit) => ({
        time: hit.time,
        sound: hitSound
    }));
    
    return newHitMap;
};

