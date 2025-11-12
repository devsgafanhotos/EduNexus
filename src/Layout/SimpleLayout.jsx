import { FaSignInAlt } from "react-icons/fa";
import Header, { ItemMenu, Title } from "../partials/Header";

export default function SimpleLayout({ children }) {
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
        </>
    );
}
