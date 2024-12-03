import './App.css';
import Menu from "./scenes/Menu.tsx";
import GameLogic from "./gameLogic";
import {Route, Routes} from "react-router";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/solo" element={<GameLogic />} />
            </Routes>
        </>
    );
}

export default App;
