import { create } from 'zustand';

type animationStore = {
    shadow: boolean,
    jump: boolean,
    jumpRight: boolean,
    enableShadow: () => void,
    disableShadow: () => void,
    enableJump: () => void,
    disableJump: () => void,
    toggleJumpRight: () => void,
}

const useAnimationStore = create<animationStore>((set) => ({
    shadow: false, 
    jump: false,  
    jumpRight: true,  

    enableShadow: () => set(() => ({ shadow: true })),
    disableShadow: () => set(() => ({ shadow: false })),
    enableJump: () => set(() => ({ jump: true })),
    disableJump: () => set(() => ({ jump: false })),
    toggleJumpRight: () => set((state) => ({ jumpRight: !state.jumpRight })),
}));