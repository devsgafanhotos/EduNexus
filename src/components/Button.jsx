import "../index.css";
import { Link } from "react-router-dom";

export default function Button({
    children,
    type = "button",
    to,
    customClass = "",
    customStyle,
    handleClick,
}) {
    if (type === "link") {
        return (
            <Link
                to={to}
                className={
                    "text-(--color-text) bg-(--color-green) rounded-md p-2 cursor-pointer inline-block " +
                    customClass
                }
                style={customStyle}
            >
                
                {children}
            </Link>
        );
    } else {
        return (
            <button
                className={
                    "text-(--color-text) bg-(--color-green) rounded-md p-2 cursor-pointer " +
                    customClass
                }
                style={customStyle}
                onClick={handleClick}
            >
                {children}
            </button>
        );
    }
}