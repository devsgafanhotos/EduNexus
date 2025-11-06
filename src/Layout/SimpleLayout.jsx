import Button from "../components/Button";
import Header from "../partials/Header";

export default function SimpleLayout({ children }) {
    return (
        <>
            <Header
                navOptionsMenu={
                    <>
                        <Button
                            to={"/candidato/login"}
                            transparent={true}
                            customClass="text-(--color-text-primary-white) w-full sm:w-auto"
                            border={"var(--border-dark)"}
                        >
                            Entrar
                        </Button>

                        <Button
                            to={"/candidato/registo"}
                            customClass="w-full sm:w-auto"
                        >
                            Começar agora
                        </Button>
                    </>
                }
            />
            {children}
        </>
    );
}
