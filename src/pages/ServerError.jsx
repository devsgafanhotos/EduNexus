export default function ServerError() {
    return (
        <section
            className="h-[80vh] flex items-center justify-center flex-col gap-8"
        >
            <h1 className="text-5xl">ServerError</h1>
            <h2 className="text-4xl text-center">Falha na comunicação com o servidor!</h2>
        </section>
    );
}
