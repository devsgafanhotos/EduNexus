export default function Card({ children, custonClass, custonStyle }) {
    const cadrStyles = !custonStyle ? { border: "var(--border)" } : custonClass;
    
    return (
        <div
            className={`${custonClass} bg-(--color-surface-soft) rounded-2xl p-2.5 sm:p-5`}
        >
            {children}
        </div>
    );
}
