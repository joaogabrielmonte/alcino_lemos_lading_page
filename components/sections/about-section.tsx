import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding pt-0">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="rounded-[32px] border border-[rgba(179,138,70,0.16)] bg-[#19213c] p-8 shadow-[0_20px_70px_rgba(25,33,60,0.16)] sm:p-10 lg:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9c88e]">
              Escritório
            </span>

            <h2 className="mt-5 text-3xl leading-tight text-white sm:text-4xl">
              Advocacia orientada por confiança, método e responsabilidade.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#eef2f7]">
              Um atendimento jurídico consistente exige escuta qualificada,
              leitura estratégica do cenário e condução segura ao longo de todo o caso.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[rgba(255,241,170,0.14)] bg-[rgba(255,255,255,0.04)] p-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#d9c88e]">
                  Base
                </span>
                <p className="mt-2 text-sm text-white">Brasília - DF</p>
              </div>

              <div className="rounded-2xl border border-[rgba(255,241,170,0.14)] bg-[rgba(255,255,255,0.04)] p-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#d9c88e]">
                  Atuação
                </span>
                <p className="mt-2 text-sm text-white">
                  Pessoas físicas e empresas
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal
              delay={0.08}
              className="overflow-hidden rounded-[32px] border border-[rgba(25,33,60,0.08)] bg-white shadow-[0_12px_40px_rgba(25,33,60,0.06)]"
            >
              <Image
                src="/images/about-portrait.jpg"
                alt="Retrato institucional do advogado Alcino Lemos"
                width={1200}
                height={1600}
                className="h-full w-full object-cover"
              />
            </Reveal>

            <Reveal
              delay={0.16}
              className="rounded-[32px] border border-[rgba(25,33,60,0.08)] bg-white p-8 shadow-[0_12px_40px_rgba(25,33,60,0.06)]"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b38a46]">
                Sobre o escritório
              </span>

              <h2 className="mt-4 text-4xl leading-tight text-[#19213c] sm:text-5xl">
                Solidez institucional aliada a um atendimento próximo e estratégico.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-[#4f5b70]">
                <p>
                  O escritório Alcino Lemos Advocacia atua com foco em análise
                  jurídica consistente, comunicação clara e condução responsável
                  de demandas que exigem atenção técnica e postura firme.
                </p>

                <p>
                  Cada caso é tratado a partir da realidade específica do
                  cliente, com estrutura técnica para orientar decisões e
                  construir caminhos juridicamente seguros.
                </p>

                <p>
                  A proposta do escritório é unir precisão jurídica, postura
                  institucional e atendimento personalizado em todas as etapas
                  da relação com o cliente.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
