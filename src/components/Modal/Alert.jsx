import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { DispatchAlert } from "../../context/AlertContext";

export default function Alert({
    children,
    alertType = "done",
    show,
    timeView = 6000,
}) {
    const dispatchAlert = useContext(DispatchAlert);
    const [visible, setVisible] = useState(false);

    // Atualiza o estado interno sempre que show mudar
    useEffect(() => {
        if (show) {
            setVisible(true);
            const timer = setTimeout(() => {
                handleClose(); // fecha automaticamente após o tempo definido
            }, timeView);
            return () => clearTimeout(timer);
        } else if (!show && visible) {
            // inicia a animação de saída quando show for false
            const timer = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [show, timeView]);

    const handleClose = () => {
        dispatchAlert({ type: "HIDE" });
    };

    const getAlertClass = () => {
        const base =
            "fixed w-[300px] flex gap-2 items-center rounded-2xl p-3 left-1/2 -translate-x-1/2 bottom-6 z-50 cursor-pointer shadow-lg transition-all duration-300";
        const visibility = show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5";

        let bg;
        switch (alertType) {
            case "warning":
                bg = "bg-(--color-primary-soft) text-(--color-text-secondary)";
                break;
            case "error":
                bg = "bg-red-500 text-white";
                break;
            default:
                bg = "bg-green-500 text-white";
        }

        return `${base} ${bg} ${visibility}`;
    };

    if (!visible && !show) return null;

    return (
        <div className={getAlertClass()}>
            <button onClick={handleClose} aria-label="Fechar alerta" className="cursor-pointer">
                <IoIosCloseCircleOutline className="text-2xl hover:scale-110 transition-transform" />
            </button>
            <p className="ml-2">{children}</p>
        </div>
    );
}
