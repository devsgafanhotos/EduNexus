import { motion } from "framer-motion";
import { SlCalender } from "react-icons/sl";

export default function RecomendacaoCard({ dados }) {
    const rec = dados.recomendacao;
    console.log(rec);

    if (!rec) {
        return (
            <div className="max-w-5xl mx-auto p-6 space-y-6">
                <section className="bg-(--color-bg-secondary) p-3 shadow rounded-xl">
                    <h2 className="flex justify-between font-semibold items-center text-2xl mb-4">
                        🔹{dados.titulo}
                        <div className="flex gap-1.5 text-(--color-text-muted) text-[.8rem]">
                            <SlCalender />
                            <p>{dados.data_cadastro}</p>
                        </div>
                    </h2>
                </section>
                <SectionCard titulo={"Sem conteúdo"}>
                    <p className="text-gray-700">
                        Recurso indisponível, tente novamente mais tarde!
                    </p>
                </SectionCard>
            </div>
        );
    }
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <section className="bg-(--color-bg-secondary) p-3 shadow rounded-xl">
                <h2 className="flex justify-between font-semibold items-center text-2xl mb-4">
                    🔹{dados.titulo}
                    <div className="flex gap-1.5 text-(--color-text-muted) text-[.8rem]">
                        <SlCalender />
                        <p>{dados.data_cadastro}</p>
                    </div>
                </h2>
            </section>

            {/* Resumo Geral */}
            <SectionCard titulo={rec.resumo_geral.titulo}>
                <p className="text-gray-700">{rec.resumo_geral.descricao}</p>
            </SectionCard>

            {/* Perfil do Usuário */}
            <SectionCard titulo={rec.perfil_usuario.titulo}>
                <p className="text-gray-700">{rec.perfil_usuario.dados}</p>
            </SectionCard>

            {/* Vagas */}
            <SectionCard
                titulo={
                    rec.resultados.vagas.titul || "Vagas Encontradas na Região"
                }
            >
                <VagasDeEmprego rec={rec} />
            </SectionCard>

            {/* Dados Socioeconómicos */}
            <SectionCard titulo={rec.resultados.dados_socioeconomicos.titulo}>
                <p className="text-gray-700 font-medium mb-3">
                    Região: {rec.resultados.dados_socioeconomicos.regiao}
                </p>
                <ul className="space-y-2 text-gray-700">
                    <li>
                        Desemprego urbano:{" "}
                        {
                            rec.resultados.dados_socioeconomicos.indicadores
                                .taxa_desemprego
                        }{" "}
                    </li>
                    <li>
                        pib{" "}
                        {rec.resultados.dados_socioeconomicos.indicadores.pib}
                    </li>

                    <li>
                        taxa_crescimento_economico{" "}
                        {
                            rec.resultados.dados_socioeconomicos.indicadores
                                .taxa_crescimento_economico
                        }
                    </li>

                    <li>
                        populacao{" "}
                        {
                            rec.resultados.dados_socioeconomicos.indicadores
                                .populacao
                        }
                    </li>

                    <li>
                        inflacao{" "}
                        {
                            rec.resultados.dados_socioeconomicos.indicadores
                                .inflacao
                        }
                    </li>

                    <li>
                        custo_vida_indice{" "}
                        {
                            rec.resultados.dados_socioeconomicos.indicadores
                                .custo_vida_indice
                        }
                    </li>

                    <li>
                        taxa_emprego{" "}
                        {
                            rec.resultados.dados_socioeconomicos.indicadores
                                .taxa_emprego
                        }
                    </li>

                    <li>
                        <strong>Setores em alta:</strong>
                        <ul className="list-disc ml-6">
                            {rec.resultados.dados_socioeconomicos.indicadores.setores_em_alta.map(
                                (s, i) => (
                                    <li key={i}>{s}</li>
                                )
                            )}
                        </ul>
                    </li>
                </ul>
            </SectionCard>

            {/* Cursos Recomendados */}
            <SectionCard titulo={rec.resultados.cursos_recomendados.titulo}>
                <div className="space-y-4">
                    {rec.resultados.cursos_recomendados.lista.map(
                        (curso, idx) => (
                            <div
                                key={idx}
                                className="bg-(--color-bg-primary) p-4 rounded-xl shadow-sm"
                                style={{ border: "var(--border)" }}
                            >
                                <h4 className="font-semibold text-gray-800">
                                    {curso.curso}
                                </h4>
                                <p className="text-gray-600">
                                    {curso.entidade}
                                </p>
                                <p className="text-gray-600">
                                    Duração: {curso.duracao} — {curso.tipo}
                                </p>
                                <a
                                    href={
                                        curso.link ||
                                        "https://www.linkedin.com/devsgafanhotos?_l=en_US"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 px-4 py-2 rounded-lg bg-(--color-primary) text-white text-sm"
                                >
                                    Ver
                                </a>
                            </div>
                        )
                    )}
                </div>
            </SectionCard>

            {/* Análise de Perfil */}
            <SectionCard titulo={rec.resultados.analise_de_perfil.titulo}>
                <p className="text-gray-700">
                    <strong>Compatibilidade:</strong>{" "}
                    {rec.resultados.analise_de_perfil.compatibilidade}
                </p>

                <div className="mt-3">
                    <p className="font-semibold text-gray-800">
                        Pontos fortes:
                    </p>
                    <ul className="list-disc ml-6 text-gray-700">
                        {rec.resultados.analise_de_perfil.pontos_fortes.map(
                            (p, i) => (
                                <li key={i}>{p}</li>
                            )
                        )}
                    </ul>
                </div>

                <div className="mt-3">
                    <p className="font-semibold text-gray-800">
                        Pontos a melhorar:
                    </p>
                    <ul className="list-disc ml-6 text-gray-700">
                        {rec.resultados.analise_de_perfil.pontos_a_melhorar.map(
                            (p, i) => (
                                <li key={i}>{p}</li>
                            )
                        )}
                    </ul>
                </div>
            </SectionCard>

            {/* Recomendação Final */}
            <SectionCard titulo={rec.recomendacao_final.titulo}>
                <p className="text-gray-700">{rec.recomendacao_final.texto}</p>
            </SectionCard>
        </div>
    );
}

