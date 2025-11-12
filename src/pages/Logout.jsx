import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LoaderBounce } from "../components/Modal/Loader";

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
            <section className="h-[90vh] flex items-center justify-center col-span-2">
                <LoaderBounce />
            </section>
        );
    }
}
