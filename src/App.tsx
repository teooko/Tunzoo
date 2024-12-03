import './App.css';
import Menu from "./scenes/Menu.tsx";
import GameLogic from "./gameLogic";
import {Route, Routes} from "react-router";
import GoToLobby from "./gameLogic/GoToLobby.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/solo" element={<GameLogic />} />
                <Route path="/lobby/:lobbyId" element={<GoToLobby />} />
            </Routes>
        </>
    );
}

export default App;
