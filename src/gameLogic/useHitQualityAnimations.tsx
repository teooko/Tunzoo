import {useEffect} from "react";
import {useAnimationStore} from "./Stores/animationStore.tsx";

export const useHitQualityAnimations = () => {
    // set name to animation reset
    const {shadow, jump, disableShadow, disableJump, toggleJumpRight } = useAnimationStore((state) => state);

    useEffect(() => {
        if(shadow)
            setTimeout(() => disableShadow(), 100);
    }, [shadow])

    useEffect(() => {
        if(jump)
            setTimeout(() => {
                toggleJumpRight();
                disableJump();
            }, 500);
    }, [jump])
}