import { List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

import {
    Drawer,
    IconButton,
} from "@mui/material";
import { LuMenu } from "react-icons/lu";

export default function App() {
    return (
        <AppLayout>
            <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-4">Bem-vindo!</h2>
                <p className="text-gray-700">
                    Este é um template responsivo com Material UI + Tailwind.
                </p>
            </div>
        </AppLayout>
    );
}

function AppLayout({ children }) {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Menu lateral fixo */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* Navbar superior */}
                <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-md">
                    <h1 className="text-xl font-bold">Meu Painel</h1>
                    <MobileDrawer />
                </header>

                {/* Conteúdo principal */}
                <main className="flex-1 p-6 h-800 border overflow-auto">{children}</main>
            </div>
        </div>
    );
}

function MobileDrawer() {
    const [open, setOpen] = useState(false);
    const menuItems = ["Início", "Serviços", "Clientes", "Configurações"];

    return (
        <div className="md:hidden">
            <IconButton onClick={() => setOpen(true)} className="text-white">
                <LuMenu />
            </IconButton>

            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <div className="w-64 bg-blue-600 text-white h-full p-4">
                    <h2 className="text-2xl font-bold mb-6">Painel</h2>
                    <List>
                        {menuItems.map((item) => (
                            <ListItemButton
                                sx={{
                                    borderRadius: 2
                                }}
                                key={item}
                                onClick={() => setOpen(false)}
                            >
                                <ListItemText primary={item} />
                            </ListItemButton>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

function Sidebar() {
    const menuItems = ["Início", "Serviços", "Clientes", "Configurações"];

    return (
        <aside className="hidden md:flex flex-col w-64 h-screen bg-blue-600 text-white p-4">
            <h2 className="text-2xl font-bold mb-6">Painel</h2>
            <List>
                {menuItems.map((item) => (
                    <ListItemButton
                        key={item}
                        className="hover:bg-blue-500 rounded-lg"
                    >
                        <ListItemText primary={item} />
                    </ListItemButton>
                ))}
            </List>
        </aside>
    );
}
