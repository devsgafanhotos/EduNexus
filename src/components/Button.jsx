import { Link } from "react-router-dom";

export default function Button({
    children,
    to,
    transparent,
    customClass = "",
    border,
    handleClick,
    disabled,
}) {
    const base = "cursor-pointer text-center p-2 rounded-[.70rem]";

    const transparentClass = transparent
        ? "bg-transparent text-(--color-text-primary)"
        : "bg-(--color-primary) text-(--color-bg-primary)";

    const classButton = `${base} ${transparentClass} ${customClass}`;
    const borderStyle = transparent && { border: border || "var(--border)" };

    if (to) {
        return (
            <Link
                to={to}
                className={classButton}
                style={borderStyle}
                onClick={handleClick}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={classButton}
            style={borderStyle}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
