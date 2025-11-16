import { Navigate } from "react-router-dom";

import Button from "../components/Button";
import Card from "../components/Card";
import { LoaderBounce } from "../components/Modal/Loader";
import { useAuth } from "../context/AuthContext";

export default function LandingPage({}) {
    const { user, appState } = useAuth();

    if (user) {
        return <Navigate to="/" replace />;
    }

    if (appState === "loading") {
        return (
            <section className="h-[90vh] flex items-center justify-center col-span-2">
                <LoaderBounce />
            </section>
        );
    }

    return (
        <>
            <Card
                custonClass={
                    "grid items-center md:ml-5 md:mr-5 md:mt-5 gap-5 p-3 lg:ml-10 lg:mr-10 lg:grid-cols-2"
                }
            >
                <div className="grid gap-5">
                    <div
                        className="bg-(--color-primary) text-(--color-text-primary) font-bold w-[180px] text-center text-sm p-1 rounded-4xl animate-pulse z-3"
                        style={{ border: "var(--border)" }}
                    >
                        Caminhos personalisados
                    </div>
                    <h1 className="text-4xl font-semibold sm:max-w-[500px] sm:text-5xl">
                        Sua trilha de aprendizado conectada às melhores
                        oportunidades
                    </h1>
                    <Text>
                        Combine habilidades, cursos e vagas em um só lugar.
                        Receba recomendações curriculares inteligentes e
                        encontre a oportunidade ideal para transformar sua
                        carreira com insights em tempo real do mercado.
                    </Text>
                    <div className="h-[50px] flex gap-4 p-1 justify-center">
                        <Button
                            to={"/candidato/login"}
                            customClass="pl-4 pr-4 shadow-(--shadow-strong) animate-bounce"
                        >
                            Começar
                        </Button>
                        <Button customClass="pl-3 pr-3" transparent={true}>
                            Ver como funciona
                        </Button>
                    </div>
                </div>

                <aside className="rounded-3xl overflow-hidden">
                    <img
                        className="rounded-3xl m-auto"
                        src="/img/fundo.png"
                        alt="Fundo"
                    />
                </aside>
            </Card>

            <section className="grid gap-4 xl:grid-cols-3 mb-4 mt-4 md:ml-5 md:mr-5 lg:ml-10 lg:mr-10">
                <div className="flex gap-3 justify-between xl:col-span-3 mt-4">
                    <h2 className="text-2xl font-semibold">
                        O que você encontra aqui?
                    </h2>
                    <Text custonClass={"hidden xl:block max-w-[500px]"}>
                        Uma plataforma completa para evoluir suas competências,
                        planejar sua jornada de aprendizado e ser encontrado
                        pelas melhores empresas.
                    </Text>
                </div>
                <CardLearn>
                    <div
                        className={`w-12 bg-(--color-accent) text-2xl text-center font-bold p-1 rounded-[.70rem]`}
                        style={{ border: "var(--border)" }}
                    >
                        RC
                    </div>
                    <aside>
                        <TitleSection>Recomendação Curricular</TitleSection>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempore sit eum omnis
                        </Text>
                    </aside>
                </CardLearn>
                <CardLearn>
                    <div
                        className={`w-12 bg-(--color-text-muted) text-2xl text-center font-bold p-1 rounded-[.70rem]`}
                        style={{ border: "var(--border)" }}
                    >
                        BV
                    </div>
                    <aside>
                        <TitleSection>Busca de Vagas</TitleSection>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempore sit eum omnis
                        </Text>
                    </aside>
                </CardLearn>
                <CardLearn>
                    <div
                        className={`w-12 bg-(--color-info) text-2xl text-center font-bold p-1 rounded-[.70rem]`}
                        style={{ border: "var(--border)" }}
                    >
                        AC
                    </div>
                    <aside>
                        <TitleSection>Avaliação de Competência</TitleSection>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempore sit eum omnis
                        </Text>
                    </aside>
                </CardLearn>
            </section>

            <section className="grid gap-4 md:ml-5 md:mr-5 lg:ml-10 lg:mr-10">
                <Card custonClass={"flex gap-2 flex-col rounded-xl"}>
                    <TitleSection>
                        Vamos contruir passo a passo a tua carreira.
                    </TitleSection>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore sit eum omnis
                    </Text>
                    <div>
                        <Button customClass="pl-4 pr-4">Fale conosco</Button>
                    </div>
                </Card>
            </section>
        </>
    );
}

export function Text({ children, custonClass }) {
    return (
        <p className={`text-(--color-text-muted) ${custonClass}`}>{children}</p>
    );
}

export function TitleSection({ children, custonClass }) {
    return (
        <h3 className={`text-xl font-semibold ${custonClass}`}>{children}</h3>
    );
}

function Icone({ text, bgColor }) {
    return <div>{text}</div>;
}

function CardLearn({ children }) {
    return (
        <Card custonClass={`flex gap-2 rounded-xl items-center`}>
            {children}
        </Card>
    );
}
