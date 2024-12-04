import GameLogic from "./index.tsx";
import {useParams} from "react-router";
import SignalRComponent from "./SingalRComponent.tsx";
const GoToLobby = () => {
    const { lobbyId } = useParams();

    return (
        <>
            <SignalRComponent />
            <GameLogic />
        </>
    );
};

export default GoToLobby;