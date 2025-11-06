import Button from "../components/Button";
import Footer from "./Footer";
import Header from "./Header";

export default function PrincipalLayout({ children }) {
    return (
        <>
            <Header>
                <li>
                    <Button type={"link"} to={"/home"}>
                        Entrar
                    </Button>
                </li>
                <li>
                    <Button
                        type={"link"}
                        to={"/"}
                        customStyle={{ border: "1px solid var(--color-neutral)", background: "none" }}
                    >
                        Registrar-se
                    </Button>
                </li>
            </Header>
            <main className="h-screen pl-20 grid md:grid-cols-2" data-theme="light">
                {children}
            </main>
            <Footer />
        </>
    );
}
