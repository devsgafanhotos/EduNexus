import { Fab, Webchat } from "@botpress/webchat";
import { useState } from "react";

function Bot() {
    const [isWebchatOpen, setIsWebchatOpen] = useState(false);
    const toggleWebchat = () => {
        setIsWebchatOpen((prevState) => !prevState);
    };
    return (
        <>
            <Webchat
                clientId="$a03521c1-0aa4-43ed-9cdc-e88793b442e3$" // Your client ID here
                style={{
                    width: "400px",
                    height: "600px",
                    display: isWebchatOpen ? "flex" : "none",
                    position: "fixed",
                    bottom: "90px",
                    right: "20px",
                }}
            />
            <Fab
                onClick={() => toggleWebchat()}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    width: "64px",
                    height: "64px",
                }}
            />
        </>
    );
}

export default Bot;