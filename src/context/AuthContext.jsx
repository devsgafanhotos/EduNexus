import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
const apiURL = import.meta.env.VITE_API_URL;
const AuthContext = createContext(null);

import { DispatchAlert } from "./AlertContext";
import { showAlert } from "../utils/alertActions";
import { LoaderBounce } from "../components/Modal/Loader";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [recomendacoes, setRecomendacoes] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [appState, setAppState] = useState("loading"); // error || loading || done
    const dispatchAlert = useContext(DispatchAlert);

    const api = axios.create({
        baseURL: apiURL,
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    });

    // Lógica para o login manual
    async function login(url, user) {
        try {
            const res = await api.post(url, user);

            setUser(res.data.user);
            setAccessToken(res.data.access_token);
            showAlert(dispatchAlert, res.data.message);
            return res.data;
        } catch (error) {
            showAlert(
                dispatchAlert,
                error.response?.data.message || error.message,
                "error"
            );
            return error;
        }
    }

    // Lógica para buscar as recomendações
    async function buscarRecomendacoes(url = "/agents/recomendacao") {
        try {
            const res = await api.get(url);

            setRecomendacoes(res.data.data);
            return res.data.data;
        } catch (error) {
            console.warn(error.response?.data.message || error.message);
            return error;
        }
    }

    // Lógica para o logout manual
    async function logout(url = "candidato/logout") {
        const res = await api.post(url);
        setUser(null);
        setAccessToken(null);
        showAlert(dispatchAlert, res.data.message);

        return res;
    }

    // Refresh token automático
    async function refresh() {
        try {
            const res = await api.post("/auth/refresh");
            setAccessToken(res.data.access_token);
            setUser(res.data.user);
            return res.data;
        } catch (err) {
            console.warn("Refresh token inválido ou expirado");
            logout();
        }
    }

    //showAlert(dispatchAlert, "ola")
    // Restauração de sessão automático, logo que a app carregar chamamos esta função
    async function restoreSession() {
        try {
            const res = await api.post("/auth/refresh");

            setUser(res.data.user);
            setAccessToken(res.data.access_token);
            showAlert(dispatchAlert, res.data.message);
            setAppState("done");

            return res;
        } catch (err) {
            setUser(null);
            if (err.code === "ERR_NETWORK") {
                showAlert(dispatchAlert, err.message, "error");
                return setAppState("error");
            }

            setAppState("done");
            return err;
        }
    }

    // Interceptamos todas as requisições para garantir o envio do access_token
    useEffect(() => {
        const interceptor = api.interceptors.request.use(async (config) => {
            if (!accessToken) return config;
            config.headers.Authorization = `Bearer ${accessToken}`;
            return config;
        });

        return () => api.interceptors.request.eject(interceptor);
    }, [accessToken]);

    // Interceptamos todas as respostas, para o caso de receber um status 401 e fazer o refresh do access_token automáticamente.
    useEffect(() => {
        const interceptor = api.interceptors.response.use(
            (res) => res,
            async (err) => {
                if (err.response?.status === 401) {
                    const res = await refresh();
                    if (res.access_oken) {
                        err.config.headers.Authorization = `Bearer ${res.access_oken}`;
                        showAlert(dispatchAlert, res.message, "done");
                        return api(err.config);
                    } else {
                        showAlert(dispatchAlert, res?.data.message, "warning");
                    }
                }
                return Promise.reject(err);
            }
        );

        return () => api.interceptors.response.eject(interceptor);
    }, [accessToken]);

    /*// Interceptamos todas as respostas, para o caso de receber um status 403 e redirecionar para a tela de login.
    useEffect(() => {
        const interceptor = api.interceptors.response.use(
            (res) => res,
            async (err) => {
                if (err.response?.status === 403) {
                    setAppState(false);
                }
                return Promise.reject(err);
            }
        );

        return () => api.interceptors.response.eject(interceptor);
    }, []);*/

    // Restauramos a sessão ao carregar app
    useEffect(() => {
        restoreSession();
        buscarRecomendacoes();
    }, []);

    if (appState === "loading") {
        <LoaderBounce />;
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                accessToken,
                login,
                logout,
                appState,
                api,
                recomendacoes,
                buscarRecomendacoes,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

/**
 * @returns user, accessToken, login, logout, appState, api
 */
export function useAuth() {
    return useContext(AuthContext);
}
