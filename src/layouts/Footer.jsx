import { Link } from "react-router-dom";
import logo from "/logoDark.png";
import {
    FaFacebook,
    FaLinkedin,
    FaYoutube,
    FaInstagram,
    FaDiscord,
    FaGithub,
} from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer>
                <hr className="w-10/12 m-auto mb-2.5 bg-(--color-neutral) text-(--color-neutral)" />
                <section className={"p-5 md:p-10 min-h-40"}>
                    <div className="pt-7 grid grid-cols-1 md:grid-cols-3 justify-around flex-wrap">
                        <div>
                            <h2 className="mb-3">
                                <img className="w-36" src={logo} alt="EduNexus" />
                            </h2>
                            <ul className="text-left ml-5 mb-8">
                                <li>1 Opção de Emprego disponível</li>
                                <li>2 Opção de Emprego disponível</li>
                                <li>3 Opção de Emprego disponível</li>
                                <li>4 Opção de Emprego disponível</li>
                                <li>5 Opção de Emprego disponível</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl text-left font-bold mb-3">
                                Empregos Disponiveis
                            </h2>
                            <ul className="text-left ml-5 mb-8">
                                <li>1 Opção de Emprego disponível</li>
                                <li>2 Opção de Emprego disponível</li>
                                <li>3 Opção de Emprego disponível</li>
                                <li>4 Opção de Emprego disponível</li>
                                <li>5 Opção de Emprego disponível</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="text-2xl text-left font-bold mb-3">
                                Profissões em alta
                            </h2>
                            <ul className="text-left ml-5 mb-8">
                                <li>1 Opção de Emprego disponível</li>
                                <li>2 Opção de Emprego disponível</li>
                                <li>3 Opção de Emprego disponível</li>
                                <li>4 Opção de Emprego disponível</li>
                                <li>5 Opção de Emprego disponível</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="md:m-16 md:mt-2 md:mb-2 md:p-4 bg-(--color-bg-soft) rounded-md flex md:justify-between items-center flex-wrap">
                    <div className="flex justify-center gap-3 p-3">
                        <Link to="https://facebook.com" target="blank">
                            <FaFacebook className="text-3xl" />
                        </Link>

                        <Link to="https://linkedin.com" target="blank">
                            <FaLinkedin className="text-3xl" />
                        </Link>

                        <Link to="https://discord.com" target="blank">
                            <FaDiscord className="text-3xl" />
                        </Link>

                        <Link to="https://github.com" target="blank">
                            <FaGithub className="text-3xl" />
                        </Link>

                        <Link to="https://youtube.com" target="blank">
                            <FaYoutube className="text-3xl" />
                        </Link>

                        <Link to="https://instagram.com" target="blank">
                            <FaInstagram className="text-3xl" />
                        </Link>
                    </div>
                    <p className="w-screen md:w-auto flex gap-2 justify-end items-center">
                        <span className="mt-1">&copy;</span> Dev's Gafanhotos 🤓🖖 2025 All rights reserved.
                    </p>
                </section>
            </footer>
        </>
    );
}
