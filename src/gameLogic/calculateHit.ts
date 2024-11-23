import * as Tone from "tone";
import {Hit} from "../../lib/types.ts";

const getHitDetails = (timingOffset: number | null): { hitQualityType: string; baseScore: number } => {
    if(timingOffset === null)
        return { hitQualityType: "miss", baseScore: 0 };
    
    if (timingOffset < 0.05) {
        return { hitQualityType: "perfect", baseScore: 300 };
    } else if (timingOffset < 0.1) {
        return { hitQualityType: "good", baseScore: 100 };
    }
    return { hitQualityType: "miss", baseScore: 0 };
};

const calculateScore = (baseScore: number, combo: number): number => {
    const multiplier = 1 + combo * 0.01;
    return Math.floor(baseScore * multiplier);
};

const scheduleSound = (time: number, sound: Tone.Player) => {
    sound.start(time);
}

export const calculateHit = (hitMap: Hit[], setHitQuality, setVisibleHits, visibleHits, setScore, setCombo, combo) => {
    const now = Tone.now();
    const matchedHit = visibleHits.find(hit => Math.abs(now - hit - 0.15) < 0.1);

    if(matchedHit) {
        scheduleSound(now, hitMap[0].sound);
        const timingOffset = Math.abs(now - matchedHit - 0.15);
        const { hitQualityType, baseScore } = getHitDetails(timingOffset);

        setScore(calculateScore(baseScore, combo));
        setHitQuality(hitQualityType);
        setVisibleHits((prevHitMap) => prevHitMap.filter((item) => item !== matchedHit));
        setCombo(combo => combo + 1);
    } else {
        const { hitQualityType } = getHitDetails(null);
        setHitQuality(hitQualityType);
        setCombo(0);
    }
}