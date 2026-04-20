import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const processSteps = [
  {
    title: "Escuta inicial e diagnóstico",
    description:
      "Compreensão detalhada do cenário, dos objetivos do cliente e dos elementos essenciais do caso.",
  },
  {
    title: "Análise jurídica e riscos",
    description:
      "Avaliação técnica da situação, identificação de riscos e leitura estratégica das possibilidades jurídicas.",
  },
  {
    title: "Definição da estratégia",
    description:
      "Estruturação do caminho mais adequado para conduzir a demanda com segurança e coerência.",
  },
  {
    title: "Atuação e acompanhamento",
    description:
      "Condução do caso com responsabilidade, transparência e comunicação clara em cada etapa.",
  },
];

export function ProcessSection() {
  return (
    <section id="atendimento" className="section-padding pt-0">
      <Container>
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b38a46]">
            Método de atendimento
          </span>

          <h2 className="mt-4 text-4xl leading-tight text-[#19213c] sm:text-5xl">
            Um processo estruturado para oferecer segurança jurídica desde o primeiro contato.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.08}
              className="rounded-[28px] border border-[rgba(25,33,60,0.08)] bg-white p-8 shadow-[0_12px_40px_rgba(25,33,60,0.06)]"
            >
              <span className="text-sm font-semibold text-[#b38a46]">
                0{index + 1}
              </span>

              <h3 className="mt-4 text-2xl leading-tight text-[#19213c]">
                {step.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-[#4f5b70]">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
