import './App.css';
import Menu from "./scenes/Menu.tsx";
import GameLogic from "./gameLogic";
import {Route, Routes} from "react-router";
import GoToLobby from "./gameLogic/GoToLobby.tsx";
import CreateLobby from "./scenes/CreateLobby.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/solo" element={<GameLogic />} />
                <Route path="/lobby/:lobbyId" element={<GoToLobby />} />
                <Route path="/lobby/createLobby" element={<CreateLobby />} />
            </Routes>
        </>
    );
}

export default App;
