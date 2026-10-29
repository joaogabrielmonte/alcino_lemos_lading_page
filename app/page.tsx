import Link from "next/link";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Reveal } from "@/components/ui/reveal";
import { TrustSection } from "@/components/sections/trust-section";
import { Container } from "@/components/ui/container";

const routeHighlights = [
  {
    title: "Áreas de Atuação",
    linkLabel: "Conhecer as áreas de atuação",
    description:
      "Conheça os principais campos de atuação do escritório e encontre o suporte jurídico adequado para a sua demanda.",
    href: "/areas-de-atuacao",
  },
  {
    title: "Sobre o Escritório",
    linkLabel: "Conhecer o escritório",
    description:
      "Entenda a forma de trabalho, a postura profissional e os valores que orientam cada atendimento.",
    href: "/sobre",
  },
  {
    title: "Método de Atendimento",
    linkLabel: "Entender o atendimento",
    description:
      "Veja como o atendimento é conduzido, desde a análise inicial até o acompanhamento de cada etapa.",
    href: "/atendimento",
  },
  {
    title: "Contato",
    linkLabel: "Entrar em contato",
    description:
      "Fale com o escritório por WhatsApp ou e-mail e receba uma orientação inicial com clareza.",
    href: "/contato",
  },
];

export default function HomePage() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <HeroSection />
      <TrustSection />

      <section className="section-padding bg-[#f7f4ef]">
        <Container>
          <Reveal className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b38a46]">
              Atendimento Personalizado
            </span>

            <h2 className="mt-4 text-4xl leading-tight text-[#19213c] sm:text-5xl">
              Atendimento jurídico com clareza, estratégia e proximidade em cada etapa.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f6779]">
              O escritório reúne informações essenciais para facilitar o primeiro
              contato e orientar cada cliente com objetividade desde o início.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {routeHighlights.map((item, index) => (
              <Reveal
                key={item.href}
                delay={index * 0.08}
                className="rounded-[28px] border border-[rgba(25,33,60,0.08)] bg-white p-8 shadow-[0_12px_40px_rgba(25,33,60,0.06)]"
              >
                <h3 className="text-2xl text-[#19213c]">{item.title}</h3>

                <p className="mt-4 text-base leading-8 text-[#5f6779]">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[#76551f] transition hover:text-[#19213c]"
                >
                  {item.linkLabel}
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </main>
  );
}