function SectionCard({ titulo, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-(--color-bg-secondary) rounded-2xl shadow p-3 sm:p-6"
        >
            <h2 className="text-xl font-bold text-(--color-primary) mb-3">
                {titulo}
            </h2>
            {children}
        </motion.div>
    );
}

export function VagasDeEmprego({ rec }) {
    return (
        <>
            <p className="text-sm text-gray-500 mb-3">
                Total de vagas: {rec.resultados.vagas.quantidade}
            </p>

            <div className="space-y-4">
                {rec.resultados.vagas.lista.map((vaga, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="p-4 rounded-xl bg-(--color-bg-primary) shadow-md border border-gray-200"
                        style={{ border: "var(--border)" }}
                    >
                        <h4 className="font-semibold text-lg">
                            {vaga.nome_vaga}
                        </h4>
                        <p className="text-gray-600">
                            {vaga.empresa} — {vaga.localizacao}
                        </p>

                        <p className="mt-2 text-gray-700">
                            <span className="font-semibold">Requisitos: </span>
                            {vaga.requisitos}
                        </p>

                        <p className="mt-2 font-medium text-(--color-accent)">
                            Salário: {vaga.salario_aproximado || "Indisponível"}
                        </p>

                        <a
                            href={
                                vaga.link_candidatura ||
                                "https://www.linkedin.com/devsgafanhotos?_l=en_US"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 px-4 py-2 rounded-lg bg-(--color-primary) text-white text-sm"
                        >
                            Candidatar-se
                        </a>
                    </motion.div>
                ))}
            </div>
        </>
    );
}
