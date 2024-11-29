import {motion} from "framer-motion";
import {useAnimationStore} from "./Stores/animationStore.tsx";
import {useScoringStore} from "./Stores/scoringStore.tsx";
import {useEffect, useState} from "react";

const HitQualityAnimation = () => {
    const {jump, jumpRight} = useAnimationStore((state) => state);
    const {hitQuality} = useScoringStore((state) => state);
    const [frozenHitQuality, setFrozenHitQuality] = useState(hitQuality);
    
    useEffect(() => {
        setFrozenHitQuality(hitQuality);
    }, [jump]);

    return (
        <>
            {jump && (
                <motion.div
                    className="absolute top-[20px] left-[10px] z-[-1] text-white font-bold text-4xl"
                    style={{
                        textShadow: "0 0 15px #7849E0",
                        fontFamily: "Nunito",
                    }}
                    animate={{
                        left: jumpRight ? 80 : -80,
                        top: 80,
                        opacity: [100, 100, 100, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        type: "keyframes",
                    }}
                >
                    {frozenHitQuality}
                </motion.div>
            )}
        </>
    );
};

export default HitQualityAnimation;