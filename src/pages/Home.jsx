import { motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { LoaderBounce } from "../components/Modal/Loader";
import { SlCalender } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";
import Card from "../components/Card";
import { VagasDeEmprego } from "./RecomendacaoCard";
import { useEffect } from "react";

export default function Home({}) {
    const { user, appState, recomendacoes, buscarRecomendacoes } = useAuth();

    if (!user) {
        return <Navigate to="/home" replace />;
    }

    if (appState === "loading") {
        return (
            <section className="h-[90vh] flex items-center justify-center col-span-2">
                <LoaderBounce />
            </section>
        );
    }

    function RecomendacoesRecentes() {
        const listRecomendacoes = recomendacoes?.length ? (
            recomendacoes?.map((r) => {
                return (
                    <li
                        className="list-none p-2 rounded-xl hover:scale-101 hover:bg-(--color-surface-soft) transition-all"
                        style={{ border: "var(--border)" }}
                    >
                        <Link to={`/candidato/recomendacao/${r.id}`}>
                            <p className="">{r.titulo}</p>
                            <div className="pl-2 flex items-center gap-1 text-(--color-text-muted) text-[.8rem]">
                                <SlCalender />
                                <p className="">{r.data_cadastro}</p>
                            </div>
                        </Link>
                    </li>
                );
            })
        ) : (
            <li
                className="list-none p-2 rounded-xl hover:scale-101 hover:bg-(--color-surface-soft) transition-all"
                style={{ border: "var(--border)" }}
            >
                Nenhuma recomendação ainda!
            </li>
        );

        return (
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {listRecomendacoes}
            </ul>
        );
    }

    function EmpregosRecomendados() {
        const listaEmpregos = recomendacoes?.length ? (
            <VagasDeEmprego rec={recomendacoes[0].recomendacao} />
        ) : (
            <li
                className="list-none p-2 rounded-xl hover:scale-101 hover:bg-(--color-surface-soft) transition-all"
                style={{ border: "var(--border)" }}
            >
                Nenhum emprego ainda!
            </li>
        );

        return <>{listaEmpregos}</>;
    }

    useEffect(() => {
        buscarRecomendacoes();
    }, []);

    const getName = (nome) => nome.split(" ")[0];
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="min-h-[80vh]">
                <h1 className="text-2xl pl-4 pt-4 pb-4 font-bold">
                    Olá, {getName(user.nome)} 🤓🖖
                </h1>
                <Card custonClass={"shadow mb-8 ml-4 mr-4 rounded-xl"}>
                    <h2 className="flex justify-between items-center text-2xl mb-4">
                        Recomendacões recentes{" "}
                        <Link to={"/candidato/recomendacao"}>
                            <FaPlus className="text-(--color-primary) text-[1.2rem]" />
                        </Link>
                    </h2>
                    <RecomendacoesRecentes />
                </Card>
                <Card custonClass={"shadow mb-8 ml-4 mr-4 rounded-xl"}>
                    <h2 className="text-2xl mb-4">Empregos para si</h2>
                    <EmpregosRecomendados />
                </Card>
            </div>
        </motion.div>
    );
}
