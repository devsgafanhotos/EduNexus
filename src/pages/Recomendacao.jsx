import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";
import { LoaderBounce } from "../components/Modal/Loader";
import Forma, { Input } from "../components/Form";
import { showAlert } from "../utils/alertActions";
import { DispatchAlert } from "../context/AlertContext";

export default function Recomendacao({}) {
    const dispatchAlert = useContext(DispatchAlert);
    const { user, appState, api } = useAuth();
    const [appFormState, setAppFormState] = useState("typing");
    const [recomendacaoState, setRecomendacaoState] = useState(null);
    const [formData, setFormData] = useState({
        interesse: "",
        nivel_educacao: "",
        regiao: "",
    });

    function handleSubmit(e, setFormState) {
        e.preventDefault();

        setFormState("submiting");

        const BuscarRecomendacao = async () => {
            try {
                const { data } = await api.post("/agents/recomendacao", {
                    formData,
                    user,
                });
                setFormState("done");
                setAppFormState("done");
                setRecomendacaoState(
                    data.recomendacaoCriada,
                );
            } catch (error) {
                showAlert(
                    dispatchAlert,
                    error.response?.data.message || error.message
                );
                setFormState("error");
            }
        };
        BuscarRecomendacao();
    }

    if (appFormState === "done") {
        return (
            <Navigate
                to={`/candidato/recomendacao/${recomendacaoState.id}`}
                replace
            />
        );
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

    return (
        <>
            <h1 className="text-2xl pl-4 pt-4 pb-4 mb-3">
                Comece agora uma nova trilha, rumo ao profissionalismo!
            </h1>
            <div className="min-h-[50vh] flex">
                <Card
                    custonClass={
                        "sm:w-[400px] w-[310px] m-auto shadow-2xl bg-transparent"
                    }
                >
                    <Forma
                        textButton={"Buscar recomendações"}
                        handleSubmit={handleSubmit}
                    >
                        <Input
                            type={"text"}
                            handleChange={(e) => {
                                setFormData({
                                    ...formData,
                                    interesse: e.target.value,
                                });
                            }}
                            value={formData.interesse}
                            placeholder={"Qual a sua Área de interesse?"}
                            required={true}
                        />
                        <select
                            value={formData.nivel_educacao}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    nivel_educacao: e.target.value,
                                })
                            }
                            required
                            className={`p-3 pl-4 rounded-3xl outline-none`}
                            style={{ border: "var(--border)" }}
                        >
                            <option disabled value="">
                                Nível Acadêmico
                            </option>
                            <option value="medio">Ensino Médio</option>
                            <option value="licenciatura">Licenciatura</option>
                            <option value="mestrado">Mestrado</option>
                        </select>
                        <select
                            value={formData.regiao}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    regiao: e.target.value,
                                })
                            }
                            required
                            className={`p-3 pl-4 rounded-3xl outline-none`}
                            style={{ border: "var(--border)" }}
                        >
                            <option disabled value="">
                                Selecione a regiao
                            </option>
                            <option value="luanda">Luanda</option>
                            <option value="uige">Uíge</option>
                            <option value="benguela">Benguela</option>
                        </select>
                    </Forma>
                </Card>
            </div>
        </>
    );
}
