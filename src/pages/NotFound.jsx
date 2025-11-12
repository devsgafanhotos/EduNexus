import SimpleLayout from "../Layout/SimpleLayout";
import Button from "../components/Button";

export default function NotFound() {
    return(
        <>
            <main className="flex items-center justify-center flex-col gap-6 col-span-2 h-[86vh]">
                <h1 className="text-5xl">Page NotFound</h1>
                <h2 className="text-9xl">404</h2>
                <div className="flex gap-3 pt-17">
                    <Button to={"/home"}>Go Home!</Button>
                </div>
            </main>
        </>
    )
}