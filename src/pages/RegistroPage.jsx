import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import Card from "../components/Card";

import { DispatchAlert } from "../context/AlertContext";
import { showAlert } from "../utils/alertActions";
import Forma, { FormPage, Input } from "../components/Form";
import { useAuth } from "../context/AuthContext";
import { LoaderBounce } from "../components/Modal/Loader";

export default function RegistroPage({}) {
    const dispatchAlert = useContext(DispatchAlert);
    const [state, setState] = useState("typing");
    const { api, login, user } = useAuth();

    const [usuario, setUsuario] = useState({
        email: "",
        senha: "",
        senha_conf: "",
        nome: "",
        telefone: "",
    });

    function handleSubmit(e, setFormState) {
        e.preventDefault();
        if (
            !usuario.email ||
            !usuario.senha ||
            !usuario.nome ||
            !usuario.senha_conf
        ) {
            return showAlert(
                dispatchAlert,
                "Preencha todos os campos!",
                "error"
            );
        }

        if (usuario.senha !== usuario.senha_conf) {
            return showAlert(
                dispatchAlert,
                "As senhas não correspondem!",
                "error"
            );
        }

        setFormState("submiting");

        const Login = async (data) => {
            const res = await login("/candidato/login", data);

            if (res.success) {
                setState("done");
                setFormState("done");
            } else {
                setState("typing");
                setFormState("typing");
            }
        };

        const RegistarSe = async () => {
            try {
                const res = await api.post("/candidato/registo", usuario);
                showAlert(dispatchAlert, res.data.message);
                setState("loging");
                Login(usuario);

                return res.data;
            } catch (error) {
                setState("typing");
                setFormState("typing");

                showAlert(
                    dispatchAlert,
                    error.response?.data.message || error.message,
                    "error"
                );

                return error;
            }
        };
        RegistarSe();
    }

    function handleChange(e) {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    if (state === "done" || user) {
        return <Navigate to="/" replace />;
    }

    if (state === "loging") {
        return (
            <section className="h-[90vh] flex items-center justify-center col-span-2">
                <LoaderBounce />
            </section>
        );
    }

    return (
        <FormPage>
            <Card custonClass={"sm:w-[400px] w-[310px] m-auto shadow-2xl"}>
                <h1 className="text-3xl mb-4">Cadastro</h1>
                <Forma handleSubmit={handleSubmit} textButton="Cadastrar-se">
                    <Input
                        placeholder="Nome"
                        name="nome"
                        id="nome"
                        value={usuario.nome}
                        handleChange={(e) => handleChange(e)}
                    />

                    <Input
                        placeholder="Telefone"
                        name="telefone"
                        id="telefone"
                        value={usuario.telefone}
                        handleChange={(e) => handleChange(e)}
                    />

                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        value={usuario.email}
                        handleChange={(e) => handleChange(e)}
                    />

                    <Input
                        type="password"
                        placeholder="Senha"
                        name="senha"
                        id="senha"
                        value={usuario.senha}
                        handleChange={(e) => handleChange(e)}
                    />

                    <Input
                        type="password"
                        placeholder="Confirmar senha"
                        name="senha_conf"
                        id="senha_conf"
                        value={usuario.senha_conf}
                        handleChange={(e) => handleChange(e)}
                    />
                </Forma>
            </Card>
        </FormPage>
    );
}
