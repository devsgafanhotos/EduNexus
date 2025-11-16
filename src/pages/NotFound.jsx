import Button from "../components/Button";

export default function NotFound() {
    return (
        <section className="flex flex-col min-h-[80vh] justify-center items-center gap-4">
            <h1 className="text-5xl">Page NotFound</h1>
            <h2 className="text-9xl">404</h2>
            <div className="flex gap-3 pt-10">
                <Button to={"/home"}>Go Home!</Button>
            </div>
        </section>
    );
}
