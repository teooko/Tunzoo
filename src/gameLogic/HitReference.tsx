import HitQualityAnimation from "./HitQualityAnimation.tsx";
import {motion} from "framer-motion";
import {HitQuality} from "../../lib/types.ts";
import {useAnimationStore} from "./Stores/animationStore.tsx";
import {useScoringStore} from "./Stores/scoringStore.tsx";
import {useHitQualityAnimations} from "./useHitQualityAnimations.tsx";

const HitReference = () => {
    const {shadow} = useAnimationStore((state) => state);
    const {hitQuality} = useScoringStore(state => state);

    useHitQualityAnimations();
    const addShadow = (hitQuality) => {
        if(shadow && hitQuality === HitQuality.Perfect)
            return "0px 0px 50px 10px #50DD49";
        else if(shadow && hitQuality === HitQuality.Good)
            return "0px 0px 50px 10px #DBCA11";
        return "0px 0px 5px #6D38E0";
    }
    return (
        <motion.div style={{fontSize: 30,
            borderRadius: "100px",
            marginLeft: "160px",
            width: "80px",
            height: "80px",
            position: "absolute",
            backgroundColor: "white"}} animate={{ boxShadow: addShadow(hitQuality)}}
                    transition={{ duration: 0.5 }}>
            <HitQualityAnimation />
        </motion.div>
    );
};

export default HitReference;