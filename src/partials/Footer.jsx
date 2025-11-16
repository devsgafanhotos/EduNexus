import { Link } from "react-router-dom";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-(--color-text-muted) p-1 flex flex-col gap-3.5 justify-between">
            <div className="col-span-2 text-(--color-border) flex justify-center mb-6 mt-8">
                <hr className="w-10/12" />
            </div>

            <div className="col-span-2 mb-2 sm:pl-3 flex gap-2 flex-col">
                <h3 className="font-mono" style={{ letterSpacing: "2px" }}>
                    FUTURO +
                </h3>
                <p className="ml-2 text-justify">
                    Não guarde conhecimento, ele é livre compartilhe o seu e
                    veja ele se espalhar pelo mundo, " prof. Guanabara ".
                </p>
            </div>
            <div>
                <p className="text-[.91rem]">
                    <span className="">&copy;</span> Dev's Gafanhotos 🤓🖖 2025
                    All rights reserved.
                </p>
            </div>
            <div className="flex mt-2 justify-end gap-3">
                
                <Link to="https://linkedin.com/devsgafanhotos" target="blank">
                    <FaLinkedin className="text-2xl" />
                </Link>

                <Link to="https://discord.com/devsgafanhotos" target="blank">
                    <FaDiscord className="text-2xl" />
                </Link>

                <Link to="https://github.com/devsgafanhotos" target="blank">
                    <FaGithub className="text-2xl" />
                </Link>
            </div>
        </footer>
    );
}
