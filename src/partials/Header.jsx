import { Link } from "react-router-dom";
import logo from "/img/logo.png";

import { useState, useEffect, useRef } from "react";
import { MdMenu, MdDarkMode, MdLightMode } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { LoaderBounce } from "../components/Modal/Loader";
export default function Header({ navOptionsMenu }) {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 640);
    const headerRef = useRef(null);
    const { appState } = useAuth();

    useEffect(() => {
        const handleMenu = () => {
            if (window.innerWidth >= 640) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
        };

        headerRef.current?.parentElement.parentElement.setAttribute(
            "data-theme",
            localStorage.getItem("theme")
        );

        window.addEventListener("load", handleMenu);
        window.addEventListener("resize", handleMenu);

        return () => {
            window.removeEventListener("load", handleMenu);
            window.removeEventListener("resize", handleMenu);
        };
    }, []);

    function handleTheme(theme) {
        headerRef.current.parentElement.parentElement.setAttribute(
            "data-theme",
            theme
        );

        localStorage.setItem("theme", theme);
    }
    
    if (appState === "loading" || !logo) {
        return (
            <>
                <section
                    className="flex items-center justify-center p-6"
                    style={{ borderBottom: "1px solid #ffffff31" }}
                >
                    <LoaderBounce />
                </section>
            </>
        );
    }

    return (
        <header
            className="bg-(--color-bg-primary-dark) w-screen pb-3.5 pt-3 pr-6 fixed top-0 grid grid-cols-2 items-center z-10"
            ref={headerRef}
        >
            <div className="w-65">
                <Link to={"/"}>
                    <img className="w-full" src={logo} alt="FUTURO+" />
                </Link>
            </div>

            <div className="flex justify-end sm:hidden">
                <MdMenu
                    className="text-[3rem] p-2 rounded-[.70rem] text-(--color-text-primary-white)"
                    style={{ border: "var(--border-dark)" }}
                    onClick={() => {
                        setShowMenu(!showMenu);
                    }}
                />
            </div>

            {showMenu && (
                <nav className="col-span-2 flex gap-2 items-center flex-col sm:col-span-1  sm:flex-row  sm:justify-end pl-3 pt-5 sm:pt-0 pb-3 sm:pb-0">
                    {navOptionsMenu}
                    <div className="flex sm:flex-col p-2 gap-2.5 sm:gap-1 text-(--color-text-primary-white)">
                        <MdDarkMode
                            className="text-xl cursor-pointer"
                            onClick={() => {
                                handleTheme("light");
                            }}
                        />
                        <MdLightMode
                            className="text-xl cursor-pointer"
                            onClick={() => {
                                handleTheme("dark");
                            }}
                        />
                    </div>
                </nav>
            )}
        </header>
    );
}
