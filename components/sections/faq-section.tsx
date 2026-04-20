import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const faqItems = [
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "O primeiro contato serve para compreender o contexto do caso, identificar os objetivos do cliente e indicar os próximos passos com clareza.",
  },
  {
    question: "O escritório atende pessoas físicas e empresas?",
    answer:
      "Sim. O atendimento contempla demandas de pessoas físicas e jurídicas, sempre com leitura técnica e estratégia alinhada ao caso.",
  },
  {
    question: "O acompanhamento pode ser feito de forma remota?",
    answer:
      "Sim. Sempre que a demanda permitir, o atendimento pode ocorrer de forma remota, com a mesma organização e o mesmo cuidado na comunicação.",
  },
  {
    question: "Quais documentos devo separar para o primeiro contato?",
    answer:
      "Isso depende da natureza da demanda, mas o escritório orienta de forma objetiva quais documentos são necessários logo após a análise inicial.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-padding pt-0">
      <Container>
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b38a46]">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl leading-tight text-[#19213c] sm:text-5xl">
            Respostas objetivas para as dúvidas mais comuns antes do primeiro contato.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.06}>
              <details className="rounded-[28px] border border-[rgba(25,33,60,0.08)] bg-white p-6 shadow-[0_12px_40px_rgba(25,33,60,0.06)]">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#19213c]">
                  {item.question}
                </summary>

                <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f6779]">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
