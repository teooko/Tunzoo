import {Hit} from "../../lib/types.ts";
import {create} from "zustand/react";

type HitsStore = {
    hitMap: Hit[];
    visibleHits: number[];
    setHitMap: (newHitMap: Hit[]) => void;
    addVisibleHit: (hit: Hit) => void;
    removeVisibleHit: (hit: number) => void;
}

export const useHitsStore = create<HitsStore>((set) => ({
    hitMap: [],
    visibleHits: [],
    setHitMap: (newHitMap) => set(() => ({hitMap: [...newHitMap]})),
    addVisibleHit: (hit) => set((state) => ({visibleHits: [...state.visibleHits, hit.time]})),
    removeVisibleHit: (hit) => set((state) => ({visibleHits: state.visibleHits.filter((visibleHit) => visibleHit !== hit)})),
}));