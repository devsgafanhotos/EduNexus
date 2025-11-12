import { Link } from "react-router-dom";
import logo from "/img/logo.png";

import { useState, useEffect, useRef } from "react";
import { MdMenu, MdDarkMode, MdLightMode } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { LoaderBounce } from "../components/Modal/Loader";
import Modal from "../components/Modal/Modal";

export default function Header({ navOptionsMenu }) {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 768);
    const headerRef = useRef(null);
    const { appState } = useAuth();

    const menuMobile =
        window.innerWidth <= 768 && "fixed top-0 w-[290px] h-screen mt-[80px] pt-14";

    function handleTheme(theme) {
        headerRef.current.parentElement.parentElement.setAttribute(
            "data-theme",
            theme
        );

        localStorage.setItem("theme", theme);
    }

    //Efeito colateral para o controle do menu
    useEffect(() => {
        const handleMenu = () => {
            if (window.innerWidth >= 768) {
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

    useEffect(() => {
        if (showMenu && window.innerWidth <= 768) {
            headerRef.current.querySelector("nav").classList.toggle("translate-x-0");
            //document.getElementById().querySelector("nav").classList.toggle("translate-x-0")
        }
    }, [showMenu])

    //Efeito colateral para controlar o shadow do menu quando scrola

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
            className="bg-(--color-bg-primary-dark) sticky top-0 md:row-span-2 z-10"
            ref={headerRef}
        >
            <section className="bg-(--color-bg-primary-dark) pb-3.5 pt-3 pr-3 grid grid-cols-2 items-center md:items-start z-10 sticky top-0 md:h-screen md:grid-cols-1 gap-0">
                <div className="w-50 md:w-65">
                    <Link to={"/"}>
                        <img className="w-full" src={logo} alt="FUTURO+" />
                    </Link>
                </div>
                <div className="flex justify-end md:hidden">
                    <MdMenu
                        className="md:text-5xl text-4xl p-1 rounded-lg text-(--color-text-primary-white)"
                        style={{ border: "var(--border-dark)" }}
                        onClick={() => {
                            setShowMenu(!showMenu);
                        }}
                    />
                </div>
                {showMenu && (
                    <nav
                        className={`bg-(--color-bg-primary-dark) flex flex-col gap-3 col-span-2 p-2.5 pr-6 md:-mt-60 ${menuMobile}  -translate-x-80 md:translate-x-0 transition-transform duration-300`}
                    >
                        {navOptionsMenu}
                        <div
                            className="flex justify-center p-3 gap-2.5 md:gap-1 text-(--color-text-primary-white) rounded-2xl hover:bg-(--color-border)"
                            style={{ border: "var(--border-dark)" }}
                        >
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
            </section>
        </header>
    );
}

export function Title({ children, customClass }) {
    return <div className={`flex items-center gap-2 p-1 pl-3 ${customClass}`}>{children}</div>;
}

export function ItemMenu({ children, to, customClass }) {
    return (
        <Link
            to={to}
            className={`p-2 rounded-2xl text-(--color-text-primary-white) ${customClass} hover:bg-(--color-border)`}
            style={{ border: "var(--border-dark)" }}
        >
            <Title customClass={""}>
                {children}
            </Title>
        </Link>
    );
}
