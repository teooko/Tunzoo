import {useHitsStore} from "./hitsStore.tsx";
import {useScoringStore} from "./scoringStore.tsx";
import {motion} from "framer-motion";

const IncomingHits = () => {
    const { removeVisibleHit } = useHitsStore((state) => state);
    const { resetCombo, updateHitQuality } = useScoringStore((state) => state);
    const visibleHits = useHitsStore((state) => state.visibleHits);

    const handleHitEndReached = (hit: number) => {
        resetCombo();
        updateHitQuality("miss");
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
                    transition={{ duration: 1.1 }}
                    onAnimationComplete={() => handleHitEndReached(hit)}
                >
                    <div
                        style={{
                            fontSize: 30,
                            border: "1px solid black",
                            borderRadius: "100px",
                            width: "80px",
                            height: "80px",
                            position: "absolute",
                            backgroundColor: "red",
                        }}
                    />
                </motion.div>
            ))}
        </>
    );
};

export default IncomingHits;