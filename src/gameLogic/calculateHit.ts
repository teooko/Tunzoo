import * as Tone from "tone";
import {Hit} from "../../lib/types.ts";

const getHitDetails = (hitTime: number): { hitType: string; baseScore: number } => {
    if (hitTime < 0.05) {
        return { hitType: "perfect", baseScore: 300 };
    } else if (hitTime < 0.1) {
        return { hitType: "good", baseScore: 100 };
    }
    return { hitType: "miss", baseScore: 0 };
};

const calculateScore = (baseScore: number, combo: number): number => {
    const multiplier = 1 + combo * 0.01;
    return Math.floor(baseScore * multiplier);
};

const scheduleSound = (time: number, sound: Tone.Player) => {
    sound.start(time);
}
export const calculateHit = (hitMap: Hit[], setLastHit, setVisibleHits, visibleHits, setScore, setCombo, combo) => {
    const now = Tone.now();
    const hit = visibleHits.find(hit => Math.abs(now - hit - 0.15) < 0.1);

    if(hit) {
        scheduleSound(now, hitMap[0].sound);
        const hitTime = Math.abs(now - hit - 0.15);
        const { hitType, baseScore } = getHitDetails(hitTime);

        setScore(calculateScore(baseScore, combo));
        setLastHit(hitType);
        setVisibleHits((prevHitMap) => prevHitMap.filter((item) => item !== hit));
        setCombo(combo => combo + 1);
    } else {
        setLastHit("miss");
        setCombo(0);
    }
}