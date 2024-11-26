import * as Tone from "tone";
import {useScoringStore} from "./Stores/scoringStore.tsx";
import {useHitsStore} from "./Stores/hitsStore.tsx";

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

const scheduleSound = (time: number, sound: Tone.Player) => {
    sound.start(time);
}

// set the hardcoded time tweaking values to constants
export const calculateHit = () => {
    const {incrementCombo, resetCombo, increaseScore, updateHitQuality} = useScoringStore.getState();
    const {hitMap, visibleHits, removeVisibleHit} = useHitsStore.getState();
    
    const now = Tone.now();
    const matchedHit = visibleHits.find(hit => Math.abs(now - hit - 0.15) < 0.1);
    
    if(matchedHit) {
        scheduleSound(now, hitMap[0].sound);
        const timingOffset = Math.abs(now - matchedHit - 0.15);
        const { hitQualityType, baseScore } = getHitDetails(timingOffset);

        increaseScore(baseScore);
        updateHitQuality(hitQualityType);
        removeVisibleHit(matchedHit);
        incrementCombo();
    } else {
        const { hitQualityType } = getHitDetails(null);
        updateHitQuality(hitQualityType);
        resetCombo();
    }
}