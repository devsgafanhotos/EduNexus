import { Navigate } from "react-router-dom";

import Button from "../components/Button";
import Card from "../components/Card";
import Loader from "../components/Modal/Loader";
import { useAuth } from "../context/AuthContext";
import PrincipalLayout from "../Layout/PrincipalLayout";

export default function LandingPage({}) {
    const { user, appState } = useAuth();

    if (user) {
        return <Navigate to="/" replace />;
    }

    if (appState === "loading") {
        return (
            <section className="h-screen flex items-center justify-center flex-col gap-8">
                <Loader />
            </section>
        );
    }

    return (
        <PrincipalLayout>
            <main className="min-h-lvh grid gap-10 mb-8">
                <Card
                    custonClass={
                        "grid items-center md:grid-cols-2 ml-5 mr-5 mt-5 lg:ml-18 lg:mr-18"
                    }
                >
                    <div className="grid gap-5">
                        <div
                            className="bg-(--color-primary-soft) text-(--color-text-secondary) font-bold w-[180px] text-center text-sm p-1 rounded-4xl"
                            style={{ border: "var(--border)" }}
                        >
                            Caminhos personalisados
                        </div>
                        <h1 className="text-4xl font-semibold sm:max-w-[500px] sm:text-5xl">
                            Sua trilha de aprendizado conectada às melhores
                            oportunidades
                        </h1>
                        <p className="text-(--color-text-muted)">
                            Combine habilidades, cursos e vagas em um só lugar.
                            Receba recomendações curriculares inteligentes e
                            encontre a oportunidade ideal para transformar sua
                            carreira com insights em tempo real do mercado.
                        </p>
                        <div className="h-[50px] flex gap-4 p-1 justify-center">
                            <Button
                                to={"/candidato/login"}
                                customClass="pl-4 pr-4 shadow-(--shadow-strong)"
                            >
                                Começar
                            </Button>
                            <Button
                                to={"/candidato/recomendacao"}
                                customClass="pl-3 pr-3"
                                transparent={true}
                            >
                                Ver como funciona
                            </Button>
                        </div>
                    </div>

                    <aside className="rounded-3xl overflow-hidden">
                        <img
                            className="rounded-3xl"
                            src="/img/fundo.png"
                            alt="Fundo"
                        />
                    </aside>
                </Card>

                <section className="grid gap-4 lg:grid-cols-3 mt-4 ml-5 mr-5 lg:ml-18 lg:mr-18">
                    <div className="flex justify-between lg:col-span-3 mb-4">
                        <h2 className="text-2xl font-semibold">
                            O que você encontra aqui?
                        </h2>
                        <p className="hidden md:block max-w-[500px]">
                            Uma plataforma completa para evoluir suas
                            competências, planejar sua jornada de aprendizado e
                            ser encontrado pelas melhores empresas.
                        </p>
                    </div>
                    <Card custonClass={"flex rounded-xl items-center"}>
                        <div
                            className="w-12 bg-(--color-accent) text-2xl font-bold p-1 rounded-[.70rem]"
                            style={{ border: "var(--border)" }}
                        >
                            RC
                        </div>
                        <aside>
                            <h3 className="text-2xl font-semibold">
                                Recomendação
                            </h3>
                            <p className="text-(--color-text-muted)">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempore sit eum omnis
                            </p>
                        </aside>
                    </Card>
                    <Card custonClass={"flex rounded-xl items-center"}>
                        <div
                            className="w-12 bg-(--color-text-muted) text-2xl font-bold p-1 rounded-[.70rem]"
                            style={{ border: "var(--border)" }}
                        >
                            BV
                        </div>
                        <aside>
                            <h3 className="text-2xl font-semibold">
                                Recomendação
                            </h3>
                            <p className="text-(--color-text-muted)">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempore sit eum omnis
                            </p>
                        </aside>
                    </Card>
                    <Card custonClass={"flex rounded-xl items-center"}>
                        <div
                            className="w-12 bg-(--color-info) text-2xl font-bold p-1 rounded-[.70rem]"
                            style={{ border: "var(--border)" }}
                        >
                            AC
                        </div>
                        <aside>
                            <h3 className="text-2xl font-semibold">
                                Recomendação
                            </h3>
                            <p className="text-(--color-text-muted)">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempore sit eum omnis
                            </p>
                        </aside>
                    </Card>
                </section>

                <section className="grid gap-4 ml-5 mr-5 lg:ml-18 lg:mr-18">
                    <Card custonClass={"flex flex-col rounded-xl"}>
                        <h3 className="text-2xl font-semibold">Recomendação</h3>
                        <p className="text-(--color-text-muted)">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempore sit eum omnis
                        </p>
                        <div>
                            <Button customClass="pl-4 pr-4">
                                Fale conosco
                            </Button>
                        </div>
                    </Card>
                </section>
            </main>
        </PrincipalLayout>
    );
}
