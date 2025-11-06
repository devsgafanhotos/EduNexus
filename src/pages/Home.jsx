import { Navigate } from "react-router-dom";

import AuthLayout from "../Layout/AuthLayout";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import LoaderSpin from "../components/Modal/Loader";

export default function Home({}) {
    const { user, appState } = useAuth();

    if (!user && (appState !== "loading")) {        
        return <Navigate to="/home" replace />;
    }

    if (appState === "loading") {
        return (
            <section className="h-[90vh] flex items-center justify-center">
                <LoaderSpin />
            </section>
        );
    }

    return (
        <AuthLayout>
            <main className=" min-h-screen grid gap-10 mb-8">
                <h1 className="text-2xl font-bold">Página Principal</h1>
                <Button>Go</Button>
            </main>
        </AuthLayout>
    );
}
