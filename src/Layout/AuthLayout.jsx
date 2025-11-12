import Footer from "../partials/Footer";
import Header, { ItemMenu, Title } from "../partials/Header";
import { FaSearch, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AuthLayout({ children }) {
    return (
        <>
            <Header
                navOptionsMenu={
                    <>
                        <ItemMenu to={"/recomendacoes"}>
                            <FaSearch />
                            Buscar Recomendações
                        </ItemMenu>

                        <ItemMenu to={"/candidato/perfil"}>
                            <FaUser />
                            Perfil
                        </ItemMenu>
                        <ItemMenu to={"/candidato/logout"}>
                            <FaSignOutAlt />
                            Sait
                        </ItemMenu>
                    </>
                }
            />
            {children}
            <Footer />
        </>
    );
}
