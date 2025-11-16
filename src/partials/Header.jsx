import { Link } from "react-router-dom";
import logo from "/img/logo.png";
import MobileDrawer from "./MobileDrawer";
import { List, ListItemButton } from "@mui/material";

import { useAuth } from "../context/AuthContext";
import { LuCircleUser, LuLogIn, LuLogOut, LuSearch, LuUserPlus } from "react-icons/lu";

export default function Header() {
    return (
        <header className="md:hidden bg-(--color-bg-primary-dark) h-25 flex justify-between items-center p-4 pl-1 pr-1 z-10 sticky top-0">
            <LogoFututePlus />
            <MobileDrawer />
        </header>
    );
}

export function LogoFututePlus({ customClass }) {
    return (
        <>
            <h1 className={`w-60 ${customClass}`}>
                <Link to={"/"}>
                    <img className="w-full" src={logo} alt="FUTURO+" />
                </Link>
            </h1>
        </>
    );
}

export function OptionsMenu() {
    const { user } = useAuth();
    const getOptionsMenu = () => {
        if (user) {
            return (
                <>
                    <ListItemButton
                        sx={{
                            borderRadius: 2,
                        }}
                        key={"Novas recomendações"}
                    >
                        <LuSearch className="mr-3" />
                        <Link to={"/candidato/recomendacao"}>Novas recomendações</Link>
                    </ListItemButton>

                    <ListItemButton
                        sx={{
                            borderRadius: 2,
                        }}
                        key={"Sair"}
                    >
                        <LuLogOut className="mr-3" />
                        <Link to={"/candidato/logout"}>Sair</Link>
                    </ListItemButton>
                </>
            );
        }
        return (
                <>
                    <ListItemButton
                        sx={{
                            borderRadius: 2,
                        }}
                        key={"Entrar"}
                    >
                        <LuLogIn className="mr-3" />
                        <Link to={"/candidato/login"}>Entrar</Link>
                    </ListItemButton>

                    <ListItemButton
                        sx={{
                            borderRadius: 2,
                        }}
                        key={"Começar agora"}
                    >
                        <LuUserPlus className="mr-3" />
                        <Link to={"/candidato/registo"}>Começar agora</Link>
                    </ListItemButton>
                </>
            );
    };
    const t = <LuCircleUser />;
    return (
        <>
            <List>{getOptionsMenu()}</List>
        </>
    );
}
