import { Link, Navigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import AuthLayout from "../Layout/AuthLayout";
import Button from "../components/Button";
import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";
import { LoaderBounce } from "../components/Modal/Loader";
import { FaPlus } from "react-icons/fa";
import { DispatchAlert } from "../context/AlertContext";
import { showAlert } from "../utils/alertActions";

export default function Home({}) {
    const { user, appState, api } = useAuth();
    const [whatShow, setWhatShow] = useState("trilhas");

    const [recomendacoesState, setRecomendacoesState] = useState("loading");
    const [empregosState, setEmpregosState] = useState("loading");

    const dispatchAlert = useContext(DispatchAlert);

    //Efeito colateral para buscar empregos e recomendações
    useEffect(() => {
        getEmpregos();
        getRecomendacoes();
    }, []);

    // Lógica para realizar a busca de Empregos
    async function getRecomendacoes(
        url = "/agents/recomendacao",
        preferencias = {}
    ) {
        try {
            const res = await api.post(url, preferencias);
            res.data.recomendacoes.length
                ? setRecomendacoesState(res.data.recomendacoes)
                : setRecomendacoesState("empty");
            return res.data;
        } catch (error) {
            setRecomendacoesState("empty");
            showAlert(
                dispatchAlert,
                error.response?.data.message || error.message,
                "error"
            );
            return error;
        }
    }

    // Lógica para realizar a busca de Empregos
    async function getEmpregos(url = "/agents/empregos") {
        try {
            const res = await api.post(url);
            res.data.empregos.length
                ? setEmpregosState(res.data.empregos)
                : setEmpregosState("empty");
            return res.data;
        } catch (error) {
            setEmpregosState("empty");
            showAlert(
                dispatchAlert,
                error.response?.data.message || error.message,
                "error"
            );
            return error;
        }
    }

    function ListaEmpregos() {
        let itemEmprego;
        if (empregosState?.map) {
            itemEmprego = empregosState.map((emprego) => {
                return (
                    <CardItem action={"Cadastrar-se"}>
                        <p className="font-semibold">{emprego.Titulo}</p>
                        <p>{emprego.Empresa}</p>
                    </CardItem>
                );
            });
        }

        if (empregosState === "loading") {
            return <LoaderBounce />;
        }

        if (empregosState === "empty") {
            return <>Sem empregos ainda!</>;
        }

        return itemEmprego;
    }

    function ListaRecomendacoes({ children }) {
        let itemRecomendacao;
        if (recomendacoesState?.map) {
            itemRecomendacao = recomendacoesState.map((recomendacao) => {
                return (
                    <CardItem action={"Detalhes"} to={recomendacao.Link}>
                        <p className="font-semibold">{recomendacao.Titulo}</p>
                    </CardItem>
                );
            });
        }

        if (recomendacoesState === "loading") {
            return <LoaderBounce />;
        }

        if (recomendacoesState === "empty") {
            return <>Sem recomendações ainda!</>;
        }

        return itemRecomendacao;
    }

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

    const getName = (nome) => nome.split(" ")[0];

    return (
        <AuthLayout>
            <main className="grid mb-8 p-2">
                <h1 className="text-2xl pl-4 pt-4 pb-4 font-bold">
                    Olá, {getName(user.nome)} 🤓🖖
                </h1>
                <section className="grid gap-2 p-4 pt-0 m-2 mt-0 justify-between grid-cols-2">
                    <CardDashboard>
                        Trilhas Curriculares
                        <div
                            className={`text-(--color-primary) text-center text-3xl font-bold p-1 rounded-[.70rem]`}
                        >
                            5
                        </div>
                    </CardDashboard>
                    <CardDashboard>
                        Candicaturas Feitas
                        <div
                            className={`text-(--color-green) text-center text-3xl font-bold p-1 rounded-[.70rem]`}
                        >
                            5
                        </div>
                    </CardDashboard>
                </section>

                <section className="grid gap-2  p-1 mt-3 rounded-xl shadow-xl">
                    <div
                        className="p-2 pr-3 pl-3 rounded-md"
                        style={{ border: "var(--border)" }}
                    >
                        <select
                            className="outline-none w-full"
                            onChange={(e) => {
                                setWhatShow(e.target.value);
                            }}
                        >
                            <option
                                className="text-(--color-bg-primary-dark)"
                                value="trilhas"
                            >
                                Trilhas
                            </option>
                            <option
                                className="text-(--color-bg-primary-dark)"
                                value="empregos"
                            >
                                Empregos
                            </option>
                        </select>
                    </div>
                    <section className="flex flex-col gap-2 p-2 pb-6">
                        {whatShow === "trilhas" ? (
                            <>
                                <h2 className="text-2xl mb-3.5 flex items-center justify-between">
                                    As suas trilhas recentes
                                    <Link to={"/candidato/recomendacao"}>
                                        <FaPlus className="text-xl mr-2 text-(--color-primary)" />
                                    </Link>
                                </h2>
                                <ListaRecomendacoes />
                            </>
                        ) : (
                            <>
                                <h2 className="text-2xl mb-3.5 flex items-center justify-between">
                                    Empregos sugeridos para ti
                                </h2>
                                <ListaEmpregos />
                            </>
                        )}
                    </section>
                </section>
            </main>
        </AuthLayout>
    );
}

function CardItem({ children, action, to }) {
    const classButton = action === "Detalhes" ? "bg-green-500 w-20" : "w-30";
    return (
        <>
            <Card custonClass={"grid rounded-md gap-2 bg-transparent"}>
                {children}
                <div className="text-right">
                    {!to ? (
                        <Button
                            customClass={`${classButton} text-white rounded-md`}
                        >
                            {action}
                        </Button>
                    ) : (
                        <a
                            href={to}
                            target="_blank"
                            className={`${classButton} p-2 text-white rounded-md`}
                        >
                            {action}
                        </a>
                    )}
                </div>
            </Card>
        </>
    );
}

function CardDashboard({ children }) {
    return (
        <Card
            custonClass={
                "flex flex-col justify-center text-center items-center rounded-md"
            }
        >
            {children}
        </Card>
    );
}
