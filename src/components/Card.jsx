export default function Card({ children, custonClass, custonStyle }) {
    const cadrStyles = custonStyle
        ? {}
        : {
              border: "var(--border)",
          };

    return (
        <section
            className={
                "bg-(--color-surface-soft) p-5 rounded-3xl gap-5 sm:p-8 " +
                custonClass
            }
            style={cadrStyles}
        >
            {children}
        </section>
    );
}
