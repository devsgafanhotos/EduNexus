import Footer from "../partials/Footer";
import Header from "../partials/Header";
import Button from "../components/Button";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AuthLayout({ children }) {
    return (
        <div>
            <Header
            authHeader={true}
                navOptionsMenu={
                    <>
                        <Button
                            to={"/candidato/logout"}
                            transparent={true}
                            customClass="w-full sm:w-auto text-(--color-text-primary-white)"
                            border={"var(--border-dark)"}
                        >
                            Sait
                        </Button>

                        <Button
                            to={"/recomendacoes"}
                            customClass="w-full sm:w-auto"
                        >
                            Buscar Recomendações
                        </Button>

                        <Link to={"/candidato/perfil"}>
                            <FaUser />
                        </Link>
                    </>
                }
            />
            {children}
            <Footer />
        </div>
    );
}
