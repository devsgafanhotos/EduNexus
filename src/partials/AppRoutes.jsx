import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import Logout from "../pages/Logout";
import NotFound from "../pages/NotFound";
import ServerError from "../pages/ServerError";

import { useAuth } from "../context/AuthContext";
import RegistroPage from "../pages/RegistroPage";

export default function AppRoutes() {
    const { appState } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                {appState === "error" ? (
                    <Route path="*" element={<ServerError />} />
                ) : (
                    <>
                        <Route path="/" element={<Home />} />

                        <Route path="/home" element={<LandingPage />} />

                        <Route
                            path="/candidato/login"
                            element={<LoginPage />}
                        />

                        <Route
                            path="/candidato/registo"
                            element={<RegistroPage />}
                        />

                        <Route path="/candidato/logout" element={<Logout />} />

                        <Route path="/error" element={<ServerError />} />

                        <Route path="*" element={<NotFound />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}
