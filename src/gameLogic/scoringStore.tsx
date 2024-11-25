import {create} from "zustand/react";

const calculateScore = (baseScore: number, combo: number): number => {
    const multiplier = 1 + combo * 0.01;
    return Math.floor(baseScore * multiplier);
};

type ScoringStore = {
    hitQuality: string;
    score: number;
    combo: number;
    incrementCombo: () => void;
    resetCombo: () => void;
    increaseScore: (baseScore: number) => void;
    updateHitQuality: (newHitQuality: string) => void;
};

export const useScoringStore = create<ScoringStore>((set) => ({
    hitQuality: "none",
    score: 0,
    combo: 0,
    incrementCombo: () => set((state) => ({ combo: state.combo + 1 })),
    resetCombo: () => set(() => ({ combo: 0 })),
    increaseScore: (baseScore) => set((state) => 
        ({score: state.score + calculateScore(baseScore, state.combo)})),
    updateHitQuality: (newHitQuality) => set(() => ({hitQuality: newHitQuality}))
}));