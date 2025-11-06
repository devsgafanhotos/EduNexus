import SimpleLayout from "../Layout/SimpleLayout";
import Button from "../components/Button";

export default function NotFound() {
    return(
        <>
            <section className="items-center justify-center flex-col gap-6" id="simpleMain">
                <h1 className="text-5xl">Page NotFound</h1>
                <h2 className="text-9xl">404</h2>
                <div className="flex gap-3 pt-17">
                    <Button to={"/home"}>Go Home!</Button>
                    <Button to={"/"}transparent={"true"}>Go Visit!</Button>
                </div>
            </section>
        </>
    )
}