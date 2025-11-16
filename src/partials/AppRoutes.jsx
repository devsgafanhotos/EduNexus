import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import Logout from "../pages/Logout";
import NotFound from "../pages/NotFound";

import RegistroPage from "../pages/RegistroPage";
import Recomendacao from "../pages/Recomendacao";
import AppLayout from "../Layout/AppLayout";
import ResultadoRecomendacao from "../pages/ResultadoRecomendacao";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/home" element={<LandingPage />} />

                    <Route
                        path="/candidato/recomendacao"
                        element={<Recomendacao />}
                    />

                    <Route
                        path="/candidato/recomendacao/:id"
                        element={<ResultadoRecomendacao />}
                    />

                    <Route path="/candidato/login" element={<LoginPage />} />

                    <Route
                        path="/candidato/registo"
                        element={<RegistroPage />}
                    />

                    <Route path="/candidato/logout" element={<Logout />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppLayout>
        </BrowserRouter>
    );
}
