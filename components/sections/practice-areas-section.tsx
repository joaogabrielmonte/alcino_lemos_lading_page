import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const practiceAreas = [
  {
    title: "Direito Civil",
    description:
      "Atuação em obrigações, responsabilidade civil, conflitos patrimoniais, indenizações e demandas de natureza cível.",
    icon: Scale,
  },
  {
    title: "Direito Empresarial",
    description:
      "Suporte jurídico para empresas, análise contratual, prevenção de riscos e estruturação de decisões com maior segurança.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Consultoria Jurídica",
    description:
      "Orientação técnica e estratégica para pessoas físicas e jurídicas em situações que exigem clareza e previsibilidade.",
    icon: ShieldCheck,
  },
  {
    title: "Direito do Consumidor",
    description:
      "Defesa de direitos em cobranças indevidas, falhas na prestação de serviços, conflitos contratuais e reparação de danos.",
    icon: BadgeDollarSign,
  },
];

export function PracticeAreasSection() {
  return (
    <section id="areas" className="section-padding">
      <Container>
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b38a46]">
            Áreas de atuação
          </span>

          <h2 className="mt-4 text-4xl leading-tight text-[#19213c] sm:text-5xl">
            Atuação jurídica com profundidade técnica e leitura estratégica de cada caso.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#4f5b70]">
            O escritório atua com abordagem cuidadosa, análise responsável e
            condução jurídica orientada à solução mais adequada para cada demanda.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <Reveal
                key={area.title}
                delay={index * 0.08}
                className="rounded-[28px] border border-[rgba(25,33,60,0.08)] bg-white p-8 shadow-[0_12px_40px_rgba(25,33,60,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(25,33,60,0.10)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,241,170,0.55)] text-[#8f6f37]">
                  <Icon size={22} strokeWidth={1.9} />
                </div>

                <h3 className="mt-6 text-2xl text-[#19213c]">{area.title}</h3>

                <p className="mt-4 text-base leading-8 text-[#4f5b70]">
                  {area.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
