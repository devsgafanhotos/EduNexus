import { List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "/img/logo.png";
import { OptionsMenu } from "./Header";

export default function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col w-64 h-screen bg-(--color-bg-primary-dark) text-white p-4">
            <h1 className="w-60 mb-6 -ml-4 -mt-4 "> 
                <Link to={"/"}>
                    <img className="w-full" src={logo} alt="FUTURO+" style={{objectFit: "cover"}} />
                </Link>
            </h1>
            <OptionsMenu />
        </aside>
    );
}
