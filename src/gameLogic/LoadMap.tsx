import {useEffect} from 'react';
import * as Tone from "tone";
import {loadMap} from "./hitMapper.tsx";
import {useHitsStore} from "./hitsStore.tsx";

export const LoadMap = (audioRef) => {
    const {setHitMap} = useHitsStore.getState();
    useEffect(() => {
        const volume = new Tone.Volume(-100);
        const audio = new Tone.Player("public/assets/peak.mp3").chain(volume, Tone.getDestination()).toDestination();
        audioRef.current = audio;

        const hitSound = new Tone.Player("public/assets/snare.mp3").toDestination();
        const newHitMap = loadMap(hitSound);
        setHitMap(newHitMap);
        
    }, []);
};

export default LoadMap;