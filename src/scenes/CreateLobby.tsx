import {useEffect} from "react";
import axios from "axios";
import {URLS} from "../../lib/constants.ts";
import {useNavigate} from "react-router";

const CreateLobby = () => {
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${URLS.API_URL}/lobby`)
            .then((response) => navigate(`/lobby/${response.data}`))
            .catch((error) => console.error('Error:', error));
    }, []);
    
    return (
        <div>
            Lobby
        </div>
    );
};

export default CreateLobby;