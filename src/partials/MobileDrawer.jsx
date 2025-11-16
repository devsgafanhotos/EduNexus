import {
    Drawer,
    IconButton,
} from "@mui/material";

import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

import logo from "/img/logo.png";
import { LogoFututePlus, OptionsMenu } from "./Header";

export default function MobileDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <IconButton onClick={() => setOpen(true)}>
                <LuMenu className="text-white" />
            </IconButton>

            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <div className="w-64 bg-(--color-bg-primary-dark) text-white h-full p-4">
                    <LogoFututePlus customClass={"w-60 mb-6 -ml-4 -mt-4"} />
                    <OptionsMenu />
                </div>
            </Drawer>
        </div>
    );
}
