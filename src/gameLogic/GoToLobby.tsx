import GameLogic from "./index.tsx";
import {useParams} from "react-router";
import {useEffect} from "react";

const GoToLobby = () => {
    const { lobbyId } = useParams();
    useEffect(() => console.log(lobbyId), []);
    return (
        <>
            <GameLogic />
        </>
    );
};

export default GoToLobby;