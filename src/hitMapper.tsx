import * as Tone from 'tone';

interface Hit {
    time: number; // Time in seconds
    sound: Tone.Player; // The sound associated with the hit
}
export const createHitMap = (bpm: number, sound: Tone.Player, songTime: number) => {
    const numberOfHits = Math.floor((songTime / 60) * bpm);
    const hitMap: Hit[] = [];

    const timeBetweenHits = 60 / bpm;

    for (let i = 0; i < numberOfHits; i++) {
        const time = i * timeBetweenHits;
        hitMap.push({ time, sound: sound });
    }
    console.log(hitMap);
    return hitMap;
};

