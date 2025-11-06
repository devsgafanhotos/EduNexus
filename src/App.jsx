import "./index.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import { AppRefContext } from "./App.context";

import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const appRef = useRef(null);

    return (
        <div ref={appRef}>
            <AppRefContext value={appRef}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </AppRefContext>
        </div>
    );
}

export default App;
