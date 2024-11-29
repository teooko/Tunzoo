import * as Tone from "tone";
import {useScoringStore} from "./Stores/scoringStore.tsx";
import {useHitsStore} from "./Stores/hitsStore.tsx";
import {HitQuality} from "../../lib/types.ts";
import {useAnimationStore} from "./Stores/animationStore.tsx";
import {TIMING_TWEAKS} from "../../lib/constants.ts";

const getHitDetails = (timingOffset: number | null): { hitQualityType: string; baseScore: number } => {
    if(timingOffset === null)
        return { hitQualityType: HitQuality.Miss, baseScore: 0 };
    
    if (timingOffset < 0.05) {
        return { hitQualityType: HitQuality.Perfect, baseScore: 300 };
    } else if (timingOffset < 0.1) {
        return { hitQualityType: HitQuality.Good, baseScore: 100 };
    }
    return { hitQualityType: HitQuality.Miss, baseScore: 0 };
};

const scheduleSound = (time: number, sound: Tone.Player) => {
    sound.start(time);
}

export const calculateHit = () => {
    const {incrementCombo, resetCombo, increaseScore, updateHitQuality, hitQuality} = useScoringStore.getState();
    const {hitMap, visibleHits, removeVisibleHit} = useHitsStore.getState();
    const {enableJump} = useAnimationStore.getState();
    
    const now = Tone.now();
    const matchedHit = visibleHits.find(hit => Math.abs(now - hit - TIMING_TWEAKS.HIT_OFFSET) < 0.1);
    
    if(matchedHit) {
        scheduleSound(now, hitMap[0].sound);
        const timingOffset = Math.abs(now - matchedHit - TIMING_TWEAKS.HIT_OFFSET);
        const { hitQualityType, baseScore } = getHitDetails(timingOffset);
        
        if(hitQuality !== hitQualityType)
            enableJump();
        
        increaseScore(baseScore);
        updateHitQuality(hitQualityType);
        removeVisibleHit(matchedHit);
        incrementCombo();
    } else {
        const { hitQualityType } = getHitDetails(null);
        if(hitQuality !== hitQualityType)
            enableJump();
        updateHitQuality(hitQualityType);
        resetCombo();
    }
}