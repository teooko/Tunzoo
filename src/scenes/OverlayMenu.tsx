import React from 'react';
import Button from "./Button.tsx";

const OverlayMenu = () => {
    return (
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black z-20"
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 200px 100%)' }}>

            <div className="flex flex-col items-center justify-center h-full space-y-4">
                <img src={"public/assets/tunzooLogo.png"} width={400} height={400} />
                <Button label={"Play Solo"} />
                <Button label={"Create Lobby"} />
            </div>
        </div>
    );
};

export default OverlayMenu;