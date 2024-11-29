import {motion} from "framer-motion";
import {useHitsStore} from "./Stores/hitsStore.tsx";
import {useScoringStore} from "./Stores/scoringStore.tsx";
import HitCircle from "./HitCircle.tsx";
import {HitQuality} from "../../lib/types.ts";
import {useAnimationStore} from "./Stores/animationStore.tsx";
import {TIMING_TWEAKS} from "../../lib/constants.ts";

const IncomingHits = () => {
    const { removeVisibleHit } = useHitsStore((state) => state);
    const { resetCombo, updateHitQuality } = useScoringStore((state) => state);
    const visibleHits = useHitsStore((state) => state.visibleHits);
    const {enableJump} = useAnimationStore((state) => state);
    const handleHitEndReached = (hit: number) => {
        resetCombo();
        updateHitQuality(HitQuality.Miss);
        enableJump();
        removeVisibleHit(hit);
    };

    return (
        <>
            {visibleHits.map((hit) => (
                <motion.div
                    key={hit}
                    className="falling-key"
                    initial={{ x: 1100 }}
                    animate={{ x: 100 }}
                    transition={{ duration: TIMING_TWEAKS.TRANSITION_DURATION }}
                    onAnimationComplete={() => handleHitEndReached(hit)}
                >
                    <HitCircle />
                </motion.div>
            ))}
        </>
    );
};

export default IncomingHits;