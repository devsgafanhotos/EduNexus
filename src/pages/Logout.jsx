import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Modal/Loader";

export default function Logout() {
    const [state, setState] = useState("loading");
    const { logout, user } = useAuth();

    useEffect(() => {
        const Logout = async () => {
            const res = await logout();            
            if (res.data.success) {
                setState("done");
            }
        }
        Logout();
    }, []);

    if (state === "done") {
        return (
            <>
                <Navigate to="/home" replace />
            </>
        );
    }

    if (state === "loading") {
        return (
            <section className="h-screen flex items-center justify-center flex-col gap-8">
                <Loader />
            </section>
        );
    }
}
