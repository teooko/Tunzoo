import GameLogic from "./index.tsx";
import {useParams} from "react-router";
import {useEffect} from "react";
import useWebSocket from 'react-use-websocket';
const GoToLobby = () => {
    const { lobbyId } = useParams();
    const socketUrl = 'ws://localhost:5192/hubs/lobby';
    
    const {sendMessage} = useWebSocket(socketUrl, {
        onOpen: () => sendMessage("{\"protocol\": \"json\", \"version\": 1}")
    })
    useEffect(() => console.log(lobbyId), []);
    return (
        <>
            <GameLogic />
        </>
    );
};

export default GoToLobby;