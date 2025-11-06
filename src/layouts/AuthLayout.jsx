import Button from "../components/Button";
import Footer from "./Footer";
import Header from "./Header";

export default function PrincipalLayout({ children }) {
    return (
        <>
            <Header>
                <li>
                    <Button type={"link"} to={"/home"}>
                        Sair
                    </Button>
                </li>
                <li>
                    <Button
                        type={"link"}
                        to={"/"}
                        customClass="bg-(--color-text)"
                        customStyle={{ color: "var(--color-bg)" }}
                    >
                        Buscar Recomendações
                    </Button>
                </li>
            </Header>
            <main className="h-screen p-1.5 grid grid-cols-2 scheme-light" data-theme="light">{children}</main>
            <Footer />
        </>
    );
}
