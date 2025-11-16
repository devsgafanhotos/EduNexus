import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";
import { LoaderBounce } from "../components/Modal/Loader";
import Forma, { Input } from "../components/Form";

export default function Recomendacao({}) {
    const { user, appState, api } = useAuth();
    const [formData, setFormData] = useState({
        area: "",
        nivel: "",
        localidade: "",
    });
    const navigate = useNavigate();


    function handleSubmit(e, setFormState) {
        e.preventDefault();

        setFormState("submiting");

        const BuscarRecomendacao = async () => {
            try {
                const res = await api.post("/agents/recomendacao", {formData, user});
                setFormState("done");
                navigate("/candidato/resultado", { state: { data: res.data } });
            } catch (error) {
                setFormState("typing");
            }
        };
        BuscarRecomendacao();
    }

    if (!user) {
        return <Navigate to="/home" replace />;
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
                                    area: e.target.value,
                                });
                            }}
                            value={formData.area}
                            placeholder={"Qual a sua Área de interesse?"}
                            required={true}
                        />
                        <select
                            value={formData.nivel}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    nivel: e.target.value,
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
                            value={formData.localidade}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    localidade: e.target.value,
                                })
                            }
                            required
                            className={`p-3 pl-4 rounded-3xl outline-none`}
                            style={{ border: "var(--border)" }}
                        >
                            <option disabled value="">
                                Selecione a Localidade
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
