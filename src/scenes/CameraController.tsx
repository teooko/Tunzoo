import {useFrame} from "@react-three/fiber";

const CameraController = ({ mousePosition }: { mousePosition: {
        x: number;
        y: number;
    }
}) => {
    useFrame(({ camera }) => {
        camera.position.x += (0.2 * mousePosition.x - camera.position.x) * 0.10;
        camera.position.y += (0.2 * mousePosition.y - camera.position.y) * 0.10;
        camera.position.z = 5;
        camera.lookAt(0, 0, 0);
    });
    return null;
};

export default CameraController;