import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { useAuth } from "../context/AuthContext";
import { LoaderBounce } from "../components/Modal/Loader";
import { Navigate } from "react-router-dom";
import RecomendacaoCard from "./RecomendacaoCard";

export default function ResultadoRecomendacao() {
    const { user, api } = useAuth();
    const [recomendacao, setRecomendacao] = useState("loading");

    useEffect(() => {
        const id = window.location.href.split("/")[5];
        async function getRecomendacao() {
            try {
                const { data } = await api.get(`/agents/recomendacao?r=${id}&user=${user.id}`);

                setRecomendacao(data.data);
            } catch (error) {
                setRecomendacao("error");
                console.warn(error.response?.data.message || error.message);
                return error;
            }
        }
        getRecomendacao();
    }, []);

    if (!user) {
        return <Navigate to="/candidato/login" replace />;
    }

    if (recomendacao === "loading") {
        return (
            <section className="h-[90vh] flex items-center justify-center col-span-2">
                <LoaderBounce />
            </section>
        );
    }

    if (recomendacao === "error") {
        return (
            <div className="min-h-[80vh] p-2 md:p-6">
                <section className="p-3 shadow mb-8 rounded-xl">
                    <h2 className="flex justify-between items-center text-xl mb-4">
                        🔹Recomendaçao inexistente
                        <div className="pl-2 flex items-center gap-1 text-(--color-text-muted) text-[.8rem]">
                            <SlCalender />
                            <p className="">--</p>
                        </div>
                    </h2>
                    <p>Tente novamento mais tarde!</p>
                </section>
            </div>
        );
    }

    return(
        <RecomendacaoCard dados={recomendacao} />
    );
}
