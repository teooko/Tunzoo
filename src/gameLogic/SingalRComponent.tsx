import React, { useEffect } from "react";
import * as signalR from "@microsoft/signalr";

const SignalRComponent = () => {
    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("ws://localhost:5192/hubs/lobby", {
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

        start();

        return () => {
            connection.stop();
        };
    }, []);

    return <div>SignalR Connection</div>;
};

export default SignalRComponent;
