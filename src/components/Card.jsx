export default function Card({ children, custonClass, custonStyle }) {
    const cadrStyles =  { border: "var(--border)" };
    
    return (
        <div
            className={`${custonClass} bg-(--color-bg-secondary) rounded-2xl m-2 p-4 sm:p-5`}
            style={cadrStyles}
        >
            {children}
        </div>
    );
}
