import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoaderSpin() {
    return (
        <div className="p-2 w-15">
            <AiOutlineLoading3Quarters className="text-4xl text-(--color-primary) animate-spin" />
        </div>
    );
}

export function LoaderBounce() {
    const base = "bg-(--color-primary) w-4 h-4 rounded-full animate-bounce";
    return (
        <div className="flex items-center justify-center gap-3">
            <div
                className={`${base} [animation-duration:0.6s] [animation-delay:-0.2s]`}
            ></div>

            <div className={`${base} [animation-duration:0.6s] `}></div>

            <div
                className={`${base} [animation-duration:0.6s] [animation-delay:-0.2s]`}
            ></div>
        </div>
    );
}
