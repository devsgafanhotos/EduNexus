import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Button from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Forma({ children, handleSubmit, textButton }) {
    const [formState, setFormState] = useState("typing");
    let extraInfo;

    if (textButton === "Entrar") {
        extraInfo = (
            <Link to={"/candidato/registo"} className="text-center">
                Não tens conta?{" "}
                <span className="underline pl-1"> Criar uma.</span>
            </Link>
        );
    } else if (textButton === "Cadastrar-se") {
        extraInfo = (
            <Link to={"/candidato/login"} className="text-center">
                Já tens conta? <span className="underline pl-1"> Entrar.</span>
            </Link>
        );
    }

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
                handleSubmit(e, setFormState);
            }}
        >
            {children}
            <Button
                customClass={
                    "rounded-[1.5rem] flex items-center justify-center gap-2 p-3"
                }
            >
                {formState === "submiting" && (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                )}
                {textButton}
            </Button>

            {extraInfo && extraInfo}
        </form>
    );
}

export function Input({
    type = "text",
    placeholder,
    name,
    id,
    customClass,
    value,
    handleChange,
    required,
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            className={`p-3 pl-4 rounded-3xl outline-none ${customClass}`}
            style={{ border: "var(--border)" }}
            required={required}
            value={value}
            onChange={(e) => handleChange(e)}
        />
    );
}

export function FormPage({ children }) {
    return (
        <div className="min-h-[70vh] md:min-h-[95vh] flex flex-col justify-center">
            {children}
        </div>
    );
}
