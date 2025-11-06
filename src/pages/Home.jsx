import PrincipalLayout from "../layouts/PrincipalLayout";
import escritorioHome from "/img-escritorio-home.svg";

export default function Home() {
    return (
        <>
            <PrincipalLayout>
                <section className="h-10/12">
                    <h1 className="text-5xl font-light text-(--color-primary) text-left">
                        Onde a aprendizagem encontra o mundo real!
                    </h1>
                </section>
                <section className="h-10/12 pr-9 flex items-center">
                    <img src={escritorioHome} alt="" />
                </section>
            </PrincipalLayout>
        </>
    );
}
