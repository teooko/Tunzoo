import {useEffect} from "react";
import axios from "axios";
import {URLS} from "../../lib/constants.ts";

const CreateLobby = () => {
    
    useEffect(() => {
        axios.get(`${URLS.API_URL}/lobby`)
            .then((response) => console.log(response.data))
            .catch((error) => console.error('Error:', error));
    }, []);
    
    return (
        <div>
            Lobby
        </div>
    );
};

export default CreateLobby;