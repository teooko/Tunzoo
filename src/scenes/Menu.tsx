import {motion} from "framer-motion";
import '../App.css';
import OverlayMenu from "./OverlayMenu.tsx";
import CanvasMenu from "./CanvasMenu.tsx";
const Menu = () => {
    return (
        <div>
            <motion.div
                initial={{ backgroundColor: '#62149B' }}
                animate={{ backgroundColor: ['#03CEA4', '#B295FF', '#62149B'] }}
                transition={{
                    duration: 10,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'mirror',
                }}
                className="h-screen w-screen relative"
            >
                <OverlayMenu />
                <CanvasMenu />
            </motion.div>
        </div>
    );
}

export default Menu;
