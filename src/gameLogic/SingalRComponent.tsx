import React, { useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import {URLS} from "../../lib/constants.ts";

const SignalRComponent = (lobbyId: string) => {
    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl(`${URLS.WS_URL}/hubs/lobby`, {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets,
            })
            .configureLogging(signalR.LogLevel.Information)
            .build();

        const start = async () => {
            try {
                await connection.start();
                console.log("SignalR Connected.");
            } catch (err) {
                console.log(err);
                setTimeout(start, 5000);
            }
        };

        connection.onclose(async () => {
            await start();
        });

        start().then(async () => {
            try {
                await connection.send("JoinLobby", lobbyId);
                console.log("lobby joined");
            }
            catch (e) {
                console.log(e);
            }
        });

        return () => {
            connection.stop();
        };
    }, []);

    return <div>SignalR Connection</div>;
};

export default SignalRComponent;
