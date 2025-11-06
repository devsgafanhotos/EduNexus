import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import Card from "../components/Card";
import SimpleLayout from "../Layout/SimpleLayout";

import { DispatchAlert } from "../context/AlertContext";
import { showAlert } from "../utils/alertActions";
import { useAuth } from "../context/AuthContext";
import Forma, { Input } from "../components/Form";

export default function LoginPage({}) {
    const dispatchAlert = useContext(DispatchAlert);
    const [state, setState] = useState("typing");

    const { login, user } = useAuth();

    const [usuario, setUsuario] = useState({ email: "", senha: "" });

    function handleSubmit(e, setFormState) {
        e.preventDefault();
        if (!usuario.email || !usuario.senha) {
            return showAlert(
                dispatchAlert,
                "Preencha todos os campos!",
                "error"
            );
        }

        setFormState("submiting");

        const Login = async () => {
            const res = await login("/candidato/login", usuario);
            if (res.success) {
                setState("done");
                setFormState("done");
            } else {
                setState("typing");
                setFormState("typing");
            }
        };
        Login();
    }

    function handleChange(e) {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    if (state === "done" || user) {
        return <Navigate to="/" replace />;
    }

    return (
        <SimpleLayout>
            <main id="simpleMain">
                <Card custonClass={"sm:w-[400px] w-[320px] m-auto shadow-2xl"}>
                    <h1 className="text-3xl mb-4">Login</h1>
                    <Forma handleSubmit={handleSubmit} textButton="Entrar">
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
                        <Link to={"/candidato/redefinir-senha"}>
                            Esqueceu a senha? <span className="underline pl-1">Redefinir.</span>
                        </Link>
                    </Forma>
                </Card>
            </main>
        </SimpleLayout>
    );
}
