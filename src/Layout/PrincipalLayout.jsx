import { FaSignInAlt } from "react-icons/fa";
import Footer from "../partials/Footer";
import Header, { ItemMenu, Title } from "../partials/Header";

export default function PrincipalLayout({ children }) {
    return (
        <>
            <Header
                navOptionsMenu={
                    <>
                        <ItemMenu to={"/candidato/login"}>
                            <FaSignInAlt />
                            Entrar
                        </ItemMenu>

                        <ItemMenu to={"/candidato/registo"}>
                            <FaSignInAlt />
                            Começar agora
                        </ItemMenu>
                    </>
                }
            />
            {children}
            <Footer />
        </>
    );
}
