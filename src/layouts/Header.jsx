import logo from "/logoDark.png";
import { useContext, useState, useEffect } from "react";
import { AppRefContext } from "../App.context";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Header({ children }) {
    const appRef = useContext(AppRefContext);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={
                    "bg-(--color-bg) z-50 h-23 pl-9 pr-4 sticky top-0 flex justify-between items-center"
                }
                style={{
                    boxShadow: isScrolled ? "var(--shadow-soft)" : "none",
                    borderBottom: isScrolled ? "1px solid var(--color-neutral)": ""
                }}
            >
                <h1>
                    <img className="w-44" src={logo} alt="EduNexus" />
                </h1>
                <nav>
                    <ul className={"flex items-center  gap-1 p-2"}>
                        {children}
                        <li className="min-w-8 pl-6 flex flex-col gap-1.5 items-center">
                            <MdOutlineDarkMode
                                className="cursor-pointer text-2xl"
                                onClick={() => {
                                    appRef.current.parentElement.setAttribute(
                                        "data-theme",
                                        "dark"
                                    );
                                }}
                            />
                            <MdLightMode
                                className="cursor-pointer text-2xl"
                                onClick={() => {
                                    appRef.current.parentElement.setAttribute(
                                        "data-theme",
                                        "ligth"
                                    );
                                }}
                            />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
